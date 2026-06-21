import Link from "next/link";
import { t, ui, localizedHref, type Locale, type Localized } from "@/lib/i18n";
import { site } from "@/content/site";

const rights: Localized = {
  en: "All rights reserved.",
  pt: "Todos os direitos reservados.",
  es: "Todos los derechos reservados.",
};

const visitAndConnect: Localized = {
  en: "Visit & connect",
  pt: "Visite e conecte-se",
  es: "Visítanos y conéctate",
};

export default function Footer({ locale }: { locale: Locale }) {
  const year = 2026;
  const mapsHref = `https://maps.google.com/?q=${encodeURIComponent(site.mapsQuery)}`;

  return (
    <footer id="give" className="border-t border-line bg-ink">
      <div className="container-zion py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] lg:gap-20">
          <div>
            <Link
              href={localizedHref("/", locale)}
              className="inline-block font-display text-3xl tracking-[0.12em] text-cream"
            >
              ZION <span className="text-teal">MIAMI</span>
            </Link>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
              {t(site.vision, locale)}
            </p>
            <Link
              href={localizedHref("/ofertas", locale)}
              className="mt-8 inline-flex items-center rounded-full border border-teal/60 bg-teal/10 px-7 py-3 text-sm tracking-wide text-cream transition-colors hover:bg-teal hover:text-ink"
            >
              {t(ui.give, locale)}
            </Link>
          </div>

          <div className="border-t border-line pt-8 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-1">
            <p className="text-xs uppercase tracking-[0.3em] text-teal">
              {t(visitAndConnect, locale)}
            </p>
            <a
              href={mapsHref}
              target="_blank"
              rel="noreferrer"
              className="mt-5 block max-w-sm font-display text-xl leading-snug text-cream transition-colors hover:text-teal md:text-2xl"
            >
              {t(site.address, locale)}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block text-sm text-cream/65 transition-colors hover:text-cream"
            >
              {site.email}
            </a>
            {site.phone && (
              <a
                href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                className="mt-2 block text-sm text-cream/65 transition-colors hover:text-cream"
              >
                {site.phone}
              </a>
            )}

            <div className="mt-7 flex items-center gap-4">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center text-cream/65 transition-colors hover:text-cream"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                  <rect x="2.5" y="2.5" width="19" height="19" rx="5.2" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
                </svg>
              </a>
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="inline-flex h-11 w-11 items-center justify-center text-cream/65 transition-colors hover:text-cream"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M23.5 7.2a3 3 0 0 0-2.1-2.1C19.5 4.6 12 4.6 12 4.6s-7.5 0-9.4.5A3 3 0 0 0 .5 7.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-4.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
                </svg>
              </a>
              {site.social.spotify && (
                <a
                  href={site.social.spotify}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Spotify"
                  className="inline-flex h-11 w-11 items-center justify-center text-cream/65 transition-colors hover:text-cream"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.6 14.4a.8.8 0 0 1-1.1.3c-3-1.8-6.7-2.2-11.1-1.2a.8.8 0 1 1-.4-1.5c4.8-1.1 8.9-.6 12.3 1.4a.8.8 0 0 1 .3 1Zm1.2-2.7a1 1 0 0 1-1.3.3c-3.4-2.1-8.6-2.7-12.6-1.5a1 1 0 1 1-.6-1.9c4.6-1.4 10.3-.7 14.2 1.7a1 1 0 0 1 .3 1.4Zm.1-2.8C14 8.5 7.7 8.3 4.1 9.4a1.2 1.2 0 1 1-.7-2.3C7.6 5.8 14.5 6 18.9 8.6a1.2 1.2 0 0 1-1 2.2l-.0-.1Z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. {t(rights, locale)}</p>
          <a href="#top" className="w-fit transition-colors hover:text-cream">
            {t(ui.backToTop, locale)} ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
