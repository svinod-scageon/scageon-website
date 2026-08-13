import { defineField, defineType } from "sanity";
import { validateUniqueSlug } from "../lib/validateUniqueSlug";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",

  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name" },
      validation: (Rule) =>
        Rule.required().custom(async (slug, context) => {
          if (!slug?.current) return true;
          const isUnique = await validateUniqueSlug(slug.current, context);
          return isUnique || "This slug is already used by another Product.";
        }),
    }),
    defineField({ name: "eyebrow", type: "string", validation: (Rule) => Rule.max(160) }),
    defineField({
      name: "headline",
      type: "string",
      description: "Shown large at the top of the page — keep it to one short line.",
      validation: (Rule) => Rule.max(100),
    }),
    defineField({ name: "sub", type: "text", rows: 3, validation: (Rule) => Rule.max(180) }),
    defineField({
      name: "problem",
      title: "Problem (why this exists)",
      type: "array",
      of: [{ type: "string", validation: (Rule) => Rule.max(300) }],
      validation: (Rule) => Rule.max(8),
    }),
    defineField({
      name: "whatItIs",
      title: "What it is",
      type: "array",
      of: [{ type: "string", validation: (Rule) => Rule.max(300) }],
      validation: (Rule) => Rule.max(8),
    }),
    defineField({
      name: "howItWorks",
      title: "How it works (pipeline steps)",
      type: "array",
      of: [{ type: "step" }], // shared object type
      validation: (Rule) => Rule.max(8),
    }),
    defineField({
      name: "features",
      title: "Features (capability → benefit)",
      type: "array",
      of: [{ type: "deliverable" }], // shared object type
      validation: (Rule) => Rule.max(9),
    }),
    defineField({
      name: "techGroups",
      type: "array",
      of: [{ type: "techGroup" }], // shared object type
      validation: (Rule) => Rule.max(8),
    }),
    defineField({
      name: "relatedIndustries",
      title: "Related industry slugs",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "published", type: "boolean", initialValue: false }),
  ],

  preview: {
    select: { title: "name", subtitle: "headline" },
  },
});
