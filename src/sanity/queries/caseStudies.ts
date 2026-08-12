import { client } from "../client";
import type { CaseStudy } from "@/content/types";

const CASE_STUDY_PROJECTION = `{
  "slug": slug.current,
  title,
  tagline,
  industrySlug,
  serviceSlugs,
  client,
  overview,
  problem,
  solution,
  features,
  impact,
  tech
}`;

export async function getCaseStudies(): Promise<CaseStudy[]> {
  return client.fetch(
    `*[_type == "caseStudy"] ${CASE_STUDY_PROJECTION}`,
    {},
    { next: { tags: ["caseStudy"] } }
  );
}

export async function getCaseStudy(
  slug?: string
): Promise<CaseStudy | undefined> {
  if (!slug) return undefined;
  const result = await client.fetch<CaseStudy | null>(
    `*[_type == "caseStudy" && slug.current == $slug][0] ${CASE_STUDY_PROJECTION}`,
    { slug },
    { next: { tags: ["caseStudy"] } }
  );
  return result ?? undefined;
}
