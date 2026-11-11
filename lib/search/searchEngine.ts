import { getPublishedEntries } from '../db/seedData';
import { MasterEntry } from '../db/types';

export interface SearchResult {
  entry: MasterEntry;
  matchedField: string;
  matchedText: string;
  matchedLanguage: string;
  score: number;
}

export interface TypoSuggestion {
  text: string;
  slug: string;
  distance: number;
  entry: MasterEntry;
}

export interface EnhancedSearchResult {
  results: SearchResult[];
  didYouMean: TypoSuggestion | null;
  suggestions: TypoSuggestion[];
  suggestedCategories: string[];
}

/**
 * Standard Levenshtein Distance implementation
 */
export function levenshteinDistance(a: string, b: string): number {
  const an = a ? a.length : 0;
  const bn = b ? b.length : 0;
  if (an === 0) return bn;
  if (bn === 0) return an;

  const matrix: number[][] = [];
  for (let i = 0; i <= bn; i++) matrix[i] = [i];
  for (let j = 0; j <= an; j++) matrix[0][j] = j;

  for (let i = 1; i <= bn; i++) {
    for (let j = 1; j <= an; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          Math.min(
            matrix[i][j - 1] + 1,     // insertion
            matrix[i - 1][j] + 1      // deletion
          )
        );
      }
    }
  }

  return matrix[bn][an];
}

/**
 * Normalizes Unicode strings (NFC), removes zero-width characters, and strips
 * Greek breathing/accent marks and Hebrew vowel points (niqqud) for root/script matching.
 */
export function normalizeForSearch(input: string): string {
  if (!input || typeof input !== 'string') return '';
  return input
    .slice(0, 200)
    .normalize('NFD')
    .replace(/[\u0300-\u036f\u0591-\u05C7\u200B-\u200F\uFEFF]/g, '')
    .normalize('NFC')
    .trim()
    .toLowerCase();
}

/**
 * Core search function across headwords, alternative spellings, original languages,
 * translations, scripture references, theological categories/paths, related terms, and definitions.
 * Strictly read-only: never mutates the authoritative content store.
 */
export function searchLexicon(query: string, targetLanguage = 'en'): SearchResult[] {
  if (!query || typeof query !== 'string' || !query.trim()) return [];
  if (query.length > 250) {
    query = query.slice(0, 250);
  }
  // Reject script tags or control characters gracefully (return empty result, no throw)
  if (/<script|javascript:|onerror=|onload=|\0/i.test(query)) {
    return [];
  }

  const cleanQuery = query.normalize('NFC').trim().toLowerCase();
  const rootQuery = normalizeForSearch(query);
  if (!cleanQuery && !rootQuery) return [];

  const results: SearchResult[] = [];
  const publishedEntries = getPublishedEntries();

  for (const entry of publishedEntries) {
    let bestScore = 0;
    let bestField = '';
    let bestText = '';
    let matchedLang = 'en';

    const headLower = entry.headwordEnglish.toLowerCase();

    // 1. Direct English Headword Match (Highest priority)
    if (headLower === cleanQuery || normalizeForSearch(entry.headwordEnglish) === rootQuery) {
      bestScore = 100;
      bestField = 'Headword';
      bestText = entry.headwordEnglish;
    } else if (headLower.includes(cleanQuery) || (rootQuery.length >= 2 && normalizeForSearch(entry.headwordEnglish).includes(rootQuery))) {
      bestScore = 80;
      bestField = 'Headword (Partial)';
      bestText = entry.headwordEnglish;
    }

    // 2. Alternative English Spellings & Synonyms
    if (entry.alternativeSpellings) {
      for (const alt of entry.alternativeSpellings) {
        if (alt.toLowerCase().includes(cleanQuery) || (rootQuery.length >= 2 && normalizeForSearch(alt).includes(rootQuery))) {
          const score = alt.toLowerCase() === cleanQuery ? 90 : 70;
          if (score > bestScore) {
            bestScore = score;
            bestField = 'Synonym / Alternative Spelling';
            bestText = alt;
          }
        }
      }
    }

    // 3. Original Language Match (Greek/Hebrew lemma, transliteration, pointed/unpointed script, Strong's)
    if (entry.originalLanguages) {
      for (const orig of entry.originalLanguages) {
        const scriptNorm = normalizeForSearch(orig.scriptUnicode);
        const translitNorm = normalizeForSearch(orig.transliteration);
        const lemmaNorm = normalizeForSearch(orig.lemma);
        if (
          orig.lemma.toLowerCase().includes(cleanQuery) ||
          orig.transliteration.toLowerCase().includes(cleanQuery) ||
          orig.scriptUnicode.toLowerCase().includes(cleanQuery) ||
          (rootQuery.length >= 2 && (scriptNorm.includes(rootQuery) || translitNorm.includes(rootQuery) || lemmaNorm.includes(rootQuery))) ||
          (orig.strongsNumber && orig.strongsNumber.toLowerCase() === cleanQuery)
        ) {
          const score = 85;
          if (score > bestScore) {
            bestScore = score;
            bestField = `${orig.language} (${orig.scriptUnicode} / ${orig.transliteration})`;
            bestText = `${orig.lemma} - ${orig.semanticRange}`;
            matchedLang = orig.language === 'Biblical Greek' ? 'grc' : 'hbo';
          }
        }
      }
    }

    // 4. Translation Match (Local script, NFC/NFD normalized script, or transliteration)
    for (const [langCode, trans] of Object.entries(entry.translations)) {
      const localNorm = normalizeForSearch(trans.localHeadword);
      const transNorm = trans.transliteration ? normalizeForSearch(trans.transliteration) : '';
      if (
        trans.localHeadword.toLowerCase().includes(cleanQuery) ||
        (rootQuery.length >= 2 && localNorm.includes(rootQuery)) ||
        (trans.transliteration && (trans.transliteration.toLowerCase().includes(cleanQuery) || (rootQuery.length >= 2 && transNorm.includes(rootQuery)))) ||
        (trans.alternativeTerminology &&
          trans.alternativeTerminology.some((t) => t.toLowerCase().includes(cleanQuery)))
      ) {
        const score = langCode === targetLanguage ? 95 : 75;
        if (score > bestScore) {
          bestScore = score;
          bestField = `Translation [${langCode.toUpperCase()}]`;
          bestText = `${trans.localHeadword} (${trans.transliteration || ''})`;
          matchedLang = langCode;
        }
      }
    }

    // 5. Scripture Reference Match
    for (const ref of entry.scriptureReferences) {
      if (ref.toLowerCase().includes(cleanQuery)) {
        if (65 > bestScore) {
          bestScore = 65;
          bestField = 'Scripture Reference';
          bestText = ref;
        }
      }
    }

    // 6. Category & Theological Path Match
    if (
      entry.category.toLowerCase().includes(cleanQuery) ||
      (entry.theologicalPaths && entry.theologicalPaths.some((p) => p.toLowerCase().includes(cleanQuery)))
    ) {
      if (50 > bestScore) {
        bestScore = 50;
        bestField = 'Theological Category';
        bestText = entry.category;
      }
    }

    // 7. Related Terms Match
    if (entry.relatedEntries && entry.relatedEntries.some((r: string) => r.toLowerCase().includes(cleanQuery))) {
      if (45 > bestScore) {
        bestScore = 45;
        bestField = 'Related Term';
        bestText = entry.relatedEntries.join(', ');
      }
    }

    // 8. Definition Match (Full-text fallback)
    if (
      entry.definitionSimple.toLowerCase().includes(cleanQuery) ||
      entry.definitionStudy.toLowerCase().includes(cleanQuery)
    ) {
      if (40 > bestScore) {
        bestScore = 40;
        bestField = 'Definition Content';
        bestText = entry.definitionSimple;
      }
    }

    if (bestScore > 0) {
      results.push({
        entry,
        matchedField: bestField,
        matchedText: bestText,
        matchedLanguage: matchedLang,
        score: bestScore,
      });
    }
  }

  return results.sort((a, b) => b.score - a.score);
}


