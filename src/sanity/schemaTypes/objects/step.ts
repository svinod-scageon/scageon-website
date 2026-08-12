import { defineField, defineType } from "sanity";

// Shared shape — used by Service.approach and Product.howItWorks.
export const step = defineType({
  name: "step",
  title: "Step",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "desc", type: "text", rows: 2 }),
  ],
});
