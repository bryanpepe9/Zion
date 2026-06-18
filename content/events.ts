import type { Localized } from "@/lib/i18n";

export interface ZionEvent {
  slug: string;
  title: Localized;
  tagline: Localized;
  desc: Localized;
  image?: string;
  status: "upcoming" | "past";
  cta?: { label: Localized; href: string };
}

// NOTE: imagery/text drawn from the Eventos design export. Dates in the source
// assets are from 2023, so these are treated as placeholders / past events
// until the church confirms the current calendar.  // TODO confirm events
export const events: ZionEvent[] = [
  {
    slug: "batismo-nas-aguas",
    title: { en: "Water Baptism", pt: "Batismo nas Águas", es: "Bautismo en las Aguas" },
    tagline: {
      en: "Take the next step in your faith",
      pt: "Dê o próximo passo na sua fé",
      es: "Da el próximo paso en tu fe",
    },
    desc: {
      pt: "Uma celebração da nova vida em Cristo. Se você decidiu seguir Jesus, o batismo é o seu próximo passo público de fé. Inscreva-se e venha celebrar conosco.",
      en: "A celebration of new life in Christ. If you have decided to follow Jesus, baptism is your next public step of faith. Register and come celebrate with us.",
      es: "Una celebración de la nueva vida en Cristo. Si has decidido seguir a Jesús, el bautismo es tu próximo paso público de fe. Inscríbete y ven a celebrar con nosotros.",
    },
    image: "/images/eventos/batismo.png",
    status: "upcoming",
    cta: { label: { en: "Register", pt: "Inscreva-se", es: "Inscríbete" }, href: "#" },
  },
  {
    slug: "zbreak",
    title: { en: "ZBreak", pt: "ZBreak", es: "ZBreak" },
    tagline: {
      en: "A time of immersion and renewal",
      pt: "Um tempo de imersão e renovo",
      es: "Un tiempo de inmersión y renovación",
    },
    desc: {
      pt: "O ZBreak é um encontro para sair da rotina, mergulhar na presença de Deus e se reconectar com a comunidade. Mais detalhes em breve.",
      en: "ZBreak is a gathering to step out of routine, dive into God's presence, and reconnect with the community. More details coming soon.",
      es: "ZBreak es un encuentro para salir de la rutina, sumergirse en la presencia de Dios y reconectarse con la comunidad. Más detalles muy pronto.",
    },
    image: "/images/eventos/zbreak.png",
    status: "upcoming",
    cta: { label: { en: "Learn more", pt: "Saiba mais", es: "Más información" }, href: "#" },
  },
  {
    slug: "conferencia-g52",
    title: {
      en: "Generation 5.2 Conference",
      pt: "Conferência Geração 5.2",
      es: "Conferencia Generación 5.2",
    },
    tagline: {
      en: "Influencing the 7 spheres of society",
      pt: "Influenciando as 7 esferas da sociedade",
      es: "Influyendo en las 7 esferas de la sociedad",
    },
    desc: {
      pt: "A Conferência é um evento promovido pelo Ministério Geração 5.2, com o intuito de despertar, inspirar e capacitar líderes infantis, pais, educadores cristãos e gestores públicos sobre a importância de investir na formação das próximas gerações.",
      en: "The Conference is an event promoted by the Generation 5.2 Ministry, with the goal of awakening, inspiring, and equipping children's leaders, parents, Christian educators, and public administrators about the importance of investing in shaping the next generations.",
      es: "La Conferencia es un evento promovido por el Ministerio Generación 5.2, con el objetivo de despertar, inspirar y capacitar a líderes de niños, padres, educadores cristianos y gestores públicos sobre la importancia de invertir en la formación de las próximas generaciones.",
    },
    status: "past",
    cta: {
      label: { en: "Registrations closed", pt: "Inscrições encerradas", es: "Inscripciones cerradas" },
      href: "#",
    },
  },
  {
    slug: "viagens-missionarias",
    title: { en: "Mission Trips", pt: "Viagens Missionárias", es: "Viajes Misioneros" },
    tagline: {
      en: "Carry the Kingdom to the nations",
      pt: "Leve o Reino às nações",
      es: "Lleva el Reino a las naciones",
    },
    desc: {
      pt: "Estamos felizes em anunciar as viagens missionárias das quais a Zion Church participa, com equipes formadas por profissionais e voluntários de todas as esferas da sociedade.",
      en: "We are glad to announce the mission trips that Zion Church takes part in, with teams made up of professionals and volunteers from every sphere of society.",
      es: "Nos alegra anunciar los viajes misioneros en los que Zion Church participa, con equipos formados por profesionales y voluntarios de todas las esferas de la sociedad.",
    },
    status: "past",
    cta: {
      label: { en: "Registrations closed", pt: "Inscrições encerradas", es: "Inscripciones cerradas" },
      href: "#",
    },
  },
];
