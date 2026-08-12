import { createClient } from "next-sanity";

// The app's READ client — no token needed, since our dataset is public and
// this only ever fetches published content. Contrast with
// scripts/migrate-content.ts's client, which uses a secret write token.
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  // Sanity's CDN is a *second* cache layer on top of ours, and it's only
  // eventually consistent (up to ~60s after a publish) — which fights the
  // on-demand revalidation we already built at the Next.js layer. Since
  // Next.js/Vercel's cache is what actually serves visitors (fast either
  // way), we don't need Sanity's CDN in the loop too.
  useCdn: false,
});
