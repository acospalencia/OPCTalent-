const steps = [
  {
    number: "01",
    title: "Escríbenos",
    text: "Abre una conversación por WhatsApp y dinos que quieres crear tu CV.",
  },
  {
    number: "02",
    title: "Cuéntanos sobre ti",
    text: "Recopilamos tu experiencia, estudios, habilidades y objetivos de forma guiada.",
  },
  {
    number: "03",
    title: "Creamos tu CV",
    text: "Organizamos la información y la presentamos en un documento profesional.",
  },
  {
    number: "04",
    title: "Decide si te unes",
    text: "Con tu autorización, tu perfil podrá considerarse cuando una empresa busque talento como tú.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" aria-labelledby="como-title" className="bg-paper py-20 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-5 md:grid-cols-[0.7fr_1.3fr] md:items-end">
          <p className="eyebrow text-brand">Cómo funciona</p>
          <h2 id="como-title" className="text-balance text-4xl leading-[1.04] font-black tracking-[-0.045em] sm:text-6xl">
            Cuatro pasos.<br />Una conversación.
          </h2>
        </div>
        <ol className="mt-14 grid border-t-2 border-ink md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number} className="border-b border-line py-7 md:odd:border-r md:even:pl-7 lg:border-r lg:border-b-0 lg:px-6 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
              <span className="font-mono text-sm font-bold text-brand">{step.number}</span>
              <h3 className="mt-8 text-2xl font-bold tracking-[-0.025em]">{step.title}</h3>
              <p className="mt-3 text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
