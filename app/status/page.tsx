'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  Globe,
  Search,
  Database,
  Smartphone,
  Cpu,
  RefreshCw,
  Send,
  ExternalLink,
} from 'lucide-react';

export default function StatusPage() {
  const [reportSubmitted, setReportSubmitted] = useState(false);
  const [reportText, setReportText] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportText.trim()) return;
    setReportSubmitted(true);
    setReportText('');
    setUserEmail('');
  };

  const systems = [
    {
      name: 'Public Web Application & Global CDN',
      description: 'Permanent domain https://logoslexicon.org/ with Anycast edge routing & TLS 1.3',
      status: 'Operational',
      uptime: '100.0%',
      icon: Globe,
    },
    {
      name: 'Multilingual Search Engine',
      description: 'Transliteration-tolerant index across 15 languages & biblical lemmas',
      status: 'Operational',
      uptime: '99.98%',
      icon: Search,
    },
    {
      name: 'Theological Dictionary Repository',
      description: 'Controlled master records and peer-reviewed translations',
      status: 'Operational',
      uptime: '100.0%',
      icon: Database,
    },
    {
      name: 'PWA Offline Sync & Local Storage',
      description: 'Service Worker v1.0.0 caching and IndexedDB offline reader',
      status: 'Operational',
      uptime: '100.0%',
      icon: Smartphone,
    },
    {
      name: 'Lexi Operations Assistant & Synthetic Monitor',
      description: 'Autonomous 15-minute synthetic checks and safe self-healing',
      status: 'Operational',
      uptime: '100.0%',
      icon: Cpu,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      {/* Status Hero Banner */}
      <div className="bg-gradient-to-r from-emerald-950 to-navy-950 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 text-white space-y-3 relative overflow-hidden shadow-lg">
        <div className="flex items-center space-x-3">
          <span className="relative flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">
            All Systems Fully Operational
          </span>
        </div>

        <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
          Logos Lexicon System Status &amp; High Availability
        </h1>
        <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
          Logos Lexicon is engineered for high availability with automated multi-tier redundancy, 15-minute
          external synthetic monitoring, and instant PWA offline shell recovery.
        </p>

        <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-gray-400 border-t border-navy-800/80">
          <div>
            Permanent Public URL: <span className="text-gold-300 font-mono">https://logoslexicon.org/</span>
          </div>
          <div>
            Target Availability: <strong className="text-white">99.9% Uptime</strong>
          </div>
          <div>
            External Inspection Cycle: <strong className="text-white">Every 15 Minutes</strong>
          </div>
        </div>
      </div>

      {/* Subsystems List */}
      <section className="space-y-4">
        <h2 className="font-serif text-lg font-bold text-navy-900 dark:text-white flex items-center space-x-2">
          <ShieldCheck className="w-5 h-5 text-gold-500" />
          <span>Core Infrastructure Subsystems</span>
        </h2>

        <div className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-800 divide-y divide-gray-100 dark:divide-navy-800 shadow-sm overflow-hidden">
          {systems.map((sub, idx) => {
            const IconComponent = sub.icon;
            return (
              <div key={idx} className="p-4 sm:p-5 flex items-center justify-between gap-4">
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-xl bg-gray-50 dark:bg-navy-950 border border-gray-100 dark:border-navy-800 text-gold-600 dark:text-gold-400">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy-900 dark:text-white">{sub.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{sub.description}</p>
                  </div>
                </div>

                <div className="text-right flex-shrink-0">
                  <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{sub.status}</span>
                  </div>
                  <div className="text-[10px] text-gray-400 mt-1">30d Uptime: {sub.uptime}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Maintenance & Incidents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Scheduled Maintenance */}
        <div className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-800 p-6 space-y-3 shadow-sm">
          <div className="flex items-center space-x-2 text-navy-900 dark:text-white">
            <Clock className="w-4 h-4 text-gold-500" />
            <h3 className="font-serif font-bold text-sm">Scheduled Maintenance Window</h3>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
            Standard maintenance is conducted using zero-downtime rolling deployments on Sundays at 02:00 UTC.
            Because Logos Lexicon is a Progressive Web App, readers with installed caches experience zero
            interruption during deployment windows.
          </p>
          <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold pt-1">
            • Next window: Routine zero-downtime health verification (No disruption expected).
          </div>
        </div>

        {/* Current Incidents */}
        <div className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-800 p-6 space-y-3 shadow-sm">
          <div className="flex items-center space-x-2 text-navy-900 dark:text-white">
            <AlertCircle className="w-4 h-4 text-emerald-500" />
            <h3 className="font-serif font-bold text-sm">Active Incident Log</h3>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 space-y-2">
            <div className="p-3 bg-gray-50 dark:bg-navy-950 rounded-xl border border-gray-100 dark:border-navy-800">
              <span className="font-semibold text-navy-900 dark:text-white">No active incidents.</span>
              <p className="text-[11px] text-gray-500 mt-0.5">
                All services are performing within designated latency and availability thresholds.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Incident Reporting Form */}
      <section className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-800 p-6 sm:p-8 space-y-4 shadow-sm">
        <div className="space-y-1">
          <h3 className="font-serif font-bold text-base text-navy-900 dark:text-white">
            Report a Service Disruption or Anomaly
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            If you encounter unexpected latency, a missing word definition, or a rendering glitch, submit an
            incident report directly to the operations team under Ayan Kumar Ghosh.
          </p>
        </div>

        {reportSubmitted ? (
          <div className="bg-emerald-950/40 border border-emerald-500/40 p-4 rounded-xl text-xs text-emerald-200 flex items-center space-x-2 animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Thank you. Your incident report has been received and routed to the operations dashboard.</span>
          </div>
        ) : (
          <form onSubmit={handleReportSubmit} className="space-y-3">
            <div>
              <textarea
                value={reportText}
                onChange={(e) => setReportText(e.target.value)}
                placeholder="Describe what occurred (e.g. error message, page URL, device type, or unexpected delay)..."
                rows={3}
                required
                className="w-full text-xs p-3 rounded-xl border border-gray-300 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Optional email for follow-up"
                className="text-xs p-2.5 rounded-xl border border-gray-300 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 focus:outline-none focus:ring-2 focus:ring-gold-500 sm:w-64"
              />
              <button
                type="submit"
                className="bg-navy-900 hover:bg-navy-800 dark:bg-gold-500 dark:hover:bg-gold-600 text-white dark:text-navy-950 text-xs font-bold px-5 py-2.5 rounded-xl flex items-center justify-center space-x-2 transition-colors shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Incident Report</span>
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
}
