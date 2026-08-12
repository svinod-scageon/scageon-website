import { defineField, defineType } from "sanity";
import { validateUniqueSlug } from "../lib/validateUniqueSlug";

export const industry = defineType({
  name: "industry",
  title: "Industry",
  type: "document",

  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name" },
      validation: (Rule) =>
        Rule.required().custom(async (slug, context) => {
          if (!slug?.current) return true;
          const isUnique = await validateUniqueSlug(slug.current, context);
          return isUnique || "This slug is already used by another Industry.";
        }),
    }),
    defineField({ name: "eyebrow", type: "string" }),
    defineField({ name: "headline", type: "string" }),
    defineField({ name: "sub", type: "text", rows: 3 }),
    defineField({
      name: "landscape",
      title: "Landscape (bullet points)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "solutions",
      type: "array",
      of: [{ type: "solution" }], // shared object type — schemaTypes/objects/solution.ts
    }),
    defineField({
      name: "outcomes",
      type: "array",
      of: [{ type: "outcome" }],
    }),
    defineField({
      name: "relatedServices",
      title: "Related service slugs",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "published", type: "boolean", initialValue: false }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Controls the order industries appear in grids/menus — lower numbers show first.",
      validation: (Rule) => Rule.required().integer(),
    }),
  ],

  preview: {
    select: { title: "name", subtitle: "headline" },
  },
});
