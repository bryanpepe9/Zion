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
    {
      day: { en: "Sunday", pt: "Domingo", es: "Domingo" } as L,
      time: { en: "4:30 PM", pt: "16h30", es: "4:30 PM" } as L,
    },
  ],
  livestreamTitle: {
    en: "Live on YouTube",
    pt: "Ao vivo no YouTube",
    es: "En vivo por YouTube",
  } as L,
  livestreamBody: {
    en: "The service is streamed at the same time.",
    pt: "O culto é transmitido no mesmo horário.",
    es: "El culto se transmite en el mismo horario.",
  } as L,
  livestreamCta: {
    en: "Watch",
    pt: "Assistir",
    es: "Ver",
  } as L,
  scheduleCta: {
    en: "View full schedule",
    pt: "Confira a programação completa",
    es: "Ver la programación completa",
  } as L,
  locationTitle: { en: "Where we are", pt: "Onde estamos", es: "Dónde estamos" } as L,
  directions: { en: "Get directions", pt: "Ver no mapa", es: "Ver en el mapa" } as L,

  readingPlanTitle: {
    en: "Bible Reading Plan",
    pt: "Plano de Leitura Bíblica",
    es: "Plan de Lectura Bíblica",
  } as L,
  readingPlanBody: {
    pt: "Nós da Família Zion sabemos da importância da Palavra de Deus e em 2026 estamos juntos no propósito de ler a Bíblia durante o ano todo.",
    en: "We at the Zion Family know the importance of the Word of God, and in 2026 we are united in the purpose of reading the Bible all year long.",
    es: "En la Familia Zion conocemos la importancia de la Palabra de Dios, y en 2026 estamos juntos en el propósito de leer la Biblia durante todo el año.",
  } as L,
  readingPlanCta: {
    en: "Access the reading plan",
    pt: "Acesse o plano de leitura",
    es: "Accede al plan de lectura",
  } as L,
  readingPlanHref: "#", // TODO confirm — link to the 2026 reading plan

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
  // --- Placeholder pages (content coming soon) ---  // TODO confirm content
  areasExecutivas: {
    title: { en: "Executive Areas", pt: "Áreas Executivas", es: "Áreas Ejecutivas" } as L,
    intro: {
      en: "The teams and departments that serve the day-to-day life of Zion Miami.",
      pt: "As equipes e departamentos que servem o dia a dia da Zion Miami.",
      es: "Los equipos y departamentos que sirven el día a día de Zion Miami.",
    } as L,
  },
  links: {
    title: { en: "Links", pt: "Links", es: "Links" } as L,
    intro: {
      en: "Quick links to everything happening at Zion Miami.",
      pt: "Links rápidos para tudo o que acontece na Zion Miami.",
      es: "Enlaces rápidos a todo lo que sucede en Zion Miami.",
    } as L,
  },
  batismos: {
    title: { en: "Baptisms", pt: "Batismos", es: "Bautismos" } as L,
    intro: {
      en: "Take your next step of faith and be baptized with us.",
      pt: "Dê o próximo passo na sua fé e seja batizado conosco.",
      es: "Da el próximo paso en tu fe y bautízate con nosotros.",
    } as L,
  },
  zao: {
    title: {
      en: "ZAO Bible Institute",
      pt: "Instituto Bíblico ZAO",
      es: "Instituto Bíblico ZAO",
    } as L,
    intro: {
      en: "Be equipped in the Word and the Spirit at our Bible institute.",
      pt: "Seja capacitado na Palavra e no Espírito no nosso instituto bíblico.",
      es: "Sé capacitado en la Palabra y el Espíritu en nuestro instituto bíblico.",
    } as L,
  },
  planoLeitura: {
    title: {
      en: "Bible Reading Plan",
      pt: "Plano de Leitura Bíblica",
      es: "Plan de Lectura Bíblica",
    } as L,
    intro: {
      pt: "Nós da Família Zion sabemos da importância da Palavra de Deus e em 2026 estamos juntos no propósito de ler a Bíblia durante o ano todo.",
      en: "We at the Zion Family know the importance of the Word of God, and in 2026 we are united in the purpose of reading the Bible all year long.",
      es: "En la Familia Zion conocemos la importancia de la Palabra de Dios, y en 2026 estamos juntos en el propósito de leer la Biblia durante todo el año.",
    } as L,
  },
  contato: {
    title: { en: "Contact Us", pt: "Contato", es: "Contacto" } as L,
    intro: {
      en: "We'd love to hear from you. Reach out and connect with Zion Miami.",
      pt: "Adoraríamos ouvir você. Entre em contato e conecte-se com a Zion Miami.",
      es: "Nos encantaría saber de ti. Ponte en contacto y conéctate con Zion Miami.",
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
  ofertas: {
    title: {
      en: "Tithes & Offerings",
      pt: "Dízimos e Ofertas",
      es: "Diezmos y Ofrendas",
    } as L,
    intro: {
      en: "Giving is worship — a joyful response to God's goodness.",
      pt: "Contribuir é adoração — uma resposta alegre à bondade de Deus.",
      es: "Ofrendar es adoración — una respuesta alegre a la bondad de Dios.",
    } as L,
  },
};

// News posts now live in `content/news.ts` (easy to edit — see the template there).
export { newsPosts, type NewsPost } from "./news";
