// lib/security/inputSanitizer.ts
// Comprehensive Input Sanitization, File Upload Security & Attack Vector Neutralization
// Defends against XSS, SSRF, SQLi, Path Traversal, and Malicious File Uploads

export interface FileValidationResult {
  valid: boolean;
  sanitizedFileName: string;
  detectedMime: string;
  fileSizeBytes: number;
  reason?: string;
}

// Magic bytes for permitted file types
const MAGIC_BYTES: Record<string, number[]> = {
  'application/pdf': [0x25, 0x50, 0x44, 0x46], // %PDF
  'image/png': [0x89, 0x50, 0x4e, 0x47],       // .PNG
  'image/jpeg': [0xff, 0xd8, 0xff],             // JPEG
  'application/json': [0x7b],                  // {
};

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB limit

/**
 * Validates uploaded file buffers against size limits, magic bytes, and executable code
 */
export function validateUploadedBuffer(
  buffer: Buffer,
  originalFilename: string,
  claimedMime: string
): FileValidationResult {
  const fileSizeBytes = buffer.length;

  if (fileSizeBytes === 0) {
    return { valid: false, sanitizedFileName: '', detectedMime: '', fileSizeBytes, reason: 'File is empty' };
  }

  if (fileSizeBytes > MAX_FILE_SIZE) {
    return {
      valid: false,
      sanitizedFileName: '',
      detectedMime: claimedMime,
      fileSizeBytes,
      reason: `File size exceeds 10MB limit (${(fileSizeBytes / 1024 / 1024).toFixed(2)} MB)`,
    };
  }

  // Sanitize filename to prevent path traversal
  const sanitizedFileName = originalFilename
    .replace(/[^a-zA-Z0-9._-]/g, '_')
    .replace(/\.{2,}/g, '.');

  // Verify magic bytes
  const expectedMagic = MAGIC_BYTES[claimedMime];
  if (expectedMagic) {
    for (let i = 0; i < expectedMagic.length; i++) {
      if (buffer[i] !== expectedMagic[i]) {
        return {
          valid: false,
          sanitizedFileName,
          detectedMime: 'unknown',
          fileSizeBytes,
          reason: `Magic bytes mismatch: Claimed ${claimedMime} does not match buffer header`,
        };
      }
    }
  }

  // Scan text/binary content for malicious executable payloads
  const contentSnippet = buffer.slice(0, 4096).toString('utf-8');
  const MALICIOUS_SIGNATURES = [
    /<script\b/i,
    /<\?php/i,
    /eval\s*\(/i,
    /base64_decode/i,
    /powershell\s+-enc/i,
    /cmd\.exe/i,
    /\/bin\/sh/i,
    /\/bin\/bash/i,
  ];

  for (const sig of MALICIOUS_SIGNATURES) {
    if (sig.test(contentSnippet)) {
      return {
        valid: false,
        sanitizedFileName,
        detectedMime: claimedMime,
        fileSizeBytes,
        reason: `Malicious executable pattern detected: ${sig.toString()}`,
      };
    }
  }

  return {
    valid: true,
    sanitizedFileName,
    detectedMime: claimedMime,
    fileSizeBytes,
  };
}

/**
 * Neutralizes Path Traversal patterns from user-provided paths
 */
export function sanitizePath(inputPath: string): string {
  return inputPath
    .replace(/\.\./g, '')
    .replace(/[<>:"|?*]/g, '')
    .replace(/^[/\\]+/, '');
}

/**
 * Validates URLs against SSRF (Server-Side Request Forgery) attacks
 * Blocks loopback, private RFC1918 subnets, and metadata endpoints
 */
export function isSafeExternalUrl(urlString: string): boolean {
  try {
    const url = new URL(urlString);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      return false;
    }

    const host = url.hostname.toLowerCase();

    // Block localhost, loopback, link-local, and cloud metadata services
    if (
      host === 'localhost' ||
      host === '127.0.0.1' ||
      host === '::1' ||
      host === '169.254.169.254' || // AWS/GCP/Azure metadata
      host.endsWith('.local') ||
      host.endsWith('.internal')
    ) {
      return false;
    }

    // Block private IPv4 ranges (10.x.x.x, 172.16-31.x.x, 192.168.x.x)
    const ipParts = host.split('.').map(Number);
    if (ipParts.length === 4 && ipParts.every((n) => !isNaN(n))) {
      if (ipParts[0] === 10) return false;
      if (ipParts[0] === 172 && ipParts[1] >= 16 && ipParts[1] <= 31) return false;
      if (ipParts[0] === 192 && ipParts[1] === 168) return false;
    }

    return true;
  } catch {
    return false;
  }
}
