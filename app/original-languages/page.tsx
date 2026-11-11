'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { getAllEntries } from '@/lib/db/seedData';
import { OriginalLanguageResource } from '@/lib/db/types';
import {
  Sparkles,
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  Search,
} from 'lucide-react';

export default function OriginalLanguagesPage() {
  const [activeTab, setActiveTab] = useState<'ALL' | 'GREEK' | 'HEBREW'>('ALL');
  const [filterQuery, setFilterQuery] = useState('');

  const entries = getAllEntries();

  // Extract all original language items linked to entries
  const originalItems: { resource: OriginalLanguageResource; parentSlug: string; parentTitle: string }[] = [];
  for (const entry of entries) {
    if (entry.originalLanguages) {
      for (const res of entry.originalLanguages) {
        originalItems.push({
          resource: res,
          parentSlug: entry.slug,
          parentTitle: entry.headwordEnglish,
        });
      }
    }
  }

  const filteredItems = originalItems.filter((item) => {
    if (activeTab === 'GREEK' && item.resource.language !== 'Biblical Greek') return false;
    if (activeTab === 'HEBREW' && item.resource.language !== 'Biblical Hebrew') return false;
    if (filterQuery.trim()) {
      const q = filterQuery.toLowerCase();
      return (
        item.resource.lemma.toLowerCase().includes(q) ||
        item.resource.transliteration.toLowerCase().includes(q) ||
        item.resource.scriptUnicode.toLowerCase().includes(q) ||
        item.resource.semanticRange.toLowerCase().includes(q) ||
        item.parentTitle.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Page Header */}
      <div className="border-b border-gray-200 dark:border-navy-800 pb-6 space-y-2">
        <div className="flex items-center space-x-2 text-gold-600 dark:text-gold-400">
          <Sparkles className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider">
            Biblical Source Languages
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 dark:text-white">
          Biblical Greek, Hebrew & Aramaic Research
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-3xl">
          Comprehensive linguistic lemmas, morphology, semantic ranges, and biblical occurrences.
          All entries are equipped with strict safeguards against root and etymological fallacies.
        </p>
      </div>

      {/* Critical Etymological Warning Banner */}
      <div className="bg-amber-50 dark:bg-amber-950/40 p-4 rounded-2xl border border-amber-300 dark:border-amber-700/50 flex items-start space-x-3 text-xs text-amber-900 dark:text-amber-200 shadow-sm">
        <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="font-bold text-sm block text-amber-950 dark:text-amber-100">
            Scholarly Hermeneutical Safeguard: The Etymological Fallacy
          </strong>
          <p className="leading-relaxed">
            A biblical word&apos;s true meaning is determined by its <strong>literary context and historical usage</strong>,
            not merely by breaking down its primitive grammatical root or compounding parts.
            Do not construct an entire theological doctrine on etymology alone (James Barr, <em>The Semantics of Biblical Language</em>).
          </p>
        </div>
      </div>

      {/* Filter and Tab Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-navy-900 p-3.5 rounded-2xl border border-gray-200 dark:border-navy-800 shadow-sm">
        <div className="flex space-x-1.5 text-xs">
          {(['ALL', 'GREEK', 'HEBREW'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 rounded-xl font-semibold transition-colors ${
                activeTab === tab
                  ? 'bg-navy-900 dark:bg-gold-500 text-gold-300 dark:text-navy-950 shadow-sm'
                  : 'bg-gray-100 dark:bg-navy-800 text-gray-600 dark:text-gray-400 hover:text-navy-900'
              }`}
            >
              {tab === 'ALL' ? 'All Languages' : tab === 'GREEK' ? 'Biblical Greek (ΝΤ)' : 'Biblical Hebrew (OT)'}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Search lemma, transliteration..."
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-gray-50 dark:bg-navy-950 border border-gray-200 dark:border-navy-700 rounded-lg text-gray-800 dark:text-gray-200 focus:outline-none focus:border-gold-400"
          />
        </div>
      </div>

      {/* Original Language Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredItems.map(({ resource, parentSlug, parentTitle }, idx) => {
          const isGreek = resource.language === 'Biblical Greek';

          return (
            <div
              key={idx}
              className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-800 p-6 space-y-4 shadow-sm hover:border-gold-400/50 transition-colors"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-600 dark:text-gold-400 bg-gold-50 dark:bg-gold-950/50 px-2 py-0.5 rounded-md border border-gold-200 dark:border-gold-800/40">
                    {resource.language}
                  </span>
                  <div className="flex items-baseline space-x-3 pt-1">
                    <span
                      dir={isGreek ? 'ltr' : 'rtl'}
                      className={`text-3xl font-bold text-navy-900 dark:text-white ${
                        isGreek ? 'font-greek' : 'font-hebrew'
                      }`}
                    >
                      {resource.scriptUnicode}
                    </span>
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-300 italic">
                      {resource.lemma} ({resource.transliteration})
                    </span>
                  </div>
                </div>

                <span className="text-xs font-mono font-bold text-gold-600 dark:text-gold-400 bg-gray-100 dark:bg-navy-950 px-2 py-1 rounded-md">
                  {resource.strongsNumber || '—'}
                </span>
              </div>

              {/* Pronunciation & Part of Speech */}
              <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center space-x-3 border-y border-gray-100 dark:border-navy-800 py-2">
                <span>Pronunciation: <strong className="text-gray-800 dark:text-gray-200 font-mono">{resource.pronunciation}</strong></span>
                <span>•</span>
                <span>Part of Speech: <strong className="text-gray-800 dark:text-gray-200">{resource.partOfSpeech}</strong></span>
              </div>

              {/* Semantic Range */}
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Semantic Range
                </h4>
                <p className="text-xs text-gray-800 dark:text-gray-200 leading-relaxed font-serif">
                  {resource.semanticRange}
                </p>
              </div>

              {/* Important Biblical Occurrences */}
              {resource.importantOccurrences && resource.importantOccurrences.length > 0 && (
                <div className="space-y-1.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center space-x-1">
                    <BookOpen className="w-3.5 h-3.5 text-gold-500" />
                    <span>Key Biblical Occurrences</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {resource.importantOccurrences.map((occ) => (
                      <span
                        key={occ}
                        className="text-[11px] bg-ivory-200 dark:bg-navy-800 text-navy-900 dark:text-gray-200 px-2 py-0.5 rounded border border-gray-200 dark:border-navy-700"
                      >
                        {occ}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Specific Translation Caution */}
              <div className="bg-gray-50 dark:bg-navy-950 p-3 rounded-xl border border-gray-200 dark:border-navy-800 text-xs text-gray-700 dark:text-gray-300">
                <strong className="text-amber-600 dark:text-amber-400 block mb-0.5">
                  Translation Caution:
                </strong>
                {resource.translationCautions}
              </div>

              {/* Parent Entry Link */}
              <div className="pt-2 border-t border-gray-100 dark:border-navy-800 flex items-center justify-between text-xs">
                <span className="text-gray-500">Related Theological Entry:</span>
                <Link
                  href={`/entry/${parentSlug}`}
                  className="font-bold text-gold-600 dark:text-gold-400 hover:underline flex items-center space-x-1"
                >
                  <span>{parentTitle}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
