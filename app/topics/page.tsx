'use client';

import React from 'react';
import Link from 'next/link';
import { getPublishedEntries } from '@/lib/db/seedData';
import { BookOpen, Layers, ArrowRight, ShieldCheck } from 'lucide-react';

export default function TopicsPage() {
  const entries = getPublishedEntries();

  const theologicalDisciplines = [
    {
      title: 'Systematic Theology',
      description: 'The orderly, coherent study of doctrines (Theology Proper, Christology, Pneumatology, Soteriology, Ecclesiology, Eschatology).',
      slug: 'Systematic Theology',
      entries: entries.filter((e) =>
        e.category === 'Systematic Theology' ||
        e.category === 'Theology Proper' ||
        e.category === 'Soteriology' ||
        (e.theologicalPaths || []).includes('systematic-theology')
      ),
    },
    {
      title: 'Biblical Theology',
      description: 'Tracking redemptive history organically as it unfolds through covenants, epochs, and biblical authors.',
      slug: 'Biblical Theology',
      entries: entries.filter((e) =>
        e.category === 'Biblical Theology' ||
        (e.theologicalPaths || []).includes('biblical-theology') ||
        (e.theologicalPaths || []).includes('covenant-theology')
      ),
    },
    {
      title: 'Christology',
      description: 'The study of the person, nature, hypostatic union, offices, and pre-incarnate and incarnate work of Jesus Christ.',
      slug: 'Christology',
      entries: entries.filter((e) =>
        e.category === 'Christology' ||
        (e.theologicalPaths || []).includes('christology')
      ),
    },
    {
      title: 'Historical & Confessional Theology',
      description: 'Ecumenical creeds, patristic controversies, the Reformation confessions, and historical development of doctrine.',
      slug: 'Historical Theology',
      entries: entries.filter((e) =>
        (e.theologicalPaths || []).includes('historical-theology') ||
        (e.theologicalPaths || []).includes('creeds-and-confessions') ||
        e.sourceIds?.some(id => ['schaff', 'nicene_creed', 'westminster', 'augsburg', 'heidelberg', 'thirty_nine_articles'].includes(id))
      ),
    },
    {
      title: 'Practical, Pastoral & Moral Theology',
      description: 'The application of biblical truth to Christian worship, personal prayer, ethics, spiritual formation, and pastoral care.',
      slug: 'Practical Theology',
      entries: entries.filter((e) =>
        e.category.includes('Practical') ||
        e.category.includes('Ethics') ||
        (e.theologicalPaths || []).some(p => ['worship-liturgy', 'prayer-spiritual-formation', 'pastoral-theology', 'moral-theology-ethics', 'practical-theology'].includes(p))
      ),
    },
    {
      title: 'Bibliology & Biblical Hermeneutics',
      description: 'Divine revelation, verbal inspiration, canonical manuscripts, and sound grammatical-historical interpretation.',
      slug: 'Bibliology',
      entries: entries.filter((e) =>
        e.category === 'Bibliology' ||
        (e.theologicalPaths || []).some(p => ['bibliology', 'hermeneutics', 'canon-and-manuscripts', 'biblical-greek', 'biblical-hebrew-aramaic'].includes(p))
      ),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      <div className="border-b border-gray-200 dark:border-navy-800 pb-6 space-y-2">
        <div className="flex items-center space-x-2 text-gold-600 dark:text-gold-400">
          <BookOpen className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider">Theological Taxonomy</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 dark:text-white">
          Browse by Subject & Discipline
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-2xl">
          Explore biblical concepts organized systematically across traditional theological disciplines and redemptive categories.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {theologicalDisciplines.map((discipline, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-800 p-6 space-y-4 shadow-sm hover:border-gold-400/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold-500">
                Discipline 0{idx + 1}
              </span>
              <h3 className="font-serif text-xl font-bold text-navy-900 dark:text-white">
                {discipline.title}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-serif">
                {discipline.description}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-navy-850">
              {discipline.entries.length > 0 ? (
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block">
                    Available Verified Entries:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {discipline.entries.map((entry) => (
                      <Link
                        key={entry.slug}
                        href={`/entry/${entry.slug}`}
                        className="bg-ivory-200 dark:bg-navy-800 hover:bg-gold-500 hover:text-navy-950 text-navy-900 dark:text-gray-200 text-xs font-semibold px-2.5 py-1 rounded-md transition-colors"
                      >
                        {entry.headwordEnglish}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <span className="text-[11px] text-gray-400 italic">
                  Additional peer-reviewed entries in editorial queue.
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
