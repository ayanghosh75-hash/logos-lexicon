'use client';

import React from 'react';
import Link from 'next/link';
import { getEntryBySlug, getAllEntries } from '@/lib/db/seedData';
import { EntryCard } from '@/components/dictionary/EntryCard';
import { ArrowLeft, Sparkles } from 'lucide-react';

interface EntryDetailClientProps {
  slug: string;
}

export const EntryDetailClient: React.FC<EntryDetailClientProps> = ({ slug }) => {
  const entry = getEntryBySlug(slug);

  if (!entry) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="font-serif text-2xl font-bold text-navy-900 dark:text-white">
          Entry Not Found
        </h2>
        <p className="text-gray-500 text-sm">
          The requested theological concept &ldquo;{slug}&rdquo; is not yet available in the peer-reviewed lexicon.
        </p>
        <Link
          href="/dictionary"
          className="inline-flex items-center space-x-2 text-gold-600 dark:text-gold-400 font-semibold text-xs hover:underline pt-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dictionary</span>
        </Link>
      </div>
    );
  }

  // Related entries: prioritize explicit relatedEntries if defined, fallback to general entries
  const allEntries = getAllEntries();
  const explicitRelated = (entry.relatedEntries || [])
    .map((s) => allEntries.find((e) => e.slug === s))
    .filter((e): e is typeof allEntries[0] => Boolean(e));

  const related = explicitRelated.length > 0
    ? explicitRelated
    : allEntries.filter((e) => e.slug !== entry.slug);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Navigation Breadcrumb */}
      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <Link
          href="/dictionary"
          className="inline-flex items-center space-x-1.5 hover:text-navy-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Dictionary</span>
        </Link>

        <div className="flex items-center space-x-2">
          <span>{entry.category}</span>
          <span>/</span>
          <span className="font-semibold text-navy-900 dark:text-gray-200">{entry.headwordEnglish}</span>
        </div>
      </div>

      {/* Full Entry Card */}
      <EntryCard entry={entry} compact={false} />

      {/* Related Theological Concepts */}
      {related.length > 0 && (
        <section className="pt-8 border-t border-gray-200 dark:border-navy-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif font-bold text-lg text-navy-900 dark:text-white flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-gold-500" />
              <span>Related Theological Concepts</span>
            </h3>
            <Link
              href="/dictionary"
              className="text-xs text-gold-600 dark:text-gold-400 hover:underline"
            >
              Browse All
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {related.slice(0, 2).map((rel) => (
              <EntryCard key={rel.id} entry={rel} compact={true} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
