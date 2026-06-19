# Zion Miami — Project Notes

Minimalist, trilingual (EN default · PT · ES) multi-page site for Zion Miami, built with **Next.js 16 (App Router) + React 19 + Tailwind v4**, aligned with the Zion São Paulo / Quito visual identity (dark teal, interlocking-curve motif, light geometric type, duotone photography).

## Run

```bash
npm run dev      # dev server → http://localhost:3000 (redirects to /en)
npm run build    # production build
npm run lint     # eslint
```

## Structure

- `app/[locale]/…` — seven pages: `/` (Home), `/quem-somos`, `/ministerios`, `/missoes`, `/eventos`, `/news`, `/ofertas` (Tithes & Offerings). `locale` = `en` | `pt` | `es` (default `en`); `app/page.tsx` redirects `/` → `/en`.
- The header **Give** pill (desktop + mobile) links to `/ofertas` — that's the offerings entry point (not in the 6-item text nav, to keep the header uncluttered; mirrors São Paulo's giving page).
- `lib/i18n.ts` — locales, nav, shared UI strings, `Localized` type (`Partial<Record<Locale,string>>`), and `t()` (falls back to English) + `localizedHref()` helpers.
- `content/` — all copy as `{ en, pt, es }` data: `ministries.ts` (11), `missionaries.ts` (16), `values.ts` (7), `events.ts`, `site.ts` (page copy + Home/News + footer).
- `components/` — `Header` (sticky + full-screen mobile menu), `Footer`, `LangToggle`, `Hero` (curve motif), `PillButton`, `MinistryCard`, `MissionaryCard`, `EventCard`, `NewsCard`, `ValuesCarousel`, `Reveal` (scroll-in), `SectionHeading`.
- `app/globals.css` — Tailwind v4 `@theme` brand tokens (colors, fonts, easing) + helpers (`bg-zion-radial`, `bg-zion-panel`, `container-zion`, `.reveal`).
- `scripts/process-assets.mjs` — one-off `sharp` script that cropped clean photos out of the source design PNGs into `public/images/`. Source assets live in `../Site`.

## Asset handling

The source `Site/` design PNGs had **baked-in Portuguese text**. For a bilingual/accessible site, text was transcribed into `content/*.ts` and the cards rebuilt in HTML/CSS:
- **Ministries** use the clean "Old/Background" images (photo + name graphic, no description).
- **Missionaries** use the left ~47 % crop of each card (clean B&W portrait).
- **Events** use the `Header.png` hero + `Zbreak`/`Batismo` banners.

## Done (from Instagram @zion.miami)

- **Favicon/logo mark:** wired from the user's PNG → `app/icon.png` + `app/apple-icon.png` (Next auto-generates the link tags). Text wordmark "ZION MIAMI" still used in header/footer.
- **Service times:** Weekly Sunday service · Sunday 4:30 PM (`home.services` + `home.servicesNote`).
- **Address:** 2323 SW 27th Ave, Miami, FL (`site.address` / `site.mapsQuery`).
- **Social:** Instagram `@zion.miami`, YouTube `@zionmiamichurch` (`site.social`).
- **Verse:** Zechariah 4:6 shown under the lema on Quem Somos (`site.verseRef`).
- **Languages:** EN (default) + PT + ES, all content translated.

## TODO — still to confirm with the church

- **Offerings (`/ofertas`):** structure mirrors São Paulo's "Dízimos e Ofertas" (teaching + Proverbs 3:9-10 + ways to give + how-to video). **Giving methods are PLACEHOLDERS** in `content/offerings.ts` — replace Online link, Zelle/PayPal addresses with Miami's real ones (PIX / Brazilian bank details intentionally omitted — they're São Paulo's). Optional hero photo: add `image="/uploads/ofertas-hero.jpg"` in `app/[locale]/ofertas/page.tsx`. The embedded video is the São Paulo how-to-give clip (`51Tcy2rCCtE`) — swap for a Miami one if desired.
- **Ministries:** all 11 from the Brazilian set are kept as placeholders. Miami's IG shows its own youth structure — **Rise 12–17** (Fri Hangout 5 PM, Threefold Cafe) and **Vox 19–29** (Fri Hangout 7:30 PM, Azusa) are set from real data; this means **Flow (15–17) overlaps Rise** and may not be a separate Miami ministry. Confirm the actual Miami ministry list + each group's meeting day/time/location (`content/ministries.ts` → `meets`).
- **Logo file:** using the IG mark; if they have a high-res / transparent logo for the header wordmark, swap it in.
- **Contact:** email is a placeholder (`info@zionmiami.org`); phone/Spotify intentionally hidden (empty in `site.social` / `site.phone`).
- **Home/News/Quem Somos imagery:** no Home/News photos were in `Site/` (only PSDs) and Quem Somos photos were baked into mockups — these areas use the events hero / gradients. Drop real photos into `public/images/{home,news}` (and add to Quem Somos) to enrich them; Instagram is a good source.
- **News (file-based):** posts live in **`content/news.ts`** — there's a copy-paste template at the top of the file. To add one: save the image in `public/uploads/`, copy the template block to the top of the array (newest first), fill in `slug/date/image/link/title/excerpt`, save. Shows on `/news` and the 3 newest appear on Home. `image` and `link` are optional (no image → gradient card). The weekly Instagram graphics are ideal here. (Automated options — IG Graph API feed or a CMS — were discussed and deferred; revisit if manual updates get tiring.)
- **Events:** source assets are from 2023 — confirm current calendar and registration links (`content/events.ts`).
- **Values:** value #1 (Intimidade) is verbatim with refs; values #2–7 descriptions are faithful summaries — confirm wording and Bible refs (`content/values.ts`).
- **Translations:** PT transcribed from assets; EN/ES drafted by translation — review before launch.
- The root layout sets `<html lang="en">` for all locales (minor a11y note); switch per-locale if desired.
