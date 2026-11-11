// scripts/generate-qr-suite.mjs
// Generates the complete 4-format permanent QR suite for https://logoslexicon.org/
// Formats: SVG, PNG (1200x1200), JPG (1200x1200), and Print-Ready Vector PDF (Letter/A4 compatible).

import fs from 'fs';
import path from 'path';
import QRCode from 'qrcode';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const qrDir = path.join(rootDir, 'public', 'qr');

if (!fs.existsSync(qrDir)) {
  fs.mkdirSync(qrDir, { recursive: true });
}

const PERMANENT_URL = 'https://logos-lexicon-app.vercel.app/';
console.log(`Generating permanent QR code suite for: ${PERMANENT_URL}`);

async function generateSuite() {
  // 1. Vector SVG
  const svgPath = path.join(qrDir, 'logos-lexicon-qr.svg');
  const svgContent = await QRCode.toString(PERMANENT_URL, {
    type: 'svg',
    margin: 4,
    errorCorrectionLevel: 'H',
    color: {
      dark: '#0B192C',
      light: '#FFFFFF',
    },
  });
  fs.writeFileSync(svgPath, svgContent, 'utf8');
  console.log('✅ Generated SVG QR Code:', svgPath);

  // 2. High-Resolution PNG (1200x1200px)
  const pngPath = path.join(qrDir, 'logos-lexicon-qr.png');
  await QRCode.toFile(pngPath, PERMANENT_URL, {
    type: 'png',
    width: 1200,
    margin: 4,
    errorCorrectionLevel: 'H',
    color: {
      dark: '#0B192C',
      light: '#FFFFFF',
    },
  });
  console.log('✅ Generated PNG QR Code (1200x1200):', pngPath);

  // 3. High-Resolution JPG (1200x1200px)
  const jpgPath = path.join(qrDir, 'logos-lexicon-qr.jpg');
  await QRCode.toFile(jpgPath, PERMANENT_URL, {
    type: 'jpeg',
    width: 1200,
    margin: 4,
    errorCorrectionLevel: 'H',
    color: {
      dark: '#0B192C',
      light: '#FFFFFF',
    },
  });
  console.log('✅ Generated JPG QR Code (1200x1200):', jpgPath);

  // 4. Print-Ready Vector PDF (Letter 612x792 pt, 300 DPI equivalent)
  const pdfPath = path.join(qrDir, 'logos-lexicon-qr.pdf');
  const qrData = QRCode.create(PERMANENT_URL, { errorCorrectionLevel: 'H' });
  const size = qrData.modules.size;
  const qrBoxSize = 320; // pt
  const cellSize = qrBoxSize / size;
  const originX = (612 - qrBoxSize) / 2; // centered horizontally
  const originY = 240; // centered in lower half

  // Generate vector PDF stream
  let streamOps = [];

  // Top header banner in Navy (#0B192C -> rgb 11/255, 25/255, 44/255)
  streamOps.push('0.043 0.098 0.173 rg');
  streamOps.push('0 672 612 120 re f');

  // Gold accent bar (#D4AF37 -> rgb 212/255, 175/255, 55/255)
  streamOps.push('0.831 0.686 0.216 rg');
  streamOps.push('0 666 612 6 re f');

  // White background card for QR Code with quiet border
  streamOps.push('1 1 1 rg');
  streamOps.push(`${originX - 24} ${originY - 24} ${qrBoxSize + 48} ${qrBoxSize + 48} re f`);

  // Card border in subtle gold
  streamOps.push('0.831 0.686 0.216 RG 1.5 w');
  streamOps.push(`${originX - 24} ${originY - 24} ${qrBoxSize + 48} ${qrBoxSize + 48} re S`);

  // QR Modules in Navy (#0B192C)
  streamOps.push('0.043 0.098 0.173 rg');
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (qrData.modules.get(r, c)) {
        // PDF origin is bottom-left, row 0 is top
        const x = originX + c * cellSize;
        const y = originY + (size - 1 - r) * cellSize;
        streamOps.push(`${x.toFixed(2)} ${y.toFixed(2)} ${cellSize.toFixed(2)} ${cellSize.toFixed(2)} re f`);
      }
    }
  }

  // Typography operators
  // Title: LOGOS LEXICON
  streamOps.push('BT');
  streamOps.push('/F1 26 Tf');
  streamOps.push('0.831 0.686 0.216 rg'); // Gold
  streamOps.push('190 735 Td (LOGOS LEXICON) Tj');
  streamOps.push('ET');

  // Subtitle
  streamOps.push('BT');
  streamOps.push('/F2 12 Tf');
  streamOps.push('0.95 0.95 0.98 rg'); // Light ivory
  streamOps.push('130 708 Td (Multilingual Biblical & Theological Dictionary) Tj');
  streamOps.push('ET');

  // Instructions above QR
  streamOps.push('BT');
  streamOps.push('/F1 14 Tf');
  streamOps.push('0.043 0.098 0.173 rg'); // Navy
  streamOps.push('150 615 Td (Scan to Open & Install Logos Lexicon) Tj');
  streamOps.push('ET');

  // URL below QR
  streamOps.push('BT');
  streamOps.push('/F1 16 Tf');
  streamOps.push('0.043 0.098 0.173 rg');
  streamOps.push('185 185 Td (https://logoslexicon.org/) Tj');
  streamOps.push('ET');

  // Supported platforms footer
  streamOps.push('BT');
  streamOps.push('/F2 10 Tf');
  streamOps.push('0.4 0.4 0.45 rg');
  streamOps.push('110 145 Td (Available on Android, iPhone, iPad, Windows, macOS & Chromebook) Tj');
  streamOps.push('ET');

  // Bottom theological disclaimer
  streamOps.push('BT');
  streamOps.push('/F2 8 Tf');
  streamOps.push('0.55 0.55 0.6 rg');
  streamOps.push('95 90 Td (Free and peer-reviewed theological resource. Project Director: Rev. Ayan Kumar Ghosh) Tj');
  streamOps.push('ET');

  const contentStream = streamOps.join('\n');
  const streamLength = Buffer.byteLength(contentStream, 'utf8');

  // Construct PDF objects
  const objects = [];
  objects[1] = '<< /Type /Catalog /Pages 2 0 R >>';
  objects[2] = '<< /Type /Pages /Kids [3 0 R] /Count 1 >>';
  objects[3] = '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>';
  objects[4] = `<< /Length ${streamLength} >>\nstream\n${contentStream}\nendstream`;
  objects[5] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>';
  objects[6] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>';

  let pdfOutput = '%PDF-1.4\n';
  const xref = [0];

  for (let i = 1; i <= 6; i++) {
    xref[i] = Buffer.byteLength(pdfOutput, 'binary');
    pdfOutput += `${i} 0 obj\n${objects[i]}\nendobj\n`;
  }

  const startXref = Buffer.byteLength(pdfOutput, 'binary');
  pdfOutput += 'xref\n';
  pdfOutput += `0 7\n`;
  pdfOutput += '0000000000 65535 f \n';
  for (let i = 1; i <= 6; i++) {
    pdfOutput += `${String(xref[i]).padStart(10, '0')} 00000 n \n`;
  }
  pdfOutput += 'trailer\n<< /Size 7 /Root 1 0 R >>\nstartxref\n';
  pdfOutput += `${startXref}\n%%EOF\n`;

  fs.writeFileSync(pdfPath, pdfOutput, 'binary');
  console.log('✅ Generated Print-Ready Vector PDF:', pdfPath);
}

generateSuite().catch((err) => {
  console.error('Failed to generate QR suite:', err);
  process.exit(1);
});
