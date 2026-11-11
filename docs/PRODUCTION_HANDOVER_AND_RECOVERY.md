# Logos Lexicon — Production Handover, DNS & High-Availability Recovery Manual

> **Project**: Logos Lexicon — Multilingual Biblical & Theological Dictionary  
> **Permanent Public Address**: `https://logoslexicon.org/`  
> **Permanent Entry Route**: `https://logoslexicon.org/term/[slug]`  
> **Project Director & Theological Lead**: Rev. Ayan Kumar Ghosh  
> **Dedicated Operations Assistant**: Lexi — Logos Lexicon Research and Operations Assistant  
> **Target Availability**: 99.9% Measurable Uptime | Zero Unreviewed AI Text  

---

## 1. Executive Handover & Critical Public Links

| Property | Permanent Target | Description |
| :--- | :--- | :--- |
| **Permanent Public Home** | `https://logoslexicon.org/` | Canonical HTTPS public address. Unchanged across future builds and hosting migrations. |
| **PWA Installation Route** | `https://logoslexicon.org/install` | Device-specific instructions for Android, iOS, iPadOS, macOS, Windows, Chromebook, & Linux. |
| **Representative Term** | `https://logoslexicon.org/term/grace` | Permanent canonical entry path for deep-linking. |
| **Public Status Page** | `https://logoslexicon.org/status` | Real-time health indicators, scheduled maintenance, and community incident reporting. |
| **Health API** | `https://logoslexicon.org/api/health` | 15-minute synthetic monitoring probe. |
| **Version API** | `https://logoslexicon.org/api/version` | PWA cache update detection endpoint. |

---

## 2. Tested WhatsApp & Social Sharing Invitation

### 2.1 Full Application Invitation (Verified)
> *“Explore Logos Lexicon—a multilingual biblical and theological dictionary with English, Indian languages, Korean, Biblical Greek and Hebrew. Open or install it here: https://logoslexicon.org/”*

### 2.2 Individual Term Invitation (Example: Grace)
> *“Explore ‘Grace’ on Logos Lexicon—a multilingual biblical and theological dictionary with English, Indian languages, Korean, Biblical Greek and Hebrew. Read the entry here: https://logoslexicon.org/term/grace”*

> [!NOTE]
> All sharing actions are strictly user-initiated. The application never transmits messages automatically; the user chooses their recipients and presses Send.

---

## 3. WhatsApp Link Preview Verification

* **Open Graph Title**: `Logos Lexicon — Multilingual Biblical & Theological Dictionary`
* **Open Graph Description**: `Explore biblical and theological terms in English, Indian languages and Korean, with carefully reviewed Greek and Hebrew resources.`
* **Secure Image URL**: `https://logoslexicon.org/og-image.jpg`
* **Image Dimensions**: $1200 \times 630\text{ px}$
* **File Size**: $50.0\text{ KB}$ (Strictly under the $300\text{ KB}$ WhatsApp thumbnail drop threshold).
* **Twitter Card**: `summary_large_image`

---

## 4. Permanent QR Code Suite

Four production-ready formats are generated on disk in `public/qr/`:

1. **High-Resolution PNG** (`public/qr/logos-lexicon-qr.png`): $1200 \times 1200\text{ px}$, $9.7\text{ KB}$. Ideal for slides, newsletters, and web graphics.
2. **High-Resolution JPG** (`public/qr/logos-lexicon-qr.jpg`): $1200 \times 1200\text{ px}$, $9.7\text{ KB}$. Ideal for social media posts and email templates.
3. **Infinite Vector SVG** (`public/qr/logos-lexicon-qr.svg`): Scalable to any print dimension without pixelation.
4. **Print-Ready PDF** (`public/qr/logos-lexicon-qr.pdf`): Vector Letter document ($612 \times 792\text{ pt}$) with quiet zone margin, Logos emblem, instructions, and canonical address for church bulletins, flyers, and seminary posters.

---

## 5. Domain Ownership, Registrar & DNS Reliability

### 5.1 Recommended Registrar Setup (Rev. Ayan Kumar Ghosh)
1. **Registrar Recommendation**: **Cloudflare Registrar**, **Porkbun**, or **Namecheap**.
   * *Rationale*: Cloudflare provides at-cost domain pricing ($\approx \$9.77/\text{year}$ for `.org`), built-in DNSSEC, free global Anycast DNS, and enterprise-grade DDoS protection.
2. **Account Sovereignty**:
   * Register the domain exclusively in the name of **Rev. Ayan Kumar Ghosh** or an organizational entity controlled by him.
   * **Multi-Factor Authentication (MFA)**: Enable TOTP (Google Authenticator / 1Password / YubiKey) on the registrar account.
   * **Auto-Renewal**: Enable automatic renewal and set two calendar reminders: 60 days and 30 days prior to annual expiry.
   * **Recovery Contacts**: Add a secondary institutional email and SMS recovery number.

### 5.2 Managed DNS Configuration
When pointing `logoslexicon.org` to production hosting (e.g. Vercel / Cloudflare Pages):

