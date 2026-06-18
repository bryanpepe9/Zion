import Link from "next/link";
import { nav, t, localizedHref, type Locale, type Localized } from "@/lib/i18n";
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
            <div className="mt-3 flex gap-4">
              <a href={site.social.instagram} target="_blank" rel="noreferrer" className="hover:text-cream">
                Instagram
              </a>
              <a href={site.social.youtube} target="_blank" rel="noreferrer" className="hover:text-cream">
                YouTube
              </a>
              {site.social.spotify && (
                <a href={site.social.spotify} target="_blank" rel="noreferrer" className="hover:text-cream">
                  Spotify
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
