export function Trust() {
  return (
    <section id="privacidad" aria-labelledby="privacidad-title" className="border-b border-line bg-paper py-16 sm:py-20">
      <div className="section-shell grid gap-8 md:grid-cols-[auto_1fr] md:gap-16">
        <div className="grid size-20 place-items-center border-2 border-brand font-mono text-xl font-black text-brand" aria-hidden="true">01</div>
        <div className="max-w-4xl">
          <p className="eyebrow text-brand">Confianza y privacidad</p>
          <h2 id="privacidad-title" className="text-balance mt-5 text-3xl leading-tight font-black tracking-[-0.035em] sm:text-5xl">
            Tu información es parte de tu historia. Debe tratarse con responsabilidad.
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-muted">Formar parte de procesos de selección o compartir tu perfil con empresas estará sujeto a tu autorización y a las políticas correspondientes. Las políticas legales completas se incorporarán antes de habilitar esos procesos.</p>
        </div>
      </div>
    </section>
  );
}
