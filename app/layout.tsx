import type { Metadata, Viewport } from "next";
import "./globals.css";
import { INFOS_PERSONNELLES } from "@/lib/data";

const SITE_URL = "https://portfolio-yekzan-kus.vercel.app";
const TITRE = "Yekzan KUS — Développeur Web";
const DESCRIPTION =
  "Portfolio de Yekzan KUS, étudiant en BTS SIO option SLAM et futur Licence 3 Informatique. Réalisations de stages en agence web (After'ish, UNSA Défense, WordPress, PrestaShop) et projets applicatifs.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITRE,
  description: DESCRIPTION,
  authors: [{ name: INFOS_PERSONNELLES.nom, url: INFOS_PERSONNELLES.github }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Portfolio Yekzan KUS",
    title: TITRE,
    description: DESCRIPTION,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
