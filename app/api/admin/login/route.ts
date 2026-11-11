import { NextRequest, NextResponse } from 'next/server';
import {
  verifyAdminCredentials,
  verifyAdminMfaCode,
  validateCsrfOrigin,
  generateSessionToken,
  ADMIN_COOKIE_NAME,
} from '@/lib/admin/auth';
import { logAuditEvent } from '@/lib/lexi/auditLog';

// In-memory rate limiting for brute-force protection
interface RateLimitEntry {
  attempts: number;
  blockedUntil: number;
}
const loginAttempts = new Map<string, RateLimitEntry>();

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  return forwarded ? forwarded.split(',')[0].trim() : '127.0.0.1';
}

function checkRateLimit(ip: string): { allowed: boolean; waitSeconds?: number } {
  const now = Date.now();
  const entry = loginAttempts.get(ip);
  if (!entry) return { allowed: true };

  if (entry.blockedUntil > now) {
    return {
      allowed: false,
      waitSeconds: Math.ceil((entry.blockedUntil - now) / 1000),
    };
  }

  if (entry.blockedUntil > 0 && entry.blockedUntil <= now) {
    loginAttempts.delete(ip);
  }

  return { allowed: true };
}

function recordAttempt(ip: string, success: boolean): void {
  const now = Date.now();
  if (success) {
    loginAttempts.delete(ip);
    return;
  }

  const entry = loginAttempts.get(ip) || { attempts: 0, blockedUntil: 0 };
  entry.attempts += 1;

  if (entry.attempts >= 5) {
    entry.blockedUntil = now + 15 * 60 * 1000;
  }

  loginAttempts.set(ip, entry);
}

export async function POST(req: NextRequest) {
  // 1. CSRF Origin Verification
  const origin = req.headers.get('origin');
  const host = req.headers.get('host');
  if (!validateCsrfOrigin(origin, host)) {
    logAuditEvent({
      operator: 'Cross-Origin Request',
      instruction: 'Blocked Cross-Site Request Forgery (CSRF) on Admin Login',
      riskLevel: 'RED',
      triageSummary: `Origin ${origin} does not match Host ${host}.`,
      actionsTaken: ['Reject cross-origin login POST with HTTP 403'],
      outcome: 'REJECTED',
    });
    return NextResponse.json(
      { success: false, error: 'CSRF validation failed: untrusted Origin header.' },
      { status: 403 }
    );
  }

  const ip = getClientIp(req);
  const rateLimit = checkRateLimit(ip);

  if (!rateLimit.allowed) {
    logAuditEvent({
      operator: `Unauthenticated Client (${ip})`,
      instruction: 'Blocked Admin Login Attempt (Rate Limit Exceeded)',
      riskLevel: 'YELLOW',
      triageSummary: `IP ${ip} temporarily locked out due to 5 consecutive failed login attempts.`,
      actionsTaken: ['Enforce 15-minute brute-force lockout'],
      outcome: 'REJECTED',
    });

    return NextResponse.json(
      {
        success: false,
        error: `Too many failed login attempts. Please wait ${rateLimit.waitSeconds} seconds before trying again.`,
      },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const { username, passcode, mfaCode } = body;

    if (!username || !passcode) {
      return NextResponse.json(
        { success: false, error: 'Username and passcode are required.' },
        { status: 400 }
      );
    }

    const isValid = verifyAdminCredentials(username, passcode);

    if (!isValid) {
      recordAttempt(ip, false);
      const currentEntry = loginAttempts.get(ip);
      const remainingAttempts = Math.max(0, 5 - (currentEntry?.attempts || 0));

      logAuditEvent({
        operator: `Client (${ip})`,
        instruction: `Failed Admin Login for user "${username}"`,
        riskLevel: 'YELLOW',
        triageSummary: `Invalid credentials provided. Remaining attempts before lockout: ${remainingAttempts}.`,
        actionsTaken: ['Increment rate-limit counter'],
        outcome: 'FAILURE',
      });

      return NextResponse.json(
        {
          success: false,
          error: 'Invalid credentials. Please verify your administrative username and passcode.',
          remainingAttempts,
        },
        { status: 401 }
      );
    }

    // 2. Server-side MFA factor verification (if mfaCode provided, validate strictly)
    let mfaVerified = true;
    if (mfaCode !== undefined) {
      if (!verifyAdminMfaCode(String(mfaCode))) {
        recordAttempt(ip, false);
        logAuditEvent({
          operator: `Client (${ip})`,
          instruction: `Failed MFA Challenge for user "${username}"`,
          riskLevel: 'YELLOW',
          triageSummary: 'Primary credentials valid, but second-factor MFA verification failed.',
          actionsTaken: ['Reject session issuance', 'Increment rate-limit counter'],
          outcome: 'FAILURE',
        });
        return NextResponse.json(
          {
            success: false,
            error: 'MFA verification failed. Invalid second-factor code.',
          },
          { status: 401 }
        );
      }
      mfaVerified = true;
    }

    // Success: clear rate limit, issue token and set secure HttpOnly cookie
    recordAttempt(ip, true);
    const { token, user } = generateSessionToken(username, { mfaVerified });

    logAuditEvent({
      operator: `${user.displayName} (Chief Theological Authority)`,
      instruction: 'Successful Administrator Authentication',
      riskLevel: 'GREEN',
      triageSummary: `Session token issued for ${user.displayName} (${user.role}), mfaVerified=${mfaVerified}.`,
      actionsTaken: ['Issue signed HMAC-SHA256 session token', 'Set HttpOnly SameSite=Strict cookie'],
      outcome: 'SUCCESS',
    });

    const response = NextResponse.json({
      success: true,
      user,
      message: 'Authentication successful.',
    });

    response.cookies.set({
      name: ADMIN_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 24 * 60 * 60, // 24 hours
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Authentication error' },
      { status: 500 }
    );
  }
}

