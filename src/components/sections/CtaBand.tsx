"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import SectionParticles from "@/components/sections/SectionParticles";

export default function CtaBand({
  title = "Let's build what's next.",
  body = "Tell us what you're trying to move — we'll show you how AI and data get you there.",
  cta = "Start a project",
  href = "/contact",
}: {
  title?: string;
  body?: string;
  cta?: string;
  href?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // Barely-there gradient-angle shift as the section scrolls through view.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const angle = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [158, 158] : [152, 162]
  );
  const bg = useMotionTemplate`linear-gradient(${angle}deg, var(--color-black) 0%, var(--color-ink) 55%, var(--color-ink-deep) 100%)`;

  return (
    <section ref={ref} className="relative overflow-hidden text-white">
      {/* gradient depth */}
      <motion.div aria-hidden className="absolute inset-0" style={{ background: bg }} />
      {/* free-moving particle field */}
      <SectionParticles count={80} opacity={40} />
      {/* controlled accent edge-glow */}
      <div aria-hidden className="accent-edge absolute inset-0" />
      {/* hairline top edge */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <Container className="relative py-20 sm:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-inter-tight)] text-h2 font-semibold text-white">
            {title}
          </h2>
          <p className="mt-4 text-muted-dark">{body}</p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href={href} size="lg" className="sweep">
              {cta}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
