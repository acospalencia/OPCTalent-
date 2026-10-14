const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://opctalent.com";

export const siteConfig = {
  name: "OPCTALENT",
  legalName: "OPC Talent, S.A. de C.V.",
  location: "San Salvador Centro, El Salvador",
  title: "OPCTALENT | CV profesional y soluciones para empresas",
  description:
    "OPCTALENT acompaña a candidatos con CV profesional por WhatsApp y a empresas con control de asistencia, procesamiento de planillas y reportes laborales.",
  siteUrl,
  locale: "es_SV",
  whatsapp: {
    number: "50377539252",
    displayNumber: "+503 7753 9252",
    candidateMessage:
      "Hola, quiero crear mi CV profesional con OPCTALENT. ¿Cómo comenzamos?",
    companyMessage:
      "Hola, represento a una empresa y quiero información sobre las soluciones de talento y administración de planillas de OPCTALENT.",
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
