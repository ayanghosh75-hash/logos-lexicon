'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MasterEntry, ReadingLevel } from '@/lib/db/types';
import { useLexicon } from '../providers/LexiconProvider';
import { getLanguageConfig, SUPPORTED_LANGUAGES } from '@/lib/i18n/languages';
import { ShareModal } from '../sharing/ShareModal';
import {
  Bookmark,
  BookmarkCheck,
  Share2,
  BookOpen,
  History,
  Scale,
  AlertTriangle,
  Heart,
  Quote,
  Sparkles,
  CheckCircle2,
  Languages,
} from 'lucide-react';

interface EntryCardProps {
  entry: MasterEntry;
  compact?: boolean;
}

export const EntryCard: React.FC<EntryCardProps> = ({ entry, compact = false }) => {
  const { currentLanguage, readingLevel, setReadingLevel, savedEntries, toggleSaveEntry } =
    useLexicon();
  const [shareModalOpen, setShareModalOpen] = useState(false);

  const isSaved = savedEntries.includes(entry.slug);
  const langConfig = getLanguageConfig(currentLanguage);
  const translation = entry.translations[currentLanguage];

  // Definition based on active reading level
  const getDefinition = (level: ReadingLevel) => {
    if (translation) {
      if (level === 'simple') return translation.definitionSimple;
      if (level === 'academic') return translation.definitionAcademic;
      return translation.definitionStudy;
    }
    if (level === 'simple') return entry.definitionSimple;
    if (level === 'academic') return entry.definitionAcademic;
    return entry.definitionStudy;
  };

  const activeDefinition = getDefinition(readingLevel);
  const isRtl = langConfig.dir === 'rtl';

  return (
    <article className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-800 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      {/* Entry Header */}
      <div className="p-6 pb-4 border-b border-gray-100 dark:border-navy-800/80">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            {/* Category & Status Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-400 bg-gold-50 dark:bg-gold-950/40 px-2.5 py-0.5 rounded-full border border-gold-200 dark:border-gold-800/40">
                {entry.category}
              </span>
              <span className="text-[11px] font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800/40 flex items-center space-x-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>{entry.approvalStatus}</span>
              </span>
            </div>

            {/* Title Section */}
            <div className="pt-2">
              <Link href={`/entry/${entry.slug}`}>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900 dark:text-white hover:text-gold-600 dark:hover:text-gold-400 transition-colors">
                  {entry.headwordEnglish}
                </h2>
              </Link>
              {entry.pronunciationIpa && (
                <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                  {entry.pronunciationIpa} • {entry.partOfSpeech}
                </span>
              )}
            </div>

            {/* Local Translation Headword (if not English) */}
            {currentLanguage !== 'en' && translation && (
              <div
                dir={isRtl ? 'rtl' : 'ltr'}
                className="mt-2 pt-2 border-t border-dashed border-gray-200 dark:border-navy-800"
              >
                <div className="flex items-baseline space-x-2 rtl:space-x-reverse">
                  <span
                    className={`text-xl sm:text-2xl font-bold text-navy-800 dark:text-gold-300 ${
                      isRtl ? 'font-urdu' : ''
                    }`}
                  >
                    {translation.localHeadword}
                  </span>
                  {translation.transliteration && (
                    <span className="text-xs text-gray-500 font-sans">
                      ({translation.transliteration})
                    </span>
                  )}
                  <span className="text-[10px] text-gray-400 uppercase font-mono">
                    [{SUPPORTED_LANGUAGES[currentLanguage]?.name}]
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons: Bookmark & Share */}
          <div className="flex items-center space-x-1.5 flex-shrink-0">
            <button
              onClick={() => toggleSaveEntry(entry.slug)}
              className={`p-2 rounded-lg border transition-colors ${
                isSaved
                  ? 'bg-gold-50 dark:bg-navy-800 border-gold-300 text-gold-600 dark:text-gold-400'
                  : 'border-gray-200 dark:border-navy-700 text-gray-500 hover:text-navy-900 dark:hover:text-white'
              }`}
              title={isSaved ? 'Remove from saved' : 'Save to personal list'}
              aria-label="Bookmark entry"
            >
              {isSaved ? <BookmarkCheck className="w-4 h-4 fill-current" /> : <Bookmark className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setShareModalOpen(true)}
              className="p-2 rounded-lg border border-gray-200 dark:border-navy-700 text-gray-500 hover:text-navy-900 dark:hover:text-white transition-colors"
              title="Share permanent link or QR code"
              aria-label="Share entry"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 space-y-6">
        {/* Reading Level Selector (In-place) */}
        <div className="flex items-center justify-between bg-gray-50 dark:bg-navy-950 p-2 rounded-xl border border-gray-100 dark:border-navy-800 text-xs">
          <span className="text-gray-500 font-medium">Reading Level:</span>
          <div className="flex space-x-1">
            {(['simple', 'study', 'academic'] as ReadingLevel[]).map((level) => (
              <button
                key={level}
                onClick={() => setReadingLevel(level)}
                className={`px-3 py-1 rounded-md capitalize font-medium transition-all ${
                  readingLevel === level
                    ? 'bg-navy-900 dark:bg-gold-500 text-gold-300 dark:text-navy-950 font-bold shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Active Definition */}
        <div
          dir={currentLanguage !== 'en' && isRtl ? 'rtl' : 'ltr'}
          className="text-gray-800 dark:text-gray-100 leading-relaxed text-base sm:text-lg font-serif"
        >
          {activeDefinition}
        </div>

        {/* Scripture References */}
        {entry.scriptureReferences && entry.scriptureReferences.length > 0 && (
          <div className="pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 flex items-center space-x-1.5">
              <BookOpen className="w-3.5 h-3.5 text-gold-500" />
              <span>Biblical References</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {entry.scriptureReferences.map((ref) => (
                <span
                  key={ref}
                  className="text-xs font-medium bg-ivory-200 dark:bg-navy-800 text-navy-900 dark:text-gray-200 px-2.5 py-1 rounded-md border border-gray-200 dark:border-navy-700"
                >
                  {ref}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Original Languages Summary Badge (Greek / Hebrew) */}
        {entry.originalLanguages && entry.originalLanguages.length > 0 && (
          <div className="bg-ivory-100 dark:bg-navy-950/70 p-4 rounded-xl border border-gold-400/20 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-600 dark:text-gold-400 flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span>Biblical Source Language Data</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {entry.originalLanguages.map((orig, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-navy-900 p-3 rounded-lg border border-gray-200 dark:border-navy-800 space-y-1"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-semibold text-gray-500">{orig.language}</span>
                    <span className="text-[11px] font-mono text-gold-600 dark:text-gold-400">
                      {orig.strongsNumber}
                    </span>
                  </div>
                  <div className="flex items-baseline space-x-2">
                    <span
                      dir={orig.language === 'Biblical Greek' ? 'ltr' : 'rtl'}
                      className={`text-xl font-bold text-navy-900 dark:text-white ${
                        orig.language === 'Biblical Greek' ? 'font-greek' : 'font-hebrew'
                      }`}
                    >
                      {orig.scriptUnicode}
                    </span>
                    <span className="text-xs text-gray-600 dark:text-gray-400 italic">
                      ({orig.transliteration})
                    </span>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300 line-clamp-2">
                    {orig.semanticRange}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Translation Caution Warning */}
        {entry.translationCautions && !compact && (
          <div className="bg-amber-50 dark:bg-amber-950/30 p-3.5 rounded-xl border border-amber-300 dark:border-amber-800/40 text-xs flex items-start space-x-2.5 text-amber-900 dark:text-amber-200">
            <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold block mb-0.5">Translation & Etymology Caution:</strong>
              <span>{entry.translationCautions}</span>
            </div>
          </div>
        )}

        {/* Detailed Study View (Shown when not compact) */}
        {!compact && (
          <div className="space-y-4 pt-2 border-t border-gray-100 dark:border-navy-800">
            {/* Historical Development */}
            {entry.historicalDevelopment && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5 flex items-center space-x-1.5">
                  <History className="w-3.5 h-3.5 text-gold-500" />
                  <span>Historical Development</span>
                </h4>
                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                  {entry.historicalDevelopment}
                </p>
              </div>
            )}

            {/* Major Interpretive Positions */}
            {entry.majorInterpretivePositions && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center space-x-1.5">
                  <Scale className="w-3.5 h-3.5 text-gold-500" />
                  <span>Major Interpretive Positions</span>
                </h4>
                <div className="bg-gray-50 dark:bg-navy-950 p-3 rounded-xl border border-gray-200 dark:border-navy-800 space-y-2">
                  <p className="text-xs font-medium text-navy-900 dark:text-gray-200">
                    <strong>Issue:</strong> {entry.majorInterpretivePositions.issue}
                  </p>
                  <div className="space-y-1.5 pt-1">
                    {entry.majorInterpretivePositions.positions.map((pos, pIdx) => (
                      <div
                        key={pIdx}
                        className="bg-white dark:bg-navy-900 p-2 rounded-lg border border-gray-200 dark:border-navy-800 text-xs"
                      >
                        <div className="font-bold text-gray-800 dark:text-gray-200">
                          {pos.name}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 text-[11px] mt-0.5">
                          {pos.description}
                        </div>
                        <div className="text-[10px] text-gold-600 dark:text-gold-400 font-medium mt-1">
                          Traditions: {pos.traditions.join(', ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Sources & Citations */}
            {entry.sources && entry.sources.length > 0 && (
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5 flex items-center space-x-1.5">
                  <Quote className="w-3.5 h-3.5 text-gold-500" />
                  <span>Scholarly Sources & Citations</span>
                </h4>
                <ul className="space-y-1">
                  {entry.sources.filter(Boolean).map((src, sIdx) => (
                    <li
                      key={sIdx}
                      className="text-[11px] text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-navy-950 p-2 rounded-md border border-gray-100 dark:border-navy-800 flex items-baseline justify-between"
                    >
                      <span>{src.fullCitation || src.shortTitle || src.sourceId}</span>
                      <span className="text-[10px] text-gold-600 dark:text-gold-400 font-mono flex-shrink-0 ml-2">
                        [{src.classification || 'Scholarly source'}]
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Card Footer: Deep Link & Language Compare Action */}
        <div className="pt-4 border-t border-gray-100 dark:border-navy-800 flex items-center justify-between text-xs">
          <Link
            href={`/compare?entry=${entry.slug}`}
            className="text-gold-600 dark:text-gold-400 hover:underline flex items-center space-x-1 font-medium"
          >
            <Languages className="w-3.5 h-3.5" />
            <span>Compare in 15 Languages</span>
          </Link>

          {compact && (
            <Link
              href={`/entry/${entry.slug}`}
              className="bg-navy-900 hover:bg-navy-800 dark:bg-gold-500 dark:hover:bg-gold-600 text-white dark:text-navy-950 px-3 py-1.5 rounded-lg font-semibold transition-colors"
            >
              Full Study Entry →
            </Link>
          )}
        </div>
      </div>

      {/* Share Modal with Permanent Canonical Path */}
      <ShareModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        title={entry.headwordEnglish}
        definition={activeDefinition}
        path={`/term/${entry.slug}`}
        languageName={SUPPORTED_LANGUAGES[currentLanguage]?.name}
      />
    </article>
  );
};
