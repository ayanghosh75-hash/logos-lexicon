'use client';

import React, { useState, useMemo } from 'react';
import { getPublishedEntries, getStagingCounts, getLetterDistribution } from '@/lib/db/seedData';
import { EntryCard } from '@/components/dictionary/EntryCard';
import { getEnhancedSearchResults } from '@/lib/search/searchEngine';
import { SearchZeroResults } from '@/components/search/SearchZeroResults';
import { Search, Filter, Layers, CheckCircle2, Clock, AlertCircle, ShieldCheck, BookOpen, RotateCcw } from 'lucide-react';

export default function DictionaryPage() {
  const [selectedLetter, setSelectedLetter] = useState<string>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [filterQuery, setFilterQuery] = useState<string>('');
  const [showStatusDetails, setShowStatusDetails] = useState<boolean>(false);

  // Strictly query published, peer-reviewed theological entries for the public directory
  const publishedEntries = useMemo(() => getPublishedEntries(), []);
  const stagingCounts = useMemo(() => getStagingCounts(), []);
  const letterCounts = useMemo(() => getLetterDistribution(publishedEntries), [publishedEntries]);

  const alphabet = useMemo(() => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''), []);

  const categories = useMemo(() => {
    const cats = new Set(publishedEntries.map((e) => e.category));
    return ['ALL', ...Array.from(cats)];
  }, [publishedEntries]);

  const enhancedSearch = useMemo(() => {
    if (!filterQuery.trim()) {
      return { results: [], didYouMean: null, suggestions: [], suggestedCategories: [] };
    }
    return getEnhancedSearchResults(filterQuery);
  }, [filterQuery]);

  const filteredEntries = useMemo(() => {
    return publishedEntries.filter((entry) => {
      // Letter filter
      if (selectedLetter !== 'ALL') {
        if (!entry.headwordEnglish.toUpperCase().startsWith(selectedLetter)) {
          return false;
        }
      }

      // Category filter
      if (selectedCategory !== 'ALL' && entry.category !== selectedCategory) {
        return false;
      }

      // Query filter
      if (filterQuery.trim()) {
        const q = filterQuery.toLowerCase();
        const matchesEnglish = entry.headwordEnglish.toLowerCase().includes(q);
        const matchesDef = entry.definitionSimple.toLowerCase().includes(q);
        const matchesTrans = Object.values(entry.translations).some((t) =>
          t.localHeadword.toLowerCase().includes(q)
        );
        if (!matchesEnglish && !matchesDef && !matchesTrans) return false;
      }

      return true;
    });
  }, [publishedEntries, selectedLetter, selectedCategory, filterQuery]);

  const isMasterVerified = filteredEntries.length > 0 && filteredEntries.every(
    (e) => e.publicationStatus === 'Published' || e.approvalStatus === 'Theologically reviewed'
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Page Header */}
      <div className="border-b border-gray-200 dark:border-navy-800 pb-6 space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center space-x-2 text-gold-600 dark:text-gold-400">
            <Layers className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-wider">A–Z Vocabulary Directory</span>
          </div>

          {/* Real-time Status Badge Tracker toggle */}
          <button
            onClick={() => setShowStatusDetails(!showStatusDetails)}
            className="flex items-center space-x-1.5 px-3 py-1 text-xs font-medium rounded-full bg-navy-50 dark:bg-navy-900/80 text-navy-700 dark:text-gray-300 border border-navy-100 dark:border-navy-800 hover:border-gold-400/50 transition-colors"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-gold-500" />
            <span>Editorial Staging: <strong>{stagingCounts.published}</strong> Published</span>
            <span className="text-[10px] text-gray-400">({showStatusDetails ? 'Hide details' : 'Show pipeline'})</span>
          </button>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 dark:text-white">
          Theological Dictionary Directory
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-2xl">
          Browse through the master-controlled English entries with attached multilingual translations,
          academic definitions, Greek/Hebrew original language lemmas, and verified citations.
        </p>

        {/* Editorial Pipeline Status Breakdown (Controlled Level-4 Quality Monitor) */}
        {showStatusDetails && (
          <div className="mt-4 p-4 rounded-xl bg-gray-50 dark:bg-navy-950/80 border border-gray-200 dark:border-navy-800 space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-gray-700 dark:text-gray-300">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-gold-500" />
                Lexi Theological Pipeline Status (Controlled Level 4)
              </span>
              <span className="text-gray-500 font-normal">Supervised by Rev. Ayan Kumar Ghosh</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs">
              <div className="bg-white dark:bg-navy-900 p-2.5 rounded-lg border border-emerald-200 dark:border-emerald-900/50">
                <span className="text-[11px] text-gray-500 dark:text-gray-400 block">Published</span>
                <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{stagingCounts.published}</span>
                <span className="text-[10px] text-emerald-700/80 dark:text-emerald-500 block">Publicly Visible</span>
              </div>
              <div className="bg-white dark:bg-navy-900 p-2.5 rounded-lg border border-blue-200 dark:border-blue-900/50">
                <span className="text-[11px] text-gray-500 dark:text-gray-400 block">Approved</span>
                <span className="text-lg font-bold text-blue-600 dark:text-blue-400">{stagingCounts.approved}</span>
                <span className="text-[10px] text-gray-400 block">Pending Release</span>
              </div>
              <div className="bg-white dark:bg-navy-900 p-2.5 rounded-lg border border-amber-200 dark:border-amber-900/50">
                <span className="text-[11px] text-gray-500 dark:text-gray-400 block">Awaiting Review</span>
                <span className="text-lg font-bold text-amber-600 dark:text-amber-400">{stagingCounts.awaitingReview}</span>
                <span className="text-[10px] text-gray-400 block">In Theological Queue</span>
              </div>
              <div className="bg-white dark:bg-navy-900 p-2.5 rounded-lg border border-gray-200 dark:border-navy-800">
                <span className="text-[11px] text-gray-500 dark:text-gray-400 block">Drafts in Staging</span>
                <span className="text-lg font-bold text-gray-700 dark:text-gray-300">{stagingCounts.drafts}</span>
                <span className="text-[10px] text-gray-400 block">Research Ingestion</span>
              </div>
              <div className="bg-white dark:bg-navy-900 p-2.5 rounded-lg border border-red-200 dark:border-red-900/50">
                <span className="text-[11px] text-gray-500 dark:text-gray-400 block">Copyright Blocked</span>
                <span className="text-lg font-bold text-red-600 dark:text-red-400">{stagingCounts.copyrightBlocked}</span>
                <span className="text-[10px] text-red-500/80 block">Licence Restricted</span>
              </div>
              <div className="bg-white dark:bg-navy-900 p-2.5 rounded-lg border border-gray-200 dark:border-navy-800">
                <span className="text-[11px] text-gray-500 dark:text-gray-400 block">Rejected / Archived</span>
                <span className="text-lg font-bold text-gray-500 dark:text-gray-400">{stagingCounts.rejected}</span>
                <span className="text-[10px] text-gray-400 block">Excluded from Lexicon</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Filter Controls */}
      <div className="bg-white dark:bg-navy-900 p-4 rounded-2xl border border-gray-200 dark:border-navy-800 space-y-4 shadow-sm">
        {/* Search input inside dictionary */}
        <div className="relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Filter by theological term, keyword, or translated headword..."
            className="w-full pl-9 pr-4 py-2 text-xs bg-gray-50 dark:bg-navy-950 border border-gray-200 dark:border-navy-700 rounded-xl text-gray-800 dark:text-gray-200 focus:outline-none focus:border-gold-400 transition-colors"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 text-xs">
          <Filter className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
          <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider flex-shrink-0">
            Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-lg whitespace-nowrap transition-colors font-medium ${
                selectedCategory === cat
                  ? 'bg-navy-900 dark:bg-gold-500 text-gold-300 dark:text-navy-950 font-bold shadow-sm'
                  : 'bg-gray-100 dark:bg-navy-800 text-gray-600 dark:text-gray-400 hover:text-navy-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Alphabet Bar with Dynamic Counts and Disabled States */}
        <div className="pt-2 border-t border-gray-100 dark:border-navy-800">
          <div className="flex items-center justify-between pb-1.5 text-[11px] text-gray-500">
            <span>Filter by Initial Letter:</span>
            {selectedLetter !== 'ALL' && (
              <button
                onClick={() => setSelectedLetter('ALL')}
                className="text-gold-600 dark:text-gold-400 hover:underline flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" /> Clear Letter Filter
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-1">
            {/* ALL button */}
            <button
              onClick={() => setSelectedLetter('ALL')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                selectedLetter === 'ALL'
                  ? 'bg-gold-500 text-navy-950 font-bold shadow-sm'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-navy-800'
              }`}
            >
              ALL ({publishedEntries.length})
            </button>

            {/* Alphabet letter buttons */}
            {alphabet.map((letter) => {
              const count = letterCounts[letter] || 0;
              const hasEntries = count > 0;
              const isSelected = selectedLetter === letter;

              return (
                <button
                  key={letter}
                  disabled={!hasEntries}
                  onClick={() => hasEntries && setSelectedLetter(letter)}
                  title={hasEntries ? `${count} published ${count === 1 ? 'entry' : 'entries'}` : `No published entries for '${letter}' yet`}
                  className={`px-2 py-1 text-xs font-semibold rounded-md transition-colors ${
                    isSelected
                      ? 'bg-gold-500 text-navy-950 font-bold shadow-sm'
                      : hasEntries
                      ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-navy-800'
                      : 'text-gray-300 dark:text-navy-700 cursor-not-allowed opacity-40 select-none'
                  }`}
                >
                  {letter}
                  {hasEntries && <span className="text-[10px] ml-0.5 opacity-80">({count})</span>}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Entries List Header */}
      <div className="space-y-6">
        <div className="flex items-center justify-between text-xs text-gray-500 flex-wrap gap-2">
          <span>
            Showing <strong className="text-navy-900 dark:text-white">{filteredEntries.length}</strong>{' '}
            {filteredEntries.length === 1 ? 'entry' : 'entries'}
            {selectedLetter !== 'ALL' && ` starting with '${selectedLetter}'`}
            {selectedCategory !== 'ALL' && ` in ${selectedCategory}`}
          </span>

          {/* Conditional Master-Content Verification badge */}
          {isMasterVerified ? (
            <span className="flex items-center space-x-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>Master-Content Verified</span>
            </span>
          ) : publishedEntries.length === 0 ? (
            <span className="flex items-center space-x-1.5 text-amber-600 dark:text-amber-400 font-medium">
              <Clock className="w-4 h-4" />
              <span>Content preparation in progress</span>
            </span>
          ) : (
            <span className="text-gray-400 text-[11px]">
              Filters active ({filteredEntries.length} matching of {publishedEntries.length} published)
            </span>
          )}
        </div>

        {/* Entries Display */}
        {filteredEntries.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {filteredEntries.map((entry) => (
              <EntryCard key={entry.id} entry={entry} compact={false} />
            ))}
          </div>
        ) : publishedEntries.length === 0 ? (
          /* Entire Database Has Zero Published Entries */
          <div className="text-center py-16 bg-white dark:bg-navy-900 rounded-2xl border border-amber-200 dark:border-navy-800 p-8 space-y-4">
            <div className="inline-flex p-3 rounded-full bg-amber-50 dark:bg-navy-800 text-amber-600 dark:text-amber-400">
              <Clock className="w-8 h-8 animate-pulse" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-lg font-bold text-navy-900 dark:text-white">
                Content preparation in progress
              </h3>
              <p className="text-xs text-gray-500 max-w-md mx-auto">
                Lexi and the Theological Review Board are currently preparing and verifying foundational entries.
                No unreviewed drafts are published to this public directory.
              </p>
            </div>
          </div>
        ) : filterQuery.trim() ? (
          /* Zero-Result Search Gap Experience with Typo Suggestions and Request Term */
          <SearchZeroResults
            query={filterQuery}
            didYouMean={enhancedSearch.didYouMean}
            suggestions={enhancedSearch.suggestions}
            suggestedCategories={enhancedSearch.suggestedCategories}
            onSelectSuggestion={(term) => {
              setFilterQuery(term);
              setSelectedLetter('ALL');
            }}
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              setFilterQuery('');
            }}
          />
        ) : (
          /* Filter (Letter/Category) Returned Zero Matches */
          <div className="text-center py-16 bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-800 p-8 space-y-4">
            <div className="inline-flex p-3 rounded-full bg-gray-100 dark:bg-navy-800 text-gray-400">
              <AlertCircle className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-base font-bold text-navy-900 dark:text-white">
                No published entries match the selected filter
              </h3>
              <p className="text-xs text-gray-500 max-w-md mx-auto">
                {selectedLetter !== 'ALL' && `No active entries begin with the letter '${selectedLetter}'. `}
                Try selecting a different letter, category, or resetting filters.
              </p>
            </div>
            <button
              onClick={() => {
                setSelectedLetter('ALL');
                setSelectedCategory('ALL');
                setFilterQuery('');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-navy-900 dark:bg-gold-500 text-gold-300 dark:text-navy-950 hover:opacity-90 transition-opacity"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
