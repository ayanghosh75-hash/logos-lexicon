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
  Lock,
  Unlock,
  ShieldCheck,
  Search,
  Filter,
  Check,
  ExternalLink,
  MessageCircle,
  QrCode,
  CreditCard,
  X,
  FileText,
} from 'lucide-react';
import {
  SUNDAY_PULPIT_LIBRARY,
  PULPIT_PASS_PLANS,
  SermonPackage,
} from '@/lib/sermons/sundayPulpitLibrary';

function SermonBuilderInner() {
  const searchParams = useSearchParams();
  const initBook = searchParams.get('book') || 'John';
  const initChapter = searchParams.get('chapter') || '1';

  // Active Tab: 'library' | 'editor'
  const [activeTab, setActiveTab] = useState<'library' | 'editor'>('library');

  // Editor States
  const [title, setTitle] = useState('The Word Became Flesh: Grace and Truth Incarnate');
  const [passage, setPassage] = useState(`${initBook} ${initChapter}:1-14`);
  const [theme, setTheme] = useState('Christ the Eternal Logos bringing unmerited grace to broken humanity.');
  const [introduction, setIntroduction] = useState(
    'In a world searching for ultimate meaning and authentic light, the Gospel presents not an abstract philosophy, but a living Person: Jesus Christ, the eternal Word of God.'
  );
  const [exegesis, setExegesis] = useState(
    'Greek Lemma: λόγος (Logos, G3056) — signifying both divine reason and personal speech. In verse 14: χάρις (Charis, G5485) and ἀλήθεια (Aletheia, G225) parallel the covenant Hebrew formula חֶסֶד וֶאֱמֶত (Hesed ve-Emet) of Exodus 34:6.'
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

  // Library Filter & Search States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [showUnlockModal, setShowUnlockModal] = useState<boolean>(false);
  const [passcodeInput, setPasscodeInput] = useState('');
  const [passcodeError, setPasscodeError] = useState(false);
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  const [copied, setCopied] = useState(false);
  const [savedNotice, setSavedNotice] = useState(false);

  // Check persistent unlock state
  useEffect(() => {
    try {
      const unlocked = localStorage.getItem('logos_pulpit_unlocked');
      if (unlocked === 'true') {
        setIsUnlocked(true);
      }
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

  const handleClear = () => {
    if (confirm('Are you sure you want to reset this sermon template?')) {
      setTitle('');
      setPassage('');
      setTheme('');
      setIntroduction('');
      setExegesis('');
      setPoint1('');
      setPoint2('');
      setPoint3('');
      setApplication('');
      setBenediction('');
      localStorage.removeItem('logos_sermon_draft');
    }
  };

  const handleLoadSermon = (pkg: SermonPackage) => {
    if (!pkg.isFreePreview && !isUnlocked) {
      setShowUnlockModal(true);
      return;
    }

    setTitle(`${pkg.titleBn} (${pkg.titleEn})`);
    setPassage(pkg.passage);
    setTheme(pkg.themeBn);
    setIntroduction(pkg.introductionBn);
    setExegesis(
      `মৌলিক শব্দার্থ: ${pkg.exegesisLemma.word} (${pkg.exegesisLemma.transliteration}, ${pkg.exegesisLemma.strongs}) — ${pkg.exegesisLemma.meaningBn}`
    );
    setPoint1(pkg.pointsBn[0] || '');
    setPoint2(pkg.pointsBn[1] || '');
    setPoint3(pkg.pointsBn[2] || '');
    setApplication(pkg.applicationBn);
    setBenediction(pkg.benedictionBn);

    setActiveTab('editor');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopySlides = (pkg: SermonPackage) => {
    if (!pkg.isFreePreview && !isUnlocked) {
      setShowUnlockModal(true);
      return;
    }

    const slideText = `SLIDE 1 (TITLE):\n${pkg.titleBn}\n${pkg.passage}\n\nSLIDE 2 (MAIN POINTS):\n${pkg.pointsBn.join('\n')}\n\nSLIDE 3 (WORD STUDY):\n${pkg.exegesisLemma.word} (${pkg.exegesisLemma.transliteration}) — ${pkg.exegesisLemma.meaningBn}\n\nSLIDE 4 (CALL TO ACTION):\n${pkg.applicationBn}`;
    navigator.clipboard.writeText(slideText);
    setCopiedNotification(pkg.id);
    setTimeout(() => setCopiedNotification(null), 2500);
  };

  const handleUnlockWithPasscode = () => {
    const validCodes = ['PULPIT52', 'AYAN2026', 'SERMONPASS', 'PULPITPASS'];
    if (validCodes.includes(passcodeInput.trim().toUpperCase())) {
      setIsUnlocked(true);
      localStorage.setItem('logos_pulpit_unlocked', 'true');
      setShowUnlockModal(false);
      setPasscodeInput('');
      setPasscodeError(false);
      alert('অভিনন্দন! Sunday Pulpit Studio-র সমস্ত ৫০+ সার্মন প্যাকেজ ও স্লাইড সফলভাবে আনলক হয়েছে।');
    } else {
      setPasscodeError(true);
    }
  };

  const handleCopyUpi = () => {
    navigator.clipboard.writeText('ayanghosh75@okaxis');
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2500);
  };

  // Word count & time calculation
  const fullText = `${title} ${passage} ${theme} ${introduction} ${exegesis} ${point1} ${point2} ${point3} ${application} ${benediction}`;
  const wordCount = fullText.trim().split(/\s+/).filter(Boolean).length;
  const estimatedMinutes = Math.max(1, Math.round(wordCount / 130));

  const handleCopyMarkdown = () => {
    const markdown = `# ${title}\n**Passage:** ${passage}\n**Estimated Delivery:** ${estimatedMinutes} minutes\n\n## Central Idea of Text (CIT)\n${theme}\n\n## I. Introduction\n${introduction}\n\n## II. Original Language Exegesis\n${exegesis}\n\n## III. Exposition & Points\n- ${point1}\n- ${point2}\n- ${point3}\n\n## IV. Practical Application\n${application}\n\n## V. Pastoral Benediction\n${benediction}\n\n---\n*Created with Sunday Pulpit Studio • Logos Lexicon*`;
    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInsertLexiconNote = (term: string, strong: string, def: string) => {
    const note = ` [${term} (${strong}): ${def}] `;
    setExegesis((prev) => prev + note);
  };

  // Filtered Library Items
  const filteredSermons = SUNDAY_PULPIT_LIBRARY.filter((sermon) => {
    const matchesCategory = selectedCategory === 'ALL' || sermon.category === selectedCategory;
    const matchesSearch =
      sermon.titleBn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.passage.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.themeBn.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-sans">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white rounded-3xl p-6 sm:p-8 border border-gold-400/30 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center space-x-2 text-gold-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Sunday Pulpit Studio • রবিবাসরীয় সার্মন ভান্ডার</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-4xl font-bold text-white">
              Sermon Studio &amp; Exegetical Preaching Suite
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
              প্যাস্টর, প্রচারক ও বাইবেল শিক্ষকদের জন্য নিবেদিত রবিবাসরীয় প্রচার প্রস্তুতি প্ল্যাটফর্ম। 
              ৫০+ প্রস্তুত এক্সিজেটিক্যাল সার্মন প্যাকেজ, গ্রিক-হিব্রু রুট বিশ্লেষণ এবং চার্চ প্রজেক্টর স্লাইড।
            </p>
          </div>

          {/* Membership Badge / Unlock Button */}
          <div className="flex-shrink-0 flex items-center gap-3">
            {isUnlocked ? (
              <div className="px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 text-xs font-bold flex items-center space-x-1.5 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Pulpit Pass: Activated (Active VIP)</span>
              </div>
            ) : (
              <button
                onClick={() => setShowUnlockModal(true)}
                className="px-5 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-xs sm:text-sm flex items-center space-x-2 shadow-lg transition-transform hover:scale-105"
              >
                <Lock className="w-4 h-4" />
                <span>প্যাস্টরস বার্ষিক পাস আনলক করুন (Unlock Pass)</span>
              </button>
            )}
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center space-x-2 pt-3 border-t border-navy-800">
          <button
            onClick={() => setActiveTab('library')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition-all ${
              activeTab === 'library'
                ? 'bg-gold-500 text-navy-950 shadow-md'
                : 'bg-navy-900 text-gray-300 hover:bg-navy-800 hover:text-white border border-navy-700'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>রবিবাসরীয় সার্মন ভান্ডার (Sunday Pulpit Library)</span>
          </button>

          <button
            onClick={() => setActiveTab('editor')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition-all ${
              activeTab === 'editor'
                ? 'bg-gold-500 text-navy-950 shadow-md'
                : 'bg-navy-900 text-gray-300 hover:bg-navy-800 hover:text-white border border-navy-700'
            }`}
          >
            <PenTool className="w-4 h-4" />
            <span>সার্মন স্টুডিও এডিটর (Sermon Studio Editor)</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: SUNDAY PULPIT LIBRARY (রবিবাসরীয় সার্মন ভান্ডার) */}
      {/* ========================================================================= */}
      {activeTab === 'library' && (
        <div className="space-y-6">
          {/* Search & Filter Bar */}
          <div className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-800 p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="সার্মন, পদ বা বিষয় খুঁজুন (Search)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-xs focus:ring-2 focus:ring-gold-500 outline-none text-gray-900 dark:text-gray-100"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              <button
                onClick={() => setSelectedCategory('ALL')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedCategory === 'ALL'
                    ? 'bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950'
                    : 'bg-gray-100 dark:bg-navy-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200'
                }`}
              >
                সবকটি (All)
              </button>
              <button
                onClick={() => setSelectedCategory('Sunday Worship')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedCategory === 'Sunday Worship'
                    ? 'bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950'
                    : 'bg-gray-100 dark:bg-navy-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200'
                }`}
              >
                🕊️ রবিবার উপাসনা
              </button>
              <button
                onClick={() => setSelectedCategory('Easter & Cross')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedCategory === 'Easter & Cross'
                    ? 'bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950'
                    : 'bg-gray-100 dark:bg-navy-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200'
                }`}
              >
                ✝️ গুড ফ্রাইডে ও ইস্টার
              </button>
              <button
                onClick={() => setSelectedCategory('Christmas & Advent')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedCategory === 'Christmas & Advent'
                    ? 'bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950'
                    : 'bg-gray-100 dark:bg-navy-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200'
                }`}
              >
                🎄 বড়দিন
              </button>
              <button
                onClick={() => setSelectedCategory('Sacraments & Rites')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedCategory === 'Sacraments & Rites'
                    ? 'bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950'
                    : 'bg-gray-100 dark:bg-navy-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200'
                }`}
              >
                💧 বাপ্তিস্ম ও প্রভুভোজ
              </button>
              <button
                onClick={() => setSelectedCategory('Faith & Discipleship')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedCategory === 'Faith & Discipleship'
                    ? 'bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950'
                    : 'bg-gray-100 dark:bg-navy-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200'
                }`}
              >
                🛡️ বিশ্বাস ও শিষ্যত্ব
              </button>
            </div>
          </div>

          {/* Sermon Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSermons.map((sermon) => {
              const isLockedCard = !sermon.isFreePreview && !isUnlocked;

              return (
                <div
                  key={sermon.id}
                  className={`bg-white dark:bg-navy-900 rounded-2xl border transition-all p-6 space-y-4 flex flex-col justify-between ${
                    isLockedCard
                      ? 'border-gray-200 dark:border-navy-800 opacity-90 hover:border-gold-400'
                      : 'border-gold-400/40 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="space-y-3">
                    {/* Top Row: Category & Badges */}
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-gold-600 dark:text-gold-400 uppercase tracking-wide px-2.5 py-0.5 rounded-md bg-gold-50 dark:bg-navy-800 border border-gold-300/30">
                        {sermon.categoryBn}
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className="text-[11px] text-gray-500 flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{sermon.durationMinutes} mins</span>
                        </span>
                        {sermon.isFreePreview ? (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                            Free Sample
                          </span>
                        ) : isUnlocked ? (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center space-x-1">
                            <Unlock className="w-2.5 h-2.5" />
                            <span>Unlocked</span>
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 flex items-center space-x-1 border border-amber-300/40">
                            <Lock className="w-2.5 h-2.5" />
                            <span>Pulpit Pass</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Sermon Title */}
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-navy-950 dark:text-white leading-snug">
                        {sermon.titleBn}
                      </h3>
                      <div className="text-xs text-gold-600 dark:text-gold-400 font-semibold mt-0.5">
                        {sermon.passage}
                      </div>
                    </div>

                    {/* Theme */}
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-serif">
                      {sermon.themeBn}
                    </p>

                    {/* Exegetical Word Study Highlight */}
                    <div className="p-3 rounded-xl bg-gray-50 dark:bg-navy-950 border border-gray-200 dark:border-navy-800 text-xs space-y-1">
                      <div className="flex items-center justify-between text-[11px] font-bold text-navy-900 dark:text-gold-300">
                        <span>
                          {sermon.exegesisLemma.language} Lemma:{' '}
                          <span className="font-mono text-sm">{sermon.exegesisLemma.word}</span> (
                          {sermon.exegesisLemma.transliteration}, {sermon.exegesisLemma.strongs})
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-600 dark:text-gray-400">
                        {sermon.exegesisLemma.meaningBn}
                      </p>
                    </div>

                    {/* Points Preview */}
                    <div className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                      <span className="text-[11px] font-bold uppercase text-gray-400">
                        প্রচার রূপরেখা (3-Point Outline):
                      </span>
                      {sermon.pointsBn.map((p, idx) => (
                        <div key={idx} className="line-clamp-1 text-[11px]">
                          • {p}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-4 border-t border-gray-100 dark:border-navy-800 flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => handleLoadSermon(sermon)}
                      className={`flex-1 px-4 py-2 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors ${
                        isLockedCard
                          ? 'bg-gold-500 hover:bg-gold-600 text-navy-950'
                          : 'bg-navy-900 dark:bg-gold-500 hover:bg-navy-800 dark:hover:bg-gold-600 text-white dark:text-navy-950'
                      }`}
                    >
                      {isLockedCard ? (
                        <>
                          <Lock className="w-3.5 h-3.5" />
                          <span>আনলক করুন (Unlock)</span>
                        </>
                      ) : (
                        <>
                          <PenTool className="w-3.5 h-3.5" />
                          <span>এডিটরে লোড করুন (Load)</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => handleCopySlides(sermon)}
                      className="px-3 py-2 rounded-xl border border-gray-200 dark:border-navy-700 hover:bg-gray-50 dark:hover:bg-navy-800 text-xs font-semibold text-gray-700 dark:text-gray-200 flex items-center space-x-1"
                      title="চার্চ প্রজেক্টরের জন্য স্লাইডস কপি করুন"
                    >
                      {copiedNotification === sermon.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-emerald-500">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>স্লাইড কপি</span>
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

      {/* ========================================================================= */}
      {/* TAB 2: SERMON STUDIO EDITOR (সার্মন স্টুডিও এডিটর) */}
      {/* ========================================================================= */}
      {activeTab === 'editor' && (
        <div className="space-y-6">
          {/* Metadata & Word Count Ribbon */}
          <div className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-800 p-4 shadow-sm flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
              <span className="flex items-center space-x-1">
                <Clock className="w-4 h-4 text-gold-500" />
                <span>Est. Preach Time: <strong>~{estimatedMinutes} mins</strong></span>
              </span>
              <span>•</span>
              <span>Word Count: <strong>{wordCount} words</strong></span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={handleSave}
                className="px-3 py-1.5 rounded-lg border border-gray-300 dark:border-navy-700 hover:bg-gray-50 dark:hover:bg-navy-800 text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center space-x-1"
              >
                <Save className="w-3.5 h-3.5 text-gold-500" />
                <span>{savedNotice ? 'Saved!' : 'Save Draft'}</span>
              </button>

              <button
                type="button"
                onClick={handleCopyMarkdown}
                className="px-3 py-1.5 rounded-lg bg-navy-900 dark:bg-gold-500 hover:bg-navy-800 dark:hover:bg-gold-600 text-white dark:text-navy-950 text-xs font-bold flex items-center space-x-1"
              >
                {copied ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied Markdown' : 'Copy All'}</span>
              </button>

              <button
                type="button"
                onClick={() => window.print()}
                className="px-3 py-1.5 rounded-lg border border-gray-300 dark:border-navy-700 hover:bg-gray-50 dark:hover:bg-navy-800 text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center space-x-1"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Notes</span>
              </button>

              <button
                type="button"
                onClick={handleClear}
                className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 transition-colors"
                title="Reset Form"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Editor Form */}
          <div className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-800 p-6 sm:p-8 shadow-sm space-y-6">
            {/* Title & Passage */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Sermon Title (প্রচার শিরোনাম)
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
                  Biblical Passage (শাস্ত্রীয় পাঠ)
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
                Central Idea of the Text (CIT) / মূল কেন্দ্রীয় সত্য
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
                  I. Introduction &amp; Cultural Connection (ভূমিকা)
                </label>
                <span className="text-[11px] text-gray-400">Capture interest &amp; frame human need</span>
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
                  II. Original Language Exegesis &amp; Word Studies (গ্রিক ও হিব্রু মূলশব্দ বিশ্লেষণ)
                </label>
                <div className="flex items-center gap-1.5 text-[10px]">
                  <span className="text-gray-400 font-semibold">Quick Insert:</span>
                  <button
                    type="button"
                    onClick={() => handleInsertLexiconNote('χάρις (Charis)', 'G5485', 'অযাচিত পরম অনুগ্রহ')}
                    className="px-2 py-0.5 rounded bg-gold-400/20 text-gold-700 dark:text-gold-300 font-bold hover:bg-gold-400/30"
                  >
                    + χάρις (Grace)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInsertLexiconNote('חֶסֶד (Hesed)', 'H2617', 'অটল চুক্তিগত প্রেম')}
                    className="px-2 py-0.5 rounded bg-gold-400/20 text-gold-700 dark:text-gold-300 font-bold hover:bg-gold-400/30"
                  >
                    + חֶסֶד (Hesed)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInsertLexiconNote('λόγος (Logos)', 'G3056', 'চিরন্তন বাক্য ও ঈশ্বরীয় প্রকাশ')}
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

            {/* Section III: Exposition Points */}
            <div className="space-y-3 pt-2 border-t border-gray-100 dark:border-navy-800">
              <label className="text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-gold-400">
                III. Three-Point Expository Outline (মূল প্রচার রূপরেখা)
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
                IV. Practical Life Application &amp; Call (ব্যবহারিক প্রয়োগ ও আহ্বান)
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
                V. Pastoral Benediction &amp; Closing Prayer (আশীর্বাদ বাক্য ও প্রার্থনা)
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
      )}

      {/* ========================================================================= */}
      {/* UNLOCK MODAL (প্যাস্টরস বার্ষিক পাস আনলক মডাল) */}
      {/* ========================================================================= */}
      {showUnlockModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-navy-900 rounded-3xl max-w-xl w-full border border-gold-400/40 p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setShowUnlockModal(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-gold-600 dark:text-gold-400 uppercase tracking-wider">
                <Lock className="w-4 h-4" />
                <span>Sunday Pulpit Studio • Pastors VIP Pass</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy-950 dark:text-white">
                সম্পূর্ণ ৫০+ সার্মন ভান্ডার ও স্লাইড আনলক করুন
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                সারা বছরের ৫২টি রবিবারের জন্য প্রস্তুত প্রচার, গুড ফ্রাইডে, ইস্টার, বড়দিন ও বিশেষ অনুষ্ঠানের গভীর এক্সিজেটিক্যাল আউটলাইন পান মাত্র একটি পাস দিয়ে।
              </p>
            </div>

            {/* Payment Options Grid */}
            <div className="space-y-4">
              {/* Option A: India & Bangladesh UPI */}
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-navy-950 border border-gold-400/50 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-navy-950 dark:text-gold-300 font-bold text-sm">
                    <QrCode className="w-4 h-4 text-gold-600" />
                    <span>১. ভারত ও বাংলাদেশের প্রচারকদের জন্য (UPI / GPay / PhonePe)</span>
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-gold-500 text-navy-950">
                    ₹৪৯৯ / বছর
                  </span>
                </div>
                <p className="text-[11px] text-gray-600 dark:text-gray-400">
                  সরাসরি যেকোনো UPI অ্যাপ (Google Pay, PhonePe, Paytm) থেকে নিচের UPI আইডিতে ₹৪৯৯ পাঠিয়ে তাৎক্ষণিক অ্যাক্টিভেশন পাসকোড সংগ্রহ করুন:
                </p>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-navy-900 border border-gray-300 dark:border-navy-700">
                  <span className="font-mono text-xs font-bold text-navy-900 dark:text-gold-400">
                    ayanghosh75@okaxis
                  </span>
                  <button
                    onClick={handleCopyUpi}
                    className="px-3 py-1 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-xs"
                  >
                    {copiedUpi ? 'Copied UPI!' : 'Copy UPI'}
                  </button>
                </div>
              </div>

              {/* Option B: International Pastors (Card / PayPal / Buy Me a Coffee) */}
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-navy-950 border border-gray-200 dark:border-navy-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-navy-950 dark:text-gray-200 font-bold text-sm">
                    <CreditCard className="w-4 h-4 text-gold-500" />
                    <span>২. International Pastors (Card / PayPal)</span>
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-navy-800 text-gold-300">
                    $19.99 / yr
                  </span>
                </div>
                <p className="text-[11px] text-gray-600 dark:text-gray-400">
                  Secure instant online payment via Buy Me a Coffee / International Card:
                </p>
                <a
                  href="https://www.buymeacoffee.com/AyanKumarGhosh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center justify-center space-x-2 shadow-sm transition-transform hover:scale-[1.02]"
                >
                  <span>☕ Unlock via Buy Me a Coffee ($19.99)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Option C: VIP Passcode Entry */}
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800 space-y-3">
                <label className="text-xs font-bold text-emerald-900 dark:text-emerald-300 block">
                  ৩. আপনার কাছে কি অ্যাক্টিভেশন পাসকোড (Passcode) আছে?
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="পাসকোড লিখুন (যেমন PULPIT52)"
                    value={passcodeInput}
                    onChange={(e) => {
                      setPasscodeInput(e.target.value);
                      setPasscodeError(false);
                    }}
                    className="flex-1 px-3.5 py-2 rounded-xl border border-emerald-300 dark:border-emerald-700 bg-white dark:bg-navy-900 text-xs text-navy-950 dark:text-white uppercase font-bold focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                  <button
                    onClick={handleUnlockWithPasscode}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors"
                  >
                    সক্রিয় করুন (Activate)
                  </button>
                </div>
                {passcodeError && (
                  <div className="text-[11px] text-red-500 font-semibold">
                    ভুল পাসকোড। সঠিক পাসকোড লিখুন অথবা সরাসরি যোগাযোগ করুন।
                  </div>
                )}
              </div>
            </div>

            {/* Direct WhatsApp Assistance */}
            <div className="text-center pt-2 border-t border-gray-100 dark:border-navy-800 text-xs text-gray-500">
              যেকোনো সহায়তার জন্য ডিরেক্টর অয়ন কুমার ঘোষ মহাশয়ের সাথে সরাসরি কথা বলুন:
              <div className="pt-1">
                <a
                  href="mailto:ayanghosh75@gmail.com"
                  className="font-bold text-gold-600 dark:text-gold-400 hover:underline"
                >
                  ayanghosh75@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SermonBuilderPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-sm text-gray-500">Loading Sunday Pulpit Studio...</div>}>
      <SermonBuilderInner />
    </Suspense>
  );
}
