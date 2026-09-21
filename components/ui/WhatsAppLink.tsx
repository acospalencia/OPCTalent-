import type { ReactNode } from "react";

import { getWhatsAppUrl, type WhatsAppAudience } from "@/lib/site-config";

type WhatsAppLinkProps = {
  children: ReactNode;
  audience?: WhatsAppAudience;
  className?: string;
  ariaLabel?: string;
};

export function WhatsAppLink({
  children,
  audience = "candidate",
  className = "",
  ariaLabel,
}: WhatsAppLinkProps) {
  return (
    <a
      href={getWhatsAppUrl(audience)}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-sm bg-brand px-5 py-3 font-bold text-white transition-[background-color,transform] duration-200 hover:bg-brand-dark active:translate-y-px ${className}`}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
