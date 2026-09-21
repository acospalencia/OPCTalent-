"use client";

import { useState } from "react";

import { BrandMark } from "@/components/brand/BrandMark";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

const navItems = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#candidatos", label: "Para candidatos" },
  { href: "#empresas", label: "Para empresas" },
  { href: "#preguntas", label: "Preguntas frecuentes" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95">
      <nav className="section-shell flex min-h-18 items-center justify-between" aria-label="Navegación principal">
        <BrandMark />

        <div className="hidden items-center gap-5 lg:flex">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center px-3 text-[0.9rem] font-semibold text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <WhatsAppLink className="min-h-11 px-4 py-2 text-sm" ariaLabel="Crear mi CV por WhatsApp">
            Crear mi CV
          </WhatsAppLink>
        </div>

        <button
          type="button"
          className="relative grid size-12 place-items-center text-ink lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="sr-only">{isOpen ? "Cerrar menú" : "Abrir menú"}</span>
          <span aria-hidden="true" className="flex w-6 flex-col gap-1.5">
            <span className={`h-0.5 w-full bg-current transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-full bg-current transition-opacity ${isOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full bg-current transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`border-t border-line bg-paper lg:hidden ${isOpen ? "block" : "hidden"}`}
      >
        <div className="section-shell py-4">
          <ul className="grid">
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-line last:border-b-0">
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex min-h-12 items-center justify-between py-3 font-semibold"
                >
                  {item.label}
                  <span aria-hidden="true">↘</span>
                </a>
              </li>
            ))}
          </ul>
          <WhatsAppLink className="mt-4 w-full" ariaLabel="Crear mi CV por WhatsApp">
            Crear mi CV por WhatsApp
          </WhatsAppLink>
        </div>
      </div>
    </header>
  );
}
