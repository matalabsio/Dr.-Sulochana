# Phase 1 SEO — Technical Foundation Checklist

**Site:** https://www.drsulochana.online  
**Goal:** Fully crawlable, indexed, and ready to rank (Days 1–7)  
**Last updated:** July 2026

---

## Code changes completed in repo

These fixes are in the codebase and take effect after deploy + env vars:

| Item | Status | Notes |
|------|--------|-------|
| Default `NEXT_PUBLIC_SITE_URL` | ✅ | `.env.example` + `layout.tsx` fallback → `https://www.drsulochana.online` |
| Contact website / email NAP | ✅ | `websiteHref` → drsulochana.online, email → care@drsulochana.com |
| Hero metrics SSR (no more `0+`) | ✅ | `HeroCountUp` renders final values before JS |
| Experience stats aligned | ✅ | 40+ years sitewide (was 30+/35+ in places) |
| Knowledge page duplicate title | ✅ | Title no longer doubles hospital name |
| Schema opening hours | ✅ | Mon–Sat 07:00–19:30, Sun 07:00–16:30 (matches footer) |
| SearchAction schema format | ✅ | Updated to `PropertyValueSpecification` (Rich Results compatible) |
| Legal terms domain | ✅ | References drsulochana.online |

---

## Task 1: Configure production environment (YOU — highest priority)

In **Vercel → Project → Settings → Environment Variables**, set for **Production**:

```env
NEXT_PUBLIC_SITE_URL=https://www.drsulochana.online
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_ID=XXXXXXXX
```

Then **Redeploy** (Deployments → ⋮ → Redeploy).

### Verify after redeploy

```bash
curl -s https://www.drsulochana.online/robots.txt
# Must show: Sitemap: https://www.drsulochana.online/sitemap.xml

curl -s https://www.drsulochana.online/sitemap.xml | head -20
# All <loc> URLs must use https://www.drsulochana.online

curl -s https://www.drsulochana.online/ | grep -o 'canonical[^>]*'
# Canonical must use drsulochana.online
```

**Current live issue (pre-redeploy):** robots.txt and sitemap still point to `drsulochanahospital.com` if `NEXT_PUBLIC_SITE_URL` is set to the old domain in Vercel — code now falls back to `drsulochana.online` automatically.

---

## Task 2: Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: **URL prefix** → `https://www.drsulochana.online`
   - Or **Domain** property → `drsulochana.online` (requires DNS TXT verification)
3. Verify ownership (HTML tag, DNS, or Google Analytics)
4. Submit sitemap: `https://www.drsulochana.online/sitemap.xml`
5. **Request indexing** for:

| URL |
|-----|
| https://www.drsulochana.online/ |
| https://www.drsulochana.online/about |
| https://www.drsulochana.online/contact |
| https://www.drsulochana.online/services |
| https://www.drsulochana.online/knowledge |
| https://www.drsulochana.online/treatments/fertility-treatment |
| https://www.drsulochana.online/treatments/pregnancy-care |
| https://www.drsulochana.online/treatments/pcos-management |
| https://www.drsulochana.online/treatments/gynecology-consultation |
| https://www.drsulochana.online/treatments/high-risk-pregnancy |
| https://www.drsulochana.online/treatments/fibroids |
| https://www.drsulochana.online/treatments/menopause |
| https://www.drsulochana.online/treatments/normal-delivery |
| https://www.drsulochana.online/treatments/c-section |

**Deliverable:** Search Console connected, sitemap submitted, indexing requested.

---

## Task 3: Bing Webmaster Tools

