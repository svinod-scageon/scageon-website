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

## Step 4 — Industries (`/industries` + 6 detail pages) ✅

### 4.1 Hero headlines — ⚠️ the biggest problem on the site
**File:** `src/content/industries.ts`

Four of the six hero titles opened with the **same seven words**: *"We build production-grade …"*.
Click through three industries in a demo and it reads like a template with the nouns swapped out.
They were also paragraph-length — Healthcare's was **23 words in an `<h1>`**.

Every headline is now short and distinct, with the specifics moved down into the sub-line
(where they belong) rather than crammed into the title.

| Industry | Before | After |
|---|---|---|
| Healthcare | "We build production-grade AI and SaaS for healthcare — from hospital command centers to intelligent workforce planning and remote patient monitoring." | **"Real-time intelligence for hospital operations."** |
| Banking & Finance | "We build production-grade platforms for banking and finance — from zero-downtime core migrations to governed back-office control and self-serve customer messaging." | **"Modernize the core — without the downtime."** |
| Retail | "We build real-time intelligence for retail — fusing point-of-sale, in-store vision, and product journeys into one operational view." | **"See what converts, while it's still happening."** |
| Automotive | "We build AI creative platforms for automotive — generating, validating, and packaging campaign-ready visuals at scale." | **"One shoot. Every variation."** |
| Media & Entertainment | "We build AI for media & entertainment — from automated audio-video QC to privacy-safe, multi-party data collaboration." | **"Ship faster, without risking quality or privacy."** |
| OTT / Streaming | "We build subscriber and revenue intelligence for streaming — unifying subscription, payment, and viewing data into one source of truth." | **"One source of truth for every subscriber."** |

All six sub-lines were rewritten to carry the detail the headlines gave up, so nothing was lost.

### 4.2 The Landscape: prose → bullets
**Files:** `src/content/types.ts`, `src/content/industries.ts`, `src/app/industries/[slug]/page.tsx`

`Industry.landscape` changed from `string` to `string[]`. All six rewritten from a single ~55-word
paragraph into **three bullets**, using the same spine as the Services overview:

1. how the industry works → 2. what breaks today → 3. what Scageon does about it

Rendered with the same `<BulletMark />` aperture used on the Services pages, so both sections
now read as one system.

**Example — Retail**

> **Before** — "Retail runs on data that rarely connects — the POS knows what sold, the cameras see
> what happened, but the two never meet. Scageon fuses transactions, live store vision, and product
> journeys into one real-time operational view, so teams act on what's converting (or not) while
> it's still happening."

> **After**
> - Retail runs on data that rarely connects.
> - The POS knows what sold and the cameras see what happened — but the two never meet.
> - We fuse transactions, live store vision, and product journeys into one real-time view, so teams act while it still matters.

### 4.3 Solution cards: "delivers" prose → bullets
**Files:** `src/content/types.ts`, `src/content/industries.ts`, `src/components/sections/SolutionCard.tsx`

`Solution.delivers` changed from `string` to `string[]`. These were the densest text on the site —
single sentences running 30–40 words with three or four em-dash clauses stacked inside them.

**Example — Back-Office Control & Audit**

> **Before** — "Federated single sign-on across two identity providers, three-layer security, an
> append-only audit log of every privileged action, and end-to-end request tracing."

> **After**
> - Federated single sign-on across two identity providers
> - Three-layer security model
> - Append-only audit log of every privileged action
> - End-to-end request tracing

Applied to all 11 solutions across the six industries. Rendered with the card's existing small-dot
bullet style (not the larger aperture mark) to keep the hierarchy right — card-level detail should
sit visually below page-level bullets.

`whatItIs` stays a single prose sentence on purpose: it is a definition, and definitions read
better as sentences than as fragments.

### 4.4 Listing page was a carbon copy of the Home section
**File:** `src/app/industries/page.tsx`

The `/industries` hero repeated the Home page's industries block **word for word** — same title,
same sub. Anyone scrolling Home and then clicking "Industries" saw the identical sentence twice.

| | Before | After |
|---|---|---|
| Title | "Built for the industries that can't afford to get it wrong." *(identical to Home)* | **"Six industries. Production systems in each."** |
| Sub | "Compliance-critical, mission-critical, real-time. Explore how we work in each." *(identical to Home)* | **"From hospital command centers to core banking migrations — the work, the outcomes, and the case studies behind each."** |

The Home page keeps the original line, which is strong where it sits.

### 4.5 Industries SEO description — ⚠️ stale fact fixed
**File:** `src/app/industries/page.tsx`

| | |
|---|---|
| Before | "…Healthcare, Banking & Finance, **and more**." |
| After | **"…Healthcare, Banking & Finance, Retail, Automotive, Media & Entertainment, and OTT."** |

*Why:* all six are live. "And more" was written when only two were published — it under-sold four
whole industries and wasted the SEO slot.

### 4.6 Stale code comment corrected
**File:** `src/content/industries.ts`

The file header still read *"v1 publishes Healthcare + Banking & Finance… the other four are
registered but not yet published"*. All six have `published: true`. Comment rewritten so the next
developer isn't misled.

