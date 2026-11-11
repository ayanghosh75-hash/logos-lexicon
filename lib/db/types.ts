export type ApprovalStatus =
  | 'AI-assisted draft'
  | 'Human-translated draft'
  | 'Language reviewed'
  | 'Theologically reviewed'
  | 'Common Christian usage'
  | 'Institution approved'
  | 'Alternative terminology'
  | 'Disputed terminology'
  | 'Revision required'
  | 'Archived';

export type PublicationStatus =
  | 'Source discovered'
  | 'Licence under review'
  | 'Research queued'
  | 'Drafting'
  | 'Editorial review'
  | 'Theological review'
  | 'Original-language review'
  | 'Language review'
  | 'Approved'
  | 'Published'
  | 'Correction required'
  | 'Archived';

export type EvidenceStatus =
  | 'Strongly supported'
  | 'Supported'
  | 'Requires further verification'
  | 'Disputed'
  | 'Insufficient evidence'
  | 'Rejected';

export type SourceImportStatus =
  | 'Approved for reuse'
  | 'Approved with attribution'
  | 'Approved with share-alike conditions'
  | 'Citation only'
  | 'Permission requested'
  | 'Licence uncertain'
  | 'Restricted'
  | 'Rejected'
  | 'Source unavailable';

export type ReadingLevel = 'simple' | 'study' | 'academic';

export type SourceClassification =
  | 'Public domain'
  | 'Openly licensed'
  | 'Used with written permission'
  | 'Original commissioned material'
  | 'Citation-only source';

export interface SourceCitation {
  sourceId: string;
  shortTitle: string;
  fullCitation: string;
  classification: SourceClassification;
  pageOrSection?: string;
  quotation?: string;
  licenseDetails?: string;
}

export interface SourceRegistryEntry {
  sourceId: string;
  shortTitle: string;
  authorOrOrg: string;
  publisher?: string;
  publicationDate?: string;
  url?: string;
  dateAccessed: string;
  licenceName: string;
  licenceUrl?: string;
  copyrightStatus:
    | 'Public domain'
    | 'CC0'
    | 'CC BY'
    | 'CC BY-SA'
    | 'Authorized API'
    | 'Written permission'
    | 'Original commissioned'
    | 'Restricted'
    | 'Unknown';
  permittedUse: string;
  prohibitedUse: string;
  attributionFormat: string;
  evidenceFile?: string;
  reliabilityRating: 'Primary text' | 'High' | 'Moderate' | 'Secondary' | 'Under review';
  theologicalTradition: string;
  languagesAvailable: string[];
  contentCategories: string[];
  importStatus: SourceImportStatus;
  copyrightReviewer?: string;
  reviewNotes?: string;
}

export interface TheologicalPathDefinition {
  id: string;
  name: string;
  division: 'Biblical & Linguistic' | 'Systematic Theology' | 'Historical & Confessional' | 'Practical & Applied';
  description: string;
}

export interface OriginalLanguageResource {
  language: 'Biblical Greek' | 'Biblical Hebrew' | 'Biblical Aramaic';
  scriptUnicode: string;
  lemma: string;
  transliteration: string;
  pronunciation: string;
  partOfSpeech: string;
  morphology?: string;
  semanticRange: string;
  strongsNumber?: string;
  biblicalOccurrencesCount?: number;
  importantOccurrences: string[];
  translationCautions: string; // Warnings against illegitimate totality transfer or root fallacies
  sources: string[];
  verified: boolean;
}

export interface TranslatedEntry {
  masterEntryId: string;
  languageCode: string;
  localHeadword: string;
  alternativeTerminology?: string[];
  transliteration?: string;
  pronunciation?: string;
  
  definitionSimple: string;
  definitionStudy: string;
  definitionAcademic: string;
  
  regionalUsage?: string;
  denominationalUsage?: string;
  translationNotes?: string;
  
  approvalStatus: ApprovalStatus;
  approvalInstitutionName?: string;
  needsSyncWithMaster: boolean;
  
  translator?: string;
  languageReviewer?: string;
  theologicalReviewer?: string;
  versionNumber: number;
  lastUpdated: string;
}

export interface MasterEntry {
  id: string;
  slug: string;
  headwordEnglish: string;
  alternativeSpellings?: string[];
  pronunciationIpa?: string;
  partOfSpeech: string;
  category: string;
  theologicalPaths?: string[]; // Multiple relevant paths from the 50 paths
  
  definitionSimple: string;
  definitionStudy: string;
  definitionAcademic: string;
  
  biblicalUsage: string;
  scriptureReferences: string[];
  historicalDevelopment?: string;
  theologicalSignificance: string;
  majorInterpretivePositions?: {
    issue: string;
    biblicalEvidence: string;
    historicalBackground: string;
    positions: { name: string; description: string; traditions: string[] }[];
  };
  denominationalDistinctions?: {
    tradition: string;
    positionSummary: string;
  }[];
  pastoralRelevance?: string;
  translationCautions?: string;
  
  synonyms?: string[];
  antonyms?: string[];
  relatedEntries?: string[];
  
  originalLanguages?: OriginalLanguageResource[];
  sources: SourceCitation[];
  sourceIds?: string[];
  
  author: string;
  languageReviewer?: string;
  theologicalReviewer?: string;
  approvalStatus: ApprovalStatus;
  publicationStatus?: PublicationStatus;
  evidenceStatus?: EvidenceStatus;
  approvalInstitutionName?: string;
  
  versionNumber: number;
  createdAt: string;
  updatedAt: string;
  
  translations: Record<string, TranslatedEntry>;
}

export interface LexiIncidentReport {
  id: string;
  timestamp: string;
  checkName: string;
  status: 'OPERATIONAL' | 'DEGRADED' | 'OUTAGE';
  targetUrl: string;
  details: string;
  autoRepaired: boolean;
  repairDetails?: string;
}

export interface Lexi12HourReport {
  generatedAt: string;
  uptimePercentage: number;
  checksCompletedCount: number;
  activeIncidentsCount: number;
  automaticRepairsCount: number;
  currentAppVersion: string;
  searchPerformanceMs: number;
  searchesNoResultCount: number;
  unreviewedDraftsCount: number;
  completedTranslationsCount: number;
  approvalQueueItemsCount: number;
  backupStatus: 'HEALTHY' | 'STALE' | 'ATTENTION_REQUIRED';
}

export interface AcquisitionPipelineReport {
  sourcesDiscovered: number;
  sourcesApproved: number;
  sourcesRejected: number;
  licenceReviewQueueCount: number;
  termsProposed: number;
  draftsCreated: number;
  entriesUnderReview: number;
  entriesPublished: number;
  missingTranslationsCount: number;
  greekHebrewBacklogCount: number;
  copyrightWarningsCount: number;
  duplicateWarningsCount: number;
  citationWarningsCount: number;
  lastSuccessfulRun: string;
}
