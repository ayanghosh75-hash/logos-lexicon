'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';
import { useLexicon } from '@/components/providers/LexiconProvider';
import { searchLexicon, getEnhancedSearchResults } from '@/lib/search/searchEngine';
import { SearchZeroResults } from '@/components/search/SearchZeroResults';
import { SEED_ENTRIES } from '@/lib/db/seedData';
import { EntryCard } from '@/components/dictionary/EntryCard';
import { SUPPORTED_LANGUAGES, BIBLICAL_LANGUAGES } from '@/lib/i18n/languages';
import {
  Search,
  BookOpen,
  Languages,
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Download,
  Bookmark,
  Scale,
  Clock,
  Compass,
} from 'lucide-react';

export default function HomePage() {
  const { currentLanguage, setLanguage, isInstallable, triggerInstall } = useLexicon();
  const [searchQuery, setSearchQuery] = useState('');

  // Multilingual Search calculation with typo-tolerance & zero-result analysis
  const enhancedSearch = useMemo(() => {
    if (!searchQuery.trim()) {
      return { results: [], didYouMean: null, suggestions: [], suggestedCategories: [] };
    }
    return getEnhancedSearchResults(searchQuery, currentLanguage);
  }, [searchQuery, currentLanguage]);

  const searchResults = enhancedSearch.results;

  // Word of the Day (seeded concept: Grace)
  const wordOfTheDay = SEED_ENTRIES[0];

  const popularSearches = [
    'Grace',
    'Covenant',
    'Justification',
    'Logos',
    'Kingdom of God',
    'χάρις (Charis)',
    'בְּרִית (Berith)',
    'অনুগ্রহ',
    'فضل',
  ];

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy-950 text-white pt-12 pb-20 border-b border-navy-800">
        {/* Background Subtle Gradient & Light Beam Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-navy-800 via-navy-950 to-black opacity-80" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-500/10 blur-3xl pointer-events-none rounded-full" />

        <div
          data-tour="hero-logo"
          className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6"
        >
          <Logo variant="full" theme="dark" size={68} />

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-300 font-serif leading-relaxed">
            An academically rigorous, theologically grounded multilingual dictionary. Explore foundational
            scriptural concepts, compare translations across 15 languages, and examine original Biblical Greek, Hebrew, and Aramaic.
          </p>

          {/* Multilingual Search Bar */}
          <div data-tour="hero-search" className="max-w-2xl mx-auto relative pt-4">
            <div className="relative flex items-center shadow-2xl rounded-2xl overflow-hidden border-2 border-gold-400/40 focus-within:border-gold-400 bg-white dark:bg-navy-900 transition-all">
              <div className="pl-4 text-gold-500">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search a biblical or theological term (English, Bengali, Hindi, Urdu, Greek, Hebrew)..."
                className="w-full py-4 pl-3 pr-4 text-sm sm:text-base bg-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none"
                aria-label="Search dictionary"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="pr-4 text-xs font-semibold text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Popular Search Tags */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 pt-3 text-xs">
              <span className="text-gray-400 font-medium">Popular:</span>
              {popularSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => setSearchQuery(term.split(' ')[0])}
                  className="bg-navy-900 hover:bg-navy-800 text-gold-300 hover:text-gold-200 px-2.5 py-1 rounded-full text-[11px] font-medium border border-navy-700 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search Results Display (if searching) */}
      {searchQuery.trim() && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-navy-800">
            <h3 className="font-serif font-bold text-xl text-navy-900 dark:text-white">
              Search Results for &ldquo;{searchQuery}&rdquo;
            </h3>
            <span className="text-xs text-gray-500 font-medium">
              {searchResults.length} {searchResults.length === 1 ? 'match' : 'matches'} found
            </span>
          </div>

          {searchResults.length > 0 ? (
            <div className="space-y-6 pt-6">
              {searchResults.map(({ entry, matchedField, matchedText }) => (
                <div key={entry.id} className="space-y-2">
                  <div className="text-[11px] text-gold-600 dark:text-gold-400 font-medium flex items-center space-x-1">
                    <span>Matched via:</span>
                    <strong className="underline">{matchedField}</strong>
                    <span className="text-gray-400 italic font-normal">({matchedText})</span>
                  </div>
                  <EntryCard entry={entry} compact={false} />
                </div>
              ))}
            </div>
          ) : (
            <div className="pt-6">
              <SearchZeroResults
                query={searchQuery}
                didYouMean={enhancedSearch.didYouMean}
                suggestions={enhancedSearch.suggestions}
                suggestedCategories={enhancedSearch.suggestedCategories}
                onSelectSuggestion={(term) => setSearchQuery(term)}
                onSelectCategory={(cat) => {
                  window.location.href = `/dictionary?category=${encodeURIComponent(cat)}`;
                }}
              />
            </div>
          )}
        </section>
      )}

      {/* Main Exploration Hub Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/dictionary"
            data-tour="browse-dictionary"
            className="group bg-white dark:bg-navy-900 p-5 rounded-2xl border border-gray-200 dark:border-navy-800 hover:border-gold-400/50 shadow-sm transition-all"
          >
            <div className="p-2.5 bg-navy-900 text-gold-400 rounded-xl w-fit group-hover:scale-105 transition-transform">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-base text-navy-900 dark:text-white mt-3 group-hover:text-gold-500 transition-colors">
              Browse A–Z Dictionary
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Explore the controlled English master vocabulary and regional translations.
            </p>
          </Link>

          <Link
            href="/compare"
            className="group bg-white dark:bg-navy-900 p-5 rounded-2xl border border-gray-200 dark:border-navy-800 hover:border-gold-400/50 shadow-sm transition-all"
          >
            <div className="p-2.5 bg-navy-900 text-gold-400 rounded-xl w-fit group-hover:scale-105 transition-transform">
              <Languages className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-base text-navy-900 dark:text-white mt-3 group-hover:text-gold-500 transition-colors">
              Compare Languages
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Side-by-side linguistic analysis across 15 Asian and Indian languages.
            </p>
          </Link>

          <Link
            href="/original-languages"
            className="group bg-white dark:bg-navy-900 p-5 rounded-2xl border border-gray-200 dark:border-navy-800 hover:border-gold-400/50 shadow-sm transition-all"
          >
            <div className="p-2.5 bg-navy-900 text-gold-400 rounded-xl w-fit group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-base text-navy-900 dark:text-white mt-3 group-hover:text-gold-500 transition-colors">
              Greek & Hebrew Studies
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Lemmas, Strong&apos;s references, semantic ranges, and root fallacy cautions.
            </p>
          </Link>

          <Link
            href="/learn"
            className="group bg-white dark:bg-navy-900 p-5 rounded-2xl border border-gray-200 dark:border-navy-800 hover:border-gold-400/50 shadow-sm transition-all"
          >
            <div className="p-2.5 bg-navy-900 text-gold-400 rounded-xl w-fit group-hover:scale-105 transition-transform">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-base text-navy-900 dark:text-white mt-3 group-hover:text-gold-500 transition-colors">
              Daily 5-Min Lessons
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Structured bite-sized theological modules and personal vocabulary building.
            </p>
          </Link>
        </div>
      </section>

      {/* Featured Word of the Day Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between pb-3">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-600 dark:text-gold-400 bg-gold-100 dark:bg-gold-950/60 px-3 py-1 rounded-full border border-gold-300 dark:border-gold-800">
              Word of the Day
            </span>
          </div>
          <span className="text-xs text-gray-500">Curated & Verified</span>
        </div>
        <EntryCard entry={wordOfTheDay} compact={false} />
      </section>

      {/* Core Theological Concepts Carousel / List */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-navy-900 dark:text-white">
              Essential Theological Vocabulary
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Foundational Christian doctrines with verified citations and multi-script records.
            </p>
          </div>
          <Link
            href="/dictionary"
            className="text-xs font-semibold text-gold-600 dark:text-gold-400 hover:underline flex items-center space-x-1"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SEED_ENTRIES.slice(1).map((entry) => (
            <EntryCard key={entry.id} entry={entry} compact={true} />
          ))}
        </div>
      </section>

      {/* Academic & Theological Standards Notice */}
      <section data-tour="theological-standards" className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-navy-900 text-white rounded-2xl p-6 sm:p-8 border border-gold-400/30 space-y-4 shadow-xl">
          <div className="flex items-center space-x-2 text-gold-400">
            <ShieldCheck className="w-6 h-6" />
            <h4 className="font-serif font-bold text-lg text-gold-200">
              Theological Integrity & Review Standards
            </h4>
          </div>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-serif">
            Every concept in Logos Lexicon is governed by the <strong>Master-Content Principle</strong>:
            a controlled, peer-reviewed English master entry linked with localized translations. We never publish
            unreviewed generative AI drafts as approved theological content. For disputed matters, we present
            biblical evidence and historical denominational traditions objectively, without partisan caricatures.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
            <div className="p-3 bg-navy-950/60 rounded-xl border border-navy-800">
              <span className="text-gold-400 font-semibold block mb-1">Source Accountability</span>
              <span className="text-gray-400">Public domain and licensed scholarly citations only.</span>
            </div>
            <div className="p-3 bg-navy-950/60 rounded-xl border border-navy-800">
              <span className="text-gold-400 font-semibold block mb-1">Original Languages</span>
              <span className="text-gray-400">Verified Greek & Hebrew lemmas with etymological warnings.</span>
            </div>
            <div className="p-3 bg-navy-950/60 rounded-xl border border-navy-800">
              <span className="text-gold-400 font-semibold block mb-1">Controlled Labels</span>
              <span className="text-gray-400">Transparent approval statuses from draft to institutional review.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
