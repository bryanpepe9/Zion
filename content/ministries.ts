import type { Localized } from "@/lib/i18n";

export interface Ministry {
  slug: string;
  name: string; // brand name, not translated
  image: string;
  ages?: Localized;
  desc: Localized;
}

// Ordered by generations first, then church-life ministries.
export const ministries: Ministry[] = [
  {
    slug: "g52",
    name: "G5.2",
    image: "/images/ministerios/g52.png",
    ages: { en: "Kids", pt: "Crianças", es: "Niños" },
    desc: {
      pt: "G52 é o ministério de crianças da Zion Church. Sabemos que não existe Espírito Santo Junior. O mesmo Espírito que ressuscitou Jesus, que habitou nos apóstolos e que hoje atua nos adultos, é o mesmo que quer habitar e manifestar através de nossas crianças.",
      en: "G52 is Zion Church's children's ministry. We know there is no such thing as a Junior Holy Spirit. The same Spirit who raised Jesus, who dwelled in the apostles, and who works in adults today is the same Spirit who wants to dwell in and move through our children.",
      es: "G52 es el ministerio de niños de Zion Church. Sabemos que no existe un Espíritu Santo Junior. El mismo Espíritu que resucitó a Jesús, que habitó en los apóstoles y que hoy actúa en los adultos, es el mismo que quiere habitar y manifestarse a través de nuestros niños.",
    },
  },
  {
    slug: "rise",
    name: "Rise",
    image: "/images/ministerios/rise.png",
    ages: { en: "Ages 12–14", pt: "12 a 14 anos", es: "12 a 14 años" },
    desc: {
      pt: "Ministério da Zion Church focado em adolescentes de 12 a 14 anos. É nossa missão ver adolescentes sendo formados no olho do furacão do avivamento, com suas identidades forjadas no caráter de Cristo, cheios do Poder do Espírito Santo, levando hoje mesmo o Reino dos Céus para a sociedade a sua volta!",
      en: "A Zion Church ministry for teenagers ages 12 to 14. Our mission is to see teenagers being shaped in the eye of the storm of revival, with their identities forged in the character of Christ, filled with the power of the Holy Spirit, bringing the Kingdom of Heaven to the world around them starting today!",
      es: "Un ministerio de Zion Church para adolescentes de 12 a 14 años. Nuestra misión es ver a los adolescentes siendo formados en el ojo del huracán del avivamiento, con sus identidades forjadas en el carácter de Cristo, llenos del poder del Espíritu Santo, llevando el Reino de los Cielos al mundo que los rodea desde hoy mismo.",
    },
  },
  {
    slug: "flow",
    name: "Flow",
    image: "/images/ministerios/flow.png",
    ages: { en: "Ages 15–17", pt: "15 a 17 anos", es: "15 a 17 años" },
    desc: {
      pt: "Flow é o ministério da Zion Church focado em jovens adolescentes de 15 a 17 anos. Acreditamos em uma geração de filhos que se levanta como líderes para trazer transformação e revolução dentro das suas escolas.",
      en: "Flow is Zion Church's ministry for teenagers ages 15 to 17. We believe in a generation of sons and daughters rising up as leaders to bring transformation and revolution within their schools.",
      es: "Flow es el ministerio de Zion Church para adolescentes de 15 a 17 años. Creemos en una generación de hijos e hijas que se levanta como líderes para traer transformación y revolución dentro de sus escuelas.",
    },
  },
  {
    slug: "vox",
    name: "Vox",
    image: "/images/ministerios/vox.png",
    ages: { en: "Ages 18–26", pt: "18 a 26 anos", es: "18 a 26 años" },
    desc: {
      pt: 'O Vox é um ministério de jovens adultos de 18 a 26 anos, que são compromissados a marcarem a sua geração. A palavra "vox" significa voz no latim. O intuito deste grupo é justamente ser uma voz que anuncia as boas novas do Reino e demonstra o poder e amor de Deus.',
      en: 'Vox is a ministry for young adults ages 18 to 26 who are committed to marking their generation. The word "vox" means "voice" in Latin. The purpose of this group is exactly that: to be a voice that proclaims the good news of the Kingdom and demonstrates the power and love of God.',
      es: 'Vox es un ministerio para jóvenes adultos de 18 a 26 años, comprometidos a marcar su generación. La palabra «vox» significa «voz» en latín. El propósito de este grupo es justamente ese: ser una voz que anuncia las buenas nuevas del Reino y demuestra el poder y el amor de Dios.',
    },
  },
  {
    slug: "eklektos",
    name: "Eklektos",
    image: "/images/ministerios/eklektos.png",
    ages: { en: "Ages 27–39", pt: "27 a 39 anos", es: "27 a 39 años" },
    desc: {
      pt: 'A palavra "Eklektos" significa escolhidos, no grego. O Eklektos é o ministério de jovens de 27 a 39 anos da Zion Church, que acredita que serão capacitados para trazer o Reino de Deus nas esferas da sociedade, através de famílias e indivíduos que manifestam a luz e o poder de Cristo.',
      en: 'The word "Eklektos" means "chosen" in Greek. Eklektos is Zion Church\'s ministry for young adults ages 27 to 39, who believe they will be equipped to bring the Kingdom of God into every sphere of society, through families and individuals who reflect the light and power of Christ.',
      es: 'La palabra «Eklektos» significa «elegidos» en griego. Eklektos es el ministerio de jóvenes adultos de 27 a 39 años de Zion Church, que creen que serán capacitados para llevar el Reino de Dios a cada esfera de la sociedad, a través de familias e individuos que reflejan la luz y el poder de Cristo.',
    },
  },
  {
    slug: "diamante",
    name: "Diamante",
    image: "/images/ministerios/diamante.png",
    ages: { en: "Ages 60+", pt: "60+ anos", es: "60+ años" },
    desc: {
      pt: "O Ministério Diamante é um ministério da Zion Church, cujos participantes são de acima de 60 anos de idade.",
      en: "Diamante is a ministry of Zion Church for members over 60 years old.",
      es: "Diamante es un ministerio de Zion Church para miembros mayores de 60 años.",
    },
  },
  {
    slug: "altomonte",
    name: "Altomonte",
    image: "/images/ministerios/altomonte.png",
    ages: { en: "Praise & Worship", pt: "Louvor & Adoração", es: "Alabanza y Adoración" },
    desc: {
      pt: "Altomonte Music, ministério de Louvor e Adoração da Zion Church, existe para exaltar e fazer conhecido o nome de Deus. Nosso sonho é ver todos os reinos deste mundo adorando, em espírito e em verdade, ao único Rei dos Reis: Jesus Cristo.",
      en: "Altomonte Music, Zion Church's Praise and Worship ministry, exists to exalt and make known the name of God. Our dream is to see all the kingdoms of this world worshiping, in spirit and in truth, the one and only King of Kings: Jesus Christ.",
      es: "Altomonte Music, el ministerio de Alabanza y Adoración de Zion Church, existe para exaltar y dar a conocer el nombre de Dios. Nuestro sueño es ver a todos los reinos de este mundo adorando, en espíritu y en verdad, al único Rey de reyes: Jesucristo.",
    },
  },
  {
    slug: "raizes",
    name: "Raízes",
    image: "/images/ministerios/raizes.png",
    ages: { en: "Membership", pt: "Membresia", es: "Membresía" },
    desc: {
      pt: "É o processo de membresia da Zion Church. No Processo Raízes você aprenderá os fundamentos vivos da nossa igreja, a nossa missão, visão, quais os valores que compõem nossa cultura, nosso histórico e poderá acelerar o engajamento com outros membros e líderes da casa.",
      en: "This is the membership process at Zion Church. In the Raízes Process you will learn the living foundations of our church: our mission, vision, the values that shape our culture, and our history. It will also help you connect more quickly with other members and leaders of the house.",
      es: "Es el proceso de membresía de Zion Church. En el Proceso Raízes aprenderás los fundamentos vivos de nuestra iglesia: nuestra misión, visión, los valores que dan forma a nuestra cultura y nuestra historia. También te ayudará a conectarte más rápidamente con otros miembros y líderes de la casa.",
    },
  },
  {
    slug: "jornada",
    name: "Jornada",
    image: "/images/ministerios/jornada.png",
    ages: { en: "New believers", pt: "Novos convertidos", es: "Nuevos creyentes" },
    desc: {
      pt: "Jornada é o ministério que acolhe, ajuda e orienta os novos convertidos a darem seus primeiros passos na jornada com Cristo, após o novo nascimento, auxiliando também na integração dentro da Zion Church. Seu objetivo é gerar conhecimento, crescimento e conexão.",
      en: "Jornada is the ministry that welcomes, helps, and guides new believers as they take their first steps in their journey with Christ after being born again, while also helping them get connected within Zion Church. Its goal is to foster knowledge, growth, and connection.",
      es: "Jornada es el ministerio que acoge, ayuda y orienta a los nuevos creyentes a dar sus primeros pasos en su camino con Cristo después de nacer de nuevo, ayudándolos también a integrarse dentro de Zion Church. Su objetivo es generar conocimiento, crecimiento y conexión.",
    },
  },
  {
    slug: "missoes",
    name: "Missões",
    image: "/images/ministerios/missoes.png",
    ages: { en: "Missions", pt: "Missões", es: "Misiones" },
    desc: {
      pt: "A Zion Church coopera com o que o Senhor tem feito ao redor do mundo dando suporte financeiro e espiritual a organizações missionárias e iniciativas de justiça social. Estas parcerias são definidas anualmente com diferentes instituições.",
      en: "Zion Church partners with what the Lord is doing around the world by providing financial and spiritual support to missionary organizations and social justice initiatives. These partnerships are established each year with different organizations.",
      es: "Zion Church coopera con lo que el Señor está haciendo alrededor del mundo brindando apoyo financiero y espiritual a organizaciones misioneras e iniciativas de justicia social. Estas alianzas se establecen cada año con diferentes organizaciones.",
    },
  },
  {
    slug: "por-um-legado",
    name: "Por um Legado",
    image: "/images/ministerios/por-um-legado.png",
    ages: { en: "Generosity", pt: "Generosidade", es: "Generosidad" },
    desc: {
      pt: "Por Um Legado é um compromisso pessoal com a expansão do Reino de Deus por meio da Zion Church. Este é o verdadeiro desdobramento de uma história de mais de 40 anos do que Deus tem feito em nosso meio, tanto física quanto espiritualmente.",
      en: "Por Um Legado is a personal commitment to the expansion of the Kingdom of God through Zion Church. It is the true outworking of a story spanning more than 40 years of what God has done among us, both physically and spiritually.",
      es: "Por um Legado es un compromiso personal con la expansión del Reino de Dios a través de Zion Church. Es el verdadero desdoblamiento de una historia de más de 40 años de lo que Dios ha hecho en medio de nosotros, tanto física como espiritualmente.",
    },
  },
];
