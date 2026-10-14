import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

const services = [
  {
    number: "01",
    title: "Control de asistencia e incidencias",
    items: [
      "Recepción e importación de reportes de asistencia proporcionados por la empresa.",
      "Revisión de marcaciones, tardanzas, ausencias, permisos e incapacidades.",
      "Consolidación de novedades e inconsistencias para validación.",
      "Apoyo en instalación, enrolamiento y capacitación para equipos biométricos, cuando el alcance lo requiera.",
    ],
  },
  {
    number: "02",
    title: "Procesamiento de planillas",
    items: [
      "Cálculo de salarios, horas extraordinarias y nocturnidad cuando corresponda.",
      "Aplicación de descuentos legales y autorizados con información validada.",
      "Preparación de planilla preliminar, revisión de observaciones y versión final aprobada.",
      "Ciclos mensuales o quincenales según la operación acordada.",
    ],
  },
  {
    number: "03",
    title: "Planilla única y reportes",
    items: [
      "Preparación de información y archivos para ISSS y el sistema de pensiones.",
      "Reportes de ingresos, descuentos, incidencias, aportaciones y resumen de costos.",
      "Entregables coordinados conforme a la periodicidad y responsabilidades acordadas.",
    ],
  },
];

const operationSteps = [
  "Recepción de asistencia y novedades",
  "Validación de inconsistencias",
  "Procesamiento",
  "Revisión y aprobación",
  "Entrega final de archivos y reportes",
];

export function Companies() {
  return (
    <section id="empresas" aria-labelledby="empresas-title" className="bg-brand py-20 text-white sm:py-28">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-[0.62fr_1.38fr] md:items-start">
          <p className="eyebrow text-accent">Servicios para empresas</p>
          <div>
            <h2 id="empresas-title" className="text-balance text-4xl leading-tight font-black tracking-[-0.045em] sm:text-6xl">
              Talento y operación laboral, con información clara y entregables definidos.
            </h2>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/80">
              OPC Talent, S.A. de C.V. brinda apoyo administrativo para el control de asistencia, el procesamiento de planillas y la preparación de reportes laborales. También construimos una red de candidatos para acompañar búsquedas de talento.
            </p>
          </div>
        </div>

        <div className="mt-14 grid border-t-2 border-white lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.number} className="border-b border-white/35 py-8 lg:border-r lg:border-b-0 lg:px-7 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
              <p className="font-mono text-sm font-bold text-accent">{service.number}</p>
              <h3 className="mt-6 text-2xl leading-tight font-bold tracking-[-0.025em]">{service.title}</h3>
              <ul className="mt-6 space-y-4 text-white/75">
                {service.items.map((item) => (
                  <li key={item} className="grid grid-cols-[1rem_1fr] gap-3">
                    <span aria-hidden="true" className="mt-[0.72rem] h-px w-3 bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-9 border-t border-white/40 pt-9 lg:grid-cols-[0.62fr_1.38fr]">
          <div>
            <p className="eyebrow text-accent">Metodología de operación</p>
            <h3 className="mt-5 text-3xl leading-tight font-bold tracking-[-0.035em]">Un proceso coordinado antes de cada entrega.</h3>
          </div>
          <ol className="grid sm:grid-cols-2 xl:grid-cols-5">
            {operationSteps.map((step, index) => (
              <li key={step} className="border-t border-white/30 py-5 sm:px-5 sm:first:pl-0 xl:border-t-0 xl:border-l xl:first:border-l-0">
                <span className="font-mono text-xs font-bold text-accent">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-3 font-semibold leading-snug">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 flex flex-col gap-7 border-t border-white/40 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-white/75">Cada alcance, calendario y responsabilidad se define con la empresa antes de iniciar la operación.</p>
          <WhatsAppLink audience="company" className="border border-white bg-white text-brand hover:bg-accent" ariaLabel="Consultar servicios empresariales por WhatsApp">
            Consultar servicios empresariales
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
