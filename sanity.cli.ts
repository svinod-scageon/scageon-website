import { defineCliConfig } from "sanity/cli";

// Used by the `sanity` CLI tool (e.g. `npx sanity deploy`) so it knows which
// project/dataset to target without you passing flags every time.
export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  },
});
