import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://portfolio-yekzan-kus.vercel.app";
const TITRE = "Yekzan KUS — Développement web et logiciel";
const DESCRIPTION =
  "Portfolio de Yekzan KUS : projets réalisés en stage, PHP et Laravel, Java, bases de données et recherche d’alternance en Licence 3 Informatique pour septembre 2027.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITRE,
  description: DESCRIPTION,
  authors: [{ name: "Yekzan KUS", url: "https://github.com/Yekzan1" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Yekzan KUS — Portfolio",
    title: TITRE,
    description: DESCRIPTION,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/photo-cv.webp",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f6f2",
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