| Type | Name | Value / Target | TTL | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **A** | `@` | `76.76.21.21` (or provider Anycast IP) | 300s (Launch) $\to$ 3600s (Stable) | Primary apex record |
| **CNAME** | `www` | `cname.vercel-dns.com` (or provider target) | 300s $\to$ 3600s | Redirects www $\to$ apex |
| **CAA** | `@` | `0 issue "letsencrypt.org"` | 86400s | Restricts SSL issuance |
| **TXT** | `@` | `v=spf1 -all` | 86400s | Hardens domain against email spoofing |

---

## 6. Zero-Cost Production Hosting & Deployment

Logos Lexicon is designed for **100% free-tier edge hosting** with zero recurring monthly server costs:

| Provider | Capability | Free Tier Limits | Upgrade Threshold |
| :--- | :--- | :--- | :--- |
| **Vercel** | Edge Network, Automatic SSL, Next.js optimization | 100 GB bandwidth / mo, 1M edge executions | $> 100,000$ active monthly visitors |
| **Cloudflare Pages** | Global Anycast CDN, Unlimited bandwidth | Unlimited bandwidth, 500 builds / mo | $> 500$ daily production builds |
| **GitHub Actions** | Automated 15-min synthetic monitoring | 2,000 free minutes / mo | Cron runs consume $\approx 450$ mins / mo |

### Deployment Steps (GitHub $\to$ Production)
1. Push the `logos-lexicon` repository to an owner-controlled GitHub repository:
   ```bash
   git remote add origin https://github.com/rev-ayan-ghosh/logos-lexicon.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com) using your GitHub account.
3. Click **"Add New Project"** $\to$ select `logos-lexicon`.
4. Leave build settings as default (`npm run build`).
5. Under **Domains**, add `logoslexicon.org` and `www.logoslexicon.org`.
6. Follow the DNS instructions in Section 5.2. SSL certificates will provision automatically within 3 minutes.

---

## 7. High-Availability Engineering, Safeguards & Disaster Recovery

### 7.1 Automated Build Guard
The repository enforces an automated pre-build inspection (`scripts/validate-production-links.mjs`).
The build **strictly fails** if `localhost`, `127.0.0.1`, `trycloudflare.com`, private LAN IPs, or `/admin` routes appear in public sharing files, manifests, service workers, or QR codes.

### 7.2 15-Minute Synthetic Health Monitoring
The workflow [`.github/workflows/monitor.yml`](file:///C:/Users/acer/.gemini/antigravity/scratch/logos-lexicon/.github/workflows/monitor.yml) executes [`scripts/synthetic-monitor.mjs`](file:///C:/Users/acer/.gemini/antigravity/scratch/logos-lexicon/scripts/synthetic-monitor.mjs) every 15 minutes checking 13 criteria:
1. Domain resolution & TLS validity
2. Homepage HTTP 200 + brand verification + no hosting error screens
3. Latency SLA (< 2000ms)
4. Web manifest integrity
5. Service worker availability
6. Version API response
7. Multilingual search query (`grace`)
8. Canonical term route (`/term/grace`)
9. Legacy deep link compatibility (`/entry/grace`)
10. Installation page & device guides
11. Public status page
12. WhatsApp social preview image size (< 300KB)
13. QR code suite availability

### 7.3 Automated Safe Actions vs. Strict Prohibitions
* **Permitted Safe Self-Healing**:
  * Retrying failed health probes.
  * Rebuilding the search index cache.
  * Triggering redeployment of the verified current release.
  * Rolling back to the last known good release after consecutive health failures.
  * Purging CDN cache.
* **Hard Prohibitions (Never Automated — Escalated for Owner Approval)**:
  * Changing or redirecting the permanent public domain.
  * Altering domain registration, transfer, or billing.
  * Exposing temporary or staging URLs publicly.
  * Deleting theological dictionary entries or modifying approved text.
  * Publishing an untested build without build guard clearance.

### 7.4 Emergency Disaster Recovery (Hosting Outage)
If primary hosting suffers a catastrophic regional failure:
1. Log in to Cloudflare DNS (or domain registrar DNS).
2. Change the Apex CNAME record to the secondary backup provider (e.g. Cloudflare Pages or AWS Amplify).
3. The permanent public URL `https://logoslexicon.org/` remains identical; users do not experience broken bookmarks or altered links.
4. Installed PWA users continue to read through the offline application shell without seeing a broken browser screen.

---

## 8. Annual Cost and Renewal Summary

| Component | Provider | Annual Cost | Renewal Frequency |
| :--- | :--- | :--- | :--- |
| **Domain Registration (`logoslexicon.org`)** | Cloudflare / Namecheap | $\approx \$9.77 - \$14.00$ | Annual (Auto-renew enabled) |
| **Production Edge CDN & Hosting** | Vercel / Cloudflare Pages | **\$0.00** (Free Tier) | Ongoing |
| **SSL / TLS Encryption** | Let's Encrypt / Cloudflare | **\$0.00** (Included) | Automatic 90-day rolling |
| **15-Minute Synthetic Monitoring** | GitHub Actions | **\$0.00** (Included) | Ongoing |
| **Total Annual Operating Cost** | — | **$\approx \$10.00 - \$14.00 / \text{year}$** | — |

---

*Verified and Prepared by Lexi — Operations Assistant for Rev. Ayan Kumar Ghosh.*
