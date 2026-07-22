import type { Industry } from "./types";

/**
 * v1 publishes Healthcare + Banking & Finance. The other four are registered
 * (so nav/overview can show them as "coming soon") but not yet published.
 * Adding content later = flip `published: true` and fill the fields.
 */
export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    eyebrow: "Healthcare",
    headline:
      "We build production-grade AI and SaaS for healthcare — from hospital command centers to intelligent workforce planning and remote patient monitoring.",
    sub: "Engineered for compliance-critical care environments, our platforms turn scattered hospital data into real-time, actionable decisions.",
    landscape:
      "Healthcare runs on data scattered across systems, under relentless staffing pressure, and bound by strict compliance. Decisions that shape patient care and capacity are still made manually or reactively. Scageon turns that fragmented data into real-time, compliant decision support — built with governance from day one — so hospitals move faster without compromising safety.",
    solutions: [
      {
        title: "Hospital Command Center",
        tagline: "One real-time view of every operation.",
        whatItIs:
          "An integrated digital platform that consolidates hospital operations into a single, real-time operational view.",
        delivers:
          "Comprehensive operational intelligence — capacity planning, resource optimization, and predictive analytics — enabling institutions to reduce delays, enhance patient outcomes, and achieve greater efficiency across operations.",
        caseStudySlug: "hospital-command-center",
      },
      {
        title: "Nurse Roster Planning",
        tagline: "The right staff, at the right time.",
        whatItIs:
          "An intelligent planning platform that helps hospitals build, balance, approve, and publish nurse rosters with speed, accuracy, and confidence.",
        delivers:
          "Automated shift scheduling, staff and leave management, request handling, and real-time reporting — cutting administrative workload, ensuring safe and compliant staffing levels, and giving care teams more time to focus on patients.",
        caseStudySlug: "nurse-roster-planning",
      },
      {
        title: "Remote Patient Monitoring",
        tagline: "Continuous care beyond hospital walls.",
        whatItIs:
          "A clinical operations platform for delivering acute-level hospital care in patients' homes — managing the full episode from referral and eligibility to remote monitoring and discharge.",
        delivers:
          "Structured intake, physician review with documented rationale, a 4-section home-eligibility assessment, remote vital-signs monitoring, video consults, and home-visit logistics — governed end to end and built for KSA (MOH / CBAHI) compliance.",
        caseStudySlug: "hospital-at-home",
      },
    ],
    outcomes: [
      { text: "Measurable staff-productivity gains", caseStudySlug: "hospital-command-center" },
      { text: "Roster planning cut from days to minutes", caseStudySlug: "nurse-roster-planning" },
      { text: "Improved bed capacity, patient flow & care quality", caseStudySlug: "hospital-command-center" },
      { text: "Compliance maintained across multi-hospital networks", caseStudySlug: "nurse-roster-planning" },
      { text: "Acute-level care delivered safely at home", caseStudySlug: "hospital-at-home" },
    ],
    relatedServices: ["software-engineering", "ai-automation", "data-analytics"],
    published: true,
  },

  {
    slug: "banking-finance",
    name: "Banking & Finance",
    eyebrow: "Banking & Finance",
    headline:
      "We build production-grade platforms for banking and finance — from zero-downtime core migrations to governed back-office control and self-serve customer messaging.",
    sub: "Engineered for regulated, mission-critical environments where security, auditability, and uptime can't slip.",
    landscape:
      "Banking runs on legacy core systems, fragmented access control, and unforgiving regulatory and audit demands — where a single change can mean downtime, data loss, or a compliance gap. Scageon modernizes core platforms and back-office operations with zero-downtime migration, end-to-end auditability, and security built into every release — so banks move faster without putting live operations at risk.",
    solutions: [
      {
        title: "Core Banking Modernization",
        tagline: "Migrate without the downtime.",
        whatItIs:
          "A legacy-to-modern platform migration that lets old and new core systems run side by side, with no disruption to live banking operations.",
        delivers:
          "Automatic system routing, instant customer-status lookup, built-in backup and safety checks, and continuous security scanning before every release — a faster, more flexible core with zero data loss.",
        caseStudySlug: "core-banking-modernization",
      },
      {
        title: "Back-Office Control & Audit",
        tagline: "One governed surface for privileged operations.",
        whatItIs:
          "A centralized back-office portal that unifies access, control, and audit across sensitive banking APIs and configuration.",
        delivers:
          "Federated single sign-on across two identity providers, three-layer security, an append-only audit log of every privileged action, and end-to-end request tracing.",
        caseStudySlug: "back-office-control-audit",
      },
      {
        title: "Self-Serve Customer Alerts",
        tagline: "Business-owned notifications, safely.",
        whatItIs:
          "A no-code template and routing engine that lets business teams author and publish customer Email/SMS alerts without engineering.",
        delivers:
          "A two-step template manager, one config that fans out to multiple parties and channels, field masking for sensitive data, and payload-validated live preview — so broken mappings are caught before any customer sees them.",
        caseStudySlug: "self-serve-customer-alerts",
      },
    ],
    outcomes: [
      { text: "Faster, more responsive core systems", caseStudySlug: "core-banking-modernization" },
      { text: "Zero-downtime migrations with no data loss", caseStudySlug: "core-banking-modernization" },
      { text: "Governed, fully auditable privileged operations", caseStudySlug: "back-office-control-audit" },
      { text: "Safer, business-owned customer messaging", caseStudySlug: "self-serve-customer-alerts" },
    ],
    relatedServices: ["software-engineering", "ai-automation", "data-analytics"],
    published: true,
  },

  {
    slug: "retail",
    name: "Retail",
    eyebrow: "Retail",
    headline:
      "We build real-time intelligence for retail — fusing point-of-sale, in-store vision, and product journeys into one operational view.",
    sub: "Multi-agent AI that works like a virtual store-management team — so every zone, queue, and shelf becomes a decision.",
    landscape:
      "Retail runs on data that rarely connects — the POS knows what sold, the cameras see what happened, but the two never meet. Scageon fuses transactions, live store vision, and product journeys into one real-time operational view, so teams act on what's converting (or not) while it's still happening.",
    solutions: [
      {
        title: "Real-Time Store Intelligence",
        tagline: "See what converts, as it happens.",
        whatItIs:
          "A real-time platform that fuses POS transactions, in-store camera frames, and a store/zone/product journey graph into one operational dashboard.",
        delivers:
          "A multi-agent AI system that operates as a virtual store-management team — correlating foot traffic to revenue at the zone level, and surfacing stock-outs and queue build-up as they happen.",
        caseStudySlug: "retail-store-intelligence",
      },
    ],
    outcomes: [
      { text: "Higher sales from zone-level insight", caseStudySlug: "retail-store-intelligence" },
      { text: "Fewer stock-outs and incidents", caseStudySlug: "retail-store-intelligence" },
      { text: "Foot traffic correlated to revenue", caseStudySlug: "retail-store-intelligence" },
      { text: "Real-time store visibility", caseStudySlug: "retail-store-intelligence" },
    ],
    relatedServices: ["ai-automation", "data-analytics", "software-engineering"],
    published: true,
  },

  {
    slug: "automotive",
    name: "Automotive",
    eyebrow: "Automotive",
    headline:
      "We build AI creative platforms for automotive — generating, validating, and packaging campaign-ready visuals at scale.",
    sub: "One shoot, every variation — on-brand, compliant, and on demand.",
    landscape:
      "Automotive marketing moves fast and at scale — every model, market, and variant needs its own campaign-ready creative, quickly and on-brand. Scageon builds AI creative platforms that generate, validate, and package visuals on demand, turning a single shoot into every variation.",
    solutions: [
      {
        title: "AI Creative Generation",
        tagline: "Campaign-ready visuals, on demand.",
        whatItIs:
          "An AI-driven marketing creative platform — AI product photography and instant, campaign-ready visuals produced and validated at scale.",
        delivers:
          "Brand management, creative generation, campaign set-up, review and regeneration, and packaging and delivery — turning a single shoot into every product variation.",
        caseStudySlug: "ai-creative-generation",
      },
    ],
    outcomes: [
      { text: "On-demand, campaign-ready assets", caseStudySlug: "ai-creative-generation" },
      { text: "One shoot covers every variation", caseStudySlug: "ai-creative-generation" },
      { text: "Cost and productivity gains", caseStudySlug: "ai-creative-generation" },
      { text: "Brand compliance at scale", caseStudySlug: "ai-creative-generation" },
    ],
    relatedServices: ["ai-automation", "data-analytics", "software-engineering"],
    published: true,
  },

  {
    slug: "media-entertainment",
    name: "Media & Entertainment",
    eyebrow: "Media & Entertainment",
    headline:
      "We build AI for media & entertainment — from automated audio-video QC to privacy-safe, multi-party data collaboration.",
    sub: "Ship faster and activate audience data without compromising quality, privacy, or compliance.",
    landscape:
      "Media runs on volume and trust — thousands of assets to quality-check and sensitive audience data to activate, all under tight compliance. Scageon automates media QC and builds privacy-safe data collaboration, so teams ship faster without risking quality or privacy.",
    solutions: [
      {
        title: "AI Media Quality Control",
        tagline: "Automated audio-video validation.",
        whatItIs:
          "An AI system that automates video quality control — detecting anomalies across language, visuals, and audio, with timestamp-based reports.",
        delivers:
          "Linguistic analysis, visual inspection, audio evaluation, and timestamp-based anomaly reports — cutting QC cycle time and lifting compliance accuracy.",
        caseStudySlug: "ai-media-qc",
      },
      {
        title: "Privacy-Safe Data Collaboration",
        tagline: "Share data without exposing it.",
        whatItIs:
          "A data collaboration platform overcoming native Snowflake limits — secure, privacy-safe, multi-party data sharing for advertising and media.",
        delivers:
          "Secure sharing across advertisers, agencies, and data partners, multi-provider enrichment, automated workflows, and DSP activation — GDPR/CCPA compliant by design.",
        caseStudySlug: "privacy-safe-data-collaboration",
      },
    ],
    outcomes: [
      { text: "Faster media QC cycles", caseStudySlug: "ai-media-qc" },
      { text: "Higher compliance accuracy", caseStudySlug: "ai-media-qc" },
      { text: "Secure multi-party data sharing", caseStudySlug: "privacy-safe-data-collaboration" },
      { text: "Zero PII exposure", caseStudySlug: "privacy-safe-data-collaboration" },
    ],
    relatedServices: ["ai-automation", "data-analytics", "software-engineering"],
    published: true,
  },

  {
    slug: "ott-streaming",
    name: "OTT / Streaming",
    eyebrow: "OTT / Streaming",
    headline:
      "We build subscriber and revenue intelligence for streaming — unifying subscription, payment, and viewing data into one source of truth.",
    sub: "From fragmented events to clear revenue health, churn signals, and audience stickiness.",
    landscape:
      "Streaming lives and dies by subscribers — yet subscription, payment, and viewing data are almost always fragmented across systems. Scageon unifies them into a single source of truth, turning scattered events into clear revenue and retention intelligence.",
    solutions: [
      {
        title: "Subscriber & Revenue Intelligence",
        tagline: "One source of truth for subscribers.",
        whatItIs:
          "An end-to-end analytics pipeline and multi-dashboard reporting system unifying fragmented subscription, payment, and viewing data.",
        delivers:
          "An automated MongoDB→BigQuery pipeline, a verified identity bridge from anonymous events to paid subscribers, and a 5-bucket dashboard covering revenue, mandates, engagement, stickiness, and frequency.",
        caseStudySlug: "subscriber-revenue-intelligence",
      },
    ],
    outcomes: [
      { text: "One dashboard for all subscribers", caseStudySlug: "subscriber-revenue-intelligence" },
      { text: "Early churn-risk visibility", caseStudySlug: "subscriber-revenue-intelligence" },
      { text: "Faster failed-renewal recovery", caseStudySlug: "subscriber-revenue-intelligence" },
      { text: "Content & stickiness insight", caseStudySlug: "subscriber-revenue-intelligence" },
    ],
    relatedServices: ["data-analytics", "ai-automation", "software-engineering"],
    published: true,
  },
];

export const getIndustry = (slug: string) =>
  industries.find((i) => i.slug === slug);
export const publishedIndustries = () =>
  industries.filter((i) => i.published);
export const allIndustries = () => industries;
