# Dr. Sulochana Mortha — SEO Implementation Plan

**Source:** `Dr_Sulochana_Mortha_SEO_Strategy.pdf` (MATA Labs, July 2026)  
**Project:** [Dr.-Sulochana](https://github.com/matalabsio/Dr.-Sulochana) — Next.js website  
**Prepared for:** Developer handoff + internal execution tracking  
**Last updated:** July 2026

---

## 1. Executive summary

This document turns the 12-phase SEO strategy brief into an **accountable, step-by-step execution plan** for the Dr. Sulochana's Hospital website. It incorporates the **strategist review gaps** from the PDF (competitor analysis, Telugu layer, conversion UX, content governance, review generation, backlinks, timeline/KPIs, tooling).

**Primary goals**

| Horizon | Target |
|--------|--------|
| **0–30 days** | Branded searches rank reliably; technical SEO baseline complete; Google Search Console + GA4 live |
| **60–90 days** | Service/treatment pages indexed; local pack consistency; 8–12 blog articles live |
| **6–12 months** | Compete for non-branded local terms (e.g. *best gynecologist Hyderabad*, *pregnancy care Madinaguda*) |

**Guiding principles (YMYL / E-E-A-T)**

- Medical content must be **accurate, attributed, and reviewable** — not generic AI filler.
- Entity consistency first: one doctor, one NAP, many verified directory profiles.
- Traffic without conversion (WhatsApp / call / booking) is incomplete — **SEO + UX ship together**.

---

## 2. Current website audit (baseline)

Use this to track what already exists in the codebase vs. what the plan still requires.

| Area | Status | Notes |
|------|--------|-------|
| **Site stack** | ✅ Done | Next.js App Router, static/SSG pages |
| **Metadata helper** | ✅ Done | `src/lib/seo/metadata.ts` — title, description, canonical, OG, Twitter |
| **Sitemap** | ✅ Done | `src/app/sitemap.ts` — static routes + treatments + blog + videos |
| **robots.txt** | ✅ Done | `src/app/robots.ts` |
| **Schema (partial)** | 🟡 Partial | Physician, MedicalClinic, FAQ, Article, Video, MedicalWebPage in `src/lib/seo/schema.ts` |
| **JSON-LD injection** | ✅ Done | `src/components/seo/JsonLd.tsx` |
| **Treatment pages** | 🟡 Partial | 5 slugs in `src/content/treatments/` — PDF lists more services |
| **Blog articles** | 🟡 Partial | 7 articles in `src/content/articles/` |
| **Video pages** | ✅ Done | YouTube catalog + `/videos/[slug]` |
| **i18n (EN / HI / TE)** | ✅ Done | Telugu/Hindi layer started — extend for SEO |
| **Contact / booking** | ✅ Done | Form → Google Sheet webhook + WhatsApp handoff |
| **WhatsApp float** | ✅ Done | `WhatsAppFloatingButton` sitewide |
| **GA4** | 🟡 Config ready | `GoogleAnalytics.tsx` — needs `NEXT_PUBLIC_GA_MEASUREMENT_ID` |
| **Microsoft Clarity** | 🟡 Config ready | Needs `NEXT_PUBLIC_CLARITY_ID` |
| **Search Console** | ❌ Not in code | Manual setup + domain verification |
| **BreadcrumbList schema** | ❌ Missing | Add to treatment/blog/video pages |
| **Review schema** | ❌ Missing | Only after genuine reviews are collected |
| **SearchAction schema** | ❌ Missing | Optional sitelinks search box |
| **Competitor gap analysis** | ❌ Not done | Phase 0 below |
| **Content governance** | ❌ Not formalized | Medical review workflow needed |
| **Review generation system** | ❌ Not done | Post-visit SMS/WhatsApp prompts |
| **Active backlink outreach** | ❌ Not done | Beyond directory listings |

---

## 3. Strategist gaps — how we close them

The PDF strategist review flagged eight gaps. Each is assigned a phase and owner below.

| # | Gap | Resolution in this plan |
|---|-----|-------------------------|
| 1 | No competitor analysis | **Phase 0** — benchmark top 5 Hyderabad gynecology sites |
| 2 | No local-language layer | **Phase 2b** — Telugu keyword map + HI/TE metadata & key pages |
| 3 | No conversion UX plan | **Phase 3b** — CTA tracking, Clarity funnels, WhatsApp events |
| 4 | No content governance | **Phase 4b** — medical review checklist + `lastReviewed` in schema |
| 5 | No review generation | **Phase 10b** — post-visit review request workflow |
| 6 | No off-page/backlink plan | **Phase 11b** — outreach calendar |
| 7 | No timeline / KPIs | **Section 5** — 12-week sprint schedule + KPI table |
| 8 | No budget / tooling | **Section 8** — tooling stack + effort estimates |

---

## 4. Keyword & page mapping (from PDF Phase 2)

Map one **primary keyword cluster** per URL. Expand as new pages are built.

### Doctor / brand

| Primary intent | Target URL | Priority |
|----------------|------------|----------|
| Dr Sulochana Mortha | `/about` | P0 |
| Dr M Sulochana gynecologist Hyderabad | `/about`, homepage | P0 |
| Best gynecologist Hyderabad | `/about` + blog authority | P1 |

### Services (existing + planned)

| Cluster | Target URL | Status |
|---------|------------|--------|
| Fertility / IVF counselling | `/treatments/fertility-treatment` | ✅ Live |
| Pregnancy care | `/treatments/pregnancy-care` | ✅ Live |
| High-risk pregnancy | `/treatments/high-risk-pregnancy` | ✅ Live |
| PCOS treatment | `/treatments/pcos-management` | ✅ Live |
| Gynecology consultation | `/treatments/gynecology-consultation` | ✅ Live |
| Fibroids | `/treatments/fibroids` | ❌ Create |
| Menopause | `/treatments/menopause` | ❌ Create |
| Normal delivery | `/treatments/normal-delivery` | ❌ Create |
| C-section | `/treatments/c-section` | ❌ Create |

### Local SEO

| Cluster | Target |
|---------|--------|
| Gynecologist Madinaguda | Homepage, `/contact`, local landing block |
| Gynecologist Jubilee Hills | About (GVK Health Hub mention), contact |
| Pregnancy doctor Hafeezpet | Service page + blog |
| Obstetrician near Gachibowli | Blog / local FAQ |

### Telugu (Phase 2b — examples)

| English | Telugu direction (research exact queries) |
|---------|-------------------------------------------|
| Gynecologist Hyderabad | గైనకాలజిస్ట్ హైదరాబాద్ |
| Pregnancy care | గర్భధారణ సంరక్షణ |
| PCOS treatment | PCOS చికిత్స |

> **Action:** Run Google Keyword Planner + Google Search Console (once live) for Telugu queries; add `hi` / `te` titles and descriptions in `src/i18n/messages/*.ts`.

---

## 5. Execution timeline (12-week sprint)

### Week 1–2 — Foundation (Phase 0 + Phase 1)

**Phase 0: Competitor & baseline analysis**

- [ ] Identify top 5 ranking competitors for: *gynecologist hyderabad*, *pregnancy care madinaguda*, *ivf hyderabad*
- [ ] Record per competitor: domain authority (Ahrefs/Ubersuggest free tier), avg. page word count, schema types, backlink count, GBP review count
- [ ] Export baseline spreadsheet → `docs/seo/competitor-baseline.xlsx` (create folder)
- [ ] Document content length target: **1,500–2,500 words** for service pages (per PDF)

**Phase 1: Entity research & consolidation**

- [ ] Audit and standardize **one NAP** everywhere:
  - Name: `Dr. Sulochana Mortha` / `Dr. Sulochana's Hospital`
  - Address: `3rd Floor, Kalyan Tulasiram Chambers, Deepti Bus Stop, Madinaguda, Hyderabad`
  - Phone: `+91 98498 61089`
- [ ] Verify/update listings (same photo, hours, services, website URL):
  - Google Business Profile (both Madinaguda + Jubilee Hills if separate)
  - Practo, Lybrate, MediBuddy, Justdial
- [ ] Collect verified credentials for site + schema:
  - MBBS, MD/DGO, medical council registration number
  - Osmania professorship, TV appearances, publications
- [ ] Add `sameAs` URLs to Physician schema (`src/lib/seo/schema.ts`) for GBP, Practo, Lybrate profiles

**Deliverables:** Entity sheet, NAP audit log, competitor baseline.

---

### Week 3–4 — Technical SEO & launch checklist (Phase 6)

- [ ] Set production env vars in Vercel:
  - `NEXT_PUBLIC_SITE_URL=https://www.drsulochana.online`
  - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
  - `NEXT_PUBLIC_CLARITY_ID`
- [ ] Google Search Console: verify domain, submit `sitemap.xml`
- [ ] Bing Webmaster Tools: verify + submit sitemap
- [ ] Run Lighthouse on: `/`, `/about`, `/contact`, one treatment, one blog — target **CWV pass** (LCP < 2.5s, CLS < 0.1)
- [ ] Confirm every page has **unique** `title` + `meta description` via `buildPageMetadata`
- [ ] Add **BreadcrumbList** JSON-LD to treatment, blog, video templates
- [ ] Add **WebSite** + optional **SearchAction** schema on homepage
- [ ] Image audit: WebP/AVIF where possible, descriptive `alt` on medical images
- [ ] Internal link audit: every treatment links to 2 related treatments + contact CTA

**Code touchpoints**

| Task | File(s) |
|------|---------|
| Breadcrumb schema | `src/lib/seo/schema.ts`, treatment/blog/video pages |
| WebSite schema | `src/app/page.tsx` or `layout.tsx` |
| Metadata gaps | `src/app/services/page.tsx`, `src/app/specialists/page.tsx`, `src/app/testimonials/page.tsx` |

**Deliverables:** Launch checklist (Section 9) 80%+ complete.

---

### Week 5–6 — Schema depth & trust (Phase 5 + Phase 7)

- [ ] Expand `buildPhysicianSchema()` with: `image`, `url`, `telephone`, `sameAs`, `hasCredential`
- [ ] Expand `buildMedicalClinicSchema()` with: `geo`, `openingHours`, `priceRange`, `medicalSpecialty`
- [ ] FAQ schema on: homepage FAQ, contact FAQ, every treatment page (already partially done)
- [ ] About page: publications, media appearances, awards section (E-E-A-T)
- [ ] Add **medical reviewer** attribution on articles: “Reviewed by Dr. Sulochana Mortha, MD/DGO”
- [ ] Set `lastReviewed` date in `MedicalWebPage` schema when content is reviewed
- [ ] **Do not** add Review/AggregateRating schema until real GBP/Practo reviews are synced

**Deliverables:** Rich results test passing for Physician + MedicalBusiness + FAQ on key URLs.

---

### Week 7–8 — Content expansion (Phase 3 + Phase 4)

**Site structure gaps vs. PDF**

| Page | Action |
|------|--------|
| `/treatments/fibroids` | New treatment page — full 1,500+ word template |
| `/treatments/menopause` | New treatment page |
| `/treatments/normal-delivery` | New treatment page |
| `/treatments/c-section` | New treatment page |
| `/about` | Add Research Publications + Media Appearances sections |
| `/specialists` | Ensure links to Dr. Sulochana profile + schema |

**Service page content template** (every treatment must include):

1. What is it?
2. Symptoms
3. Causes
4. Diagnosis
5. Treatment options
6. Recovery / what to expect
7. FAQs (5+ questions)
8. When to consult a doctor
9. CTA: Book appointment / WhatsApp

**Content governance (Phase 4b)**

- [ ] Create `docs/seo/content-review-checklist.md`
- [ ] Rule: no article publishes without Dr. Sulochana or designated clinician sign-off
- [ ] Quarterly content refresh calendar (update stats, guidelines, `lastReviewed`)

**Deliverables:** 4 new treatment pages; expanded about page; review checklist.

---

### Week 9–10 — Blog & internal linking (Phase 8 + Phase 9)

**Publishing cadence:** 2 articles/month minimum (PDF target: 2–4/month).

**Priority article queue (from PDF)**

1. Signs of PCOS Every Woman Should Know
2. High-Risk Pregnancy: Causes and Management
3. Foods to Eat During Pregnancy
4. Common Reasons for Irregular Periods
5. Fibroids: Symptoms and Treatment Options
6. Pregnancy After 35
7. Cervical Cancer Screening Guidelines
8. Preparing for Normal Delivery

**Internal linking map (example)**

```
PCOS article → /treatments/pcos-management → /treatments/fertility-treatment → /contact
Pregnancy article → /treatments/pregnancy-care → /treatments/high-risk-pregnancy → /contact
```

- [ ] Add “Related treatments” + “Related articles” blocks on every blog post (partially exists — verify all posts)
- [ ] Add contextual in-body links (not footer-only)

**Deliverables:** 4 new blog posts in `src/content/articles/`; linking audit complete.

---

### Week 11 — Local SEO + Telugu layer (Phase 10 + Phase 2b)

- [ ] Create location-specific content blocks on homepage or dedicated sections:
  - Gynecologist in Jubilee Hills
  - Pregnancy care in Madinaguda / Hafeezpet
  - Women's health clinic near Gachibowli
- [ ] Embed Google Map on `/contact` (if not already) with correct GBP place ID
- [ ] Telugu: translate meta titles/descriptions for top 10 URLs in `src/i18n/messages/te.ts`
- [ ] Hindi: same for `hi.ts`
- [ ] Consider Telugu blog summaries (500 words) under existing English articles for local long-tail

**Deliverables:** Local content sections live; TE/HI metadata for core pages.

---

### Week 12 — Authority, reviews, AI search (Phase 11 + Phase 12)

**Authority building (Phase 11b)**

- [ ] List 10 backlink targets: hospitals, medical associations, Hyderabad health portals, university pages
- [ ] Pitch guest article or expert quote to 2 local health publications
- [ ] Upload/link research papers and TV clips on About page
- [ ] YouTube: optimize video titles/descriptions to match site keywords; link back to `/videos/[slug]`

**Review generation (Phase 10b)**

- [ ] Post-visit WhatsApp template: “Thank you for visiting — share your experience on Google”
- [ ] Staff script for in-clinic review requests
- [ ] Once 10+ genuine Google reviews: consider `AggregateRating` schema (GBP sync only)

**AI search optimization / AEO (Phase 12)**

- [ ] Lead every service section with a **concise definition** (2–3 sentences) before detail
- [ ] FAQ blocks answer questions in natural language (already suited for AI snippets)
- [ ] Attribute all medical content to Dr. Sulochana with credentials
- [ ] Cite sources (WHO, ICMR, FOGSI) where clinical claims are made
- [ ] Monitor AI citation: periodically search doctor name in ChatGPT, Perplexity, Google AI Overviews

**Deliverables:** Outreach log; review workflow doc; AEO content pass on top 5 pages.

---

## 6. Conversion UX plan (Phase 3b)

SEO brings traffic; these steps ensure traffic converts.

| Step | Implementation |
|------|----------------|
| Primary CTA | WhatsApp + “Book appointment” on every treatment/blog page |
| Event tracking | `trackWhatsAppClick` in `src/lib/analytics.ts` — extend to all CTAs |
| Form funnel | GA4 event: `appointment_form_submit` on `/api/appointments` success |
| Heatmaps | Microsoft Clarity on `/contact`, homepage, top 3 treatments |
| Friction audit | Mobile: max 3 taps to WhatsApp from any service page |
| Future | Guided booking chatbot (optional) — reuse `AppointmentPayload` + WhatsApp URL |

**KPI:** WhatsApp click-through rate ≥ 3% of organic sessions on service pages (adjust after 30 days data).

---

## 7. KPIs & reporting

| Metric | Tool | Target (90 days) |
|--------|------|------------------|
| Organic sessions | GA4 | +50% vs. baseline month |
| Impressions (branded) | Search Console | Dr. Sulochana name queries → position 1–3 |
| Impressions (local) | Search Console | Top 20 for 5 local clusters |
| Indexed pages | Search Console | All treatments + blogs indexed |
| Core Web Vitals | PageSpeed / CrUX | All green on mobile |
| GBP actions | Google Business Profile | Calls + direction requests tracked monthly |
| WhatsApp clicks | GA4 custom event | Trend up month-over-month |
| Blog publish rate | Internal | ≥ 2 articles/month |
| Reviews | Google GBP | +5 new reviews/quarter |

**Reporting cadence:** Monthly SEO report (1 page): traffic, rankings, CWV, content published, backlinks gained, reviews.

---

## 8. Tooling & effort estimates

| Tool | Purpose | Cost |
|------|---------|------|
| Google Search Console | Indexing, queries, CWV | Free |
| Google Analytics 4 | Traffic, conversions | Free |
| Microsoft Clarity | Heatmaps, recordings | Free |
| Google Business Profile | Local pack | Free |
| Ahrefs / Semrush / Ubersuggest | Keywords, competitors | ₹1,500–8,000/mo (optional) |
| Screaming Frog (free tier) | Crawl audits | Free |
| Rich Results Test | Schema validation | Free |
| Vercel | Hosting + preview deploys | Existing |

| Workstream | Est. effort |
|------------|-------------|
| Technical SEO (schema, metadata, CWV) | 24–40 dev hours |
| 4 new treatment pages (content + dev) | 40–60 hours (incl. medical review) |
| 8 blog articles (2/month × 4 months) | 60–80 hours |
| Entity / directory audit | 8–16 hours (ops/marketing) |
| Telugu metadata + local content | 16–24 hours |
| Backlink outreach | Ongoing — 4 hrs/month |

---

## 9. Before-launch checklist (from PDF)

Copy this into a GitHub issue or project board and check off at go-live.

- [ ] Entity research complete and verified
- [ ] Keyword mapping for every page (`docs/seo/keyword-map.csv`)
- [ ] SEO-friendly URL structure confirmed
- [ ] Unique title and meta description for each page
- [ ] Schema markup implemented (Physician, MedicalBusiness, FAQ, Article, Breadcrumb)
- [ ] XML sitemap generated and submitted
- [ ] `robots.txt` configured
- [ ] Google Analytics 4 installed with conversion events
- [ ] Google Search Console verified
- [ ] Bing Webmaster Tools configured
- [ ] Microsoft Clarity installed
- [ ] Core Web Vitals passing (mobile)
- [ ] Image optimization completed
- [ ] Internal linking reviewed
- [ ] Open Graph metadata configured
- [ ] Canonical URLs on all pages
- [ ] `NEXT_PUBLIC_SITE_URL` set to production domain
- [ ] NAP consistent across site + directories
- [ ] Medical content review sign-off documented

---

## 10. Phase reference (original PDF)

Quick index of the 12 PDF phases and where they live in this plan.

| PDF phase | Topic | Section in this doc |
|-----------|-------|-------------------|
| 1 | Entity research | Week 1–2 |
| 2 | Keyword research | Section 4 + Week 1 |
| 2b | Telugu / Hindi | Week 11 |
| 3 | Website structure | Week 7–8 |
| 3b | Conversion UX | Section 6 |
| 4 | Content strategy | Week 7–8 |
| 4b | Content governance | Week 7–8 |
| 5 | Trust signals | Week 5–6 |
| 6 | Technical SEO | Week 3–4 |
| 7 | Schema markup | Week 5–6 |
| 8 | Internal linking | Week 9–10 |
| 9 | Blogging | Week 9–10 |
| 10 | Local SEO | Week 11 |
| 10b | Review generation | Week 12 |
| 11 | Authority building | Week 12 |
| 11b | Backlink outreach | Week 12 |
| 12 | AI search (AEO/GEO) | Week 12 |

---

## 11. Next actions (start here)

1. **This week:** Complete Phase 0 competitor spreadsheet + Phase 1 NAP/entity audit.
2. **Dev:** Set Vercel env vars; verify Search Console; add BreadcrumbList schema.
3. **Content:** Prioritize 4 missing treatment pages (fibroids, menopause, normal delivery, c-section).
4. **Marketing:** Confirm GBP, Practo, Lybrate profiles point to `https://www.drsulochana.online`.
5. **Review:** Dr. Sulochana approves content governance checklist before next blog publish.

---

## 12. Document maintenance

| When | Action |
|------|--------|
| Weekly | Update checklist progress in project board |
| Monthly | Refresh KPI table; add new keyword opportunities from Search Console |
| Quarterly | Re-run competitor baseline; refresh medical content `lastReviewed` dates |

---

*This plan extends `Dr_Sulochana_Mortha_SEO_Strategy.pdf` with sequencing, codebase mapping, KPIs, and accountability. For implementation tasks in the repo, track work in GitHub Issues labeled `seo`.*
