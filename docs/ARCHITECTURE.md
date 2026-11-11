# Logos Lexicon — Technical Architecture & System Design

**Project Name:** Logos Lexicon — Multilingual Biblical & Theological Dictionary  
**Tagline:** *Understand the Word. Explore Every Language.*  
**Project Owner:** Rev. Ayan Kumar Ghosh  
**Dedicated Operations Assistant:** Lexi  
**Target Standard:** Academic rigor, theological integrity, WCAG 2.2 AA accessibility, offline-first PWA, multi-device resilience.

---

## 1. System Overview

Logos Lexicon is a high-performance, mobile-first, installable Progressive Web Application (PWA) designed to provide instant access to Christian biblical and theological terminology across 15 modern interface/dictionary languages, backed by Biblical Greek, Hebrew, and Aramaic research tools.

### Core Architectural Decisions:
1. **Next.js 15 (React 19, TypeScript, App Router)**: Server-rendered for instantaneous first contentful paint (FCP) and search engine discovery; client-rendered interactive state for in-place 3-tier reading level changes (Simple / Study / Academic) and multilingual comparison matrices.
2. **Master-Content Principle**: Every concept has a single controlled English master record. Local language records are strictly attached via unique foreign keys (`masterEntryId`). When an English master changes, affected translations are automatically flagged with `needsSyncWithMaster = true` without ever silently overwriting human translations.
3. **Multilingual Script & RTL Engine**: Native `dir="rtl"` support for Urdu, Hebrew, and Aramaic, utilizing logical CSS properties (`margin-inline-start`) and custom typography stacks (`Noto Nastaliq Urdu`, `Ezra SIL`, `SBL Greek`, `Noto Sans Bengali`, `Noto Sans Devanagari`).
4. **PWA & Offline-First Strategy**: Custom versioned service worker with Stale-While-Revalidate and Cache-First strategies. Downloadable language packs cached in browser storage for 100% offline study.
5. **Lexi Level-4 Operations Assistant**: Dedicated operations assistant running 15-minute synthetic health checks, validating search indexes, healing non-doctrinal broken links, and generating 12-hour executive operational reports.

---

## 2. Directory Structure

```
logos-lexicon/
├── app/
│   ├── layout.tsx                # Root layout, dynamic lang/dir, anti-FOUC theme engine
│   ├── globals.css               # Design tokens, RTL Nastaliq, high contrast, reduced motion
│   ├── page.tsx                  # Homepage: Hero search, Word of the Day, exploration hub
│   ├── dictionary/page.tsx       # A–Z directory with category & alphabet filtering
│   ├── entry/[slug]/page.tsx     # Full theological entry viewer with 3 reading levels
│   ├── compare/page.tsx          # Multilingual 15-language comparative matrix
│   ├── original-languages/page.tsx # Biblical Greek & Hebrew research portal
│   ├── topics/page.tsx           # Systematic theological taxonomy
│   ├── learn/page.tsx            # Daily 5-minute lessons & formative knowledge checks
│   ├── saved/page.tsx            # Saved entries, personal notes & offline pack manager
│   ├── install/page.tsx          # Step-by-step cross-device PWA installation guide
│   ├── about/page.tsx            # Mission, editorial board, approval labels & source register
│   ├── privacy/page.tsx          # Data minimization, export & deletion controls
│   ├── terms/page.tsx            # Fair use & copyright policy
│   ├── admin/lexi/page.tsx       # Lexi Level-4 operations console & health monitor
│   └── api/
│       ├── health/route.ts       # 15-minute synthetic monitoring endpoint
│       ├── version/route.ts      # Version endpoint for PWA update detection
│       └── entries/              # Search and entry query API endpoints
├── components/
│   ├── brand/Logo.tsx            # Master vector SVG brand mark & monogram
│   ├── navigation/Navbar.tsx     # Responsive desktop/mobile header with language selector
│   ├── navigation/Footer.tsx     # Footer with accountability links and status indicator
│   ├── dictionary/EntryCard.tsx  # Interactive theological card with reading level switcher
│   ├── providers/LexiconProvider.tsx # Client state: theme, reading level, language, bookmarks
│   ├── pwa/UpdateBanner.tsx      # Safe PWA update notification banner
│   └── sharing/ShareModal.tsx    # High-resolution QR code generator & multi-channel share
├── lib/
│   ├── db/types.ts               # Core TypeScript interfaces for master records & reviews
│   ├── db/seedData.ts            # Seeded theological entries across 5 languages
│   ├── db/sourceRegister.ts      # Academic source and license catalog
│   ├── i18n/languages.ts         # 15 language definitions + Greek/Hebrew/Aramaic
│   └── search/searchEngine.ts    # Unicode-aware transliteration search engine
└── public/
    ├── manifest.webmanifest      # PWA application manifest
    ├── sw.js                     # Versioned Service Worker with offline caching
    └── icons/                    # App icons (192x192, 512x512, Favicon)
```
