import { defineField, defineType } from "sanity";

// Shared shape — used by Service.deliver and Product.features.
export const deliverable = defineType({
  name: "deliverable",
  title: "Deliverable",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string", validation: (Rule) => Rule.max(60) }),
    defineField({ name: "desc", type: "text", rows: 2, validation: (Rule) => Rule.max(300) }),
  ],
});
