export const locales = ["en", "pt", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// Translations are optional per-locale; `t` falls back to English, then any.
export type Localized = Partial<Record<Locale, string>>;

export interface NavItem {
  href: string; // path after the locale prefix, e.g. "/quem-somos"
  label: Localized;
}

export const nav: NavItem[] = [
  { href: "/", label: { en: "Home", pt: "Home", es: "Inicio" } },
  { href: "/quem-somos", label: { en: "About", pt: "Quem Somos", es: "Quiénes Somos" } },
  { href: "/ministerios", label: { en: "Ministries", pt: "Ministérios", es: "Ministerios" } },
  { href: "/missoes", label: { en: "Missions", pt: "Missões", es: "Misiones" } },
  { href: "/eventos", label: { en: "Events", pt: "Eventos", es: "Eventos" } },
  { href: "/news", label: { en: "News", pt: "News", es: "News" } },
];

export const ui = {
  give: { en: "Give", pt: "Ofertar", es: "Ofrendar" } as Localized,
  menu: { en: "Menu", pt: "Menu", es: "Menú" } as Localized,
  close: { en: "Close", pt: "Fechar", es: "Cerrar" } as Localized,
  readMore: { en: "Learn more", pt: "Saiba mais", es: "Más información" } as Localized,
  readLess: { en: "Show less", pt: "Ver menos", es: "Ver menos" } as Localized,
  register: { en: "Register", pt: "Inscreva-se", es: "Inscríbete" } as Localized,
  registrationsClosed: {
    en: "Registrations closed",
    pt: "Inscrições encerradas",
    es: "Inscripciones cerradas",
  } as Localized,
  upcoming: { en: "Upcoming events", pt: "Próximos eventos", es: "Próximos eventos" } as Localized,
  past: { en: "Past events", pt: "Eventos anteriores", es: "Eventos anteriores" } as Localized,
  backToTop: { en: "Back to top", pt: "Voltar ao topo", es: "Volver arriba" } as Localized,
  tbd: { en: "Coming soon", pt: "Em breve", es: "Muy pronto" } as Localized,
};

export function t(value: Localized, locale: Locale): string {
  return value[locale] ?? value[defaultLocale] ?? Object.values(value)[0] ?? "";
}

/** Build a localized href: "/quem-somos" -> "/en/quem-somos" ("/" -> "/en"). */
export function localizedHref(href: string, locale: Locale): string {
  if (href === "/") return `/${locale}`;
  return `/${locale}${href}`;
}
