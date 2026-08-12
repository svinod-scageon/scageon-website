import { defineField, defineType } from "sanity";

// Shared shape — used by Service.deliver and Product.features.
export const deliverable = defineType({
  name: "deliverable",
  title: "Deliverable",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "desc", type: "text", rows: 2 }),
  ],
});
