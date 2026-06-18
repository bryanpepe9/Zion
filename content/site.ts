import type { Localized } from "@/lib/i18n";

type L = Localized;

export const site = {
  name: "Zion Miami",
  // email/phone not published on Instagram — confirm with the church.  // TODO confirm
  email: "info@zionmiami.org",
  phone: "",
  address: {
    en: "2323 SW 27th Ave, Miami, FL",
    pt: "2323 SW 27th Ave, Miami, FL",
    es: "2323 SW 27th Ave, Miami, FL",
  } as L,
  mapsQuery: "2323 SW 27th Ave, Miami, FL",
  social: {
    instagram: "https://instagram.com/zion.miami",
    youtube: "https://youtube.com/@zionmiamichurch",
    spotify: "",
  },
  vision: {
    pt: "Formar discípulos e líderes que manifestam o Reino de Deus para transformar a Terra, através do amor de Cristo, verdade da Palavra e poder do Espírito Santo.",
    en: "To form disciples and leaders who manifest the Kingdom of God to transform the Earth, through the love of Christ, the truth of the Word, and the power of the Holy Spirit.",
    es: "Formar discípulos y líderes que manifiesten el Reino de Dios para transformar la Tierra, a través del amor de Cristo, la verdad de la Palabra y el poder del Espíritu Santo.",
  } as L,
  lema: {
    pt: "“Não por força, nem pela violência, mas pelo Espírito Santo.”",
    en: "“Not by might, nor by power, but by My Spirit.”",
    es: "“No con ejército, ni con fuerza, sino con mi Espíritu.”",
  } as L,
  verseRef: { en: "Zechariah 4:6", pt: "Zacarias 4:6", es: "Zacarías 4:6" } as L,
};

export const home = {
  heroKicker: { en: "Welcome to", pt: "Bem-vindo à", es: "Bienvenido a" } as L,
  heroTitle: { en: "Zion Miami", pt: "Zion Miami", es: "Zion Miami" } as L,
  heroSubtitle: {
    pt: "Uma igreja que vive o sobrenatural de Deus no coração de Miami. Venha como você é.",
    en: "A church living out the supernatural of God in the heart of Miami. Come as you are.",
    es: "Una iglesia que vive lo sobrenatural de Dios en el corazón de Miami. Ven tal como eres.",
  } as L,
  ctaVisit: { en: "Plan your visit", pt: "Planeje sua visita", es: "Planifica tu visita" } as L,
  ctaWatch: { en: "Watch online", pt: "Assista online", es: "Mira en línea" } as L,

  welcomeTitle: { en: "Welcome to Zion", pt: "Seja bem-vindo à Zion", es: "Bienvenido a Zion" } as L,
  welcomeBody: {
    pt: "Aqui na Zion vivemos o sobrenatural, acreditamos no poder da Palavra e buscamos viver uma vida de intimidade com Deus. Desejamos que a Zion seja um lugar onde você vai ser instigado a buscar mais.",
    en: "Here at Zion we live the supernatural, we believe in the power of the Word, and we pursue a life of intimacy with God. We long for Zion to be a place where you are stirred to seek more.",
    es: "Aquí en Zion vivimos lo sobrenatural, creemos en el poder de la Palabra y buscamos vivir una vida de intimidad con Dios. Anhelamos que Zion sea un lugar donde seas impulsado a buscar más.",
  } as L,

  servicesTitle: { en: "Service times", pt: "Horários", es: "Horarios" } as L,
  servicesNote: {
    en: "Weekly Sunday service",
    pt: "Culto semanal aos domingos",
    es: "Culto semanal los domingos",
  } as L,
  services: [
    { day: { en: "Sunday", pt: "Domingo", es: "Domingo" } as L, time: "4:30 PM" },
  ],
  locationTitle: { en: "Where we are", pt: "Onde estamos", es: "Dónde estamos" } as L,
  directions: { en: "Get directions", pt: "Ver no mapa", es: "Ver en el mapa" } as L,

  exploreTitle: { en: "Explore Zion", pt: "Explore a Zion", es: "Explora Zion" } as L,
  newsTitle: { en: "Latest news", pt: "Últimas notícias", es: "Últimas noticias" } as L,
  newsAll: { en: "View all", pt: "Ver todas", es: "Ver todas" } as L,

  giveTitle: {
    pt: "Faça parte do que Deus está fazendo",
    en: "Be part of what God is doing",
    es: "Sé parte de lo que Dios está haciendo",
  } as L,
  giveBody: {
    pt: "Sua generosidade sustenta missões, ministérios e a expansão do Reino a partir de Miami.",
    en: "Your generosity sustains missions, ministries, and the expansion of the Kingdom from Miami.",
    es: "Tu generosidad sostiene misiones, ministerios y la expansión del Reino desde Miami.",
  } as L,
};

