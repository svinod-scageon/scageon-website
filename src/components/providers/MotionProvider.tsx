"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Globally honor the user's reduced-motion preference. With reducedMotion="user",
 * framer-motion snaps animations to their final state for those users instead of
 * animating — without changing SSR markup (so no hydration mismatch).
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
