import { NextResponse } from 'next/server';
import {
  generateCoverageDashboardData,
  generateLicensingAndAttributionReport,
  generateTruthfulAnalyticsReport,
  getMonetisationSafetyConfig,
  generate12HourOperationalReport,
} from '@/lib/lexi/reporting';
import { getSearchGaps } from '@/lib/search/searchGaps';
import { getAutopilotStatus } from '@/lib/lexi/autopilot';
import { getAuditLogs } from '@/lib/lexi/auditLog';

export async function GET() {
  const gaps = getSearchGaps();
  const autopilot = getAutopilotStatus();
  const logs = getAuditLogs();

  return NextResponse.json({
    success: true,
    generatedAt: new Date().toISOString(),
    coverage: generateCoverageDashboardData(gaps),
    licensing: generateLicensingAndAttributionReport(),
    analytics: generateTruthfulAnalyticsReport(gaps),
    monetisation: getMonetisationSafetyConfig(),
    operationalReport12h: generate12HourOperationalReport(autopilot, logs, gaps),
  });
}

