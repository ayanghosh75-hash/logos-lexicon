// scripts/generate-og-images.mjs
// Generates official 1200x630 Open Graph & WhatsApp link preview images (<300KB)
// and standard 192x192 & 512x512 PNG app icons for PWA.

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const iconsDir = path.join(publicDir, 'icons');

if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// 1. Social Preview Graphic SVG (1200 x 630 px)
const ogSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#07101C" />
      <stop offset="50%" stop-color="#0B192C" />
      <stop offset="100%" stop-color="#1E3E62" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#C59B27" />
      <stop offset="50%" stop-color="#F2D06B" />
      <stop offset="100%" stop-color="#C59B27" />
    </linearGradient>
    <linearGradient id="lightBeam" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#F2D06B" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#F2D06B" stop-opacity="0" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGrad)" />

  <!-- Subtle grid pattern -->
  <g opacity="0.04" stroke="#FFFFFF" stroke-width="1">
    <line x1="0" y1="105" x2="1200" y2="105" />
    <line x1="0" y1="210" x2="1200" y2="210" />
    <line x1="0" y1="315" x2="1200" y2="315" />
    <line x1="0" y1="420" x2="1200" y2="420" />
    <line x1="0" y1="525" x2="1200" y2="525" />
    <line x1="200" y1="0" x2="200" y2="630" />
    <line x1="400" y1="0" x2="400" y2="630" />
    <line x1="600" y1="0" x2="600" y2="630" />
    <line x1="800" y1="0" x2="800" y2="630" />
    <line x1="1000" y1="0" x2="1000" y2="630" />
  </g>

  <!-- Outer gold border -->
  <rect x="24" y="24" width="1152" height="582" rx="16" fill="none" stroke="url(#goldGrad)" stroke-width="2" opacity="0.8" />
  <rect x="32" y="32" width="1136" height="566" rx="12" fill="none" stroke="#FFFFFF" stroke-width="1" opacity="0.1" />

  <!-- Center Emblem (Logos Book + Arc + Divine Light) -->
  <g transform="translate(600, 195)">
    <!-- Light Beam -->
    <polygon points="-40,-120 40,-120 15,10 -15,10" fill="url(#lightBeam)" />

    <!-- Language Arc -->
    <path d="M -110,-10 A 110,65 0 0,1 110,-10" fill="none" stroke="url(#goldGrad)" stroke-width="3" stroke-dasharray="6,4" opacity="0.9" />

    <!-- Open Book Pages Left -->
    <path d="M 0,25 C -45,10 -85,15 -115,30 L -115,-40 C -85,-55 -45,-50 0,-35 Z" fill="#FDFBF7" stroke="#0B192C" stroke-width="2" />
    <!-- Greek Alpha on Left Page -->
    <text x="-60" y="-2" font-family="Georgia, serif" font-size="28" font-style="italic" fill="#0B192C" opacity="0.85" text-anchor="middle">&#x03B1;</text>

    <!-- Open Book Pages Right -->
    <path d="M 0,25 C 45,10 85,15 115,30 L 115,-40 C 85,-55 45,-50 0,-35 Z" fill="#FDFBF7" stroke="#0B192C" stroke-width="2" />
    <!-- Hebrew Aleph on Right Page -->
    <text x="60" y="-2" font-family="Georgia, serif" font-size="28" fill="#0B192C" opacity="0.85" text-anchor="middle">&#x05D0;</text>

    <!-- Book Spine & Architectural L Base -->
    <path d="M -8,25 L 0,35 L 8,25 L 8,-35 L -8,-35 Z" fill="#C59B27" />
    <path d="M -125,48 L 125,48 L 115,40 L -115,40 Z" fill="url(#goldGrad)" />
  </g>

  <!-- Typography -->
  <!-- Main Title -->
  <text x="600" y="335" font-family="Georgia, Cambria, serif" font-size="52" font-weight="bold" fill="url(#goldGrad)" text-anchor="middle" letter-spacing="4" filter="url(#glow)">
    LOGOS LEXICON
  </text>

  <!-- Subtitle -->
  <text x="600" y="385" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="500" fill="#FDFBF7" text-anchor="middle" letter-spacing="1">
    Multilingual Biblical &amp; Theological Dictionary
  </text>

  <!-- Tagline -->
  <text x="600" y="425" font-family="Georgia, serif" font-size="18" font-style="italic" fill="#A0B4C8" text-anchor="middle">
    Understand the Word. Explore Every Language.
  </text>

  <!-- Language Badges Pill -->
  <g transform="translate(600, 485)">
    <rect x="-420" y="-18" width="840" height="36" rx="18" fill="#07101C" stroke="url(#goldGrad)" stroke-width="1.2" opacity="0.9" />
    <text x="0" y="6" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="600" fill="#F2D06B" text-anchor="middle" letter-spacing="1.5">
      ENGLISH  &#8226;  &#2476;&#2494;&#2434;&#2482;&#2494;  &#8226;  &#2361;&#2367;&#2344;&#2381;&#2342;&#2368;  &#8226;  &#1575;&#1615;&#1585;&#1583;&#1608;  &#8226;  &#54620;&#44397;&#50612;  &#8226;  &#7961;&#955;&#955;&#951;&#957;&#953;&#954;&#940;  &#8226;  &#1506;&#1460;&#1489;&#1458;&#1512;&#1468;&#1464;&#1497;&#1513;&#1473;  &#8226;  LATIN
    </text>
  </g>

  <!-- Footer Info -->
  <g transform="translate(600, 560)">
    <text x="-480" y="0" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="500" fill="#68809A" text-anchor="start">
      Project Director: Rev. Ayan Kumar Ghosh
    </text>
    <text x="480" y="0" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="#C59B27" text-anchor="end">
      https://logoslexicon.org/
    </text>
  </g>
