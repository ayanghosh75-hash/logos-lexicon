'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '../brand/Logo';
import { useLexicon } from '../providers/LexiconProvider';
import { SUPPORTED_LANGUAGES } from '@/lib/i18n/languages';
import { ReadingLevel } from '@/lib/db/types';
import {
  BookOpen,
  Languages,
  Layers,
  Sparkles,
  Bookmark,
  Info,
  Menu,
  X,
  Sun,
  Moon,
  Download,
  Shield,
  Search,
  Share2,
  PenTool,
  Coffee,
  HelpCircle,
} from 'lucide-react';
import { ShareModal } from '../sharing/ShareModal';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const {
    currentLanguage,
    setLanguage,
    readingLevel,
    setReadingLevel,
    theme,
    toggleTheme,
    isInstallable,
    triggerInstall,
    openUserGuide,
  } = useLexicon();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home', icon: BookOpen },
    { href: '/scripture', label: 'Scripture', icon: BookOpen },
    { href: '/sermon-builder', label: 'Sermon Studio', icon: PenTool },
    { href: '/daily-word', label: 'Daily Word', icon: Sparkles },
    { href: '/dictionary', label: 'Dictionary', icon: Layers },
    { href: '/original-languages', label: 'Greek & Hebrew', icon: Sparkles },
    { href: '/compare', label: 'Compare', icon: Languages },
    { href: '/install', label: 'Install', icon: Download },
    { href: '/about', label: 'About', icon: Info },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-navy-950/95 backdrop-blur border-b border-gray-200 dark:border-navy-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo variant="compact" size={34} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const tourKey =
                link.href === '/compare'
                  ? 'nav-compare'
                  : link.href === '/original-languages'
                  ? 'nav-original-languages'
                  : link.href === '/learn'
                  ? 'nav-learn'
                  : undefined;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-tour={tourKey}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors flex items-center space-x-1.5 ${
                    isActive
                      ? 'bg-navy-900 dark:bg-gold-500/20 text-gold-400 dark:text-gold-300'
                      : 'text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-navy-900'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 opacity-70" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Controls: Reading Level, Language, Theme, Install */}
          <div className="hidden sm:flex items-center space-x-2">
            {/* Reading Level Selector Pills */}
            <div
              data-tour="reading-levels"
              className="bg-gray-100 dark:bg-navy-900 p-0.5 rounded-lg flex items-center border border-gray-200 dark:border-navy-800 text-xs"
              role="group"
              aria-label="Reading Level"
            >
              {(['simple', 'study', 'academic'] as ReadingLevel[]).map((level) => (
                <button
                  key={level}
                  onClick={() => setReadingLevel(level)}
                  className={`px-2.5 py-1 rounded-md capitalize font-medium transition-all ${
                    readingLevel === level
                      ? 'bg-white dark:bg-navy-800 text-navy-900 dark:text-gold-400 shadow-sm font-semibold'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                  }`}
                  title={`Switch reading level to ${level}`}
                >
                  {level}
                </button>
              ))}
            </div>

            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                data-tour="nav-language"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg border border-gray-200 dark:border-navy-800 bg-white dark:bg-navy-900 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:border-gold-400 transition-colors shadow-sm"
                aria-expanded={langDropdownOpen}
                aria-label="Select translation language"
              >
                <Languages className="w-3.5 h-3.5 text-gold-500" />
                <span>{SUPPORTED_LANGUAGES[currentLanguage]?.nativeName || 'English'}</span>
              </button>

              {langDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-52 bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-700 rounded-xl shadow-xl py-2 z-50 max-h-72 overflow-y-auto"
                  onClick={() => setLangDropdownOpen(false)}
                >
                  <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 border-b border-gray-100 dark:border-navy-800">
                    Select Language
                  </div>
                  {Object.values(SUPPORTED_LANGUAGES).map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between transition-colors ${
                        currentLanguage === lang.code
                          ? 'bg-gold-50 dark:bg-navy-800 text-gold-700 dark:text-gold-300 font-bold'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-navy-800/60'
                      }`}
                    >
                      <span className="font-medium">{lang.nativeName}</span>
                      <span className="text-[10px] text-gray-400 font-mono">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* User Guide Button */}
            <button
              onClick={openUserGuide}
              className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-navy-900 dark:bg-gold-500/20 text-gold-400 border border-gold-400/40 hover:bg-navy-800 text-xs font-bold transition-all shadow-sm"
              title="Step-by-step user guide & walkthrough"
              aria-label="Open User Guide"
            >
              <HelpCircle className="w-3.5 h-3.5 text-gold-400" />
              <span className="hidden md:inline">User Guide</span>
            </button>

            {/* Share Logos Lexicon Button */}
            <button
              onClick={() => setShareModalOpen(true)}
              className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-gold-400/10 hover:bg-gold-400/20 text-gold-600 dark:text-gold-400 border border-gold-400/30 text-xs font-semibold transition-colors shadow-sm"
              title="Share Logos Lexicon (WhatsApp, Copy Link, QR Code)"
              aria-label="Share Logos Lexicon"
            >
              <Share2 className="w-3.5 h-3.5 text-gold-500" />
              <span className="hidden sm:inline">Share</span>
            </button>

            {/* Buy Me a Coffee Support Button */}
            <a
              href="https://www.buymeacoffee.com/AyanKumarGhosh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold shadow-sm transition-all hover:scale-105"
              title="Support Logos Lexicon Ministry"
            >
              <Coffee className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Support</span>
            </a>

            {/* PWA Install Button */}
            <button
              onClick={isInstallable ? triggerInstall : () => { window.location.href = '/install'; }}
              className="bg-gold-500 hover:bg-gold-600 text-navy-950 px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center space-x-1 shadow-sm transition-all hover:scale-105"
              title="Install Logos Lexicon application on your device (Android, iPhone, PC, Mac)"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Install</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark/light theme"
              className="p-1.5 rounded-lg border border-gray-200 dark:border-navy-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-navy-800 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-gold-400" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={() => setShareModalOpen(true)}
              aria-label="Share Logos Lexicon"
              className="p-1.5 rounded-lg text-gold-500 hover:bg-gray-100 dark:hover:bg-navy-800"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 text-gray-600 dark:text-gray-300"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-gold-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-navy-800"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white dark:bg-navy-950 border-b border-gray-200 dark:border-navy-800 px-4 pt-2 pb-6 space-y-3">
          {/* Reading Level Pills in Mobile */}
          <div>
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1.5">
              Reading Level
            </span>
            <div className="grid grid-cols-3 gap-1 bg-gray-100 dark:bg-navy-900 p-1 rounded-lg">
              {(['simple', 'study', 'academic'] as ReadingLevel[]).map((level) => (
                <button
                  key={level}
                  onClick={() => setReadingLevel(level)}
                  className={`py-1.5 text-center text-xs capitalize rounded font-medium ${
                    readingLevel === level
                      ? 'bg-white dark:bg-navy-800 text-navy-900 dark:text-gold-400 font-bold shadow'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Language Selector in Mobile */}
          <div>
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1.5">
              Language
            </span>
            <select
              value={currentLanguage}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full bg-gray-50 dark:bg-navy-900 border border-gray-300 dark:border-navy-700 text-xs rounded-lg p-2.5 text-gray-800 dark:text-gray-200"
            >
              {Object.values(SUPPORTED_LANGUAGES).map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.nativeName} ({lang.name})
                </option>
              ))}
            </select>
          </div>

          {/* Mobile User Guide Action */}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openUserGuide();
              }}
              className="w-full bg-navy-900 dark:bg-gold-500/20 text-gold-400 border border-gold-400/40 p-2.5 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition-colors shadow-sm"
            >
              <HelpCircle className="w-4 h-4 text-gold-400" />
              <span>📖 Step-by-Step User Guide (ব্যবহার নির্দেশিকা)</span>
            </button>
          </div>

          {/* Mobile Install App Action */}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (isInstallable) {
                  triggerInstall();
                } else {
                  window.location.href = '/install';
                }
              }}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white p-2.5 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition-colors shadow-sm"
            >
              <Download className="w-4 h-4 text-white" />
              <span>📲 Install Logos Lexicon App (মোবাইলে ইনস্টল করুন)</span>
            </button>
          </div>

          {/* Mobile Share Action */}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setShareModalOpen(true);
              }}
              className="w-full bg-gold-400/10 hover:bg-gold-400/20 text-gold-600 dark:text-gold-300 border border-gold-400/30 p-2.5 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition-colors"
            >
              <Share2 className="w-4 h-4 text-gold-500" />
              <span>Share Logos Lexicon (WhatsApp, Link, QR)</span>
            </button>
          </div>

          {/* Nav Links in Mobile */}
          <div className="pt-2 border-t border-gray-100 dark:border-navy-800 space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-navy-900"
                >
                  <Icon className="w-4 h-4 text-gold-500" />
                  <span>{link.label}</span>
                </Link>
              );
            })}

            <div className="pt-2 border-t border-gray-100 dark:border-navy-800">
              <a
                href="https://www.buymeacoffee.com/AyanKumarGhosh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 px-3 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-sm transition-all"
              >
                <Coffee className="w-4 h-4" />
                <span>☕ Support Ministry (Buy Me a Coffee)</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Global Share Modal */}
      <ShareModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        path="/"
        title="Logos Lexicon"
      />
    </header>
  );
};
