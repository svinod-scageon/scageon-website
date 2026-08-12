import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import CtaBand from "@/components/sections/CtaBand";
import { getCaseStudies } from "@/sanity/queries/caseStudies";
import { getIndustries } from "@/sanity/queries/industries";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Production systems Scageon has built across healthcare, banking & finance, retail, automotive, and media & entertainment — the problem, the build, and the measured impact.",
};

export default async function CaseStudiesPage() {
  // Fetched once each, not per-card — every card just needs an industry's
  // *name*, so one query for all industries + an in-memory lookup below
  // beats firing a separate query per case study.
  const [all, industries] = await Promise.all([
    getCaseStudies(),
    getIndustries(),
  ]);

  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="The work, in production."
        sub="Every solution we sell is proven here first — the problem, the build, and the measured impact."
        crumbs={[{ label: "Home", href: "/" }, { label: "Case Studies" }]}
      />

      <section className="bg-surface">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-4 sm:grid-cols-2">
            {all.map((cs, i) => (
              <Reveal key={cs.slug} delay={(i % 2) * 0.05}>
                <Link href={`/case-studies/${cs.slug}`} className="group block h-full">
                  <SpotlightCard
                    spotlightColor="rgba(11, 110, 118, 0.16)"
                    className="flex h-full flex-col p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-[1.015] group-hover:border-accent/50 group-hover:shadow-xl"
                  >
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                      {industries.find((ind) => ind.slug === cs.industrySlug)?.name}
                    </span>
                    <h2 className="mt-2 font-[family-name:var(--font-inter-tight)] text-xl font-semibold text-text">
                      {cs.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm text-muted">{cs.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-strong">
                      View case study
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </SpotlightCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
