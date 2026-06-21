import type { Localized } from "@/lib/i18n";

export interface ScheduleItem {
  key: string;
  name: Localized;
  eyebrow: Localized;
  image?: string;
  imagePositionMobile?: string;
  imagePosition?: string;
  ages?: Localized;
  time: Localized;
  frequency: Localized;
  location: Localized;
  address?: string;
  href?: string;
  hrefLabel?: Localized;
  external?: boolean;
}

export interface ScheduleDay {
  key: string;
  day: Localized;
  items: ScheduleItem[];
}

export const schedulePage = {
  title: { en: "Weekly schedule", pt: "Programação", es: "Programación" } as Localized,
  intro: {
    en: "Find your place in the life of Zion Miami throughout the week.",
    pt: "Encontre o seu lugar na vida da Zion Miami durante a semana.",
    es: "Encuentra tu lugar en la vida de Zion Miami durante la semana.",
  } as Localized,
  directions: { en: "Get directions", pt: "Ver no mapa", es: "Ver en el mapa" } as Localized,
  watch: { en: "Watch on YouTube", pt: "Assista no YouTube", es: "Mira en YouTube" } as Localized,
};

export const scheduleDays: ScheduleDay[] = [
  {
    key: "friday",
    day: { en: "Friday", pt: "Sexta-feira", es: "Viernes" },
    items: [
      {
        key: "rise",
        name: { en: "Rise", pt: "Rise", es: "Rise" },
        eyebrow: { en: "Youth hangout", pt: "Hangout de adolescentes", es: "Hangout de adolescentes" },
        image: "/images/programacao/rise.jpg",
        imagePositionMobile: "50% 54%",
        imagePosition: "50% 68%",
        ages: { en: "Ages 12–17", pt: "12 a 17 anos", es: "12 a 17 años" },
        time: { en: "5:00 PM", pt: "17h", es: "5:00 PM" },
        frequency: { en: "Every Friday", pt: "Toda sexta-feira", es: "Todos los viernes" },
        location: { en: "Threefold Cafe", pt: "Threefold Cafe", es: "Threefold Cafe" },
        address: "3060 SW 37th Ave, Miami, FL",
        href: "https://maps.google.com/?q=Threefold+Cafe+3060+SW+37th+Ave+Miami+FL",
        external: true,
      },
      {
        key: "vox",
        name: { en: "Vox", pt: "Vox", es: "Vox" },
        eyebrow: { en: "Young adults hangout", pt: "Hangout de jovens adultos", es: "Hangout de jóvenes adultos" },
        image: "/images/programacao/vox.jpg",
        imagePositionMobile: "50% 35%",
        imagePosition: "68% 58%",
        ages: { en: "Ages 19–29", pt: "19 a 29 anos", es: "19 a 29 años" },
        time: { en: "7:30 PM", pt: "19h30", es: "7:30 PM" },
        frequency: { en: "Every Friday", pt: "Toda sexta-feira", es: "Todos los viernes" },
        location: { en: "Azusa", pt: "Azusa", es: "Azusa" },
        address: "3823 Thomas Ave, Miami, FL",
        href: "https://maps.google.com/?q=3823+Thomas+Ave+Miami+FL",
        external: true,
      },
    ],
  },
  {
    key: "sunday",
    day: { en: "Sunday", pt: "Domingo", es: "Domingo" },
    items: [
      {
        key: "service",
        name: { en: "In-person service", pt: "Culto presencial", es: "Culto presencial" },
        eyebrow: { en: "Zion Miami", pt: "Zion Miami", es: "Zion Miami" },
        image: "/images/programacao/service.jpg",
        imagePositionMobile: "50% 44%",
        imagePosition: "54% 52%",
        time: { en: "4:30 PM", pt: "16h30", es: "4:30 PM" },
        frequency: { en: "Every Sunday", pt: "Todo domingo", es: "Todos los domingos" },
        location: { en: "Main service", pt: "Culto principal", es: "Culto principal" },
        address: "2323 SW 27th Ave, Miami, FL",
        href: "https://maps.google.com/?q=2323+SW+27th+Ave+Miami+FL",
        external: true,
      },
      {
        key: "online",
        name: { en: "Church online", pt: "Igreja online", es: "Iglesia en línea" },
        eyebrow: { en: "Live on YouTube", pt: "Ao vivo no YouTube", es: "En vivo por YouTube" },
        time: { en: "4:30 PM", pt: "16h30", es: "4:30 PM" },
        frequency: { en: "Live during the in-person service", pt: "Ao vivo durante o culto presencial", es: "En vivo durante el culto presencial" },
        location: { en: "Wherever you are", pt: "De onde você estiver", es: "Desde donde estés" },
        href: "https://youtube.com/@zionmiamichurch",
        hrefLabel: schedulePage.watch,
        external: true,
      },
    ],
  },
];
