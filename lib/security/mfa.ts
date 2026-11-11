// lib/security/mfa.ts
// Multi-Factor Authentication & Passkey Verification Engine for Privileged Users (Level 5 / Level 4)
import crypto from 'crypto';

export interface MFAChallenge {
  challengeId: string;
  userId: string;
  nonce: string;
  createdAt: number;
  expiresAt: number;
}

const ACTIVE_CHALLENGES = new Map<string, MFAChallenge>();

// Emergency / Privileged fallback passkey salt
const PASSKEY_SALT = process.env.LOGOS_MFA_SALT || 'logos-lexicon-mfa-salt-2026';

/**
 * Generate a cryptographically secure random challenge for Passkey / WebAuthn authentication
 */
export function generateMFAChallenge(userId: string): MFAChallenge {
  const nonce = crypto.randomBytes(32).toString('base64url');
  const challengeId = `mfa-${Date.now()}-${crypto.randomBytes(8).toString('hex')}`;
  const challenge: MFAChallenge = {
    challengeId,
    userId,
    nonce,
    createdAt: Date.now(),
    expiresAt: Date.now() + 5 * 60 * 1000, // 5 minutes TTL
  };

  ACTIVE_CHALLENGES.set(challengeId, challenge);
  return challenge;
}

/**
 * Validate a Passkey / MFA response using constant-time comparison
 */
export function verifyMFAResponse(
  challengeId: string,
  providedSignatureOrSecret: string,
  expectedSecretHash: string
): boolean {
  const challenge = ACTIVE_CHALLENGES.get(challengeId);
  if (!challenge) return false;

  // Check expiration
  if (Date.now() > challenge.expiresAt) {
    ACTIVE_CHALLENGES.delete(challengeId);
    return false;
  }

  // Compute salted HMAC
  const computedHash = crypto
    .createHmac('sha256', PASSKEY_SALT)
    .update(`${challenge.nonce}:${providedSignatureOrSecret}`)
    .digest('hex');

  const bufA = Buffer.from(computedHash);
  const bufB = Buffer.from(expectedSecretHash);

  ACTIVE_CHALLENGES.delete(challengeId); // One-time use

  if (bufA.length !== bufB.length) {
    crypto.timingSafeEqual(bufA, bufA);
    return false;
  }

  return crypto.timingSafeEqual(bufA, bufB);
}

/**
 * Validates whether an incoming request satisfies Privileged Level 5 MFA requirements
 */
export function assertMFACompliance(
  userLevel: number,
  mfaVerified: boolean
): { allowed: boolean; reason?: string } {
  if (userLevel >= 5 && !mfaVerified) {
    return {
      allowed: false,
      reason: 'MFA/Passkey verification required for Level 5 owner operations.',
    };
  }
  return { allowed: true };
}