export const pages = {
  quemSomos: {
    title: { en: "About us", pt: "Quem somos", es: "Quiénes somos" } as L,
    beliefsTitle: { en: "What we believe", pt: "No que cremos", es: "En qué creemos" } as L,
    beliefsBody: {
      pt: "Cremos em um Deus que se revela, que cura, que salva e que transforma. Conheça os fundamentos da nossa fé.",
      en: "We believe in a God who reveals Himself, who heals, who saves, and who transforms. Discover the foundations of our faith.",
      es: "Creemos en un Dios que se revela, que sana, que salva y que transforma. Conoce los fundamentos de nuestra fe.",
    } as L,
    valuesTitle: { en: "Our values", pt: "Nossos valores", es: "Nuestros valores" } as L,
    visionTitle: { en: "Vision", pt: "Visão", es: "Visión" } as L,
  },
  ministerios: {
    title: { en: "Ministries", pt: "Ministérios", es: "Ministerios" } as L,
    intro: {
      pt: "Há um lugar para cada geração e cada fase da vida na Zion. Encontre o seu.",
      en: "There is a place for every generation and every season of life at Zion. Find yours.",
      es: "Hay un lugar para cada generación y cada etapa de la vida en Zion. Encuentra el tuyo.",
    } as L,
  },
  missoes: {
    title: { en: "Missions", pt: "Missões", es: "Misiones" } as L,
    intro: {
      pt: "Movidos pela Grande Comissão, apoiamos missionários e projetos que levam o amor de Cristo aos confins da Terra.",
      en: "Moved by the Great Commission, we support missionaries and projects carrying the love of Christ to the ends of the Earth.",
      es: "Movidos por la Gran Comisión, apoyamos a misioneros y proyectos que llevan el amor de Cristo hasta los confines de la Tierra.",
    } as L,
  },
  eventos: {
    title: { en: "Events", pt: "Eventos", es: "Eventos" } as L,
    intro: {
      pt: "Conferências, encontros e celebrações para toda a comunidade Zion.",
      en: "Conferences, gatherings, and celebrations for the whole Zion community.",
      es: "Conferencias, encuentros y celebraciones para toda la comunidad Zion.",
    } as L,
  },
  news: {
    title: { en: "News", pt: "News", es: "News" } as L,
    intro: {
      pt: "Novidades, avisos e o que Deus tem feito na Zion Miami.",
      en: "Updates, announcements, and what God is doing at Zion Miami.",
      es: "Novedades, avisos y lo que Dios está haciendo en Zion Miami.",
    } as L,
  },
};

export interface NewsPost {
  slug: string;
  date: string; // ISO
  title: L;
  excerpt: L;
}

// Placeholder posts — replace with real content.  // TODO confirm
export const newsPosts: NewsPost[] = [
  {
    slug: "novos-horarios",
    date: "2026-06-01",
    title: {
      en: "New service times",
      pt: "Novos horários de culto",
      es: "Nuevos horarios de culto",
    },
    excerpt: {
      pt: "Atualizamos a nossa programação semanal. Confira os novos horários e venha adorar conosco.",
      en: "We've updated our weekly schedule. Check out the new times and come worship with us.",
      es: "Actualizamos nuestra programación semanal. Consulta los nuevos horarios y ven a adorar con nosotros.",
    },
  },
  {
    slug: "plano-de-leitura-2026",
    date: "2026-05-15",
    title: { en: "2026 reading plan", pt: "Plano de leitura 2026", es: "Plan de lectura 2026" },
    excerpt: {
      pt: "Caminhe pela Palavra conosco ao longo do ano com o nosso plano de leitura bíblica.",
      en: "Walk through the Word with us throughout the year with our Bible reading plan.",
      es: "Camina por la Palabra con nosotros a lo largo del año con nuestro plan de lectura bíblica.",
    },
  },
  {
    slug: "celulas-abertas",
    date: "2026-05-02",
    title: {
      en: "Small groups open in Miami",
      pt: "Células abertas em Miami",
      es: "Células abiertas en Miami",
    },
    excerpt: {
      pt: "Conecte-se a uma família de fé perto de você. Nossas células estão abrindo em toda a cidade.",
      en: "Connect with a family of faith near you. Our small groups are opening across the city.",
      es: "Conéctate con una familia de fe cerca de ti. Nuestras células están abriendo en toda la ciudad.",
    },
  },
];
