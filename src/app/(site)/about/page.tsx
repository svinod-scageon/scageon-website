import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import CtaBand from "@/components/sections/CtaBand";
import BulletMark from "@/components/ui/BulletMark";
import { renderBold } from "@/components/ui/Bold";
import { getSiteSettings } from "@/sanity/queries/site";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteSettings();
  return {
    title: "About",
    description: `${site.legalName} — a data and AI partner for mid-market enterprises, building for regulated, mission-critical environments.`,
  };
}

const whoWeAre = [
  "We design, build, and operate the platforms that turn scattered data into real-time decisions and production-grade AI.",
  "We take on the systems businesses depend on — hospital command centers, core banking migrations, subscriber intelligence.",
  "Security and compliance are **first-class requirements** here, not an afterthought.",
];

const values = [
  {
    title: "Compliance-first",
    body: "We build for regulated, mission-critical environments. Security, access control, and auditability are designed in from day one — never bolted on.",
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

export default async function AboutPage() {
  const site = await getSiteSettings();

  return (
    <>
      <PageHero
        eyebrow="About"
        title="We take on the systems businesses depend on."
        sub="A data and AI partner for mid-market enterprises — designing, building, and operating the platforms that regulated industries run on."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="bg-surface">
        <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-accent-strong">
              Who we are
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text">
              {renderBold(
                "Scageon is a data and AI partner for mid-market enterprises, working **across healthcare, banking, and beyond**."
              )}
            </p>
            <ul className="mt-6 space-y-4">
              {whoWeAre.map((point) => (
                <li key={point} className="flex items-start gap-3.5">
                  <BulletMark className="text-accent" />
                  <p className="leading-relaxed text-muted">{renderBold(point)}</p>
                </li>
              ))}
            </ul>
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
            <h2 className="font-[family-name:var(--font-newsreader)] text-3xl font-semibold text-text">
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
