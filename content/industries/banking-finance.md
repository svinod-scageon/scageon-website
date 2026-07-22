# Industry: Banking & Finance — FINAL CONTENT

> Status: **Drafted from source docs** — `Core_Banking_Modernization.docx` + `EWB bank Back office [ short version ].docx`.
> Naming rule (per client): **no product codenames** — descriptive titles. Client names anonymized (deck style).
> Structure mirrors `healthcare.md`.

---

## 1. Hero (dark band)

- **Eyebrow:** `⊙ BANKING & FINANCE`
- **Headline (describes what we build):** *We build production-grade platforms for banking and finance — from zero-downtime core migrations to governed back-office control and self-serve customer messaging.*
- **Sub:** Engineered for regulated, mission-critical environments where security, auditability, and uptime can't slip.
- **CTA:** Explore our banking work ↓ · Talk to us →

## 2. The Landscape *(what it is)*

Banking runs on legacy core systems, fragmented access control, and unforgiving regulatory and audit demands — where a single change can mean downtime, data loss, or a compliance gap. Scageon modernizes core platforms and back-office operations with **zero-downtime migration, end-to-end auditability, and security built into every release** — so banks can move faster without putting live operations at risk.

## 3. What We Do Here *(solutions — 3 cards, each with "View case study →")*

Each card: **descriptive title · tagline · what it is · what it delivers · [View case study →]**

---

### Card 1 — Core Banking Modernization
**Tagline:** Migrate without the downtime.

- **What it is:** A legacy-to-modern platform migration that lets old and new core systems run side by side, with no disruption to live banking operations.
- **What it delivers:** Automatic system routing (no manual switching), instant customer-status lookup, built-in backup and safety checks, and continuous security scanning before every release — a faster, more flexible core with zero data loss.
- **`View case study →`** (Case Study A)

---

### Card 2 — Back-Office Control & Audit
**Tagline:** One governed surface for privileged operations.

- **What it is:** A centralized back-office portal that unifies access, control, and audit across sensitive banking APIs and configuration.
- **What it delivers:** Federated single sign-on across two identity providers, three-layer security (session → page authorization → per-call token), an append-only audit log of every privileged action, and end-to-end request tracing.
- **`View case study →`** (Case Study B)

---

### Card 3 — Self-Serve Customer Alerts
**Tagline:** Business-owned notifications, safely.

- **What it is:** A no-code template and routing engine that lets business teams author and publish customer Email/SMS alerts without engineering.
- **What it delivers:** A two-step template manager, one config that fans out to multiple parties and channels, field masking for sensitive data, and payload-validated live preview — so broken mappings are caught before any customer sees them.
- **`View case study →`** (Case Study C)

## 4. Outcomes *(qualitative teaser strip — NO standalone number tiles)*

> Rule: **all specific numbers live in the case studies** (Section 5), in context and attributed.
> This strip states outcomes qualitatively and links inward to the proof.

- Faster, more responsive core systems — *see Core Banking Modernization →*
- Zero-downtime migrations with no data loss — *see Core Banking Modernization →*
- Governed, fully auditable privileged operations — *see Back-Office Control & Audit →*
- Safer customer messaging, business-owned — *see Self-Serve Customer Alerts →*

*(Each line links to its case study, where the measured numbers live.)*

## 5. Case Studies *(the "view more" detail behind each card)*

### Case Study A — Core Banking Modernization
*Legacy-to-Modern Platform Migration · Banking / Core Systems.*
- **Overview:** Modernized a bank's core systems for a smooth platform upgrade — old and new systems running together without disruption, ensuring continuous operations throughout the transition, with security strengthened by automated checks before every release.
- **Solution:** Removed manual tracking of which customers had migrated · upgraded rigid legacy connections to a faster, more flexible modern format · ensured zero downtime and no data loss · added automated security checks before every release.
- **Features:** Automatic system routing (no manual switching) · works across customer accounts, banking records, and fund transfers · fast lookup to check customer status instantly · built-in backup and safety checks during transition · continuous security scanning before deployment.
- **Impact:** Upgraded to a faster, more modern platform · ~30–40% reduced response times · zero-downtime migration with no operational disruption · ~25–30% faster feature delivery.
- **Technology:** Java · Spring Boot · Redis · REST APIs · Azure (cloud infrastructure) · Docker · Kubernetes · Codegen · Retrofit Client.

