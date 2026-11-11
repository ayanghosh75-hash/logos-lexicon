'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { getAllEntries, getEntryBySlug } from '@/lib/db/seedData';
import { SUPPORTED_LANGUAGES, BIBLICAL_LANGUAGES } from '@/lib/i18n/languages';
import { MasterEntry } from '@/lib/db/types';
import { ShareModal } from '@/components/sharing/ShareModal';
import {
  Languages,
  Printer,
  Share2,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
} from 'lucide-react';

function CompareContent() {
  const searchParams = useSearchParams();
  const initialSlug = searchParams?.get('entry') || 'grace';

  const entries = getAllEntries();
  const [selectedSlug, setSelectedSlug] = useState<string>(initialSlug);
  const [shareModalOpen, setShareModalOpen] = useState<boolean>(false);

  const activeEntry: MasterEntry = getEntryBySlug(selectedSlug) || entries[0];

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 dark:border-navy-800 pb-6">
        <div>
          <div className="flex items-center space-x-2 text-gold-600 dark:text-gold-400">
            <Languages className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Multilingual Comparative Matrix
            </span>
          </div>
          <h1 className="font-serif text-3xl font-bold text-navy-900 dark:text-white mt-1">
            Compare Theological Terminology
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
            Compare how foundational biblical concepts are translated across diverse linguistic and theological traditions.
          </p>
        </div>

        {/* Action Buttons: Print & Share */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrint}
            className="p-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-white dark:bg-navy-900 text-gray-700 dark:text-gray-300 hover:text-navy-950 dark:hover:text-white text-xs font-semibold flex items-center space-x-1.5 shadow-sm transition-colors"
          >
            <Printer className="w-4 h-4 text-gold-500" />
            <span>Print Matrix</span>
          </button>

          <button
            onClick={() => setShareModalOpen(true)}
            className="p-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-white dark:bg-navy-900 text-gray-700 dark:text-gray-300 hover:text-navy-950 dark:hover:text-white text-xs font-semibold flex items-center space-x-1.5 shadow-sm transition-colors"
          >
            <Share2 className="w-4 h-4 text-gold-500" />
            <span>Share Permanent Link</span>
          </button>
        </div>
      </div>

      {/* Term Selector Pills */}
      <div className="bg-white dark:bg-navy-900 p-4 rounded-2xl border border-gray-200 dark:border-navy-800 shadow-sm space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
          Select Theological Concept:
        </label>
        <div className="flex flex-wrap gap-2">
          {entries.map((entry) => (
            <button
              key={entry.slug}
              onClick={() => setSelectedSlug(entry.slug)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedSlug === entry.slug
                  ? 'bg-navy-900 dark:bg-gold-500 text-gold-300 dark:text-navy-950 shadow-md'
                  : 'bg-gray-100 dark:bg-navy-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-navy-700'
              }`}
            >
              {entry.headwordEnglish}
            </button>
          ))}
        </div>
      </div>

      {/* Concept Overview Card */}
      <div className="bg-navy-950 text-white p-6 rounded-2xl border border-navy-800 space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400">
              Master English Record
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              {activeEntry.headwordEnglish}
            </h2>
          </div>
          <span className="text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-full flex items-center space-x-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{activeEntry.approvalStatus}</span>
          </span>
        </div>

        <p className="text-sm font-serif text-gray-300 leading-relaxed max-w-3xl">
          {activeEntry.definitionSimple}
        </p>

        {/* Biblical Source Language Anchors */}
        {activeEntry.originalLanguages && (
          <div className="pt-3 border-t border-navy-850 flex flex-wrap gap-3">
            {activeEntry.originalLanguages.map((orig, idx) => (
              <div
                key={idx}
                className="bg-navy-900/80 px-3 py-1.5 rounded-lg border border-navy-700 flex items-center space-x-2 text-xs"
              >
                <span className="text-gray-400">{orig.language}:</span>
                <span
                  dir={orig.language === 'Biblical Greek' ? 'ltr' : 'rtl'}
                  className="font-bold text-gold-300 text-base"
                >
                  {orig.scriptUnicode}
                </span>
                <span className="text-gray-400 italic">({orig.transliteration})</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Multilingual Comparison Matrix Table */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-800 shadow-sm overflow-hidden">
        <div className="p-4 bg-gray-50 dark:bg-navy-950 border-b border-gray-200 dark:border-navy-800 flex items-center justify-between">
          <h3 className="font-serif font-bold text-base text-navy-900 dark:text-white">
            Translation & Script Comparison Matrix
          </h3>
          <span className="text-xs text-gray-500">
            {Object.keys(activeEntry.translations).length} Local Translations Available
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-gray-100/70 dark:bg-navy-950 text-gray-500 uppercase tracking-wider text-[11px] border-b border-gray-200 dark:border-navy-800">
                <th className="py-3 px-4 font-semibold">Language</th>
                <th className="py-3 px-4 font-semibold">Local Script</th>
                <th className="py-3 px-4 font-semibold">Transliteration</th>
                <th className="py-3 px-4 font-semibold">Short Definition</th>
                <th className="py-3 px-4 font-semibold">Translation Notes</th>
                <th className="py-3 px-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-navy-800">
              {/* English Row */}
              <tr className="bg-gold-50/20 dark:bg-gold-950/10">
                <td className="py-3.5 px-4 font-bold text-navy-900 dark:text-gold-300 flex items-center space-x-1.5">
                  <span>🇬🇧</span>
                  <span>English (Master)</span>
                </td>
                <td className="py-3.5 px-4 font-bold text-navy-900 dark:text-white font-serif text-sm">
                  {activeEntry.headwordEnglish}
                </td>
                <td className="py-3.5 px-4 font-mono text-gray-500">
                  {activeEntry.pronunciationIpa || '—'}
                </td>
                <td className="py-3.5 px-4 max-w-xs text-gray-700 dark:text-gray-300 font-serif">
                  {activeEntry.definitionSimple}
                </td>
                <td className="py-3.5 px-4 max-w-xs text-gray-500 italic">
                  Controlled Master Theological Record.
                </td>
                <td className="py-3.5 px-4">
                  <span className="inline-block text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded-full whitespace-nowrap">
                    {activeEntry.approvalStatus}
                  </span>
                </td>
              </tr>

              {/* Local Translations */}
              {Object.entries(activeEntry.translations).map(([langCode, trans]) => {
                const langConfig = SUPPORTED_LANGUAGES[langCode];
                const isRtl = langConfig?.dir === 'rtl';

                return (
                  <tr
                    key={langCode}
                    className="hover:bg-gray-50 dark:hover:bg-navy-850/50 transition-colors"
                  >
                    <td className="py-3.5 px-4 font-medium text-gray-800 dark:text-gray-200">
                      <div className="flex items-center space-x-1.5">
                        <span>{langConfig?.flagEmoji || '🌐'}</span>
                        <span className="font-semibold">{langConfig?.name || langCode}</span>
                        <span className="text-[10px] text-gray-400 font-mono">({langCode})</span>
                      </div>
                    </td>
                    <td
                      dir={isRtl ? 'rtl' : 'ltr'}
                      className={`py-3.5 px-4 font-bold text-navy-900 dark:text-white text-base ${
                        isRtl ? 'font-urdu' : ''
                      }`}
                    >
                      {trans.localHeadword}
                    </td>
                    <td className="py-3.5 px-4 font-sans text-gray-600 dark:text-gray-400">
                      {trans.transliteration || '—'}
                    </td>
                    <td
                      dir={isRtl ? 'rtl' : 'ltr'}
                      className="py-3.5 px-4 max-w-xs text-gray-700 dark:text-gray-300 font-serif"
                    >
                      {trans.definitionSimple}
                    </td>
                    <td className="py-3.5 px-4 max-w-xs text-gray-500 text-[11px]">
                      {trans.translationNotes || 'No specific regional notes recorded.'}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="inline-block text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded-full whitespace-nowrap">
                        {trans.approvalStatus}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Share Modal */}
      <ShareModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        title={`Compare: ${activeEntry.headwordEnglish}`}
        definition={`Multilingual comparison across 15 languages: ${activeEntry.definitionSimple}`}
        path={`/compare?entry=${activeEntry.slug}`}
      />
    </div>
  );
}

export default function ComparePage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-6xl mx-auto px-4 py-16 text-center text-xs text-gray-500 font-mono">
          Loading comparison matrix...
        </div>
      }
    >
      <CompareContent />
    </Suspense>
  );
}
