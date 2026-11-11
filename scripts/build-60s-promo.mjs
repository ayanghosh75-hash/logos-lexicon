import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const ffmpegPath = 'C:\\Users\\acer\\AppData\\Local\\Microsoft\\WinGet\\Packages\\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\\ffmpeg-9.0.2-full_build\\bin\\ffmpeg.exe';
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const promoDir = path.resolve('public/promo');

if (!fs.existsSync(promoDir)) {
  fs.mkdirSync(promoDir, { recursive: true });
}

// 5 High-Legibility Slides (Larger Fonts & Christmas Accents)
const slides = [
  {
    num: 1,
    tag: 'CHRISTMAS & MINISTRY SPECIAL EDITION',
    title: 'LOGOS LEXICON & SUNDAY PULPIT STUDIO',
    subtitle: 'Developed & Directed by Ayan Kumar Ghosh',
    badge: 'UNDERSTAND THE WORD • 21 LANGUAGES • 66 BOOKS',
    bullets: [
      'Multilingual Biblical Dictionary across 21 Global Languages',
      'Canonical 66 Books Scripture Explorer with Verse Exegesis',
      'Deep Hebrew & Greek Lemmas with Strong\'s Concordance',
      'Sunday Pulpit Studio: 50+ Ready Exegetical Sermon Packages',
    ],
    footer: 'Free online access for believers, pastors & scholars worldwide.',
  },
  {
    num: 2,
    tag: 'SACRED SCRIPTURE IN EVERY TONGUE',
    title: 'EXPLORE SCRIPTURE IN 21 GLOBAL LANGUAGES',
    subtitle: 'Greek, Hebrew & Modern Vernaculars in Harmony',
    badge: 'SMART REGIONAL AUTO-DETECTION WORLDWIDE',
    bullets: [
      'Bengali, English, Hindi, Urdu, Arabic & Persian (Farsi)',
      'Tagalog (Filipino), Japanese, Chinese (Simp/Trad) & Korean',
      'Instant Strong\'s Concordance with Etymological Nuances',
      'Smart Geo-Engine auto-detects your country & displays your tongue',
    ],
    footer: 'Study biblical truth seamlessly in your own native language.',
  },
  {
    num: 3,
    tag: 'FOR PASTORS, PREACHERS & TEACHERS',
    title: 'SUNDAY PULPIT STUDIO রবিবাসরীয় সার্মন ভান্ডার',
    subtitle: 'Save 10+ Hours of Weekly Sermon Preparation',
    badge: '52 WEEKS COMPLETE EXEGETICAL SERMON PACKAGES',
    bullets: [
      'Three-Point Expository Outlines & Scriptural Proofs',
      'Christmas, Good Friday, Easter, Baptism & Marriage Specials',
      '1-Click Load into Studio Editor for Personal Customization',
      'Church Projector Slide Bulletins Ready to Display',
    ],
    footer: 'Equipping ministers of the Gospel with biblical depth and power.',
  },
  {
    num: 4,
    tag: 'AUTONOMOUS AI & SECURITY',
    title: 'AI GUARDIAN LEXI & 100% SAFE INSTALLATION',
    subtitle: '24/7 Theological Guidance & Clean PWA Technology',
    badge: 'ZERO "UNSAFE APP" WARNINGS GUARANTEED',
    bullets: [
      'Built-in Autonomous Theological Research Assistant: Lexi',
      '1-Click Install directly from Google Chrome, Safari & Edge',
      '100% Verified SSL Security — Never downloads risky APK files',
      'Fast, private and works smoothly offline on all devices',
    ],
    footer: 'Trusted and secure on Android, iPhone, Windows & Mac.',
  },
  {
    num: 5,
    tag: 'SHARE, STUDY & ENCOURAGE',
    title: 'EXPERIENCE IT TODAY & SHARE YOUR REVIEW',
    subtitle: 'A Dedicated Ministry Initiative by Ayan Kumar Ghosh',
    badge: 'FREE SAMPLE SERMONS & FULL DICTIONARY LIVE NOW',
    bullets: [
      'Open instantly in any browser: logos-lexicon-app.vercel.app',
      'Install on your home screen in 1 click for daily study',
      'Share with church members, pastors & fellowship groups',
      'Your valuable review and feedback is deeply appreciated!',
    ],
    footer: 'Circulate freely on WhatsApp, Signal & Facebook. Soli Deo Gloria!',
  },
];

console.log('--- STEP 1: GENERATING HIGH-LEGIBILITY 1080x1920 HTML SLIDES ---');

