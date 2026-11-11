import { NextRequest, NextResponse } from 'next/server';
import { recordSearchGap, getSearchGaps, updateSearchGapStatus } from '@/lib/search/searchGaps';
import { verifySessionToken, ADMIN_COOKIE_NAME } from '@/lib/admin/auth';

// Rate limiting for search gap submissions: max 20 per minute per IP
const gapSubmissions = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = gapSubmissions.get(ip);
  if (!entry || entry.resetAt <= now) {
    gapSubmissions.set(ip, { count: 1, resetAt: now + 60 * 1000 });
    return false;
  }
  if (entry.count >= 20) {
    return true;
  }
  entry.count += 1;
  return false;
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get('status') as any;
    const gaps = getSearchGaps(status);
    return NextResponse.json({
      success: true,
      count: gaps.length,
      gaps,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch search gaps' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || '127.0.0.1';

  try {
    const body = await req.json();
    const { query, language, userRequested, suggestedCorrection, id, updateStatus } = body;

    // Mutating status requires verified administrator session
    if (id && updateStatus) {
      const token = req.cookies.get(ADMIN_COOKIE_NAME)?.value;
      const admin = verifySessionToken(token);
      if (!admin) {
        return NextResponse.json(
          { success: false, error: 'Unauthorized. Administrative session required to update status.' },
          { status: 401 }
        );
      }
      const updated = updateSearchGapStatus(id, updateStatus);
      return NextResponse.json({ success: updated });
    }

    if (!query || typeof query !== 'string' || !query.trim()) {
      return NextResponse.json(
        { success: false, error: 'Query parameter is required' },
        { status: 400 }
      );
    }

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: 'Rate limit exceeded. Please wait a moment.' },
        { status: 429 }
      );
    }

    // Sanitize query to max 100 chars
    const sanitizedQuery = query.trim().slice(0, 100);
    const sanitizedCorrection = suggestedCorrection ? String(suggestedCorrection).slice(0, 100) : undefined;

    const gap = recordSearchGap(sanitizedQuery, language || 'en', !!userRequested, sanitizedCorrection);

    return NextResponse.json({
      success: true,
      gap,
      message: userRequested
        ? 'Term requested successfully. Queued for theological review and Lexi research pipeline.'
        : 'Search gap recorded.',
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to record search gap' },
      { status: 500 }
    );
  }
}
