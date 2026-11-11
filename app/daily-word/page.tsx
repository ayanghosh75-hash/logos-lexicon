'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  BookOpen,
  Calendar,
  Share2,
  PenTool,
  Volume2,
  ArrowRight,
  Layers,
  Heart,
  Bookmark,
  CheckCircle2,
} from 'lucide-react';

interface DailyWordEntry {
  day: number;
  word: string;
  originalScript: string;
  transliteration: string;
  language: 'Hebrew' | 'Greek';
  strongs: string;
  partOfSpeech: string;
  simpleDef: string;
  studyDef: string;
  academicDef: string;
  scriptureRef: string;
  scriptureTextEn: string;
  scriptureTextBn: string;
  scriptureTextHi: string;
  devotionalReflection: string;
}

const DAILY_WORDS: DailyWordEntry[] = [
  {
    day: 1,
    word: 'Hesed (Steadfast Love / দয়া)',
    originalScript: 'חֶסֶד',
    transliteration: 'kheh\'-sed',
    language: 'Hebrew',
    strongs: 'H2617',
    partOfSpeech: 'Noun, Masculine',
    simpleDef: 'God\'s loyal, unbreakable love that never gives up on His children.',
    studyDef: 'Covenant fidelity and compassionate mercy rooted in Yahweh\'s immutable nature, enduring beyond human unworthiness.',
    academicDef: 'A foundational Old Testament covenantal technical term denoting reciprocal obligations, unmerited grace, and steadfast relational fidelity (pactum foederis).',
    scriptureRef: 'Exodus 34:6',
    scriptureTextEn: 'The Lord, the Lord, a God merciful and gracious, slow to anger, and abounding in steadfast love and faithfulness.',
    scriptureTextBn: 'সদাপ্রভু, সদাপ্রভু ঈশ্বর, কৃপাবান ও দয়ালু, ক্রোধে ধীর এবং প্রচুর দয়া ও সত্যে পূর্ণ।',
    scriptureTextHi: 'यहोवा, यहोवा, दयालु और अनुग्रहकारी परमेश्वर, क्रोध करने में धीमा और अति कृपालु और सत्य।',
    devotionalReflection: 'Today, rest in the certainty that God\'s Hesed does not fluctuate based on your performance. His covenant love is an anchor in life\'s fierce storms.'
  },
  {
    day: 2,
    word: 'Charis (Grace / অনুগ্রহ)',
    originalScript: 'χάρις',
    transliteration: 'khar\'-ece',
    language: 'Greek',
    strongs: 'G5485',
    partOfSpeech: 'Noun, Feminine',
    simpleDef: 'A completely free gift of God\'s favor and kindness which we could never earn.',
    studyDef: 'The unearned, restorative favor of God mediated through Jesus Christ, transforming the human heart and enabling sanctification.',
    academicDef: 'In Pauline theology, the divine sovereign prerogative conferring eschatological justification, breaking the dominion of the law, and generating subjective gratitude and pneumatic power.',
    scriptureRef: 'Ephesians 2:8-9',
    scriptureTextEn: 'For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
    scriptureTextBn: 'কেননা অনুগ্রহেই বিশ্বাসের দ্বারা তোমরা পরিত্রাণ পাইয়াছ; এবং ইহা তোমাদের হইতে হয় নাই, ঈশ্বরেরই দান; তাহা কর্মের ফল নয়, যেন কেহ গর্ব না করে।',
    scriptureTextHi: 'क्योंकि विश्वास के द्वारा अनुग्रह ही से तुम्हारा उद्धार हुआ है; और यह तुम्हारी ओर से नहीं, वरन परमेश्वर का दान है; और न कर्मों के कारण, ऐसा न हो कि कोई घमण्ड करे।',
    devotionalReflection: 'Grace is not merely a ticket to heaven; it is the daily operational power of God renewing your mind, healing your wounds, and empowering holy living.'
  },
  {
    day: 3,
    word: 'Shalom (Peace & Wholeness / শান্তি)',
    originalScript: 'שָׁלוֹם',
    transliteration: 'shaw-lome\'',
    language: 'Hebrew',
    strongs: 'H7965',
    partOfSpeech: 'Noun, Masculine',
    simpleDef: 'Complete peace, safety, wellness, and harmony with God and neighbor.',
    studyDef: 'Integral cosmic and personal wholeness, where all broken relationships are restored under the benevolent reign of the Creator.',
    academicDef: 'A holistic semitic ontological concept encompassing socio-political harmony, psychological tranquility, material sufficiency, and covenantal reconciliation with Yahweh.',
    scriptureRef: 'Numbers 6:24-26',
    scriptureTextEn: 'The Lord bless you and keep you; the Lord make his face shine upon you and be gracious to you; the Lord lift up his countenance upon you and give you peace.',
    scriptureTextBn: 'সদাপ্রভু তোমাদিগকে আশীর্বাদ করুন ও রক্ষা করুন; সদাপ্রভু তোমাদের প্রতি আপন মুখের দীপ্তি প্রকাশ করুন ও তোমাদের প্রতি অনুগ্রহ করুন; সদাপ্রভু তোমাদের প্রতি আপন মুখ তুলুন ও শান্তি দান করুন।',
    scriptureTextHi: 'यहोवा तुझे आशीष दे और तेरी रक्षा करे; यहोवा तुझ पर अपने मुख का प्रकाश चमकाए, और तुझ पर अनुग्रह करे; यहोवा अपना मुख तेरी ओर करे, और तुझे शान्ति दे।',
    devotionalReflection: 'Shalom is not the absence of trouble, but the presence of God in the midst of trouble. May His peace guard your heart and mind today.'
  },
  {
    day: 4,
    word: 'Logos (The Eternal Word / সনাতন বাক্য)',
    originalScript: 'λόγος',
    transliteration: 'log\'-os',
    language: 'Greek',
    strongs: 'G3056',
    partOfSpeech: 'Noun, Masculine',
    simpleDef: 'The living message, reason, and expression of God incarnate in Jesus Christ.',
    studyDef: 'The second person of the Holy Trinity, through whom the universe was created and through whose flesh divine light enters the cosmos.',
    academicDef: 'The Johannine appropriation of Old Testament Dabar Yahweh (דְּבַר יְהוָה) and Hellenistic philosophical concept, hypostasized as the divine eternal Son of God in absolute historical incarnation.',
    scriptureRef: 'John 1:1, 14',
    scriptureTextEn: 'In the beginning was the Word, and the Word was with God, and the Word was God... And the Word became flesh and dwelt among us.',
    scriptureTextBn: 'আদিতে বাক্য ছিলেন, এবং বাক্য ঈশ্বরের সহিত ছিলেন, এবং বাক্য ঈশ্বর ছিলেন... এবং সেই বাক্য মাংস হইলেন, এবং আমাদের মধ্যে বাস করিলেন।',
    scriptureTextHi: 'आदि में वचन था, और वचन परमेश्वर के साथ था, और वचन परमेश्वर था... और वचन देहधारी हुआ; और हमारे बीच में डेरा किया।',
    devotionalReflection: 'God has not remained silent or distant. In the Logos, He has spoken definitively, lovingly, and personally to your soul.'
  }
];