/**
 * Finds closest matching terms within an allowable edit distance for typo tolerance.
 */
export function findTypoSuggestions(query: string, maxSuggestions = 4): TypoSuggestion[] {
  if (!query || query.trim().length < 3) return [];

  const cleanQuery = query.trim().toLowerCase();
  const publishedEntries = getPublishedEntries();
  const candidates: TypoSuggestion[] = [];

  for (const entry of publishedEntries) {
    const headword = entry.headwordEnglish.toLowerCase();
    const dist = levenshteinDistance(cleanQuery, headword);
    
    // Dynamic max edit distance based on word length
    const maxAllowedDist = cleanQuery.length <= 4 ? 1 : cleanQuery.length <= 8 ? 2 : 3;

    if (dist <= maxAllowedDist && dist > 0) {
      candidates.push({
        text: entry.headwordEnglish,
        slug: entry.slug,
        distance: dist,
        entry,
      });
    } else if (entry.alternativeSpellings) {
      for (const alt of entry.alternativeSpellings) {
        const altDist = levenshteinDistance(cleanQuery, alt.toLowerCase());
        if (altDist <= maxAllowedDist && altDist > 0) {
          candidates.push({
            text: alt,
            slug: entry.slug,
            distance: altDist,
            entry,
          });
          break;
        }
      }
    }
  }

  return candidates.sort((a, b) => a.distance - b.distance).slice(0, maxSuggestions);
}

/**
 * Suggests relevant categories based on keywords in query or overall dictionary categories
 */
export function getRelatedCategories(query: string): string[] {
  const published = getPublishedEntries();
  const allCats = Array.from(new Set(published.map((e) => e.category)));
  if (!query || !query.trim()) return allCats.slice(0, 5);

  const cleanQuery = query.trim().toLowerCase();
  const matched = allCats.filter((cat) => cat.toLowerCase().includes(cleanQuery));
  if (matched.length > 0) return matched;

  // Otherwise return standard theological clusters
  return allCats.slice(0, 5);
}

/**
 * Comprehensive search entrypoint providing direct results, fuzzy did-you-mean,
 * and topical category suggestions.
 */
export function getEnhancedSearchResults(query: string, targetLanguage = 'en'): EnhancedSearchResult {
  const directResults = searchLexicon(query, targetLanguage);
  
  if (directResults.length > 0) {
    return {
      results: directResults,
      didYouMean: null,
      suggestions: [],
      suggestedCategories: [],
    };
  }

  // If 0 direct results, compute typo suggestions and relevant categories
  const suggestions = findTypoSuggestions(query, 3);
  const didYouMean = suggestions.length > 0 ? suggestions[0] : null;
  const suggestedCategories = getRelatedCategories(query);

  return {
    results: [],
    didYouMean,
    suggestions,
    suggestedCategories,
  };
}
