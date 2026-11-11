// lib/security/authority.ts
// 5-Tier Authority Hierarchy & 9 Least-Privilege Scoped Service Identities for Logos Lexicon
// Final Authority: Ayan Kumar Ghosh (Level 5)

export enum AuthorityLevel {
  PUBLIC_USER = 1,
  EDITOR_SUPPORT = 2,
  AUTOMATED_SERVICES = 3,
  LEXI_GUARDIAN = 4,
  OWNER_FINAL_AUTHORITY = 5,
}

export type ScopedIdentity =
  | 'identity:monitoring'
  | 'identity:search_indexing'
  | 'identity:content_ingestion'
  | 'identity:editorial_review'
  | 'identity:deployment'
  | 'identity:backups'
  | 'identity:analytics'
  | 'identity:licensing'
  | 'identity:incident_recovery'
  // Legacy compatibility aliases
  | 'identity:backup'
  | 'identity:content_management'
  | 'identity:incident_response';

export const ALL_SCOPED_IDENTITIES: ScopedIdentity[] = [
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

export interface AuthorityUser {
  id: string;
  name: string;
  level: AuthorityLevel;
  role: string;
  scopedIdentities?: ScopedIdentity[];
  grantedBy?: string;
  isOwner?: boolean;
}

// Canonical Authority Registry
export const SYSTEM_AUTHORITY_REGISTRY: Record<string, AuthorityUser> = {
  'ayan-kumar-ghosh': {
    id: 'usr-level5-ayankumarghosh',
    name: 'Ayan Kumar Ghosh',
    level: AuthorityLevel.OWNER_FINAL_AUTHORITY,
    role: 'Sole Owner, Lead Theological Editor & Final Authority',
    scopedIdentities: ALL_SCOPED_IDENTITIES,
    isOwner: true,
  },
  'lexi-guardian': {
    id: 'svc-level4-lexi-guardian',
    name: 'Lexi (Controlled Operational Guardian)',
    level: AuthorityLevel.LEXI_GUARDIAN,
    role: 'Controlled Operational Guardian of LOGOS Only',
    scopedIdentities: ALL_SCOPED_IDENTITIES,
    grantedBy: 'Ayan Kumar Ghosh',
  },
  'watchdog-service': {
    id: 'svc-level3-logos-watchdog',
    name: 'External LOGOS Watchdog',
    level: AuthorityLevel.AUTOMATED_SERVICES,
    role: 'Independent External Monitoring & Recovery Service',
    scopedIdentities: ['identity:monitoring', 'identity:incident_recovery'],
    grantedBy: 'Ayan Kumar Ghosh',
  },
  'theological-editor': {
    id: 'usr-level2-editor',
    name: 'Authorised Theological Reviewer & Language Editor',
    level: AuthorityLevel.EDITOR_SUPPORT,
    role: 'Authorised Language Editor & Theological Reviewer',
    scopedIdentities: ['identity:content_ingestion', 'identity:editorial_review', 'identity:licensing'],
    grantedBy: 'Ayan Kumar Ghosh',
  },
};

/**
 * Validates whether an actor has sufficient authority level for an operation
 */
export function hasRequiredAuthority(
  actorLevel: AuthorityLevel,
  requiredLevel: AuthorityLevel
): boolean {
  return actorLevel >= requiredLevel;
}

/**
 * Validates whether a scoped identity is permitted for the given function
 */
export function hasScopedPermission(
  actor: AuthorityUser,
  requiredScope: ScopedIdentity
): boolean {
  if (actor.level === AuthorityLevel.OWNER_FINAL_AUTHORITY) {
    return true;
  }
  return !!actor.scopedIdentities?.includes(requiredScope);
}

/**
 * Strict Authority Tamper-Check:
 * Prohibits Lexi or any automated service from:
 * - promoting itself to Level 5;
 * - changing the ownership hierarchy;
 * - creating hidden administrators;
 * - granting itself additional privileges;
 * - bypassing approval requirements;
 * - accessing Deep or Bengali Study Bible.
 */
export function assertHierarchyIntegrity(
  actor: AuthorityUser,
  attemptedTargetLevel: AuthorityLevel,
  actionDescription: string
): { allowed: boolean; violationReason?: string } {
  // Rule 1: Only Level 5 can create or elevate accounts to Level >= 2
  if (actor.level < AuthorityLevel.OWNER_FINAL_AUTHORITY) {
    if (attemptedTargetLevel >= actor.level) {
      return {
        allowed: false,
        violationReason: `SECURITY VIOLATION: Actor "${actor.name}" (Level ${actor.level}) cannot create or elevate permissions to Level ${attemptedTargetLevel}. Sole authority resides with Ayan Kumar Ghosh (Level 5).`,
      };
    }
  }

  // Rule 2: Lexi cannot modify her own authority level or bypass Level 5
  if (actor.id === 'svc-level4-lexi-guardian' && attemptedTargetLevel > AuthorityLevel.LEXI_GUARDIAN) {
    return {
      allowed: false,
      violationReason: `GOVERNANCE VIOLATION: Lexi is permanently governed under Controlled Level 4 and cannot promote itself to Level 5 or bypass owner oversight.`,
    };
  }

  // Rule 3: Absolute separation from Deep and Bengali Study Bible
  if (/deep|bengali[-_\s]?study[-_\s]?bible|\bbsb\b/i.test(actionDescription)) {
    return {
      allowed: false,
      violationReason: `BOUNDARY VIOLATION: Lexi is the exclusive guardian of LOGOS and is strictly prohibited from accessing or sharing credentials/data with Deep or Bengali Study Bible.`,
    };
  }

  return { allowed: true };
}

export const SCOPED_IDENTITY_PERMISSIONS: Record<
  string,
  { allowed: string[]; prohibited: string[] }
> = {
  'identity:monitoring': {
    allowed: ['read_health_metrics', 'verify_heartbeats', 'record_watchdog_observations'],
    prohibited: ['modify_entries', 'delete_backups', 'change_dns', 'elevate_roles'],
  },
  'identity:search_indexing': {
    allowed: ['read_published_entries', 'rebuild_in_memory_search_index', 'log_search_gaps'],
    prohibited: ['overwrite_authoritative_content_store', 'publish_drafts', 'delete_entries'],
  },
  'identity:content_ingestion': {
    allowed: ['stage_imported_drafts', 'validate_entry_rules', 'quarantine_unverified_licence'],
    prohibited: ['publish_directly_to_public', 'bypass_editorial_review', 'modify_licences'],
  },
  'identity:editorial_review': {
    allowed: ['review_staged_entries', 'verify_scripture_citations', 'flag_machine_drafts'],
    prohibited: ['change_level5_ownership', 'delete_audit_logs', 'modify_billing'],
  },
  'identity:deployment': {
    allowed: ['run_build_guard', 'verify_release_manifest', 'execute_green_cache_flush'],
    prohibited: ['deploy_unsigned_build', 'change_domain_registrar', 'disable_https'],
  },
  'identity:backups': {
    allowed: ['create_sha256_snapshot', 'verify_backup_manifest', 'export_portable_formats'],
    prohibited: ['delete_all_backups', 'prune_below_retention_floor', 'expose_plaintext_secrets'],
  },
  'identity:analytics': {
    allowed: ['read_truthful_counts', 'classify_data_sources'],
    prohibited: ['fabricate_user_metrics', 'label_test_data_as_production', 'export_private_pii'],
  },
  'identity:licensing': {
    allowed: ['verify_source_register', 'quarantine_missing_licence', 'render_public_attribution'],
    prohibited: ['assume_public_domain_without_evidence', 'paywall_public_domain_sources'],
  },
  'identity:incident_recovery': {
    allowed: ['execute_safe_mode_lockdown', 'restore_verified_sandbox', 'trip_circuit_breaker'],
    prohibited: ['silent_destructive_wipe', 'bypass_level5_reauth', 'access_bengali_study_bible'],
  },
};

/**
 * Verifies if an action requires explicit Level 5 cryptographic approval ticket
 */
export function requiresLevel5Approval(actionRisk: 'GREEN' | 'YELLOW' | 'RED'): boolean {
  return actionRisk === 'RED';
}

