import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import CtaBand from "@/components/sections/CtaBand";
import { getIndustries } from "@/sanity/queries/industries";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "How Scageon builds AI and data platforms for compliance-critical industries — Healthcare, Banking & Finance, Retail, Automotive, and Media & Entertainment.",
};

export default async function IndustriesPage() {
  const industries = await getIndustries();

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Five industries. Production systems in each."
        sub="From hospital command centers to core banking migrations — the work, the outcomes, and the case studies behind each."
        crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />

      <section className="bg-surface">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => {
              const disabled = !ind.published;
              const card = (
                <SpotlightCard
                  spotlightColor="rgba(11, 110, 118, 0.16)"
                  className={cn(
                    "flex h-full flex-col p-6 transition-all duration-300",
                    disabled
                      ? "opacity-60"
                      : "group-hover:-translate-y-1 group-hover:scale-[1.015] group-hover:border-accent/50 group-hover:shadow-xl"
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="font-[family-name:var(--font-inter-tight)] text-xl font-semibold text-text">
                      {ind.name}
                    </h2>
                    {disabled ? (
                      <span className="shrink-0 rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                        soon
                      </span>
                    ) : (
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-accent-strong transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    )}
                  </div>
                  {ind.published && (
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {ind.sub}
                    </p>
                  )}
                </SpotlightCard>
              );

              return (
                <Reveal key={ind.slug} delay={(i % 3) * 0.05}>
                  {disabled ? (
                    <div aria-disabled className="h-full">
                      {card}
                    </div>
                  ) : (
                    <Link
                      href={`/industries/${ind.slug}`}
                      className="group block h-full"
                    >
                      {card}
                    </Link>
                  )}
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
