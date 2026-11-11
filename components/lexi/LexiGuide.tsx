'use client';

import React, { useState, useEffect, useRef } from 'react';
import { LexiAvatar } from './LexiAvatar';
import { searchLexicon, SearchResult } from '@/lib/search/searchEngine';
import {
  Sparkles,
  Search,
  Volume2,
  VolumeX,
  X,
  Minimize2,
  Maximize2,
  BookOpen,
  Languages,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  Send,
  HelpCircle,
} from 'lucide-react';
import Link from 'next/link';

interface Message {
  id: string;
  sender: 'lexi' | 'user';
  text: string;
  timestamp: string;
  results?: SearchResult[];
  quickActions?: { label: string; action: () => void }[];
}

export const LexiGuide: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'lexi',
      text: 'Greetings. I am Lexi, your research assistant for Logos Lexicon. How may I assist your biblical and theological study today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    if (isOpen && !isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isMinimized]);

  // Focus input on open
  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  // Keyboard accessibility: Escape closes the panel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Listen for custom open-lexi events from search or zero-result widgets
  useEffect(() => {
    const handleOpenLexi = (e: any) => {
      const q = e.detail?.query || '';
      setIsOpen(true);
      setIsMinimized(false);
      if (q) {
        setQuery(q);
      }
    };
    window.addEventListener('logos:open-lexi', handleOpenLexi);
    return () => window.removeEventListener('logos:open-lexi', handleOpenLexi);
  }, []);

  // Speech synthesis helper (accessible and user-initiated only)
  const speakText = (text: string) => {
    if (!audioEnabled || typeof window === 'undefined' || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: trimmed,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setQuery('');

    // Process inquiry through peer-reviewed lexicon search engine
    setTimeout(() => {
      const searchResults = searchLexicon(trimmed);
      let replyText = '';

      if (searchResults.length > 0) {
        const topResult = searchResults[0].entry;
        replyText = `I found verified theological records for "${topResult.headwordEnglish}". ${topResult.definitionSimple}`;
      } else {
        replyText = `We could not find a reviewed entry for "${trimmed}" yet. Lexi can search related theological categories or queue this concept for human review.`;
      }

      const lexiMsg: Message = {
        id: `lexi-${Date.now()}`,
        sender: 'lexi',
        text: replyText,
        results: searchResults.slice(0, 3),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, lexiMsg]);
      speakText(replyText);
    }, 250);
  };

  const handleQuickPrompt = (promptText: string) => {
    setQuery(promptText);
    setTimeout(() => {
      const input = inputRef.current;
      if (input) {
        input.value = promptText;
        handleSendMessage();
      }
    }, 50);
  };

  return (
    <>
      {/* Floating Non-Blocking "Ask Lexi" Trigger Button */}
      {!isOpen && (
        <aside aria-label="Lexi Assistant" className="fixed bottom-5 right-5 z-40 flex items-center space-x-2">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center space-x-2.5 px-4 py-2.5 rounded-full bg-navy-900 text-gold-400 border border-gold-500/40 shadow-xl hover:bg-navy-950 hover:border-gold-400 hover:scale-105 active:scale-95 transition-all group"
            aria-label="Ask Lexi theological assistant"
          >
            <LexiAvatar size="xs" showStatus status="ready" />
            <span className="text-xs font-semibold text-white tracking-wide">Ask Lexi</span>
            <Sparkles className="w-3.5 h-3.5 text-gold-400 group-hover:rotate-12 transition-transform" />
          </button>
        </aside>
      )}

      {/* Lexi Text Assistant Panel */}
      {isOpen && (
        <section
          role="dialog"
          aria-label="Lexi Research and Operations Assistant"
          aria-modal="false"
          className={`fixed bottom-5 right-5 z-50 bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-200 ${
            isMinimized ? 'w-80 h-14' : 'w-[92vw] sm:w-[420px] h-[560px] max-h-[85vh]'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-navy-950 text-white border-b border-navy-800">
            <div className="flex items-center space-x-2.5">
              <LexiAvatar size="xs" showStatus status={isSpeaking ? 'thinking' : 'ready'} />
              <div>
                <h2 className="text-xs font-bold text-white flex items-center space-x-1.5 font-serif">
                  <span>Lexi</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-gold-500/20 text-gold-400 font-sans font-medium">
                    Research Guide
                  </span>
                </h2>
                <p className="text-[10px] text-gray-400">Logos Lexicon Assistant</p>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              {/* Optional Text-To-Speech Toggle */}
              <button
                onClick={() => {
                  if (audioEnabled && typeof window !== 'undefined') {
                    window.speechSynthesis?.cancel();
                    setIsSpeaking(false);
                  }
                  setAudioEnabled(!audioEnabled);
                }}
                className={`p-1.5 rounded-lg text-gray-400 hover:text-white transition-colors ${
                  audioEnabled ? 'text-gold-400 bg-navy-800' : ''
                }`}
                title={audioEnabled ? 'Voice narration active (Mute)' : 'Enable voice narration'}
                aria-label={audioEnabled ? 'Mute voice narration' : 'Enable voice narration'}
              >
                {audioEnabled ? <Volume2 className="w-4 h-4 text-gold-400" /> : <VolumeX className="w-4 h-4" />}
              </button>

              {/* Minimize / Maximize */}
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white transition-colors"
                title={isMinimized ? 'Expand panel' : 'Minimize panel'}
                aria-label={isMinimized ? 'Expand panel' : 'Minimize panel'}
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </button>

              {/* Close */}
              <button
                onClick={() => {
                  if (typeof window !== 'undefined') window.speechSynthesis?.cancel();
                  setIsOpen(false);
                }}
                className="p-1.5 rounded-lg text-gray-400 hover:text-red-400 transition-colors"
                title="Close Lexi panel"
                aria-label="Close Lexi panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body Content (Shown if not minimized) */}
          {!isMinimized && (
            <>
              {/* Messages Scroll Area */}
              <div
                className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50/50 dark:bg-navy-950/50 text-xs"
                role="log"
                aria-live="polite"
              >
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[88%] p-3 rounded-2xl ${
                        msg.sender === 'user'
                          ? 'bg-gold-500 text-navy-950 font-medium rounded-tr-sm'
                          : 'bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-800 text-gray-800 dark:text-gray-200 rounded-tl-sm shadow-sm'
                      }`}
                    >
                      <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>

                      {/* Display Top Lexicon Results if any */}
                      {msg.results && msg.results.length > 0 && (
                        <div className="mt-2.5 pt-2.5 border-t border-gray-100 dark:border-navy-800 space-y-1.5">
                          <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider block">
                            Peer-Reviewed Entries
                          </span>
                          {msg.results.map((res) => (
                            <Link
                              key={res.entry.id}
                              href={`/term/${res.entry.slug}`}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center justify-between p-2 rounded-lg bg-gray-50 dark:bg-navy-950 hover:bg-gold-50 dark:hover:bg-navy-800 border border-gray-100 dark:border-navy-800 transition-colors group"
                            >
                              <div>
                                <span className="font-semibold text-navy-900 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400">
                                  {res.entry.headwordEnglish}
                                </span>
                                <span className="text-[10px] text-gray-500 block truncate max-w-[220px]">
                                  {res.entry.definitionSimple}
                                </span>
                              </div>
                              <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-gold-500" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                    <span className="text-[9px] text-gray-400 mt-1 px-1">{msg.timestamp}</span>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Prompts Bar */}
              <div className="px-3 py-1.5 bg-gray-100/70 dark:bg-navy-900 border-t border-gray-200 dark:border-navy-800 flex items-center space-x-1.5 overflow-x-auto text-[11px] no-scrollbar">
                <span className="text-[10px] text-gray-400 flex items-center flex-shrink-0">
                  <Sparkles className="w-3 h-3 text-gold-500 mr-1" /> Quick:
                </span>
                <button
                  onClick={() => handleQuickPrompt('Explain Grace')}
                  className="px-2 py-0.5 rounded-full bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-700 text-gray-600 dark:text-gray-300 hover:border-gold-400 whitespace-nowrap"
                >
                  Grace
                </button>
                <button
                  onClick={() => handleQuickPrompt('Biblical Greek for Covenant')}
                  className="px-2 py-0.5 rounded-full bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-700 text-gray-600 dark:text-gray-300 hover:border-gold-400 whitespace-nowrap"
                >
                  Covenant
                </button>
                <button
                  onClick={() => handleQuickPrompt('Justification by faith')}
                  className="px-2 py-0.5 rounded-full bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-700 text-gray-600 dark:text-gray-300 hover:border-gold-400 whitespace-nowrap"
                >
                  Justification
                </button>
                <button
                  onClick={() => handleQuickPrompt('What is Trinity?')}
                  className="px-2 py-0.5 rounded-full bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-700 text-gray-600 dark:text-gray-300 hover:border-gold-400 whitespace-nowrap"
                >
                  Trinity
                </button>
              </div>

              {/* Input Form */}
              <form
                onSubmit={handleSendMessage}
                className="p-3 bg-white dark:bg-navy-900 border-t border-gray-200 dark:border-navy-800 flex items-center space-x-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask a theological question or term..."
                  className="flex-1 px-3 py-2 text-xs bg-gray-50 dark:bg-navy-950 border border-gray-200 dark:border-navy-700 rounded-xl text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-gold-500"
                />
                <button
                  type="submit"
                  disabled={!query.trim()}
                  className="p-2 rounded-xl bg-navy-900 text-gold-400 hover:bg-navy-950 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>

              {/* Sub-footer Links */}
              <div className="px-3 py-1.5 bg-gray-50 dark:bg-navy-950 border-t border-gray-200/50 dark:border-navy-800 flex items-center justify-between text-[10px] text-gray-500">
                <span className="flex items-center space-x-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-500" />
                  <span>Controlled Level 4 Editorial</span>
                </span>
                <Link
                  href="/admin/lexi"
                  className="hover:text-gold-600 dark:hover:text-gold-400 flex items-center space-x-0.5"
                >
                  <span>Operations</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </Link>
              </div>
            </>
          )}
        </section>
      )}
    </>
  );
};
