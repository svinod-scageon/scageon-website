"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

// The Studio is a client-rendered app once loaded, so the page shell itself
// can be static — no per-request server work needed for this route.
export const dynamic = "force-static";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
