// lib/security/tamperProofChain.ts
// Cryptographic SHA-256 Hash-Chaining Engine for Tamper-Resistant Audit Logs
import crypto from 'crypto';

export interface HashChainedEntry {
  id: string;
  timestamp: string;
  operator: string;
  instruction: string;
  riskLevel: string;
  triageSummary: string;
  actionsTaken: string[];
  outcome: string;
  previousHash: string;
  hash: string;
}

const GENESIS_HASH = '0000000000000000000000000000000000000000000000000000000000000000';

/**
 * Compute canonical SHA-256 hash for an audit record
 */
export function computeRecordHash(
  entry: Omit<HashChainedEntry, 'hash'>,
  previousHash: string
): string {
  const content = [
    entry.id,
    entry.timestamp,
    entry.operator,
    entry.instruction,
    entry.riskLevel,
    entry.triageSummary,
    (entry.actionsTaken || []).join(';'),
    entry.outcome,
    previousHash,
  ].join('|');

  return crypto.createHash('sha256').update(content, 'utf8').digest('hex');
}

/**
 * Verifies the integrity of a sequence of chained audit records (chronological order: oldest to newest)
 */
export function verifyChainIntegrity(
  entries: HashChainedEntry[]
): { valid: boolean; brokenAt?: number; reason?: string } {
  if (!entries || entries.length === 0) {
    return { valid: true };
  }

  // Expecting chronological order
  let expectedPrevHash = GENESIS_HASH;

  for (let i = 0; i < entries.length; i++) {
    const record = entries[i];

    // Check previousHash link
    if (record.previousHash !== expectedPrevHash) {
      return {
        valid: false,
        brokenAt: i,
        reason: `Cryptographic chain broken at record ${record.id}: previousHash (${record.previousHash}) does not match expected (${expectedPrevHash})`,
      };
    }

    // Verify record hash
    const recomputed = computeRecordHash(record, expectedPrevHash);
    if (record.hash !== recomputed) {
      return {
        valid: false,
        brokenAt: i,
        reason: `Record ${record.id} tampering detected: record hash (${record.hash}) does not match recomputed content (${recomputed})`,
      };
    }

    expectedPrevHash = record.hash;
  }

  return { valid: true };
}

export interface AuditCheckpointAnchor {
  checkpointId: string;
  anchoredAt: string;
  recordCount: number;
  headRecordId: string;
  headHash: string;
  cumulativeChainDigest: string;
}

/**
 * Creates a periodic checkpoint anchor for the SHA-256 hash-chained audit log.
 * Storing this anchor in an independent location detects full-chain rewrites,
 * tail truncation, record deletion, or unauthorized log resets.
 */
export function createCheckpointAnchor(entries: HashChainedEntry[]): AuditCheckpointAnchor {
  const count = entries.length;
  const head = count > 0 ? entries[count - 1] : null;
  const allHashes = entries.map((e) => e.hash).join(':');
  const cumulativeChainDigest = crypto
    .createHash('sha256')
    .update(`${count}|${allHashes}`, 'utf8')
    .digest('hex');

  return {
    checkpointId: `chk-${Date.now()}`,
    anchoredAt: new Date().toISOString(),
    recordCount: count,
    headRecordId: head ? head.id : 'GENESIS',
    headHash: head ? head.hash : GENESIS_HASH,
    cumulativeChainDigest,
  };
}

/**
 * Verifies an audit log against a previously anchored checkpoint to detect
 * unauthorized resets, tail deletions, or full-chain regeneration.
 */
export function verifyAgainstCheckpointAnchor(
  entries: HashChainedEntry[],
  anchor: AuditCheckpointAnchor
): { valid: boolean; reason?: string } {
  const chainCheck = verifyChainIntegrity(entries);
  if (!chainCheck.valid) {
    return { valid: false, reason: chainCheck.reason };
  }

  if (entries.length < anchor.recordCount) {
    return {
      valid: false,
      reason: `Audit log truncation/reset detected: current record count (${entries.length}) is less than anchored checkpoint count (${anchor.recordCount}).`,
    };
  }

  if (anchor.recordCount > 0) {
    const recordAtCheckpoint = entries[anchor.recordCount - 1];
    if (
      !recordAtCheckpoint ||
      recordAtCheckpoint.id !== anchor.headRecordId ||
      recordAtCheckpoint.hash !== anchor.headHash
    ) {
      return {
        valid: false,
        reason: `Historical chain rewrite detected at index ${anchor.recordCount - 1}: record (${recordAtCheckpoint?.id} / ${recordAtCheckpoint?.hash}) does not match anchored checkpoint (${anchor.headRecordId} / ${anchor.headHash}).`,
      };
    }
  }

  return { valid: true };
}

export { GENESIS_HASH };

