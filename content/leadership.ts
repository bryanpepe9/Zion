import type { Localized } from "@/lib/i18n";

export interface Pastor {
  slug: string;
  name: string; // proper noun — not translated
  role: Localized;
  image?: string; // /uploads/... ; falls back to a monogram tile
  bio: Localized;
}

export const leadershipPage = {
  title: { en: "Leadership", pt: "Liderança", es: "Liderazgo" } as Localized,
  intro: {
    en: "Meet the pastors who lead, teach, and shepherd the Zion Miami family.",
    pt: "Conheça os pastores que lideram, ensinam e pastoreiam a família Zion Miami.",
    es: "Conoce a los pastores que lideran, enseñan y pastorean a la familia Zion Miami.",
  } as Localized,
};

// Add a photo to public/uploads/ and set `image` (e.g. "/uploads/andre-goncalves.jpg").
// TODO confirm — bio below is a placeholder; provide the final bio and a photo.
export const pastors: Pastor[] = [
  {
    slug: "andre-goncalves",
    name: "André Ito Gonçalves",
    role: {
      en: "Lead Pastor",
      pt: "Pastor Presidente",
      es: "Pastor Principal",
    },
    // image: "/uploads/andre-goncalves.jpg",
    bio: {
      en: "André Ito Gonçalves — known simply as Pr. André Gonçalves — is a global leader and pastor. He serves as a core pastor and leader at Zion Church, including Zion Miami and Zion Orlando. (Placeholder bio — to be finalized.)",
      pt: "André Ito Gonçalves — conhecido simplesmente como Pr. André Gonçalves — é um líder global e pastor. Ele atua como pastor e líder central da Zion Church, incluindo a Zion Miami e a Zion Orlando. (Bio provisória — a ser finalizada.)",
      es: "André Ito Gonçalves — conocido simplemente como Pr. André Gonçalves — es un líder global y pastor. Se desempeña como pastor y líder central de Zion Church, incluyendo Zion Miami y Zion Orlando. (Biografía provisional — pendiente de finalizar.)",
    },
  },
];
