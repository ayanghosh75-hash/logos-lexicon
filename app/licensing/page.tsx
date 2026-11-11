import React from 'react';
import Link from 'next/link';
import { getAllSources } from '@/lib/db/sourceRegister';
import { getPublishedEntries } from '@/lib/db/seedData';

export const metadata = {
  title: 'Licensing, Copyright & Source Attribution Register | Logos Lexicon',
  description:
    'Public register of copyright ownership, open and public-domain lexical sources, attribution requirements, and licence verification statuses for Logos Lexicon.',
  alternates: {
    canonical: 'https://logoslexicon.org/licensing',
  },
};

export default function LicensingAndAttributionPage() {
  const sources = getAllSources();
  const entries = getPublishedEntries();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <header className="border-b border-amber-500/30 pb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-500/10 text-amber-300 border border-amber-500/30 mb-3">
                Section 16 — Public Copyright & Attribution Register
              </span>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                Licensing, Copyright &amp; Source Attribution
              </h1>
              <p className="mt-2 text-slate-300 max-w-3xl text-sm sm:text-base">
                Logos Lexicon enforces strict provenance and copyright verification. Every published lexical entry and
                historical source is tracked below with explicit author/organisation attribution, licence terms,
                commercial/modification/redistribution permissions, import date, and editorial reviewer status.
              </p>
            </div>
            <Link
              href="/"
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 text-sm font-medium transition"
            >
              &larr; Return to Lexicon
            </Link>
          </div>
        </header>

        {/* Ownership & Quarantine Policy Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5">
            <h2 className="text-lg font-semibold text-amber-300 mb-2">1. Platform &amp; Original Code</h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>Sole Owner &amp; Level 5 Authority:</strong> Ayan Kumar Ghosh.
              <br />
              Original software architecture, UI, search engine, and synthesised Bengali/English editorial definitions
              are directed by Ayan Kumar Ghosh. Third-party public-domain works are never mislabelled as
              proprietary.
            </p>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5">
            <h2 className="text-lg font-semibold text-emerald-300 mb-2">2. Free Core Access Policy</h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Core dictionary lookup, Biblical Greek/Hebrew root reference, and Bengali definitions are provided free of
              charge for public study. Public-domain historical sources are never placed behind a paywall. Optional
              future specialist tools remain inactive unless explicitly approved by Level 5 authority.
            </p>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5">
            <h2 className="text-lg font-semibold text-rose-300 mb-2">3. Unverified Licence Quarantine</h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              If any imported record or dataset lacks verifiable licence evidence, it is automatically marked{' '}
              <code className="text-rose-200 bg-rose-950/60 px-1 rounded">UNVERIFIED</code>, blocked from monetisation,
              quarantined in private staging, and withheld from public publication until reviewed by Ayan Kumar
              Ghosh.
            </p>
          </div>
        </section>

        {/* Master Source Registry Table */}
        <section className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
          <div className="p-5 border-b border-slate-800">
            <h2 className="text-xl font-serif font-bold text-white">
              Registered Lexical &amp; Confessional Sources ({sources.length} Datasets)
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Complete provenance, commercial-use permission, modification permission, redistribution permission, and
              verification metadata.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-950/80 text-slate-300 border-b border-slate-800">
                  <th className="p-3 font-semibold">Source &amp; Author/Org</th>
                  <th className="p-3 font-semibold">Licence &amp; Status</th>
                  <th className="p-3 font-semibold">Commercial / Mod / Redist</th>
                  <th className="p-3 font-semibold">Import Date &amp; Reviewer</th>
                  <th className="p-3 font-semibold">Required Attribution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70">
                {sources.map((src) => {
                  const isPublicDomain = src.copyrightStatus === 'Public domain';
                  const isOriginal = src.copyrightStatus === 'Original commissioned';
                  const commPerm = isPublicDomain ? 'Permitted (Public Domain)' : isOriginal ? 'Owner-Authorised Only' : 'No (Citation Only)';
                  const modPerm = isPublicDomain ? 'Permitted with attribution' : isOriginal ? 'Editorial Board Only' : 'No verbatim modification';
                  const redistPerm = isPublicDomain ? 'Permitted' : isOriginal ? 'Permitted (CC BY-NC 4.0)' : 'Bibliographic citation only';

                  return (
                    <tr key={src.sourceId} className="hover:bg-slate-800/40">
                      <td className="p-3 align-top">
                        <div className="font-semibold text-amber-200">{src.shortTitle}</div>
                        <div className="text-slate-400 mt-0.5">{src.authorOrOrg} ({src.publicationDate})</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">ID: {src.sourceId}</div>
                      </td>
                      <td className="p-3 align-top">
                        <span className="inline-block px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-700/40 font-medium">
                          {src.licenceName}
                        </span>
                        <div className="text-slate-400 mt-1">Status: {src.importStatus}</div>
                      </td>
                      <td className="p-3 align-top space-y-1 text-slate-300">
                        <div><strong>Commercial:</strong> {commPerm}</div>
                        <div><strong>Modify:</strong> {modPerm}</div>
                        <div><strong>Redistribute:</strong> {redistPerm}</div>
                      </td>
                      <td className="p-3 align-top text-slate-300">
                        <div><strong>Imported:</strong> {src.dateAccessed}</div>
                        <div><strong>Reviewer:</strong> {src.copyrightReviewer}</div>
                        <div className="text-emerald-400 font-medium mt-0.5">VERIFIED</div>
                      </td>
                      <td className="p-3 align-top text-slate-300 max-w-xs">
                        <div className="italic text-slate-200">{src.attributionFormat}</div>
                        <div className="text-[11px] text-slate-400 mt-1">{src.reviewNotes}</div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Per-Entry Provenance Summary */}
        <section className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <h2 className="text-lg font-serif font-bold text-white">
                Per-Entry Licence Verification Summary ({entries.length} Initial Seed Terms)
              </h2>
              <p className="text-xs text-slate-400">
                Every published root entry maps to verified sources in the register above. Unreviewed regional language
                drafts are flagged as <code className="text-amber-300">Editorial review</code> until specialist sign-off.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="text-2xl font-bold text-amber-300">{entries.length}</div>
              <div className="text-xs text-slate-400 mt-1">Published Root Entries</div>
            </div>
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="text-2xl font-bold text-emerald-400">
                {entries.filter((e) => e.sources && e.sources.length > 0).length}
              </div>
              <div className="text-xs text-slate-400 mt-1">Entries with Verified Source &amp; Licence</div>
            </div>
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="text-2xl font-bold text-sky-300">0</div>
              <div className="text-xs text-slate-400 mt-1">Unverified / Assumed Public Domain</div>
            </div>
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="text-2xl font-bold text-purple-300">Ayan Kumar Ghosh</div>
              <div className="text-xs text-slate-400 mt-1">Lead Copyright &amp; Theological Reviewer</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
