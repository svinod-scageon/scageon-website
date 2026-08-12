import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import SolutionCard from "@/components/sections/SolutionCard";
import BulletMark from "@/components/ui/BulletMark";
import { renderBold } from "@/components/ui/Bold";
import CtaBand from "@/components/sections/CtaBand";
import { getIndustries, getIndustry } from "@/sanity/queries/industries";
import { getCaseStudies } from "@/sanity/queries/caseStudies";
import { getServices } from "@/sanity/queries/services";

export async function generateStaticParams() {
  const industries = await getIndustries();
  return industries.filter((i) => i.published).map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ind = await getIndustry(slug);
  if (!ind) return {};
  return { title: ind.name, description: ind.sub };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ind = await getIndustry(slug);
  if (!ind || !ind.published) notFound();

  // Fetched once each — the solutions' linked case studies and the related
  // services are small subsets of these, looked up locally below.
  const [allCaseStudies, allServices] = await Promise.all([
    getCaseStudies(),
    getServices(),
  ]);
  const relatedServices = ind.relatedServices
    .map((s) => allServices.find((svc) => svc.slug === s))
    .filter((s) => s && s.published);

  return (
    <>
      <PageHero
        eyebrow={ind.eyebrow}
        title={ind.headline}
        sub={ind.sub}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: ind.name },
        ]}
      />

      {/* The Landscape */}
      <section className="bg-surface">
        <Container className="py-16 sm:py-20">
          <Reveal className="max-w-3xl">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-accent-strong">
              The landscape
            </h2>
            <ul className="mt-6 space-y-4">
              {ind.landscape.map((point) => (
                <li key={point} className="flex items-start gap-3.5">
                  <BulletMark className="text-accent" />
                  <p className="text-lg leading-relaxed text-text">{renderBold(point)}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* What we do — solution cards linking to case studies */}
      <section className="bg-bg">
        <Container className="py-16 sm:py-20">
          <Reveal>
            <h2 className="font-[family-name:var(--font-newsreader)] text-3xl font-semibold text-text">
              What we do here
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              Each solution is proven in production — open a case study to see the
              problem, the build, and the measured impact.
            </p>
          </Reveal>

          <div className="solutions-grid mt-10 grid gap-5 lg:grid-cols-2">
            {ind.solutions.map((sol, i) => (
              <Reveal key={sol.title} delay={(i % 2) * 0.06}>
                <SolutionCard
                  solution={sol}
                  caseStudy={allCaseStudies.find((cs) => cs.slug === sol.caseStudySlug)}
                  index={i}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Outcomes — qualitative, links into case studies */}
      {ind.outcomes.length > 0 && (
        <section className="bg-surface">
          <Container className="py-16 sm:py-20">
            <Reveal>
              <h2 className="font-[family-name:var(--font-newsreader)] text-2xl font-semibold text-text">
                Outcomes
              </h2>
              <p className="mt-3 text-muted">
                The measured numbers live inside each case study — here&apos;s what
                changes.
              </p>
            </Reveal>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {ind.outcomes.map((o, i) => (
                <Reveal key={o.text} delay={(i % 2) * 0.05} as="li">
                  <Link
                    href={o.caseStudySlug ? `/case-studies/${o.caseStudySlug}` : "#"}
                    className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-bg px-5 py-4 transition-colors hover:border-accent/50"
                  >
                    <span className="flex items-center gap-3 text-text">
                      <BulletMark className="mt-0 text-accent" />
                      {o.text}
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-accent-strong opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </Reveal>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="bg-bg">
          <Container className="py-16 sm:py-20">
            <Reveal>
              <h2 className="font-[family-name:var(--font-newsreader)] text-2xl font-semibold text-text">
                Services powering this
              </h2>
            </Reveal>
            <div className="mt-6 flex flex-wrap gap-3">
              {relatedServices.map((s) => (
                <Link
                  key={s!.slug}
                  href={`/services/${s!.slug}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-text transition-colors hover:border-accent hover:text-accent-strong"
                >
                  {s!.name}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand
        title={`Building in ${ind.name}?`}
        body="Tell us the outcome you need — we'll show you the fastest credible path."
      />
    </>
  );
}
