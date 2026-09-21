const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://opctalent.example";

export const siteConfig = {
  name: "OPCTALENT",
  title: "OPCTALENT | Crea tu CV profesional por WhatsApp",
  description:
    "Cuéntanos tu experiencia por WhatsApp y OPCTALENT la organiza en un CV profesional, claro y preparado para nuevas oportunidades.",
  siteUrl,
  locale: "es_SV",
  whatsapp: {
    number: "50370576618",
    displayNumber: "+503 7057 6618",
    candidateMessage:
      "Hola, quiero crear mi CV profesional con OPCTALENT. ¿Cómo comenzamos?",
    companyMessage:
      "Hola, represento a una empresa y quiero conocer cómo OPCTALENT puede ayudarnos a buscar talento.",
  },
} as const;

export type WhatsAppAudience = "candidate" | "company";

export function getWhatsAppUrl(audience: WhatsAppAudience = "candidate") {
  const message =
    audience === "company"
      ? siteConfig.whatsapp.companyMessage
      : siteConfig.whatsapp.candidateMessage;

  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
