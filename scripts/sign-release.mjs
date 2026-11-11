// scripts/sign-release.mjs
// Cryptographic Production Release Signing & Verification Engine
// Lead Theological Editor: Rev. Ayan Kumar Ghosh (Level 5 Authority)

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const SIGNING_SECRET = process.env.LOGOS_RELEASE_SIGNING_KEY || 'logos-lexicon-release-signing-key-ayankumarghosh-2026';
const MANIFEST_PATH = path.join(process.cwd(), 'data', 'release_manifest.json');

console.log('\n======================================================');
console.log('LOGOS LEXICON PRODUCTION RELEASE SIGNING');
console.log('Final Authority: Rev. Ayan Kumar Ghosh (Level 5)');
console.log('Timestamp:      ', new Date().toISOString());
console.log('======================================================\n');

function hashFile(filePath) {
  const content = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(content).digest('hex');
}

const CRITICAL_RELEASE_FILES = [
  'package.json',
  'next.config.ts',
  'middleware.ts',
  'lib/db/pilotBatch100.ts',
  'lib/db/theologicalPaths.ts',
  'lib/db/sourceRegister.ts',
  'lib/security/authority.ts',
  'lib/lexi/autopilot.ts',
  'lib/lexi/selfProtection.ts',
  'watchdog/logos-watchdog.mjs',
  'public/offline.html',
  'public/recovery/index.html',
];

const fileHashes = {};
const combinedHash = crypto.createHash('sha256');

for (const relPath of CRITICAL_RELEASE_FILES) {
  const fullPath = path.join(process.cwd(), relPath);
  if (fs.existsSync(fullPath)) {
    const h = hashFile(fullPath);
    fileHashes[relPath] = h;
    combinedHash.update(`${relPath}:${h}`);
  } else {
    console.warn(`[Warning] Missing file during release signing: ${relPath}`);
  }
}

const releaseDigest = combinedHash.digest('hex');

// Sign the release digest using HMAC-SHA256
const signature = crypto
  .createHmac('sha256', SIGNING_SECRET)
  .update(releaseDigest)
  .digest('hex');

const releaseManifest = {
  version: '1.0.0-pwa',
  releaseTag: `v1.0.0-${new Date().toISOString().replace(/[:.]/g, '-')}`,
  signedBy: 'Rev. Ayan Kumar Ghosh (Level 5 Authority)',
  timestamp: new Date().toISOString(),
  releaseDigest,
  signature,
  fileHashes,
};

fs.writeFileSync(MANIFEST_PATH, JSON.stringify(releaseManifest, null, 2), 'utf-8');

console.log(`  [PASS] Production release signed.`);
console.log(`  Release Digest: ${releaseDigest.slice(0, 32)}...`);
console.log(`  HMAC Signature: ${signature.slice(0, 32)}...`);
console.log(`  Manifest written to: ${MANIFEST_PATH}\n`);
