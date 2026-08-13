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
    defineField({ name: "name", type: "string", validation: (Rule) => Rule.max(60) }),
    defineField({ name: "legalName", type: "string", validation: (Rule) => Rule.max(100) }),
    defineField({ name: "tagline", type: "string", validation: (Rule) => Rule.max(160) }),
    defineField({ name: "description", type: "text", rows: 3, validation: (Rule) => Rule.max(400) }),
    defineField({ name: "url", type: "url" }), // Sanity's "url" field validates the format itself
    defineField({
      name: "email",
      type: "string",
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: "phone",
      type: "string",
      validation: (Rule) =>
        Rule.regex(/^[+]?[\d\s()-]{7,20}$/, {
          name: "phone number",
          invert: false,
        }).error("Enter a valid phone number (digits, spaces, +, -, () only)."),
    }),
    defineField({ name: "address", type: "text", rows: 2, validation: (Rule) => Rule.max(200) }),
  ],
});
