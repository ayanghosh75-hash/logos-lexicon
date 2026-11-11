'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CANONICAL_BOOKS, CanonicalBook } from '@/lib/scripture/canonicalBooks';
import {
  getBookNameInLanguage,
  getTestamentNameInLanguage,
  getDivisionNameInLanguage,
  FOUNDATIONAL_PASSAGES,
} from '@/lib/scripture/multilingualScripture';
import { useLexicon } from '@/components/providers/LexiconProvider';
import { SUPPORTED_LANGUAGES, getLanguageConfig } from '@/lib/i18n/languages';
import {
  BookOpen,
  Search,
  Sparkles,
  Layers,
  ArrowRight,
  PenTool,
  Bookmark,
  Languages,
  CheckCircle2,
  Globe,
  Share2,
  HelpCircle,
} from 'lucide-react';

export default function ScriptureExplorerPage() {
  const { currentLanguage, setLanguage, openUserGuide } = useLexicon();
  const langConfig = getLanguageConfig(currentLanguage);
  const isRtl = langConfig.dir === 'rtl';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTestament, setSelectedTestament] = useState<'ALL' | 'OT' | 'NT'>('ALL');
  const [selectedDivision, setSelectedDivision] = useState<string>('ALL');
  const [selectedBook, setSelectedBook] = useState<CanonicalBook | null>(CANONICAL_BOOKS[42]); // Default John (JHN)
  const [selectedChapter, setSelectedChapter] = useState<number>(1);

  // Filter books dynamically supporting English, Bengali, Hindi, and current selected language
  const filteredBooks = CANONICAL_BOOKS.filter((b) => {
    const matchesTestament = selectedTestament === 'ALL' || b.testament === selectedTestament;
    const matchesDivision = selectedDivision === 'ALL' || b.divisionEn.includes(selectedDivision);
    const q = searchQuery.toLowerCase().trim();

    const translatedName = getBookNameInLanguage(b.id, currentLanguage);

    const matchesSearch =
      !q ||
      b.nameEn.toLowerCase().includes(q) ||
      b.nameBn.includes(q) ||
      b.nameHi.includes(q) ||
      translatedName.toLowerCase().includes(q) ||
      b.hebrewGreekName.toLowerCase().includes(q) ||
      b.themeEn.toLowerCase().includes(q) ||
      b.descriptionEn.toLowerCase().includes(q);

    return matchesTestament && matchesDivision && matchesSearch;
  });

  const divisionsList = [
    { labelKey: 'All Divisions', value: 'ALL' },
    { labelKey: 'Pentateuch', value: 'Pentateuch' },
    { labelKey: 'Historical', value: 'Historical' },
    { labelKey: 'Wisdom', value: 'Wisdom' },
    { labelKey: 'Major Prophets', value: 'Major Prophets' },
    { labelKey: 'Minor Prophets', value: 'Minor Prophets' },
    { labelKey: 'Gospels', value: 'Gospels' },
    { labelKey: 'Pauline', value: 'Pauline' },
    { labelKey: 'General', value: 'General' },
    { labelKey: 'Apocalypse', value: 'Apocalypse' },
  ];

  // Quick Language Shortcuts for top bar
  const quickLangs = ['en', 'bn', 'hi', 'ur', 'ar', 'fa', 'fil', 'ja', 'zh', 'ko'];

  // Associated Foundational Passage if available for selected book
  const activePassage = FOUNDATIONAL_PASSAGES.find((p) => p.bookId === selectedBook?.id);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-950 py-8 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-navy-900 via-navy-850 to-indigo-950 rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden border border-navy-700">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/20 text-gold-300 border border-gold-400/30 text-xs font-semibold tracking-wide uppercase">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Multilingual Canonical Scripture • ৬৬টি পবিত্র শাস্ত্রের পুস্তক</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif text-white">
              Holy Scripture Explorer (All 66 Books)
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Explore the complete 66 books of the Holy Bible in your chosen language—including Arabic, Persian, Japanese, Chinese, Filipino, Bengali, Hindi, Urdu, and English. Every book connects directly to original Hebrew &amp; Greek lemmas and sermon preparation.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={openUserGuide}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105"
              >
                <HelpCircle className="w-4 h-4" />
                <span>📖 How to Use Scripture Guide</span>
              </button>

              <Link
                href="/sermon-builder"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-xs sm:text-sm backdrop-blur transition-all"
              >
                <PenTool className="w-4 h-4 text-gold-400" />
                <span>Open Sermon Studio</span>
              </Link>

              <Link
                href="/original-languages"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-xs sm:text-sm backdrop-blur transition-all"
              >
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span>Original Biblical Roots</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Multilingual Bible Language Switcher Bar */}
        <div className="bg-white dark:bg-navy-900 p-4 sm:p-5 rounded-2xl shadow-sm border border-gold-400/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-navy-900 dark:text-white">
            <Globe className="w-5 h-5 text-gold-500 flex-shrink-0" />
            <div>
              <span className="text-xs font-bold text-gold-600 dark:text-gold-400 uppercase tracking-wider block">
                Active Scripture Language:
              </span>
              <span className="font-serif font-bold text-sm sm:text-base">
                {langConfig.nativeName} ({langConfig.name}) {isRtl ? '• RTL' : ''}
              </span>
            </div>
          </div>

          {/* Quick Language Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {quickLangs.map((code) => {
              const lang = SUPPORTED_LANGUAGES[code];
              if (!lang) return null;
              const isActive = currentLanguage === code;
              return (
                <button
                  key={code}
                  onClick={() => setLanguage(code)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-gold-500 text-navy-950 shadow-sm font-bold scale-105'
                      : 'bg-gray-100 dark:bg-navy-950 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-navy-800'
                  }`}
                >
                  {lang.flagEmoji || '🌐'} {lang.nativeName}
                </button>
              );
            })}

            {/* Full Select for All 21 Languages */}
            <select
              value={currentLanguage}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-gray-100 dark:bg-navy-950 border border-gray-300 dark:border-navy-700 text-xs rounded-lg px-2.5 py-1 font-semibold text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-gold-400"
              aria-label="Select Scripture Language"
            >
              {Object.values(SUPPORTED_LANGUAGES).map((l) => (
                <option key={l.code} value={l.code}>
                  {l.flagEmoji || '🌐'} {l.nativeName} ({l.name})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white dark:bg-navy-900 p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-navy-800 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={`Search books in ${langConfig.name}, English, Bengali, Hindi, Greek, or Hebrew...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 text-gray-900 dark:text-gray-100 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Testament Filter (All / OT / NT in Selected Language) */}
            <div className="flex items-center gap-1.5 p-1 bg-gray-100 dark:bg-navy-950 rounded-xl border border-gray-200 dark:border-navy-800">
              <button
                onClick={() => setSelectedTestament('ALL')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedTestament === 'ALL'
                    ? 'bg-white dark:bg-navy-800 text-navy-900 dark:text-gold-400 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                All 66 Books
              </button>
              <button
                onClick={() => setSelectedTestament('OT')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedTestament === 'OT'
                    ? 'bg-white dark:bg-navy-800 text-navy-900 dark:text-gold-400 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {getTestamentNameInLanguage('OT', currentLanguage)}
              </button>
              <button
                onClick={() => setSelectedTestament('NT')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedTestament === 'NT'
                    ? 'bg-white dark:bg-navy-800 text-navy-900 dark:text-gold-400 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {getTestamentNameInLanguage('NT', currentLanguage)}
              </button>
            </div>
          </div>

          {/* Division Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            {divisionsList.map((div) => {
              const label =
                div.value === 'ALL'
                  ? 'All Divisions'
                  : getDivisionNameInLanguage(div.labelKey, currentLanguage);

              return (
                <button
                  key={div.value}
                  onClick={() => setSelectedDivision(div.value)}
                  className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                    selectedDivision === div.value
                      ? 'bg-gold-500 text-navy-950 font-bold shadow-sm'
                      : 'bg-gray-100 dark:bg-navy-950 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-navy-800'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Grid: Book Selector & Selected Book Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Books List (5 cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-800 p-4 shadow-sm max-h-[850px] overflow-y-auto space-y-2">
            <div className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-navy-800 text-xs font-semibold text-gray-500">
              <span>{filteredBooks.length} Books Found</span>
              <span>Testament: {selectedTestament}</span>
            </div>

            {filteredBooks.map((book) => {
              const isSelected = selectedBook?.id === book.id;
              const primaryName = getBookNameInLanguage(book.id, currentLanguage);
              const showSecondary = primaryName !== book.nameEn;

              return (
                <div
                  key={book.id}
                  onClick={() => {
                    setSelectedBook(book);
                    setSelectedChapter(1);
                  }}
                  className={`p-3.5 rounded-xl cursor-pointer transition-all border ${
                    isSelected
                      ? 'bg-gold-50 dark:bg-navy-800 border-gold-400 dark:border-gold-500/60 shadow-sm'
                      : 'border-gray-100 dark:border-navy-800/80 hover:bg-gray-50 dark:hover:bg-navy-800/40'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-gray-100 dark:bg-navy-950 text-gray-600 dark:text-gray-400 font-semibold">
                          #{book.bookNumber}
                        </span>
                        {/* Primary Translated Book Name */}
                        <h3 className="font-bold text-gray-900 dark:text-gray-100 text-sm">
                          {primaryName}
                        </h3>
                        {/* Secondary English & Bengali Reference */}
                        {showSecondary && (
                          <span className="text-xs text-gray-400 font-normal">
                            ({book.nameEn})
                          </span>
                        )}
                        <span className="text-xs text-gold-600 dark:text-gold-400 font-medium font-serif">
                          {book.nameBn}
                        </span>
                      </div>
                      <p className="text-[11px] font-mono text-gray-400 dark:text-gray-500 mt-1">
                        {book.hebrewGreekName}
                      </p>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-navy-100 dark:bg-navy-950 text-navy-800 dark:text-gray-300">
                      {book.chaptersCount} Ch
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1 mt-2">
                    {book.themeEn}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Selected Book & Chapter Workspace (7 cols) */}
          {selectedBook && (
            <div className="lg:col-span-7 space-y-6">
              {/* Book Details Card */}
              <div className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-800 p-6 shadow-sm space-y-4">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gold-400/20 text-gold-700 dark:text-gold-300 border border-gold-400/30">
                        {getTestamentNameInLanguage(selectedBook.testament, currentLanguage)}
                      </span>
                      <span className="text-xs text-gray-400 font-mono">
                        {selectedBook.divisionEn}
                      </span>
                    </div>

                    {/* Book Title in Selected Language */}
                    <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 font-serif mt-2">
                      {getBookNameInLanguage(selectedBook.id, currentLanguage)}
                      {getBookNameInLanguage(selectedBook.id, currentLanguage) !== selectedBook.nameEn && (
                        <span className="text-lg text-gray-400 font-normal ml-2">
                          ({selectedBook.nameEn})
                        </span>
                      )}
                      <span className="text-gold-600 dark:text-gold-400 font-serif ml-2">
                        — {selectedBook.nameBn}
                      </span>
                    </h2>

                    <p className="text-sm font-mono text-gold-600 dark:text-gold-400 font-semibold mt-0.5">
                      {selectedBook.hebrewGreekName} • Author: {selectedBook.authorEn}
                    </p>
                  </div>

                  <Link
                    href={`/sermon-builder?book=${encodeURIComponent(selectedBook.nameEn)}&chapter=${selectedChapter}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-xs shadow-sm transition-all hover:scale-105"
                  >
                    <PenTool className="w-3.5 h-3.5" />
                    <span>Create Sermon on {selectedBook.nameEn} {selectedChapter}</span>
                  </Link>
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-navy-800 pt-3">
                  {selectedBook.descriptionEn}
                </p>

                <div className="bg-slate-50 dark:bg-navy-950 p-3.5 rounded-xl border border-gray-100 dark:border-navy-800 text-xs text-gray-600 dark:text-gray-400 space-y-1">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">Theological Core:</span>
                  <p>{selectedBook.themeEn}</p>
                  <p className="text-gold-600 dark:text-gold-400 font-serif">{selectedBook.themeBn}</p>
                </div>

                {/* Chapter Selector Grid */}
                <div className="space-y-2 pt-2 border-t border-gray-100 dark:border-navy-800">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
                      Select Chapter ({selectedBook.chaptersCount} Chapters)
                    </span>
                    <span className="text-xs text-gold-600 dark:text-gold-400 font-medium">
                      Currently viewing Chapter {selectedChapter}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto p-1">
                    {Array.from({ length: selectedBook.chaptersCount }, (_, i) => i + 1).map((ch) => (
                      <button
                        key={ch}
                        onClick={() => setSelectedChapter(ch)}
                        className={`w-9 h-9 rounded-lg text-xs font-bold transition-all ${
                          selectedChapter === ch
                            ? 'bg-gold-500 text-navy-950 shadow-md font-extrabold scale-105'
                            : 'bg-gray-100 dark:bg-navy-950 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-navy-800 border border-gray-200 dark:border-navy-800'
                        }`}
                      >
                        {ch}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Multilingual Scripture Passage Reader Panel */}
              {activePassage && (
                <div className="bg-white dark:bg-navy-900 rounded-2xl border border-gold-400/30 p-6 shadow-md space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-100 dark:border-navy-800 pb-3">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-gold-500" />
                      <h3 className="font-bold text-gray-900 dark:text-gray-100 text-sm">
                        {activePassage.bookNameEn} {activePassage.verse} — Scripture Reader in {langConfig.name}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gold-400/20 text-gold-600 dark:text-gold-400 font-bold uppercase">
                      {activePassage.originalLang}
                    </span>
                  </div>

                  {/* Translated Scripture Text in Selected Language */}
                  <div
                    className={`p-4 rounded-xl bg-gold-50/50 dark:bg-navy-950 border border-gold-200 dark:border-navy-800 space-y-2 ${
                      isRtl ? 'text-right' : 'text-left'
                    }`}
                    dir={isRtl ? 'rtl' : 'ltr'}
                  >
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gold-700 dark:text-gold-300 block">
                      {langConfig.nativeName} ({langConfig.name}):
                    </span>
                    <p className="text-sm sm:text-base font-serif text-gray-900 dark:text-gray-100 leading-relaxed">
                      {activePassage.translations[currentLanguage] || activePassage.translations['en']}
                    </p>
                  </div>

                  {/* Original Language Greek / Hebrew Text */}
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-gray-200 dark:border-navy-800 space-y-1.5">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">
                        Original {activePassage.originalLang} Text:
                      </span>
                      <span className="font-mono text-[10px]">
                        {activePassage.strongs.join(' • ')}
                      </span>
                    </div>
                    <p
                      className="font-serif text-sm text-gold-700 dark:text-gold-400 leading-relaxed"
                      dir={activePassage.originalLang === 'Hebrew' ? 'rtl' : 'ltr'}
                    >
                      {activePassage.originalText}
                    </p>
                    <p className="text-[11px] font-mono text-gray-400 dark:text-gray-500 italic">
                      {activePassage.transliteration}
                    </p>
                  </div>
                </div>
              )}

              {/* Exegetical Highlights & Original Language Words */}
              <div className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-800 p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 dark:border-navy-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-gold-500" />
                    <h3 className="font-bold text-gray-900 dark:text-gray-100 text-sm">
                      {selectedBook.nameEn} {selectedChapter} — Original Language Word Studies
                    </h3>
                  </div>
                  <Link
                    href="/compare"
                    className="text-xs text-gold-600 dark:text-gold-400 font-medium hover:underline inline-flex items-center gap-1"
                  >
                    <span>21-Language Matrix</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-gray-100 dark:border-navy-800 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-gold-600 dark:text-gold-400">
                        {selectedBook.testament === 'OT' ? 'בְּרִית (Berit)' : 'χάρις (Charis)'}
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-gray-200 dark:bg-navy-800 text-gray-700 dark:text-gray-300">
                        {selectedBook.testament === 'OT' ? "Strong's H1285" : "Strong's G5485"}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                      {selectedBook.testament === 'OT' ? 'Covenant / চুক্তি' : 'Grace / অনুগ্রহ'}
                    </p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400">
                      {selectedBook.testament === 'OT'
                        ? 'Solemn binding agreement initiated by God with sovereign fidelity.'
                        : 'Unmerited divine favor imparting transforming power to believers.'}
                    </p>
                    <Link
                      href={selectedBook.testament === 'OT' ? '/entry/covenant' : '/entry/grace'}
                      className="text-[11px] font-bold text-gold-600 dark:text-gold-400 hover:underline inline-block pt-1"
                    >
                      View Full Dictionary Entry &rarr;
                    </Link>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-gray-100 dark:border-navy-800 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-gold-600 dark:text-gold-400">
                        {selectedBook.testament === 'OT' ? 'חֶסֶד (Hesed)' : 'λόγος (Logos)'}
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-gray-200 dark:bg-navy-800 text-gray-700 dark:text-gray-300">
                        {selectedBook.testament === 'OT' ? "Strong's H2617" : "Strong's G3056"}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                      {selectedBook.testament === 'OT' ? 'Steadfast Love / দয়া' : 'Word / সনাতন বাক্য'}
                    </p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400">
                      {selectedBook.testament === 'OT'
                        ? "Unbreakable loyal love grounded in Yahweh's covenant nature."
                        : 'The eternal divine Reason, expression, and person of Jesus Christ.'}
                    </p>
                    <Link
                      href={selectedBook.testament === 'OT' ? '/entry/mercy' : '/entry/logos'}
                      className="text-[11px] font-bold text-gold-600 dark:text-gold-400 hover:underline inline-block pt-1"
                    >
                      View Full Dictionary Entry &rarr;
                    </Link>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-gray-500 border-t border-gray-100 dark:border-navy-800">
                  <span>Reading Level: Simple • Study • Academic</span>
                  <Link href="/original-languages" className="text-gold-600 dark:text-gold-400 hover:underline">
                    Explore all Greek & Hebrew roots &rarr;
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
