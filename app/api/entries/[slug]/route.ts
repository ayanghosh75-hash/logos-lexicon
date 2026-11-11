import { NextRequest, NextResponse } from 'next/server';
import { getEntryBySlug } from '@/lib/db/seedData';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const entry = getEntryBySlug(slug);

  if (!entry) {
    return NextResponse.json(
      { error: `Theological entry '${slug}' not found.` },
      { status: 404 }
    );
  }

  return NextResponse.json(entry, {
    status: 200,
    headers: {
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
