// One-time script: reads your existing hardcoded content and pushes it into
// Sanity as real documents. Safe to re-run — it uses fixed, predictable
// document IDs (createOrReplace), so running it twice updates the same
// documents rather than creating duplicates.
//
// Run with: npm run migrate

import { config } from "dotenv";
config({ path: ".env.local" });

import { createClient } from "@sanity/client";
import { services } from "../src/content/services";
import { industries } from "../src/content/industries";
import { caseStudies } from "../src/content/caseStudies";
import { products } from "../src/content/products";
import { site } from "../src/content/site";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_WRITE_TOKEN!,
  useCdn: false, // writes must go through the live API, not the read-only CDN cache
});

// Sanity requires a unique `_key` on every item in an array of objects —
// think of it like React's `key` prop, needed so it can track each item
// individually when you reorder/edit/delete one.
function key(): string {
  return Math.random().toString(36).slice(2, 10);
}

function toSlug(value: string) {
  return { _type: "slug" as const, current: value };
}

// Adds the `_type` (which object schema this is) and `_key` (required by
// Sanity for array items) to a plain object from our content files.
function keyed<T extends object>(type: string, obj: T) {
  return { _type: type, _key: key(), ...obj };
}

async function migrateServices() {
  for (const [index, s] of services.entries()) {
    await client.createOrReplace({
      _id: `service-${s.slug}`,
      _type: "service",
      name: s.name,
      slug: toSlug(s.slug),
      headline: s.headline,
      sub: s.sub,
      overview: s.overview,
      deliver: s.deliver.map((d) => keyed("deliverable", d)),
      howWeWork: s.howWeWork,
      approach: s.approach.map((a) => keyed("step", a)),
      tech: s.tech,
      techGroups: s.techGroups?.map((g) => keyed("techGroup", g)),
      caseStudySlugs: s.caseStudySlugs,
      industrySlugs: s.industrySlugs,
      published: s.published,
      order: index, // preserves the order services.ts already had them in
    });
    console.log(`  service: ${s.slug}`);
  }
}

async function migrateIndustries() {
  for (const [index, i] of industries.entries()) {
    await client.createOrReplace({
      _id: `industry-${i.slug}`,
      _type: "industry",
      name: i.name,
      slug: toSlug(i.slug),
      eyebrow: i.eyebrow,
      headline: i.headline,
      sub: i.sub,
      landscape: i.landscape,
      solutions: i.solutions.map((s) => keyed("solution", s)),
      outcomes: i.outcomes.map((o) => keyed("outcome", o)),
      relatedServices: i.relatedServices,
      published: i.published,
      order: index,
    });
    console.log(`  industry: ${i.slug}`);
  }
}

async function migrateCaseStudies() {
  for (const cs of Object.values(caseStudies)) {
    await client.createOrReplace({
      _id: `caseStudy-${cs.slug}`,
      _type: "caseStudy",
      title: cs.title,
      slug: toSlug(cs.slug),
      tagline: cs.tagline,
      industrySlug: cs.industrySlug,
      serviceSlugs: cs.serviceSlugs,
      client: cs.client,
      overview: cs.overview,
      problem: cs.problem,
      solution: cs.solution,
      features: cs.features,
      impact: cs.impact,
      tech: cs.tech,
    });
    console.log(`  case study: ${cs.slug}`);
  }
}

async function migrateProducts() {
  for (const p of products) {
    await client.createOrReplace({
      _id: `product-${p.slug}`,
      _type: "product",
      name: p.name,
      slug: toSlug(p.slug),
      eyebrow: p.eyebrow,
      headline: p.headline,
      sub: p.sub,
      problem: p.problem,
      whatItIs: p.whatItIs,
      howItWorks: p.howItWorks.map((h) => keyed("step", h)),
      features: p.features.map((f) => keyed("deliverable", f)),
      techGroups: p.techGroups.map((g) => keyed("techGroup", g)),
      relatedIndustries: p.relatedIndustries,
      published: p.published,
    });
    console.log(`  product: ${p.slug}`);
  }
}

async function migrateSiteSettings() {
  // Fixed _id "siteSettings" — matches the singleton wired up in
  // src/sanity/structure.ts, so this always updates the one document.
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    name: site.name,
    legalName: site.legalName,
    tagline: site.tagline,
    description: site.description,
    url: site.url,
    email: site.email,
    phone: site.phone,
    address: site.address,
  });
  console.log("  site settings updated");
}

async function main() {
  console.log("Migrating services...");
  await migrateServices();
  console.log("Migrating industries...");
  await migrateIndustries();
  console.log("Migrating case studies...");
  await migrateCaseStudies();
  console.log("Migrating products...");
  await migrateProducts();
  console.log("Migrating site settings...");
  await migrateSiteSettings();
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
