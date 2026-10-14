import Image from "next/image";

type BrandMarkProps = {
  inverse?: boolean;
  priority?: boolean;
};

/**
 * Punto único para gestionar el logo oficial en header y footer.
 * El archivo fuente vive en public/brand/opc-talent-logo.png.
 */
export function BrandMark({ inverse = false, priority = false }: BrandMarkProps) {
  return (
    <a
      href="#inicio"
      aria-label="OPCTALENT, ir al inicio"
      className={`inline-flex min-h-11 items-center rounded-sm bg-white px-1.5 py-1 ${
        inverse ? "ring-1 ring-white/20" : "ring-1 ring-line/70"
      }`}
    >
      <Image
        src="/brand/opc-talent-logo.png"
        alt=""
        width={1536}
        height={510}
        priority={priority}
        sizes="(max-width: 639px) 148px, 184px"
        className="h-auto w-[9.25rem] sm:w-[11.5rem]"
      />
    </a>
  );
}
