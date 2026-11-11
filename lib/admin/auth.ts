import crypto from 'crypto';
import { AuthorityLevel, ScopedIdentity } from '../security/authority';

export const ADMIN_COOKIE_NAME = 'logos_admin_token';
export const ADMIN_SESSION_STORAGE_KEY = 'logos_admin_user';

// Server-side secret key for signing session tokens (override via environment in production)
const SESSION_SECRET = process.env.LOGOS_ADMIN_SECRET || 'logos-lexicon-secret-key-2026-ayankumarghosh-secure-token';

// Server-side administrative credentials (never exposed to browser bundles)
const ADMIN_USERNAME = process.env.LOGOS_ADMIN_USERNAME || 'admin';
const ADMIN_PASSCODE = process.env.LOGOS_ADMIN_PASSCODE || 'Logos2026!Lexicon';

// Emergency console secret
const EMERGENCY_PASSKEY = process.env.LOGOS_EMERGENCY_PASSKEY || 'LogosRecovery2026!RevGhosh';

export interface AdminUser {
  jti: string;
  username: string;
  role: 'CHIEF_THEOLOGICAL_EDITOR' | 'TECHNICAL_ADMINISTRATOR' | 'LEXI_GUARDIAN';
  displayName: string;
  authorityLevel: AuthorityLevel;
  scopedIdentities: ScopedIdentity[];
  mfaVerified: boolean;
  csrfToken: string;
  authenticatedAt: string;
  expiresAt: number; // Unix timestamp in ms
}

// Server-side revocation store (stores revoked token JTIs / signatures)
const REVOKED_TOKEN_IDS = new Set<string>();

// Server-side MFA verification code (override via LOGOS_ADMIN_MFA_CODE in cloud secrets manager)
const ADMIN_MFA_CODE = process.env.LOGOS_ADMIN_MFA_CODE || '777888';

/**
 * Constant-time string comparison to prevent timing attacks
 */
export function timingSafeCompare(a: string, b: string): boolean {
  try {
    const bufA = Buffer.from(a);
    const bufB = Buffer.from(b);
    if (bufA.length !== bufB.length) {
      crypto.timingSafeEqual(bufA, bufA);
      return false;
    }
    return crypto.timingSafeEqual(bufA, bufB);
  } catch {
    return false;
  }
}

/**
 * Verify administrative credentials using constant-time comparison
 */
export function verifyAdminCredentials(username: string, passcode: string): boolean {
  if (!username || !passcode) return false;
  const userValid = timingSafeCompare(username.trim().toLowerCase(), ADMIN_USERNAME.toLowerCase());
  const passValid = timingSafeCompare(passcode, ADMIN_PASSCODE);
  return userValid && passValid;
}

/**
 * Verify server-side MFA factor code
 */
export function verifyAdminMfaCode(mfaCode: string): boolean {
  if (!mfaCode || typeof mfaCode !== 'string') return false;
  return timingSafeCompare(mfaCode.trim(), ADMIN_MFA_CODE);
}

/**
 * Verify emergency recovery passkey using constant-time comparison
 */
export function verifyEmergencyPasskey(passkey: string): boolean {
  if (!passkey) return false;
  return timingSafeCompare(passkey, EMERGENCY_PASSKEY);
}

/**
 * Validate CSRF Origin header against Host header on state-mutating requests
 */
export function validateCsrfOrigin(originHeader: string | null, hostHeader: string | null): boolean {
  if (!originHeader) return true; // Non-browser CLI/same-origin requests without Origin header
  try {
    const originUrl = new URL(originHeader);
    const allowedHosts = new Set([
      'localhost:3000',
      '127.0.0.1:3000',
      'logoslexicon.org',
      'www.logoslexicon.org',
    ]);
    if (hostHeader) allowedHosts.add(hostHeader.toLowerCase());
    return allowedHosts.has(originUrl.host.toLowerCase());
  } catch {
    return false;
  }
}

/**
 * Generate a cryptographically signed session token (HMAC-SHA256)
 */
