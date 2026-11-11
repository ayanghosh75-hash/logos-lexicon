import React from 'react';
import Link from 'next/link';
import { Logo } from '../brand/Logo';
import { ShieldCheck, Globe, Heart, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-gray-300 border-t border-navy-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Purpose */}
          <div className="md:col-span-2 space-y-4">
            <Logo variant="horizontal" theme="dark" size={36} />
            <p className="text-xs text-gray-400 max-w-md leading-relaxed mt-2">
              Logos Lexicon is an academically rigorous, theologically responsible, multilingual
              Christian biblical dictionary. Designed to illuminate biblical truth across 15 languages
              with verified Greek, Hebrew, and Aramaic resources.
            </p>
            <div className="flex items-center space-x-2 text-xs text-gold-400/90 pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Dedicated Operations Assistant: <strong>Lexi</strong></span>
            </div>
            <div className="text-[11px] text-gray-500">
              Project Director & Theological Lead: <strong>Rev. Ayan Kumar Ghosh</strong>
            </div>
            <div className="pt-1">
              <a
                href="https://www.buymeacoffee.com/AyanKumarGhosh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold shadow-sm transition-all hover:scale-105"
              >
                <span>☕ Support Ministry (Buy Me a Coffee)</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="font-serif font-semibold text-sm text-gold-300 tracking-wide uppercase">
              Scripture & Study
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link href="/scripture" className="hover:text-gold-400 text-gold-300 font-semibold transition-colors">
                  Holy Scripture (66 Books)
                </Link>
              </li>
              <li>
                <Link href="/sermon-builder" className="hover:text-gold-400 text-gold-300 font-semibold transition-colors">
                  Sermon Studio & Exegesis
                </Link>
              </li>
              <li>
                <Link href="/daily-word" className="hover:text-gold-400 text-gold-300 font-semibold transition-colors">
                  Daily Word & Devotional
                </Link>
              </li>
              <li>
                <Link href="/dictionary" className="hover:text-gold-400 transition-colors">
                  A–Z Dictionary
                </Link>
              </li>
              <li>
                <Link href="/topics" className="hover:text-gold-400 transition-colors">
                  Browse by Subject
                </Link>
              </li>
              <li>
                <Link href="/original-languages" className="hover:text-gold-400 transition-colors">
                  Greek & Hebrew Studies
                </Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-gold-400 transition-colors">
                  Compare Languages
                </Link>
              </li>
              <li>
                <Link href="/learn" className="hover:text-gold-400 transition-colors">
                  Daily 5-Minute Lessons
                </Link>
              </li>
              <li>
                <Link href="/install" className="hover:text-gold-400 transition-colors">
                  Install Offline App
                </Link>
              </li>
            </ul>
          </div>

          {/* Academic & Theological Accountability */}
          <div className="space-y-2">
            <h4 className="font-serif font-semibold text-sm text-gold-300 tracking-wide uppercase">
              Accountability
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link href="/about" className="hover:text-gold-400 transition-colors">
                  Statement of Faith
                </Link>
              </li>
              <li>
                <Link href="/about#sources" className="hover:text-gold-400 transition-colors">
                  Source & Licence Register
                </Link>
              </li>
              <li>
                <Link href="/about#editorial" className="hover:text-gold-400 transition-colors">
                  Editorial Review Standards
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gold-400 transition-colors">
                  Privacy Policy (Data Minimization)
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gold-400 transition-colors">
                  Terms of Service & Fair Use
                </Link>
              </li>
              <li>
                <Link href="/status" className="hover:text-gold-400 transition-colors flex items-center space-x-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>System Status & Availability</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-navy-850 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 space-y-2 sm:space-y-0">
          <div className="space-y-0.5 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Ayan Kumar Ghosh • Logos Lexicon. All rights reserved.</p>
            <p className="text-[11px] text-gray-400">
              Project Director &amp; Theological Lead: <strong>Rev. Ayan Kumar Ghosh</strong>
            </p>
            <p className="text-[11px] text-gray-500">
              Permanent Canonical Public Address:{' '}
              <span className="text-gold-400/90 font-mono">https://logoslexicon.org/</span>
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/status"
              className="inline-flex items-center space-x-1.5 text-[11px] bg-navy-900 hover:bg-navy-850 px-3 py-1 rounded-full text-emerald-400 border border-emerald-500/30 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Independent Monitoring: 100% Operational</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
