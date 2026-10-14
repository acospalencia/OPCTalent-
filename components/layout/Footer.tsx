import { BrandMark } from "@/components/brand/BrandMark";
import { siteConfig } from "@/lib/site-config";

const footerNav = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#candidatos", label: "Para candidatos" },
  { href: "#empresas", label: "Servicios para empresas" },
  { href: "#preguntas", label: "Preguntas frecuentes" },
];

export function Footer() {
  return (
    <footer className="bg-ink py-12 text-paper sm:py-16">
      <div className="section-shell">
        <div className="grid gap-10 border-b border-paper/25 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <BrandMark inverse />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/65">CV profesional por WhatsApp, red de talento y apoyo administrativo para empresas.</p>
          </div>
          <nav aria-label="Navegación del pie de página">
            <p className="eyebrow mb-4 text-accent">Explorar</p>
            <ul className="space-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <a className="inline-flex min-h-11 items-center text-paper/75 transition-colors hover:text-paper" href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="eyebrow mb-4 text-accent">Contacto y legal</p>
            <a className="inline-flex min-h-11 items-center text-paper/75 transition-colors hover:text-paper" href={`https://wa.me/${siteConfig.whatsapp.number}`} target="_blank" rel="noreferrer">WhatsApp {siteConfig.whatsapp.displayNumber}</a>
            <a className="inline-flex min-h-11 items-center text-paper/75 transition-colors hover:text-paper" href="#privacidad">Privacidad</a>
            <p className="flex min-h-11 items-center text-paper/45">Términos · Próximamente</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. Todos los derechos reservados.</p>
          <p>{siteConfig.location}</p>
        </div>
      </div>
    </footer>
  );
}
