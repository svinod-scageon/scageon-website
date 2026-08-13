import { defineField, defineType } from "sanity";

// Nested inside Industry.solutions.
export const solution = defineType({
  name: "solution",
  title: "Solution",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string", validation: (Rule) => Rule.max(60) }),
    defineField({ name: "tagline", type: "string", validation: (Rule) => Rule.max(160) }),
    defineField({ name: "whatItIs", type: "text", rows: 3, validation: (Rule) => Rule.max(400) }),
    defineField({
      name: "delivers",
      type: "array",
      of: [{ type: "string", validation: (Rule) => Rule.max(300) }],
      validation: (Rule) => Rule.max(8),
    }),
    defineField({
      name: "caseStudySlug",
      title: "Case study slug",
      type: "string",
      description: 'Matches a Case Study\'s slug — powers the "View case study" link.',
    }),
    defineField({ name: "comingSoon", type: "boolean", initialValue: false }),
  ],
});
