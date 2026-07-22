"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Scroll-based / progressive loading gate.
 * Renders `fallback` until the element is near the viewport, then mounts
 * `children`. Use for heavy below-the-fold components (backgrounds, panels).
 */
export default function LazyMount({
  children,
  fallback = null,
  rootMargin = "200px",
  className,
  minHeight,
}: {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  className?: string;
  minHeight?: number | string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || show) return;

    if (typeof IntersectionObserver === "undefined") {
      setShow(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [show, rootMargin]);

  return (
    <div ref={ref} className={className} style={minHeight ? { minHeight } : undefined}>
      {show ? children : fallback}
    </div>
  );
}
