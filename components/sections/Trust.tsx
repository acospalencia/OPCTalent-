export function Trust() {
  return (
    <section id="privacidad" aria-labelledby="privacidad-title" className="border-b border-line bg-paper py-16 sm:py-20">
      <div className="section-shell grid gap-8 md:grid-cols-[auto_1fr] md:gap-16">
        <div className="grid size-20 place-items-center border-2 border-brand font-mono text-xl font-black text-brand" aria-hidden="true">01</div>
        <div className="max-w-4xl">
          <p className="eyebrow text-brand">Confianza y privacidad</p>
          <h2 id="privacidad-title" className="text-balance mt-5 text-3xl leading-tight font-black tracking-[-0.035em] sm:text-5xl">
            La información de candidatos y empresas requiere el mismo cuidado.
          </h2>
          <div className="mt-8 grid gap-7 sm:grid-cols-2">
            <div className="border-t border-ink pt-5">
              <h3 className="text-lg font-bold">Información de candidatos</h3>
              <p className="mt-3 text-muted">Formar parte de procesos de selección o compartir un perfil con empresas estará sujeto a la autorización del candidato y a las políticas correspondientes.</p>
            </div>
            <div className="border-t border-ink pt-5">
              <h3 className="text-lg font-bold">Información laboral y salarial</h3>
              <p className="mt-3 text-muted">En los servicios empresariales, los datos se utilizan para ejecutar el alcance acordado, con acceso restringido y acuerdos de confidencialidad y tratamiento de información entre las partes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
