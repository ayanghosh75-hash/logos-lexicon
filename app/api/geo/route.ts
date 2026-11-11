import { NextRequest, NextResponse } from 'next/server';

// Country code to primary vernacular language code mapping
const COUNTRY_TO_LANGUAGE_MAP: Record<string, { lang: string; countryName: string; nativeName: string }> = {
  // Arabic Speaking Countries (Middle East & North Africa)
  EG: { lang: 'ar', countryName: 'Egypt', nativeName: 'مصر' },
  IQ: { lang: 'ar', countryName: 'Iraq', nativeName: 'العراق' },
  SA: { lang: 'ar', countryName: 'Saudi Arabia', nativeName: 'السعودية' },
  AE: { lang: 'ar', countryName: 'United Arab Emirates', nativeName: 'الإمارات' },
  JO: { lang: 'ar', countryName: 'Jordan', nativeName: 'الأردن' },
  LB: { lang: 'ar', countryName: 'Lebanon', nativeName: 'لبنان' },
  SY: { lang: 'ar', countryName: 'Syria', nativeName: 'سوريا' },
  KW: { lang: 'ar', countryName: 'Kuwait', nativeName: 'الكويت' },
  OM: { lang: 'ar', countryName: 'Oman', nativeName: 'عمان' },
  QA: { lang: 'ar', countryName: 'Qatar', nativeName: 'قطر' },
  BH: { lang: 'ar', countryName: 'Bahrain', nativeName: 'البحرين' },
  YE: { lang: 'ar', countryName: 'Yemen', nativeName: 'اليمن' },
  SD: { lang: 'ar', countryName: 'Sudan', nativeName: 'السودان' },
  LY: { lang: 'ar', countryName: 'Libya', nativeName: 'ليبيا' },
  TN: { lang: 'ar', countryName: 'Tunisia', nativeName: 'تونس' },
  DZ: { lang: 'ar', countryName: 'Algeria', nativeName: 'الجزائر' },
  MA: { lang: 'ar', countryName: 'Morocco', nativeName: 'المغرب' },

  // Persian Speaking Countries
  IR: { lang: 'fa', countryName: 'Iran', nativeName: 'ایران' },
  AF: { lang: 'fa', countryName: 'Afghanistan', nativeName: 'افغانستان' },
  TJ: { lang: 'fa', countryName: 'Tajikistan', nativeName: 'تاجیکستان' },

  // Philippines
  PH: { lang: 'fil', countryName: 'Philippines', nativeName: 'Pilipinas' },

  // Japan
  JP: { lang: 'ja', countryName: 'Japan', nativeName: '日本' },

  // China & Chinese Diaspora
  CN: { lang: 'zh', countryName: 'China', nativeName: '中国' },
  SG: { lang: 'zh', countryName: 'Singapore', nativeName: '新加坡' },
  TW: { lang: 'zh-TW', countryName: 'Taiwan', nativeName: '台灣' },
  HK: { lang: 'zh-TW', countryName: 'Hong Kong', nativeName: '香港' },
  MO: { lang: 'zh-TW', countryName: 'Macau', nativeName: '澳門' },

  // South Asia
  BD: { lang: 'bn', countryName: 'Bangladesh', nativeName: 'বাংলাদেশ' },
  PK: { lang: 'ur', countryName: 'Pakistan', nativeName: 'پاکستان' },
  KR: { lang: 'ko', countryName: 'South Korea', nativeName: '대한민국' },

  // Spanish Speaking Countries
  ES: { lang: 'es', countryName: 'Spain', nativeName: 'España' },
  MX: { lang: 'es', countryName: 'Mexico', nativeName: 'México' },
  CO: { lang: 'es', countryName: 'Colombia', nativeName: 'Colombia' },
  AR: { lang: 'es', countryName: 'Argentina', nativeName: 'Argentina' },
  CL: { lang: 'es', countryName: 'Chile', nativeName: 'Chile' },
  PE: { lang: 'es', countryName: 'Peru', nativeName: 'Perú' },

  // French & German
  FR: { lang: 'fr', countryName: 'France', nativeName: 'France' },
  DE: { lang: 'de', countryName: 'Germany', nativeName: 'Deutschland' },
  AT: { lang: 'de', countryName: 'Austria', nativeName: 'Österreich' },
};

export async function GET(req: NextRequest) {
  try {
    // 1. Detect Country from Edge CDN Headers (Vercel Anycast / Cloudflare)
    const country =
      req.headers.get('x-vercel-ip-country') ||
      req.headers.get('cf-ipcountry') ||
      req.headers.get('x-country-code') ||
      '';

    const city = req.headers.get('x-vercel-ip-city') || '';
    const region = req.headers.get('x-vercel-ip-country-region') || '';

    // 2. Detect Browser Language Preferences (Accept-Language)
    const acceptLang = req.headers.get('accept-language') || '';

    let matchedLang = 'en';
    let countryName = 'Global';
    let countryNative = '';

    // Direct country match
    if (country && COUNTRY_TO_LANGUAGE_MAP[country.toUpperCase()]) {
      const match = COUNTRY_TO_LANGUAGE_MAP[country.toUpperCase()];
      matchedLang = match.lang;
      countryName = match.countryName;
      countryNative = match.nativeName;
    } else if (country.toUpperCase() === 'IN') {
      // Smart India resolution: Check accept-language for Bengali, Hindi, Tamil, Telugu, Urdu
      countryName = 'India';
      countryNative = 'भारत';
      if (acceptLang.includes('bn')) matchedLang = 'bn';
      else if (acceptLang.includes('ta')) matchedLang = 'ta';
      else if (acceptLang.includes('te')) matchedLang = 'te';
      else if (acceptLang.includes('ur')) matchedLang = 'ur';
      else matchedLang = 'hi';
    } else {
      // Fallback: Parse accept-language header
      if (acceptLang.startsWith('ar')) matchedLang = 'ar';
      else if (acceptLang.startsWith('fa')) matchedLang = 'fa';
      else if (acceptLang.startsWith('fil') || acceptLang.startsWith('tl')) matchedLang = 'fil';
      else if (acceptLang.startsWith('ja')) matchedLang = 'ja';
      else if (acceptLang.startsWith('zh-TW') || acceptLang.startsWith('zh-HK')) matchedLang = 'zh-TW';
      else if (acceptLang.startsWith('zh')) matchedLang = 'zh';
      else if (acceptLang.startsWith('bn')) matchedLang = 'bn';
      else if (acceptLang.startsWith('hi')) matchedLang = 'hi';
      else if (acceptLang.startsWith('ur')) matchedLang = 'ur';
      else if (acceptLang.startsWith('ko')) matchedLang = 'ko';
      else if (acceptLang.startsWith('es')) matchedLang = 'es';
      else if (acceptLang.startsWith('fr')) matchedLang = 'fr';
      else if (acceptLang.startsWith('de')) matchedLang = 'de';
    }

    return NextResponse.json({
      success: true,
      country: country || 'UNKNOWN',
      countryName,
      countryNative,
      city: city ? decodeURIComponent(city) : undefined,
      region: region || undefined,
      detectedLanguage: matchedLang,
      dualLanguagePair: {
        vernacular: matchedLang,
        international: 'en',
      },
      detectedBy: 'Lexi Autopilot Geo-Vernacular Coordinator',
      authority: 'Rev. Ayan Kumar Ghosh (Level 5 Sole Owner)',
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        fallbackLanguage: 'en',
      },
      { status: 500 }
    );
  }
}
