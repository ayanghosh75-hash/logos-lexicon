import { NextRequest, NextResponse } from 'next/server';
import { createSignedHeartbeat, verifySignedHeartbeat } from '@/lib/lexi/heartbeat';

export async function GET() {
  const envelope = createSignedHeartbeat('HEALTHY');
  return NextResponse.json({
    success: true,
    generatedOnServer: true,
    schedulerStatus: 'LOCAL_ON_DEMAND (External Cloud Scheduler Pending Owner Deployment)',
    envelope,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = verifySignedHeartbeat(body?.envelope || body);
    return NextResponse.json(
      {
        success: result.valid,
        verification: result,
      },
      { status: result.valid ? 200 : 400 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        verification: { valid: false, reason: 'MALFORMED_PAYLOAD' },
      },
      { status: 400 }
    );
  }
}
