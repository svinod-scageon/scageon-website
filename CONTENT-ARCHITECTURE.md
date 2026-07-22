# Scageon Website — Content Architecture & Information Model

Source of truth for **what content goes where**. Derived from the company profile deck
(`Scageon_Technologies_Company_Profile (1).pdf`) and scageon.com metadata.
Pairs with [`PROJECT-PLAN.md`](PROJECT-PLAN.md) (the *how*) and
[`design-system/scageon/MASTER.md`](design-system/scageon/MASTER.md) (the *look*).

> ✅ Confirmed with you: **Hybrid aesthetic** — light/clean content, dark navy hero/nav/footer bands.
> ⏳ You will provide the final per-industry / per-service copy. This doc defines the **slots** for it.

---

## 1. Company facts (confirmed)

| Field | Value |
|---|---|
| Name | Scageon Technologies Private Limited |
| Tagline | **Enabling an AI-Powered Future** |
| Positioning | Data & AI solutions for mid-market enterprises |
| Proof points | 50+ projects · HIPAA & SOX compliant · enterprise security & governance |
| Email | parag.agarwal@scageon.com |
| Phone | +91 9956953666 |
| Address | Mantri Comercio, No 51, 202/A Devarabeesanahalli, Bellandur, Bengaluru 560103, Karnataka |
| Founded | Jan 2025 |

---

## 2. Taxonomy — Services × Industries

**3 Services**

1. **Data & Analytics** — modern data infrastructure, cloud migrations, real-time analytics
2. **AI Automation** — custom AI models, intelligent automation, MLOps frameworks
3. **Product Engineering** — data/application/cloud engineering, end-to-end product builds

**6 Industries**

Retail · Automotive · Media & Entertainment · Healthcare · OTT / Streaming · **Banking & Finance**

> Banking & Finance added from `Core_Banking_Modernization.docx` + `EWB bank Back office [ short version ].docx` (not in original deck). Content: [`content/industries/banking-finance.md`](content/industries/banking-finance.md). Healthcare content: [`content/industries/healthcare.md`](content/industries/healthcare.md).

**Case-study mapping (the real proof for each cell)**

| Case study | Industry | Service | Headline metric |
|---|---|---|---|
| Real-Time AI Intelligence Platform (US convenience retail) | Retail | AI Automation (Computer Vision) | Fuses POS + cameras + journey graph; multi-agent "virtual store team" |
| CreativeAI marketing generation | Automotive | AI Automation | Single shoot → all product variations, on-demand assets |
| AI-Powered Audio-Video QC Validation | Media & Entertainment | AI Automation | 70% QC time reduction · 85% compliance accuracy |
| Privacy-Safe Data Collaboration Platform | Media & Entertainment | Data & Analytics | 10M+ records · zero PII leakage · 50+ partners |
| Healthcare Data Platform (Middle East) | Healthcare | Product Engineering | 20% staff productivity gain |
| AI-Powered Nurse Rostering (IHH) | Healthcare | AI Automation | Rosters in minutes not days; multi-hospital |
| Unified Subscriber Analytics (OTT) | OTT/Streaming | Data & Analytics | 620K+ subscribers · 78.3% Day-1 retention visibility |

---

## 3. Sitemap / Information Architecture

```
/                         Home
/about                    About Us
/services                 Services overview (3 cards → detail pages)
  /services/data-analytics
  /services/ai-automation
  /services/product-engineering
/industries               Industries overview (5 cards → detail pages)
  /industries/retail
  /industries/automotive
  /industries/media-entertainment
  /industries/healthcare
  /industries/ott-streaming
  /industries/banking-finance
/contact                  Contact Us
```

Nav (dark band): **Logo · Services (mega-menu) · Industries (mega-menu) · About · Contact →** (CTA button)

---

## 4. Page content templates (the slots you'll fill)

### 4a. INDUSTRY page — the structure you described

> Your example: *"healthcare industry — what it is, what we're doing in it, how it's affecting the industry."*
> Every industry page follows this exact spine:

