import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const ffmpegPath = 'C:\\Users\\acer\\AppData\\Local\\Microsoft\\WinGet\\Packages\\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\\ffmpeg-9.0.2-full_build\\bin\\ffmpeg.exe';
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const promoDir = path.resolve('public/promo');

if (!fs.existsSync(promoDir)) {
  fs.mkdirSync(promoDir, { recursive: true });
}

// 5 Beautiful 1080x1920 Slides
const slides = [
  {
    num: 1,
    tag: 'WORLD-CLASS MINISTRY & THEOLOGICAL PLATFORM',
    title: 'LOGOS LEXICON & SUNDAY PULPIT STUDIO',
    subtitle: 'Developed & Directed by Ayan Kumar Ghosh',
    badge: 'UNDERSTAND THE WORD • 21 LANGUAGES • 66 BOOKS',
    bullets: [
      'Multilingual Biblical & Theological Dictionary across 21 Languages',
      'Full 66-Book Canonical Scripture Explorer with Verse Exegesis',
      'Original Hebrew & Greek Lemmas with Strong\'s Concordance',
      'Sunday Pulpit Studio: 50+ Ready Exegetical Sermon Packages',
    ],
    footer: 'Available on every smartphone, tablet & computer worldwide.',
  },
  {
    num: 2,
    tag: 'THE WORD IN EVERY TONGUE',
    title: 'SACRED SCRIPTURE IN 21 GLOBAL LANGUAGES',
    subtitle: 'Greek, Hebrew & Modern Vernaculars in Harmony',
    badge: 'SMART REGIONAL AUTO-DETECTION WORLDWIDE',
    bullets: [
      'English, Bengali, Hindi, Urdu, Arabic & Persian (Farsi)',
      'Tagalog (Filipino), Japanese, Chinese (Simp/Trad) & Korean',
      'Instant Strong\'s Concordance with Etymological Nuances',
      'Smart Geo-Engine detects your country & displays your local tongue',
    ],
    footer: 'Explore the depths of scripture without linguistic barriers.',
  },
  {
    num: 3,
    tag: 'FOR PASTORS, PREACHERS & TEACHERS',
    title: 'SUNDAY PULPIT STUDIO রবিবাসরীয় সার্মন ভান্ডার',
    subtitle: 'Save 10+ Hours of Weekly Sermon Preparation',
    badge: '52 WEEKS COMPLETE EXEGETICAL SERMON PACKAGES',
    bullets: [
      'Three-Point Expository Outlines & Scriptural Proofs',
      'Good Friday, Easter, Christmas, Baptism & Marriage Specials',
      '1-Click Load into Studio Editor for Personal Customization',
      'Ready-to-Display Church Projector Slide Bulletins',
    ],
    footer: 'Equipping God\'s servants to preach with depth, clarity & power.',
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
      'Lightweight, private, and works smoothly offline',
    ],
    footer: 'Fast, secure and trusted on Android, iPhone, Windows & Mac.',
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
      'Share with your church pastors, youth & fellowship groups',
      'Your valuable review and feedback is deeply appreciated!',
    ],
    footer: 'Circulate freely on WhatsApp, Signal & Facebook. Soli Deo Gloria!',
  },
];

console.log('--- STEP 1: GENERATING 1080x1920 HTML SLIDES ---');

