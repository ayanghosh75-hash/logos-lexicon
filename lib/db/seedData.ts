import { MasterEntry } from './types';
import { PILOT_BATCH_100 } from './pilotBatch100';
import { EXPANDED_THEOLOGICAL_VOCABULARY } from './expandedTheologicalVocabulary';
import { MULTILINGUAL_SEED_SUPPLEMENT } from './multilingualSeedSupplement';

const rawCombined = [...PILOT_BATCH_100, ...EXPANDED_THEOLOGICAL_VOCABULARY];
const seenSlugs = new Set<string>();
const uniqueMasterEntries: MasterEntry[] = [];

for (const entry of rawCombined) {
  if (!seenSlugs.has(entry.slug)) {
    seenSlugs.add(entry.slug);
    uniqueMasterEntries.push(entry);
  }
}

export const SEED_ENTRIES: MasterEntry[] = uniqueMasterEntries.map((entry) => {
  const supplement = MULTILINGUAL_SEED_SUPPLEMENT[entry.slug];
  if (!supplement) return entry;
  return {
    ...entry,
    translations: {
      ...entry.translations,
      ...supplement,
    },
  };
});


export function getEntryBySlug(slug: string): MasterEntry | undefined {
  return SEED_ENTRIES.find((entry) => entry.slug === slug);
}

export function getAllEntries(): MasterEntry[] {
  return SEED_ENTRIES;
}

export function getPublishedEntries(): MasterEntry[] {
  return SEED_ENTRIES.filter(
    (entry) => entry.publicationStatus === 'Published' || (!entry.publicationStatus && entry.approvalStatus === 'Theologically reviewed')
  );
}

export function getStagingCounts() {
  const published = SEED_ENTRIES.filter((e) => e.publicationStatus === 'Published').length;
  const approved = SEED_ENTRIES.filter((e) => e.publicationStatus === 'Approved').length;
  const awaitingReview = SEED_ENTRIES.filter(
    (e) =>
      e.publicationStatus === 'Theological review' ||
      e.publicationStatus === 'Editorial review' ||
      e.publicationStatus === 'Research queued'
  ).length;
  const drafts = SEED_ENTRIES.filter((e) => e.publicationStatus === 'Drafting' || e.publicationStatus === 'Source discovered').length;
  const rejected = SEED_ENTRIES.filter((e) => e.evidenceStatus === 'Rejected' || e.publicationStatus === 'Archived').length;
  const copyrightBlocked = SEED_ENTRIES.filter((e) => e.publicationStatus === 'Licence under review').length;

  return {
    published,
    approved,
    awaitingReview,
    drafts,
    rejected,
    copyrightBlocked,
    total: SEED_ENTRIES.length,
  };
}

export function getLetterDistribution(entries: MasterEntry[] = getPublishedEntries()): Record<string, number> {
  const counts: Record<string, number> = {};
  for (let i = 65; i <= 90; i++) {
    counts[String.fromCharCode(i)] = 0;
  }
  for (const entry of entries) {
    const firstLetter = entry.headwordEnglish.trim().charAt(0).toUpperCase();
    if (counts[firstLetter] !== undefined) {
      counts[firstLetter]++;
    }
  }
  return counts;
}
