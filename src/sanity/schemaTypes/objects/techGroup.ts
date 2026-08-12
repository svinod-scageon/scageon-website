import { defineField, defineType } from "sanity";

// Shared shape — used by Service.techGroups and Product.techGroups.
export const techGroup = defineType({
  name: "techGroup",
  title: "Tech Group",
  type: "object",
  fields: [
    defineField({ name: "group", type: "string" }),
    defineField({ name: "items", type: "array", of: [{ type: "string" }] }),
  ],
});
