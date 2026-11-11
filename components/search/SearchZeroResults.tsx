'use client';

import React, { useState, useEffect } from 'react';
import { TypoSuggestion } from '@/lib/search/searchEngine';
import { BookOpen, Sparkles, PlusCircle, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface SearchZeroResultsProps {
  query: string;
  didYouMean: TypoSuggestion | null;
  suggestions: TypoSuggestion[];
  suggestedCategories: string[];
  onSelectSuggestion?: (term: string) => void;
  onSelectCategory?: (category: string) => void;
}

export function SearchZeroResults({
  query,
  didYouMean,
  suggestions,
  suggestedCategories,
  onSelectSuggestion,
  onSelectCategory,
}: SearchZeroResultsProps) {
  const [requested, setRequested] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Automatically record zero-result search gap
  useEffect(() => {
    if (!query || !query.trim()) return;

    fetch('/api/search-gaps', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: query.trim(),
        suggestedCorrection: didYouMean?.text,
        userRequested: false,
      }),
    }).catch((err) => console.warn('[SearchGap] Auto-log failed:', err));
  }, [query, didYouMean]);

  const handleRequestTerm = async () => {
    setIsSubmitting(true);
    try {
      await fetch('/api/search-gaps', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: query.trim(),
          suggestedCorrection: didYouMean?.text,
          userRequested: true,
        }),
      });
      setRequested(true);
    } catch (e) {
      console.error('Failed to submit request:', e);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAskLexi = () => {
    // Dispatch a custom event to open the Lexi Guide with this pre-filled query
    window.dispatchEvent(
      new CustomEvent('logos:open-lexi', {
        detail: { query: query.trim() },
      })
    );
  };

  return (
    <div className="text-center py-10 px-4 sm:px-8 bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-800 space-y-6 shadow-sm">
      <div className="inline-flex p-3 rounded-2xl bg-amber-50 dark:bg-navy-800 text-amber-600 dark:text-gold-400 border border-amber-200 dark:border-navy-700">
        <BookOpen className="w-8 h-8" />
      </div>

      <div className="space-y-2 max-w-lg mx-auto">
        <h3 className="font-serif text-lg font-bold text-navy-900 dark:text-white">
          No direct entries found for &ldquo;<span className="text-gold-600 dark:text-gold-400">{query}</span>&rdquo;
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
          Logos Lexicon only displays peer-reviewed, source-verified entries under the supervision of Ayan Kumar Ghosh.
        </p>
      </div>

      {/* Did You Mean Suggestion */}
      {didYouMean && (
        <div className="inline-flex flex-wrap items-center justify-center gap-2 p-3 px-4 rounded-xl bg-gold-50 dark:bg-navy-950/80 border border-gold-200 dark:border-gold-900/50 text-xs">
          <span className="text-gray-600 dark:text-gray-400 font-medium">Did you mean:</span>
          <button
            onClick={() => onSelectSuggestion ? onSelectSuggestion(didYouMean.text) : null}
            className="font-bold text-navy-900 dark:text-gold-300 hover:underline flex items-center gap-1 cursor-pointer"
          >
            {didYouMean.text}
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Alternative Matches */}
      {suggestions.length > 1 && (
        <div className="space-y-1.5">
          <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold block">
            Close Matches & Synonyms
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {suggestions.slice(1).map((s) => (
              <button
                key={s.slug}
                onClick={() => onSelectSuggestion ? onSelectSuggestion(s.text) : null}
                className="text-xs px-3 py-1 rounded-lg bg-gray-100 dark:bg-navy-800 text-gray-700 dark:text-gray-300 hover:bg-gold-50 dark:hover:bg-navy-700 transition-colors"
              >
                {s.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons: Ask Lexi and Request Term */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <button
          onClick={handleAskLexi}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-900 dark:bg-navy-800 text-gold-300 hover:text-gold-200 border border-gold-500/30 text-xs font-semibold shadow transition-all hover:scale-[1.02]"
        >
          <Sparkles className="w-4 h-4 text-gold-400" />
          Ask Lexi about this term
        </button>

        {requested ? (
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800 text-xs font-medium">
            <CheckCircle2 className="w-4 h-4" />
            Queued for Research
          </span>
        ) : (
          <button
            onClick={handleRequestTerm}
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-navy-950 text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-white border border-gray-300 dark:border-navy-700 text-xs font-medium transition-all"
          >
            <PlusCircle className="w-4 h-4 text-gold-500" />
            {isSubmitting ? 'Submitting...' : 'Request this term for the Lexicon'}
          </button>
        )}
      </div>

      {/* Related Theological Categories */}
      {suggestedCategories.length > 0 && (
        <div className="pt-4 border-t border-gray-100 dark:border-navy-800 space-y-2">
          <span className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold">
            Explore Related Categories
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {suggestedCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => onSelectCategory ? onSelectCategory(cat) : null}
                className="text-xs px-3 py-1 rounded-full bg-navy-50 dark:bg-navy-950 text-navy-700 dark:text-gray-300 border border-navy-200 dark:border-navy-800 hover:border-gold-400 transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
