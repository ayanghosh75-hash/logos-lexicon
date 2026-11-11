'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Shield } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8 font-serif">
      <Link
        href="/"
        className="inline-flex items-center space-x-1.5 text-xs font-sans text-gold-600 dark:text-gold-400 hover:underline"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Return to Home</span>
      </Link>

      <div className="border-b border-gray-200 dark:border-navy-800 pb-6 space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 dark:text-white">
          Terms of Service & Copyright Classification
        </h1>
        <p className="text-xs font-sans text-gray-500 uppercase tracking-widest">
          Governing Scholarly Study, Fair Use & Intellectual Property
        </p>
      </div>

      <div className="space-y-6 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-xl font-bold text-navy-900 dark:text-white">1. Purpose & Fair Use</h2>
          <p>
            Logos Lexicon is provided for personal Bible study, church teaching, pastoral ministry, and academic research.
            You are permitted to quote entries in sermons, academic papers, and ministry publications with proper attribution
            to <em>Logos Lexicon</em> and the primary cited source.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-navy-900 dark:text-white">2. Copyright Protection & No Wholesale Scraping</h2>
          <p>
            Logos Lexicon maintains a strict Source & Licence Register. While public domain definitions (e.g. Thayer, BDB)
            and historic creeds are freely shared, the proprietary master editorial syntheses, comparative translations,
            and software interface are copyrighted by the Logos Lexicon project. Automated bulk scraping, commercial resale,
            or republishing without permission is strictly prohibited.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-navy-900 dark:text-white">3. Doctrinal Governance</h2>
          <p>
            The project operates under the oversight of <strong>Rev. Ayan Kumar Ghosh</strong>. The content represents
            ecumenical biblical orthodoxy, historic confessions, and careful scholarship. Lexi (the operations assistant)
            has zero authority to alter published doctrine independently.
          </p>
        </section>
      </div>
    </div>
  );
}
