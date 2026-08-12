import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  name: "default",
  title: "Scageon Website",

  projectId,
  dataset,
  basePath: "/studio", // tells the Studio's own router where it's mounted, so it doesn't misread the URL

  plugins: [
    structureTool({ structure }), // the main content-editing interface, using our custom sidebar
    visionTool(), // a GROQ query playground, useful for us as developers — not something the editor needs
  ],

  schema: {
    types: schemaTypes,
  },
});
