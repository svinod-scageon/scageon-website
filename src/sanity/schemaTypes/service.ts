import { defineField, defineType } from "sanity";
import { validateUniqueSlug } from "../lib/validateUniqueSlug";

export const service = defineType({
  name: "service", // the internal ID Sanity uses to refer to this content type
  title: "Service", // what your boss sees in the Studio's sidebar
  type: "document", // a top-level, listable, editable content type (vs. "object", which only exists nested inside another field)

  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug", // Sanity's dedicated URL-slug field — has a "Generate" button in the UI that auto-fills from "name"
      options: { source: "name" },
      validation: (Rule) =>
        Rule.required().custom(async (slug, context) => {
          if (!slug?.current) return true;
          const isUnique = await validateUniqueSlug(slug.current, context);
          return isUnique || "This slug is already used by another Service.";
        }),
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
    }),
    defineField({
      name: "sub",
      title: "Subheading",
      type: "text", // "text" gives a multi-line textarea in the editor, vs. "string"'s single-line input — better for a sentence or two
      rows: 3,
    }),
    defineField({
      name: "overview",
      title: "Overview (bullet points)",
      type: "array",
      of: [{ type: "string" }], // a simple list of strings — Studio renders add/remove/reorder controls automatically
    }),
    defineField({
      name: "deliver",
      title: "What you deliver",
      type: "array",
      of: [{ type: "deliverable" }], // reuses the shared object type — see schemaTypes/objects/deliverable.ts
    }),
    defineField({
      name: "howWeWork",
      title: "How we work (lead line)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "approach",
      title: "Approach (steps)",
      type: "array",
      of: [{ type: "step" }],
    }),
    defineField({
      name: "tech",
      title: "Tech (flat list)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "techGroups",
      title: "Tech (grouped)",
      type: "array",
      of: [{ type: "techGroup" }],
    }),
    defineField({
      name: "caseStudySlugs",
      title: "Related case study slugs",
      type: "array",
      of: [{ type: "string" }],
      description: "Matches the slug of a case study — kept as plain slugs for now, same as your current content files.",
    }),
    defineField({
      name: "industrySlugs",
      title: "Related industry slugs",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "published",
      title: "Published",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Controls the 01/02/03 numbering on the site — lower numbers show first.",
      validation: (Rule) => Rule.required().integer(),
    }),
  ],

  // Controls what shows in the Studio's document list — without this,
  // every Service would just show its raw document ID.
  preview: {
    select: { title: "name", subtitle: "headline" },
  },
});
