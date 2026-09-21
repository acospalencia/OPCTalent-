import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

export function FinalCTA() {
  return (
    <section aria-labelledby="final-title" className="border-y-2 border-ink bg-accent py-16 sm:py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="eyebrow text-brand-dark">Tu siguiente paso</p>
          <h2 id="final-title" className="text-balance mt-5 max-w-4xl text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.98] font-black tracking-[-0.06em]">
            Empecemos a convertir tu experiencia en un buen CV.
          </h2>
        </div>
        <WhatsAppLink className="w-full bg-ink px-7 hover:bg-brand-dark lg:w-auto" ariaLabel="Comenzar ahora a crear mi CV por WhatsApp">
          Comenzar ahora
        </WhatsAppLink>
      </div>
    </section>
  );
}
