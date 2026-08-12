import type { ReactNode } from "react";

// This is a fully independent root layout — deliberately bare. The Studio
// is its own self-contained app with its own styling; it doesn't get any of
// the marketing site's Navbar/Footer/theming/smooth-scroll.
export { metadata, viewport } from "next-sanity/studio";

export default function StudioRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