### Case Study B — Back-Office Control & Audit
*Centralized Back-Office API Management & Audit Platform · a leading regional bank.*
- **Problem:** Sensitive backend APIs were configurable only by engineers (no controlled self-serve interface); no unified, traceable access control across privileged operations; fragmented logins during a migration from legacy SSO to Keycloak.
- **Solution:** A single back-office portal federated across two identity providers (legacy SSO3 + Keycloak) · three-layer security: user session → page-level authorization → OAuth2 token on every backend call · append-only audit log of every privileged action (logins, bank edits, RSA rotation, template changes) · governed modules: multi-bank management, RSA key-version rotation, notification-provider config · end-to-end correlation-ID tracing on every service call.
- **Impact:** Federated SSO with zero disruption during the SSO → Keycloak migration · full, queryable audit trail for compliance & governance · faster incident diagnosis via end-to-end request tracing · one governed surface for APIs, bank data, and security config.
- **Technology:** Next.js 14 + React 18 + TypeScript · Tailwind CSS + AG Grid Enterprise · SSO3 (JWT session) + Keycloak via NextAuth · OAuth2 Client-Credentials (service-to-service auth) · MSSQL (audit trail) · Pino + next-logger (structured logging) · Docker + Azure Pipelines (CI/CD).

### Case Study C — Self-Serve Customer Alerts
*Self-Serve Notification Template & Multi-Party Alert Routing Engine · a leading regional bank.*
- **Problem:** Alert templates were hard-coded and engineering-deployed (no business self-serve); multi-party events (payout sender + receiver) forced duplicated, error-prone configs; manual payload-to-placeholder mapping with no pre-publish validation; no safe way to mask sensitive fields (e.g. account numbers); no preview of the real customer Email/SMS before go-live.
- **Solution:** No-code, two-step Template Manager — author Email (WYSIWYG) + SMS with tokens · Configuration-to-Target with Target-ID pairing — one config fans out to independent parties & channels · operation-based parameter mapping (Identity, Concat, Substring, Date Format/Compose, Value) including field masking · payload-validated live preview — import a real event, validate paths, simulate output before publish · secure BFF — every change authenticated, service-authorized, traced & audit-logged.
- **Impact:** Business teams publish alerts with zero engineering involvement · one config serves multi-party events (no duplicated templates) · sensitive data masked in-template (reduced PII/PCI exposure) · broken mappings caught before customers see them · every change audited end-to-end (no untracked path to production).
- **Technology:** Next.js 14 BFF + React 18 + TypeScript · Zustand + TanStack React Query · React Hook Form + Zod · TipTap v3 + DOMPurify (rich, sanitized editor) · Redis + Kafka / CloudEvents · OAuth2 service auth + correlation-ID tracing · Jest + Testing Library (250+ automated tests).

## 6. Related Services *(cross-links)*

- **Product Engineering** → `/services/product-engineering`
- **AI Automation** → `/services/ai-automation`
- **Data & Analytics** → `/services/data-analytics`

## 7. CTA (dark band)

> Modernizing a bank without room for downtime or audit gaps? **Let's talk →** `/contact`

---

## Open items for Banking & Finance

1. Confirm the **hero headline** (descriptive line locked as draft above).
2. Confirm **descriptive card titles** (Core Banking Modernization · Back-Office Control & Audit · Self-Serve Customer Alerts).
3. **Client naming** — currently anonymized ("a leading regional bank"); decide later.
4. Any **additional metrics** for the Impact tiles (e.g. the 250+ tests, audit coverage)?
