import type { SchemaTypeDefinition } from "sanity";

// Document types — the top-level, listable content
import { service } from "./service";
import { industry } from "./industry";
import { caseStudy } from "./caseStudy";
import { product } from "./product";
import { siteSettings } from "./siteSettings";

// Object types — reusable shapes nested inside the documents above
import { deliverable } from "./objects/deliverable";
import { step } from "./objects/step";
import { techGroup } from "./objects/techGroup";
import { solution } from "./objects/solution";
import { outcome } from "./objects/outcome";

export const schemaTypes: SchemaTypeDefinition[] = [
  // documents
  service,
  industry,
  caseStudy,
  product,
  siteSettings,
  // objects
  deliverable,
  step,
  techGroup,
  solution,
  outcome,
];
