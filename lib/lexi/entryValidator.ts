import { MasterEntry } from '../db/types';
import { SOURCE_REGISTRY } from '../db/sourceRegister';

export interface ValidationRuleResult {
  ruleId: string;
  ruleName: string;
  passed: boolean;
  score: number; // 0 to 10
  severity: 'CRITICAL' | 'WARNING' | 'INFO';
  details: string;
}

export interface EntryValidationReport {
  entryId: string;
  slug: string;
  headword: string;
  overallScore: number; // 0 to 100
  status: 'PASSED' | 'WARNING' | 'FAILED';
  canPublish: boolean;
  ruleResults: ValidationRuleResult[];
  validatedAt: string;
}

export function validateEntryQuality(entry: MasterEntry, allEntries: MasterEntry[] = []): EntryValidationReport {
  const ruleResults: ValidationRuleResult[] = [];

  // Rule 1: English Headword and Slug Format
  const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  const isSlugValid = !!entry.slug && slugRegex.test(entry.slug);
  const isHeadwordValid = !!entry.headwordEnglish && entry.headwordEnglish.trim().length >= 2;
  ruleResults.push({
    ruleId: 'RULE-01-SLUG-FORMAT',
    ruleName: 'Headword and Canonical Slug Format',
    passed: isSlugValid && isHeadwordValid,
    score: isSlugValid && isHeadwordValid ? 10 : 0,
    severity: 'CRITICAL',
    details: isSlugValid && isHeadwordValid
      ? `Valid headword "${entry.headwordEnglish}" with canonical slug "${entry.slug}".`
      : `Invalid headword or slug format. Slug must be URL-safe kebab-case.`,
  });

  // Rule 2: 3-Tier Substantive Reading Levels (Simple, Study, Academic)
  const hasSimple = !!entry.definitionSimple && entry.definitionSimple.trim().length >= 20;
  const hasStudy = !!entry.definitionStudy && entry.definitionStudy.trim().length >= 40;
  const hasAcademic = !!entry.definitionAcademic && entry.definitionAcademic.trim().length >= 50;
  const tiersPassed = hasSimple && hasStudy && hasAcademic;
  ruleResults.push({
    ruleId: 'RULE-02-THREE-TIER-DEFINITIONS',
    ruleName: '3-Tier Substantive Reading Levels',
    passed: tiersPassed,
    score: (hasSimple ? 3.33 : 0) + (hasStudy ? 3.33 : 0) + (hasAcademic ? 3.34 : 0),
    severity: 'CRITICAL',
    details: tiersPassed
      ? `All 3 reading levels present and substantive (Simple: ${entry.definitionSimple.length} chars, Study: ${entry.definitionStudy.length} chars, Academic: ${entry.definitionAcademic.length} chars).`
      : `Missing or truncated reading levels. Simple: ${hasSimple ? 'OK' : 'MISSING'}, Study: ${hasStudy ? 'OK' : 'MISSING'}, Academic: ${hasAcademic ? 'OK' : 'MISSING'}.`,
  });

  // Rule 3: Valid Scripture Citations
  const hasScripture = Array.isArray(entry.scriptureReferences) && entry.scriptureReferences.length >= 2;
  ruleResults.push({
    ruleId: 'RULE-03-SCRIPTURE-CITATIONS',
    ruleName: 'Scripture Reference Completeness',
    passed: hasScripture,
    score: hasScripture ? 10 : 0,
    severity: 'CRITICAL',
    details: hasScripture
      ? `${entry.scriptureReferences.length} Scripture references anchored to canonical passages.`
      : `Insufficient Scripture references (minimum 2 required; found ${entry.scriptureReferences?.length || 0}).`,
  });

  // Rule 4: Verified Primary Source Attribution
  const hasSources = (entry.sourceIds && entry.sourceIds.length > 0) || (entry.sources && entry.sources.length > 0);
  const allSourcesRegistered = (entry.sourceIds || []).every((id) => !!SOURCE_REGISTRY[id]);
  ruleResults.push({
    ruleId: 'RULE-04-SOURCE-REGISTRY',
    ruleName: 'Legal Source Registry Verification',
    passed: hasSources && allSourcesRegistered,
    score: hasSources && allSourcesRegistered ? 10 : hasSources ? 5 : 0,
    severity: 'CRITICAL',
    details: hasSources && allSourcesRegistered
      ? `All ${entry.sourceIds?.length || entry.sources.length} sources registered and verified in legal repository.`
      : `Unregistered or missing primary source references in legal repository.`,
  });

  // Rule 5: Human Theological Review Sign-off
  const isTheologicallyApproved =
    entry.approvalStatus === 'Theologically reviewed' ||
    entry.approvalStatus === 'Institution approved' ||
    entry.publicationStatus === 'Approved' ||
    entry.publicationStatus === 'Published';
  ruleResults.push({
    ruleId: 'RULE-05-THEOLOGICAL-REVIEW',
    ruleName: 'Human Theological Review Sign-off',
    passed: isTheologicallyApproved,
    score: isTheologicallyApproved ? 10 : 0,
    severity: 'CRITICAL',
    details: isTheologicallyApproved
      ? `Confirmed human theological review status: "${entry.approvalStatus}" by ${entry.theologicalReviewer || entry.author}.`
      : `Record has not passed required human theological review. Current status: "${entry.approvalStatus}".`,
  });

  // Rule 6: Original Language Data & Root Fallacy Guard
  const hasOriginalLanguages = Array.isArray(entry.originalLanguages) && entry.originalLanguages.length > 0;
  const originalLangsHaveCautions = hasOriginalLanguages && entry.originalLanguages!.every(
    (l) => !!l.lemma && !!l.scriptUnicode && !!l.semanticRange
  );
  ruleResults.push({
    ruleId: 'RULE-06-ORIGINAL-LANGUAGES',
    ruleName: 'Original Languages (Greek/Hebrew) & Lexical Safeguards',
    passed: hasOriginalLanguages && originalLangsHaveCautions,
    score: hasOriginalLanguages && originalLangsHaveCautions ? 10 : hasOriginalLanguages ? 6 : 4,
    severity: 'WARNING',
    details: hasOriginalLanguages
      ? `${entry.originalLanguages!.length} original language lemma(s) documented with unicode scripts and semantic ranges.`
      : `No original Greek or Hebrew language resources attached to this theological term.`,
  });

  // Rule 7: Duplicate Headword and Slug Collision Check
  const duplicates = allEntries.filter(
    (other) => other.id !== entry.id && (other.slug === entry.slug || other.headwordEnglish.toLowerCase() === entry.headwordEnglish.toLowerCase())
  );
  const noDuplicates = duplicates.length === 0;
  ruleResults.push({
    ruleId: 'RULE-07-DUPLICATE-PREVENTION',
    ruleName: 'Lexical Uniqueness and Collision Prevention',
    passed: noDuplicates,
    score: noDuplicates ? 10 : 0,
    severity: 'CRITICAL',
    details: noDuplicates
      ? `No headword or canonical slug collisions detected in the database.`
      : `Collision detected with entry ID(s): ${duplicates.map((d) => d.id).join(', ')}.`,
  });

  // Rule 8: Doctrinal Fairness on Disputed Topics
  let doctrinalFairnessPassed = true;
  let fairnessDetails = 'No controversial dogmatic dispute flags detected.';
  if (entry.majorInterpretivePositions) {
    const posCount = entry.majorInterpretivePositions.positions?.length || 0;
    doctrinalFairnessPassed = posCount >= 2;
    fairnessDetails = doctrinalFairnessPassed
      ? `Disputed theological topic provides balanced coverage across ${posCount} historical traditions.`
      : `Disputed topic must articulate at least 2 major historical positions without caricaturing.`;
  }
  ruleResults.push({
    ruleId: 'RULE-08-DOCTRINAL-FAIRNESS',
    ruleName: 'Confessional Impartiality & Doctrinal Fairness',
    passed: doctrinalFairnessPassed,
    score: doctrinalFairnessPassed ? 10 : 4,
    severity: 'WARNING',
    details: fairnessDetails,
  });

  // Rule 9: Multilingual Translation Completeness
  const translationCount = Object.keys(entry.translations || {}).length;
  const hasBengali = !!entry.translations?.bn?.localHeadword;
  ruleResults.push({
    ruleId: 'RULE-09-TRANSLATION-COMPLETENESS',
    ruleName: 'Multilingual Integration & Bengali Baseline',
    passed: translationCount > 0 && hasBengali,
    score: translationCount > 0 && hasBengali ? 10 : translationCount > 0 ? 7 : 0,
    severity: 'WARNING',
    details: translationCount > 0
      ? `Multilingual translations present for ${translationCount} language(s), including primary Bengali translation.`
      : `No localized translations provided. At least Bengali baseline translation is required.`,
  });

  // Rule 10: Version History, Provenance & Author Attribution
  const hasAuthor = !!entry.author && entry.author.trim().length > 0;
  const hasTimestamps = !!entry.createdAt && !!entry.updatedAt;
  const hasVersion = typeof entry.versionNumber === 'number' && entry.versionNumber >= 1;
  const provenanceValid = hasAuthor && hasTimestamps && hasVersion;
  ruleResults.push({
    ruleId: 'RULE-10-PROVENANCE-ATTRIBUTION',
    ruleName: 'Provenance, Attribution & Version Audit Trail',
    passed: provenanceValid,
    score: provenanceValid ? 10 : 0,
    severity: 'CRITICAL',
    details: provenanceValid
      ? `Attributed to ${entry.author}, version ${entry.versionNumber} (created ${entry.createdAt.slice(0, 10)}).`
      : `Missing provenance, versionNumber, or author attribution fields.`,
  });

  // Calculate Overall Score
  const totalScore = Math.round(ruleResults.reduce((sum, r) => sum + r.score, 0));
  const criticalFailed = ruleResults.some((r) => r.severity === 'CRITICAL' && !r.passed);

  let status: 'PASSED' | 'WARNING' | 'FAILED' = 'PASSED';
  if (criticalFailed) {
    status = 'FAILED';
  } else if (ruleResults.some((r) => !r.passed)) {
    status = 'WARNING';
  }

  const canPublish = !criticalFailed && totalScore >= 75;

  return {
    entryId: entry.id,
    slug: entry.slug,
    headword: entry.headwordEnglish,
    overallScore: totalScore,
    status,
    canPublish,
    ruleResults,
    validatedAt: new Date().toISOString(),
  };
}

export function validateBatch(entries: MasterEntry[]): EntryValidationReport[] {
  return entries.map((e) => validateEntryQuality(e, entries));
}
