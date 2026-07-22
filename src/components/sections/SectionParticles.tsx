"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

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
  colors = ["#1F5EFF", "#8aa6ff", "#e6edff"],
}: {
  count?: number;
  opacity?: number;
  speed?: number;
  colors?: string[];
}) {
  const [alive, setAlive] = useState(false);

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
        particleColors={colors}
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