export default function DailyWordPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [level, setLevel] = useState<'simple' | 'study' | 'academic'>('study');
  const [copied, setCopied] = useState(false);

  const current = DAILY_WORDS[currentIndex];

  const handleShare = () => {
    const text = `📖 Logos Lexicon Daily Word: ${current.word} (${current.originalScript})
Strong's: ${current.strongs}
Key Verse: ${current.scriptureRef} — "${current.scriptureTextEn}"
Reflection: ${current.devotionalReflection}
Explore at: https://logoslexicon.org/daily-word`;

    if (navigator.share) {
      navigator.share({ title: current.word, text, url: window.location.href }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-950 py-8 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Banner */}
        <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-indigo-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl border border-navy-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/20 text-gold-300 border border-gold-400/30 text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" />
              <span>Daily Scripture & Word Study</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-serif text-white">
              Word of the Day & Original Language Devotional
            </h1>
            <p className="text-xs sm:text-sm text-gray-300">
              Enrich your spiritual walk daily with rigorous biblical Greek & Hebrew word insights.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-xs shadow-md transition-all hover:scale-105"
            >
              <Share2 className="w-4 h-4" />
              <span>{copied ? 'Copied Share!' : 'Share Word'}</span>
            </button>
          </div>
        </div>

        {/* Word Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {DAILY_WORDS.map((w, i) => (
            <button
              key={w.day}
              onClick={() => setCurrentIndex(i)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                currentIndex === i
                  ? 'bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 border-transparent shadow-sm'
                  : 'bg-white dark:bg-navy-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-navy-800 hover:bg-gray-100'
              }`}
            >
              <span className="font-mono">{w.originalScript}</span> • {w.word.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Word Display Card */}
        <div className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-800 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-100 dark:border-navy-800 pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                <span className="px-2 py-0.5 rounded bg-gray-100 dark:bg-navy-950 text-gray-700 dark:text-gray-300 font-mono">
                  {current.strongs}
                </span>
                <span>{current.language}</span>
                <span>•</span>
                <span>{current.partOfSpeech}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 dark:text-gray-100 font-serif mt-2">
                {current.word}
              </h2>
              <div className="flex items-center gap-3 mt-1.5">
                <span className="text-2xl font-bold font-mono text-gold-600 dark:text-gold-400">
                  {current.originalScript}
                </span>
                <span className="text-xs text-gray-500 font-mono italic">
                  [{current.transliteration}]
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href={`/sermon-builder?book=${encodeURIComponent(current.scriptureRef.split(' ')[0])}&chapter=1`}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gold-400/20 hover:bg-gold-400/30 text-gold-700 dark:text-gold-300 font-bold text-xs border border-gold-400/30 transition-colors"
              >
                <PenTool className="w-3.5 h-3.5" />
                <span>Preach on this Word</span>
              </Link>
            </div>
          </div>

          {/* 3-Tier Definition Selector */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Linguistic Definition
              </span>
              <div className="flex items-center gap-1 p-1 rounded-lg bg-gray-100 dark:bg-navy-950 text-xs">
                {(['simple', 'study', 'academic'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLevel(l)}
                    className={`px-2.5 py-1 rounded capitalize font-semibold transition-all ${
                      level === l
                        ? 'bg-white dark:bg-navy-800 text-gold-600 dark:text-gold-400 shadow-sm'
                        : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gold-50/60 dark:bg-navy-950/80 border border-gold-200/50 dark:border-navy-800 text-sm text-gray-800 dark:text-gray-200 leading-relaxed font-sans">
              {level === 'simple' && current.simpleDef}
              {level === 'study' && current.studyDef}
              {level === 'academic' && current.academicDef}
            </div>
          </div>

          {/* Scripture In 3 Languages */}
          <div className="space-y-3 pt-4 border-t border-gray-100 dark:border-navy-800">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-gold-400">
              <BookOpen className="w-4 h-4 text-gold-500" />
              <span>Key Scripture Anchor — {current.scriptureRef}</span>
            </div>

            <div className="space-y-2.5">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-gray-100 dark:border-navy-800">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                  English (ESV / KJV)
                </span>
                <p className="text-sm font-serif text-gray-900 dark:text-gray-100 leading-relaxed">
                  "{current.scriptureTextEn}"
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-gray-100 dark:border-navy-800">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                  বাংলা (Bengali Study Bible)
                </span>
                <p className="text-sm font-serif text-gold-700 dark:text-gold-300 leading-relaxed">
                  "{current.scriptureTextBn}"
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-gray-100 dark:border-navy-800">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                  हिन्दी (Hindi Holy Bible)
                </span>
                <p className="text-sm font-serif text-gray-800 dark:text-gray-200 leading-relaxed">
                  "{current.scriptureTextHi}"
                </p>
              </div>
            </div>
          </div>

          {/* Devotional Reflection */}
          <div className="p-4 rounded-xl bg-indigo-50/50 dark:bg-navy-950/60 border border-indigo-100 dark:border-navy-800 space-y-1.5">
            <span className="text-xs font-bold text-indigo-900 dark:text-indigo-300 flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-rose-500" />
              Pastoral Reflection
            </span>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic">
              {current.devotionalReflection}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
