# Logos Lexicon — Deployment, Infrastructure & Recovery Guide

**Project Owner:** Rev. Ayan Kumar Ghosh  
**Target:** 100% Zero-Cost Initial Phase with seamless scaling path to dedicated production infrastructure.

---

## 1. Zero-Cost Infrastructure (Phase 1)

All foundational development and staging operate on 100% free-tier architecture:
- **Application Hosting**: Vercel Hobby Tier / Cloudflare Pages (Free global edge CDN, unlimited bandwidth for personal/non-profit use).
- **Database**: Local SQLite for development; Supabase Free Tier (500 MB PostgreSQL) or Neon Serverless Postgres (Free tier) for hosted staging.
- **Source Control**: GitHub Private Repository (Free).
- **DNS & SSL**: Cloudflare Free Tier (Universal SSL, HTTP/3, DDoS mitigation).
- **Synthetic Monitoring**: External Cron-Job or UptimeRobot Free (5-minute HTTP checks against `/api/health`).

---

## 2. Production Deployment Procedure

Before any public deployment:
1. Run local automated verification test suite:
   ```powershell
   powershell -ExecutionPolicy Bypass -File .\test-endpoints.ps1
   ```
2. Build optimized production assets:
   ```bash
   npm run build
   ```
3. Scan for exposed secrets or temporary development URLs (e.g. `localhost`, tunnels).
4. Verify Web App Manifest and Service Worker registration.
5. Deploy to permanent production hosting.

---

## 3. Disaster Recovery & Rollback

- **Immutable Releases**: Every production deployment is tagged with a semantic version number (e.g. `v1.0.0`).
- **Last Known Good (LKG)**: If a deployed release fails post-deployment smoke tests, the host CDN is rolled back instantly to the prior verified release commit.
- **User Data Safety**: Because user bookmarks, notes, and preferences reside in browser `localStorage` and `IndexedDB`, client-side state is preserved across software rollbacks.
