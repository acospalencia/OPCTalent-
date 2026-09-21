export function Problem() {
  return (
    <section aria-labelledby="problema-title" className="border-b border-line bg-surface py-20 sm:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
        <div>
          <p className="eyebrow text-brand">El punto de partida</p>
          <p className="mt-5 text-[clamp(3.5rem,10vw,8rem)] leading-none font-black tracking-[-0.07em] text-brand" aria-hidden="true">Otra<br />vez.</p>
        </div>
        <div className="lg:pt-12">
          <h2 id="problema-title" className="text-balance text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-5xl">
            Buscar oportunidades no debería sentirse como empezar desde cero cada vez.
          </h2>
          <div className="mt-9 grid gap-6 border-t border-ink pt-7 text-lg text-muted sm:grid-cols-2">
            <p>Actualizar el CV, volver a ordenar la información y enviarla repetidamente consume tiempo y energía.</p>
            <p>OPCTALENT simplifica el primer paso: una conversación para convertir tu experiencia en un perfil claro y útil.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
