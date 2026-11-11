import { NextRequest, NextResponse } from 'next/server';
import { getAuditLogs, logAuditEvent } from '@/lib/lexi/auditLog';
import { verifySessionToken, validateCsrfOrigin, ADMIN_COOKIE_NAME } from '@/lib/admin/auth';

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get(ADMIN_COOKIE_NAME)?.value;
    const user = verifySessionToken(token);
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized. Valid server-verified session token required.' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get('limit') || '50', 10);
    const logs = getAuditLogs(limit);
    return NextResponse.json({ success: true, count: logs.length, logs });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const origin = req.headers.get('origin');
    const host = req.headers.get('host');
    if (!validateCsrfOrigin(origin, host)) {
      return NextResponse.json(
        { success: false, error: 'CSRF validation failed: untrusted Origin header.' },
        { status: 403 }
      );
    }

    const token = req.cookies.get(ADMIN_COOKIE_NAME)?.value;
    const user = verifySessionToken(token);
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized. Valid server-verified session token required.' },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { instruction, riskLevel, triageSummary, actionsTaken, outcome, details } = body;

    const entry = logAuditEvent({
      operator: `${user.displayName} (Level ${user.authorityLevel})`,
      instruction: instruction || 'Administrative Action',
      riskLevel: riskLevel || 'GREEN',
      triageSummary: triageSummary || 'Direct action logged',
      actionsTaken: actionsTaken || [],
      outcome: outcome || 'SUCCESS',
      details,
    });

    return NextResponse.json({ success: true, entry });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

