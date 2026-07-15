export const locales = ["en", "pt", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// Translations are optional per-locale; `t` falls back to English, then any.
export type Localized = Partial<Record<Locale, string>>;

export interface NavItem {
  href?: string; // path after the locale prefix; omit for dropdown-only parents
  label: Localized;
  children?: NavItem[]; // optional dropdown submenu
}

export const nav: NavItem[] = [
  { href: "/", label: { en: "Home", pt: "Home", es: "Inicio" } },
  {
    href: "/quem-somos",
    label: { en: "About", pt: "Quem Somos", es: "Quiénes Somos" },
    children: [
      { href: "/quem-somos", label: { en: "About Us", pt: "Quem Somos", es: "Quiénes Somos" } },
      { href: "/lideranca", label: { en: "Leadership", pt: "Liderança", es: "Liderazgo" } },
    ],
  },
  { href: "/ministerios", label: { en: "Ministries", pt: "Ministérios", es: "Ministerios" } },
  {
    label: { en: "Connect", pt: "Conectar", es: "Conectar" },
    children: [
      {
        href: "/areas-executivas",
        label: { en: "Executive Areas", pt: "Áreas Executivas", es: "Áreas Ejecutivas" },
      },
      { href: "/links", label: { en: "Links", pt: "Links", es: "Links" } },
      { href: "/batismos", label: { en: "Baptisms", pt: "Batismos", es: "Bautismos" } },
    ],
  },
  {
    label: { en: "Equip", pt: "Capacitar", es: "Capacitar" },
    children: [
      { href: "/zao", label: { en: "ZAO Bible Institute", pt: "Instituto Bíblico ZAO", es: "Instituto Bíblico ZAO" } },
      { href: "/plano-de-leitura", label: { en: "Bible Reading Plan", pt: "Plano de Leitura", es: "Plan de Lectura" } },
    ],
  },
  { href: "/eventos", label: { en: "Events", pt: "Eventos", es: "Eventos" } },
  { href: "/contato", label: { en: "Contact Us", pt: "Contato", es: "Contacto" } },
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
  comingSoonNote: {
    en: "This page is coming soon.",
    pt: "Esta página está em construção.",
    es: "Esta página está en construcción.",
  } as Localized,
};

export function t(value: Localized, locale: Locale): string {
  return value[locale] ?? value[defaultLocale] ?? Object.values(value)[0] ?? "";
}

/** Build a localized href: "/quem-somos" -> "/en/quem-somos" ("/" -> "/en"). */
export function localizedHref(href: string | undefined, locale: Locale): string {
  if (!href || href === "/") return `/${locale}`;
  return `/${locale}${href}`;
}
