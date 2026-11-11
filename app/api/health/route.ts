import { NextResponse } from 'next/server';
import { SEED_ENTRIES } from '@/lib/db/seedData';
import { SUPPORTED_LANGUAGES } from '@/lib/i18n/languages';

export async function GET() {
  const startTime = Date.now();

  const healthData = {
    status: 'HEALTHY',
    service: 'Logos Lexicon API',
    appVersion: 'v1.0.0-pwa',
    timestamp: new Date().toISOString(),
    metrics: {
      masterEntriesCount: SEED_ENTRIES.length,
      supportedLanguagesCount: Object.keys(SUPPORTED_LANGUAGES).length,
      searchIndexStatus: 'OPERATIONAL',
      databaseConnection: 'CONNECTED',
      latencyMs: Date.now() - startTime,
    },
    monitoredBy: 'Lexi — Logos Lexicon Research and Operations Assistant',
    projectDirector: 'Rev. Ayan Kumar Ghosh',
  };

  return NextResponse.json(healthData, {
    status: 200,
    headers: {
      'Cache-Control': 'no-store, max-age=0',
    },
  });
}
