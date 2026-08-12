import Hero from "@/components/sections/Hero";
import ServicesPreview from "@/components/sections/ServicesPreview";
import IndustriesPreview from "@/components/sections/IndustriesPreview";
import ProofStats from "@/components/sections/ProofStats";
import CtaBand from "@/components/sections/CtaBand";
import { getSiteSettings } from "@/sanity/queries/site";

export default async function Home() {
  const site = await getSiteSettings();

  return (
    <>
      <Hero tagline={site.tagline} description={site.description} />
      <ServicesPreview />
      <IndustriesPreview />
      <ProofStats />
      <CtaBand
        title="Let's put your data to work."
        body="Tell us the outcome you need. We'll show you the **fastest credible path** there."
      />
    </>
  );
}
