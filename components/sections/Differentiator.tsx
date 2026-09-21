import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

export function Differentiator() {
  return (
    <section aria-labelledby="diferencia-title" className="bg-ink py-20 text-paper sm:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-24">
        <div>
          <p className="eyebrow text-accent">Más allá del documento</p>
          <h2 id="diferencia-title" className="text-balance mt-6 text-[clamp(2.6rem,7vw,5.6rem)] leading-[0.98] font-black tracking-[-0.06em]">
            Tu CV no tiene por qué terminar guardado.
          </h2>
        </div>
        <div className="self-end border-t border-paper/35 pt-7">
          <p className="text-xl leading-relaxed text-paper/80">
            Si nos autorizas, tu perfil podrá formar parte de la red de talento de OPCTALENT y ser considerado cuando una empresa busque características como las tuyas.
          </p>
          <p className="mt-5 text-sm leading-relaxed text-paper/60">
            Crear el CV o unirte a la red no garantiza una contratación. Sí te ayuda a tener tu información preparada para futuras oportunidades.
          </p>
          <WhatsAppLink className="mt-8 bg-accent text-ink hover:bg-paper" ariaLabel="Crear mi CV y conocer la red de talento por WhatsApp">
            Preparar mi perfil
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
