import { defineField, defineType } from "sanity";
import { validateUniqueSlug } from "../lib/validateUniqueSlug";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",

  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) =>
        Rule.required().custom(async (slug, context) => {
          if (!slug?.current) return true;
          const isUnique = await validateUniqueSlug(slug.current, context);
          return isUnique || "This slug is already used by another Case Study.";
        }),
    }),
    defineField({ name: "tagline", type: "string" }),
    defineField({
      name: "industrySlug",
      title: "Industry slug",
      type: "string",
      description: "Matches an Industry's slug.",
    }),
    defineField({
      name: "serviceSlugs",
      title: "Service slugs",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "client",
      title: "Client (anonymized label)",
      type: "string",
      description: 'e.g. "A leading regional bank" — never the real client name.',
    }),
    defineField({ name: "overview", type: "text", rows: 3 }),
    defineField({ name: "problem", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "solution", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "features", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "impact",
      title: "Impact",
      type: "array",
      of: [{ type: "string" }],
      description: "All specific numbers/metrics live here, e.g. \"**20%** staff productivity gain\".",
    }),
    defineField({ name: "tech", type: "array", of: [{ type: "string" }] }),
  ],

  preview: {
    select: { title: "title", subtitle: "tagline" },
  },
});
