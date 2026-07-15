import type { Localized } from "@/lib/i18n";

/* Offerings / Tithes page — structure mirrors Zion São Paulo's "Dízimos e Ofertas",
 * adapted to Miami. Teaching text + scripture are universal (translated).
 * GIVING METHODS BELOW ARE PLACEHOLDERS — replace with Miami's real details. // TODO confirm
 */

export const offerings = {
  teachingHeading: {
    en: "Worship through tithes and offerings.",
    pt: "Adoração através de dízimos e ofertas.",
    es: "Adoración a través de diezmos y ofrendas.",
  } as Localized,

  teaching: [
    {
      pt: "A primeira vez que o dízimo foi mencionado na Bíblia está registrado em Gênesis 14, onde Abrão (ainda não era Abraão) adorou a Deus pela vitória obtida numa guerra entre muitos reis da época. Um sacerdote, chamado Melquizedeque, admirado com a destreza e nobreza de Abrão, veio ao seu encontro. Abrão viu Deus na pessoa de Melquizedeque e entendeu que este representava Deus. Nesse encontro, honrou-o com seus dízimos, como se honrando a Deus.",
      en: "The first time the tithe is mentioned in the Bible is in Genesis 14, where Abram (not yet Abraham) worshiped God for the victory won in a war among many kings of that time. A priest named Melchizedek, impressed by Abram's skill and nobility, came to meet him. Abram saw God in the person of Melchizedek and understood that he represented God. In that encounter, he honored him with his tithes, as if honoring God.",
      es: "La primera vez que el diezmo se menciona en la Biblia está registrada en Génesis 14, donde Abram (aún no era Abraham) adoró a Dios por la victoria obtenida en una guerra entre muchos reyes de la época. Un sacerdote llamado Melquisedec, admirado por la destreza y nobleza de Abram, salió a su encuentro. Abram vio a Dios en la persona de Melquisedec y entendió que este representaba a Dios. En ese encuentro, lo honró con sus diezmos, como honrando a Dios.",
    },
    {
      pt: "A segunda referência de dízimos encontramos em Gênesis 32, onde Jacó, em sua experiência com Deus e anjos dos céus, decidiu honrar a Deus com os dízimos.",
      en: "The second reference to tithes is found in Genesis 32, where Jacob, in his encounter with God and the angels of heaven, decided to honor God with tithes.",
      es: "La segunda referencia a los diezmos la encontramos en Génesis 32, donde Jacob, en su experiencia con Dios y los ángeles del cielo, decidió honrar a Dios con los diezmos.",
    },
    {
      pt: "Diante desses dois acontecimentos, entendemos que uma das formas de adorarmos a Deus e honrá-Lo é entregarmos nossos dízimos e ofertas a Ele. E como não O vemos, entregamos aos Seus representantes, que se tornam responsáveis diante de Deus no que tange à aplicação desses valores ou bens.",
      en: "In light of these two events, we understand that one of the ways we worship and honor God is by giving Him our tithes and offerings. And since we do not see Him, we give to His representatives, who become responsible before God for how these resources are used.",
      es: "Ante estos dos acontecimientos, entendemos que una de las formas de adorar a Dios y honrarlo es entregarle nuestros diezmos y ofrendas. Y como no lo vemos, los entregamos a sus representantes, que se vuelven responsables delante de Dios en cuanto a la aplicación de esos recursos.",
    },
    {
      pt: "Nós acreditamos que as ofertas são uma forma direta de adoração a Deus. Amamos demonstrar com alegria a nossa gratidão e devoção a Deus através de dízimos e ofertas vindos das bênçãos que Deus tem nos entregado.",
      en: "We believe that offerings are a direct form of worship to God. We love to joyfully express our gratitude and devotion to God through tithes and offerings that come from the blessings God has given us.",
      es: "Creemos que las ofrendas son una forma directa de adoración a Dios. Nos encanta demostrar con alegría nuestra gratitud y devoción a Dios a través de diezmos y ofrendas que provienen de las bendiciones que Dios nos ha dado.",
    },
  ] as Localized[],

  scripture: {
    quote: {
      pt: "“Honra ao Senhor com teus bens, e com as primícias de toda a tua renda; assim se encherão de fartura os teus celeiros e transbordarão de mosto os teus lagares.”",
      en: "“Honor the Lord with your wealth, with the firstfruits of all your crops; then your barns will be filled to overflowing, and your vats will brim over with new wine.”",
      es: "“Honra al Señor con tus bienes y con las primicias de todos tus frutos; así tus graneros se llenarán con abundancia y tus lagares rebosarán de mosto.”",
    } as Localized,
    ref: { en: "Proverbs 3:9-10", pt: "Provérbios 3:9,10", es: "Proverbios 3:9-10" } as Localized,
  },

  waysTitle: {
    en: "Ways to give",
    pt: "Formas de contribuição",
    es: "Formas de contribuir",
  } as Localized,
  waysIntro: {
    en: "Choose the option that works best for you. Every gift is an act of worship.",
    pt: "Escolha a opção que for melhor para você. Cada oferta é um ato de adoração.",
    es: "Elige la opción que mejor te funcione. Cada ofrenda es un acto de adoración.",
  } as Localized,

  // PLACEHOLDER methods — confirm Miami's real giving channels.  // TODO confirm
  methods: [
    {
      key: "online",
      name: { en: "Online", pt: "Online", es: "En línea" } as Localized,
      desc: {
        en: "Give securely online in just a few seconds.",
        pt: "Ofereça de forma prática e segura diretamente pela nossa página.",
        es: "Ofrenda de forma práctica y segura directamente desde nuestra página.",
      } as Localized,
      cta: {
        label: { en: "Give online", pt: "Clique para ofertar", es: "Ofrendar en línea" } as Localized,
        href: "https://pushpay.com/g/zionchurch",
      },
    },
    {
      key: "in-person",
      name: { en: "In person", pt: "Presencialmente", es: "En persona" } as Localized,
      desc: {
        en: "Give during our Sunday service at 2323 SW 27th Ave, Miami, FL.",
        pt: "Contribua presencialmente no culto de domingo, em 2323 SW 27th Ave, Miami, FL.",
        es: "Ofrenda presencialmente en el culto del domingo, en 2323 SW 27th Ave, Miami, FL.",
      } as Localized,
    },
  ],
};
