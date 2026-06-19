import type { Localized } from "@/lib/i18n";

/* ============================================================================
 * NEWS POSTS — how to add one (takes ~2 minutes, no other files to touch)
 * ----------------------------------------------------------------------------
 * 1. Save the post image into:  public/uploads/
 *    (e.g. public/uploads/week-at-zion.jpg). Skip `image` to use a gradient.
 * 2. Copy the TEMPLATE block below, paste it as the FIRST item in the array
 *    (newest first), and fill it in. Keep the en / pt / es lines.
 * 3. Save. That's it — it shows up on /news and the 3 newest show on the Home page.
 *
 * TEMPLATE (copy everything between the lines):
 * ----------------------------------------------------------------------------
 *  {
 *    slug: "short-name-with-dashes",
 *    date: "2026-06-18",                       // YYYY-MM-DD
 *    image: "/uploads/your-image.jpg",         // optional
 *    link: "https://instagram.com/p/...",      // optional ("Learn more" target)
 *    title: {
 *      en: "English title",
 *      pt: "Título em português",
 *      es: "Título en español",
 *    },
 *    excerpt: {
 *      en: "One or two sentences in English.",
 *      pt: "Uma ou duas frases em português.",
 *      es: "Una o dos frases en español.",
 *    },
 *  },
 * ----------------------------------------------------------------------------
 * ==========================================================================*/

export interface NewsPost {
  slug: string;
  date: string; // ISO YYYY-MM-DD
  image?: string; // path under /public, e.g. "/uploads/week-at-zion.jpg"
  link?: string; // optional external/post URL for "Learn more"
  title: Localized;
  excerpt: Localized;
}

// Newest first. Placeholder posts — replace with real content.  // TODO confirm
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
