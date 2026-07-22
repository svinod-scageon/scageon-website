import { cn } from "@/lib/utils";

/**
 * Section eyebrow label. The ⊙ glyph echoes the logo's aperture "O"
 * (the Scageon signature motif).
 */
export default function Eyebrow({
  children,
  className,
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.22em]",
        tone === "dark" ? "text-accent" : "text-accent-strong",
        className
      )}
    >
      <span aria-hidden className="text-[0.9em]">
        ⊙
      </span>
      {children}
    </span>
  );
}
