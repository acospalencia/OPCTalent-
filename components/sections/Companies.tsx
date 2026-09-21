import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

export function Companies() {
  return (
    <section id="empresas" aria-labelledby="empresas-title" className="bg-brand py-20 text-white sm:py-24">
      <div className="section-shell grid gap-12 md:grid-cols-[0.62fr_1.38fr] md:items-start">
        <p className="eyebrow text-accent">Para empresas</p>
        <div>
          <h2 id="empresas-title" className="text-balance text-4xl leading-tight font-black tracking-[-0.045em] sm:text-6xl">
            Cuando necesites talento, queremos ayudarte a encontrar perfiles relevantes.
          </h2>
          <div className="mt-8 grid gap-7 border-t border-white/40 pt-7 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-2xl text-lg text-white/80">OPCTALENT está construyendo una red de candidatos para acompañar a empresas que buscan personas con experiencia, habilidades y objetivos específicos.</p>
            <WhatsAppLink audience="company" className="border border-white bg-white text-brand hover:bg-accent" ariaLabel="Consultar por búsqueda de talento en WhatsApp">
              Busco talento
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  );
}
