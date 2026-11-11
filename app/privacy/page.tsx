'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Lock, Trash2, Download, CheckCircle, ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
  const handleExportData = () => {
    if (typeof window === 'undefined') return;
    const exportPayload = {
      savedWords: localStorage.getItem('logos_saved') || '[]',
      notes: localStorage.getItem('logos_notes') || '{}',
      preferences: {
        language: localStorage.getItem('logos_lang') || 'en',
        readingLevel: localStorage.getItem('logos_level') || 'study',
        theme: localStorage.getItem('logos_theme') || 'light',
      },
      exportedAt: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(exportPayload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `logos-lexicon-personal-data-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDeleteData = () => {
    if (typeof window === 'undefined') return;
    if (confirm('Are you sure you want to delete all local study history, bookmarks, and notes from this browser? This action cannot be undone.')) {
      localStorage.removeItem('logos_saved');
      localStorage.removeItem('logos_notes');
      localStorage.removeItem('logos_lang');
      localStorage.removeItem('logos_level');
      alert('All local study data has been successfully deleted.');
      window.location.reload();
    }
  };

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
          Privacy Policy & Data Minimization
        </h1>
        <p className="text-xs font-sans text-gray-500 uppercase tracking-widest">
          Last Updated: September 2026 • Governed by Christian Stewardship & Data Ethics
        </p>
      </div>

      <div className="space-y-6 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-xl font-bold text-navy-900 dark:text-white">1. Core Commitment: Zero Commercialization</h2>
          <p>
            Logos Lexicon does not sell, rent, monetize, or broker personal user study records, theological searches,
            or reading habits to any third-party advertisers, brokers, or external entities.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-navy-900 dark:text-white">2. Data Minimization & Local Storage</h2>
          <p>
            Guest users can explore the dictionary freely without creating an account. Personal bookmarks, private notes,
            reading level preferences, and downloaded offline language packs are stored directly in your device&apos;s
            local storage (`localStorage` and `IndexedDB`), remaining completely under your ownership.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-navy-900 dark:text-white">3. Your Data Rights (Export & Deletion)</h2>
          <p>
            You have the absolute right to export your study records at any moment, or delete them permanently from this browser.
          </p>

          <div className="flex flex-wrap gap-3 pt-2 font-sans">
            <button
              onClick={handleExportData}
              className="bg-navy-900 hover:bg-navy-800 text-gold-300 px-4 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5 shadow-sm transition-colors"
            >
              <Download className="w-4 h-4 text-gold-400" />
              <span>Export My Study Data (JSON)</span>
            </button>

            <button
              onClick={handleDeleteData}
              className="bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 px-4 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              <span>Delete All Local Data</span>
            </button>
          </div>
        </section>

        <section className="space-y-2 pt-4 border-t border-gray-100 dark:border-navy-800">
          <h2 className="text-xl font-bold text-navy-900 dark:text-white">4. Privacy Contact</h2>
          <p>
            For any inquiries regarding data protection or theological review privacy, contact:
            <br />
            <strong>Rev. Ayan Kumar Ghosh</strong> — Project Director, Logos Lexicon.
          </p>
        </section>
      </div>
    </div>
  );
}
