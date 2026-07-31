import type { CaseStudy } from "./types";

/** All specific metrics live here (in the `impact` arrays), attributed & in context. */
export const caseStudies: Record<string, CaseStudy> = {
  "hospital-command-center": {
    slug: "hospital-command-center",
    title: "Hospital Command Center",
    tagline: "One real-time view of every operation.",
    industrySlug: "healthcare",
    serviceSlugs: ["software-engineering", "data-analytics"],
    client: "A leading hospital chain (Middle East)",
    overview:
      "A mission-critical decision-support platform that consolidates hospital-chain operations into a single, real-time view.",
    solution: [
      "Unified healthcare data platform across hospital operations",
      "AI-driven self-serve tools for capacity and resource planning",
      "Forecasting and recommendations for proactive decisions",
    ],
    impact: [
      "20% staff productivity gain",
      "Improved bed capacity, patient flow, and care quality",
      "Mission-critical, real-time decision support",
    ],
    tech: ["Python", "React", "FastAPI", "PostgreSQL", "GCP"],
  },

  "nurse-roster-planning": {
    slug: "nurse-roster-planning",
    title: "Nurse Roster Planning",
    tagline: "The right staff, at the right time.",
    industrySlug: "healthcare",
    serviceSlugs: ["ai-automation", "software-engineering"],
    client: "One of Asia's largest private hospital networks",
    overview:
      "An AI-driven workforce-automation platform that digitizes nurse rostering, shift management, and leave workflows across multiple hospitals — replacing manual operations with a real-time system.",
    solution: [
      "AI engine auto-generates conflict-free, compliance-ready rosters in minutes, not days",
      "Real-time workforce intelligence: staffing gaps, skill shortfalls, and overtime risks surfaced instantly",
      "Self-service for nurses, plus a command center for leaders",
      "Multi-level AI-assisted approvals and automated rule enforcement across wards and hospitals",
    ],
    impact: [
      "Roster planning cut from days to minutes",
      "Real-time shift visibility and self-service for nurses",
      "Improved staffing compliance across a multi-hospital network",
      "Scalable, secure architecture replacing a legacy PowerApps system",
      "New capabilities: push notifications, I.D.E.A.S. module, AI regeneration",
    ],
    tech: [
      "React 19 + TypeScript + Vite",
      "Databricks Apps + Lakebase (PostgreSQL)",
      "Microsoft Entra ID (SSO + RBAC)",
      "Azure (Key Vault, App Gateway, DevOps CI/CD)",
      "PWA (offline, iOS + Android)",
      "Unity Catalog + Azure Application Insights",
    ],
  },

  "core-banking-modernization": {
    slug: "core-banking-modernization",
    title: "Core Banking Modernization",
    tagline: "Migrate without the downtime.",
    industrySlug: "banking-finance",
    serviceSlugs: ["software-engineering"],
    client: "A bank modernizing its core systems",
    overview:
      "A legacy-to-modern platform migration — old and new core systems running side by side, with continuous operations throughout the transition and automated security checks before every release.",
    solution: [
      "Removed manual tracking of which customers had migrated",
      "Upgraded rigid legacy connections to a faster, more flexible modern format",
      "Ensured zero downtime and no data loss during the transition",
      "Added automated security checks before every release",
    ],
    features: [
      "Automatic system routing — no manual switching",
      "Works across customer accounts, banking records, and fund transfers",
      "Fast lookup to check customer status instantly",
      "Built-in backup and safety checks during transition",
      "Continuous security scanning before deployment",
    ],
    impact: [
      "~30–40% reduced response times",
      "Zero-downtime migration with no operational disruption",
      "~25–30% faster delivery of new banking features",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Redis",
      "REST APIs",
      "Azure",
      "Docker",
      "Kubernetes",
      "Codegen",
      "Retrofit Client",
    ],
  },

  "back-office-control-audit": {
    slug: "back-office-control-audit",
    title: "Back-Office Control & Audit",
    tagline: "One governed surface for privileged operations.",
    industrySlug: "banking-finance",
    serviceSlugs: ["software-engineering"],
    client: "A leading regional bank",
    overview:
      "A centralized back-office platform that unifies access, control, and audit across sensitive banking APIs and configuration.",
    problem: [
      "Sensitive backend APIs configurable only by engineers — no controlled self-serve interface",
      "No unified, traceable access control across privileged banking operations",
      "Fragmented logins as the bank migrated from legacy SSO to Keycloak",
    ],
    solution: [
      "Single back-office portal federated across two identity providers (legacy SSO3 + Keycloak)",
      "Three-layer security: user session → page-level authorization → OAuth2 token on every backend call",
      "Append-only audit log of every privileged action (logins, bank edits, RSA rotation, template changes)",
      "Governed modules: multi-bank management, RSA key-version rotation, notification-provider config",
      "End-to-end correlation-ID tracing on every service call",
    ],
    impact: [
      "Federated SSO with zero disruption during the SSO → Keycloak migration",
      "Full, queryable audit trail for compliance and governance",
      "Faster incident diagnosis via end-to-end request tracing",
      "One governed surface for APIs, bank data, and security config",
    ],
    tech: [
      "Next.js 14 + React 18 + TypeScript",
      "Tailwind CSS + AG Grid Enterprise",
      "SSO3 (JWT session) + Keycloak via NextAuth",
      "OAuth2 Client-Credentials (service-to-service auth)",
      "MSSQL (audit trail)",
      "Pino + next-logger (structured logging)",
      "Docker + Azure Pipelines (CI/CD)",
    ],
  },

  "self-serve-customer-alerts": {
    slug: "self-serve-customer-alerts",
    title: "Self-Serve Customer Alerts",
    tagline: "Business-owned notifications, safely.",
    industrySlug: "banking-finance",
    serviceSlugs: ["software-engineering"],
    client: "A leading regional bank",
    overview:
      "A self-serve notification template and multi-party alert routing engine — letting business teams author and publish customer Email/SMS alerts without engineering.",
    problem: [
      "Alert templates hard-coded and engineering-deployed — no business self-serve",
      "Multi-party events (payout sender + receiver) forced duplicated, error-prone configs",
      "Manual payload-to-placeholder mapping with no pre-publish validation",
      "No safe way to mask sensitive fields (e.g. account numbers) in messages",
      "No preview of the real customer Email/SMS before go-live",
    ],
    solution: [
      "No-code, two-step Template Manager — author Email (WYSIWYG) + SMS with tokens",
      "Configuration-to-Target with Target-ID pairing — one config fans out to independent parties and channels",
      "Operation-based parameter mapping (Identity, Concat, Substring, Date Format/Compose, Value) including field masking",
      "Payload-validated live preview — import a real event, validate paths, simulate output before publish",
      "Secure BFF — every change authenticated, service-authorized, traced, and audit-logged",
    ],
    impact: [
      "Business teams publish alerts with zero engineering involvement",
      "One config serves multi-party events — no duplicated templates",
      "Sensitive data masked in-template — reduced PII/PCI exposure",
      "Broken mappings caught before customers see them",
      "Every change audited end-to-end — no untracked path to production",
    ],
    tech: [
      "Next.js 14 BFF + React 18 + TypeScript",
      "Zustand + TanStack React Query",
      "React Hook Form + Zod",
      "TipTap v3 + DOMPurify (rich, sanitized editor)",
      "Redis + Kafka / CloudEvents",
      "OAuth2 service auth + correlation-ID tracing",
      "Jest + Testing Library (250+ automated tests)",
    ],
  },

  "retail-store-intelligence": {
    slug: "retail-store-intelligence",
    title: "Real-Time Store Intelligence",
    tagline: "See what converts, as it happens.",
    industrySlug: "retail",
    serviceSlugs: ["ai-automation", "data-analytics"],
    client: "A US convenience retail chain",
    overview:
      "A real-time intelligence platform that fuses three data streams into one operational dashboard, with a multi-agent AI system that operates as a virtual store-management team.",
    problem: [
      "Sales data disconnected from physical store behavior",
      "CCTV footage reviewed reactively, never analytically",
      "No way to correlate foot traffic with revenue at the zone level",
    ],
    solution: [
      "Real-time platform fusing POS transactions, in-store camera frames, and a store/zone/product journey graph into one dashboard",
      "Multi-agent AI system operating as a virtual store-management team",
      "Live correlation of foot traffic to revenue at the zone level",
    ],
    impact: [
      "Improved sales",
      "Increased compliance",
      "Reduced stock-outs",
      "Reduced incidents",
      "Real-time insight into which zones convert traffic into sales, plus stock-outs and queue build-up",
    ],
    tech: [
      "Python 3.12",
      "FastAPI",
      "MongoDB",
      "FalkorDB",
      "LiteLLM",
      "VLM interface (LLaVA / Qwen-VL)",
      "CrewAI",
    ],
  },

  "ai-creative-generation": {
    slug: "ai-creative-generation",
    title: "AI Creative Generation",
    tagline: "Campaign-ready visuals, on demand.",
    industrySlug: "automotive",
    serviceSlugs: ["ai-automation"],
    client: "A global automotive company",
    overview:
      "A marketing creative platform — AI product photography and campaign-ready visuals, produced and validated at scale.",
    solution: [
      "AI-driven product photography",
      "Instant, campaign-ready visuals",
      "Scalable generation across every product variation",
      "Compliance built into the creative workflow",
    ],
    features: [
      "Brand management",
      "Creative generation",
      "Campaign set-up",
      "Creative review and regeneration",
      "Packaging and delivery",
    ],
    impact: [
      "On-demand, high-quality assets",
      "A single shoot covers all product variations",
      "Cost and productivity gains",
    ],
    tech: [
      "Gemini 2.5 Flash Image (generation / validation)",
      "3P packaging API",
      "GCS + Firestore (storage)",
      "TypeScript",
      "GCP",
    ],
  },

  "ai-media-qc": {
    slug: "ai-media-qc",
    title: "AI Media Quality Control",
    tagline: "Automated audio-video validation.",
    industrySlug: "media-entertainment",
    serviceSlugs: ["ai-automation"],
    client: "A media & entertainment company",
    overview:
      "An AI system that automates the video quality-control process — detecting anomalies across language, visuals, and audio, with timestamp-based reports.",
    problem: [
      "Video QC was manual — slow, costly, and hard to scale",
      "Compliance accuracy depended on manual review",
    ],
    solution: [
      "AI system to detect anomalies across a title",
      "Linguistic analysis",
      "Visual inspection",
      "Audio evaluation",
      "Timestamp-based anomaly reports",
    ],
    impact: [
      "70% QC time reduction",
      "Reduced publishing delays",
      "85% compliance accuracy",
    ],
    tech: ["Postgres", "MongoDB", "Gemini 2.0 Flash", "Veo 2.0", "Compute Engines"],
  },

  "privacy-safe-data-collaboration": {
    slug: "privacy-safe-data-collaboration",
    title: "Privacy-Safe Data Collaboration",
    tagline: "Share data without exposing it.",
    industrySlug: "media-entertainment",
    serviceSlugs: ["data-analytics"],
    client: "One of the world's largest media investment companies",
    overview:
      "A data collaboration platform overcoming native Snowflake limitations — secure, privacy-safe, multi-party data sharing for advertising and media.",
    solution: [
      "Secure multi-party data sharing across advertisers, agencies, and data partners",
      "Multi-provider enrichment",
      "Automated workflows",
      "DSP activation",
      "GDPR / CCPA compliant by design",
    ],
    impact: [
      "5 ad platforms activated via a single unified interface",
      "10M+ records processed",
      "Zero PII leakage",
      "50+ data partners supported",
    ],
    tech: ["Snowflake", "Python", "React", "FastAPI", "PostgreSQL", "AWS"],
  },

  "subscriber-revenue-intelligence": {
    slug: "subscriber-revenue-intelligence",
    title: "Subscriber & Revenue Intelligence",
    tagline: "One source of truth for subscribers.",
    industrySlug: "ott-streaming",
    serviceSlugs: ["data-analytics"],
    client: "A regional OTT streaming platform",
    overview:
      "An end-to-end analytics pipeline and multi-dashboard reporting system — unifying fragmented subscription, payment, and viewing data into a single source of truth.",
    solution: [
      "Automated pipeline syncing user & subscription records from MongoDB into BigQuery",
      "Verified identity bridge linking anonymous app events to known paid subscribers",
      "5-bucket dashboard: Revenue, Mandates, Engagement, Stickiness, Frequency",
      "Reliable active-subscriber tracking across conflicting legacy signals",
      "Multi-gateway mandate (auto-renewal) tracking across 5 payment providers",
    ],
    impact: [
      "620K+ subscribers trackable in a single dashboard",
      "78.3% Day-1 paid-user retention visibility",
      "Full revenue-health visibility: new, renewed, churned, and at-risk subscribers",
      "Faster detection of failed renewals across payment gateways",
      "Content-performance and audience-stickiness insights",
    ],
    tech: [
      "MongoDB Atlas",
      "AWS Lambda (Python)",
      "Google BigQuery",
      "Firebase Analytics",
      "Google Looker Studio",
    ],
  },

  "hospital-at-home": {
    slug: "hospital-at-home",
    title: "Hospital-at-Home Platform",
    tagline: "Acute care, safely delivered at home.",
    industrySlug: "healthcare",
    serviceSlugs: ["software-engineering", "ai-automation", "data-analytics"],
    client: "A health system running a hospital-at-home program across Saudi Arabia",
    overview:
      "A clinical operations platform for delivering acute-level hospital care inside patients' homes — safely, compliantly, and at scale. It governs the full episode from referral, admission, or transfer through eligibility review, in-home assessment, active remote care, and discharge, with every decision documented in one system of record and built for the Saudi (MOH / CBAHI) regulatory environment.",
    problem: [
      "Clinically stable patients occupy inpatient beds with no governed way to move them home — constraining capacity and delaying higher-acuity admissions.",
      "Home-care coordination runs on phone calls and informal handoffs — no single source of truth, and decisions go undocumented.",
      "No structured home-eligibility process — accessibility, caregiver presence, and power/internet are assessed inconsistently, creating clinical and liability risk.",
      "Compliance and audit exposure — informal identity checks and undocumented rationale against rising CBAHI / MOH expectations.",
    ],
    solution: [
      "One governed pathway from intake to discharge, with three structured entry points — referral, admission, and transfer.",
      "Physician medical-review queue where every approval or rejection carries a documented rationale, tracked against a 24-hour SLA.",
      "A formal 4-section home-eligibility assessment (clinical stability, caregiver & social support, home safety, technology readiness) with a geolocation-confirmed address.",
      "Role-sensitive dashboards — coordinator, physician, home-health nurse, and facility administrator each see only what they need to act on.",
      "Active remote care: vital-signs monitoring, progress notes, prescriptions, scheduling, video consults, and home-visit logistics with live fleet tracking.",
    ],
    features: [
      "Structured intake (referral / admission / transfer) with ICD-10 coding",
      "Remote vital-signs monitoring, medication tracking, and clinical alerts",
      "Video consultations and second-opinion escalation",
      "Fleet management, driver assignment, and a live map of active visits",
      "Multi-facility user management with role-based access and license-validity tracking",
    ],
    impact: [
      "Frees inpatient capacity by safely shifting stable patients into home care",
      "CBAHI / MOH audit-readiness by default — every action on an immutable audit trail",
      "Strict per-facility data isolation across a multi-hospital deployment",
      "One governed record for the full episode — no ghost records, and nothing is ever deleted",
    ],
    // tech intentionally omitted for now (to be added later)
  },
};

export const getCaseStudy = (slug?: string) =>
  slug ? caseStudies[slug] : undefined;
