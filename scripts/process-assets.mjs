// One-off asset processing: crop photographic regions out of the baked design
// PNGs and copy clean imagery into public/images/<page>/.
// Run: node scripts/process-assets.mjs
import sharp from "sharp";
import { mkdirSync, copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const SITE = "/Users/bryanpepe/Projects/Zion/Site";
const BG = "/tmp/zionbg"; // Old/Background images (photo + name, clean of description)
const OUT = "/Users/bryanpepe/Projects/Zion/zion-miami/public/images";

const dirs = ["ministerios", "missoes", "eventos", "home", "news"];
for (const d of dirs) mkdirSync(join(OUT, d), { recursive: true });

// ---- Ministries: use clean Background images (name + photo, empty teal for text) ----
const ministries = {
  altomonte: "Altomonte.png",
  diamante: "Diamante.png",
  eklektos: "Eklektos.png",
  flow: "Flow.png",
  g52: "G 5.2.png",
  jornada: "Jornada.png",
  missoes: "MIssões.png",
  "por-um-legado": "Por um legado.png",
  raizes: "Raízes.png",
  rise: "Rise.png",
  vox: "Vox.png",
};
for (const [slug, file] of Object.entries(ministries)) {
  const src = join(BG, file);
  if (!existsSync(src)) {
    console.warn("MISSING ministry bg:", src);
    continue;
  }
  await sharp(src).png().toFile(join(OUT, "ministerios", `${slug}.png`));
  console.log("ministerios/", slug);
}

// ---- Missionaries: crop left portion (clean B&W portrait, drop baked text panel) ----
const missionaries = {
  "andres-cassia-molinari": "Andres e Cassia Molinari.png",
  "cecilia-pereira-da-silva": "Cecília Pereira da Silva.png",
  "daniel-kalta": "Daniel Kalta.png",
  "dunamis-pockets": "Dunamis Pockets.png",
  "familia-yang": "Família Yang.png",
  "fabrica-de-sonhos": "Fábrica de Sonhos.png",
  "gabe-pinheiro": "Gabe Pinheiro v2.png",
  "gabriela-tapias": "Gabriela Tapias.png",
  "gadiel-nunes-da-cruz": "Gadiel Nunes da Cruz.png",
  "iris-machava": "Iris Machava.png",
  "jocum-casa": "Jocum Casa.png",
  "lucas-pinheiro": "Lucas Pinheiro.png",
  "ong-em-familia": "Ong em Família.png",
  "projeto-kalebe": "Projeto Kalebe.png",
  "recanto-betel": "Recanto Betel.png",
  "rede-social-do-centro": "Rede Social do Centro.png",
};
const LEFT_FRACTION = 0.47; // text panel begins ~right half
for (const [slug, file] of Object.entries(missionaries)) {
  const src = join(SITE, "Missões", "Assets", "Mobile", file);
  if (!existsSync(src)) {
    console.warn("MISSING missionary:", src);
    continue;
  }
  const meta = await sharp(src).metadata();
  const w = Math.round(meta.width * LEFT_FRACTION);
  await sharp(src)
    .extract({ left: 0, top: 0, width: w, height: meta.height })
    .png()
    .toFile(join(OUT, "missoes", `${slug}.png`));
  console.log("missoes/", slug, `${w}x${meta.height}`);
}

// ---- Eventos: hero + banner imagery ----
copyFileSync(join(SITE, "Eventos/Assets/Desktop/Header.png"), join(OUT, "eventos", "hero.png"));
copyFileSync(join(SITE, "Eventos/Assets/Banners/Export/Zbreak.png"), join(OUT, "eventos", "zbreak.png"));
copyFileSync(
  join(SITE, "Eventos/Assets/Banners/Export/Batismo nas águas v2.png"),
  join(OUT, "eventos", "batismo.png")
);
console.log("eventos done");
