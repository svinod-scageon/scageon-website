export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  industrySlug: string;
  serviceSlugs: string[];
  client: string; // anonymized label
  overview?: string;
  problem?: string[];
  solution?: string[];
  features?: string[];
  impact?: string[]; // ← all specific numbers live here
  tech?: string[];
};

export type Solution = {
  title: string;
  tagline: string;
  whatItIs: string;
  delivers: string;
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
  landscape: string;
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
  overview: string;
  deliver: Deliverable[]; // feature → benefit (FAB)
  howWeWork: string; // lead line for the approach section
  approach: Step[]; // the process, step by step
  tech: string[]; // flat fallback
  techGroups?: TechGroup[]; // grouped stack (rendered when present)
  caseStudySlugs: string[];
  industrySlugs: string[];
  published: boolean;
};
