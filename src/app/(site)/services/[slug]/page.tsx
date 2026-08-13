import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import Chips from "@/components/ui/Chips";
import BulletMark from "@/components/ui/BulletMark";
import { renderBold } from "@/components/ui/Bold";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import CtaBand from "@/components/sections/CtaBand";
import { getServices, getService } from "@/sanity/queries/services";
import { getCaseStudies } from "@/sanity/queries/caseStudies";
import { getIndustries } from "@/sanity/queries/industries";

export async function generateStaticParams() {
  const services = await getServices();
  return services.filter((s) => s.published).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) return {};
  return { title: service.name, description: service.sub };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service || !service.published) notFound();

  // Fetched once each rather than per-slug — the related case studies /
  // industries are a small subset of these, looked up locally below.
  const [allCaseStudies, allIndustries] = await Promise.all([
    getCaseStudies(),
    getIndustries(),
  ]);
  const cases = service.caseStudySlugs
    .map((s) => allCaseStudies.find((cs) => cs.slug === s))
    .filter(Boolean);
  const relatedIndustries = service.industrySlugs
    .map((s) => allIndustries.find((i) => i.slug === s))
    .filter((i) => i && i.published);

  return (
    <>
      <PageHero
        eyebrow={service.name}
        title={service.headline}
        sub={service.sub}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />

      {/* Overview + What we deliver */}
      <section className="bg-surface">
        <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <h2 className="font-[family-name:var(--font-newsreader)] text-2xl font-semibold text-text">
              Overview
            </h2>
            <ul className="mt-6 space-y-4">
              {service.overview.map((point) => (
                <li key={point} className="flex items-start gap-3.5">
                  <BulletMark className="text-accent" />
                  <p className="leading-relaxed text-muted">{renderBold(point)}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-[family-name:var(--font-newsreader)] text-2xl font-semibold text-text">
              What we deliver
            </h2>
            <ul className="mt-6 space-y-5">
              {service.deliver.map((d) => (
                <li key={d.title} className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent-strong">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <p className="font-medium text-text">{d.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted">
                      {d.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* How we work — the approach, step by step */}
      <section className="bg-bg">
        <Container className="py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <h2 className="font-[family-name:var(--font-newsreader)] text-2xl font-semibold text-text">
              How we work
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-muted">
              {renderBold(service.howWeWork)}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.approach.map((step, i) => (
              <Reveal key={step.title} delay={(i % 4) * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent-strong">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-[family-name:var(--font-inter-tight)] text-lg font-semibold text-text">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Tech we use */}
      <section className="bg-surface">
        <Container className="py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <h2 className="font-[family-name:var(--font-newsreader)] text-2xl font-semibold text-text">
              Tech we use
            </h2>
            <p className="mt-3 text-muted">
              A pragmatic, best-of-breed stack — chosen per project, not by default.
            </p>
          </Reveal>

          {service.techGroups.length > 0 ? (
            <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {service.techGroups.map((g, i) => (
                <Reveal key={g.group} delay={(i % 4) * 0.05}>
                  <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-accent-strong">
                    {g.group}
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {g.items.map((it) => (
                      <li key={it} className="text-sm text-muted">
                        {it}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-8">
              <Chips items={service.tech} />
            </div>
          )}
        </Container>
      </section>

      {/* Results */}
      {cases.length > 0 && (
        <section className="bg-bg">
          <Container className="py-16 sm:py-20">
            <Reveal>
              <h2 className="font-[family-name:var(--font-newsreader)] text-2xl font-semibold text-text">
                Results
              </h2>
              <p className="mt-3 text-muted">
                Case studies powered by {service.name}.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {cases.map((cs, i) => (
                <Reveal key={cs!.slug} delay={i * 0.05}>
                  <Link
                    href={`/case-studies/${cs!.slug}`}
                    className="group block h-full"
                  >
                    <SpotlightCard
                      spotlightColor="rgba(11, 110, 118, 0.16)"
                      className="flex h-full flex-col p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-[1.015] group-hover:border-accent/50 group-hover:shadow-xl"
                    >
                      <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                        {allIndustries.find((i) => i.slug === cs!.industrySlug)?.name}
                      </span>
                      <h3 className="mt-2 font-[family-name:var(--font-inter-tight)] text-xl font-semibold text-text">
                        {cs!.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-muted">{cs!.tagline}</p>
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
      )}

      {/* Industries cross-link */}
      {relatedIndustries.length > 0 && (
        <section className="bg-surface">
          <Container className="py-16 sm:py-20">
            <Reveal>
              <h2 className="font-[family-name:var(--font-newsreader)] text-2xl font-semibold text-text">
                Industries we apply this in
              </h2>
            </Reveal>
            <div className="mt-6 flex flex-wrap gap-3">
              {relatedIndustries.map((ind) => (
                <Link
                  key={ind!.slug}
                  href={`/industries/${ind!.slug}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-border bg-bg px-4 py-2 text-sm text-text transition-colors hover:border-accent hover:text-accent-strong"
                >
                  {ind!.name}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand
        title={`Let's put ${service.name} to work.`}
        cta="Start a project"
      />
    </>
  );
}
