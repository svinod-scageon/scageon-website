import { defineField, defineType } from "sanity";

// Nested inside Industry.solutions.
export const solution = defineType({
  name: "solution",
  title: "Solution",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "tagline", type: "string" }),
    defineField({ name: "whatItIs", type: "text", rows: 3 }),
    defineField({ name: "delivers", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "caseStudySlug",
      title: "Case study slug",
      type: "string",
      description: 'Matches a Case Study\'s slug — powers the "View case study" link.',
    }),
    defineField({ name: "comingSoon", type: "boolean", initialValue: false }),
  ],
});
