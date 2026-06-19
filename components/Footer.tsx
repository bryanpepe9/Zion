import Link from "next/link";
import { nav, t, ui, localizedHref, type Locale, type Localized } from "@/lib/i18n";
import { site } from "@/content/site";

const rights: Localized = {
  en: "All rights reserved.",
  pt: "Todos os direitos reservados.",
  es: "Todos los derechos reservados.",
};

export default function Footer({ locale }: { locale: Locale }) {
  const year = 2026;
  return (
    <footer id="give" className="border-t border-line bg-ink">
      <div className="container-zion py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              href={localizedHref("/", locale)}
              className="font-display text-2xl tracking-[0.18em] text-cream"
            >
              ZION <span className="text-teal">MIAMI</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              {t(site.vision, locale)}
            </p>
            <Link
              href={localizedHref("/ofertas", locale)}
              className="mt-7 inline-block rounded-full border border-teal/60 bg-teal/10 px-6 py-2 text-sm tracking-wide text-cream transition-colors hover:bg-teal hover:text-ink"
            >
              {t(ui.give, locale)}
            </Link>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={localizedHref(item.href, locale)}
                className="text-sm text-cream/70 transition-colors hover:text-cream"
              >
                {t(item.label, locale)}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-3 text-sm text-cream/70">
            <p>{t(site.address, locale)}</p>
            <a href={`mailto:${site.email}`} className="hover:text-cream">
              {site.email}
            </a>
            {site.phone && (
              <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="hover:text-cream">
                {site.phone}
              </a>
            )}
            <div className="mt-3 flex gap-5">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-cream/70 transition-colors hover:text-cream"
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
                className="text-cream/70 transition-colors hover:text-cream"
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
                  className="text-cream/70 transition-colors hover:text-cream"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.6 14.4a.8.8 0 0 1-1.1.3c-3-1.8-6.7-2.2-11.1-1.2a.8.8 0 1 1-.4-1.5c4.8-1.1 8.9-.6 12.3 1.4a.8.8 0 0 1 .3 1Zm1.2-2.7a1 1 0 0 1-1.3.3c-3.4-2.1-8.6-2.7-12.6-1.5a1 1 0 1 1-.6-1.9c4.6-1.4 10.3-.7 14.2 1.7a1 1 0 0 1 .3 1.4Zm.1-2.8C14 8.5 7.7 8.3 4.1 9.4a1.2 1.2 0 1 1-.7-2.3C7.6 5.8 14.5 6 18.9 8.6a1.2 1.2 0 0 1-1 2.2l-.0-.1Z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-6 text-xs text-muted">
          © {year} {site.name}. {t(rights, locale)}
        </div>
      </div>
    </footer>
  );
}
