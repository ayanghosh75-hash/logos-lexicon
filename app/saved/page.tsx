'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLexicon } from '@/components/providers/LexiconProvider';
import { getEntryBySlug, getAllEntries } from '@/lib/db/seedData';
import { EntryCard } from '@/components/dictionary/EntryCard';
import {
  Bookmark,
  Download,
  FileText,
  Clock,
  HardDrive,
  Trash2,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';

export default function SavedPage() {
  const { savedEntries, toggleSaveEntry, notes, saveNote } = useLexicon();
  const [activeTab, setActiveTab] = useState<'BOOKMARKS' | 'NOTES' | 'OFFLINE'>('BOOKMARKS');
  const [downloadedPacks, setDownloadedPacks] = useState<string[]>(['en-core']);

  const allEntries = getAllEntries();
  const bookmarkedList = allEntries.filter((e) => savedEntries.includes(e.slug));

  const offlinePacks = [
    {
      id: 'en-core',
      name: 'English Master Core Pack',
      description: 'Complete master English definitions, Scripture index, and Greek/Hebrew resources.',
      size: '3.4 MB',
      version: 'v1.0.0',
      status: 'Downloaded',
    },
    {
      id: 'bn-pack',
      name: 'Bengali Theological Pack (বাংলা)',
      description: 'Complete Bengali translated records, terminology notes, and audio pronunciations.',
      size: '2.8 MB',
      version: 'v1.0.0',
      status: downloadedPacks.includes('bn-pack') ? 'Downloaded' : 'Available',
    },
    {
      id: 'hi-pack',
      name: 'Hindi Theological Pack (हिन्दी)',
      description: 'Devanagari script theological dictionary, terms, and cross-references.',
      size: '2.7 MB',
      version: 'v1.0.0',
      status: downloadedPacks.includes('hi-pack') ? 'Downloaded' : 'Available',
    },
    {
      id: 'ur-pack',
      name: 'Urdu Theological Pack (اردو)',
      description: 'Nastaliq typography pack with complete RTL lexicon and terminology definitions.',
      size: '2.9 MB',
      version: 'v1.0.0',
      status: downloadedPacks.includes('ur-pack') ? 'Downloaded' : 'Available',
    },
    {
      id: 'ko-pack',
      name: 'Korean Theological Pack (한국어)',
      description: 'Hangul and Hanja terminology records with systematic references.',
      size: '2.6 MB',
      version: 'v1.0.0',
      status: downloadedPacks.includes('ko-pack') ? 'Downloaded' : 'Available',
    },
  ];

  const handleToggleDownload = (packId: string) => {
    if (downloadedPacks.includes(packId)) {
      setDownloadedPacks(downloadedPacks.filter((id) => id !== packId));
    } else {
      setDownloadedPacks([...downloadedPacks, packId]);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Page Header */}
      <div className="border-b border-gray-200 dark:border-navy-800 pb-6 space-y-2">
        <div className="flex items-center space-x-2 text-gold-600 dark:text-gold-400">
          <Bookmark className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider">
            Personal Study & Offline Packs
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 dark:text-white">
          My Saved Theological Studies
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-2xl">
          Review saved concepts, private research notes, and manage downloadable offline language packs.
          All personal notes are stored securely on your local device.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 border-b border-gray-200 dark:border-navy-800 pb-1 text-xs">
        <button
          onClick={() => setActiveTab('BOOKMARKS')}
          className={`px-4 py-2 font-semibold rounded-t-lg transition-colors flex items-center space-x-1.5 ${
            activeTab === 'BOOKMARKS'
              ? 'border-b-2 border-gold-500 text-navy-950 dark:text-gold-400 font-bold'
              : 'text-gray-500 hover:text-navy-900'
          }`}
        >
          <Bookmark className="w-4 h-4" />
          <span>Saved Words ({bookmarkedList.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('OFFLINE')}
          className={`px-4 py-2 font-semibold rounded-t-lg transition-colors flex items-center space-x-1.5 ${
            activeTab === 'OFFLINE'
              ? 'border-b-2 border-gold-500 text-navy-950 dark:text-gold-400 font-bold'
              : 'text-gray-500 hover:text-navy-900'
          }`}
        >
          <HardDrive className="w-4 h-4" />
          <span>Offline Language Packs</span>
        </button>
      </div>

      {/* Tab 1: Bookmarks */}
      {activeTab === 'BOOKMARKS' && (
        <div className="space-y-6">
          {bookmarkedList.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {bookmarkedList.map((entry) => (
                <EntryCard key={entry.id} entry={entry} compact={false} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-800 p-8">
              <Bookmark className="w-8 h-8 text-gray-400 mx-auto mb-3" />
              <p className="font-serif text-gray-700 dark:text-gray-300 text-sm">
                You haven&apos;t saved any theological words yet.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Tap the bookmark icon on any entry to store it for quick reference here.
              </p>
              <Link
                href="/dictionary"
                className="mt-4 inline-block bg-navy-900 text-gold-400 px-4 py-2 rounded-lg text-xs font-semibold"
              >
                Browse Dictionary
              </Link>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Offline Packs */}
      {activeTab === 'OFFLINE' && (
        <div className="space-y-6">
          <div className="bg-navy-950 text-white p-6 rounded-2xl border border-navy-800 space-y-2">
            <h3 className="font-serif font-bold text-lg text-gold-300 flex items-center space-x-2">
              <HardDrive className="w-5 h-5 text-gold-400" />
              <span>Offline Dictionary Synchronization</span>
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed max-w-3xl">
              Download complete localized dictionary packs into your browser&apos;s IndexedDB storage.
              Once downloaded, you can search, view Greek/Hebrew data, and study without any active internet connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {offlinePacks.map((pack) => {
              const isDownloaded = downloadedPacks.includes(pack.id);

              return (
                <div
                  key={pack.id}
                  className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-800 p-5 space-y-3 flex flex-col justify-between shadow-sm"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif font-bold text-base text-navy-900 dark:text-white">
                        {pack.name}
                      </h4>
                      <span className="text-[10px] font-mono text-gray-400">{pack.version}</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-serif leading-relaxed">
                      {pack.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 dark:border-navy-800 flex items-center justify-between">
                    <span className="text-xs font-mono text-gray-600 dark:text-gray-300">
                      Size: {pack.size}
                    </span>

                    <button
                      onClick={() => handleToggleDownload(pack.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-colors ${
                        isDownloaded
                          ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-300'
                          : 'bg-navy-900 text-white dark:bg-gold-500 dark:text-navy-950 hover:opacity-90'
                      }`}
                    >
                      {isDownloaded ? (
                        <>
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>Installed</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-3.5 h-3.5" />
                          <span>Download Pack</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
