"use client";

import { useEffect, useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import type { Solution, CaseStudy } from "@/content/types";
import { cn } from "@/lib/utils";
import SpotlightCard from "@/components/reactbits/SpotlightCard";

function DetailBlock({ label, items }: { label: string; items?: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-[0.16em] text-accent-strong">
        {label}
      </h4>
      <ul className="mt-3 space-y-2">
        {items.map((it) => (
          <li key={it} className="flex gap-2.5 text-sm leading-relaxed text-muted">
            <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SolutionCard({
  solution,
  caseStudy,
  index,
}: {
  solution: Solution;
  caseStudy?: CaseStudy;
  index: number;
}) {
  const anchorId = caseStudy ? `cs-${caseStudy.slug}` : undefined;
  const [value, setValue] = useState<string>("");

  // Deep-link: open + scroll when the URL hash matches this case study.
  useEffect(() => {
    if (!anchorId) return;
    if (window.location.hash === `#${anchorId}`) {
      setValue("cs");
      requestAnimationFrame(() =>
        document.getElementById(anchorId)?.scrollIntoView({ block: "start" })
      );
    }
  }, [anchorId]);

  return (
    <div id={anchorId} className="h-full scroll-mt-24">
      <SpotlightCard
        spotlightColor="rgba(11, 110, 118, 0.14)"
        className={cn(
          "flex h-full flex-col p-7 transition-all duration-300 sm:p-8",
          solution.comingSoon
            ? "opacity-70"
            : "hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl"
        )}
      >
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent-strong">
          0{index + 1}
        </span>
        {solution.comingSoon && (
          <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
            Coming soon
          </span>
        )}
      </div>

      <h3 className="mt-4 font-[family-name:var(--font-inter-tight)] text-2xl font-semibold text-text">
        {solution.title}
      </h3>
      <p className="mt-1.5 text-accent-strong">{solution.tagline}</p>

      {!solution.comingSoon && (
        <div className="mt-5 flex-1 space-y-4">
          <p className="leading-relaxed text-text">{solution.whatItIs}</p>
          {solution.delivers.length > 0 && (
            <ul className="space-y-2">
              {solution.delivers.map((d) => (
                <li
                  key={d}
                  className="flex gap-2.5 text-sm leading-relaxed text-muted"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                  />
                  {d}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {caseStudy && (
        <Accordion.Root
          type="single"
          collapsible
          value={value}
          onValueChange={setValue}
          className="mt-6 border-t border-border pt-2"
        >
          <Accordion.Item value="cs">
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full cursor-pointer items-center justify-between gap-2 py-2 text-left text-sm font-medium text-accent-strong">
                View case study
                <Plus className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-45" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="accordion-content overflow-hidden">
              <div className="space-y-6 pb-2 pt-4">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                  {caseStudy.client}
                </p>
                {caseStudy.overview && (
                  <p className="leading-relaxed text-text">{caseStudy.overview}</p>
                )}
                <DetailBlock label="Problem" items={caseStudy.problem} />
                <DetailBlock label="Solution" items={caseStudy.solution} />
                <DetailBlock label="Features" items={caseStudy.features} />
                <DetailBlock label="Impact" items={caseStudy.impact} />
                {caseStudy.tech && (
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-[0.16em] text-accent-strong">
                      Technology
                    </h4>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {caseStudy.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-border bg-bg px-3 py-1.5 font-mono text-xs text-muted"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      )}
      </SpotlightCard>
    </div>
  );
}
