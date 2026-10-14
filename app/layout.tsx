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
  themeColor: "#1b2978",
};

const pageColors = {
  "--paper": "#ffffff",
  "--surface": "#f3f5fd",
  "--ink": "#1b2978",
  "--muted": "#5059ae",
  "--line": "#a5d7ec",
  "--brand-blue": "#1e3f93",
  "--brand-navy": "#1b2978",
  "--brand-cyan": "#0db8dc",
  "--brand-violet": "#6341cb",
  "--green": "#1e3f93",
  "--green-dark": "#1b2978",
  "--lime": "#0db8dc",
  backgroundColor: "#ffffff",
  color: "#1b2978",
} as CSSProperties;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body style={pageColors}>{children}</body>
    </html>
  );
}
