import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import CtaBand from "@/components/sections/CtaBand";
import { getPublishedServices } from "@/sanity/queries/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Data Engineering, Data Analytics, Software Engineering, AI Automation, and Cloud — the five disciplines Scageon builds on for mid-market enterprises.",
};

export default async function ServicesPage() {
  const services = await getPublishedServices();

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="What we do — and how it compounds."
        sub="From the data layer to production AI, and the software and cloud that carry it — each engineered to the same standard."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="bg-surface">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06}>
                <Link href={`/services/${s.slug}`} className="group block h-full">
                  <SpotlightCard
                    spotlightColor="rgba(11, 110, 118, 0.18)"
                    className="flex h-full flex-col transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-[1.015] group-hover:border-accent/50 group-hover:shadow-xl"
                  >
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent-strong">
                      0{i + 1}
                    </span>
                    <h2 className="mt-4 font-[family-name:var(--font-inter-tight)] text-2xl font-semibold text-text">
                      {s.name}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {s.sub}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent-strong">
                      Explore {s.name}
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
