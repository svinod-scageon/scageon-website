import Hero from "@/components/sections/Hero";
import ServicesPreview from "@/components/sections/ServicesPreview";
import IndustriesPreview from "@/components/sections/IndustriesPreview";
import ProofStats from "@/components/sections/ProofStats";
import CtaBand from "@/components/sections/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <IndustriesPreview />
      <ProofStats />
      <CtaBand
        title="Ready to put your data to work?"
        body="Tell us the outcome you're chasing — we'll show you the fastest credible path with AI and data."
      />
    </>
  );
}
