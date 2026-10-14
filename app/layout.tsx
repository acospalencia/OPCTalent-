import type { Metadata, Viewport } from "next";
import type { CSSProperties, ReactNode } from "react";

import { siteConfig } from "@/lib/site-config";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "OPCTALENT",
    "creación de CV",
    "CV profesional",
    "talento",
    "empleo",
    "reclutamiento",
    "control de asistencia",
    "procesamiento de planillas",
    "planilla única",
    "El Salvador",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

const pageColors = {
  "--paper": "#ffffff",
  "--surface": "#ffffff",
  backgroundColor: "#ffffff",
} as CSSProperties;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body style={pageColors}>{children}</body>
    </html>
  );
}
