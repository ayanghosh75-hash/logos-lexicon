import { NextRequest, NextResponse } from 'next/server';

const ADMIN_COOKIE_NAME = 'logos_admin_token';
const SESSION_SECRET =
  process.env.LOGOS_ADMIN_SECRET || 'logos-lexicon-secret-key-2026-ayankumarghosh-secure-token';

function base64UrlToUint8Array(base64Url: string): Uint8Array {
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const padLen = (4 - (base64.length % 4)) % 4;
  const padded = base64 + '='.repeat(padLen);
  const raw = atob(padded);
  const out = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) {
    out[i] = raw.charCodeAt(i);
  }
  return out;
}

async function verifySessionTokenEdge(token: string | undefined): Promise<boolean> {
  if (!token || typeof token !== 'string') return false;
  const parts = token.split('.');
  if (parts.length !== 2) return false;
  const [payloadB64, signatureB64] = parts;

  try {
    const encoder = new TextEncoder();
    const key = await globalThis.crypto.subtle.importKey(
      'raw',
      encoder.encode(SESSION_SECRET),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );

    const sigBytes = base64UrlToUint8Array(signatureB64);
    const dataBytes = encoder.encode(payloadB64);
    const isValidSig = await globalThis.crypto.subtle.verify(
      'HMAC',
      key,
      sigBytes as unknown as BufferSource,
      dataBytes
    );
    if (!isValidSig) return false;

    const payloadJson = new TextDecoder().decode(base64UrlToUint8Array(payloadB64));
    const user = JSON.parse(payloadJson);
    if (!user || !user.expiresAt || Date.now() > user.expiresAt) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Protect Admin Pages (/admin/lexi, /admin/lexi-command-centre, etc.)
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const token = req.cookies.get(ADMIN_COOKIE_NAME)?.value;
    const isValid = await verifySessionTokenEdge(token);

    if (!isValid) {
      const loginUrl = new URL('/admin/login', req.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Protect Sensitive Admin APIs (/api/autopilot, /api/audit-logs)
  if (
    pathname.startsWith('/api/audit-logs') ||
    (pathname.startsWith('/api/autopilot') && req.method === 'POST')
  ) {
    const token = req.cookies.get(ADMIN_COOKIE_NAME)?.value;
    const isValid = await verifySessionTokenEdge(token);

    if (!isValid) {
      return NextResponse.json(
        {
          success: false,
          error: 'Unauthorized. Valid administrative session token required.',
        },
        { status: 401 }
      );
    }
  }

  const response = NextResponse.next();

  // Add security headers at Edge
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  return response;
}

export const config = {
  matcher: ['/admin/:path*', '/api/audit-logs/:path*', '/api/autopilot/:path*'],
};
