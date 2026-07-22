import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import CtaBand from "@/components/sections/CtaBand";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.legalName} — ${site.tagline}. Data & AI solutions for mid-market enterprises.`,
};

const values = [
  {
    title: "Compliance-first",
    body: "We build for regulated, mission-critical environments. Security, access control, and auditability are designed in from day one — not bolted on.",
  },
  {
    title: "Production, not demos",
    body: "Our AI ships with the guardrails, monitoring, and MLOps to run for real. We measure success in business outcomes, not proofs of concept.",
  },
  {
    title: "De-risked delivery",
    body: "Zero-downtime migrations, systems that run in parallel, automated checks before every release. We change what matters without breaking what works.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={site.tagline + "."}
        sub={site.description}
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="bg-surface">
        <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-accent-strong">
              Who we are
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text">
              Scageon is a data & AI partner for mid-market enterprises. We design,
              build, and operate the platforms that turn scattered data into
              real-time decisions and production-grade AI — across healthcare,
              banking, and beyond.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              From hospital command centers to zero-downtime core-banking
              migrations, we take on the systems businesses depend on, and we treat
              security and compliance as first-class requirements.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-border bg-bg p-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent-strong">
                At a glance
              </h3>
              <div className="mt-6 text-sm leading-relaxed text-muted">
                {site.legalName}
                <br />
                {site.address}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-bg">
        <Container className="py-16 sm:py-20">
          <Reveal>
            <h2 className="font-[family-name:var(--font-inter-tight)] text-3xl font-semibold text-text">
              How we work
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-surface p-7">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent-strong">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-[family-name:var(--font-inter-tight)] text-xl font-semibold text-text">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
