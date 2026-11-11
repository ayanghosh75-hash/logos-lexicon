# Logos Lexicon — Multilingual Biblical & Theological Dictionary

> **Tagline:** *Understand the Word. Explore Every Language.*  
> **Project Director:** Rev. Ayan Kumar Ghosh  
> **Dedicated Operations Assistant:** Lexi  
> **Status:** Production-Ready MVP Architecture (Milestone 1–6 Complete & Tested)

---

## Quick Start & Local Execution

### 1. Prerequisites
- **Node.js**: v20.x or v22.x LTS (Tested on Node v22.14.0)
- **npm**: 10.x+ (Tested on npm 10.9.2)

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Run Production Build & Automated Verification Suite
```powershell
# Build production bundle
npm run build

# Run automated 9-suite endpoint verification
powershell -ExecutionPolicy Bypass -File .\test-endpoints.ps1
```

---

## Key Features Implemented

1. **Multilingual Architecture**: 15 interface/translation languages (English, Bengali, Hindi, Urdu, Korean, Tamil, Telugu, Malayalam, Kannada, Marathi, Punjabi, Gujarati, Odia, Assamese, Nepali) + Biblical Greek, Hebrew, and Aramaic.
2. **Native RTL Typography**: Dynamic `dir="rtl"` layout, logical CSS styling, and custom font stacks for **Urdu (Nastaliq)** and **Hebrew/Aramaic**.
3. **3-Tier Reading Levels**: Instantaneous in-place switching between **Simple**, **Study**, and **Academic** definitions without page reloads.
4. **Master-Content Principle**: Controlled English master records linked to localized translations with non-silent cascading update indicators.
5. **Multilingual Instant Search**: Transliteration-aware, Unicode-safe client search covering English headwords, Greek lemmas, Strong's numbers, and local scripts.
6. **Language Comparison Tool (`/compare`)**: Side-by-side linguistic comparison matrix across 15 languages, complete with print and export support.
7. **Original Language Research (`/original-languages`)**: In-depth Greek & Hebrew lemma studies equipped with warnings against the root fallacy and illegitimate totality transfer.
8. **Progressive Web App (PWA)**: Web App Manifest, Service Worker caching, downloadable offline packs, and safe update notification modals.
9. **Permanent QR & Sharing Suite**: Vector SVG and PNG QR codes, permanent URL deep linking, and direct sharing to WhatsApp, Telegram, Email, and SMS.
10. **Lexi Operations Console (`/admin/lexi`)**: 15-minute synthetic health monitoring, automated non-doctrinal safe repairs, 12-hour executive reports, and hard-coded technical prohibitions.
11. **Privacy & Data Rights (`/privacy`)**: Zero tracking, zero commercialization, client-side data sovereignty, and instant JSON data export/deletion.

---

## Documentation Directory

- [Architecture & System Design](docs/ARCHITECTURE.md)
- [Editorial & Theological Review Handbook](docs/EDITORIAL_HANDBOOK.md)
- [Lexi Operations Assistant Guide](docs/LEXI_OPERATIONS_GUIDE.md)
- [Deployment, Infrastructure & Recovery Guide](docs/DEPLOYMENT_AND_RECOVERY_GUIDE.md)

---
© 2026 Logos Lexicon. All rights reserved. Directed by Rev. Ayan Kumar Ghosh.
