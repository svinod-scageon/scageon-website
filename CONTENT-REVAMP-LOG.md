# Content Revamp — Change Log

Running record of the 2026 content & typography revamp, kept for demo/handover.
Every entry lists **file → what changed → before → after**.

**Ground rules for this revamp:**
- Content, wording, and typography only.
- No layout, styling, spacing, colour, or animation changes.
- Bullets used wherever prose can become a list.
- No invented facts. Metrics, client names, and tech stacks stay exactly as they were.

---

## Step 1 — Heading typeface → Newsreader ✅

**Goal:** replace the geometric sans display face with a serif that reads premium and serious.

**Rejected first:** Fraunces — too soft/playful (rounded terminals, decorative curves); read as a
lifestyle brand rather than an enterprise data & AI vendor. Fully reverted.

**Chosen:** **Newsreader** — editorial serif, calm and authoritative at large sizes.
Body copy and UI text remain on **Inter**; card/item titles remain on **Inter Tight**.

### Where the serif is applied

| File | Element |
|---|---|
| `src/app/layout.tsx` | Font loaded, exposed as `--font-newsreader` |
| `src/components/sections/Hero.tsx` | Home hero `h1` |
| `src/components/sections/PageHero.tsx` | Every inner-page hero `h1` (About, Contact, Services, Industries + all detail pages) |
| `src/components/ui/SectionHeading.tsx` | Shared section `h2` (drives Home's "What we do" / "Where we do it") |
| `src/components/sections/CtaBand.tsx` | Dark closing-CTA `h2` on every page |
| `src/app/about/page.tsx` | "How we work" |
| `src/app/contact/page.tsx` | "Get in touch" |
| `src/app/services/[slug]/page.tsx` | "Overview", "What we deliver", "How we work", "Tech we use", "Proof", "Industries we apply this in" |
| `src/app/industries/[slug]/page.tsx` | "What we do here", "Outcomes", "Services powering this" |

### Deliberately left on the sans font
Service names, industry names, case-study titles, approach-step titles, and value-prop titles —
so the serif stays a display accent and does not flatten the hierarchy.

---

## Step 2 — Home page (`/`) ✅

### 2.1 Hero headline
**File:** `src/components/sections/Hero.tsx`

| | |
|---|---|
| Before | "We build the data and AI systems that move your business forward." |
| After | **"We build the data and AI systems enterprises run on."** |

*Why:* shorter and more assured. "move your business forward" is filler that any vendor could claim.

### 2.2 Hero sub-line / SEO description — ⚠️ stale fact fixed
**File:** `src/content/site.ts`
**Also feeds:** site-wide SEO meta description, About page hero.

| | |
|---|---|
| Before | "Data & AI solutions for mid-market enterprises — from real-time data platforms to production-grade AI automation and **product engineering**." |
| After | **"Data and AI for mid-market enterprises — data platforms, production AI, software, and cloud, engineered for regulated, mission-critical environments."** |

*Why:* "Product Engineering" is no longer a service line. The new copy covers all five current
services and adds the regulated/mission-critical positioning that Banking and Healthcare rely on.

### 2.3 Services section heading
**File:** `src/components/sections/ServicesPreview.tsx`

| | Before | After |
|---|---|---|
| Title | "Five ways we move the needle." | **"Five disciplines. One engineering standard."** |
| Intro | "From the data layer to production AI, the software, and the cloud it runs on — each capability stands alone or works together." | **"From the data layer to production AI — and the software and cloud it all runs on. Each stands alone, or works as one."** |

*Why:* "move the needle" is corporate filler; "one engineering standard" is an actual claim.

### 2.4 Industries section intro
**File:** `src/components/sections/IndustriesPreview.tsx`

| | |
|---|---|
| Before | "Compliance-critical, mission-critical, real-time. Explore how we work in each." |
| After | **"Compliance-critical, real-time, and unforgiving of downtime."** |

*Why:* dropped "Explore how we work in each" — the cards already say that. Also removed the
"compliance-critical / mission-critical" repetition.
**Title unchanged** — "Built for the industries that can't afford to get it wrong." already lands.

### 2.5 Stats bar — ⚠️ factual error fixed
**File:** `src/components/sections/ProofStats.tsx`

| | Before | After |
|---|---|---|
| Third tile | "**3** Core service lines" | **"5 Service lines"** |

*Why:* `services.ts` publishes **five** services (Data Engineering, Data Analytics, Software
Engineering, AI Automation, Cloud). The site was under-selling itself and contradicting the
"Five disciplines" heading directly above.

> **Open question for review:** the "**100%** Compliance-first delivery" tile. A hard percentage on
> a qualitative claim reads soft next to "50+ projects". Stronger real proof is already on file —
> *HIPAA & SOX compliant*. Awaiting a decision.

### 2.6 Closing CTA
**File:** `src/app/page.tsx`

| | Before | After |
|---|---|---|
| Title | "Ready to put your data to work?" | **"Let's put your data to work."** |
| Body | "Tell us the outcome you're chasing — we'll show you the fastest credible path with AI and data." | **"Tell us the outcome you need. We'll show you the fastest credible path there."** |

*Why:* a statement projects more confidence than a question.

### Not bulleted — and why
Every block on the Home page is already a single line. Bulleting them would add clutter rather
than remove it. The real bullet opportunities are on Services, Industries, and About.

---

## Step 3 — Services (`/services` + 5 detail pages) ✅

### 3.1 Listing cards no longer dump a paragraph
**File:** `src/app/services/page.tsx`

Cards rendered the full `overview` paragraph (60–80 words each). Five of those stacked in a grid
made the page read as a wall of text — the worst offender against the "minimal = premium" goal.

| | |
|---|---|
| Before | Card body = `{s.overview}` — the full paragraph |
| After | Card body = **`{s.sub}`** — the short one-liner |

*Why:* matches the Home page cards exactly, so the two pages are now consistent. The full
overview still lives on the detail page, where there is room for it.

### 3.2 Services SEO description — ⚠️ stale fact fixed
**File:** `src/app/services/page.tsx`

| | |
|---|---|
| Before | "Data & Analytics, AI Automation, and **Product Engineering** — the **three** ways Scageon moves mid-market enterprises forward." |
| After | **"Data Engineering, Data Analytics, Software Engineering, AI Automation, and Cloud — the five disciplines Scageon builds on for mid-market enterprises."** |

*Why:* same root cause as the Home page fix — wrong count (five, not three) and it named a
service line that no longer exists.

### 3.3 Services hero sub-line
**File:** `src/app/services/page.tsx`

| | |
|---|---|
| Before | "Five capabilities that stand alone or work together — from the data layer to production AI, the software, and the cloud it runs on." |
| After | **"From the data layer to production AI, and the software and cloud that carry it — each engineered to the same standard."** |

*Why:* the old line was almost word-for-word the Home page intro. Rewritten so the two pages no
longer read as duplicates. **Hero title unchanged** — "What we do — and how it compounds." already works.

### 3.4 Overview: prose → bullets *(the main structural change)*
**Files:** `src/content/types.ts`, `src/content/services.ts`, `src/app/services/[slug]/page.tsx`

`Service.overview` changed from `string` to `string[]`, and all five services were rewritten from
one ~70-word paragraph into **three scannable bullets** following a consistent spine:

1. the stakes → 2. what goes wrong today → 3. what Scageon does about it

Rendered as a `<ul>` using the accent `⊙` glyph already used elsewhere on the site.
No new styling — spacing and text colours are reused from the existing "What we deliver" list.

**Example — Data Engineering**

> **Before** (one paragraph)
> "Analytics and AI are only as good as the data beneath them. Most teams lose weeks to brittle
> exports, metrics that don't agree, and pipelines no one trusts — and every new dashboard or model
> just inherits the mess. We design and build the ingestion, modeling, and governance layer that
> turns scattered sources into one dependable, well-governed foundation, so everything downstream
> is faster to build and safe to trust."

> **After** (three bullets)
> - Analytics and AI are only as good as the data beneath them.
> - Most teams lose weeks to brittle exports, metrics that disagree, and pipelines no one trusts — and every new dashboard inherits the mess.
> - We build the ingestion, modeling, and governance layer that makes everything downstream faster to build and safe to trust.

Applied to all five: Data Engineering, Data Analytics, Software Engineering, AI Automation, Cloud.

### 3.5 "How we work" lead lines tightened
**File:** `src/content/services.ts`

Kept as single lead-in lines (the four numbered cards beneath them are already the bullets), but
the colon-splice construction was replaced with clean sentences.

| Service | Before → After |
|---|---|
| Data Engineering | "Governance-first: we build security…" → **"Governance-first. Security, lineage, quality, and access control go in from day one…"** |
| Software Engineering | "We de-risk change: run old and new…" → **"We de-risk change. Old and new run in parallel…"** |
| AI Automation | "Outcome-first and compliance-ready: we set…" → **"Outcome-first and compliance-ready. We set the acceptance bar…"** |

Data Analytics and Cloud lead lines were already clean and are unchanged.

### 3.6 Service one-liners (`sub`)
**File:** `src/content/services.ts`

Only Data Engineering needed work — it now also drives the listing cards, so it had to be tight.

| | |
|---|---|
| Before | "We build the pipelines, warehouses, and lakehouses that turn scattered sources into one reliable, governed layer." |
| After | **"Pipelines, warehouses, and lakehouses that turn scattered sources into one governed, reliable layer."** |

The other four one-liners were already sharp and are unchanged.

### Left untouched deliberately
`deliver` (6 per service) and `approach` (4 per service) are already tight one-line bullets —
rewriting them would have been churn, not improvement. All tech stacks unchanged.

### Verification
- `npx tsc --noEmit` → clean (confirms the `string` → `string[]` change broke nothing)
- All `/services` and `/services/[slug]` routes returning 200, no compile errors

### 3.7 Bullet marker → proper SVG aperture *(follow-up fix)*
**New file:** `src/components/ui/BulletMark.tsx`
**Applied in:** `src/app/services/[slug]/page.tsx`, `src/app/industries/[slug]/page.tsx`

The first pass used the raw `⊙` text character as the bullet. It rendered thin and slightly
off-baseline — it read as a typographic fallback rather than a deliberate mark.

Replaced with a small **SVG of the Scageon aperture** (the logo's ring-and-dot): a soft 35%-opacity
outer ring with a solid accent centre dot, sized in `em` so it scales with its text and aligns to
the first line. This is the brand's signature motif from the design system, now drawn properly
instead of borrowed from the font.

| | |
|---|---|
| Before | `<span>⊙</span>` — font-dependent, inconsistent weight and baseline |
| After | **`<BulletMark />`** — crisp vector, consistent across platforms, scales with text |

Used in two places so far: **Service → Overview** bullets, and **Industry → Outcomes** list
(which previously used the same raw glyph).

> **Open question for review:** the same `⊙` character is still used in `Eyebrow.tsx` (the small
> uppercase label above every section heading) and in the Home hero's tagline line. Those are a
> *label* context rather than a bullet, so they were left alone — but they will now look slightly
> lighter than the new bullets. Awaiting a decision on whether to switch those too.

### 3.8 Ambient glow on the bullet mark — trialled, then reverted
A slow, staggered halo pulse was prototyped behind each aperture's centre dot, then **removed on
review**: the mark reads better completely static. The bullet is a wayfinding device, not a focal
point, and the still version keeps the page calm.

No trace remains in the codebase — `globals.css` keyframes, the halo circle, and the `delay` prop
were all reverted. Recorded here only so the decision isn't revisited later.

---

## Step 4 — Industries (`/industries` + 6 detail pages) ⬜ Pending
## Step 5 — Case studies ⬜ Pending — wording only; every metric preserved verbatim
## Step 6 — About + Contact ⬜ Pending
## Step 7 — Company Updates page ⬜ Parked until the content pass is complete
