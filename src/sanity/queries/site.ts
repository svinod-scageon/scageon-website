import { client } from "../client";

export type SiteSettings = {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  phone: string;
  address: string;
};

export async function getSiteSettings(): Promise<SiteSettings> {
  return client.fetch(
    `*[_type == "siteSettings"][0]{
      name, legalName, tagline, description, url, email, phone, address
    }`,
    {},
    { next: { tags: ["siteSettings"] } }
  );
}
