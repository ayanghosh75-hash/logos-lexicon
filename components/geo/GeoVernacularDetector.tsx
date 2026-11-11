'use client';

import React, { useState, useEffect } from 'react';
import { useLexicon } from '@/components/providers/LexiconProvider';
import { SUPPORTED_LANGUAGES, getLanguageConfig } from '@/lib/i18n/languages';
import { Globe, X, Check, Languages } from 'lucide-react';

interface GeoData {
  country: string;
  countryName: string;
  countryNative?: string;
  city?: string;
  detectedLanguage: string;
}

export const GeoVernacularDetector: React.FC = () => {
  const { currentLanguage, setLanguage, dir } = useLexicon();
  const [geoInfo, setGeoInfo] = useState<GeoData | null>(null);
  const [bannerVisible, setBannerVisible] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Strict Guard: Never override if the user already has a chosen language or preference
    const storedLang = localStorage.getItem('logos_lang');
    const hasManualLang = localStorage.getItem('logos_user_has_manual_lang');
    if (storedLang || hasManualLang) {
      return; // Absolute prohibition: Preserve user's explicit language selection!
    }

    const dismissed = sessionStorage.getItem('logos_geo_banner_dismissed');

    async function detectGeo() {
      let detectedLang = 'en';
      let cName = 'Global';
      let cNative = '';
      let cCode = '';

      try {
        // 1. Fetch from Edge CDN Geo API
        const res = await fetch('/api/geo');
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.detectedLanguage) {
            detectedLang = data.detectedLanguage;
            cName = data.countryName || 'Your Region';
            cNative = data.countryNative || '';
            cCode = data.country || '';
          }
        }
      } catch (e) {
        // Network fallback
      }

      // 2. Client-side Timezone Fallback if still English
      if (detectedLang === 'en') {
        try {
          const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
          if (tz.includes('Tehran')) {
            detectedLang = 'fa';
            cName = 'Iran';
            cNative = 'ایران';
          } else if (tz.includes('Baghdad') || tz.includes('Cairo') || tz.includes('Riyadh')) {
            detectedLang = 'ar';
            cName = 'Middle East';
            cNative = 'الشرق الأوسط';
          } else if (tz.includes('Manila')) {
            detectedLang = 'fil';
            cName = 'Philippines';
            cNative = 'Pilipinas';
          } else if (tz.includes('Tokyo')) {
            detectedLang = 'ja';
            cName = 'Japan';
            cNative = '日本';
          } else if (tz.includes('Shanghai') || tz.includes('Chongqing')) {
            detectedLang = 'zh';
            cName = 'China';
            cNative = '中国';
          } else if (tz.includes('Taipei') || tz.includes('Hong_Kong')) {
            detectedLang = 'zh-TW';
            cName = 'Taiwan / Hong Kong';
            cNative = '台灣 / 香港';
          } else if (tz.includes('Dhaka') || tz.includes('Kolkata')) {
            detectedLang = 'bn';
            cName = 'Bengal / Bangladesh';
            cNative = 'বাংলাদেশ / বাংলা';
          } else if (tz.includes('Seoul')) {
            detectedLang = 'ko';
            cName = 'South Korea';
            cNative = '대한민국';
          }
        } catch (err) {}
      }

      // 3. Client-side Navigator Language Fallback
      if (detectedLang === 'en' && typeof navigator !== 'undefined') {
        const navLang = navigator.language || (navigator.languages && navigator.languages[0]) || '';
        const prefix = navLang.split('-')[0].toLowerCase();
        if (SUPPORTED_LANGUAGES[prefix]) {
          detectedLang = prefix;
        }
      }

      // If vernacular found and user has not set manual preference, auto-apply!
      const userActivePref = localStorage.getItem('logos_lang') || localStorage.getItem('logos_user_has_manual_lang');
      if (detectedLang && detectedLang !== 'en' && !userActivePref) {
        setLanguage(detectedLang);
        setGeoInfo({
          country: cCode,
          countryName: cName,
          countryNative: cNative,
          detectedLanguage: detectedLang,
        });

        if (!dismissed) {
          setBannerVisible(true);
        }
      }
    }

    detectGeo();
  }, [setLanguage]);

  const handleDismiss = () => {
    setBannerVisible(false);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('logos_geo_banner_dismissed', 'true');
    }
  };

  if (!bannerVisible || !geoInfo) return null;

  const currentLangConfig = getLanguageConfig(geoInfo.detectedLanguage);
  const isRtl = currentLangConfig.dir === 'rtl';

  return (
    <div
      className="bg-navy-900 border-b border-gold-400/40 text-white px-4 py-2 text-xs shadow-md transition-all relative z-40"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center space-x-2 text-gold-300">
          <Globe className="w-4 h-4 text-gold-400 flex-shrink-0" />
          <span className="leading-snug">
            🌐 <strong>Auto-Detected Region:</strong> {geoInfo.countryName}{' '}
            {geoInfo.countryNative && `(${geoInfo.countryNative})`} • Vernacular Active:{' '}
            <strong className="text-white underline">
              {currentLangConfig.nativeName} ({currentLangConfig.name})
            </strong>{' '}
            alongside English.
          </span>
        </div>

        <div className="flex items-center space-x-2 flex-shrink-0">
          <button
            onClick={handleDismiss}
            className="px-3 py-1 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold transition-colors flex items-center space-x-1"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Got it / ঠিক আছে</span>
          </button>
          <button
            onClick={handleDismiss}
            className="p-1 text-gray-400 hover:text-white rounded transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