for (const s of slides) {
  const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800;900&family=Inter:wght@500;600;700;800;900&family=Noto+Sans+Bengali:wght@700;800&display=swap');
    
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: 1080px;
      height: 1920px;
      background: radial-gradient(circle at 50% 18%, #162B4A 0%, #081224 55%, #030712 100%);
      color: #F8FAFC;
      font-family: 'Inter', 'Noto Sans Bengali', sans-serif;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 60px 50px;
      border: 16px solid #D4AF37;
    }

    /* Ambient Festive Top & Bottom Bars */
    .top-bar {
      position: absolute;
      top: 0; left: 0; right: 0; height: 20px;
      background: linear-gradient(90deg, #F6C90E, #E5A93C, #D4AF37, #F6C90E);
    }
    .bottom-bar {
      position: absolute;
      bottom: 0; left: 0; right: 0; height: 20px;
      background: linear-gradient(90deg, #F6C90E, #E5A93C, #D4AF37, #F6C90E);
    }

    /* Outer golden frame */
    .frame-border {
      position: absolute;
      top: 24px; left: 24px; right: 24px; bottom: 24px;
      border: 2px solid rgba(246, 201, 14, 0.45);
      pointer-events: none;
    }

    /* Header Section */
    .header-box {
      text-align: center;
      margin-top: 30px;
    }
    .christmas-symbols {
      font-size: 58px;
      color: #F6C90E;
      text-shadow: 0 0 25px rgba(246, 201, 14, 0.7);
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
    }
    .tag-badge {
      display: inline-block;
      font-size: 22px;
      font-weight: 800;
      color: #F6C90E;
      letter-spacing: 3px;
      text-transform: uppercase;
      padding: 8px 24px;
      background: rgba(246, 201, 14, 0.15);
      border: 1.5px solid rgba(246, 201, 14, 0.5);
      border-radius: 30px;
      margin-bottom: 20px;
    }
    .main-title {
      font-family: 'Cinzel', 'Noto Sans Bengali', serif;
      font-size: 64px;
      font-weight: 900;
      line-height: 1.2;
      color: #FFFFFF;
      text-shadow: 0 4px 25px rgba(0,0,0,0.9);
      margin-bottom: 14px;
      letter-spacing: -0.5px;
    }
    .subtitle {
      font-size: 34px;
      color: #FEF08A;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-shadow: 0 2px 10px rgba(0,0,0,0.7);
    }

    /* Content Card */
    .card {
      background: rgba(11, 25, 44, 0.90);
      border: 2.5px solid rgba(246, 201, 14, 0.55);
      border-radius: 32px;
      padding: 48px 44px;
      box-shadow: 0 25px 60px rgba(0,0,0,0.75);
      backdrop-filter: blur(12px);
      margin: 20px 0;
    }
    .card-badge {
      text-align: center;
      background: linear-gradient(90deg, rgba(246, 201, 14, 0.18), rgba(246, 201, 14, 0.32), rgba(246, 201, 14, 0.18));
      border: 1.5px solid rgba(246, 201, 14, 0.7);
      padding: 16px 24px;
      border-radius: 18px;
      font-size: 26px;
      font-weight: 900;
      color: #F6C90E;
      letter-spacing: 1.5px;
      margin-bottom: 36px;
      text-transform: uppercase;
    }
    .bullet-list {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }
    .bullet-item {
      display: flex;
      align-items: flex-start;
      gap: 22px;
    }
    .chk-circle {
      width: 54px;
      height: 54px;
      border-radius: 50%;
      background: #F6C90E;
      color: #070F1E;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      font-weight: 900;
      flex-shrink: 0;
      box-shadow: 0 4px 18px rgba(246, 201, 14, 0.5);
    }
    .bullet-text {
      font-size: 35px;
      font-weight: 700;
      color: #FFFFFF;
      line-height: 1.35;
      text-shadow: 0 2px 8px rgba(0,0,0,0.7);
    }

    /* Call To Action Box */
    .cta-box {
      background: linear-gradient(135deg, #F6C90E, #E5A93C);
      border-radius: 28px;
      padding: 26px 32px;
      text-align: center;
      color: #070F1E;
      box-shadow: 0 12px 35px rgba(246, 201, 14, 0.4);
      margin-bottom: 18px;
    }
    .cta-url {
      font-size: 44px;
      font-weight: 900;
      letter-spacing: 0.5px;
      text-decoration: underline;
    }
    .cta-hint {
      font-size: 26px;
      font-weight: 900;
      letter-spacing: 1.5px;
      margin-top: 8px;
      text-transform: uppercase;
    }

    /* Footer Note */
    .footer-note {
      text-align: center;
      font-size: 26px;
      font-weight: 600;
      color: #CBD5E1;
      line-height: 1.4;
      margin-bottom: 8px;
    }
  </style>
</head>
<body>
  <div class="top-bar"></div>
  <div class="bottom-bar"></div>
  <div class="frame-border"></div>

  <!-- Header with Christmas Star & Bells -->
  <div class="header-box">
    <div class="christmas-symbols">
      <span>🔔</span>
      <span>⭐</span>
      <span style="font-size: 68px;">✝</span>
      <span>⭐</span>
      <span>🔔</span>
    </div>
    <div class="tag-badge">${s.tag}</div>
    <div class="main-title">${s.title}</div>
    <div class="subtitle">${s.subtitle}</div>
  </div>

  <!-- Content Card with Larger Typography -->
  <div class="card">
    <div class="card-badge">${s.badge}</div>
    <div class="bullet-list">
      ${s.bullets.map((b) => `
        <div class="bullet-item">
          <div class="chk-circle">✓</div>
          <div class="bullet-text">${b}</div>
        </div>
      `).join('')}
    </div>
  </div>

  <!-- CTA Box & Footer -->
  <div>
    <div class="cta-box">
      <div class="cta-url">logos-lexicon-app.vercel.app</div>
      <div class="cta-hint">1-CLICK SAFE INSTALL • FREE ONLINE ACCESS</div>
    </div>
    <div class="footer-note">${s.footer}</div>
  </div>
</body>
</html>`;

  const htmlFile = path.join(promoDir, `slide_${s.num}.html`);
  const pngFile = path.join(promoDir, `slide_${s.num}.png`);
  fs.writeFileSync(htmlFile, htmlContent, 'utf8');

  console.log(`Rendering High-Legibility Slide ${s.num}...`);
  execSync(`"${edgePath}" --headless=new --disable-gpu --screenshot="${pngFile}" --window-size=1080,1920 "file://${htmlFile}"`, {
    stdio: 'ignore',
  });
  console.log(`  ✓ Created: ${pngFile}`);
}

console.log('\n--- STEP 2: SYNTHESIZING CHRISTMAS VIBES (BELL CHIMES & CATHEDRAL STRINGS) ---');

// Synthesize Christmas Carillon Bells + Cathedral Warm Strings Audio via FFmpeg
const audioFile = path.join(promoDir, 'christmas-vibes-60s.mp3');

// Christmas Chimes: C5(523.25), E5(659.25), G5(783.99), A5(880.0), C6(1046.50) with bell strike decay
// Cathedral Choir & Organ Strings: C3(130.81), G3(196.00), C4(261.63), E4(329.63), G4(392.00)
const audioExpr = [
  // Christmas Carillon Chimes (Periodic Carol Bell Strikes)
  '(sin(2*PI*523.25*t)*exp(-2.5*mod(t,2.5))',
  '+ sin(2*PI*659.25*t)*exp(-2.5*mod(t,3.0))',
  '+ sin(2*PI*783.99*t)*exp(-2.8*mod(t,4.0))',
  '+ sin(2*PI*880.00*t)*exp(-3.0*mod(t,5.0))',
  '+ sin(2*PI*1046.50*t)*exp(-3.2*mod(t,2.0)))*0.35',
  // Warm Cathedral Organ / Strings Pad
  '+ (sin(2*PI*130.81*t)*0.18',
  '+ sin(2*PI*196.00*t)*0.14',
  '+ sin(2*PI*261.63*t)*0.14',
  '+ sin(2*PI*329.63*t)*0.12',
  '+ sin(2*PI*392.00*t)*0.10)*0.55',
].join(' ');

const audioCmd = `"${ffmpegPath}" -y -f lavfi -i "aevalsrc='${audioExpr}':s=44100:d=60" -af "lowpass=f=3800,highpass=f=75,volume=0.6,afade=t=in:ss=0:d=2,afade=t=out:st=58:d=2" -c:a libmp3lame -q:a 2 "${audioFile}"`;

execSync(audioCmd, { stdio: 'ignore' });
console.log(`  ✓ Generated Christmas vibes soundtrack: ${audioFile}`);

console.log('\n--- STEP 3: ENCODING 60-SECOND HD MP4 VIDEO (9:16 VERTICAL) ---');

const videoOut = path.join(promoDir, 'logos-lexicon-60s-promo.mp4');

const s1 = path.join(promoDir, 'slide_1.png').replace(/\\/g, '/');
const s2 = path.join(promoDir, 'slide_2.png').replace(/\\/g, '/');
const s3 = path.join(promoDir, 'slide_3.png').replace(/\\/g, '/');
const s4 = path.join(promoDir, 'slide_4.png').replace(/\\/g, '/');
const s5 = path.join(promoDir, 'slide_5.png').replace(/\\/g, '/');
const aud = audioFile.replace(/\\/g, '/');

const concatFile = path.join(promoDir, 'concat.txt');
const concatContent = `file '${s1}'
duration 12
file '${s2}'
duration 12
file '${s3}'
duration 12
file '${s4}'
duration 12
file '${s5}'
duration 12
file '${s5}'
`;
fs.writeFileSync(concatFile, concatContent, 'utf8');

const videoCmd = `"${ffmpegPath}" -y -f concat -safe 0 -i "${concatFile.replace(/\\/g, '/')}" -i "${aud}" -vf "fps=30,format=yuv420p" -c:v libx264 -preset fast -crf 19 -c:a aac -b:a 192k -shortest -movflags +faststart "${videoOut}"`;

console.log('Encoding MP4 (H.264 + AAC with FastStart)...');
execSync(videoCmd, { stdio: 'inherit' });

// Copy to Desktop directly
const desktopOut = 'C:\\Users\\acer\\Desktop\\Logos-Lexicon-60s-Promo.mp4';
fs.copyFileSync(videoOut, desktopOut);

console.log(`\n🎉 SUCCESS! 60-second Christmas Vibes promotional video created:`);
console.log(`Web Version: ${videoOut}`);
console.log(`Desktop Version: ${desktopOut}`);
console.log(`Size: ${(fs.statSync(desktopOut).size / (1024 * 1024)).toFixed(2)} MB`);
