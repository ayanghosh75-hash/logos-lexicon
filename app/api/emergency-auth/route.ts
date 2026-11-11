import { NextRequest, NextResponse } from 'next/server';
import { verifyEmergencyPasskey, timingSafeCompare } from '@/lib/admin/auth';
import { logAuditEvent } from '@/lib/lexi/auditLog';

interface RateLimitEntry {
  attempts: number;
  blockedUntil: number;
}
const recoveryAttempts = new Map<string, RateLimitEntry>();

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  return forwarded ? forwarded.split(',')[0].trim() : '127.0.0.1';
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  const now = Date.now();
  const entry = recoveryAttempts.get(ip) || { attempts: 0, blockedUntil: 0 };

  if (entry.blockedUntil > now) {
    const waitSec = Math.ceil((entry.blockedUntil - now) / 1000);
    return NextResponse.json(
      { success: false, error: `Emergency recovery access locked out for ${waitSec}s.` },
      { status: 429 }
    );
  }

  try {
    const { passkey } = await req.json();
    if (!passkey) {
      return NextResponse.json({ success: false, error: 'Passkey required.' }, { status: 400 });
    }

    const isValid = verifyEmergencyPasskey(passkey);

    if (!isValid) {
      entry.attempts += 1;
      if (entry.attempts >= 5) {
        entry.blockedUntil = now + 15 * 60 * 1000; // 15 mins
      }
      recoveryAttempts.set(ip, entry);

      logAuditEvent({
        operator: `Client (${ip})`,
        instruction: 'Failed Emergency Console Authentication',
        riskLevel: 'YELLOW',
        triageSummary: `Invalid emergency passkey attempt. Attempts: ${entry.attempts}/5.`,
        actionsTaken: ['Log failed passkey attempt'],
        outcome: 'FAILURE',
      });

      return NextResponse.json(
        { success: false, error: 'Invalid emergency recovery passkey.' },
        { status: 401 }
      );
    }

    // Clear attempts
    recoveryAttempts.delete(ip);

    logAuditEvent({
      operator: 'Rev. Ayan Kumar Ghosh (Out-of-Band Authority)',
      instruction: 'Authorized Emergency Recovery Console Access',
      riskLevel: 'YELLOW',
      triageSummary: 'Emergency recovery console unlocked via verified passkey.',
      actionsTaken: ['Unlock emergency recovery telemetry and controls'],
      outcome: 'SUCCESS',
    });

    const res = NextResponse.json({
      success: true,
      message: 'Emergency recovery authenticated.',
    });

    res.cookies.set({
      name: 'logos_emergency_auth',
      value: 'authenticated',
      httpOnly: true,
      sameSite: 'strict',
      path: '/',
      maxAge: 3600, // 1 hour
    });

    return res;
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