| # | Section | Content it holds |
|---|---|---|
| 1 | **Hero** (dark band) | Industry name · one-line positioning · ambient node motif |
| 2 | **The Landscape** *(what it is)* | 2–3 sentences on the industry + the data/AI opportunity & the problems it faces today |
| 3 | **What We Do Here** *(what we're doing)* | 3–5 capability cards: Scageon's offerings tailored to this industry |
| 4 | **Outcomes** *(how it's affecting the industry)* | Qualitative outcome lines, each linking to its case study. **No standalone number tiles here.** |
| 5 | **Case Studies** | The real project(s) — Problem · Solution · Tech · **Impact (all specific numbers live here, attributed & in context)** |

> **Metrics rule (all industries & services):** a specific number belongs to the project that produced it, so it lives in that **case study's Impact block**. Industry pages state outcomes qualitatively and link inward. Service pages show **aggregate/breadth proof only** (e.g. "50+ projects", "zero-downtime migrations", "HIPAA/SOX") — never per-project percentages.
| 6 | **Related Services** | Links to the 2–3 services applied in this industry |
| 7 | **CTA** (dark band) | "Let's build in [industry] → Contact" |

**Per-industry starter (you refine the copy):**

- **Healthcare** — landscape: fragmented hospital data, staffing pressure, compliance load. What we do: healthcare data platforms, AI workforce automation (rostering), decision support. Impact: 20% productivity gain, faster rostering, compliance. Cases: Healthcare Data Platform, IHH Nurse Rostering.
- **Retail** — landscape: sales data disconnected from in-store behavior. What we do: real-time intelligence fusing POS + CCTV + journey graphs, multi-agent ops. Impact: higher sales, fewer stock-outs, live insights. Case: Real-Time AI Intelligence Platform.
- **Media & Entertainment** — landscape: manual QC, siloed advertiser data, privacy risk. What we do: AI audio-video QC, privacy-safe data collaboration. Impact: 70% faster QC, zero PII leakage. Cases: AV QC, Data Collaboration.
- **Automotive** — landscape: slow, costly campaign creative production. What we do: AI-driven creative generation (CreativeAI). Impact: on-demand assets, scale, compliance. Case: CreativeAI.
- **OTT / Streaming** — landscape: fragmented subscriber/payment/viewing data. What we do: unified analytics & revenue intelligence pipelines. Impact: 620K+ subscribers tracked, churn visibility. Case: Subscriber Analytics.

### 4b. SERVICE page

| # | Section | Content it holds |
|---|---|---|
| 1 | **Hero** (dark band) | Service name · value proposition |
| 2 | **Overview** *(what it is)* | What this service means at Scageon |
| 3 | **What We Deliver** | Capability list / sub-offerings (cards) |
| 4 | **How We Work** | Approach: MLOps, governance, security, delivery model |
| 5 | **Tech We Use** | Stack chips (Python, FastAPI, Snowflake, GCP/Azure/AWS, React, etc.) |
| 6 | **Proof** | Case studies powered by this service |
| 7 | **Industries** | Where this service is applied (links) |
| 8 | **CTA** (dark band) | "Start a project → Contact" |

### 4c. HOME

1. **Hero** (dark) — "Enabling an AI-Powered Future" + primary CTA + ambient node/aurora motif
2. **Trust bar** — 50+ projects · HIPAA · SOX · enterprise governance
3. **Services** — 3 cards → detail
4. **Industries** — 5 cards → detail
5. **Featured impact** — rotating case-study highlights + metric tiles
6. **Why Scageon** — differentiators (mid-market focus, compliance-first, multi-agent AI)
7. **CTA / Contact** (dark)

### 4d. ABOUT

Story · Mission ("Enabling an AI-Powered Future") · What makes us different · How we work (compliance-first, governance) · Optional team · Contact CTA.

### 4e. CONTACT

Form (name, email, company, message) · direct email/phone · address · map (optional) · form target TBD (Formspree / Resend / API).

---

## 5. What I still need from you (per your note)

For **each of the 5 industries** and **each of the 3 services**, the final copy for:
1. The **landscape / overview** paragraph (*what it is*)
2. The **what-we-do** bullets (*what we're doing*)
3. The **impact** statement + any metrics (*how it affects the industry*)
4. Any additional case studies beyond the 7 in the deck
5. Real team bios/photos (if About should include a team section)
6. Contact form destination (inbox or service)
