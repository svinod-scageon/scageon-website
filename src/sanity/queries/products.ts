import { client } from "../client";
import type { Product } from "@/content/types";

const PRODUCT_PROJECTION = `{
  "slug": slug.current,
  name,
  eyebrow,
  headline,
  sub,
  problem,
  whatItIs,
  howItWorks,
  features,
  techGroups,
  relatedIndustries,
  published
}`;

export async function getProducts(): Promise<Product[]> {
  return client.fetch(
    `*[_type == "product"] ${PRODUCT_PROJECTION}`,
    {},
    { next: { tags: ["product"] } }
  );
}

export async function getPublishedProducts(): Promise<Product[]> {
  return client.fetch(
    `*[_type == "product" && published == true] ${PRODUCT_PROJECTION}`,
    {},
    { next: { tags: ["product"] } }
  );
}

export async function getProduct(slug: string): Promise<Product | undefined> {
  const result = await client.fetch<Product | null>(
    `*[_type == "product" && slug.current == $slug][0] ${PRODUCT_PROJECTION}`,
    { slug },
    { next: { tags: ["product"] } }
  );
  return result ?? undefined;
}
