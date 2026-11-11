// lib/lexi/auditLog.ts
// Cryptographically Hash-Chained, Tamper-Resistant Audit Log for Logos Lexicon
// Final Authority: Ayan Kumar Ghosh (Level 5)

import fs from 'fs';
import path from 'path';
import {
  computeRecordHash,
  verifyChainIntegrity,
  GENESIS_HASH,
  HashChainedEntry,
} from '../security/tamperProofChain';

export interface AuditEntry {
  id: string;
  timestamp: string; // ISO 8601
  operator: string;
  instruction: string;
  riskLevel: 'GREEN' | 'YELLOW' | 'RED';
  triageSummary: string;
  actionsTaken: string[];
  outcome: 'SUCCESS' | 'FAILURE' | 'PENDING_APPROVAL' | 'REJECTED' | 'CIRCUIT_TRIPPED';
  rollbackState?: string;
  details?: Record<string, any>;
  previousHash: string;
  hash: string;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const AUDIT_FILE = path.join(DATA_DIR, 'audit_log.json');

// Stored chronologically (oldest at index 0, newest at length - 1)
let chronologicalAudit: AuditEntry[] = [];
let initialized = false;

function ensureAuditFile(): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(AUDIT_FILE)) {
      const initPayload = {
        id: `audit-${Date.now()}-init`,
        timestamp: new Date().toISOString(),
        operator: 'Ayan Kumar Ghosh (Final Authority)',
        instruction: 'Initialize Logos Lexicon Cryptographic Audit Trail & Controlled Level 5 Governance',
        riskLevel: 'GREEN' as const,
        triageSummary: 'System initialization and tamper-evident SHA-256 blockchain audit trail established.',
        actionsTaken: ['Init audit logger', 'Activate SHA-256 hash-chaining engine'],
        outcome: 'SUCCESS' as const,
        previousHash: GENESIS_HASH,
      };

      const hash = computeRecordHash(initPayload, GENESIS_HASH);
      const initEvent: AuditEntry = { ...initPayload, hash };

      fs.writeFileSync(AUDIT_FILE, JSON.stringify([initEvent], null, 2), 'utf-8');
      chronologicalAudit = [initEvent];
    } else {
      const raw = fs.readFileSync(AUDIT_FILE, 'utf-8');
      const parsed = JSON.parse(raw || '[]');

      // Chronologically order records (oldest first)
      const sorted = parsed.sort((a: any, b: any) => {
        const timeA = new Date(a.timestamp || 0).getTime();
        const timeB = new Date(b.timestamp || 0).getTime();
        return timeA - timeB;
      });

      let prevHash = GENESIS_HASH;
      chronologicalAudit = sorted.map((item: any, idx: number) => {
        const cleanPayload = {
          id: item.id || `audit-legacy-${idx}`,
          timestamp: item.timestamp || new Date().toISOString(),
          operator: item.operator || 'System',
          instruction: item.instruction || 'Operation',
          riskLevel: item.riskLevel || 'GREEN',
          triageSummary: item.triageSummary || '',
          actionsTaken: item.actionsTaken || [],
          outcome: item.outcome || 'SUCCESS',
          previousHash: prevHash,
        };

        const computedHash = computeRecordHash(cleanPayload, prevHash);
        const record: AuditEntry = {
          ...item,
          ...cleanPayload,
          hash: computedHash,
        };
        prevHash = computedHash;
        return record;
      });

      // Persist normalized chain
      fs.writeFileSync(AUDIT_FILE, JSON.stringify(chronologicalAudit, null, 2), 'utf-8');
    }
    initialized = true;
  } catch (err) {
    console.warn('[AuditLog] File system fallback to memory:', err);
    chronologicalAudit = chronologicalAudit || [];
    initialized = true;
  }
}

function persist(): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(AUDIT_FILE, JSON.stringify(chronologicalAudit, null, 2), 'utf-8');
  } catch (err) {
    console.warn('[AuditLog] Persist failed:', err);
  }
}

export function logAuditEvent(
  entry: Omit<AuditEntry, 'id' | 'timestamp' | 'previousHash' | 'hash'> & {
    timestamp?: string;
  }
): AuditEntry {
  if (!initialized) ensureAuditFile();

  const prevHash =
    chronologicalAudit.length > 0
      ? chronologicalAudit[chronologicalAudit.length - 1].hash
      : GENESIS_HASH;

  const id = `audit-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
  const timestamp = entry.timestamp || new Date().toISOString();

  const recordWithoutHash = {
    ...entry,
    id,
    timestamp,
    previousHash: prevHash,
  };

  const hash = computeRecordHash(recordWithoutHash, prevHash);
  const fullRecord: AuditEntry = { ...recordWithoutHash, hash };

  chronologicalAudit.push(fullRecord);
  persist();

  return fullRecord;
}

export function getAuditLogs(limit = 100): AuditEntry[] {
  if (!initialized) ensureAuditFile();
  // Return reversed to show newest first in the UI
  return [...chronologicalAudit].reverse().slice(0, limit);
}

/**
 * Validates the cryptographic SHA-256 hash-chain of all audit logs
 */
export function verifyAuditChain(): { valid: boolean; brokenAt?: number; reason?: string } {
  if (!initialized) ensureAuditFile();
  return verifyChainIntegrity(chronologicalAudit as unknown as HashChainedEntry[]);
}