### Left untouched deliberately
`outcomes` (already tight one-line bullets), all solution titles and taglines, every
`caseStudySlug`, `relatedServices`, and `published` flag.

### Verification
- `npx tsc --noEmit` → clean (confirms both `string` → `string[]` changes are fully wired)
- `hospital-at-home` case study confirmed present in `caseStudies.ts`
- Dev server compiling, routes returning 200
## Step 5 — Case studies ✅

**File:** `src/content/caseStudies.ts` (11 case studies)

The tightest-scoped pass of the revamp. Case studies are the evidence behind every claim on the
site, so **only `overview` prose and one bullet were touched**. Every `impact`, `problem`,
`solution`, `features`, and `tech` array was left byte-for-byte identical.

Total change: **8 lines out of 377** (`git diff --numstat` → `8  8`).

### 5.1 Overview lines de-duplicated and tightened

| Case study | Issue | After |
|---|---|---|
| Hospital Command Center | "consolidating **operations** into a single, real-time **operational** view" — same word twice | **"…consolidates hospital-chain operations into a single, real-time view."** |
| Nurse Roster Planning | "**AI-driven intelligent**" — two words doing one job | **"An AI-driven workforce-automation platform that digitizes…"** |
| Core Banking Modernization | "**without disruption**, ensuring **continuous operations**" — the same promise twice | **"…running side by side, with continuous operations throughout the transition…"** |
| Back-Office Control & Audit | "API management and **audit** platform — unifying access, control, and **audit**" | **"A centralized back-office platform that unifies access, control, and audit…"** |
| AI Creative Generation | "An **AI**-driven marketing creative generation platform — **AI** product photography" | **"A marketing creative platform — AI product photography and campaign-ready visuals…"** |
| Hospital-at-Home | A single **60-word** sentence — the longest on the site | Split into two, "complete episode" → "full episode", redundant qualifiers dropped |

### 5.2 Spelling normalized to US English
The file mixed British and American spellings — sometimes within one entry.

| Before | After | Where |
|---|---|---|
| "command **centre** for leaders" | "command **center**" | Nurse Roster Planning — and the case study directly above it is titled "Hospital Command **Center**" |
| "end-to-end **digitisation**" | "**digitization**" | Nurse Roster Planning |
| "hospital-at-home **programme**" | "**program**" | Hospital-at-Home client label |

`grep` confirms zero British spellings remain across `src/content/`.

### Untouched by design
- **Every metric**, verified individually by grep: `20% staff productivity gain`,
  `~30–40% reduced response times`, `~25–30% faster delivery`, `70% QC time reduction`,
  `85% compliance accuracy`, `620K+ subscribers`, `78.3% Day-1`, `10M+ records`,
  `50+ data partners`, `5 ad platforms`, `250+ automated tests` — all 11 present and unchanged.
- All client labels (beyond the one spelling fix), all `tech` stacks, all `problem` / `solution` /
  `features` bullets, every slug and cross-link.

> **Noted for your call, not changed:** Real-Time Store Intelligence lists its impact as
> "Improved sales", "Increased compliance", "Reduced stock-outs", "Reduced incidents" — four
> unquantified one-liners, weak next to the hard numbers in every other case study. Adding figures
> would mean inventing them, so it was left alone. If real numbers exist, this is the place to use them.

### Verification
- `npx tsc --noEmit` → clean
- `git diff --numstat` → `8 8` (only the intended lines changed)
- All 11 metrics grep-verified present
- All 11 case studies still resolving
## Step 6 — About + Contact ✅

### 6.1 About hero no longer reuses the tagline
**File:** `src/app/about/page.tsx`

The About `<h1>` rendered `site.tagline` verbatim — the same line already in the browser title,
the meta description, the Home hero eyebrow, and the footer. The sub-line was `site.description`,
which is *also* the Home hero sub. The whole hero was recycled text.

| | Before | After |
|---|---|---|
| Title | `{site.tagline + "."}` → "Enabling an AI-Powered Future." | **"We take on the systems businesses depend on."** |
| Sub | `{site.description}` *(identical to Home)* | **"A data and AI partner for mid-market enterprises — designing, building, and operating the platforms that regulated industries run on."** |

*Why this headline:* it was already sitting in the page's own second paragraph, doing nothing.
It is concrete, it is a claim competitors can't copy safely, and it earns the case studies below it.

### 6.2 "Who we are": prose → lead + bullets
**File:** `src/app/about/page.tsx`

Two stacked paragraphs became a one-line lead plus three bullets, using the same `<BulletMark />`
as Services and Industries.

> **Before** — two paragraphs, 78 words total:
> "Scageon is a data & AI partner for mid-market enterprises. We design, build, and operate the
> platforms that turn scattered data into real-time decisions and production-grade AI — across
> healthcare, banking, and beyond." / "From hospital command centers to zero-downtime core-banking
> migrations, we take on the systems businesses depend on, and we treat security and compliance as
> first-class requirements."

