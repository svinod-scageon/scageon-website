"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Particles = dynamic(() => import("@/components/reactbits/Particles"), {
  ssr: false,
});

/**
 * Ambient, free-moving particle field for dark statement sections.
 * Mounts only after hydration and only when motion is allowed.
 */
export default function SectionParticles({
  count = 80,
  opacity = 45,
  speed = 0.06,
  // default tuned for DARK sections; pass darker colors for light sections
  colors = ["#0B6E76", "#5fa3a8", "#cfe6e8"],
  // used instead of `colors` when the site itself is in dark mode, so dots
  // tuned to read on a white card don't go muddy against a near-black one
  darkColors = ["#2FD1BE", "#5fd9c9", "#9aa3af"],
}: {
  count?: number;
  opacity?: number;
  speed?: number;
  colors?: string[];
  darkColors?: string[];
}) {
  const [alive, setAlive] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) setAlive(true);
  }, []);

  if (!alive) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{ opacity: opacity / 100 }}
      aria-hidden
    >
      <Particles
        particleColors={resolvedTheme === "dark" ? darkColors : colors}
        particleCount={count}
        particleSpread={14}
        speed={speed}
        particleBaseSize={60}
        alphaParticles
        disableRotation={false}
      />
    </div>
  );
}
