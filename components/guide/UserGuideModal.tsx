'use client';

import React, { useState, useEffect } from 'react';
import { useLexicon } from '@/components/providers/LexiconProvider';
import { SUPPORTED_LANGUAGES, getLanguageConfig } from '@/lib/i18n/languages';
import { ReadingLevel } from '@/lib/db/types';
import {
  BookOpen,
  Languages,
  Sparkles,
  Layers,
  Smartphone,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  X,
  PenTool,
  HelpCircle,
  ExternalLink,
  Shield,
  Download,
} from 'lucide-react';
import Link from 'next/link';

export const UserGuideModal: React.FC = () => {
  const {
    isUserGuideOpen,
    closeUserGuide,
    currentLanguage,
    setLanguage,
    readingLevel,
    setReadingLevel,
    dir,
  } = useLexicon();

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [dontShowAgain, setDontShowAgain] = useState<boolean>(false);

  const langConfig = getLanguageConfig(currentLanguage);
  const isRtl = langConfig.dir === 'rtl';

  const totalSteps = 5;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('logos_user_guide_seen', 'true');
      if (dontShowAgain) {
        localStorage.setItem('logos_user_guide_dismiss_forever', 'true');
      }
    }
    closeUserGuide();
  };

  if (!isUserGuideOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/80 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="user-guide-title"
    >
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-navy-900 border border-gold-400/30 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] transition-all"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {/* Top Header */}
        <div className="bg-gradient-to-r from-navy-900 via-navy-850 to-indigo-950 text-white px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between border-b border-navy-800">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-gold-500/20 text-gold-400 border border-gold-400/30 flex items-center justify-center font-bold text-sm">
              {currentStep}/{totalSteps}
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400 block">
                Logos Lexicon User Guide • ব্যবহার ও অনুসন্ধান নির্দেশিকা
              </span>
              <h2 id="user-guide-title" className="font-serif font-bold text-base sm:text-lg text-white">
                Step-by-Step Walkthrough
              </h2>
            </div>
          </div>

          <button
            onClick={closeUserGuide}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-navy-800 transition-colors"
            aria-label="Close guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Bar */}
        <div className="w-full bg-gray-100 dark:bg-navy-950 h-1.5 flex">
          {Array.from({ length: totalSteps }).map((_, idx) => (
            <div
              key={idx}
              className={`flex-1 transition-all duration-300 ${
                idx + 1 <= currentStep ? 'bg-gold-500' : 'bg-transparent'
              }`}
            />
          ))}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 flex-1 text-gray-800 dark:text-gray-100 text-sm">
          {/* STEP 1: Language & Reading Level */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gold-600 dark:text-gold-400">
                <Languages className="w-6 h-6" />
                <h3 className="font-serif text-xl font-bold text-navy-900 dark:text-white">
                  1. Choose Your Language &amp; Reading Level
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                Logos Lexicon serves God&apos;s people worldwide across <strong>21 global and regional languages</strong>. When you select a language, the dictionary, original word studies, and Holy Scripture explorer all adapt to that tongue.
              </p>

              {/* Live Language Selector in Guide */}
              <div className="bg-gray-50 dark:bg-navy-950 p-4 rounded-xl border border-gray-200 dark:border-navy-800 space-y-2">
                <label className="text-xs font-bold text-navy-900 dark:text-gold-300 uppercase tracking-wider block">
                  Select Your Language Now:
                </label>
                <select
                  value={currentLanguage}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full bg-white dark:bg-navy-900 border border-gray-300 dark:border-navy-700 text-sm rounded-lg p-2.5 font-medium text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gold-400"
                >
                  {Object.values(SUPPORTED_LANGUAGES).map((l) => (
                    <option key={l.code} value={l.code}>
                      {l.flagEmoji || '🌐'} {l.nativeName} ({l.name}) {l.dir === 'rtl' ? '• RTL' : ''}
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-gray-500 italic">
                  Supported: English, Bengali (বাংলা), Hindi (हिन्दी), Urdu (اردو), Arabic (العربية), Persian (فارسی), Filipino, Japanese (日本語), Chinese (简体/繁體), Korean, and more.
                </p>
              </div>

              {/* Reading Level Depth Guide */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                  Choose Your Study Depth:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div
                    onClick={() => setReadingLevel('simple')}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      readingLevel === 'simple'
                        ? 'border-gold-500 bg-gold-50/50 dark:bg-gold-500/10 shadow-sm'
                        : 'border-gray-200 dark:border-navy-800 hover:bg-gray-50 dark:hover:bg-navy-800'
                    }`}
                  >
                    <div className="font-bold text-xs text-navy-900 dark:text-white flex items-center justify-between">
                      <span>Simple Level</span>
                      {readingLevel === 'simple' && <CheckCircle2 className="w-3.5 h-3.5 text-gold-500" />}
                    </div>
                    <p className="text-[11px] text-gray-500 mt-1 leading-snug">
                      For lay believers, new Christians, and Sunday School teaching.
                    </p>
                  </div>

                  <div
                    onClick={() => setReadingLevel('study')}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      readingLevel === 'study'
                        ? 'border-gold-500 bg-gold-50/50 dark:bg-gold-500/10 shadow-sm'
                        : 'border-gray-200 dark:border-navy-800 hover:bg-gray-50 dark:hover:bg-navy-800'
                    }`}
                  >
                    <div className="font-bold text-xs text-navy-900 dark:text-white flex items-center justify-between">
                      <span>Study Level</span>
                      {readingLevel === 'study' && <CheckCircle2 className="w-3.5 h-3.5 text-gold-500" />}
                    </div>
                    <p className="text-[11px] text-gray-500 mt-1 leading-snug">
                      For pastors, Bible students, and systematic sermon preparation.
                    </p>
                  </div>

                  <div
                    onClick={() => setReadingLevel('academic')}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      readingLevel === 'academic'
                        ? 'border-gold-500 bg-gold-50/50 dark:bg-gold-500/10 shadow-sm'
                        : 'border-gray-200 dark:border-navy-800 hover:bg-gray-50 dark:hover:bg-navy-800'
                    }`}
                  >
                    <div className="font-bold text-xs text-navy-900 dark:text-white flex items-center justify-between">
                      <span>Academic Level</span>
                      {readingLevel === 'academic' && <CheckCircle2 className="w-3.5 h-3.5 text-gold-500" />}
                    </div>
                    <p className="text-[11px] text-gray-500 mt-1 leading-snug">
                      For scholars, historical theology, and Greek/Hebrew original syntax.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Exploring A–Z Dictionary */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gold-600 dark:text-gold-400">
                <Layers className="w-6 h-6" />
                <h3 className="font-serif text-xl font-bold text-navy-900 dark:text-white">
                  2. A–Z Master Theological Vocabulary
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                Logos Lexicon features complete 100% alphabetical coverage from <strong>A to Z</strong> (including previously rare letters like D, O, Q, U, V, X, Y, Z).
              </p>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-navy-950 border border-gray-200 dark:border-navy-800 flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-500 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    A
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-navy-900 dark:text-white">
                      Alphabetical Filtering &amp; Smart Search
                    </h4>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                      Click any letter A through Z in the Dictionary to filter words instantly, or type terms in English, Bengali, Hindi, Urdu, Greek, or Hebrew into the search bar.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-navy-950 border border-gray-200 dark:border-navy-800 flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-500 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    B
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-navy-900 dark:text-white">
                      Original Greek &amp; Hebrew Lemmas
                    </h4>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                      Each entry integrates Strong&apos;s Concordance numbers, original biblical lemmas (e.g. χάρις / G5485, בְּרִית / H1285, יהוה / H3068), transliterations, and semantic range warnings.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-navy-950 border border-gray-200 dark:border-navy-800 flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-500 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    C
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-navy-900 dark:text-white">
                      Sound Orthodoxy &amp; Confessional Sources
                    </h4>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                      Curated under the theological direction of Ayan Kumar Ghosh, adhering to biblical inerrancy, historical patristic confessions, and sound hermeneutics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Holy Scripture Explorer */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gold-600 dark:text-gold-400">
                <BookOpen className="w-6 h-6" />
                <h3 className="font-serif text-xl font-bold text-navy-900 dark:text-white">
                  3. Canonical Scripture (All 66 Books in Your Language)
                </h3>
              </div>

              <div className="p-3 rounded-xl bg-gold-50 dark:bg-gold-500/10 border border-gold-300 dark:border-gold-500/30 text-xs text-gold-800 dark:text-gold-300">
                <strong>New Feature:</strong> Whenever you change your language, both the dictionary <em>and</em> the Holy Bible Explorer switch into that language!
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                Explore the complete canon of <strong>66 books</strong> (39 Old Testament + 27 New Testament) with book titles, testament classifications, and chapter summaries translated into Arabic, Persian, Japanese, Chinese, Filipino, Bengali, Hindi, and English.
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-gray-50 dark:bg-navy-950 p-2.5 rounded-lg border border-gray-200 dark:border-navy-800">
                  <span className="font-bold block text-navy-900 dark:text-white">Old Testament (39)</span>
                  <span className="text-[11px] text-gray-500">Law, History, Poetry, Prophets</span>
                </div>
                <div className="bg-gray-50 dark:bg-navy-950 p-2.5 rounded-lg border border-gray-200 dark:border-navy-800">
                  <span className="font-bold block text-navy-900 dark:text-white">New Testament (27)</span>
                  <span className="text-[11px] text-gray-500">Gospels, Acts, Epistles, Apocalypse</span>
                </div>
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                Every chapter connects directly to key original Hebrew &amp; Greek word studies and allows you to jump directly into sermon preparation.
              </p>
            </div>
          )}

          {/* STEP 4: Sermon Studio & Comparative Matrix */}
          {currentStep === 4 && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gold-600 dark:text-gold-400">
                <PenTool className="w-6 h-6" />
                <h3 className="font-serif text-xl font-bold text-navy-900 dark:text-white">
                  4. Sermon Studio &amp; Comparative Matrix
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                Logos Lexicon equips pastors, preachers, and theological researchers with specialized ministry tools:
              </p>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-navy-950 border border-gray-200 dark:border-navy-800 flex items-start space-x-3">
                  <PenTool className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs text-navy-900 dark:text-white">
                      Sermon Studio (Expository Outline Builder)
                    </h4>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                      Draft expository sermon points, paste theological definitions, attach scripture references, and export printable outlines for the pulpit.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-navy-950 border border-gray-200 dark:border-navy-800 flex items-start space-x-3">
                  <Languages className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs text-navy-900 dark:text-white">
                      Multilingual Comparison Matrix
                    </h4>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                      Examine how a single doctrinal term (such as <em>Grace</em>, <em>Covenant</em>, or <em>Justification</em>) is translated across 21 languages side-by-side to avoid translation distortions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: Device Access & Offline PWA */}
          {currentStep === 5 && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gold-600 dark:text-gold-400">
                <Smartphone className="w-6 h-6" />
                <h3 className="font-serif text-xl font-bold text-navy-900 dark:text-white">
                  5. Global Access on Any Device &amp; Offline Use
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                Logos Lexicon is a high-availability <strong>Progressive Web App (PWA)</strong>. It is designed to work in any country, on any modern browser, and on any device:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl border border-gray-200 dark:border-navy-800 bg-gray-50 dark:bg-navy-950 space-y-1">
                  <span className="font-bold text-navy-900 dark:text-white flex items-center space-x-1.5">
                    <Smartphone className="w-4 h-4 text-emerald-500" />
                    <span>Android &amp; iPhone</span>
                  </span>
                  <p className="text-[11px] text-gray-500">
                    Tap &ldquo;Install&rdquo; in the navbar or &ldquo;Add to Home Screen&rdquo; in Safari/Chrome for full-screen native app experience.
                  </p>
                </div>

                <div className="p-3 rounded-xl border border-gray-200 dark:border-navy-800 bg-gray-50 dark:bg-navy-950 space-y-1">
                  <span className="font-bold text-navy-900 dark:text-white flex items-center space-x-1.5">
                    <Download className="w-4 h-4 text-blue-500" />
                    <span>Offline Reliability</span>
                  </span>
                  <p className="text-[11px] text-gray-500">
                    Cached service worker keeps dictionary terms, Scripture, and notes accessible even in remote areas without stable internet.
                  </p>
                </div>
              </div>

              {/* Quick Action Navigation Buttons */}
              <div className="pt-2 flex flex-wrap gap-2">
                <Link
                  href="/dictionary"
                  onClick={handleComplete}
                  className="px-3.5 py-2 rounded-xl bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-xs shadow-sm transition-all inline-flex items-center space-x-1.5"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Open Dictionary A–Z</span>
                </Link>

                <Link
                  href="/scripture"
                  onClick={handleComplete}
                  className="px-3.5 py-2 rounded-xl bg-navy-800 hover:bg-navy-700 text-white font-semibold text-xs border border-navy-700 transition-all inline-flex items-center space-x-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-gold-400" />
                  <span>Open Scripture Explorer (66 Books)</span>
                </Link>

                <Link
                  href="/sermon-builder"
                  onClick={handleComplete}
                  className="px-3.5 py-2 rounded-xl bg-navy-800 hover:bg-navy-700 text-white font-semibold text-xs border border-navy-700 transition-all inline-flex items-center space-x-1.5"
                >
                  <PenTool className="w-3.5 h-3.5 text-gold-400" />
                  <span>Open Sermon Studio</span>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="bg-gray-50 dark:bg-navy-950 px-5 sm:px-8 py-4 border-t border-gray-200 dark:border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Don't show again toggle */}
          <label className="flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-400 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={dontShowAgain}
              onChange={(e) => setDontShowAgain(e.target.checked)}
              className="rounded border-gray-300 text-gold-500 focus:ring-gold-400 h-4 w-4"
            />
            <span>Don&apos;t show guide automatically on launch</span>
          </label>

          {/* Prev / Next Buttons */}
          <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
            {currentStep > 1 && (
              <button
                onClick={handlePrev}
                className="px-4 py-2 rounded-xl border border-gray-300 dark:border-navy-700 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-navy-800 transition-colors flex items-center space-x-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>
            )}

            <button
              onClick={handleNext}
              className="px-5 py-2 rounded-xl bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-xs shadow-md transition-all hover:scale-105 flex items-center space-x-1.5"
            >
              <span>{currentStep === totalSteps ? 'Get Started / শুরু করুন' : 'Next Step'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
