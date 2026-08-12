import { client } from "../client";
import type { Industry } from "@/content/types";

const INDUSTRY_PROJECTION = `{
  "slug": slug.current,
  name,
  eyebrow,
  headline,
  sub,
  landscape,
  solutions,
  outcomes,
  relatedServices,
  published
}`;

export async function getIndustries(): Promise<Industry[]> {
  return client.fetch(
    `*[_type == "industry"] | order(order asc) ${INDUSTRY_PROJECTION}`,
    {},
    { next: { tags: ["industry"] } }
  );
}

export async function getPublishedIndustries(): Promise<Industry[]> {
  return client.fetch(
    `*[_type == "industry" && published == true] | order(order asc) ${INDUSTRY_PROJECTION}`,
    {},
    { next: { tags: ["industry"] } }
  );
}

export async function getIndustry(slug: string): Promise<Industry | undefined> {
  const result = await client.fetch<Industry | null>(
    `*[_type == "industry" && slug.current == $slug][0] ${INDUSTRY_PROJECTION}`,
    { slug },
    { next: { tags: ["industry"] } }
  );
  return result ?? undefined;
}