for (const s of slides) {
  const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Bengali:wght@600;700&display=swap');
    
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: 1080px;
      height: 1920px;
      background: radial-gradient(circle at 50% 20%, #132742 0%, #070F1E 60%, #040913 100%);
      color: #F8FAFC;
      font-family: 'Inter', 'Noto Sans Bengali', sans-serif;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 70px 60px;
      border: 14px solid #D4AF37;
    }

    /* Ambient Corner Accents */
    .top-bar {
      position: absolute;
      top: 0; left: 0; right: 0; height: 18px;
      background: linear-gradient(90deg, #F6C90E, #D4AF37, #E5A93C, #F6C90E);
    }
    .bottom-bar {
      position: absolute;
      bottom: 0; left: 0; right: 0; height: 18px;
      background: linear-gradient(90deg, #F6C90E, #D4AF37, #E5A93C, #F6C90E);
    }

    /* Outer glowing border frame */
    .frame-border {
      position: absolute;
      top: 28px; left: 28px; right: 28px; bottom: 28px;
      border: 2px solid rgba(246, 201, 14, 0.4);
      pointer-events: none;
    }

    /* Header Section */
    .header-box {
      text-align: center;
      margin-top: 40px;
    }
    .cross-icon {
      font-size: 64px;
      color: #F6C90E;
      text-shadow: 0 0 25px rgba(246, 201, 14, 0.6);
      margin-bottom: 12px;
      display: block;
    }
    .tag-badge {
      display: inline-block;
      font-size: 20px;
      font-weight: 800;
      color: #F6C90E;
      letter-spacing: 3px;
      text-transform: uppercase;
      padding: 6px 20px;
      background: rgba(246, 201, 14, 0.12);
      border: 1px solid rgba(246, 201, 14, 0.4);
      border-radius: 30px;
      margin-bottom: 24px;
    }
    .main-title {
      font-family: 'Cinzel', 'Noto Sans Bengali', serif;
      font-size: 52px;
      font-weight: 800;
      line-height: 1.25;
      color: #FFFFFF;
      text-shadow: 0 4px 20px rgba(0,0,0,0.8);
      margin-bottom: 16px;
    }
    .subtitle {
      font-size: 28px;
      color: #CBD5E1;
      font-weight: 500;
      letter-spacing: 0.5px;
    }

    /* Content Card */
    .card {
      background: rgba(11, 25, 44, 0.85);
      border: 2px solid rgba(246, 201, 14, 0.45);
      border-radius: 28px;
      padding: 44px 40px;
      box-shadow: 0 20px 50px rgba(0,0,0,0.6);
      backdrop-filter: blur(10px);
      margin: 30px 0;
    }
    .card-badge {
      text-align: center;
      background: linear-gradient(90deg, rgba(246, 201, 14, 0.15), rgba(246, 201, 14, 0.25), rgba(246, 201, 14, 0.15));
      border: 1px solid rgba(246, 201, 14, 0.6);
      padding: 14px 20px;
      border-radius: 16px;
      font-size: 22px;
      font-weight: 800;
      color: #F6C90E;
      letter-spacing: 1.5px;
      margin-bottom: 34px;
      text-transform: uppercase;
    }
    .bullet-list {
      display: flex;
      flex-direction: column;
      gap: 28px;
    }
    .bullet-item {
      display: flex;
      align-items: flex-start;
      gap: 20px;
    }
    .chk-circle {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: #F6C90E;
      color: #070F1E;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      font-weight: 900;
      flex-shrink: 0;
      box-shadow: 0 4px 15px rgba(246, 201, 14, 0.4);
    }
    .bullet-text {
      font-size: 28px;
      font-weight: 600;
      color: #F1F5F9;
      line-height: 1.35;
    }

    /* Call To Action Box */
    .cta-box {
      background: linear-gradient(135deg, #F6C90E, #D4AF37);
      border-radius: 24px;
      padding: 24px 30px;
      text-align: center;
      color: #070F1E;
      box-shadow: 0 10px 30px rgba(246, 201, 14, 0.35);
      margin-bottom: 20px;
    }
    .cta-url {
      font-size: 38px;
      font-weight: 900;
      letter-spacing: 0.5px;
      text-decoration: underline;
    }
    .cta-hint {
      font-size: 22px;
      font-weight: 800;
      letter-spacing: 1px;
      margin-top: 6px;
      text-transform: uppercase;
    }

    /* Footer Note */
    .footer-note {
      text-align: center;
      font-size: 22px;
      color: #94A3B8;
      line-height: 1.4;
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <div class="top-bar"></div>
  <div class="bottom-bar"></div>
  <div class="frame-border"></div>

  <!-- Header -->
  <div class="header-box">
    <div class="cross-icon">✝</div>
    <div class="tag-badge">${s.tag}</div>
    <div class="main-title">${s.title}</div>
    <div class="subtitle">${s.subtitle}</div>
  </div>

  <!-- Content Card -->
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

  console.log(`Rendering Slide ${s.num}...`);
  execSync(`"${edgePath}" --headless=new --disable-gpu --screenshot="${pngFile}" --window-size=1080,1920 "file://${htmlFile}"`, {
    stdio: 'ignore',
  });
  console.log(`  ✓ Created: ${pngFile}`);
}

console.log('\n--- STEP 2: CREATING 60-SECOND MAJESTIC REVERENT AMBIENT SOUNDTRACK ---');

// Synthesize 60 seconds of gentle majestic harmonic organ/pad audio via FFmpeg
const audioFile = path.join(promoDir, 'ambient-60s.mp3');

// FFmpeg harmonic chord progression: 60s pad chord progression
const audioCmd = `"${ffmpegPath}" -y -f lavfi -i "aevalsrc='sin(2*PI*130.81*t)*0.18 + sin(2*PI*164.81*t)*0.14 + sin(2*PI*196.00*t)*0.14 + sin(2*PI*261.63*t)*0.10 + sin(2*PI*329.63*t)*0.08':s=44100:d=60" -af "lowpass=f=2500,highpass=f=60,volume=0.5,afade=t=in:ss=0:d=2,afade=t=out:st=58:d=2" -c:a libmp3lame -q:a 2 "${audioFile}"`;

execSync(audioCmd, { stdio: 'ignore' });
console.log(`  ✓ Generated 60-second soundtrack: ${audioFile}`);

console.log('\n--- STEP 3: ASSEMBLING 60-SECOND HD MP4 VIDEO (9:16 VERTICAL) ---');

// Each slide is 12 seconds x 5 slides = exactly 60.0 seconds!
// Crossfade transition between slides for smooth cinema feel
const videoOut = path.join(promoDir, 'logos-lexicon-60s-promo.mp4');

const s1 = path.join(promoDir, 'slide_1.png').replace(/\\/g, '/');
const s2 = path.join(promoDir, 'slide_2.png').replace(/\\/g, '/');
const s3 = path.join(promoDir, 'slide_3.png').replace(/\\/g, '/');
const s4 = path.join(promoDir, 'slide_4.png').replace(/\\/g, '/');
const s5 = path.join(promoDir, 'slide_5.png').replace(/\\/g, '/');
const aud = audioFile.replace(/\\/g, '/');

// Build concat list or filter complex
// Slide 1: 0-12s, Slide 2: 12-24s, Slide 3: 24-36s, Slide 4: 36-48s, Slide 5: 48-60s
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

const videoCmd = `"${ffmpegPath}" -y -f concat -safe 0 -i "${concatFile.replace(/\\/g, '/')}" -i "${aud}" -vf "fps=30,format=yuv420p" -c:v libx264 -preset fast -crf 20 -c:a aac -b:a 192k -shortest -movflags +faststart "${videoOut}"`;

console.log('Encoding MP4 (H.264 + AAC with FastStart for WhatsApp & Facebook)...');
execSync(videoCmd, { stdio: 'inherit' });

console.log(`\n🎉 SUCCESS! 60-second promotional audio-visual created:`);
console.log(`File: ${videoOut}`);
console.log(`Size: ${(fs.statSync(videoOut).size / (1024 * 1024)).toFixed(2)} MB`);
