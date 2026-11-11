'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  PenTool,
  BookOpen,
  Sparkles,
  Download,
  Copy,
  Printer,
  Trash2,
  CheckCircle2,
  Save,
  Clock,
  Layers,
  ArrowRight,
} from 'lucide-react';

function SermonBuilderInner() {
  const searchParams = useSearchParams();
  const initBook = searchParams.get('book') || 'John';
  const initChapter = searchParams.get('chapter') || '1';

  const [title, setTitle] = useState('The Word Became Flesh: Grace and Truth Incarnate');
  const [passage, setPassage] = useState(`${initBook} ${initChapter}:1-14`);
  const [theme, setTheme] = useState('Christ the Eternal Logos bringing unmerited grace to broken humanity.');
  const [introduction, setIntroduction] = useState(
    'In a world searching for ultimate meaning and authentic light, the Gospel presents not an abstract philosophy, but a living Person: Jesus Christ, the eternal Word of God.'
  );
  const [exegesis, setExegesis] = useState(
    'Greek Lemma: λόγος (Logos, G3056) — signifying both divine reason and personal speech. In verse 14: χάρις (Charis, G5485) and ἀλήθεια (Aletheia, G225) parallel the covenant Hebrew formula חֶסֶד וֶאֱמֶת (Hesed ve-Emet) of Exodus 34:6.'
  );
  const [point1, setPoint1] = useState(
    '1. The Pre-Existent Majesty: Christ was in the beginning with God and is God (v. 1-2).'
  );
  const [point2, setPoint2] = useState(
    '2. The Radiant Life and Light: Darkness cannot extinguish the life-giving light of Christ (v. 4-5).'
  );
  const [point3, setPoint3] = useState(
    '3. The Scandal of Incarnation: The Creator pitched His tent among us, full of grace and truth (v. 14).'
  );
  const [application, setApplication] = useState(
    'Live in the reality of adopted sonship (v. 12). Stop trying to earn God\'s love through legalistic effort, and receive the fullness of His transforming grace day by day.'
  );
  const [benediction, setBenediction] = useState(
    'May the grace of our Lord Jesus Christ, the eternal Logos, anchor your soul and shine through your life in every dark corner of this world. Amen.'
  );

  const [copied, setCopied] = useState(false);
  const [savedNotice, setSavedNotice] = useState(false);

  // Load from localStorage if present
  useEffect(() => {
    try {
      const saved = localStorage.getItem('logos_sermon_draft');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.title) setTitle(parsed.title);
        if (parsed.passage && !searchParams.get('book')) setPassage(parsed.passage);
        if (parsed.theme) setTheme(parsed.theme);
        if (parsed.introduction) setIntroduction(parsed.introduction);
        if (parsed.exegesis) setExegesis(parsed.exegesis);
        if (parsed.point1) setPoint1(parsed.point1);
        if (parsed.point2) setPoint2(parsed.point2);
        if (parsed.point3) setPoint3(parsed.point3);
        if (parsed.application) setApplication(parsed.application);
        if (parsed.benediction) setBenediction(parsed.benediction);
      }
    } catch (e) {}
  }, [searchParams]);

  const handleSave = () => {
    try {
      const draft = {
        title,
        passage,
        theme,
        introduction,
        exegesis,
        point1,
        point2,
        point3,
        application,
        benediction,
        updatedAt: new Date().toISOString(),
      };
      localStorage.setItem('logos_sermon_draft', JSON.stringify(draft));
      setSavedNotice(true);
      setTimeout(() => setSavedNotice(false), 2500);
    } catch (e) {}
  };

  // Word count & time calculation
  const fullText = `${title} ${passage} ${theme} ${introduction} ${exegesis} ${point1} ${point2} ${point3} ${application} ${benediction}`;
  const wordCount = fullText.trim().split(/\s+/).filter(Boolean).length;
  const estimatedMinutes = Math.max(1, Math.round(wordCount / 130));

  const handleCopyMarkdown = () => {
    const md = `# ${title}
**Scripture Passage:** ${passage}  
**Central Theme:** ${theme}  
**Estimated Preaching Time:** ~${estimatedMinutes} mins (${wordCount} words)  
*Prepared with Logos Lexicon Sermon Studio*

---

### I. Introduction
${introduction}

---

### II. Original Language Exegesis & Word Studies
${exegesis}

---

### III. Homiletical Exposition
* ${point1}
* ${point2}
* ${point3}

---

### IV. Life Transformation & Application
${application}

---

### V. Pastoral Benediction
${benediction}
`;

    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleInsertLexiconNote = (term: string, strongs: string, meaning: string) => {
    setExegesis((prev) => `${prev}\n• Word Study: ${term} (${strongs}) — ${meaning}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-950 py-8 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white dark:bg-navy-900 p-6 rounded-2xl border border-gray-200 dark:border-navy-800 shadow-sm">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/20 text-gold-700 dark:text-gold-300 border border-gold-400/30 text-xs font-bold uppercase tracking-wider">
              <PenTool className="w-3.5 h-3.5" />
              <span>Homiletics & Ministry Preparation</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 font-serif mt-2">
              Logos Sermon Studio & Exegetical Workspace
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
              Craft original-language grounded sermons with Greek/Hebrew exegesis and homiletical clarity.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gray-100 dark:bg-navy-800 hover:bg-gray-200 dark:hover:bg-navy-700 text-gray-800 dark:text-gray-200 text-xs font-semibold border border-gray-200 dark:border-navy-700 transition-colors"
            >
              <Save className="w-4 h-4 text-gold-500" />
              <span>{savedNotice ? 'Saved!' : 'Save Draft'}</span>
            </button>
            <button
              onClick={handleCopyMarkdown}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-xs shadow-sm transition-all"
            >
              {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied MD!' : 'Copy Markdown'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-navy-900 dark:bg-navy-800 hover:bg-navy-800 text-white font-semibold text-xs border border-navy-700 transition-colors"
            >
              <Printer className="w-4 h-4 text-gold-400" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
          </div>
        </div>

        {/* Real-time stats bar */}
        <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-gold-50 dark:bg-navy-900/60 border border-gold-200 dark:border-navy-800 text-xs text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-gold-500" />
              Estimated Preaching Time: <strong>~{estimatedMinutes} mins</strong>
            </span>
            <span>•</span>
            <span>Total Words: <strong>{wordCount}</strong></span>
          </div>
          <Link href="/scripture" className="text-gold-600 dark:text-gold-400 hover:underline flex items-center gap-1 font-semibold">
            <span>Browse 66 Books</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Editor Form */}
        <div className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-800 p-6 sm:p-8 shadow-sm space-y-6">
          {/* Title & Passage */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Sermon Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-gray-900 dark:text-gray-100 font-bold text-base focus:ring-2 focus:ring-gold-500"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Biblical Passage
              </label>
              <input
                type="text"
                value={passage}
                onChange={(e) => setPassage(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-gray-900 dark:text-gray-100 font-semibold text-sm focus:ring-2 focus:ring-gold-500"
              />
            </div>
          </div>

          {/* Central Theme / Big Idea */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Central Idea of the Text (CIT) / Proposition
            </label>
            <input
              type="text"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-gray-800 dark:text-gray-200 text-sm focus:ring-2 focus:ring-gold-500"
            />
          </div>

          {/* Section I: Introduction */}
          <div className="space-y-1.5 pt-2 border-t border-gray-100 dark:border-navy-800">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-gold-400">
                I. Introduction & Cultural Connection
              </label>
              <span className="text-[11px] text-gray-400">Capture interest & frame the human need</span>
            </div>
            <textarea
              rows={3}
              value={introduction}
              onChange={(e) => setIntroduction(e.target.value)}
              className="w-full p-3.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-gray-900 dark:text-gray-100 text-sm focus:ring-2 focus:ring-gold-500"
            />
          </div>

          {/* Section II: Original Language Exegesis */}
          <div className="space-y-2 pt-2 border-t border-gray-100 dark:border-navy-800">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-gold-400">
                II. Original Language Exegesis & Theological Word Studies
              </label>
              {/* Quick Word Insert Pills */}
              <div className="flex items-center gap-1.5 text-[10px]">
                <span className="text-gray-400 font-semibold">Quick Insert:</span>
                <button
                  type="button"
                  onClick={() => handleInsertLexiconNote('χάρις (Charis)', 'G5485', 'Unmerited divine favor and empowering grace.')}
                  className="px-2 py-0.5 rounded bg-gold-400/20 text-gold-700 dark:text-gold-300 font-bold hover:bg-gold-400/30"
                >
                  + χάρις (Grace)
                </button>
                <button
                  type="button"
                  onClick={() => handleInsertLexiconNote('חֶסֶד (Hesed)', 'H2617', 'Unfailing covenant loyal love of Yahweh.')}
                  className="px-2 py-0.5 rounded bg-gold-400/20 text-gold-700 dark:text-gold-300 font-bold hover:bg-gold-400/30"
                >
                  + חֶסֶד (Hesed)
                </button>
                <button
                  type="button"
                  onClick={() => handleInsertLexiconNote('λόγος (Logos)', 'G3056', 'The eternal Word, divine Reason and Revelation.')}
                  className="px-2 py-0.5 rounded bg-gold-400/20 text-gold-700 dark:text-gold-300 font-bold hover:bg-gold-400/30"
                >
                  + λόγος (Logos)
                </button>
              </div>
            </div>
            <textarea
              rows={4}
              value={exegesis}
              onChange={(e) => setExegesis(e.target.value)}
              className="w-full p-3.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-gray-900 dark:text-gray-100 font-mono text-xs sm:text-sm focus:ring-2 focus:ring-gold-500 leading-relaxed"
            />
          </div>

          {/* Section III: Homiletical Points */}
          <div className="space-y-3 pt-2 border-t border-gray-100 dark:border-navy-800">
            <label className="text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-gold-400">
              III. Expositional Points & Scripture Arguments
            </label>
            <div className="space-y-2">
              <input
                type="text"
                value={point1}
                onChange={(e) => setPoint1(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-gray-900 dark:text-gray-100 text-sm focus:ring-2 focus:ring-gold-500"
              />
              <input
                type="text"
                value={point2}
                onChange={(e) => setPoint2(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-gray-900 dark:text-gray-100 text-sm focus:ring-2 focus:ring-gold-500"
              />
              <input
                type="text"
                value={point3}
                onChange={(e) => setPoint3(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-gray-900 dark:text-gray-100 text-sm focus:ring-2 focus:ring-gold-500"
              />
            </div>
          </div>

          {/* Section IV: Practical Life Application */}
          <div className="space-y-1.5 pt-2 border-t border-gray-100 dark:border-navy-800">
            <label className="text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-gold-400">
              IV. Life Application & Call to Discipleship
            </label>
            <textarea
              rows={3}
              value={application}
              onChange={(e) => setApplication(e.target.value)}
              className="w-full p-3.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-gray-900 dark:text-gray-100 text-sm focus:ring-2 focus:ring-gold-500"
            />
          </div>

          {/* Section V: Benediction */}
          <div className="space-y-1.5 pt-2 border-t border-gray-100 dark:border-navy-800">
            <label className="text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-gold-400">
              V. Pastoral Benediction & Closing Prayer
            </label>
            <textarea
              rows={2}
              value={benediction}
              onChange={(e) => setBenediction(e.target.value)}
              className="w-full p-3.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-gray-900 dark:text-gray-100 text-sm focus:ring-2 focus:ring-gold-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SermonBuilderPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-sm text-gray-500">Loading Sermon Studio...</div>}>
      <SermonBuilderInner />
    </Suspense>
  );
}
