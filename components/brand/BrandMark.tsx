type BrandMarkProps = {
  inverse?: boolean;
};

/**
 * Punto único para reemplazar el wordmark provisional por el logo definitivo.
 * Conserva el enlace y ajusta únicamente el contenido visual de este componente.
 */
export function BrandMark({ inverse = false }: BrandMarkProps) {
  return (
    <a
      href="#inicio"
      aria-label="OPCTALENT, ir al inicio"
      className={`inline-flex min-h-11 items-center gap-2.5 font-bold tracking-[-0.03em] ${
        inverse ? "text-paper" : "text-ink"
      }`}
    >
      <span
        aria-hidden="true"
        className={`grid size-7 place-items-center border-2 text-[0.7rem] font-black leading-none ${
          inverse ? "border-accent text-accent" : "border-brand text-brand"
        }`}
      >
        O
      </span>
      <span className="text-[1.05rem]">OPC<span className={inverse ? "text-accent" : "text-brand"}>TALENT</span></span>
    </a>
  );
}
