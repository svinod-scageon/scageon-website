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
import { getProduct } from "@/content/products";
import { getIndustry } from "@/content/industries";

export function generateMetadata(): Metadata {
  const product = getProduct("local-rag");
  if (!product) return {};
  return { title: product.name, description: product.sub };
}

export default function ProductPage() {
  const product = getProduct("local-rag");
  if (!product || !product.published) notFound();

  const relatedIndustries = product.relatedIndustries
    .map((s) => getIndustry(s))
    .filter((i) => i && i.published);

  return (
    <>
      <PageHero
        eyebrow={product.eyebrow}
        title={product.headline}
        sub={product.sub}
        crumbs={[{ label: "Home", href: "/" }, { label: "Product" }]}
      />

      {/* The Problem */}
      <section className="bg-surface">
        <Container className="py-16 sm:py-20">
          <Reveal className="max-w-3xl">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-accent-strong">
              The problem
            </h2>
            <ul className="mt-6 space-y-4">
              {product.problem.map((point) => (
                <li key={point} className="flex items-start gap-3.5">
                  <BulletMark className="text-accent" />
                  <p className="text-lg leading-relaxed text-text">
                    {renderBold(point)}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* What It Is */}
      <section className="bg-bg">
        <Container className="py-16 sm:py-20">
          <Reveal className="max-w-3xl">
            <h2 className="font-[family-name:var(--font-newsreader)] text-2xl font-semibold text-text">
              What it is
            </h2>
            <ul className="mt-6 space-y-4">
              {product.whatItIs.map((point) => (
                <li key={point} className="flex items-start gap-3.5">
                  <BulletMark className="text-accent" />
                  <p className="leading-relaxed text-muted">
                    {renderBold(point)}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* How It Works — the pipeline, step by step */}
      <section className="bg-surface">
        <Container className="py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <h2 className="font-[family-name:var(--font-newsreader)] text-2xl font-semibold text-text">
              How it works
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {product.howItWorks.map((step, i) => (
              <Reveal key={step.title} delay={(i % 4) * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-bg p-6">
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

      {/* Key Capabilities */}
      <section className="bg-bg">
        <Container className="py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <h2 className="font-[family-name:var(--font-newsreader)] text-2xl font-semibold text-text">
              Key capabilities
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6">
                  <p className="font-medium text-text">{f.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {f.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Tech Stack */}
      <section className="bg-surface">
        <Container className="py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <h2 className="font-[family-name:var(--font-newsreader)] text-2xl font-semibold text-text">
              Tech stack
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {product.techGroups.map((g, i) => (
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
        </Container>
      </section>

      {/* Where it fits */}
      {relatedIndustries.length > 0 && (
        <section className="bg-bg">
          <Container className="py-16 sm:py-20">
            <Reveal>
              <h2 className="font-[family-name:var(--font-newsreader)] text-2xl font-semibold text-text">
                Where it fits
              </h2>
            </Reveal>
            <div className="mt-6 flex flex-wrap gap-3">
              {relatedIndustries.map((ind) => (
                <Link
                  key={ind!.slug}
                  href={`/industries/${ind!.slug}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-text transition-colors hover:border-accent hover:text-accent-strong"
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
        title="See what it finds in files you already have."
        body="Talk to us about what a local-first AI system could do with your documents."
        cta="Get in touch"
      />
    </>
  );
}
