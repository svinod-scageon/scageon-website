"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** stagger delay in seconds */
  delay?: number;
  /** vertical offset in px */
  y?: number;
  as?: "div" | "section" | "li" | "article" | "span";
};

/**
 * Scroll-reveal wrapper. Fades + lifts content when it enters the viewport.
 * Markup is identical server/client (no reduced-motion branching) to avoid
 * hydration mismatches — reduced motion is handled globally by MotionConfig
 * (reducedMotion="user"), which snaps to the final state instead of animating.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}
