import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    {
      version: '1.0.0',
      build: '2026.09.18.1',
      environment: process.env.NODE_ENV || 'production',
      releaseNotes:
        'Logos Lexicon MVP: 15 interface/dictionary languages, 3 reading levels, native RTL Nastaliq Urdu & Hebrew, PWA offline packs, and Lexi operations assistant.',
      criticalUpdate: false,
    },
    {
      status: 200,
      headers: {
        'Cache-Control': 'no-cache',
      },
    }
  );
}
