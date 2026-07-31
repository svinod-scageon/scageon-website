import { cn } from "@/lib/utils";
import BulletMark from "@/components/ui/BulletMark";

/**
 * Section eyebrow label, prefixed with the Scageon aperture mark
 * (the logo's ring-and-dot signature motif).
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
      <BulletMark className="mt-0 h-[0.85em] w-[0.85em]" />
      {children}
    </span>
  );
}
