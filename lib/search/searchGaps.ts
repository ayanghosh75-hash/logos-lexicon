import fs from 'fs';
import path from 'path';

export interface SearchGap {
  id: string;
  query: string;
  cleanQuery: string;
  firstSearchedAt: string;
  lastSearchedAt: string;
  searchCount: number;
  language: string;
  suggestedCorrection?: string;
  status: 'pending' | 'queued' | 'researching' | 'completed';
  priorityScore: number; // 1 - 100
  userRequested: boolean;
  notes?: string;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const GAPS_FILE = path.join(DATA_DIR, 'search_gaps.json');

// In-memory cache for fast access
let inMemoryGaps: SearchGap[] = [];
let initialized = false;

function ensureDataFile(): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(GAPS_FILE)) {
      fs.writeFileSync(GAPS_FILE, JSON.stringify([], null, 2), 'utf-8');
      inMemoryGaps = [];
    } else {
      const content = fs.readFileSync(GAPS_FILE, 'utf-8');
      inMemoryGaps = JSON.parse(content || '[]');
    }
    initialized = true;
  } catch (err) {
    console.warn('[SearchGaps] File system error, using memory fallback:', err);
    inMemoryGaps = inMemoryGaps || [];
    initialized = true;
  }
}

function persist(): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(GAPS_FILE, JSON.stringify(inMemoryGaps, null, 2), 'utf-8');
  } catch (err) {
    console.warn('[SearchGaps] Could not persist to disk:', err);
  }
}

// Calculate theological priority score based on frequency and theological keywords
function calculatePriorityScore(count: number, query: string): number {
  let score = Math.min(count * 15, 60); // base count contributes up to 60 points

  const highValueTheologicalKeywords = [
    'god', 'christ', 'jesus', 'spirit', 'trinity', 'grace', 'faith', 'cross', 'salvation',
    'justification', 'sanctification', 'atonement', 'resurrection', 'covenant', 'gospel',
    'bible', 'church', 'prayer', 'creation', 'eschatology', 'iswar', 'anugraha', 'tritwa'
  ];

  const lower = query.toLowerCase();
  for (const kw of highValueTheologicalKeywords) {
    if (lower.includes(kw)) {
      score += 25;
      break;
    }
  }

  return Math.min(Math.max(score, 10), 100);
}

export function recordSearchGap(
  query: string,
  language = 'en',
  userRequested = false,
  suggestedCorrection?: string
): SearchGap {
  if (!initialized) ensureDataFile();

  const cleanQuery = query.trim().toLowerCase();
  const existingIndex = inMemoryGaps.findIndex((g) => g.cleanQuery === cleanQuery);

  const now = new Date().toISOString();

  if (existingIndex >= 0) {
    const gap = inMemoryGaps[existingIndex];
    gap.searchCount += 1;
    gap.lastSearchedAt = now;
    if (userRequested) gap.userRequested = true;
    if (suggestedCorrection && !gap.suggestedCorrection) {
      gap.suggestedCorrection = suggestedCorrection;
    }
    gap.priorityScore = calculatePriorityScore(gap.searchCount, gap.query);
    persist();
    return gap;
  }

  const newGap: SearchGap = {
    id: `gap-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    query: query.trim(),
    cleanQuery,
    firstSearchedAt: now,
    lastSearchedAt: now,
    searchCount: 1,
    language,
    suggestedCorrection,
    status: userRequested ? 'queued' : 'pending',
    priorityScore: calculatePriorityScore(1, query) + (userRequested ? 20 : 0),
    userRequested,
  };

  inMemoryGaps.unshift(newGap);
  persist();
  return newGap;
}

export function getSearchGaps(statusFilter?: SearchGap['status']): SearchGap[] {
  if (!initialized) ensureDataFile();
  let results = [...inMemoryGaps];
  if (statusFilter) {
    results = results.filter((g) => g.status === statusFilter);
  }
  return results.sort((a, b) => b.priorityScore - a.priorityScore || b.searchCount - a.searchCount);
}

export function updateSearchGapStatus(id: string, status: SearchGap['status']): boolean {
  if (!initialized) ensureDataFile();
  const gap = inMemoryGaps.find((g) => g.id === id);
  if (!gap) return false;
  gap.status = status;
  persist();
  return true;
}
