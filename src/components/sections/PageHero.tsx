import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionParticles from "@/components/sections/SectionParticles";

type Crumb = { label: string; href?: string };

/**
 * Inner-page hero (light): breadcrumb + eyebrow + large display headline + sub.
 * `aside` optionally renders page-specific meta below the copy.
 */
export default function PageHero({
  eyebrow,
  title,
  sub,
  crumbs,
  aside,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  crumbs?: Crumb[];
  aside?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <SectionParticles
        count={110}
        opacity={60}
        colors={["#0B6E76", "#5fa3a8", "#9aa3af"]}
      />
      <Container className="relative pb-16 pt-5 sm:pb-20 sm:pt-8">
        {crumbs && (
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-1.5 text-xs text-muted"
          >
            {crumbs.map((c, i) => (
              <span key={c.label} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-text">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-text">{c.label}</span>
                )}
                {i < crumbs.length - 1 && (
                  <ChevronRight className="h-3.5 w-3.5 opacity-50" />
                )}
              </span>
            ))}
          </nav>
        )}
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-newsreader)] text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.06] tracking-tight text-text">
          {title}
        </h1>
        {sub && <p className="mt-5 max-w-2xl text-lead text-muted">{sub}</p>}
        {aside && <div className="mt-8">{aside}</div>}
      </Container>
    </section>
  );
}
