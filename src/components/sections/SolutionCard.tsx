import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Solution, CaseStudy } from "@/content/types";
import { cn } from "@/lib/utils";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import { renderBold } from "@/components/ui/Bold";

export default function SolutionCard({
  solution,
  caseStudy,
  index,
}: {
  solution: Solution;
  caseStudy?: CaseStudy;
  index: number;
}) {
  return (
    <div className="h-full">
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
          <p className="leading-relaxed text-text">{renderBold(solution.whatItIs)}</p>
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
        <div className="mt-6 border-t border-border pt-4">
          <Link
            href={`/case-studies/${caseStudy.slug}`}
            className="group flex w-full items-center justify-between gap-2 text-left text-sm font-medium text-accent-strong"
          >
            View case study
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      )}
      </SpotlightCard>
    </div>
  );
}
