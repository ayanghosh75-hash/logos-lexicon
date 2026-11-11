# Independent External Watchdog Specification
## Out-of-Band Monitoring & Autonomous Alerting Daemon

> **Component**: Independent External Watchdog (`watchdog/logos-watchdog.mjs`)  
> **Governance**: Level 3 Automated Service under Level 5 Oversight  
> **Target**: `https://logoslexicon.org/` (Local development fallback: `http://localhost:3000`)

---

## 1. Architectural Independence

The Watchdog is built to be strictly decoupled from the primary application:
- **Separate Runtime**: Runs as an independent process outside Next.js.
- **Zero Internal Imports**: Relies solely on Node.js core modules (`http`, `https`, `tls`, `dns`, `fs`, `path`, `crypto`).
- **No Unrestricted Credentials**: Possesses zero database-owner, server-root, or DNS-modification privileges.

---

## 2. 15 Monitored Dimensions

| Check # | Target Dimension | Verification Criteria | Alert Threshold / Action |
| :--- | :--- | :--- | :--- |
| **1** | DNS Domain Resolution | Queries `logoslexicon.org` records | Warning if DNS fails to resolve |
| **2** | HTTPS & TLS Validity | Inspects SSL peer certificate expiration | Active alert tiers: 60, 30, 14, 7, and 1 days |
| **3** | Homepage Availability | Checks HTTP 200 and brand markup | Alert if status != 200 or brand missing |
| **4** | Safe Health Endpoint | Polls `/api/health` without exposing secrets | Verifies DB status is `CONNECTED` |
| **5** | Admin Portal Availability | Passive HTTP probe on `/admin/login` | Verifies portal active without unauthorized login attempts |
| **6** | Search Accuracy | Queries `/api/entries?q=grace` | Validates canonical term "Grace" and Greek lemma |
| **7** | Latency SLA | Measures canonical route response time | SLA alert if latency >= 2000ms |
| **8** | Storage Health | Confirms data directory accessibility | Alert if data partition full or unreadable |
| **9** | Backup Freshness | Checks latest snapshot in `backups/` | Alert if latest backup > 24h old or hash corrupt |
| **10** | Rate Limiting Status | Confirms bot mitigation guards are armed | Alert if rate limit middleware is bypassed |
| **11** | Anti-Tamper Check | Verifies canonical term content integrity | Alert if headword definition altered unexpectedly |
| **12** | Domain & Lifecycle | Tracks renewal dates across services | Annual audit alerts configured |
| **13** | Static Recovery Fallback | Verifies `/recovery/index.html` reachable | Confirms zero-dependency emergency fallback |
| **14** | Offline Shell Fallback | Verifies `/offline.html` reachable | Ensures PWA offline capability |
| **15** | Zero 3D Assets Footprint | Confirms zero Three.js or WebGL in bundle | Critical alert if 3D libraries re-introduced |

---

## 3. Dual-Failure Protocol

If **both LOGOS Lexicon and Lexi** become unreachable:
1. The Watchdog immediately generates a critical alert addressed to **Rev. Ayan Kumar Ghosh** (`rev.ayankumarghosh@logoslexicon.org`).
2. Activates preapproved emergency recovery routing: direct instructions pointing to the static, zero-dependency recovery console at `/recovery/index.html` with passkey authentication (`LogosRecovery2026!RevGhosh`).
