import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import { industries } from "@/content/industries";
import { cn } from "@/lib/utils";

export default function IndustriesPreview() {
  return (
    <section className="bg-bg" id="industries">
      <Container className="py-20 sm:py-28">
        <SectionHeading
          eyebrow="Where we do it"
          title="Built for the industries that can't afford to get it wrong."
          intro="Compliance-critical, mission-critical, real-time. Explore how we work in each."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => {
            const disabled = !ind.published;
            const inner = (
              <SpotlightCard
                spotlightColor="rgba(31, 94, 255, 0.16)"
                className={cn(
                  "flex h-full flex-col p-6 transition-all duration-300",
                  disabled
                    ? "opacity-60"
                    : "group-hover:-translate-y-1 group-hover:scale-[1.015] group-hover:border-accent/50 group-hover:shadow-xl"
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-[family-name:var(--font-inter-tight)] text-xl font-semibold text-text">
                    {ind.name}
                  </h3>
                  {disabled ? (
                    <span className="shrink-0 rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                      soon
                    </span>
                  ) : (
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-accent-strong transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  )}
                </div>
                {ind.published && (
                  <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3">
                    {ind.sub}
                  </p>
                )}
              </SpotlightCard>
            );

            return (
              <Reveal key={ind.slug} delay={(i % 3) * 0.05}>
                {disabled ? (
                  <div aria-disabled className="h-full">
                    {inner}
                  </div>
                ) : (
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="group block h-full"
                  >
                    {inner}
                  </Link>
                )}
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
