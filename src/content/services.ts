import type { Service } from "./types";

export const services: Service[] = [
  {
    slug: "data-engineering",
    name: "Data Engineering",
    headline: "The data foundation everything else runs on.",
    sub: "Pipelines, warehouses, and lakehouses that turn scattered sources into one governed, reliable layer.",
    overview: [
      "Analytics and AI are only as good as the data beneath them.",
      "Most teams lose weeks to brittle exports, metrics that disagree, and pipelines no one trusts — and every new dashboard inherits the mess.",
      "We build the ingestion, modeling, and governance layer that makes everything downstream **faster to build and safe to trust**.",
    ],
    deliver: [
      {
        title: "Real-time & batch pipelines",
        desc: "Ingest from any source — databases, APIs, events, files — on the cadence each use case needs, without hand-built glue.",
      },
      {
        title: "Warehouse & lakehouse modeling",
        desc: "Well-modeled data in Snowflake, BigQuery, or Databricks that stays fast and affordable as it grows.",
      },
      {
        title: "Identity resolution & unification",
        desc: "Stitch fragmented records into one clean entity, so your metrics finally agree.",
      },
      {
        title: "Data quality & observability",
        desc: "Automated tests, freshness checks, and alerting catch bad data before it reaches a dashboard.",
      },
      {
        title: "Governance, lineage & access",
        desc: "Know where every number came from and who can see it — audit-ready by default.",
      },
      {
        title: "Legacy migration & cost control",
        desc: "Move off aging stacks with parity checks, and tune spend so the platform pays for itself.",
      },
    ],
    howWeWork:
      "**Governance-first.** Security, lineage, quality, and access control go in from day one — and we meet your stack where it is instead of forcing a rebuild.",
    approach: [
      { title: "Discover & map", desc: "We inventory every source, owner, and definition — and agree what each metric actually means — before writing a line of pipeline." },
      { title: "Model for use", desc: "We design the warehouse or lakehouse around the questions you'll actually ask, not the shape of the source systems." },
      { title: "Build with guardrails", desc: "Pipelines ship with automated tests, lineage, and access control from the first commit — quality is not a later phase." },
      { title: "Run & hand over", desc: "Monitored, documented, and cost-tuned — owned by your team with full knowledge transfer, or run by ours." },
    ],
    tech: [
      "Snowflake",
      "BigQuery",
      "Databricks",
      "Kafka",
      "Python",
      "dbt",
      "Airflow",
      "PostgreSQL",
      "AWS",
      "Azure",
      "GCP",
    ],
    techGroups: [
      { group: "Ingestion & CDC", items: ["Airbyte", "Fivetran", "Debezium", "Kafka Connect", "REST / GraphQL APIs"] },
      { group: "Streaming", items: ["Apache Kafka", "Spark Structured Streaming", "AWS Kinesis", "Google Pub/Sub"] },
      { group: "Warehouse & Lakehouse", items: ["Snowflake", "BigQuery", "Databricks · Delta Lake", "Amazon Redshift", "Apache Iceberg"] },
      { group: "Storage & Databases", items: ["PostgreSQL", "MongoDB", "Amazon S3", "Google Cloud Storage", "Azure Data Lake"] },
      { group: "Transformation & Modeling", items: ["dbt", "Apache Spark", "SQL", "Python", "pandas"] },
      { group: "Orchestration", items: ["Apache Airflow", "Dagster", "Prefect"] },
      { group: "Governance & Quality", items: ["Unity Catalog", "Great Expectations", "OpenLineage", "Data contracts"] },
      { group: "Cloud & Infra", items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"] },
    ],
    caseStudySlugs: [
      "privacy-safe-data-collaboration",
      "retail-store-intelligence",
    ],
    industrySlugs: [
      "media-entertainment",
      "retail",
      "healthcare",
      "banking-finance",
    ],
    published: true,
  },
  {
    slug: "data-analytics",
    name: "Data Analytics",
    headline: "Data turned into decisions people actually make.",
    sub: "Live dashboards, revenue intelligence, and self-serve analytics — built on data your teams can trust.",
    overview: [
      "Everyone claims to be data-driven — yet the meeting still opens with an argument about whose number is right.",
      "Reports go stale on export, dashboards multiply faster than anyone can trust them, and the questions that matter sit in a queue.",
      "We build the governed metric model, dashboards, and real-time intelligence that give every team one agreed picture — and **the confidence to act on it now**.",
    ],
    deliver: [
      {
        title: "Executive & operational dashboards",
        desc: "The few numbers each role needs to run their day — not a wall of charts.",
      },
      {
        title: "Revenue & subscriber intelligence",
        desc: "See new, renewed, churned, and at-risk in one view, and act before it's too late.",
      },
      {
        title: "Real-time metrics & alerting",
        desc: "Get told the moment something moves, instead of finding out in next month's report.",
      },
      {
        title: "Self-serve analytics",
        desc: "Let teams answer their own questions without waiting on a data queue.",
      },
      {
        title: "Semantic layer & metric governance",
        desc: "One governed, version-controlled definition per metric, so every dashboard and tool agrees.",
      },
      {
        title: "Forecasting & decision intelligence",
        desc: "Move from \"what happened\" to \"what's likely next\" with forecasts and what-if scenarios.",
      },
    ],
    howWeWork:
      "We work backward from the decision — model the metric once, then design the view around **the person who acts on it**.",
    approach: [
      { title: "Start from the decision", desc: "We define the calls each team needs to make, then work backward to the metrics that inform them." },
      { title: "Model the metric", desc: "One governed, version-controlled definition per metric in a semantic layer, so every tool agrees." },
      { title: "Design for the reader", desc: "Dashboards tuned to the person acting on them — the few numbers that matter, on any device." },
      { title: "Keep it honest", desc: "Freshness checks, tests, and alerting so the numbers stay trustworthy long after launch." },
    ],
    tech: [
      "BigQuery",
      "Snowflake",
      "Looker Studio",
      "dbt",
      "Power BI",
      "Python",
      "SQL",
      "Databricks",
      "Firebase Analytics",
    ],
    techGroups: [
      { group: "BI & Visualization", items: ["Looker Studio", "Power BI", "Tableau", "Metabase", "Apache Superset"] },
      { group: "Semantic Layer & Metrics", items: ["dbt Semantic Layer", "Cube", "LookML"] },
      { group: "Warehouse & Query", items: ["BigQuery", "Snowflake", "Databricks SQL", "DuckDB"] },
      { group: "Transformation & Modeling", items: ["dbt", "SQL", "Python", "pandas"] },
      { group: "Real-Time Analytics", items: ["Apache Kafka", "ClickHouse", "Materialize", "Apache Druid"] },
      { group: "Product & Event Analytics", items: ["Firebase Analytics", "GA4", "Amplitude", "Segment"] },
      { group: "ML & Forecasting", items: ["scikit-learn", "Prophet", "Vertex AI", "Databricks ML"] },
      { group: "Governance & Quality", items: ["dbt tests", "Great Expectations", "Data contracts", "Row / column access"] },
    ],
    caseStudySlugs: [
      "hospital-command-center",
      "privacy-safe-data-collaboration",
    ],
    industrySlugs: [
      "healthcare",
      "media-entertainment",
      "banking-finance",
    ],
    published: true,
  },
  {
    slug: "software-engineering",
    name: "Software Engineering",
    headline: "The software your business runs on — built and modernized.",
    sub: "From new products to zero-downtime migrations. Secure, tested, and built to scale.",
    overview: [
      "Every business becomes a software business — and every system eventually becomes the thing slowing it down.",
      "Roadmaps stall behind fragile code, a risky migration keeps getting postponed, and \"we'll add tests later\" never arrives.",
      "We take software from architecture to production and keep it healthy — new platforms and legacy modernization alike, **without disrupting live operations**.",
    ],
    deliver: [
      {
        title: "Full-stack product & platform builds",
        desc: "From first architecture to production, with a team that owns the whole stack.",
      },
      {
        title: "Legacy-to-modern migrations",
        desc: "Old and new run in parallel, so you cut over with zero downtime and no data loss.",
      },
      {
        title: "APIs, portals & internal tools",
        desc: "The connective software your teams and partners rely on, built to last.",
      },
      {
        title: "Systems integration",
        desc: "Wire disparate systems, identity providers, and third-party services into one coherent whole.",
      },
      {
        title: "Security, governance & audit by design",
        desc: "Access control, secrets, and a complete audit trail baked in — not bolted on.",
      },
      {
        title: "Automated testing & CI/CD",
        desc: "Every release gated by tests and security checks, so shipping stays safe and fast.",
      },
    ],
    howWeWork:
      "We de-risk change. Old and new run in parallel, every release is gated by automated checks, and a complete audit trail means **nothing ships unseen**.",
    approach: [
      { title: "Architect for change", desc: "We design for the next three years — clear boundaries, documented decisions — not just the next sprint." },
      { title: "Run in parallel", desc: "New systems prove themselves alongside the old, so cutover is a switch, not a leap of faith." },
      { title: "Gate every release", desc: "Automated tests, security scans, and reviews stand between a commit and production." },
      { title: "Operate & harden", desc: "Monitoring, tracing, and a full audit trail keep it healthy — and improving — after launch." },
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "MSSQL",
      "Redis",
      "Kafka",
      "Keycloak / OAuth2",
      "Docker",
    ],
    techGroups: [
      { group: "Languages", items: ["Java", "TypeScript", "Python", "Go", "SQL"] },
      { group: "Backend & APIs", items: ["Spring Boot", "FastAPI", "Node.js", "REST", "GraphQL"] },
      { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "React Native"] },
      { group: "Data & Storage", items: ["PostgreSQL", "MSSQL", "MongoDB", "Redis"] },
      { group: "Messaging & Events", items: ["Apache Kafka", "RabbitMQ", "CloudEvents"] },
      { group: "Auth & Security", items: ["Keycloak", "OAuth2 / OIDC", "Microsoft Entra ID", "JWT"] },
      { group: "Testing & Quality", items: ["Jest", "Playwright", "Testing Library", "Vitest"] },
      { group: "DevOps & CI/CD", items: ["Docker", "Kubernetes", "GitHub Actions", "Azure Pipelines", "Terraform"] },
    ],
    caseStudySlugs: [
      "core-banking-modernization",
      "back-office-control-audit",
      "self-serve-customer-alerts",
      "hospital-command-center",
    ],
    industrySlugs: ["banking-finance", "healthcare", "media-entertainment"],
    published: true,
  },
  {
    slug: "ai-automation",
    name: "AI Automation",
    headline: "Custom AI that does the work — reliably, in production.",
    sub: "Multi-agent systems, computer vision, and generative AI, with the guardrails to run for real.",
    overview: [
      "Most AI never leaves the demo — impressive in a slide, unpredictable the moment real data hits it.",
      "Pilots stall without guardrails, and no one trusts an output they can't check.",
      "We design, build, and operate custom AI that automates real workflows — shipped with **the monitoring, guardrails, and MLOps** it takes to run every day.",
    ],
    deliver: [
      {
        title: "Custom models & multi-agent systems",
        desc: "AI built for your workflow and data — not a generic wrapper.",
      },
      {
        title: "Computer vision & real-time inference",
        desc: "Turn live video and images into decisions in the moment.",
      },
      {
        title: "Generative AI with validation",
        desc: "Create content and assets at scale, with checks that keep them on-brand and compliant.",
      },
      {
        title: "Retrieval & document intelligence (RAG)",
        desc: "Answer questions and extract structure from your own documents and knowledge — grounded, not guessed.",
      },
      {
        title: "Intelligent workflow automation",
        desc: "Take the repetitive, rule-heavy work off people's plates, end to end.",
      },
      {
        title: "MLOps & evaluation",
        desc: "Models that stay accurate — evaluated, watched for drift, and refreshed on schedule.",
      },
    ],
    howWeWork:
      "**Outcome-first and compliance-ready.** We set the acceptance bar, keep humans in the loop where judgment matters, and instrument every model for accuracy, drift, and cost.",
    approach: [
      { title: "Anchor to the metric", desc: "We start from the business outcome and the acceptance bar, then choose the simplest model that clears it." },
      { title: "Keep humans in the loop", desc: "Safeguards, approvals, and confidence thresholds wherever judgment matters." },
      { title: "Prove it in production", desc: "Shadow-run against real workloads and evaluate on real cases before it makes a single live call." },
      { title: "Watch and improve", desc: "Accuracy, drift, cost, and latency instrumented from day one, with a path to retrain." },
    ],
    tech: [
      "Python",
      "LiteLLM",
      "CrewAI",
      "LLaVA / Qwen-VL",
      "Gemini",
      "Veo",
      "FastAPI",
      "MongoDB",
      "FalkorDB",
      "Databricks",
      "Vertex AI",
    ],
    techGroups: [
      { group: "Models & Providers", items: ["Gemini", "OpenAI", "Anthropic Claude", "Llama", "Qwen-VL / LLaVA"] },
      { group: "Agents & Orchestration", items: ["CrewAI", "LangGraph", "LiteLLM", "Model Context Protocol"] },
      { group: "Computer Vision", items: ["YOLO", "OpenCV", "Vision Transformers", "Veo"] },
      { group: "Retrieval & Knowledge (RAG)", items: ["FalkorDB", "pgvector", "LlamaIndex", "Embeddings"] },
      { group: "Serving & Inference", items: ["FastAPI", "vLLM", "Triton", "Ray Serve"] },
      { group: "Data & Backend", items: ["Python", "MongoDB", "PostgreSQL", "Databricks"] },
      { group: "MLOps & Evaluation", items: ["MLflow", "Weights & Biases", "LangSmith", "Ragas"] },
      { group: "Cloud & Infra", items: ["Vertex AI", "Azure ML", "AWS", "Docker", "Kubernetes"] },
    ],
    caseStudySlugs: [
      "nurse-roster-planning",
      "retail-store-intelligence",
      "ai-creative-generation",
      "ai-media-qc",
    ],
    industrySlugs: [
      "healthcare",
      "retail",
      "automotive",
      "media-entertainment",
      "banking-finance",
    ],
    published: true,
  },
  {
    slug: "cloud",
    name: "Cloud",
    headline: "Cloud that's secure, scalable, and calm.",
    sub: "Architecture, migration, and DevOps across AWS, Azure, and GCP — engineered for uptime and compliance.",
    overview: [
      "Cloud should be an advantage, not an on-call headache.",
      "Bills creep, environments drift, a \"quick\" migration turns into months, and every incident is a fire drill because nothing is reproducible.",
      "We design, migrate, and operate infrastructure as code that scales with demand, **holds up to audit, and stays quiet**.",
    ],
    deliver: [
      {
        title: "Architecture & migration",
        desc: "Right-sized, resilient environments on AWS, Azure, or GCP — moved without the drama.",
      },
      {
        title: "Landing zones & governance",
        desc: "Multi-account setup with guardrails, policy, and cost boundaries from day one.",
      },
      {
        title: "Containers & orchestration",
        desc: "Docker and Kubernetes set up to scale and self-heal, not to babysit.",
      },
      {
        title: "CI/CD & platform engineering",
        desc: "Automated pipelines and golden paths so releases are routine, repeatable, and reversible.",
      },
      {
        title: "Secrets, identity & access",
        desc: "Least-privilege by default, with managed secrets and single sign-on.",
      },
      {
        title: "Observability, cost & reliability",
        desc: "See what's happening, catch it early, recover fast, and stop paying for what you don't use.",
      },
    ],
    howWeWork:
      "Infrastructure as code, least-privilege by default, and observability from day one — so scale, cost, and compliance **are built in, not bolted on**.",
    approach: [
      { title: "Design as code", desc: "Every environment defined in code — reproducible, reviewable, and easy to roll back." },
      { title: "Secure by default", desc: "Least-privilege, managed secrets, encryption, and policy guardrails from the start." },
      { title: "Migrate safely", desc: "Staged cutovers with rollback and parity checks, so live services never blink." },
      { title: "Operate quietly", desc: "Observability, autoscaling, and cost controls keep it healthy without heroics." },
    ],
    tech: [
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Azure DevOps",
      "Key Vault",
      "Microsoft Entra ID",
      "Application Insights",
      "GCS / Firestore",
    ],
    techGroups: [
      { group: "Cloud Platforms", items: ["AWS", "Microsoft Azure", "Google Cloud"] },
      { group: "IaC & Provisioning", items: ["Terraform", "Pulumi", "Bicep", "CloudFormation"] },
      { group: "Containers & Orchestration", items: ["Docker", "Kubernetes", "Helm", "Argo CD"] },
      { group: "CI/CD", items: ["GitHub Actions", "Azure Pipelines", "GitLab CI"] },
      { group: "Identity & Secrets", items: ["Microsoft Entra ID", "Key Vault", "OAuth2 / OIDC", "HashiCorp Vault"] },
      { group: "Observability", items: ["Application Insights", "Prometheus", "Grafana", "OpenTelemetry"] },
      { group: "Data & Storage", items: ["Amazon S3", "Google Cloud Storage", "Firestore", "Managed Postgres / Redis"] },
      { group: "Networking & Edge", items: ["API Gateway", "App Gateway", "CDN", "Load Balancers"] },
    ],
    caseStudySlugs: [
      "core-banking-modernization",
      "hospital-command-center",
    ],
    industrySlugs: ["banking-finance", "healthcare"],
    published: true,
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
export const publishedServices = () => services.filter((s) => s.published);
