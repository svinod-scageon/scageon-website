import { client } from "../client";
import type { Service } from "@/content/types";

// Sanity's slug field is `{ current: "..." }`, not a plain string — the
// `"slug": slug.current` line flattens it to match the shape everything
// else in the app already expects (see content/types.ts).
const SERVICE_PROJECTION = `{
  "slug": slug.current,
  name,
  headline,
  sub,
  overview,
  deliver,
  howWeWork,
  approach,
  tech,
  techGroups,
  caseStudySlugs,
  industrySlugs,
  published
}`;

export async function getServices(): Promise<Service[]> {
  return client.fetch(
    `*[_type == "service"] | order(order asc) ${SERVICE_PROJECTION}`,
    {},
    { next: { tags: ["service"] } }
  );
}

export async function getPublishedServices(): Promise<Service[]> {
  return client.fetch(
    `*[_type == "service" && published == true] | order(order asc) ${SERVICE_PROJECTION}`,
    {},
    { next: { tags: ["service"] } }
  );
}

export async function getService(slug: string): Promise<Service | undefined> {
  const result = await client.fetch<Service | null>(
    `*[_type == "service" && slug.current == $slug][0] ${SERVICE_PROJECTION}`,
    { slug },
    { next: { tags: ["service"] } }
  );
  return result ?? undefined;
}
