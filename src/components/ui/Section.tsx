import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * Vertical section wrapper. `tone="dark"` paints a navy band (hosts white logo
 * / hero / footer); default is the light content surface.
 */
export default function Section({
  children,
  className,
  tone = "light",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark" | "muted";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 sm:py-28",
        tone === "dark" && "bg-ink text-white",
        tone === "muted" && "bg-bg",
        tone === "light" && "bg-surface",
        className
      )}
    >
      {children}
    </section>
  );
}
