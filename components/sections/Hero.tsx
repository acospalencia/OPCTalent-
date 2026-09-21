import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

export function Hero() {
  return (
    <section id="inicio" className="overflow-hidden border-b border-line pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-28">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
        <div>
          <p className="eyebrow mb-6 flex items-center gap-3 text-brand">
            <span className="h-px w-8 bg-brand" aria-hidden="true" />
            CV profesional por WhatsApp
          </p>
          <h1 className="text-balance max-w-4xl text-[clamp(2.75rem,9.6vw,6rem)] leading-[0.94] font-black tracking-[-0.065em]">
            Tu experiencia merece un CV que la explique bien.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Cuéntanos tu trayectoria por WhatsApp. En OPCTALENT organizamos la información y preparamos un CV profesional, claro y listo para nuevas oportunidades.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppLink className="w-full sm:w-auto sm:px-7" ariaLabel="Comenzar a crear mi CV por WhatsApp">
              Crear mi CV por WhatsApp
            </WhatsAppLink>
            <a
              href="#como-funciona"
              className="inline-flex min-h-12 w-full items-center justify-center border border-ink px-5 py-3 font-bold transition-colors hover:bg-ink hover:text-paper sm:w-auto"
            >
              Ver cómo funciona
            </a>
          </div>
          <p className="mt-5 text-sm text-muted">El proceso empieza con una conversación sencilla. Sin formularios largos.</p>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem] lg:mx-0" aria-hidden="true">
          <div className="absolute -top-5 -right-5 -z-10 h-full w-full border border-brand sm:-top-7 sm:-right-7" />
          <div className="border-2 border-ink bg-surface p-4 shadow-[8px_8px_0_0_#102019] sm:p-6 sm:shadow-[12px_12px_0_0_#102019]">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <p className="font-mono text-xs font-bold tracking-widest uppercase">Perfil en construcción</p>
              <span className="bg-accent px-2 py-1 font-mono text-[0.68rem] font-bold uppercase">En conversación</span>
            </div>
            <div className="py-6">
              {[
                ["01", "Experiencia", "Trayectoria y logros"],
                ["02", "Formación", "Estudios y cursos"],
                ["03", "Habilidades", "Lo que sabes hacer"],
              ].map(([number, title, caption]) => (
                <div key={number} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-line py-4 first:pt-0">
                  <span className="font-mono text-xs font-bold text-brand">{number}</span>
                  <div>
                    <p className="font-bold">{title}</p>
                    <p className="mt-0.5 text-sm text-muted">{caption}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-[1fr_auto] items-end gap-5 bg-ink p-5 text-paper">
              <div>
                <p className="font-mono text-[0.68rem] tracking-widest text-accent uppercase">Resultado</p>
                <p className="mt-2 text-xl font-bold leading-tight">Tu historia, ordenada en un CV profesional.</p>
              </div>
              <div className="grid h-24 w-18 content-start gap-2 bg-paper p-3">
                <span className="h-2 w-8 bg-brand" />
                <span className="h-px w-full bg-line" />
                <span className="h-px w-4/5 bg-line" />
                <span className="h-px w-full bg-line" />
                <span className="mt-2 h-1.5 w-10 bg-ink" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
