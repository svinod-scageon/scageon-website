import type { ValidationContext } from "sanity";

// Ensures a slug is unique among OTHER documents of the SAME content type —
// not across the whole dataset, since a Service and a Case Study are allowed
// to share a slug (they live under different URL prefixes: /services/x vs
// /case-studies/x). Checks both the draft and published version of the
// current document so editing an existing document doesn't flag itself.
//
// Note: this uses the general ValidationContext (what Rule.custom() actually
// provides), not SlugValidationContext — that richer type only exists inside
// a slug field's own `options.isUnique`, not in an attached validation rule.
export async function validateUniqueSlug(
  slug: string,
  context: ValidationContext
): Promise<boolean> {
  const { document, getClient } = context;
  if (!document) return true;

  const client = getClient({ apiVersion: "2024-01-01" });
  const id = document._id.replace(/^drafts\./, "");

  const query = `!defined(*[
    _type == $type &&
    !(_id in [$draftId, $publishedId]) &&
    slug.current == $slug
  ][0]._id)`;

  return client.fetch(query, {
    type: document._type,
    draftId: `drafts.${id}`,
    publishedId: id,
    slug,
  });
}
