import { NextRequest, NextResponse } from 'next/server';
import { verifySessionToken, revokeSessionToken, ADMIN_COOKIE_NAME } from '@/lib/admin/auth';
import { logAuditEvent } from '@/lib/lexi/auditLog';

export async function GET(req: NextRequest) {
  const token = req.cookies.get(ADMIN_COOKIE_NAME)?.value;
  const user = verifySessionToken(token);

  if (!user) {
    return NextResponse.json({ authenticated: false, error: 'Invalid, expired, or revoked session token.' }, { status: 401 });
  }

  // Reject client-side role spoofing attempts if header disagrees with signed server token
  const clientClaimedRole = req.headers.get('x-logos-role');
  if (clientClaimedRole && clientClaimedRole !== user.role) {
    logAuditEvent({
      operator: user.username,
      instruction: `Blocked Client-Side Role Spoofing Attempt (${clientClaimedRole})`,
      riskLevel: 'RED',
      triageSummary: `Client attempted to override server-verified role ${user.role} with ${clientClaimedRole}.`,
      actionsTaken: ['Ignore forged client header', 'Reject request with HTTP 403'],
      outcome: 'REJECTED',
    });
    return NextResponse.json(
      { authenticated: false, error: 'Role verification failed: client-side role spoofing rejected.' },
      { status: 403 }
    );
  }

  return NextResponse.json({
    authenticated: true,
    user,
  });
}

export async function DELETE(req: NextRequest) {
  const token = req.cookies.get(ADMIN_COOKIE_NAME)?.value;
  if (token) {
    revokeSessionToken(token);
  }

  const response = NextResponse.json({
    success: true,
    revokedOnServer: !!token,
    message: 'Logged out and session token revoked on server.',
  });

  response.cookies.set({
    name: ADMIN_COOKIE_NAME,
    value: '',
    httpOnly: true,
    sameSite: 'strict',
    path: '/',
    maxAge: 0,
  });

  return response;
}

