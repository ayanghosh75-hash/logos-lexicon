import { NextRequest, NextResponse } from 'next/server';
import {
  getAutopilotStatus,
  setAutopilotMode,
  resetCircuitBreaker,
  toggleSafeMode,
  executeRunbook,
  triageNaturalLanguageCommand,
  AutopilotMode,
} from '@/lib/lexi/autopilot';
import {
  verifySessionToken,
  validateCsrfOrigin,
  verifyAdminCredentials,
  ADMIN_COOKIE_NAME,
} from '@/lib/admin/auth';

export async function GET() {
  try {
    const status = getAutopilotStatus();
    return NextResponse.json({ success: true, status });
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
    const { action, instruction, runbookId, mode, safeMode, requireReauth, reauthPasscode } = body;

    // Sensitive action reauthentication check (Section 9)
    if (requireReauth || action === 'sensitive-destruct-test') {
      if (!reauthPasscode || !verifyAdminCredentials(user.username, String(reauthPasscode))) {
        return NextResponse.json(
          {
            success: false,
            error: 'Reauthentication required for sensitive administrative action.',
          },
          { status: 403 }
        );
      }
    }

    const opName = `${user.displayName} (Level ${user.authorityLevel})`;

    if (action === 'triage') {
      if (!instruction) {
        return NextResponse.json({ success: false, error: 'Instruction is required' }, { status: 400 });
      }
      const triage = triageNaturalLanguageCommand(instruction);
      return NextResponse.json({ success: true, triage });
    }

    if (action === 'execute-runbook') {
      if (!runbookId) {
        return NextResponse.json({ success: false, error: 'runbookId is required' }, { status: 400 });
      }
      const result = await executeRunbook(runbookId, opName);
      return NextResponse.json({ success: result.success, result });
    }

    if (action === 'set-mode') {
      if (!mode) {
        return NextResponse.json({ success: false, error: 'mode is required' }, { status: 400 });
      }
      const status = setAutopilotMode(mode as AutopilotMode, opName);
      return NextResponse.json({ success: true, status });
    }

    if (action === 'reset-breaker') {
      resetCircuitBreaker(opName);
      return NextResponse.json({ success: true, message: 'Circuit breaker reset successfully' });
    }

    if (action === 'toggle-safe-mode') {
      const active = toggleSafeMode(!!safeMode, opName);
      return NextResponse.json({ success: true, safeModeActive: active });
    }

    return NextResponse.json({ success: false, error: 'Invalid action' }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

