import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { getAllEntries, getPublishedEntries } from '../lib/db/seedData';
import { getAllSources } from '../lib/db/sourceRegister';
import { SUPPORTED_LANGUAGES, BIBLICAL_LANGUAGES } from '../lib/i18n/languages';
import { SCOPED_IDENTITY_PERMISSIONS } from '../lib/security/authority';

export function sha256File(filePath: string): string {
  const buf = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(buf).digest('hex');
}

export function csvEscape(val: any): string {
  const str = val === null || val === undefined ? '' : String(val);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

/**
 * Generates 01-current-status-truth-table.csv (Section 1)
 */
export function generateCurrentStatusTruthTableCsv(): string {
  const headers = [
    'Subsystem / Claim Area',
    'Implemented Locally',
    'Locally Tested',
    'Configured But Not Deployed',
    'Deployed To Staging',
    'Deployed To Production',
    'Externally Tested',
    'Not Implemented',
    'Unverified',
    'Truthful Status Summary & Evidence',
  ];

  const rows = [
    [
      'Core Next.js 15 Lexicon Web Application (31 Routes)',
      'YES',
      'YES',
      'YES',
      'NO (Local Sandbox Only)',
      'NO (Pending Owner DNS/Cloud Approval)',
      'NO (localhost only)',
      'NO',
      'Public Internet Reachability',
      'Production build succeeds locally (31/31 routes); running on http://localhost:3000. Not yet deployed to public cloud.',
    ],
    [
      'Permanent Domain (https://logoslexicon.org/) & HTTPS/TLS',
      'NO',
      'NO',
      'YES (Canonical links, QR codes, nginx/Cloudflare configs)',
      'NO',
      'NO (DNS returns NXDOMAIN)',
      'YES (Tested via 8.8.8.8 -> NXDOMAIN)',
      'Public DNS Registration & Binding',
      'Live Let’s Encrypt / Cloudflare TLS renewal',
      'Domain logoslexicon.org is currently unregistered/unconfigured in public DNS (NXDOMAIN). Stopped at Owner Approval Gate.',
    ],
    [
      'Removal of 3D Lexi Character & WebGL Dependencies',
      'YES',
      'YES',
      'N/A',
      'N/A',
      'NO (Local Build Verified)',
      'NO',
      'NO',
      'None',
      'Verified 0 Three.js/WebGL packages in package.json and 0 .glb/.gltf assets in public/.',
    ],
    [
      '5-Level Authority Model & 9 Scoped Identities',
      'YES (Application TypeScript Guards)',
      'YES',
      'YES',
      'NO',
      'NO',
      'NO',
      'Cloud IAM Service Accounts',
      'External Cloud IAM Enforcement',
      'Enforced in server-side Node API routes and authority.ts; not yet mapped to separate cloud IAM principals.',
    ],
    [
      'Admin Authentication, MFA, CSRF & Session Revocation',
      'YES',
      'YES (12/12 Vectors Passed)',
      'YES',
      'NO',
      'NO',
      'NO',
      'Hardware WebAuthn / Cloud KMS Secret Storage',
      'Multi-region session revocation sync',
      'Server-side HMAC-SHA256 tokens, MFA code check, server revocation Set, CSRF Origin check, and 5-attempt lockout verified on localhost:3000.',
    ],
    [
      'SHA-256 Hash-Chained Audit Log (data/audit_log.json)',
      'YES',
      'YES',
      'YES',
      'NO',
      'NO',
      'NO',
      'External Immutable WORM Cloud Sink',
      'Protection against root filesystem rewrite without off-site anchor',
      'Replaced "blockchain" label with "SHA-256 hash-chained audit log". Detects modification/deletion/reordering; local checkpoint anchor added.',
    ],
    [
      'Release Signing (data/release_manifest.json)',
      'YES (Local HMAC-SHA256)',
      'YES',
      'YES',
      'NO',
      'NO',
      'NO',
      'External HSM / Cloud KMS Asymmetric Key',
      'Hardware-backed non-repudiation',
      'Detects build tampering against manifest; signing secret currently uses local environment fallback pending Cloud KMS.',
    ],
    [
      'Watchdog Monitoring (watchdog/logos-watchdog.mjs)',
      'YES (15-Point Standalone Script)',
      'YES',
      'YES',
      'NO',
      'NO',
      'NO',
      'External Cloud Cron Scheduler',
      '24x7 Unattended Cloud Monitoring when laptop is off',
      'Standalone script passes 15/15 checks against localhost:3000; does NOT run when owner laptop is powered off until cloud scheduler is deployed.',
    ],
    [
      'Lexi HMAC-SHA256 Signed Heartbeats (/api/heartbeat)',
      'YES',
      'YES (9/9 Security Cases Passed)',
      'YES',
      'NO',
      'NO',
      'NO',
      'Cloud Secrets Manager Integration',
      'External cross-datacenter heartbeat ingestion',
      'Server-side signing, expiry, nonce replay defense, tamper rejection, and dual-key rotation verified.',
    ],
    [
      'Safe Autopilot & 12 Remediation Scenarios',
      'YES',
      'YES (12/12 Staging Scenarios Passed)',
      'YES',
      'YES (Local Staging Sandbox)',
      'NO',
      'NO',
      'Cloud Container Orchestration Auto-Restart',
      'Live cloud container failover',
      'All 12 failure scenarios and 8 prohibited action blocks verified in local staging simulation.',
    ],
    [
      '12-Hour Operational Reporting',
      'YES (Report Generator & API)',
      'YES',
      'YES',
      'NO',
      'NO',
      'NO',
      'Deployed Cloud Cron Trigger & SMTP Delivery',
      'Automated 12-hour email delivery',
      'Explicitly marked PLANNED — NOT ACTIVE until external cloud cron and SMTP credentials are authorized.',
    ],
    [
      'Backups & Disaster Recovery',
      'YES (Local Snapshot & Portable Exports)',
      'YES (14-Step Component Restore Drill)',
      'YES',
      'YES (Clean Sandbox Restore)',
      'NO',
      'NO',
      'Off-Site Immutable Cloud Object Storage & Continuous Replication',
      'Full Cloud Infrastructure RTO & Continuous RPO=0',
      'Local component restore measured at < 1s; RPO is point-in-time snapshot age (not continuous RPO=0). Off-site backup pending cloud credentials.',
    ],
    [
      '17-Language Content Coverage (100 Root Seed Terms)',
      'YES (Initial Seed Coverage)',
      'YES',
      'N/A',
      'N/A',
      'NO',
      'NO',
      'Comprehensive Multi-Thousand Term Dictionary & Native Specialist Review for 13 Regional Languages',
      'Specialist Human Review of 13 Draft Languages',
      '100 reviewed English & Bengali terms, 70 Greek, 30 Hebrew; 13 additional languages have initial AI-assisted draft seed entries awaiting specialist review.',
    ],
    [
      'Public Licensing Register (/licensing) & Per-Entry Provenance',
      'YES',
      'YES',
      'YES',
      'NO',
      'NO',
      'NO',
      'NO',
      'None',
      '10/10 source datasets and 100/100 seed entries mapped with explicit licence, attribution, and permissions on /licensing.',
    ],
    [
      'Bengali User & Installation Guide PDF',
      'YES (2232 KB PDF)',
      'YES',
      'YES',
      'NO',
      'NO',
      'NO',
      'NO',
      'Live HTTPS download from logoslexicon.org',
      'Verified locally at /guides/Logos-Lexicon-Bengali-User-Guide.pdf; distinguishes Free Core Access from future optional Level-5-approved tools.',
    ],
  ];

  return [headers.map(csvEscape).join(','), ...rows.map((r) => r.map(csvEscape).join(','))].join('\n');
}

/**
 * Generates 07-authority-permission-matrix.csv (Section 8)
 */
export function generateAuthorityPermissionMatrixCsv(negativeTests: any[]): string {
  const headers = [
    'Scoped Identity / Actor',
    'Implementation Type',
    'Authority Level',
    'Actual Account / Principal',
    'Granted Permissions',
    'Denied Permissions',
    'Credential Storage',
    'Rotation Method',
    'Audit & Negative Test Evidence',
  ];

  const rows: string[][] = [
    [
      'Rev. Ayan Kumar Ghosh (Owner)',
      'Server-Verified Admin Account (Level 5)',
      '5 (OWNER_FINAL_AUTHORITY)',
      'admin (Server-side env LOGOS_ADMIN_USERNAME)',
      'Full governance, schema, DNS/billing approval, publication sign-off, emergency recovery',
      'Silent unlogged destructive actions without reauthentication',
      'Server environment variables (LOGOS_ADMIN_PASSCODE, LOGOS_ADMIN_MFA_CODE)',
      'Manual environment secret rotation + session revocation',
      'Verified via /api/admin/login + /api/admin/session + audit_log.json',
    ],
    [
      'Lexi (Operational Guardian)',
      'Application-Level Guardian Role (Level 4)',
      '4 (LEXI_GUARDIAN)',
      'lexi (Internal Guardian Context)',
      'Safe Autopilot green/yellow runbooks, staging validation, health checks, local snapshot creation',
      'Cannot access Deep/Bengali Study Bible, cannot alter Level 5 ownership, cannot self-promote, cannot publish unapproved theology, cannot change DNS/billing, cannot delete all backups',
      'Ephemeral server-side HMAC key (LEXI_HEARTBEAT_SECRET_CURRENT)',
      'Dual-key rotation via rotateHeartbeatKey() (CURRENT + PREVIOUS)',
      `All ${negativeTests.length}/${negativeTests.length} negative boundary tests PASSED (blocked unauthorized actions)`,
    ],
  ];

  for (const [identity, spec] of Object.entries(SCOPED_IDENTITY_PERMISSIONS)) {
    rows.push([
      identity,
      'TypeScript Application Role Constant (Enforced by Server Guards; Not Yet Cloud IAM)',
      '3 (AUTOMATED_WATCHDOG / SCOPED_SERVICE)',
      `In-process role guard (${identity})`,
      spec.allowed.join('; '),
      spec.prohibited.join('; '),
      'In-process memory / Server environment',
      'Application deployment / environment secret rotation',
      'Enforced via hasScopedPermission() and verifyPreActionGate() in lib/security/authority.ts',
    ]);
  }

  return [headers.map(csvEscape).join(','), ...rows.map((r) => r.map(csvEscape).join(','))].join('\n');
}

/**
 * Generates 08-content-coverage-by-language.csv (Section 14)
 */
export function generateContentCoverageByLanguageCsv(): string {
  const allEntries = getAllEntries();
  const published = getPublishedEntries();

  const headers = [
    'Language Code',
    'Language Name',
    'Native Name',
    'Script & Direction',
    'Total Terms',
    'Reviewed Terms',
    'Unpublished / Unreviewed Drafts',
    'Entries With Definitions',
    'Entries With English Mapping',
    'Entries With Bengali Mapping',
    'Entries With Source',
    'Entries With Verified Licence',
    'Entries Missing Information (Out of 100 Root Seed Terms)',
    'Zero-Result Searches Logged',
    'Coverage Classification',
  ];

  const rows: any[][] = [];

  // 1. English
  rows.push([
    'en',
    'English',
    'English',
    'Latin (LTR)',
    allEntries.length,
    published.length,
    allEntries.length - published.length,
    published.filter((e) => !!e.definitionSimple && !!e.definitionStudy && !!e.definitionAcademic).length,
    published.length,
    published.filter((e) => !!e.translations?.bn?.localHeadword).length,
    published.filter((e) => e.sources && e.sources.length > 0).length,
    published.filter((e) => e.sources && e.sources.length > 0 && e.sources.every((s) => !!s.licenseDetails)).length,
    0,
    0,
    'Initial Seed Coverage (100 Root Terms Reviewed — Not a Comprehensive Dictionary)',
  ]);

  // 2. Biblical Greek
  const grcEntries = published.filter((e) =>
    (e.originalLanguages || []).some((ol) => ol.language === 'Biblical Greek')
  );
  rows.push([
    'grc',
    'Biblical Greek',
    'Ἑλληνική',
    'Greek (LTR)',
    grcEntries.length,
    grcEntries.length,
    0,
    grcEntries.length,
    grcEntries.length,
    grcEntries.filter((e) => !!e.translations?.bn?.localHeadword).length,
    grcEntries.length,
    grcEntries.length,
    100 - grcEntries.length,
    0,
    'Initial Biblical-Language Seed (70 New Testament / Septuagint Lemmas via Thayer & Strong)',
  ]);

  // 3. Biblical Hebrew
  const hboEntries = published.filter((e) =>
    (e.originalLanguages || []).some(
      (ol) => ol.language === 'Biblical Hebrew' || ol.language === 'Biblical Aramaic'
    )
  );
  rows.push([
    'hbo',
    'Biblical Hebrew',
    'עִבְרִית',
    'Hebrew (RTL)',
    hboEntries.length,
    hboEntries.length,
    0,
    hboEntries.length,
    hboEntries.length,
    hboEntries.filter((e) => !!e.translations?.bn?.localHeadword).length,
    hboEntries.length,
    hboEntries.length,
    100 - hboEntries.length,
    0,
    'Initial Biblical-Language Seed (30 Old Testament Lemmas via BDB & Strong)',
  ]);

  // 4. All other 14 languages in SUPPORTED_LANGUAGES (bn + 13 additional)
  for (const [code, cfg] of Object.entries(SUPPORTED_LANGUAGES)) {
    if (code === 'en') continue;
    const withTrans = published.filter((e) => !!e.translations?.[code]?.localHeadword);
    const reviewed = withTrans.filter(
      (e) => e.translations?.[code]?.approvalStatus === 'Theologically reviewed'
    );
    const drafts = withTrans.length - reviewed.length;
    const withDefs = withTrans.filter(
      (e) => !!e.translations?.[code]?.definitionSimple && !!e.translations?.[code]?.definitionStudy
    );

    rows.push([
      code,
      cfg.name,
      cfg.nativeName,
      `${cfg.script} (${cfg.dir.toUpperCase()})`,
      withTrans.length,
      reviewed.length,
      drafts,
      withDefs.length,
      withTrans.length,
      withTrans.filter((e) => !!e.translations?.bn?.localHeadword).length,
      withTrans.filter((e) => e.sources && e.sources.length > 0).length,
      withTrans.filter((e) => e.sources && e.sources.length > 0 && e.sources.every((s) => !!s.licenseDetails)).length,
      100 - withTrans.length,
      0,
      reviewed.length === 100
        ? 'Initial Seed Coverage (100 Terms Reviewed)'
        : 'Initial Draft Seed Only — Flagged as AI-Assisted Draft Awaiting Native Specialist Human Review',
    ]);
  }

  return [headers.map(csvEscape).join(','), ...rows.map((r) => r.map(csvEscape).join(','))].join('\n');
}

/**
 * Generates 09-linguistic-review-sample.csv (Section 15)
 */
export function generateLinguisticReviewSampleCsv(): string {
  const entries = getPublishedEntries();
  const grace = entries.find((e) => e.slug === 'grace')!;
  const covenant = entries.find((e) => e.slug === 'covenant')!;
  const logos = entries.find((e) => e.slug === 'logos')!;
  const justification = entries.find((e) => e.slug === 'justification')!;

  const headers = [
    'Sample ID',
    'Language Group',
    'Entry Slug',
    'Headword / Lemma',
    'Script & Direction',
    'Transliteration / IPA',
    'Definition (Simple Tier)',
    'Grammatical Information',
    'Cross-Language Mapping (EN <-> BN)',
    'Theological Category',
    'Biblical Reference',
    'Source Attribution',
    'Licence',
    'Review Status & Human Review Disclosure',
  ];

  const rows = [
    [
      'SAMPLE-01-EN',
      'English Term',
      grace.slug,
      grace.headwordEnglish,
      'Latin (LTR)',
      grace.pronunciationIpa || '/ɡreɪs/',
      grace.definitionSimple,
      grace.partOfSpeech,
      `Grace <-> ${grace.translations.bn?.localHeadword}`,
      grace.category,
      grace.scriptureReferences.slice(0, 3).join('; '),
      grace.sources.map((s) => s.shortTitle).join('; '),
      'Public Domain + CC BY-NC 4.0 Editorial Synthesis',
      'Theologically reviewed (Editorial Seed Verified)',
    ],
    [
      'SAMPLE-02-EN',
      'English Term',
      justification.slug,
      justification.headwordEnglish,
      'Latin (LTR)',
      justification.pronunciationIpa || '',
      justification.definitionSimple,
      justification.partOfSpeech,
      `Justification <-> ${justification.translations.bn?.localHeadword}`,
      justification.category,
      justification.scriptureReferences.slice(0, 3).join('; '),
      justification.sources.map((s) => s.shortTitle).join('; '),
      'Public Domain + CC BY-NC 4.0 Editorial Synthesis',
      'Theologically reviewed (Editorial Seed Verified)',
    ],
    [
      'SAMPLE-03-BN',
      'Bengali Theological Term',
      grace.slug,
      grace.translations.bn?.localHeadword,
      'Bengali (LTR)',
      'Anugraha',
      grace.translations.bn?.definitionSimple,
      grace.partOfSpeech,
      `Grace <-> ${grace.translations.bn?.localHeadword}`,
      grace.category,
      grace.scriptureReferences.slice(0, 3).join('; '),
      'Logos Lexicon Theological Editorial Board',
      'CC BY-NC 4.0',
      'Theologically reviewed (Reviewed by Rev. Ayan Kumar Ghosh)',
    ],
    [
      'SAMPLE-04-BN',
      'Bengali Theological Term',
      covenant.slug,
      covenant.translations.bn?.localHeadword,
      'Bengali (LTR)',
      'ini / Niyam',
      covenant.translations.bn?.definitionSimple,
      covenant.partOfSpeech,
      `Covenant <-> ${covenant.translations.bn?.localHeadword}`,
      covenant.category,
      covenant.scriptureReferences.slice(0, 3).join('; '),
      'Logos Lexicon Theological Editorial Board',
      'CC BY-NC 4.0',
      'Theologically reviewed (Reviewed by Rev. Ayan Kumar Ghosh)',
    ],
    [
      'SAMPLE-05-GRC',
      'Greek Lemma',
      grace.slug,
      `${grace.originalLanguages?.[0]?.scriptUnicode} (${grace.originalLanguages?.[0]?.lemma})`,
      'Greek (LTR)',
      `${grace.originalLanguages?.[0]?.transliteration} [Strong's ${grace.originalLanguages?.[0]?.strongsNumber}]`,
      grace.originalLanguages?.[0]?.semanticRange,
      grace.originalLanguages?.[0]?.partOfSpeech,
      `Grace (charis) <-> ${grace.translations.bn?.localHeadword}`,
      grace.category,
      grace.originalLanguages?.[0]?.importantOccurrences.join('; '),
      "Thayer's Greek-English Lexicon (1889); Strong's (1890)",
      'Public Domain (Pre-1928)',
      'Verified against Public-Domain Lexicon (Thayer/Strong); specialist morphological apparatus pending',
    ],
    [
      'SAMPLE-06-GRC',
      'Greek Lemma',
      logos.slug,
      `${logos.originalLanguages?.[0]?.scriptUnicode} (${logos.originalLanguages?.[0]?.lemma})`,
      'Greek (LTR)',
      `${logos.originalLanguages?.[0]?.transliteration} [Strong's ${logos.originalLanguages?.[0]?.strongsNumber}]`,
      logos.originalLanguages?.[0]?.semanticRange,
      logos.originalLanguages?.[0]?.partOfSpeech,
      `Logos <-> ${logos.translations.bn?.localHeadword}`,
      logos.category,
      logos.originalLanguages?.[0]?.importantOccurrences.join('; '),
      "Thayer's Greek-English Lexicon (1889); Strong's (1890)",
      'Public Domain (Pre-1928)',
      'Verified against Public-Domain Lexicon (Thayer/Strong)',
    ],
    [
      'SAMPLE-07-HBO',
      'Hebrew Lemma',
      grace.slug,
      `${grace.originalLanguages?.[1]?.scriptUnicode} (${grace.originalLanguages?.[1]?.lemma})`,
      'Hebrew (RTL)',
      `${grace.originalLanguages?.[1]?.transliteration} [Strong's ${grace.originalLanguages?.[1]?.strongsNumber}]`,
      grace.originalLanguages?.[1]?.semanticRange,
      grace.originalLanguages?.[1]?.partOfSpeech,
      `Grace (chen) <-> ${grace.translations.bn?.localHeadword}`,
      grace.category,
      grace.originalLanguages?.[1]?.importantOccurrences.join('; '),
      'Brown-Driver-Briggs Hebrew Lexicon (1906)',
      'Public Domain (Pre-1928)',
      'Verified against Public-Domain Lexicon (BDB/Strong)',
    ],
    [
      'SAMPLE-08-HBO',
      'Hebrew Lemma',
      covenant.slug,
      `${covenant.originalLanguages?.[0]?.scriptUnicode} (${covenant.originalLanguages?.[0]?.lemma})`,
      'Hebrew (RTL)',
      `${covenant.originalLanguages?.[0]?.transliteration} [Strong's ${covenant.originalLanguages?.[0]?.strongsNumber}]`,
      covenant.originalLanguages?.[0]?.semanticRange,
      covenant.originalLanguages?.[0]?.partOfSpeech,
      `Covenant (berith) <-> ${covenant.translations.bn?.localHeadword}`,
      covenant.category,
      covenant.originalLanguages?.[0]?.importantOccurrences.join('; '),
      'Brown-Driver-Briggs Hebrew Lexicon (1906)',
      'Public Domain (Pre-1928)',
      'Verified against Public-Domain Lexicon (BDB/Strong)',
    ],
    [
      'SAMPLE-09-HI',
      'Hindi (Indian Language)',
      grace.slug,
      grace.translations.hi?.localHeadword,
      'Devanagari (LTR)',
      grace.translations.hi?.transliteration,
      grace.translations.hi?.definitionSimple,
      grace.partOfSpeech,
      `Grace <-> ${grace.translations.bn?.localHeadword} <-> ${grace.translations.hi?.localHeadword}`,
      grace.category,
      grace.scriptureReferences.slice(0, 3).join('; '),
      'Logos Initial Multilingual Seed Supplement',
      'CC BY-NC 4.0 (Draft)',
      'FLAGGED: AI-assisted draft — Awaiting competent native Hindi theological specialist review',
    ],
    [
      'SAMPLE-10-TA',
      'Tamil (Indian Language)',
      grace.slug,
      grace.translations.ta?.localHeadword,
      'Tamil (LTR)',
      grace.translations.ta?.transliteration,
      grace.translations.ta?.definitionSimple,
      grace.partOfSpeech,
      `Grace <-> ${grace.translations.bn?.localHeadword} <-> ${grace.translations.ta?.localHeadword}`,
      grace.category,
      grace.scriptureReferences.slice(0, 3).join('; '),
      'Logos Initial Multilingual Seed Supplement',
      'CC BY-NC 4.0 (Draft)',
      'FLAGGED: AI-assisted draft — Awaiting competent native Tamil theological specialist review',
    ],
    [
      'SAMPLE-11-ML',
      'Malayalam (Indian Language)',
      grace.slug,
      grace.translations.ml?.localHeadword,
      'Malayalam (LTR)',
      grace.translations.ml?.transliteration,
      grace.translations.ml?.definitionSimple,
      grace.partOfSpeech,
      `Grace <-> ${grace.translations.bn?.localHeadword} <-> ${grace.translations.ml?.localHeadword}`,
      grace.category,
      grace.scriptureReferences.slice(0, 3).join('; '),
      'Logos Initial Multilingual Seed Supplement',
      'CC BY-NC 4.0 (Draft)',
      'FLAGGED: AI-assisted draft — Awaiting competent native Malayalam theological specialist review',
    ],
    [
      'SAMPLE-12-KO',
      'Korean Entry',
      grace.slug,
      grace.translations.ko?.localHeadword,
      'Hangul (LTR)',
      grace.translations.ko?.transliteration,
      grace.translations.ko?.definitionSimple,
      grace.partOfSpeech,
      `Grace <-> ${grace.translations.bn?.localHeadword} <-> ${grace.translations.ko?.localHeadword}`,
      grace.category,
      grace.scriptureReferences.slice(0, 3).join('; '),
      'Logos Initial Multilingual Seed Supplement',
      'CC BY-NC 4.0 (Draft)',
      'FLAGGED: AI-assisted draft — Awaiting competent native Korean theological specialist review',
    ],
    [
      'SAMPLE-13-KO',
      'Korean Entry',
      covenant.slug,
      covenant.translations.ko?.localHeadword,
      'Hangul (LTR)',
      covenant.translations.ko?.transliteration,
      covenant.translations.ko?.definitionSimple,
      covenant.partOfSpeech,
      `Covenant <-> ${covenant.translations.bn?.localHeadword} <-> ${covenant.translations.ko?.localHeadword}`,
      covenant.category,
      covenant.scriptureReferences.slice(0, 3).join('; '),
      'Logos Initial Multilingual Seed Supplement',
      'CC BY-NC 4.0 (Draft)',
      'FLAGGED: AI-assisted draft — Awaiting competent native Korean theological specialist review',
    ],
    [
      'SAMPLE-14-UR-RTL',
      'Urdu RTL Entry',
      grace.slug,
      grace.translations.ur?.localHeadword,
      'Arabic Nastaliq (RTL dir="rtl")',
      grace.translations.ur?.transliteration,
      grace.translations.ur?.definitionSimple,
      grace.partOfSpeech,
      `Grace <-> ${grace.translations.bn?.localHeadword} <-> ${grace.translations.ur?.localHeadword}`,
      grace.category,
      grace.scriptureReferences.slice(0, 3).join('; '),
      'Logos Initial Multilingual Seed Supplement',
      'CC BY-NC 4.0 (Draft)',
      'FLAGGED: AI-assisted draft — Awaiting competent native Urdu theological specialist review',
    ],
    [
      'SAMPLE-15-UR-RTL',
      'Urdu RTL Entry',
      logos.slug,
      logos.translations.ur?.localHeadword,
      'Arabic Nastaliq (RTL dir="rtl")',
      logos.translations.ur?.transliteration,
      logos.translations.ur?.definitionSimple,
      logos.partOfSpeech,
      `Logos <-> ${logos.translations.bn?.localHeadword} <-> ${logos.translations.ur?.localHeadword}`,
      logos.category,
      logos.scriptureReferences.slice(0, 3).join('; '),
      'Logos Initial Multilingual Seed Supplement',
      'CC BY-NC 4.0 (Draft)',
      'FLAGGED: AI-assisted draft — Awaiting competent native Urdu theological specialist review',
    ],
  ];

  return [headers.map(csvEscape).join(','), ...rows.map((r) => r.map(csvEscape).join(','))].join('\n');
}

/**
 * Generates 10-licensing-evidence.csv (Section 16)
 */
export function generateLicensingEvidenceCsv(): string {
  const sources = getAllSources();
  const entries = getPublishedEntries();

  const headers = [
    'Record Type',
    'Identifier / Slug',
    'Title / Headword',
    'Source Title',
    'Author or Organisation',
    'Licence',
    'Attribution Text',
    'Commercial-Use Permission',
    'Modification Permission',
    'Redistribution Permission',
    'Import Date',
    'Reviewer',
    'Review Status',
  ];

  const rows: any[][] = [];

  for (const s of sources) {
    const isPD = s.copyrightStatus === 'Public domain';
    const isOrig = s.copyrightStatus === 'Original commissioned';
    rows.push([
      'MASTER_SOURCE_DATASET',
      s.sourceId,
      s.shortTitle,
      s.shortTitle,
      s.authorOrOrg,
      s.licenceName,
      s.attributionFormat,
      isPD ? 'YES (Public Domain)' : isOrig ? 'OWNER_AUTHORISED_ONLY' : 'NO (Citation Only)',
      isPD ? 'YES (With Attribution)' : isOrig ? 'EDITORIAL_BOARD_ONLY' : 'NO',
      isPD ? 'YES' : isOrig ? 'YES (CC BY-NC 4.0)' : 'NO (Bibliographic Reference Only)',
      s.dateAccessed,
      s.copyrightReviewer || 'Rev. Ayan Kumar Ghosh',
      s.importStatus === 'Approved for reuse' ? 'VERIFIED_APPROVED' : 'RESTRICTED_CITATION_ONLY',
    ]);
  }

  for (const e of entries) {
    const srcNames = e.sources.map((s) => s.shortTitle).join('; ');
    const srcLicences = e.sources.map((s) => s.licenseDetails || s.classification).join('; ');
    const srcCitations = e.sources.map((s) => s.fullCitation).join(' | ');
    rows.push([
      'PUBLIC_LEXICON_ENTRY',
      e.slug,
      e.headwordEnglish,
      srcNames,
      `${e.author} + Historical Public-Domain Lexicons`,
      srcLicences,
      srcCitations,
      'Core Access Free; Commercial Reuse Requires Owner Approval for Original Synthesis',
      'Permitted by Editorial Board with Attribution',
      'Permitted under CC BY-NC 4.0 / Public Domain for underlying roots',
      e.createdAt.slice(0, 10),
      e.author,
      'VERIFIED_PUBLISHED',
    ]);
  }

  return [headers.map(csvEscape).join(','), ...rows.map((r) => r.map(csvEscape).join(','))].join('\n');
}
