const benefits = [
  ["01", "Un CV profesional", "Tu información se estructura para que tu experiencia se entienda con claridad."],
  ["02", "Un proceso familiar", "La conversación sucede por WhatsApp, desde el dispositivo que ya utilizas."],
  ["03", "Información bien organizada", "Reunimos experiencia, estudios y habilidades en un mismo proceso guiado."],
  ["04", "Listo para actualizar", "Tu perfil queda ordenado para que sea más sencillo mantenerlo al día."],
  ["05", "Opción de entrar a la red", "Con tu autorización, podrás formar parte de la red de talento de OPCTALENT."],
];

export function CandidateBenefits() {
  return (
    <section id="candidatos" aria-labelledby="candidatos-title" className="border-b border-line bg-surface py-20 sm:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div>
          <p className="eyebrow text-brand">Para candidatos</p>
          <h2 id="candidatos-title" className="text-balance mt-6 text-4xl leading-tight font-black tracking-[-0.045em] sm:text-5xl">
            Menos fricción. Más claridad sobre lo que puedes aportar.
          </h2>
          <p className="mt-6 max-w-lg text-lg text-muted">Nos enfocamos en hacer sencillo el proceso de convertir tu trayectoria en un CV útil y profesional.</p>
        </div>
        <ol className="border-t-2 border-ink">
          {benefits.map(([number, title, text]) => (
            <li key={number} className="grid gap-3 border-b border-line py-6 sm:grid-cols-[3rem_0.8fr_1.2fr] sm:gap-6">
              <span className="font-mono text-xs font-bold text-brand">{number}</span>
              <h3 className="text-xl font-bold leading-snug">{title}</h3>
              <p className="text-muted">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
