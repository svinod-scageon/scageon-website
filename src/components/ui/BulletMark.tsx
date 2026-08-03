import { cn } from "@/lib/utils";

/**
 * The Scageon aperture mark — the logo's ring-and-dot, used as the list bullet.
 * Drawn as SVG (rather than the ⊙ glyph) so it stays crisp and aligns predictably
 * across fonts and platforms.
 */
export default function BulletMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden
      className={cn("mt-[0.45em] h-[0.7em] w-[0.7em] shrink-0", className)}
    >
      <circle
        cx="8"
        cy="8"
        r="6.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        opacity="0.35"
      />
      <circle cx="8" cy="8" r="2.75" fill="currentColor" />
    </svg>
  );
}
