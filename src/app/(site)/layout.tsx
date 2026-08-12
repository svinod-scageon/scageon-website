import type { Metadata } from "next";
import { Inter, Inter_Tight, Newsreader } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";
import MotionProvider from "@/components/providers/MotionProvider";
import { getSiteSettings } from "@/sanity/queries/site";
import { getServices } from "@/sanity/queries/services";
import { getIndustries } from "@/sanity/queries/industries";
import { getPublishedProducts } from "@/sanity/queries/products";
import { stripBold } from "@/components/ui/Bold";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteSettings();
  return {
    metadataBase: new URL(site.url),
    title: {
      default: `${site.name} — ${site.tagline}`,
      template: `%s — ${site.name}`,
    },
    description: stripBold(site.description),
    openGraph: {
      title: `${site.name} — ${site.tagline}`,
      description: stripBold(site.description),
      url: site.url,
      siteName: site.name,
      type: "website",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Fetched once here (not inside Navbar) because Navbar is a Client
  // Component — it can't await a Sanity fetch itself, so the data has to be
  // gathered in a Server Component and passed down as props.
  const [services, industries, products] = await Promise.all([
    getServices(),
    getIndustries(),
    getPublishedProducts(),
  ]);

  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${newsreader.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <noscript>
          <style>{`[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-dvh flex-col">
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SmoothScroll />
          <MotionProvider>
            <Navbar
              services={services}
              industries={industries}
              showProductLink={products.length > 0}
            />
            <main className="flex-1">{children}</main>
            <Footer />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
