import { NextRequest, NextResponse } from 'next/server';
import { searchLexicon } from '@/lib/search/searchEngine';
import { getPublishedEntries, getAllEntries } from '@/lib/db/seedData';
import { verifySessionToken, ADMIN_COOKIE_NAME } from '@/lib/admin/auth';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const rawQuery = searchParams.get('q');
  const lang = searchParams.get('lang') || 'en';
  const requestedAll = searchParams.get('all') === 'true';

  // Security: Only allow authenticated administrators to view unreviewed drafts / all entries
  let canViewAll = false;
  if (requestedAll) {
    const token = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
    const admin = verifySessionToken(token);
    canViewAll = !!admin;
  }

  const entriesToReturn = canViewAll ? getAllEntries() : getPublishedEntries();

  if (!rawQuery) {
    return NextResponse.json({
      total: entriesToReturn.length,
      entries: entriesToReturn,
    });
  }

  // Security: Enforce maximum query length of 100 characters to prevent ReDoS / CPU spike
  const sanitizedQuery = rawQuery.trim().slice(0, 100);

  const results = searchLexicon(sanitizedQuery, lang);
  return NextResponse.json({
    query: sanitizedQuery,
    matchedCount: results.length,
    results,
  });
}
