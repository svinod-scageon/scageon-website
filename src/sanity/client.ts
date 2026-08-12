import { createClient } from "next-sanity";

// The app's READ client — no token needed, since our dataset is public and
// this only ever fetches published content. Contrast with
// scripts/migrate-content.ts's client, which uses a secret write token.
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: true, // fast, cached reads — Next.js's own revalidation controls freshness, not this
});