> **After** — lead: *"Scageon is a data and AI partner for mid-market enterprises, working across
> healthcare, banking, and beyond."*
> - We design, build, and operate the platforms that turn scattered data into real-time decisions and production-grade AI.
> - We take on the systems businesses depend on — hospital command centers, core banking migrations, subscriber intelligence.
> - Security and compliance are first-class requirements here, not an afterthought.

Note the third bullet now names **three** proof areas instead of two, pulling OTT into view.

### 6.3 Contact hero was a word-for-word repeat of the CTA band
**File:** `src/app/contact/page.tsx`

The Contact `<h1>` was **"Let's build what's next."** — byte-identical to `CtaBand`'s default
title, which renders at the bottom of Home, About, Services, and Industries. Its sub duplicated the
CTA body too. A visitor clicking "Contact" from any page read the same two sentences twice in one scroll.

| | Before | After |
|---|---|---|
| Title | "Let's build what's next." *(identical to CtaBand)* | **"Tell us what you're building."** |
| Sub | "Tell us the outcome you're chasing — we'll show you the fastest credible path with AI and data." *(near-identical to CtaBand body)* | **"Bring us a scoped project or an early idea. We'll come back with a clear view of what it takes to get there."** |

`grep` confirms "Let's build what's next." now appears exactly **once** in the codebase — as the
CtaBand default, where it belongs.

### 6.4 Contact form label de-duplicated
**File:** `src/components/sections/ContactForm.tsx`

With the new hero reading "Tell us what you're **building**", the form's own label —
"What are you trying to **build** or solve?" — echoed it a few hundred pixels below.

| | |
|---|---|
| Before | "What are you trying to build or solve?" |
| After | **"What's the project?"** |

### 6.5 SEO descriptions refreshed
Both pages still carried the retired "Data & AI solutions for mid-market enterprises" phrasing.

| Page | After |
|---|---|
| About | "…a data and AI partner for mid-market enterprises, building for regulated, mission-critical environments." |
| Contact | "Talk to Scageon about a data or AI project — Bengaluru-based, building for regulated, mission-critical environments." |

### Left untouched deliberately
The three "How we work" value cards were already tight (one clean claim + one supporting line
each); only "not bolted on" → "never bolted on" was sharpened. The contact details block, the form
fields, validation messages, and the mailto success state are all clear and were left as they are.

> **Deferred by your decision:** `site.proof` — `["50+ projects delivered", "HIPAA & SOX compliant",
> "Enterprise security & governance"]` — remains defined in `site.ts` and rendered nowhere. The
> About page's "At a glance" card (currently just legal name + address) is the natural home for it,
> and *HIPAA & SOX compliant* is the obvious replacement for Home's soft "100% Compliance-first
> delivery" tile. Both left as-is at your request.
### 6.6 Aperture mark unified site-wide — the `⊙` glyph is gone
**Files:** `src/components/ui/Eyebrow.tsx`, `src/components/sections/Hero.tsx`

The raw `⊙` text character was still prefixing every eyebrow label — the small uppercase line above
each page and section heading ("ABOUT", "HEALTHCARE", "WHAT WE DO", "SERVICES", and so on) — plus the
Home hero tagline. Because it rendered from the font, it looked thin and sat slightly off-baseline,
which was increasingly obvious next to the crisp SVG bullets introduced in 3.7.

Both now use the same `<BulletMark />` component, sized `0.85em` to match the eyebrow's optical
weight and set to `mt-0` (the eyebrow is `inline-flex items-center`, so it centres itself).

| | Before | After |
|---|---|---|
| Eyebrow prefix | `<span>⊙</span>` at `0.9em` | **`<BulletMark />`** at `0.85em` |
| Home hero tagline | `<span>⊙</span>` | **`<BulletMark />`** |

**Reach:** `Eyebrow` is consumed by `PageHero` and `SectionHeading`, so this single change
propagates to **every page and every major section** on the site. One mark, one rendering, everywhere.

`grep` confirms zero `⊙` characters remain in any rendered output — the only occurrence left in the
repo is inside a `BulletMark.tsx` code comment documenting what it replaced.

### Verification (full content pass now complete)
- `npx tsc --noEmit` → clean
- `npm run build` → **exit 0, all 19 routes prerendered static**
  (`/`, `/about`, `/contact`, `/services` + 5 detail, `/industries` + 6 detail, `/_not-found`)
- `grep` → no duplicated hero/CTA copy anywhere in `src/`

---

## Step 7 — Company Updates page ⬜ NEXT — the one net-new page from the original brief

For company news, celebrations, photos, and colleague-written posts. Empty at launch, structured
so a real post is just a data entry. Scope and naming still to be confirmed.

---

## Open decisions (carried forward)

| # | Item | Status |
|---|---|---|
| 1 | Home stat tile "**100%** Compliance-first delivery" — soft percentage on a qualitative claim; *HIPAA & SOX compliant* already written and unused | Deferred by request |
| 2 | `site.proof` defined in `site.ts`, rendered nowhere | Deferred by request |
| 3 | `⊙` text glyph in `Eyebrow.tsx` + Home hero tagline | ✅ **Resolved — see 6.6** |
| 4 | Real-Time Store Intelligence impact — four unquantified one-liners vs hard numbers everywhere else | Needs real figures from you |
