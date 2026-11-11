import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';
import { Search, Home, BookOpen, Languages, ShieldCheck, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-xl w-full text-center space-y-8">
        {/* Brand Header */}
        <div className="flex justify-center">
          <Logo variant="compact" size={48} />
        </div>

        <div className="space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gold-400/10 text-gold-600 dark:text-gold-400 border border-gold-400/30">
            <span>HTTP 404 • Resource Not Located</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 dark:text-white">
            The Path You Seek Is Not Here
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
            The requested page or theological address does not exist or may have been organized under a permanent canonical path.
          </p>
        </div>

        {/* Quick Search Box */}
        <div className="max-w-md mx-auto">
          <form action="/dictionary" method="GET" className="relative">
            <input
              type="text"
              name="q"
              placeholder="Search theological concepts (e.g. grace, covenant)..."
              className="w-full px-4 py-3 pl-11 pr-24 rounded-xl border border-gray-300 dark:border-navy-700 bg-white dark:bg-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 shadow-sm"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-navy-900 hover:bg-navy-800 dark:bg-gold-500 dark:hover:bg-gold-600 text-white dark:text-navy-950 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
            >
              Search
            </button>
          </form>
        </div>

        {/* Navigation Recovery Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 text-left">
          <Link
            href="/"
            className="p-4 rounded-xl border border-gray-200 dark:border-navy-800 bg-white dark:bg-navy-900 hover:border-gold-400 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center space-x-3">
              <Home className="w-4 h-4 text-gold-500 flex-shrink-0" />
              <div>
                <div className="text-xs font-bold text-navy-900 dark:text-white">Home</div>
                <div className="text-[11px] text-gray-500">Return to Lexicon landing</div>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-gold-500 transition-colors" />
          </Link>

          <Link
            href="/dictionary"
            className="p-4 rounded-xl border border-gray-200 dark:border-navy-800 bg-white dark:bg-navy-900 hover:border-gold-400 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center space-x-3">
              <BookOpen className="w-4 h-4 text-gold-500 flex-shrink-0" />
              <div>
                <div className="text-xs font-bold text-navy-900 dark:text-white">A–Z Directory</div>
                <div className="text-[11px] text-gray-500">Browse peer-reviewed words</div>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-gold-500 transition-colors" />
          </Link>

          <Link
            href="/compare"
            className="p-4 rounded-xl border border-gray-200 dark:border-navy-800 bg-white dark:bg-navy-900 hover:border-gold-400 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center space-x-3">
              <Languages className="w-4 h-4 text-gold-500 flex-shrink-0" />
              <div>
                <div className="text-xs font-bold text-navy-900 dark:text-white">Compare Languages</div>
                <div className="text-[11px] text-gray-500">Multilingual matrix</div>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-gold-500 transition-colors" />
          </Link>

          <Link
            href="/status"
            className="p-4 rounded-xl border border-gray-200 dark:border-navy-800 bg-white dark:bg-navy-900 hover:border-gold-400 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-4 h-4 text-gold-500 flex-shrink-0" />
              <div>
                <div className="text-xs font-bold text-navy-900 dark:text-white">System Status</div>
                <div className="text-[11px] text-gray-500">Service health &amp; recovery</div>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-gold-500 transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
}
