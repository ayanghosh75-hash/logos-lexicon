import React from 'react';
import type { Metadata } from 'next';
import { getEntryBySlug, getAllEntries } from '@/lib/db/seedData';
import { EntryDetailClient } from '@/components/dictionary/EntryDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntryBySlug(slug);

  if (!entry) {
    return {
      title: 'Entry Not Found | Logos Lexicon',
      description: 'The requested theological entry is not found.',
    };
  }

  // Point canonical to permanent term route
  const canonicalUrl = `https://logoslexicon.org/term/${entry.slug}`;

  return {
    title: `${entry.headwordEnglish} — Logos Lexicon`,
    description: entry.definitionSimple,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${entry.headwordEnglish} — Multilingual Biblical & Theological Dictionary`,
      description: `${entry.headwordEnglish}: ${entry.definitionSimple}`,
      url: canonicalUrl,
      siteName: 'Logos Lexicon',
      type: 'article',
      images: [
        {
          url: 'https://logoslexicon.org/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${entry.headwordEnglish} — Logos Lexicon`,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${entry.headwordEnglish} — Logos Lexicon`,
      description: entry.definitionSimple,
      images: ['https://logoslexicon.org/og-image.jpg'],
    },
  };
}

export default async function EntryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  return <EntryDetailClient slug={slug} />;
}
