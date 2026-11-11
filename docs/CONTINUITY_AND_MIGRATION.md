# Long-Term Continuity & Provider Migration Guide
## Preserving Logos Lexicon for Decades of Open Theological Scholarship

> **Project**: Logos Lexicon — Multilingual Biblical & Theological Dictionary  
> **Permanent Domain**: `https://logoslexicon.org/`  
> **Final Authority**: Rev. Ayan Kumar Ghosh (Level 5)

---

## 1. Portable Open Data Formats

Logos Lexicon stores its authoritative records in vendor-neutral, future-proof formats located in `data/exports/`:

1. **Open JSON (`logos_lexicon_full_export.json`)**:
   - Machine-readable, self-describing schema containing all 100 master entries, 3-tier reading levels (Simple, Study, Academic), original language lemmas, Strong's numbers, transliterations, and Bengali translations.
2. **Scholarly TEI P5 XML (`logos_lexicon_tei.xml`)**:
   - Compliant with the international Text Encoding Initiative (TEI P5) standard for digital humanities, university libraries, and ecclesiastical archives.
3. **ANSI Relational SQL (`logos_lexicon_schema.sql`)**:
   - Clean ANSI SQL schema with DDL and `INSERT` statements directly executable on PostgreSQL, MySQL, SQLite, and MariaDB.

---

## 2. Multi-Provider Deployment & Migration Runbooks

Logos Lexicon is architected with zero proprietary lock-in. It can be hosted on any modern platform:

### Target A: Permanent Cloudflare Pages / Vercel (Edge Deployment)
- Repository linked to protected production branch.
- Automated build command: `npm run build`.
- Output directory: `.next` / standalone.
- Environment variables: `LOGOS_ADMIN_SECRET`, `LOGOS_ADMIN_PASSCODE`, `LOGOS_EMERGENCY_PASSKEY`.

### Target B: Self-Hosted Container (Docker / Coolify / Portainer)
```dockerfile
# Multi-stage Dockerfile for containerized deployment
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

### Target C: Bare-Metal Linux VPS (Systemd Daemon)
```ini
[Unit]
Description=Logos Lexicon Production Server
After=network.target

[Service]
Type=simple
User=logos
WorkingDirectory=/var/www/logos-lexicon
ExecStart=/usr/bin/npm run start
Restart=on-failure
Environment=NODE_ENV=production PORT=3000

[Install]
WantedBy=multi-user.target
```

---

## 3. End-of-Life (EOL) & Renewal Auditing Schedule

| Asset | Provider / Registrar | Audit Frequency | Alert Thresholds | Owner Action |
| :--- | :--- | :--- | :--- | :--- |
| **Domain (`logoslexicon.org`)** | Namecheap / Cloudflare | Monthly | 60, 30, 14, 7, 1 days | Ensure auto-renewal card valid |
| **SSL/TLS Certificates** | Let's Encrypt / Cloudflare | Daily (Automated) | 60, 30, 14, 7, 1 days | Automated ACME renewal check |
| **Primary VPS / Server** | Railway / Hetzner / DigitalOcean | Monthly | 30, 14, 7 days | Review usage & invoice payments |
| **Automated Backups** | Local & Cloud S3 / B2 | Hourly / Daily | > 24 hours without backup | Review backup manifest |
| **Node.js LTS Version** | Node.js Foundation | Bi-annual | LTS EOL within 6 months | Rehearse upgrade on staging |
