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
      validation: (Rule) => Rule.required().max(60),
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
    defineField({ name: "tagline", type: "string", validation: (Rule) => Rule.max(160) }),
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
      validation: (Rule) => Rule.max(80),
    }),
    defineField({ name: "overview", type: "text", rows: 3, validation: (Rule) => Rule.max(450) }),
    defineField({
      name: "problem",
      type: "array",
      of: [{ type: "string", validation: (Rule) => Rule.max(300) }],
      validation: (Rule) => Rule.max(8),
    }),
    defineField({
      name: "solution",
      type: "array",
      of: [{ type: "string", validation: (Rule) => Rule.max(300) }],
      validation: (Rule) => Rule.max(8),
    }),
    defineField({
      name: "features",
      type: "array",
      of: [{ type: "string", validation: (Rule) => Rule.max(300) }],
      validation: (Rule) => Rule.max(8),
    }),
    defineField({
      name: "impact",
      title: "Impact",
      type: "array",
      of: [{ type: "string", validation: (Rule) => Rule.max(300) }],
      description: "All specific numbers/metrics live here, e.g. \"**20%** staff productivity gain\".",
      validation: (Rule) => Rule.max(8),
    }),
    defineField({
      name: "tech",
      type: "array",
      of: [{ type: "string", validation: (Rule) => Rule.max(60) }],
      validation: (Rule) => Rule.max(20),
    }),
  ],

  preview: {
    select: { title: "title", subtitle: "tagline" },
  },
});
