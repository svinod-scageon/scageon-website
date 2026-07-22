import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import { publishedServices } from "@/content/services";

export default function ServicesPreview() {
  const services = publishedServices();

  return (
    <section className="bg-surface" id="services">
      <Container className="py-20 sm:py-28">
        <SectionHeading
          eyebrow="What we do"
          title="Five ways we move the needle."
          intro="From the data layer to production AI, the software, and the cloud it runs on — each capability stands alone or works together."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.06}>
              <Link href={`/services/${s.slug}`} className="group block h-full">
                <SpotlightCard
                  spotlightColor="rgba(31, 94, 255, 0.18)"
                  className="flex h-full flex-col transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-[1.015] group-hover:border-accent/50 group-hover:shadow-xl"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent-strong">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-[family-name:var(--font-inter-tight)] text-2xl font-semibold text-text">
                    {s.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {s.sub}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent-strong">
                    Explore
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </SpotlightCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
