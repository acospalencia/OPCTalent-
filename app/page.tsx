import { CandidateBenefits } from "@/components/sections/CandidateBenefits";
import { Companies } from "@/components/sections/Companies";
import { Differentiator } from "@/components/sections/Differentiator";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Problem } from "@/components/sections/Problem";
import { Trust } from "@/components/sections/Trust";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { siteConfig } from "@/lib/site-config";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  description: siteConfig.description,
  url: siteConfig.siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Salvador Centro",
    addressCountry: "SV",
  },
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Creación de CV profesional por WhatsApp",
        areaServed: "El Salvador",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Control de asistencia y procesamiento de planillas",
        areaServed: "El Salvador",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <a href="#contenido" className="fixed top-3 left-3 z-[100] -translate-y-24 bg-ink px-4 py-3 font-bold text-paper transition-transform focus:translate-y-0">
        Ir al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <Hero />
        <Problem />
        <HowItWorks />
        <Differentiator />
        <CandidateBenefits />
        <Companies />
        <Trust />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
