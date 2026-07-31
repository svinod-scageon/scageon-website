import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import ContactForm from "@/components/sections/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what you're trying to build or solve. Scageon — Data & AI solutions for mid-market enterprises.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build what's next."
        sub="Tell us the outcome you're chasing — we'll show you the fastest credible path with AI and data."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="bg-surface">
        <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <h2 className="font-[family-name:var(--font-newsreader)] text-2xl font-semibold text-text">
              Get in touch
            </h2>
            <p className="mt-3 text-muted">
              Prefer email or a call? Reach us directly — we usually respond within
              one business day.
            </p>

            <ul className="mt-8 space-y-5">
              <ContactItem icon={<Mail className="h-5 w-5" />} label="Email">
                <a href={`mailto:${site.email}`} className="hover:text-accent-strong">
                  {site.email}
                </a>
              </ContactItem>
              <ContactItem icon={<Phone className="h-5 w-5" />} label="Phone">
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="hover:text-accent-strong"
                >
                  {site.phone}
                </a>
              </ContactItem>
              <ContactItem icon={<MapPin className="h-5 w-5" />} label="Office">
                {site.address}
              </ContactItem>
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-border bg-bg p-7 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function ContactItem({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent-strong">
        {icon}
      </span>
      <div>
        <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
          {label}
        </div>
        <div className="mt-1 text-text">{children}</div>
      </div>
    </li>
  );
}
