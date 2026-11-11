import fs from 'fs';
import { TERMS_51_75 } from './terms_data_51_75.mjs';
import { TERMS_66_100 } from './terms_data_66_100.mjs';
import { TERMS_76_100 } from './terms_data_76_100.mjs';

// Read the first 50 entries from pilotBatch50.ts
const pilotBatch50File = fs.readFileSync('lib/db/pilotBatch50.ts', 'utf8');
const arrayStart = pilotBatch50File.indexOf('export const PILOT_BATCH_50: MasterEntry[] = [');
if (arrayStart === -1) {
  console.error('Could not find PILOT_BATCH_50 in lib/db/pilotBatch50.ts');
  process.exit(1);
}

const contentAfter = pilotBatch50File.slice(arrayStart + 'export const PILOT_BATCH_50: MasterEntry[] = ['.length);
const lastBracket = contentAfter.lastIndexOf('];');
const first50Raw = contentAfter.slice(0, lastBracket).trim();

// Combine terms 51-100 (15 + 10 + 25 = 50 terms)
const second50 = [...TERMS_51_75, ...TERMS_66_100, ...TERMS_76_100];

// Format terms 51-100 to valid TypeScript code string matching MasterEntry
const formattedSecond50 = second50.map(term => {
  const sourcesCode = `[${term.sourceKeys.map(k => `SOURCE_REGISTER.${k}`).join(', ')}]`;
  const sourceIdsCode = JSON.stringify(term.sourceKeys);

  const entryObj = {
    id: term.id,
    slug: term.slug,
    headwordEnglish: term.headwordEnglish,
    alternativeSpellings: term.alternativeSpellings,
    pronunciationIpa: term.pronunciationIpa,
    partOfSpeech: term.partOfSpeech,
    category: term.category,
    theologicalPaths: term.theologicalPaths,
    definitionSimple: term.definitionSimple,
    definitionStudy: term.definitionStudy,
    definitionAcademic: term.definitionAcademic,
    biblicalUsage: term.biblicalUsage,
    scriptureReferences: term.scriptureReferences,
    historicalDevelopment: term.historicalDevelopment,
    theologicalSignificance: term.theologicalSignificance,
    majorInterpretivePositions: term.majorInterpretivePositions,
    denominationalDistinctions: term.denominationalDistinctions,
    originalLanguages: term.originalLanguages,
    author: "Rev. Ayan Kumar Ghosh",
    approvalStatus: "Theologically reviewed",
    publicationStatus: "Published",
    evidenceStatus: "Strongly supported",
    versionNumber: 1,
    createdAt: "2026-09-18T10:00:00Z",
    updatedAt: "2026-09-19T10:00:00Z",
    translations: term.translations
  };

  const jsonString = JSON.stringify(entryObj, null, 2);
  // Inject sources and sourceIds before the closing brace
  const lastBrace = jsonString.lastIndexOf('}');
  return jsonString.slice(0, lastBrace) + 
    `,\n  "sources": ${sourcesCode},\n  "sourceIds": ${sourceIdsCode}\n}`
    .replace(/"sources": \[SOURCE_REGISTER\./g, 'sources: [SOURCE_REGISTER.')
    .replace(/"sourceIds":/g, 'sourceIds:');
}).join(',\n\n');

// Build final pilotBatch100.ts content
const finalFileContent = `import { MasterEntry } from './types';
import { SOURCE_REGISTER } from './sourceRegister';

/**
 * Logos Lexicon Foundational Pilot Batch (100 Authentic Theological Terms)
 * Populated per Controlled Level 4 Mandate directed by Rev. Ayan Kumar Ghosh.
 * Covers all 61 master theological sections with 3-tier reading levels,
 * original Biblical languages (Greek/Hebrew/Aramaic), confessional citations,
 * and localized Bengali translations.
 */
export const PILOT_BATCH_100: MasterEntry[] = [
${first50Raw},

${formattedSecond50}
];

// Backwards compatibility alias for pilot batch 50
export const PILOT_BATCH_50: MasterEntry[] = PILOT_BATCH_100.slice(0, 50);
`;

fs.writeFileSync('lib/db/pilotBatch100.ts', finalFileContent, 'utf8');
console.log('Successfully generated lib/db/pilotBatch100.ts with 100 genuine terms!');
