import type { Localized } from "@/lib/i18n";

export interface City {
  name: string; // proper noun — not translated
  lat: number;
  lng: number;
  hub?: boolean; // Miami
}

export interface Country {
  key: string;
  id: string; // Natural Earth numeric id (world-atlas countries-110m)
  name: Localized;
  cities: City[];
}

// Zion Church network. Order = region-list order; the country index is the `ri`
// used to link a marker/arc to its row. Miami (hub) is highlighted.
export const countries: Country[] = [
  {
    key: "us",
    id: "840",
    name: { en: "United States", pt: "Estados Unidos", es: "Estados Unidos" },
    cities: [
      { name: "Miami", lat: 25.76, lng: -80.19, hub: true },
      { name: "Orlando", lat: 28.54, lng: -81.38 },
    ],
  },
  {
    key: "br",
    id: "076",
    name: { en: "Brazil", pt: "Brasil", es: "Brasil" },
    cities: [
      { name: "São Paulo", lat: -23.55, lng: -46.63 },
      { name: "Campinas", lat: -22.9, lng: -47.06 },
      { name: "Jundiaí", lat: -23.19, lng: -46.88 },
      { name: "Santos", lat: -23.96, lng: -46.33 },
      { name: "Ribeirão Preto", lat: -21.17, lng: -47.81 },
      { name: "Vale do Ribeira", lat: -24.71, lng: -47.88 },
      { name: "Campo Grande", lat: -20.47, lng: -54.62 },
      { name: "Recife", lat: -8.05, lng: -34.88 },
      { name: "Maceió", lat: -9.65, lng: -35.73 },
    ],
  },
  {
    key: "ec",
    id: "218",
    name: { en: "Ecuador", pt: "Equador", es: "Ecuador" },
    cities: [
      { name: "Quito", lat: -0.18, lng: -78.47 },
      { name: "Cuenca", lat: -2.9, lng: -79.0 },
    ],
  },
  {
    key: "pt",
    id: "620",
    name: { en: "Portugal", pt: "Portugal", es: "Portugal" },
    cities: [
      { name: "Lisboa", lat: 38.72, lng: -9.14 },
      { name: "Porto", lat: 41.15, lng: -8.61 },
    ],
  },
  {
    key: "cl",
    id: "152",
    name: { en: "Chile", pt: "Chile", es: "Chile" },
    cities: [{ name: "Santiago", lat: -33.45, lng: -70.67 }],
  },
];

export const networkSection = {
  kicker: { en: "Zion worldwide", pt: "Zion no mundo", es: "Zion en el mundo" } as Localized,
  title: {
    en: "Part of a global movement",
    pt: "Parte de um movimento global",
    es: "Parte de un movimiento global",
  } as Localized,
  lede: {
    en: "Zion Miami is one expression of a church family spread across the Americas and Europe — one vision, one Spirit, many cities.",
    pt: "A Zion Miami é uma expressão de uma família de igrejas espalhada pelas Américas e Europa — uma visão, um Espírito, muitas cidades.",
    es: "Zion Miami es una expresión de una familia de iglesias presente en las Américas y Europa — una visión, un Espíritu, muchas ciudades.",
  } as Localized,
};
