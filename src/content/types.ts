export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  industrySlug: string;
  serviceSlugs: string[];
  client: string; // anonymized label
  overview?: string;
  problem: string[];
  solution: string[];
  features: string[];
  impact: string[]; // ← all specific numbers live here
  tech: string[];
};

export type Solution = {
  title: string;
  tagline: string;
  whatItIs: string;
  delivers: string[]; // scannable bullets, not prose
  caseStudySlug?: string; // "View case study →"
  comingSoon?: boolean;
};

export type Outcome = {
  text: string;
  caseStudySlug?: string;
};

export type Industry = {
  slug: string;
  name: string;
  eyebrow: string;
  headline: string;
  sub: string;
  landscape: string[]; // scannable bullets, not prose
  solutions: Solution[];
  outcomes: Outcome[];
  relatedServices: string[];
  published: boolean; // v1: only healthcare + banking-finance
};

export type Deliverable = { title: string; desc: string };
export type Step = { title: string; desc: string };
export type TechGroup = { group: string; items: string[] };

export type Service = {
  slug: string;
  name: string;
  headline: string;
  sub: string;
  overview: string[]; // scannable bullets, not prose
  deliver: Deliverable[]; // feature → benefit (FAB)
  howWeWork: string; // lead line for the approach section
  approach: Step[]; // the process, step by step
  tech: string[]; // flat fallback
  techGroups: TechGroup[]; // grouped stack (rendered when non-empty)
  caseStudySlugs: string[];
  industrySlugs: string[];
  published: boolean;
};

/**
 * A thing Scageon has built and could add to over time (v1: Local RAG only).
 * Distinct from Service (a capability delivered to clients) — a Product has
 * its own identity, architecture, and feature set.
 */
export type Product = {
  slug: string;
  name: string;
  eyebrow: string;
  headline: string;
  sub: string;
  problem: string[]; // scannable bullets — why this exists
  whatItIs: string[]; // scannable bullets — what it does
  howItWorks: Step[]; // the pipeline, step by step
  features: Deliverable[]; // capability → benefit
  techGroups: TechGroup[];
  relatedIndustries: string[];
  published: boolean;
};
