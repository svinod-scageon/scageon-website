import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/reactbits/CountUp";

const stats = [
  { to: 50, suffix: "+", label: "Projects delivered" },
  { to: 6, suffix: "", label: "Industries served" },
  { to: 5, suffix: "", label: "Service lines" },
  { to: 100, suffix: "%", label: "Compliance-first delivery" },
];

export default function ProofStats() {
  return (
    <section className="bg-surface">
      <Container className="py-16 sm:py-20">
        <Reveal className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <div className="font-[family-name:var(--font-inter-tight)] text-4xl font-semibold text-text sm:text-5xl">
                <CountUp to={s.to} duration={1.6} />
                <span className="text-accent">{s.suffix}</span>
              </div>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
