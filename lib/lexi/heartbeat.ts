import crypto from 'crypto';

/**
 * Section 7: Lexi Server-Side HMAC-SHA256 Signed Heartbeat Engine
 *
 * Security Guarantees:
 * 1. Server-side only (never imported into client components).
 * 2. Secrets read from process.env (LEXI_HEARTBEAT_SECRET_CURRENT / LEXI_HEARTBEAT_SECRET_PREVIOUS).
 *    When running locally without an external secret manager, an ephemeral in-memory 256-bit key
 *    is generated at boot so zero static secret strings exist in source code or Git history.
 * 3. Supports dual-key rotation (CURRENT_KEY for signing & verification; PREVIOUS_KEY for graceful rotation verification).
 * 4. Rejects invalid signatures (constant-time comparison).
 * 5. Rejects expired heartbeats (> 300s old or > 30s in the future).
 * 6. Rejects replayed heartbeats (nonce cache tracking seen heartbeat IDs).
 * 7. Rejects modified payloads (canonical JSON serialization bound into HMAC).
 */

export interface HeartbeatPayload {
  heartbeatId: string;
  guardian: 'Lexi';
  scope: 'LOGOS_ONLY';
  timestampMs: number;
  status: 'HEALTHY' | 'DEGRADED' | 'SAFE_MODE';
  activeKeyId: string;
  metricsHash: string;
}

export interface SignedHeartbeatEnvelope {
  payload: HeartbeatPayload;
  signature: string;
  algorithm: 'HMAC-SHA256';
}

export interface HeartbeatVerificationResult {
  valid: boolean;
  reason?:
    | 'VALID_CURRENT_KEY'
    | 'VALID_ROTATED_PREVIOUS_KEY'
    | 'INVALID_SIGNATURE'
    | 'EXPIRED_HEARTBEAT'
    | 'FUTURE_TIMESTAMP_SKEW'
    | 'REPLAYED_NONCE'
    | 'MALFORMED_PAYLOAD'
    | 'BOUNDARY_VIOLATION';
  verifiedKeyGeneration?: 'CURRENT' | 'PREVIOUS';
}

// Ephemeral runtime keys if environment variables are not injected by cloud secret manager
let runtimeCurrentSecret =
  process.env.LEXI_HEARTBEAT_SECRET_CURRENT || crypto.randomBytes(32).toString('hex');
let runtimePreviousSecret: string | null = process.env.LEXI_HEARTBEAT_SECRET_PREVIOUS || null;
let currentKeyId = 'key-gen-1';

// Nonce replay cache (stores heartbeatId -> timestampMs)
const seenNonces = new Map<string, number>();
const MAX_HEARTBEAT_AGE_MS = 5 * 60 * 1000; // 5 minutes
const MAX_FUTURE_SKEW_MS = 30 * 1000; // 30 seconds

function canonicalizePayload(p: HeartbeatPayload): string {
  return JSON.stringify({
    activeKeyId: p.activeKeyId,
    guardian: p.guardian,
    heartbeatId: p.heartbeatId,
    metricsHash: p.metricsHash,
    scope: p.scope,
    status: p.status,
    timestampMs: p.timestampMs,
  });
}

function computeHmac(canonicalData: string, secret: string): string {
  return crypto.createHmac('sha256', secret).update(canonicalData, 'utf8').digest('hex');
}

function timingSafeHexEqual(a: string, b: string): boolean {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  try {
    const bufA = Buffer.from(a, 'hex');
    const bufB = Buffer.from(b, 'hex');
    if (bufA.length !== bufB.length || bufA.length === 0) return false;
    return crypto.timingSafeEqual(bufA, bufB);
  } catch {
    return false;
  }
}

/**
 * Generates a fresh server-side signed heartbeat envelope.
 */