1. [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add site `https://www.drsulochana.online`
3. Verify (import from Search Console if available)
4. Submit sitemap: `https://www.drsulochana.online/sitemap.xml`

**Deliverable:** Bing indexing enabled.

---

## Task 4: Verify technical SEO

| Check | URL | Expected |
|-------|-----|----------|
| robots.txt | https://www.drsulochana.online/robots.txt | HTTP 200, Allow: /, correct sitemap URL |
| sitemap.xml | https://www.drsulochana.online/sitemap.xml | HTTP 200, all HTTPS, drsulochana.online only |
| No wrong domain | sitemap + canonicals | No drsulochanahospital.com |

**Indexed URL count (sitemap):** ~40 pages (9 static + 9 treatments + 7 blogs + 15 videos)

---

## Task 5: Validate structured data

Run [Google Rich Results Test](https://search.google.com/test/rich-results) on:

| Page | Expected schema |
|------|-----------------|
| Homepage | MedicalClinic, WebSite, FAQPage |
| About | Physician, MedicalClinic |
| `/treatments/fertility-treatment` | MedicalWebPage, FAQPage, BreadcrumbList |
| `/blog/confirmation-of-pregnancy` | Article, FAQPage, BreadcrumbList |
| `/videos/understanding-ivf-treatment` | VideoObject, FAQPage, BreadcrumbList |

Fix any errors in `src/lib/seo/schema.ts` if new issues appear.

---

## Task 6: Verify metadata (unique per page)

All pages use `buildPageMetadata()` → unique title, description, canonical, OG, Twitter.

| Path | Title pattern |
|------|---------------|
| `/` | Full SEO title (no suffix duplicate) |
| `/about` | About Dr. Sulochana Mortha \| Dr. Sulochana's Hospital |
| `/contact` | Contact Us \| … |
| `/services` | Fertility & Conception Services \| … |
| `/knowledge` | Knowledge Centre \| … |
| `/treatments/*` | Per-treatment unique title |
| `/blog/*` | Per-article unique title |
| `/videos/*` | Per-video unique title |

**Favicon:** `/icon`, `/apple-icon`, `/brand/logo.png` via `layout.tsx` + `manifest.ts`

---

## Task 7: SSR / stats (code done)

- Hero shows **40+**, **20,000+**, **98%** in HTML before JavaScript
- Sitewide years experience: **40+**
- Babies born: **20,000+** (hero + marquee)
- Families served: **10,000+** (footer / trust sections — separate metric)

---

## Task 8: Install & verify analytics

After GA4 + Clarity env vars are set and site redeployed:

### GA4 events to test (Realtime → Events)

| Action | Event name |
|--------|------------|
| Book Appointment click | `book_appointment_click` |
| WhatsApp click | `whatsapp_click` |
| Phone click | `phone_click` |
| Form submit | `appointment_submitted`, `generate_lead` |

### Clarity

- [clarity.microsoft.com](https://clarity.microsoft.com) → project → confirm sessions recording

---

## Task 9: Google Business Profile (manual)

Create or optimize at [business.google.com](https://business.google.com):

| Field | Value |
|-------|-------|
| Business name | Dr. Sulochana's Hospital |
| Address | 3rd Floor, Kalyan Tulasiram Chambers, Deepti Bus Stop, Madinaguda, Hyderabad |
| Phone | +91 98498 61089 |
| Website | https://www.drsulochana.online |
| Categories | Gynecologist, Fertility clinic, Obstetrician |
| Hours | Mon–Sat 7:00 AM – 7:30 PM, Sun 7:00 AM – 4:30 PM |
| Services | IVF, IUI, Pregnancy care, PCOS, Gynecology |
| Photos | Clinic, team, logo |

Ensure NAP matches website schema exactly.

---

## Task 10: Baseline performance audit

Record these **before** Phase 2 content work:

| Tool | URL | Record |
|------|-----|--------|
| PageSpeed Insights (mobile) | https://pagespeed.web.dev/ | LCP, INP, CLS scores |
| PageSpeed Insights (desktop) | same | Performance score |
| Search Console | Coverage | Indexed pages count |
| Search Console | Core Web Vitals | Pass/fail |
| Rich Results Test | 5 key URLs | Pass/fail |

### Baseline template

```
Date: ___________
Mobile PSI score: ___
Desktop PSI score: ___
LCP: ___  INP: ___  CLS: ___
GSC indexed pages: ___
GSC branded impressions (7d): ___
```

---

## Phase 1 definition of done

- [ ] Vercel env vars set + redeployed
- [ ] robots.txt + sitemap use drsulochana.online
- [ ] Google Search Console verified + sitemap submitted
- [ ] Indexing requested for all priority URLs
- [ ] Bing Webmaster Tools verified + sitemap submitted
- [ ] Rich Results Test passes on 5 key pages
- [ ] No duplicate page titles
- [ ] Hero stats visible without JavaScript
- [ ] GA4 + Clarity recording
- [ ] Google Business Profile complete
- [ ] Baseline metrics documented above

**Do not start Phase 2 (content/backlinks) until all boxes are checked.**

---

## Quick reference — SEO files in repo

| File | Purpose |
|------|---------|
| `src/lib/seo/metadata.ts` | Titles, canonicals, OG, Twitter |
| `src/lib/seo/schema.ts` | JSON-LD builders |
| `src/lib/seo/site.ts` | Site URL, NAP config |
| `src/app/sitemap.ts` | XML sitemap |
| `src/app/robots.ts` | robots.txt |
| `src/components/seo/JsonLd.tsx` | Schema injection |
| `src/components/seo/Breadcrumbs.tsx` | Breadcrumb UI + schema |
| `src/lib/analytics.ts` | GA4 conversion events |
