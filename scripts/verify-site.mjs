import { readFile } from "node:fs/promises";

const origin = process.env.VERIFY_ORIGIN ?? "http://127.0.0.1:3117";
const configSource = await readFile(
  new URL("../lib/site-config.ts", import.meta.url),
  "utf8",
);
const configuredNumber = configSource.match(/number:\s*"(\d+)"/);

if (!configuredNumber) {
  throw new Error("No fue posible leer el número de WhatsApp desde lib/site-config.ts.");
}

const expectedWhatsAppNumber = configuredNumber[1];

const response = await fetch(origin);
if (!response.ok) {
  throw new Error(`La página principal respondió con HTTP ${response.status}.`);
}

const html = await response.text();
const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
const allIds = [...html.matchAll(/id="([^"]+)"/g)].map((match) => match[1]);
const ids = new Set(allIds);

if (allIds.length !== ids.size) {
  throw new Error("La página contiene IDs duplicados.");
}

if ((html.match(/<h1(?:\s|>)/g) ?? []).length !== 1) {
  throw new Error("La página debe contener exactamente un H1.");
}

for (const requiredFragment of [
  '<html lang="es">',
  'name="viewport"',
  'rel="canonical"',
  'property="og:title"',
  'name="twitter:title"',
  'type="application/ld+json"',
]) {
  if (!html.includes(requiredFragment)) {
    throw new Error(`Falta el elemento SEO o semántico: ${requiredFragment}`);
  }
}

const missingAnchors = [...new Set(hrefs.filter((href) => href.startsWith("#")))]
  .map((href) => href.slice(1))
  .filter((id) => !ids.has(id));

if (missingAnchors.length > 0) {
  throw new Error(`Anchors sin destino: ${missingAnchors.join(", ")}`);
}

const whatsappLinks = hrefs.filter((href) => href.startsWith("https://wa.me/"));
if (whatsappLinks.length === 0) {
  throw new Error("No se encontraron enlaces de WhatsApp.");
}

const invalidWhatsAppLinks = whatsappLinks.filter(
  (href) => !href.startsWith(`https://wa.me/${expectedWhatsAppNumber}`),
);
if (invalidWhatsAppLinks.length > 0) {
  throw new Error(`Enlaces de WhatsApp inválidos: ${invalidWhatsAppLinks.join(", ")}`);
}

const candidateLinks = whatsappLinks.filter((href) => href.includes("text="));
if (candidateLinks.some((href) => !decodeURIComponent(href).includes("OPCTALENT"))) {
  throw new Error("Un mensaje prellenado de WhatsApp no menciona OPCTALENT.");
}

for (const path of ["/robots.txt", "/sitemap.xml", "/favicon.svg"]) {
  const assetResponse = await fetch(`${origin}${path}`);
  if (!assetResponse.ok) {
    throw new Error(`${path} respondió con HTTP ${assetResponse.status}.`);
  }
}

console.log(
  `Verificación correcta: semántica/SEO, ${ids.size} IDs únicos, ${whatsappLinks.length} enlaces de WhatsApp y ${new Set(hrefs.filter((href) => href.startsWith("#"))).size} anchors internos.`,
);
