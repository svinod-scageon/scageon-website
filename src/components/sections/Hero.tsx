"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import SectionParticles from "@/components/sections/SectionParticles";
import BulletMark from "@/components/ui/BulletMark";
import { site } from "@/content/site";

const EASE = [0.16, 1, 0.3, 1] as const;

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: EASE, delay },
});

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      {/* free-moving particle field — colors tuned to read on white */}
      <SectionParticles
        count={70}
        opacity={55}
        colors={["#1F5EFF", "#6b86ff", "#9aa3af"]}
      />
      <Container className="relative pb-20 pt-6 sm:pb-28 sm:pt-8 lg:pb-32 lg:pt-10">
        <div className="max-w-4xl">
          <motion.p
            {...rise(0)}
            className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.22em] text-accent-strong"
          >
            <BulletMark className="mt-0 h-[0.85em] w-[0.85em] text-accent" />
            {site.tagline}
          </motion.p>

          <motion.h1
            {...rise(0.06)}
            className="mt-6 font-[family-name:var(--font-newsreader)] text-display font-semibold text-text"
          >
            We build the data and AI systems enterprises run on.
          </motion.h1>

          <motion.p
            {...rise(0.12)}
            className="mt-6 max-w-xl text-lead text-muted"
          >
            {site.description}
          </motion.p>

          <motion.div {...rise(0.18)} className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href="/services" size="lg">
              Explore our work <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/contact" size="lg" variant="secondary">
              Talk to us
            </ButtonLink>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
