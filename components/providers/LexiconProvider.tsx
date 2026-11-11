'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ReadingLevel } from '@/lib/db/types';
import { SUPPORTED_LANGUAGES, getLanguageConfig, DEFAULT_LANGUAGE } from '@/lib/i18n/languages';

interface LexiconContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  readingLevel: ReadingLevel;
  setReadingLevel: (level: ReadingLevel) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  textSize: 'normal' | 'large' | 'xlarge';
  setTextSize: (size: 'normal' | 'large' | 'xlarge') => void;
  isHighContrast: boolean;
  toggleHighContrast: () => void;
  isReducedMotion: boolean;
  toggleReducedMotion: () => void;
  savedEntries: string[];
  toggleSaveEntry: (slug: string) => void;
  notes: Record<string, string>;
  saveNote: (slug: string, content: string) => void;
  dir: 'ltr' | 'rtl';
  updateAvailable: boolean;
  applyUpdate: () => void;
  dismissUpdate: () => void;
  isInstallable: boolean;
  triggerInstall: () => Promise<void>;
}

const LexiconContext = createContext<LexiconContextType | undefined>(undefined);

export const LexiconProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguageState] = useState<string>(DEFAULT_LANGUAGE);
  const [readingLevel, setReadingLevelState] = useState<ReadingLevel>('study');
  const [theme, setThemeState] = useState<'light' | 'dark'>('light');
  const [textSize, setTextSizeState] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [isHighContrast, setIsHighContrast] = useState<boolean>(false);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);
  const [savedEntries, setSavedEntries] = useState<string[]>([]);
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [updateAvailable, setUpdateAvailable] = useState<boolean>(false);
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState<boolean>(false);

  // Load persisted user preferences safely
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const storedLang = localStorage.getItem('logos_lang');
      if (storedLang && SUPPORTED_LANGUAGES[storedLang]) {
        setCurrentLanguageState(storedLang);
      }

      const storedLevel = localStorage.getItem('logos_level') as ReadingLevel;
      if (storedLevel && ['simple', 'study', 'academic'].includes(storedLevel)) {
        setReadingLevelState(storedLevel);
      }

      const storedTheme = localStorage.getItem('logos_theme') as 'light' | 'dark';
      if (storedTheme) {
        setThemeState(storedTheme);
        document.documentElement.setAttribute('data-theme', storedTheme);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setThemeState('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
      }

      const storedText = localStorage.getItem('logos_text_size') as 'normal' | 'large' | 'xlarge';
      if (storedText) setTextSizeState(storedText);

      const storedContrast = localStorage.getItem('logos_contrast') === 'true';
      setIsHighContrast(storedContrast);

      const storedSaved = localStorage.getItem('logos_saved');
      if (storedSaved) setSavedEntries(JSON.parse(storedSaved));

      const storedNotes = localStorage.getItem('logos_notes');
      if (storedNotes) setNotes(JSON.parse(storedNotes));
    } catch (e) {
      console.warn('Storage read failed', e);
    }
  }, []);

  // PWA Service Worker Registration and Update Detection
  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        // If already waiting
        if (registration.waiting) {
          setWaitingWorker(registration.waiting);
          setUpdateAvailable(true);
        }

        // On update found
        registration.addEventListener('updatefound', () => {
          const installingWorker = registration.installing;
          if (installingWorker) {
            installingWorker.addEventListener('statechange', () => {
              if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
                setWaitingWorker(installingWorker);
                setUpdateAvailable(true);
              }
            });
          }
        });
      })
      .catch((err) => console.warn('SW register error:', err));

    // Listen for PWA installation prompt
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const setLanguage = (lang: string) => {
    setCurrentLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('logos_lang', lang);
    }
  };

  const setReadingLevel = (level: ReadingLevel) => {
    setReadingLevelState(level);
    if (typeof window !== 'undefined') {
      localStorage.setItem('logos_level', level);
    }
  };

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setThemeState(next);
    if (typeof window !== 'undefined') {
      localStorage.setItem('logos_theme', next);
      document.documentElement.setAttribute('data-theme', next);
    }
  };

  const setTextSize = (size: 'normal' | 'large' | 'xlarge') => {
    setTextSizeState(size);
    if (typeof window !== 'undefined') {
      localStorage.setItem('logos_text_size', size);
    }
  };

  const toggleHighContrast = () => {
    const next = !isHighContrast;
    setIsHighContrast(next);
    if (typeof window !== 'undefined') {
      localStorage.setItem('logos_contrast', String(next));
    }
  };

  const toggleReducedMotion = () => {
    setIsReducedMotion(!isReducedMotion);
  };

  const toggleSaveEntry = (slug: string) => {
    setSavedEntries((prev) => {
      const next = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug];
      if (typeof window !== 'undefined') {
        localStorage.setItem('logos_saved', JSON.stringify(next));
      }
      return next;
    });
  };

  const saveNote = (slug: string, content: string) => {
    setNotes((prev) => {
      const next = { ...prev, [slug]: content };
      if (typeof window !== 'undefined') {
        localStorage.setItem('logos_notes', JSON.stringify(next));
      }
      return next;
    });
  };

  const applyUpdate = () => {
    if (waitingWorker) {
      waitingWorker.postMessage({ action: 'SKIP_WAITING' });
    }
    setUpdateAvailable(false);
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  const dismissUpdate = () => {
    setUpdateAvailable(false);
  };

  const triggerInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        setIsInstallable(false);
      }
      setDeferredPrompt(null);
    }
  };

  const langConfig = getLanguageConfig(currentLanguage);
  const dir = langConfig.dir;

  return (
    <LexiconContext.Provider
      value={{
        currentLanguage,
        setLanguage,
        readingLevel,
        setReadingLevel,
        theme,
        toggleTheme,
        textSize,
        setTextSize,
        isHighContrast,
        toggleHighContrast,
        isReducedMotion,
        toggleReducedMotion,
        savedEntries,
        toggleSaveEntry,
        notes,
        saveNote,
        dir,
        updateAvailable,
        applyUpdate,
        dismissUpdate,
        isInstallable,
        triggerInstall,
      }}
    >
      <div
        className={`${isHighContrast ? 'contrast-high' : ''} ${
          textSize === 'large' ? 'text-lg' : textSize === 'xlarge' ? 'text-xl' : 'text-base'
        } ${isReducedMotion ? 'reduce-motion' : ''}`}
      >
        {children}
      </div>
    </LexiconContext.Provider>
  );
};

export const useLexicon = () => {
  const context = useContext(LexiconContext);
  if (!context) {
    throw new Error('useLexicon must be used within a LexiconProvider');
  }
  return context;
};
