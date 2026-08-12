import type { StructureResolver } from "sanity/structure";

// By default, every document type in the sidebar shows a generic "list of
// documents" view — fine for Service/Industry/CaseStudy/Product, but wrong
// for Site Settings, where there must only ever be one. This function
// customizes the sidebar: normal lists for the content types, but Site
// Settings jumps straight into editing one fixed document (id "siteSettings")
// instead of offering a list you could accidentally add more entries to.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Services")
        .child(
          S.documentTypeList("service")
            .title("Services")
            .defaultOrdering([{ field: "order", direction: "asc" }])
        ),
      S.listItem()
        .title("Industries")
        .child(
          S.documentTypeList("industry")
            .title("Industries")
            .defaultOrdering([{ field: "order", direction: "asc" }])
        ),
      S.documentTypeListItem("caseStudy").title("Case Studies"),
      S.documentTypeListItem("product").title("Products"),
      S.divider(),
      S.listItem()
        .title("Site Settings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
    ]);
