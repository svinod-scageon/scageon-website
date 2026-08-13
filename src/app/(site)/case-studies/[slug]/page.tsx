import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import BulletMark from "@/components/ui/BulletMark";
import { renderBold } from "@/components/ui/Bold";
import CtaBand from "@/components/sections/CtaBand";
import { getCaseStudies, getCaseStudy } from "@/sanity/queries/caseStudies";
import { getIndustries } from "@/sanity/queries/industries";
import { getServices } from "@/sanity/queries/services";

function DetailSection({ label, items }: { label: string; items?: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <Reveal>
      <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-accent-strong">
        {label}
      </h2>
      <ul className="mt-5 space-y-3">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-3.5">
            <BulletMark className="text-accent" />
            <p className="text-lg leading-relaxed text-text">{renderBold(it)}</p>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export async function generateStaticParams() {
  const all = await getCaseStudies();
  return all.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = await getCaseStudy(slug);
  if (!cs) return {};
  return { title: cs.title, description: cs.tagline };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = await getCaseStudy(slug);
  if (!cs) notFound();

  const [allIndustries, allServices] = await Promise.all([
    getIndustries(),
    getServices(),
  ]);
  const industry = allIndustries.find((i) => i.slug === cs.industrySlug);
  const relatedServices = cs.serviceSlugs
    .map((s) => allServices.find((svc) => svc.slug === s))
    .filter((s) => s && s.published);

  return (
    <>
      <PageHero
        eyebrow={cs.client}
        title={cs.title}
        sub={cs.tagline}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: cs.title },
        ]}
      />

      <section className="bg-bg">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
            <div className="space-y-12">
              {cs.overview && (
                <Reveal>
                  <p className="text-lead leading-relaxed text-text">
                    {renderBold(cs.overview)}
                  </p>
                </Reveal>
              )}

              <DetailSection label="Problem" items={cs.problem} />
              <DetailSection label="Solution" items={cs.solution} />
              <DetailSection label="Features" items={cs.features} />
              <DetailSection label="Impact" items={cs.impact} />
            </div>

            <aside className="space-y-8 lg:border-l lg:border-border lg:pl-8">
              {industry && industry.published && (
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                    Industry
                  </h3>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="group mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent-strong"
                  >
                    {industry.name}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              )}

              {relatedServices.length > 0 && (
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                    Services
                  </h3>
                  <div className="mt-3 flex flex-col gap-2.5">
                    {relatedServices.map((s) => (
                      <Link
                        key={s!.slug}
                        href={`/services/${s!.slug}`}
                        className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent-strong"
                      >
                        {s!.name}
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {cs.tech.length > 0 && (
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                    Technology
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {cs.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Have something similar in mind?"
        body="Tell us the outcome you need — we'll show you the fastest credible path."
      />
    </>
  );
}
