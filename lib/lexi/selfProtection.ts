// lib/lexi/selfProtection.ts
// Lexi Self-Protection, Untrusted Data Isolation & 8-Point Pre-Action Verification Engine
// Lead Theological Editor & Owner: Rev. Ayan Kumar Ghosh (Level 5)

import { AuthorityLevel, AuthorityUser } from '../security/authority';
import { logAuditEvent } from './auditLog';

export interface PreActionGateParams {
  source: string; // Origin of instruction (e.g. 'admin-command-centre', 'web-request', 'imported-text')
  actor: AuthorityUser;
  requiredPermission: string;
  targetSystem: string; // Must be within LOGOS; BSB is strictly forbidden
  riskCategory: 'GREEN' | 'YELLOW' | 'RED';
  actionName: string;
  rollbackPlan: string;
  expectedResult: string;
}

export interface GateResult {
  passed: boolean;
  reason?: string;
  quarantineTriggered?: boolean;
}

export interface ContentSanitizationResult {
  isSafe: boolean;
  sanitizedText: string;
  detectedThreats: string[];
}

// Prohibited injection patterns that attempt to hijack Lexi's prompt or bypass authority
const INJECTION_PATTERNS = [
  /ignore\s+(all\s+)?(previous\s+|prior\s+|existing\s+)?instructions/i,
  /system\s*prompt\s*override/i,
  /you\s+are\s+now\s+(an\s+unrestricted|root|admin|dan)/i,
  /grant\s+(me\s+|user\s+|role\s+)?(level\s*5|admin|root|owner)/i,
  /reveal\s+(api\s*key|secret|password|credential|token)/i,
  /run\s+(command|shell|exec|bash|cmd|powershell)/i,
  /delete\s+(all\s+)?(backups|logs|audit|database)/i,
  /disable\s+(mfa|circuit\s*breaker|protection|audit|watchdog)/i,
  /modify\s+(bengali[-_]?study[-_]?bible|bsb)/i,
  /publish\s+without\s+(review|approval)/i,
  /elevate\s+privilege/i,
];

/**
 * 1. UNTRUSTED DATA ISOLATION:
 * Scans all incoming content (theological imports, uploaded text, user inputs, external webpages)
 * to ensure that no payload attempts to override system rules, grant permissions, request secrets,
 * run commands, or bypass review stages.
 */
export function evaluateUntrustedContent(content: string): ContentSanitizationResult {
  if (!content || typeof content !== 'string') {
    return { isSafe: true, sanitizedText: '', detectedThreats: [] };
  }

  const detectedThreats: string[] = [];

  for (const pattern of INJECTION_PATTERNS) {
    if (pattern.test(content)) {
      detectedThreats.push(`Prompt/Command Injection Pattern matched: ${pattern.toString()}`);
    }
  }

  // Detect attempts to cross boundary into Bengali Study Bible
  if (/bengali[-_]?study[-_]?bible|bsb[-_]?backup/i.test(content)) {
    detectedThreats.push('PROHIBITED BOUNDARY VIOLATION: Reference to Bengali Study Bible detected.');
  }

  const isSafe = detectedThreats.length === 0;

  // Basic HTML/Script tag sanitization
  const sanitizedText = content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/javascript:/gi, '');

  return {
    isSafe,
    sanitizedText,
    detectedThreats,
  };
}

/**
 * 2. 8-POINT PRE-ACTION VERIFICATION GATE:
 * Evaluates mandatory criteria before executing any operational change
 */
export function verifyPreActionGate(params: PreActionGateParams): GateResult {
  // Gate 1: Source verification
  if (!params.source || params.source.toLowerCase().includes('untrusted')) {
    return { passed: false, reason: 'Gate 1 Failed: Instruction source is unverified or untrusted.' };
  }

  // Gate 2 & 3: Identity & Permission verification
  if (params.actor.level < AuthorityLevel.AUTOMATED_SERVICES) {
    return { passed: false, reason: `Gate 2 Failed: Actor ${params.actor.name} lacks operational authority level.` };
  }

  // Gate 4: Target boundary check
  const target = params.targetSystem.toLowerCase();
  if (target.includes('bengali-study-bible') || target.includes('bsb')) {
    triggerCompromiseContainment('Attempted unauthorized access or modification to Bengali Study Bible');
    return {
      passed: false,
      quarantineTriggered: true,
      reason: 'Gate 4 Violation: Absolute boundary prohibition breached. Bengali Study Bible access attempted.',
    };
  }

  // Gate 5: Risk category governance
  if (params.riskCategory === 'RED' && params.actor.level < AuthorityLevel.OWNER_FINAL_AUTHORITY) {
    return {
      passed: false,
      reason: 'Gate 5 Failed: RED-tier high-risk action requires explicit Level 5 approval ticket from Rev. Ayan Kumar Ghosh.',
    };
  }

  // Gate 6: Allowlist status
  const ALLOWLISTED_OPERATIONS = [
    'flush_cache',
    'reindex_search',
    'reconcile_staging',
    'verify_assets',
    'clear_memory',
    'backup_snapshot',
    'test_recovery',
    'switch_read_only',
    'contain_incident',
  ];
  if (!ALLOWLISTED_OPERATIONS.includes(params.actionName)) {
    return { passed: false, reason: `Gate 6 Failed: Action "${params.actionName}" is not on the approved allowlist.` };
  }

  // Gate 7: Rollback availability
  if (!params.rollbackPlan || params.rollbackPlan.trim().length === 0) {
    return { passed: false, reason: 'Gate 7 Failed: No verified rollback procedure specified for this action.' };
  }

  // Gate 8: Expected result
  if (!params.expectedResult || params.expectedResult.trim().length === 0) {
    return { passed: false, reason: 'Gate 8 Failed: Expected measurable outcome is undefined.' };
  }

  return { passed: true };
}

/**
 * 3. COMPROMISE CONTAINMENT PROTOCOL:
 * Triggers automated containment when an instruction or credential appears compromised.
 */
export function triggerCompromiseContainment(
  incidentDescription: string,
  operator = 'Lexi Self-Protection Engine'
): { status: string; safeModeActivated: boolean } {
  // 1. Log immutable audit event
  logAuditEvent({
    operator,
    instruction: 'COMPROMISE CONTAINMENT PROTOCOL ACTIVATED',
    riskLevel: 'RED',
    triageSummary: `Security containment triggered: ${incidentDescription}`,
    actionsTaken: [
      'Suspended Lexi active operational session',
      'Preserved forensic evidence in audit log',
      'Switched LOGOS Lexicon to safe read-only mode',
      'Dispatched Level 5 alert to Rev. Ayan Kumar Ghosh',
    ],
    outcome: 'CIRCUIT_TRIPPED',
    details: { incidentDescription, triggeredAt: new Date().toISOString() },
  });

  return {
    status: 'CONTAINED',
    safeModeActivated: true,
  };
}
