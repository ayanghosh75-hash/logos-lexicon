'use client';

import React from 'react';
import Link from 'next/link';
import { useLexicon } from '@/components/providers/LexiconProvider';
import {
  Download,
  Smartphone,
  Laptop,
  CheckCircle,
  HelpCircle,
  Share,
  PlusSquare,
  ShieldCheck,
  ArrowRight,
  FileText,
  ExternalLink,
} from 'lucide-react';

export default function InstallPage() {
  const { isInstallable, triggerInstall } = useLexicon();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      {/* Page Header */}
      <div className="border-b border-gray-200 dark:border-navy-800 pb-6 space-y-3 text-center sm:text-left">
        <div className="inline-flex items-center space-x-2 text-gold-600 dark:text-gold-400">
          <Download className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider">
            Installable Progressive Web App (PWA)
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 dark:text-white">
          Install Logos Lexicon on Your Device
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Logos Lexicon is a high-availability Progressive Web App. You can install it on your home screen or desktop
          for offline access, or simply use it directly inside your web browser at any time.
        </p>

        {/* Action Buttons: Install & Continue in Browser */}
        <div className="flex flex-wrap items-center gap-3 pt-3">
          {isInstallable && (
            <button
              onClick={triggerInstall}
              className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold px-6 py-3 rounded-xl text-sm flex items-center space-x-2 shadow-lg transition-transform hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span>Install App on This Device</span>
            </button>
          )}

          <Link
            href="/"
            className="px-6 py-3 rounded-xl border border-gray-300 dark:border-navy-700 bg-white dark:bg-navy-900 hover:bg-gray-50 dark:hover:bg-navy-800 text-sm font-semibold text-gray-700 dark:text-gray-200 transition-colors inline-flex items-center space-x-2 shadow-sm"
          >
            <span>Continue in Browser</span>
            <ArrowRight className="w-4 h-4 text-gold-500" />
          </Link>

          <a
            href="/guides/Logos-Lexicon-Bengali-User-Guide.pdf"
            download="Logos-Lexicon-Bengali-User-Guide.pdf"
            className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold transition-colors inline-flex items-center space-x-2 shadow-md"
          >
            <FileText className="w-4 h-4" />
            <span>বাংলা ব্যবহার ও ইনস্টলেশন গাইড (Download Bengali PDF)</span>
          </a>
        </div>

        {/* Security & Safe Installation Guarantee Badge */}
        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 flex items-start space-x-3 text-xs text-emerald-900 dark:text-emerald-200">
          <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-sm text-emerald-800 dark:text-emerald-300 block">
              🔒 100% Verified Safe &amp; Clean Installation (কোনো ক্ষতিকারক ফাইল সতর্কতা নেই)
            </span>
            <p className="leading-relaxed">
              Logos Lexicon installs cleanly as an official cryptographic SSL-secured Progressive Web App directly through Google Chrome, Safari, and Microsoft Edge. 
              <strong> It will NEVER show &ldquo;Unsafe app&rdquo; or &ldquo;Harmful file&rdquo; warnings</strong> because it never downloads untrusted APK or executable files. It is 100% secure, private, and malware-free worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* QR Code Quick Scan for Mobile Transfer */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl border border-gold-400/30 p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 shadow-md">
        <div className="flex-shrink-0 bg-white p-3 rounded-2xl border border-gray-200 shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/qr/logos-lexicon-qr.png"
            alt="Logos Lexicon Permanent QR Code"
            className="w-40 h-40 object-contain"
          />
        </div>
        <div className="space-y-3 text-center md:text-left">
          <div className="inline-flex items-center space-x-1 text-xs font-bold text-gold-600 dark:text-gold-400 uppercase tracking-wider">
            <span>Permanent QR Code</span>
          </div>
          <h2 className="font-serif text-xl font-bold text-navy-900 dark:text-white">
            Scan to Open on Android, iPhone, or iPad
          </h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
            Point your smartphone camera at this permanent QR code to open the dictionary instantly.
            Encodes the permanent public address: <strong className="text-navy-900 dark:text-gold-300 font-mono">https://logoslexicon.org/</strong>
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-1 justify-center md:justify-start">
            <a
              href="/qr/logos-lexicon-qr.pdf"
              download="logos-lexicon-qr.pdf"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 text-xs font-bold transition-colors shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download Printable PDF</span>
            </a>
            <a
              href="/qr/logos-lexicon-qr.png"
              download="logos-lexicon-qr.png"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-white text-xs font-medium transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>PNG (High Res)</span>
            </a>
            <a
              href="/qr/logos-lexicon-qr.svg"
              download="logos-lexicon-qr.svg"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-white text-xs font-medium transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>SVG (Vector)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Device Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* iOS / iPhone / iPad Guide */}
        <div className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-800 p-6 space-y-4 shadow-sm">
          <div className="flex items-center space-x-2 text-navy-900 dark:text-white">
            <Smartphone className="w-5 h-5 text-gold-500" />
            <h3 className="font-serif font-bold text-lg">iPhone &amp; iPad (Safari)</h3>
          </div>

          <ol className="space-y-3 text-xs text-gray-700 dark:text-gray-300 font-serif list-decimal list-inside">
            <li className="leading-relaxed">
              Open <strong>Safari</strong> and navigate to <code>https://logoslexicon.org/</code>.
            </li>
            <li className="leading-relaxed">
              Tap the <strong>Share</strong> icon (square with an upward arrow) in the bottom navigation toolbar.
            </li>
            <li className="leading-relaxed">
              Scroll down the share sheet and tap <strong>&ldquo;Add to Home Screen&rdquo;</strong>.
            </li>
            <li className="leading-relaxed">
              Tap <strong>&ldquo;Add&rdquo;</strong> in the top-right corner. Logos Lexicon will now open full-screen like an app store app.
            </li>
          </ol>
        </div>

        {/* Android Guide */}
        <div className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-800 p-6 space-y-4 shadow-sm">
          <div className="flex items-center space-x-2 text-navy-900 dark:text-white">
            <Smartphone className="w-5 h-5 text-emerald-500" />
            <h3 className="font-serif font-bold text-lg">Android (Chrome, Edge &amp; Samsung)</h3>
          </div>

          <ol className="space-y-3 text-xs text-gray-700 dark:text-gray-300 font-serif list-decimal list-inside">
            <li className="leading-relaxed">
              Open <strong>Chrome</strong> or your preferred Android browser.
            </li>
            <li className="leading-relaxed">
              Tap the <strong>&ldquo;Install&rdquo;</strong> button in the navigation bar, or tap the three dots in the top right.
            </li>
            <li className="leading-relaxed">
              Select <strong>&ldquo;Install app&rdquo;</strong> or <strong>&ldquo;Add to Home screen&rdquo;</strong>.
            </li>
            <li className="leading-relaxed">
              Confirm installation. The app will install with complete offline caching capability.
            </li>
          </ol>
        </div>

        {/* Windows & macOS Desktop Guide */}
        <div className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-800 p-6 space-y-4 shadow-sm">
          <div className="flex items-center space-x-2 text-navy-900 dark:text-white">
            <Laptop className="w-5 h-5 text-blue-500" />
            <h3 className="font-serif font-bold text-lg">Windows &amp; macOS Desktop</h3>
          </div>

          <ol className="space-y-3 text-xs text-gray-700 dark:text-gray-300 font-serif list-decimal list-inside">
            <li className="leading-relaxed">
              <strong>Chrome / Edge</strong>: Look for the <strong>Install</strong> icon in the address bar (computer monitor with downward arrow) and click Install.
            </li>
            <li className="leading-relaxed">
              <strong>macOS Safari (Sonoma+)</strong>: In the top menu bar, click <strong>File</strong> $\to$ <strong>&ldquo;Add to Dock&rdquo;</strong>.
            </li>
            <li className="leading-relaxed">
              Logos Lexicon will launch in its own standalone window without browser URL bars or tabs.
            </li>
          </ol>
        </div>

        {/* Chromebook & Linux Guide */}
        <div className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-800 p-6 space-y-4 shadow-sm">
          <div className="flex items-center space-x-2 text-navy-900 dark:text-white">
            <Laptop className="w-5 h-5 text-purple-500" />
            <h3 className="font-serif font-bold text-lg">Chromebook &amp; Linux</h3>
          </div>

          <ol className="space-y-3 text-xs text-gray-700 dark:text-gray-300 font-serif list-decimal list-inside">
            <li className="leading-relaxed">
              Open Chrome on ChromeOS or any standards-compliant browser on Linux.
            </li>
            <li className="leading-relaxed">
              Click the browser menu (three dots) $\to$ <strong>&ldquo;Install Logos Lexicon&rdquo;</strong>.
            </li>
            <li className="leading-relaxed">
              The application will pin directly to your application shelf or system launcher.
            </li>
          </ol>
        </div>
      </div>

      {/* Offline Guarantee Notice */}
      <div className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 border border-navy-800 space-y-3">
        <div className="flex items-center space-x-2 text-gold-400">
          <ShieldCheck className="w-5 h-5" />
          <h4 className="font-serif font-bold text-base text-gold-200">
            High-Availability Offline Guarantee &amp; Safe Updates
          </h4>
        </div>
        <p className="text-xs text-gray-300 font-serif leading-relaxed">
          When installed as a PWA, Logos Lexicon caches the entire application shell and your downloaded
          language packs. You can travel to remote areas without cellular or Wi-Fi connectivity and continue your study.
          When an update is published, Logos Lexicon checks for updates in the background and prompts you to refresh safely
          without ever corrupting your bookmarks, notes, or preferences.
        </p>
      </div>
    </div>
  );
}
