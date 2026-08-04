import type { Industry } from "./types";

/**
 * All six industries are published. Adding another = append its object;
 * the overview grid and detail page render automatically.
 */
export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    eyebrow: "Healthcare",
    headline: "Real-time intelligence for hospital operations.",
    sub: "Command centers, workforce planning, and remote patient monitoring — built for compliance-critical care environments.",
    landscape: [
      "Healthcare runs on data scattered across systems, under relentless staffing pressure, and bound by strict compliance.",
      "Decisions that shape patient care and capacity are still made manually, or reactively.",
      "We turn that fragmented data into real-time, compliant decision support — governed from day one, so hospitals move faster **without trading away safety**.",
    ],
    solutions: [
      {
        title: "Hospital Command Center",
        tagline: "One real-time view of every operation.",
        whatItIs:
          "An integrated digital platform that consolidates hospital operations into **a single, real-time operational view**.",
        delivers: [
          "Capacity planning and resource optimization",
          "Predictive analytics for proactive decisions",
          "Fewer delays, better patient outcomes, and greater efficiency across operations",
        ],
        caseStudySlug: "hospital-command-center",
      },
      {
        title: "Nurse Roster Planning",
        tagline: "The right staff, at the right time.",
        whatItIs:
          "An intelligent planning platform for building, balancing, approving, and publishing nurse rosters.",
        delivers: [
          "Automated shift scheduling, staff and leave management",
          "Request handling and real-time reporting",
          "Safe, compliant staffing levels with far less administrative load",
        ],
        caseStudySlug: "nurse-roster-planning",
      },
      {
        title: "Remote Patient Monitoring",
        tagline: "Continuous care beyond hospital walls.",
        whatItIs:
          "A clinical operations platform for delivering acute-level hospital care in patients' homes — managing **the full episode from referral and eligibility to remote monitoring and discharge**.",
        delivers: [
          "Structured intake and physician review with documented rationale",
          "Four-section home-eligibility assessment",
          "Remote vital-signs monitoring, video consults, and home-visit logistics",
          "Governed end to end, built for KSA (MOH / CBAHI) compliance",
        ],
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
    headline: "Modernize the core — without the downtime.",
    sub: "Core migrations, governed back-office control, and self-serve customer messaging — where security, auditability, and uptime can't slip.",
    landscape: [
      "Banking runs on legacy cores, fragmented access control, and unforgiving regulatory and audit demands.",
      "A single change can mean downtime, data loss, or a compliance gap.",
      "We modernize core platforms and back-office operations with **zero-downtime migration**, end-to-end auditability, and security built into every release.",
    ],
    solutions: [
      {
        title: "Core Banking Modernization",
        tagline: "Migrate without the downtime.",
        whatItIs:
          "A legacy-to-modern platform migration that lets old and new core systems run side by side, with **no disruption to live banking operations**.",
        delivers: [
          "Automatic system routing and instant customer-status lookup",
          "Built-in backup and safety checks",
          "Continuous security scanning before every release",
          "A faster, more flexible core — with zero data loss",
        ],
        caseStudySlug: "core-banking-modernization",
      },
      {
        title: "Back-Office Control & Audit",
        tagline: "One governed surface for privileged operations.",
        whatItIs:
          "A centralized back-office portal that unifies access, control, and audit across sensitive banking APIs and configuration.",
        delivers: [
          "Federated single sign-on across two identity providers",
          "Three-layer security model",
          "Append-only audit log of every privileged action",
          "End-to-end request tracing",
        ],
        caseStudySlug: "back-office-control-audit",
      },
      {
        title: "Self-Serve Customer Alerts",
        tagline: "Business-owned notifications, safely.",
        whatItIs:
          "A no-code template and routing engine that lets business teams author and publish customer Email/SMS alerts **without engineering**.",
        delivers: [
          "Two-step template manager owned by business teams",
          "One config that fans out to multiple parties and channels",
          "Field masking for sensitive data",
          "Payload-validated live preview, so broken mappings never reach a customer",
        ],
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
    headline: "See what converts, while it's still happening.",
    sub: "Point-of-sale, in-store vision, and product journeys fused into one live operational view.",
    landscape: [
      "Retail runs on data that rarely connects.",
      "The POS knows what sold and the cameras see what happened — but the two never meet.",
      "We fuse transactions, live store vision, and product journeys into one real-time view, so teams act **while it still matters**.",
    ],
    solutions: [
      {
        title: "Real-Time Store Intelligence",
        tagline: "See what converts, as it happens.",
        whatItIs:
          "A real-time platform that fuses POS transactions, in-store camera frames, and a store/zone/product journey graph into one operational dashboard.",
        delivers: [
          "A multi-agent AI system that works as a virtual store-management team",
          "Foot traffic correlated to revenue at zone level",
          "Stock-outs and queue build-up surfaced as they happen",
        ],
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
    headline: "One shoot. Every variation.",
    sub: "AI creative generation that turns a single shoot into campaign-ready visuals at scale — on-brand and compliant.",
    landscape: [
      "Automotive marketing moves fast, and at scale.",
      "Every model, market, and variant needs its own campaign-ready creative — quickly, and on-brand.",
      "We build AI creative platforms that generate, validate, and package visuals **on demand**.",
    ],
    solutions: [
      {
        title: "AI Creative Generation",
        tagline: "Campaign-ready visuals, on demand.",
        whatItIs:
          "An AI-driven creative platform — product photography and campaign-ready visuals, produced and validated at scale.",
        delivers: [
          "Brand management and creative generation",
          "Campaign set-up, review, and regeneration",
          "Packaging and delivery — one shoot becomes every product variation",
        ],
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
    headline: "Ship faster, without risking quality or privacy.",
    sub: "Automated audio-video QC and privacy-safe data collaboration, built for high-volume media operations.",
    landscape: [
      "Media runs on volume and trust.",
      "Thousands of assets to quality-check, and sensitive audience data to activate — all under tight compliance.",
      "We automate media QC and build privacy-safe data collaboration, so teams ship faster **without risking either**.",
    ],
    solutions: [
      {
        title: "AI Media Quality Control",
        tagline: "Automated audio-video validation.",
        whatItIs:
          "An AI system that automates video quality control — detecting anomalies across language, visuals, and audio, with **timestamp-based reports**.",
        delivers: [
          "Linguistic analysis, visual inspection, and audio evaluation",
          "Timestamp-based anomaly reports",
          "Shorter QC cycles and higher compliance accuracy",
        ],
        caseStudySlug: "ai-media-qc",
      },
      {
        title: "Privacy-Safe Data Collaboration",
        tagline: "Share data without exposing it.",
        whatItIs:
          "A data collaboration platform overcoming native Snowflake limits — **secure, privacy-safe, multi-party data sharing** for advertising and media.",
        delivers: [
          "Secure sharing across advertisers, agencies, and data partners",
          "Multi-provider enrichment and automated workflows",
          "DSP activation, GDPR/CCPA compliant by design",
        ],
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
    headline: "One source of truth for every subscriber.",
    sub: "Subscription, payment, and viewing data unified into clear revenue and retention intelligence.",
    landscape: [
      "Streaming lives and dies by subscribers.",
      "Yet subscription, payment, and viewing data sit fragmented across systems.",
      "We unify them into a single source of truth — turning scattered events into **clear revenue and retention intelligence**.",
    ],
    solutions: [
      {
        title: "Subscriber & Revenue Intelligence",
        tagline: "One source of truth for subscribers.",
        whatItIs:
          "An end-to-end analytics pipeline and multi-dashboard reporting system unifying fragmented subscription, payment, and viewing data.",
        delivers: [
          "Automated MongoDB → BigQuery pipeline",
          "Verified identity bridge from anonymous events to paid subscribers",
          "Five-bucket dashboard: revenue, mandates, engagement, stickiness, frequency",
        ],
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
