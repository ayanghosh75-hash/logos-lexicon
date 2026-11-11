// scripts/validate-production-links.mjs
// Automated Build Guard: Fails build if any prohibited URL or administrative route appears in public production assets.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Prohibited URL patterns in production public assets
const PROHIBITED_PATTERNS = [
  { pattern: /localhost/i, name: 'localhost' },
  { pattern: /127\.0\.0\.1/, name: '127.0.0.1 (loopback IP)' },
  { pattern: /trycloudflare\.com/i, name: 'trycloudflare.com (temporary tunnel)' },
  { pattern: /ngrok\.io|ngrok-free\.app/i, name: 'ngrok tunnel' },
  { pattern: /loca\.lt/i, name: 'localtunnel' },
  { pattern: /192\.168\.\d+\.\d+/, name: 'Private LAN IP (192.168.x.x)' },
  { pattern: /10\.\d+\.\d+\.\d+/, name: 'Private LAN IP (10.x.x.x)' },
];

// Files and directories to strictly inspect
const CRITICAL_FILES = [
  'public/manifest.webmanifest',
  'public/sw.js',
  'components/sharing/ShareModal.tsx',
  'app/layout.tsx',
];

console.log('\n🔒 [BUILD GUARD] Inspecting production assets for prohibited public URLs...');

let violations = 0;

for (const relPath of CRITICAL_FILES) {
  const fullPath = path.join(rootDir, relPath);
  if (!fs.existsSync(fullPath)) {
    continue;
  }

  const content = fs.readFileSync(fullPath, 'utf8');

  for (const { pattern, name } of PROHIBITED_PATTERNS) {
    if (pattern.test(content)) {
      console.error(`❌ VIOLATION in ${relPath}: Contains prohibited public URL pattern "${name}"`);
      violations++;
    }
  }
}

// Ensure QR code metadata does not point to unauthorized routes
const qrDir = path.join(rootDir, 'public', 'qr');
if (fs.existsSync(qrDir)) {
  const qrFiles = fs.readdirSync(qrDir);
  for (const file of qrFiles) {
    if (file.endsWith('.svg')) {
      const svgContent = fs.readFileSync(path.join(qrDir, file), 'utf8');
      for (const { pattern, name } of PROHIBITED_PATTERNS) {
        if (pattern.test(svgContent)) {
          console.error(`❌ VIOLATION in public/qr/${file}: QR encodes prohibited URL pattern "${name}"`);
          violations++;
        }
      }
    }
  }
}

if (violations > 0) {
  console.error(`\n🚨 BUILD FAILED: ${violations} prohibited public URL violation(s) detected!`);
  console.error('All production links, QR codes, manifests, and sharing metadata MUST strictly point to the permanent domain: https://logoslexicon.org/\n');
  process.exit(1);
}

console.log('✅ [BUILD GUARD] All scanned production assets are clean. Permanent canonical domain upheld: https://logoslexicon.org/\n');
process.exit(0);
