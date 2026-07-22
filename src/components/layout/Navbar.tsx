"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowUpRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { services } from "@/content/services";
import { industries } from "@/content/industries";

type MenuItem = { label: string; href: string; blurb?: string; muted?: boolean };

const serviceBlurbs: Record<string, string> = {
  "data-engineering": "Pipelines & a governed data layer",
  "data-analytics": "Dashboards & decision intelligence",
  "software-engineering": "Build & modernize software",
  "ai-automation": "Custom AI, in production",
  cloud: "Architecture, migration & DevOps",
};
const industryBlurbs: Record<string, string> = {
  healthcare: "Command centers & workforce AI",
  "banking-finance": "Zero-downtime, audited platforms",
  retail: "Real-time store intelligence",
  automotive: "AI creative at scale",
  "media-entertainment": "Media QC & data collaboration",
  "ott-streaming": "Subscriber & revenue intelligence",
};

const menus: { label: string; href: string; items: MenuItem[] }[] = [
  {
    label: "Services",
    href: "/services",
    items: services.map((s) => ({
      label: s.name,
      href: `/services/${s.slug}`,
      blurb: serviceBlurbs[s.slug],
    })),
  },
  {
    label: "Industries",
    href: "/industries",
    items: industries.map((i) => ({
      label: i.name,
      href: i.published ? `/industries/${i.slug}` : "/industries",
      blurb: i.published ? industryBlurbs[i.slug] : "Coming soon",
      muted: !i.published,
    })),
  },
];

const flatLinks = [{ label: "About", href: "/about" }];

const link =
  "relative py-2 text-sm transition-colors after:absolute after:-bottom-px after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-200 hover:after:scale-x-100";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-surface/90 backdrop-blur-md transition-colors duration-300",
        scrolled ? "border-border" : "border-transparent"
      )}
    >
      <nav
        className={cn(
          "mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-4 px-5 transition-all duration-300 sm:px-8",
          scrolled ? "h-16" : "h-20"
        )}
        aria-label="Primary"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Scageon — home">
          <Image
            src="/logo.png"
            alt="Scageon"
            width={121}
            height={16}
            priority
            className="logo-ink h-[18px] w-auto"
          />
        </Link>

        {/* Centered nav */}
        <ul className="hidden items-center justify-center gap-8 md:flex">
          {menus.map((menu) => {
            const active = isActive(menu.href);
            return (
              <li key={menu.href} className="group relative">
                <button
                  type="button"
                  onClick={(e) => e.currentTarget.blur()}
                  className={cn(
                    link,
                    "flex items-center gap-1",
                    active ? "text-text after:scale-x-100" : "text-muted hover:text-text"
                  )}
                  aria-haspopup="true"
                >
                  {menu.label}
                  <ChevronDown
                    className="h-3.5 w-3.5 opacity-60 transition-transform duration-300 group-hover:rotate-180"
                    aria-hidden
                  />
                </button>

                {/* Mega-menu (hover / focus only) */}
                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="w-72 overflow-hidden rounded-lg border border-border bg-surface shadow-lg">
                    <div className="p-2">
                      {menu.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={(e) => e.currentTarget.blur()}
                          className={cn(
                            "flex flex-col rounded-md px-3 py-2.5 transition-colors",
                            item.muted
                              ? "cursor-default text-muted/50"
                              : "hover:bg-bg"
                          )}
                          tabIndex={item.muted ? -1 : undefined}
                        >
                          <span
                            className={cn(
                              "text-sm font-medium",
                              item.muted ? "" : "text-text"
                            )}
                          >
                            {item.label}
                          </span>
                          {item.blurb && (
                            <span className="mt-0.5 text-xs text-muted">
                              {item.blurb}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                    <Link
                      href={menu.href}
                      onClick={(e) => e.currentTarget.blur()}
                      className="flex items-center justify-between border-t border-border px-5 py-3 text-xs font-medium uppercase tracking-[0.12em] text-accent-strong transition-colors hover:bg-bg"
                    >
                      All {menu.label}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}

          {flatLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={cn(
                  link,
                  isActive(l.href) ? "text-text after:scale-x-100" : "text-muted hover:text-text"
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden justify-end md:flex">
          <Link
            href="/contact"
            className="group/cta inline-flex items-center gap-1.5 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
          >
            Contact
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="col-start-3 inline-flex items-center justify-center justify-self-end rounded-md p-2 text-text md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div className="border-t border-border bg-surface px-5 pb-6 pt-3 md:hidden">
          {menus.map((menu) => (
            <div key={menu.href} className="border-b border-border py-3">
              <Link
                href={menu.href}
                className="flex items-center justify-between text-base font-medium text-text"
              >
                {menu.label}
                <ArrowRight className="h-4 w-4 text-accent-strong" />
              </Link>
              <div className="mt-2 grid gap-1.5">
                {menu.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "text-sm",
                      item.muted ? "text-muted/50" : "text-muted"
                    )}
                  >
                    {item.label}
                    {item.muted && " · soon"}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          {flatLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block border-b border-border py-3 text-base font-medium text-text"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-accent px-5 py-3 text-sm font-medium text-white"
          >
            Contact <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
