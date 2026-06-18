import type { Localized } from "@/lib/i18n";

export interface Value {
  key: string;
  title: Localized;
  desc: Localized;
  refs?: string; // bible references (not localized)
}

// First value (Intimidade) is verbatim from the Zion design with references.
// The remaining titles match the Zion value set; descriptions are concise,
// faithful summaries — refs to be confirmed with the church.  // TODO confirm refs
export const values: Value[] = [
  {
    key: "intimidade",
    title: { en: "Intimacy with God", pt: "Intimidade com Deus", es: "Intimidad con Dios" },
    desc: {
      pt: "Buscar a presença de Deus é algo prioritário em nossas vidas. Um estilo de vida de adoração, oração e leitura da palavra de Deus é a base para a intimidade com o nosso Deus. Manifestamos em público o que somos no secreto.",
      en: "Seeking the presence of God is a priority in our lives. A lifestyle of worship, prayer, and reading the Word of God is the foundation of intimacy with our God. We display in public what we are in secret.",
      es: "Buscar la presencia de Dios es una prioridad en nuestras vidas. Un estilo de vida de adoración, oración y lectura de la Palabra de Dios es la base de la intimidad con nuestro Dios. Manifestamos en público lo que somos en lo secreto.",
    },
    refs: "Mt 6.6 | Sl 27.4 | Sl 63.1-8 | Lc 7.37-38 | II Cor 3:18",
  },
  {
    key: "fundamento",
    title: { en: "Biblical Foundation", pt: "Fundamento bíblico", es: "Fundamento bíblico" },
    desc: {
      pt: "A Palavra de Deus é a nossa base e referência para tudo o que cremos e praticamos. Vivemos ancorados nas Escrituras.",
      en: "The Word of God is our foundation and reference for everything we believe and practice. We live anchored in the Scriptures.",
      es: "La Palabra de Dios es nuestra base y referencia para todo lo que creemos y practicamos. Vivimos anclados en las Escrituras.",
    },
  },
  {
    key: "sobrenatural",
    title: { en: "Flowing in the Supernatural", pt: "Fluir sobrenatural", es: "Fluir sobrenatural" },
    desc: {
      pt: "Cremos no poder do Espírito Santo agindo hoje. Buscamos viver e manifestar o sobrenatural de Deus em nosso cotidiano.",
      en: "We believe in the power of the Holy Spirit at work today. We seek to live out and manifest the supernatural of God in our everyday lives.",
      es: "Creemos en el poder del Espíritu Santo actuando hoy. Buscamos vivir y manifestar lo sobrenatural de Dios en nuestro día a día.",
    },
  },
  {
    key: "discipulado",
    title: { en: "Discipleship", pt: "Discipulado", es: "Discipulado" },
    desc: {
      pt: "Entendemos a importância da Grande Comissão e temos a responsabilidade de discipular pessoas e discipular nações, formando discípulos que manifestam as obras de Cristo.",
      en: "We understand the importance of the Great Commission and carry the responsibility to disciple people and disciple nations, forming disciples who manifest the works of Christ.",
      es: "Entendemos la importancia de la Gran Comisión y tenemos la responsabilidad de discipular personas y discipular naciones, formando discípulos que manifiestan las obras de Cristo.",
    },
  },
  {
    key: "lideranca",
    title: { en: "Leadership", pt: "Liderança", es: "Liderazgo" },
    desc: {
      pt: "Formamos líderes segundo o exemplo de Jesus: servos que conduzem com humildade, caráter e propósito.",
      en: "We raise up leaders after the example of Jesus: servants who lead with humility, character, and purpose.",
      es: "Formamos líderes según el ejemplo de Jesús: siervos que conducen con humildad, carácter y propósito.",
    },
  },
  {
    key: "honra",
    title: { en: "Honor", pt: "Honra", es: "Honra" },
    desc: {
      pt: "Cultivamos uma cultura de honra em todos os relacionamentos, valorizando e servindo uns aos outros.",
      en: "We cultivate a culture of honor in all our relationships, valuing and serving one another.",
      es: "Cultivamos una cultura de honra en todas nuestras relaciones, valorando y sirviéndonos unos a otros.",
    },
  },
  {
    key: "excelencia",
    title: { en: "Excellence", pt: "Excelência", es: "Excelencia" },
    desc: {
      pt: "Fazemos tudo para a glória de Deus, com excelência e integridade em todas as áreas.",
      en: "We do everything for the glory of God, with excellence and integrity in every area.",
      es: "Hacemos todo para la gloria de Dios, con excelencia e integridad en cada área.",
    },
  },
];
