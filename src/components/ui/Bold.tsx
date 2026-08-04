import type { ReactNode } from "react";

/**
 * Renders `**word**` segments in a string as bold. Lets content files mark
 * the one phrase per sentence that matters, without turning body copy into JSX.
 * Pass `tone: "dark"` on dark bands so the bold stays white, not ink-on-dark.
 */
export function renderBold(
  text: string,
  tone: "light" | "dark" = "light"
): ReactNode {
  const strongClass =
    tone === "dark" ? "font-semibold text-white" : "font-semibold text-text";
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className={strongClass}>
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );
}

/** Strips `**` markers for contexts that can't render JSX — meta tags, alt text, etc. */
export function stripBold(text: string): string {
  return text.replace(/\*\*([^*]+)\*\*/g, "$1");
}