</svg>
`;

// App Icon SVG (512 x 512 px)
const appIconSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iconBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#07101C" />
      <stop offset="100%" stop-color="#1E3E62" />
    </linearGradient>
    <linearGradient id="iconGold" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#C59B27" />
      <stop offset="50%" stop-color="#F2D06B" />
      <stop offset="100%" stop-color="#C59B27" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="96" fill="url(#iconBg)" />
  <rect x="16" y="16" width="480" height="480" rx="80" fill="none" stroke="url(#iconGold)" stroke-width="4" opacity="0.6" />

  <g transform="translate(256, 230)">
    <!-- Light Beam -->
    <polygon points="-30,-120 30,-120 12,10 -12,10" fill="#F2D06B" opacity="0.4" />
    <!-- Language Arc -->
    <path d="M -110,-10 A 110,65 0 0,1 110,-10" fill="none" stroke="url(#iconGold)" stroke-width="4" stroke-dasharray="6,4" />
    <!-- Left Page -->
    <path d="M 0,35 C -45,20 -85,25 -115,40 L -115,-30 C -85,-45 -45,-40 0,-25 Z" fill="#FDFBF7" stroke="#0B192C" stroke-width="2" />
    <text x="-60" y="8" font-family="Georgia, serif" font-size="28" font-style="italic" fill="#0B192C" text-anchor="middle">&#x03B1;</text>
    <!-- Right Page -->
    <path d="M 0,35 C 45,20 85,25 115,40 L 115,-30 C 85,-45 45,-40 0,-25 Z" fill="#FDFBF7" stroke="#0B192C" stroke-width="2" />
    <text x="60" y="8" font-family="Georgia, serif" font-size="28" fill="#0B192C" text-anchor="middle">&#x05D0;</text>
    <!-- Spine & Base -->
    <path d="M -8,35 L 0,45 L 8,35 L 8,-25 L -8,-25 Z" fill="#C59B27" />
    <path d="M -125,58 L 125,58 L 115,50 L -115,50 Z" fill="url(#iconGold)" />
  </g>
  <text x="256" y="385" font-family="Georgia, serif" font-size="34" font-weight="bold" fill="url(#iconGold)" text-anchor="middle" letter-spacing="3">
    LOGOS LEXICON
  </text>
  <text x="256" y="425" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#FDFBF7" text-anchor="middle" letter-spacing="1">
    BIBLICAL &amp; THEOLOGICAL DICTIONARY
  </text>
</svg>
`;

async function generateAssets() {
  console.log('Generating Open Graph & WhatsApp link preview images (1200x630)...');

  // Generate public/og-image.png (< 300 KB)
  const ogPngPath = path.join(publicDir, 'og-image.png');
  await sharp(Buffer.from(ogSvg))
    .png({ quality: 85, compressionLevel: 8 })
    .toFile(ogPngPath);
  const ogPngStat = fs.statSync(ogPngPath);
  console.log(`✅ Generated public/og-image.png (${(ogPngStat.size / 1024).toFixed(1)} KB) - WhatsApp Compatible!`);

  // Generate public/og-image.jpg (< 300 KB)
  const ogJpgPath = path.join(publicDir, 'og-image.jpg');
  await sharp(Buffer.from(ogSvg))
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(ogJpgPath);
  const ogJpgStat = fs.statSync(ogJpgPath);
  console.log(`✅ Generated public/og-image.jpg (${(ogJpgStat.size / 1024).toFixed(1)} KB) - WhatsApp Compatible!`);

  // Generate standard PNG App Icons for PWA
  const icon192Path = path.join(iconsDir, 'icon-192.png');
  await sharp(Buffer.from(appIconSvg))
    .resize(192, 192)
    .png()
    .toFile(icon192Path);
  console.log('✅ Generated public/icons/icon-192.png');

  const icon512Path = path.join(iconsDir, 'icon-512.png');
  await sharp(Buffer.from(appIconSvg))
    .resize(512, 512)
    .png()
    .toFile(icon512Path);
  console.log('✅ Generated public/icons/icon-512.png');
}

generateAssets().catch((err) => {
  console.error('Failed to generate image assets:', err);
  process.exit(1);
});