export function createSignedHeartbeat(
  status: 'HEALTHY' | 'DEGRADED' | 'SAFE_MODE' = 'HEALTHY',
  customTimestampMs?: number
): SignedHeartbeatEnvelope {
  const payload: HeartbeatPayload = {
    heartbeatId: `hb-${crypto.randomUUID()}`,
    guardian: 'Lexi',
    scope: 'LOGOS_ONLY',
    timestampMs: customTimestampMs ?? Date.now(),
    status,
    activeKeyId: currentKeyId,
    metricsHash: crypto
      .createHash('sha256')
      .update(`logos-metrics-${status}-${currentKeyId}`)
      .digest('hex')
      .slice(0, 32),
  };

  const canonical = canonicalizePayload(payload);
  const signature = computeHmac(canonical, runtimeCurrentSecret);

  return {
    payload,
    signature,
    algorithm: 'HMAC-SHA256',
  };
}

/**
 * Verifies a signed heartbeat envelope against signature, expiry, replay, and payload tampering.
 */
export function verifySignedHeartbeat(
  envelope: SignedHeartbeatEnvelope,
  nowMs: number = Date.now()
): HeartbeatVerificationResult {
  if (!envelope || !envelope.payload || typeof envelope.signature !== 'string') {
    return { valid: false, reason: 'MALFORMED_PAYLOAD' };
  }

  const { payload, signature } = envelope;
  if (
    !payload.heartbeatId ||
    typeof payload.timestampMs !== 'number' ||
    !payload.guardian ||
    !payload.scope
  ) {
    return { valid: false, reason: 'MALFORMED_PAYLOAD' };
  }

  if (payload.guardian !== 'Lexi' || payload.scope !== 'LOGOS_ONLY') {
    return { valid: false, reason: 'BOUNDARY_VIOLATION' };
  }

  // 1. Verify cryptographic signature first (prevents unauthenticated nonce flooding)
  const canonical = canonicalizePayload(payload);
  const expectedCurrentSig = computeHmac(canonical, runtimeCurrentSecret);
  let matchedGen: 'CURRENT' | 'PREVIOUS' | null = null;

  if (timingSafeHexEqual(signature, expectedCurrentSig)) {
    matchedGen = 'CURRENT';
  } else if (runtimePreviousSecret) {
    const expectedPrevSig = computeHmac(canonical, runtimePreviousSecret);
    if (timingSafeHexEqual(signature, expectedPrevSig)) {
      matchedGen = 'PREVIOUS';
    }
  }

  if (!matchedGen) {
    return { valid: false, reason: 'INVALID_SIGNATURE' };
  }

  // 2. Verify timestamp freshness
  const ageMs = nowMs - payload.timestampMs;
  if (ageMs > MAX_HEARTBEAT_AGE_MS) {
    return { valid: false, reason: 'EXPIRED_HEARTBEAT' };
  }
  if (ageMs < -MAX_FUTURE_SKEW_MS) {
    return { valid: false, reason: 'FUTURE_TIMESTAMP_SKEW' };
  }

  // 3. Verify replay protection
  if (seenNonces.has(payload.heartbeatId)) {
    return { valid: false, reason: 'REPLAYED_NONCE' };
  }

  // Prune expired nonces and record current nonce
  for (const [id, ts] of seenNonces.entries()) {
    if (nowMs - ts > MAX_HEARTBEAT_AGE_MS * 2) {
      seenNonces.delete(id);
    }
  }
  seenNonces.set(payload.heartbeatId, payload.timestampMs);

  return {
    valid: true,
    reason: matchedGen === 'CURRENT' ? 'VALID_CURRENT_KEY' : 'VALID_ROTATED_PREVIOUS_KEY',
    verifiedKeyGeneration: matchedGen,
  };
}

/**
 * Rotates the heartbeat signing secret safely:
 * moves current secret -> previous secret, and installs a new current secret.
 */
export function rotateHeartbeatKey(newSecretHex?: string): {
  previousKeyId: string;
  newKeyId: string;
  rotatedAt: string;
} {
  const prevId = currentKeyId;
  runtimePreviousSecret = runtimeCurrentSecret;
  runtimeCurrentSecret = newSecretHex || crypto.randomBytes(32).toString('hex');
  const nextNum = parseInt(currentKeyId.replace('key-gen-', ''), 10) + 1;
  currentKeyId = `key-gen-${nextNum}`;
  return {
    previousKeyId: prevId,
    newKeyId: currentKeyId,
    rotatedAt: new Date().toISOString(),
  };
}
