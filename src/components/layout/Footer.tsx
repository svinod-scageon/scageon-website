import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { site } from "@/content/site";
import { publishedServices } from "@/content/services";
import { publishedIndustries } from "@/content/industries";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Image
              src="/logo.png"
              alt="Scageon"
              width={121}
              height={16}
              className="logo-ink h-4 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm text-muted">
              {site.tagline}. Data and AI for mid-market enterprises, built for
              regulated, mission-critical environments.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {publishedServices().map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-text/80 transition-colors hover:text-accent-strong"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
              Industries
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {publishedIndustries().map((i) => (
                <li key={i.slug}>
                  <Link
                    href={`/industries/${i.slug}`}
                    className="text-text/80 transition-colors hover:text-accent-strong"
                  >
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-text/80">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-accent-strong">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-accent-strong">
                  {site.phone}
                </a>
              </li>
              <li className="pt-2 text-muted">{site.address}</li>
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-1.5 rounded-md border border-border-strong px-4 py-2 text-sm text-text transition-colors hover:border-accent hover:text-accent-strong"
            >
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-6 text-xs text-muted">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
