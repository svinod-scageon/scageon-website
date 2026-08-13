import { defineField, defineType } from "sanity";

// Nested inside Industry.outcomes.
export const outcome = defineType({
  name: "outcome",
  title: "Outcome",
  type: "object",
  fields: [
    defineField({ name: "text", type: "string", validation: (Rule) => Rule.max(160) }),
    defineField({ name: "caseStudySlug", title: "Case study slug", type: "string" }),
  ],
});