export function generateSessionToken(
  username: string,
  options?: { mfaVerified?: boolean; customTtlMs?: number }
): { token: string; user: AdminUser } {
  const isLexi = username.trim().toLowerCase() === 'lexi';
  const ttlMs = options?.customTtlMs ?? 24 * 60 * 60 * 1000;

  const allNineIdentities: ScopedIdentity[] = [
    'identity:monitoring',
    'identity:search_indexing',
    'identity:content_ingestion',
    'identity:editorial_review',
    'identity:deployment',
    'identity:backups',
    'identity:analytics',
    'identity:licensing',
    'identity:incident_recovery',
  ];

  const user: AdminUser = {
    jti: `sess-${crypto.randomUUID()}`,
    username: username.trim(),
    role: isLexi ? 'LEXI_GUARDIAN' : 'CHIEF_THEOLOGICAL_EDITOR',
    displayName: isLexi ? 'Lexi (Operational Guardian)' : 'Rev. Ayan Kumar Ghosh',
    authorityLevel: isLexi ? AuthorityLevel.LEXI_GUARDIAN : AuthorityLevel.OWNER_FINAL_AUTHORITY,
    scopedIdentities: allNineIdentities,
    mfaVerified: options?.mfaVerified ?? true,
    csrfToken: crypto.randomBytes(16).toString('hex'),
    authenticatedAt: new Date().toISOString(),
    expiresAt: Date.now() + ttlMs,
  };

  const payload = Buffer.from(JSON.stringify(user)).toString('base64url');
  const signature = crypto
    .createHmac('sha256', SESSION_SECRET)
    .update(payload)
    .digest('base64url');

  const token = `${payload}.${signature}`;
  return { token, user };
}

/**
 * Revoke a signed session token on the server side
 */
export function revokeSessionToken(token: string | undefined): boolean {
  if (!token || typeof token !== 'string') return false;
  REVOKED_TOKEN_IDS.add(token);
  const parts = token.split('.');
  if (parts.length === 2) {
    try {
      const parsed = JSON.parse(Buffer.from(parts[0], 'base64url').toString('utf-8'));
      if (parsed?.jti) REVOKED_TOKEN_IDS.add(parsed.jti);
    } catch {
      // ignore malformed payload
    }
  }
  return true;
}

/**
 * Verify a signed session token (checks HMAC, revocation list, and expiration)
 */
export function verifySessionToken(token: string | undefined): AdminUser | null {
  if (!token || typeof token !== 'string') return null;
  if (REVOKED_TOKEN_IDS.has(token)) return null;

  const parts = token.split('.');
  if (parts.length !== 2) return null;

  const [payload, signature] = parts;

  const expectedSignature = crypto
    .createHmac('sha256', SESSION_SECRET)
    .update(payload)
    .digest('base64url');

  if (!timingSafeCompare(signature, expectedSignature)) {
    return null;
  }

  try {
    const user = JSON.parse(Buffer.from(payload, 'base64url').toString('utf-8')) as AdminUser;
    if (user.jti && REVOKED_TOKEN_IDS.has(user.jti)) {
      return null;
    }
    if (Date.now() > user.expiresAt) {
      return null;
    }
    return user;
  } catch {
    return null;
  }
}

/**
 * Client-safe helper to read cached non-sensitive session metadata
 */
export function getAdminSession(): AdminUser | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = sessionStorage.getItem(ADMIN_SESSION_STORAGE_KEY);
    if (!raw) return null;
    const user = JSON.parse(raw) as AdminUser;
    if (Date.now() > user.expiresAt) {
      sessionStorage.removeItem(ADMIN_SESSION_STORAGE_KEY);
      return null;
    }
    return user;
  } catch {
    return null;
  }
}

/**
 * Client-safe logout helper
 */
export function logoutAdmin(): void {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem(ADMIN_SESSION_STORAGE_KEY);
    fetch('/api/admin/session', { method: 'DELETE' }).catch(() => {});
  }
}

