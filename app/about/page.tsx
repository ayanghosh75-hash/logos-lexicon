'use client';

import React from 'react';
import Link from 'next/link';
import { SOURCE_REGISTER } from '@/lib/db/sourceRegister';
import { ShieldCheck, BookOpen, CheckCircle, Scale, Users, FileText } from 'lucide-react';

export default function AboutPage() {
  const sources = Object.values(SOURCE_REGISTER);

  const approvalLabels = [
    { label: 'AI-assisted draft', desc: 'Initial algorithmic translation/compilation. Never visible as approved content.' },
    { label: 'Human-translated draft', desc: 'Drafted or translated by a human language specialist, awaiting theological audit.' },
    { label: 'Language reviewed', desc: 'Syntax, orthography, readability, and font ligatures verified by language reviewer.' },
    { label: 'Theologically reviewed', desc: 'Doctrinal accuracy, biblical fidelity, and historical distinctions confirmed by theological editor.' },
    { label: 'Common Christian usage', desc: 'Widespread, recognized ecclesiastical terminology in the target language.' },
    { label: 'Institution approved', desc: 'Officially certified by documented endorsement from a named seminary or church body.' },
    { label: 'Alternative terminology', desc: 'Recognized legitimate regional or historical variation.' },
    { label: 'Disputed terminology', desc: 'Concepts where substantive historical or denominational debate persists.' },
    { label: 'Revision required', desc: 'Returned to the editorial queue for necessary doctrinal or linguistic corrections.' },
    { label: 'Archived', desc: 'Historical version retained for audit and lineage tracking.' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      {/* Page Header */}
      <div className="border-b border-gray-200 dark:border-navy-800 pb-6 space-y-2">
        <div className="flex items-center space-x-2 text-gold-600 dark:text-gold-400">
          <ShieldCheck className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider">
            Academic & Theological Accountability
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 dark:text-white">
          About Logos Lexicon
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-3xl leading-relaxed">
          Logos Lexicon is a global Christian scholarly project founded to illuminate biblical and theological
          truth across 15 major world languages, rooted in the original inspired scriptures.
        </p>
      </div>

      {/* Leadership & Editorial Governance */}
      <section className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-800 p-6 sm:p-8 space-y-4 shadow-sm">
        <h2 className="font-serif text-2xl font-bold text-navy-900 dark:text-white flex items-center space-x-2">
          <Users className="w-5 h-5 text-gold-500" />
          <span>Project Governance & Editorial Board</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-serif">
          Logos Lexicon is directed under the theological leadership of <strong>Ayan Kumar Ghosh</strong>.
          Every theological article is governed by the <strong>Master-Content Principle</strong>: each concept has one
          authoritative English master record, to which verified multilingual translations are linked.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
          <div className="p-3 bg-gray-50 dark:bg-navy-950 rounded-xl border border-gray-200 dark:border-navy-800">
            <strong className="text-navy-900 dark:text-gold-300 block">Project Director & Chief Editor:</strong>
            <span className="text-gray-600 dark:text-gray-400">Ayan Kumar Ghosh</span>
          </div>
          <div className="p-3 bg-gray-50 dark:bg-navy-950 rounded-xl border border-gray-200 dark:border-navy-800">
            <strong className="text-navy-900 dark:text-gold-300 block">Research & Operations Assistant:</strong>
            <span className="text-gray-600 dark:text-gray-400">Lexi (Controlled Level-4 Operations Agent)</span>
          </div>
        </div>
      </section>

      {/* The Master-Content Principle & Doctrinal Integrity */}
      <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 border border-navy-800 space-y-4 shadow-xl">
        <h2 className="font-serif text-2xl font-bold text-gold-200 flex items-center space-x-2">
          <Scale className="w-5 h-5 text-gold-400" />
          <span>Theological Integrity & Disputed Matters</span>
        </h2>
        <div className="text-xs sm:text-sm text-gray-300 leading-relaxed font-serif space-y-3">
          <p>
            When treating disputed theological subjects (e.g., the nature of justification, covenant continuity,
            the order of divine decrees, or eschatological systems), Logos Lexicon adheres to strict principles:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-200">
            <li>We clearly identify the specific doctrinal tension.</li>
            <li>We present relevant biblical texts without partisan censorship.</li>
            <li>We explain the historical patristic and confessional backgrounds.</li>
            <li>We objectively articulate recognized denominational viewpoints (Reformed, Lutheran, Arminian, Catholic, Orthodox).</li>
            <li>We cite primary historical confessions rather than contentious caricatures.</li>
          </ul>
        </div>
      </section>

      {/* Controlled Approval Labels */}
      <section id="editorial" className="space-y-4">
        <div className="space-y-1">
          <h2 className="font-serif text-2xl font-bold text-navy-900 dark:text-white flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-emerald-500" />
            <span>Controlled Editorial Approval Labels</span>
          </h2>
          <p className="text-xs text-gray-500">
            Every published entry transparently exhibits its exact review status.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {approvalLabels.map(({ label, desc }) => (
            <div
              key={label}
              className="bg-white dark:bg-navy-900 p-3.5 rounded-xl border border-gray-200 dark:border-navy-800 space-y-1"
            >
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 font-mono">
                {label}
              </span>
              <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-normal">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Source & Licence Register */}
      <section id="sources" className="space-y-4 pt-4 border-t border-gray-200 dark:border-navy-800">
        <div className="space-y-1">
          <h2 className="font-serif text-2xl font-bold text-navy-900 dark:text-white flex items-center space-x-2">
            <FileText className="w-5 h-5 text-gold-500" />
            <span>Searchable Source & Licence Register</span>
          </h2>
          <p className="text-xs text-gray-500">
            We do not scrape, pirate, or republish copyrighted modern lexicons. All citations are legally classified.
          </p>
        </div>

        <div className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-800 overflow-hidden shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-navy-950 text-gray-500 uppercase tracking-wider text-[10px] border-b border-gray-200 dark:border-navy-800">
                <th className="p-3 font-semibold">Short Title</th>
                <th className="p-3 font-semibold">Full Scholarly Citation</th>
                <th className="p-3 font-semibold">Classification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-navy-800">
              {sources.map((src) => (
                <tr key={src.sourceId} className="hover:bg-gray-50 dark:hover:bg-navy-850/50">
                  <td className="p-3 font-bold text-navy-900 dark:text-white whitespace-nowrap">
                    {src.shortTitle}
                  </td>
                  <td className="p-3 text-gray-600 dark:text-gray-300 font-serif">
                    {src.fullCitation}
                  </td>
                  <td className="p-3 whitespace-nowrap">
                    <span className="text-[10px] font-semibold text-gold-700 dark:text-gold-400 bg-gold-100 dark:bg-navy-800 px-2 py-0.5 rounded-full">
                      {src.classification}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
