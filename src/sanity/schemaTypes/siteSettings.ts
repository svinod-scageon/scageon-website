import { defineField, defineType } from "sanity";

// Unlike Service/Industry/CaseStudy/Product, there's only ever ONE of these —
// it mirrors your content/site.ts. It's still defined as a normal "document"
// type; what makes it behave like a single fixed item (not a list you create
// new entries in) is how we point the Studio's sidebar at it — that's in
// src/sanity/structure.ts, not here.
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",

  fields: [
    defineField({ name: "name", type: "string" }),
    defineField({ name: "legalName", type: "string" }),
    defineField({ name: "tagline", type: "string" }),
    defineField({ name: "description", type: "text", rows: 3 }),
    defineField({ name: "url", type: "url" }),
    defineField({ name: "email", type: "string" }),
    defineField({ name: "phone", type: "string" }),
    defineField({ name: "address", type: "text", rows: 2 }),
  ],
});
