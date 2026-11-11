'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { getAllEntries } from '@/lib/db/seedData';
import {
  Sparkles,
  BookOpen,
  CheckCircle,
  HelpCircle,
  Clock,
  Award,
  ArrowRight,
  Shield,
  ToggleLeft,
  ToggleRight,
} from 'lucide-react';

export default function LearnPage() {
  const entries = getAllEntries();
  const [activeQuizQuestion, setActiveQuizQuestion] = useState<number>(0);
  const [quizAnswerSelected, setQuizAnswerSelected] = useState<number | null>(null);
  const [streakEnabled, setStreakEnabled] = useState<boolean>(true);

  // Daily 5-minute lesson concept (Justification by Faith)
  const currentLesson = {
    title: 'The Great Exchange: Understanding Justification',
    timeEstimate: '5 minutes',
    doctrine: 'Soteriology',
    summary:
      'In biblical theology, justification is not a process of God gradually making someone a good person, but God the Judge declaring the guilty sinner righteous on account of Christ’s finished obedience and sacrifice, received through faith alone.',
    keyVerse: 'Romans 3:24 — "being justified freely by his grace through the redemption that is in Christ Jesus."',
    studyQuestion: 'Why did the Protestant Reformers emphasize that righteousness is "imputed" (credited) rather than "infused"?',
  };

  // Safe, non-coercive quiz
  const quiz = {
    question: "What is the primary difference between the biblical Greek 'charis' and Greco-Roman patron reciprocity?",
    options: [
      'God gives grace expecting an equivalent material return from humans.',
      'Biblical grace is completely unconditioned and unearned, given freely without human merit.',
      'Grace is only provided after an individual performs sufficient penance.',
      'Charis was an invented word with no usage outside the New Testament.',
    ],
    correctIndex: 1,
    explanation:
      "While ancient patron-client systems expected social reciprocity, Paul radically emphasizes that God's grace in Christ is a free, unmerited gift to unworthy sinners (Romans 11:6; Ephesians 2:8-9).",
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      {/* Page Header */}
      <div className="border-b border-gray-200 dark:border-navy-800 pb-6 space-y-2">
        <div className="flex items-center space-x-2 text-gold-600 dark:text-gold-400">
          <Clock className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider">
            Daily Study & Formative Learning
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 dark:text-white">
          5-Minute Daily Theological Lesson
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-2xl">
          Quiet, deep, guilt-free spiritual reflection. Learn foundational doctrines in manageable daily portions.
        </p>
      </div>

      {/* Ethical Engagement Safeguard Notice */}
      <div className="bg-gray-50 dark:bg-navy-900 p-4 rounded-xl border border-gray-200 dark:border-navy-800 flex items-center justify-between text-xs text-gray-600 dark:text-gray-300">
        <div className="flex items-center space-x-2">
          <Shield className="w-4 h-4 text-gold-500 flex-shrink-0" />
          <span>
            <strong>Healthy Engagement Safeguard:</strong> Logos Lexicon never uses false urgency, gamified guilt, or manipulative notifications. You are in complete control.
          </span>
        </div>
        <button
          onClick={() => setStreakEnabled(!streakEnabled)}
          className="flex items-center space-x-1 font-semibold text-gold-600 dark:text-gold-400 hover:underline flex-shrink-0 ml-4"
        >
          <span>{streakEnabled ? 'Disable Streaks' : 'Enable Streaks'}</span>
        </button>
      </div>

      {/* 5-Minute Daily Lesson Card */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-800 p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-100 dark:border-navy-800 pb-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold-600 dark:text-gold-400">
              Today&apos;s Focus • {currentLesson.doctrine}
            </span>
            <h2 className="font-serif text-2xl font-bold text-navy-900 dark:text-white">
              {currentLesson.title}
            </h2>
          </div>
          <span className="text-xs font-mono font-medium text-gray-500 bg-gray-100 dark:bg-navy-950 px-2.5 py-1 rounded-md">
            {currentLesson.timeEstimate}
          </span>
        </div>

        <p className="text-sm font-serif text-gray-800 dark:text-gray-200 leading-relaxed">
          {currentLesson.summary}
        </p>

        <div className="bg-ivory-100 dark:bg-navy-950/70 p-4 rounded-xl border-l-4 border-gold-400 text-xs font-serif text-navy-900 dark:text-gray-200">
          <strong>Key Scripture Anchor:</strong> {currentLesson.keyVerse}
        </div>

        <div className="space-y-2 pt-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Reflection Question
          </h4>
          <p className="text-xs text-gray-700 dark:text-gray-300 font-serif italic">
            &ldquo;{currentLesson.studyQuestion}&rdquo;
          </p>
        </div>

        <div className="pt-4 border-t border-gray-100 dark:border-navy-800 flex items-center justify-between">
          <Link
            href="/entry/justification"
            className="text-xs font-bold text-gold-600 dark:text-gold-400 hover:underline flex items-center space-x-1"
          >
            <span>Read Complete Justification Entry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <span className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center space-x-1">
            <CheckCircle className="w-4 h-4" />
            <span>Lesson Ready</span>
          </span>
        </div>
      </div>

      {/* Interactive Formative Quiz */}
      <div className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 border border-navy-800 space-y-6 shadow-xl">
        <div className="flex items-center space-x-2 text-gold-400">
          <HelpCircle className="w-5 h-5" />
          <h3 className="font-serif font-bold text-lg text-gold-200">
            Formative Knowledge Check
          </h3>
        </div>

        <p className="text-sm font-serif text-gray-200 leading-relaxed">
          {quiz.question}
        </p>

        <div className="space-y-2.5">
          {quiz.options.map((option, idx) => {
            const isSelected = quizAnswerSelected === idx;
            const isCorrect = idx === quiz.correctIndex;

            let btnStyle = 'bg-navy-900/80 hover:bg-navy-850 border-navy-700 text-gray-200';
            if (quizAnswerSelected !== null) {
              if (isCorrect) {
                btnStyle = 'bg-emerald-950 border-emerald-500 text-emerald-200 font-bold';
              } else if (isSelected && !isCorrect) {
                btnStyle = 'bg-red-950 border-red-500 text-red-200';
              }
            }

            return (
              <button
                key={idx}
                onClick={() => setQuizAnswerSelected(idx)}
                className={`w-full text-left p-3.5 rounded-xl border text-xs leading-relaxed transition-all ${btnStyle}`}
              >
                <div className="flex items-start space-x-2.5">
                  <span className="font-mono font-bold text-gold-400 flex-shrink-0">
                    {String.fromCharCode(65 + idx)}.
                  </span>
                  <span>{option}</span>
                </div>
              </button>
            );
          })}
        </div>

        {quizAnswerSelected !== null && (
          <div className="p-4 bg-navy-900 rounded-xl border border-gold-400/30 text-xs space-y-1 animate-fade-in">
            <strong className="text-gold-300 font-serif block">
              {quizAnswerSelected === quiz.correctIndex ? 'Correct!' : 'Notice the theological distinction:'}
            </strong>
            <p className="text-gray-300 leading-relaxed font-serif">
              {quiz.explanation}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
