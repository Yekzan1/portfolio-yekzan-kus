import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Pied } from "@/components/Pied";
import { INFOS_PERSONNELLES } from "@/lib/data";

const display = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
  variable: "--f-display",
});

const texte = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--f-texte",
});

const SITE_URL = "https://portfolio-yekzan-kus.vercel.app";
const TITRE = "Yekzan KUS — Portfolio Développeur Web, Programmation & Automatisation IA";
const DESCRIPTION =
  "Portfolio de Yekzan KUS, étudiant en BTS SIO SLAM et futur Licence 3 Informatique. Recherche d'alternance de 1 an (septembre 2027) en développement web, programmation et automatisation IA sur Villefranche-sur-Saône et Lyon.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITRE,
    template: `%s · ${INFOS_PERSONNELLES.nom}`,
  },
  description: DESCRIPTION,
  applicationName: "Portfolio Yekzan KUS",
  authors: [{ name: INFOS_PERSONNELLES.nom, url: INFOS_PERSONNELLES.github }],
  creator: INFOS_PERSONNELLES.nom,
  keywords: [
    "Yekzan KUS",
    "Alternance L3 Informatique",
    "Développeur Web Lyon",
    "Développeur Villefranche-sur-Saône",
    "BTS SIO SLAM",
    "Next.js",
    "TypeScript",
    "Automatisation IA",
    "Serveurs MCP",
    "Claude Code",
    "PHP Laravel",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Portfolio Yekzan KUS",
    title: TITRE,
    description: DESCRIPTION,
    images: [
      {
        url: "/partage.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Yekzan KUS - Candidat Alternance Licence 3 Informatique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITRE,
    description: DESCRIPTION,
    images: ["/partage.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    apple: "/yekzan-400.webp",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0b09",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: INFOS_PERSONNELLES.nom,
      jobTitle: "Développeur Web & Automatisation IA",
      description: DESCRIPTION,
      url: SITE_URL,
      image: `${SITE_URL}/yekzan.webp`,
      email: INFOS_PERSONNELLES.email,
      telephone: INFOS_PERSONNELLES.telephoneBrut,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Limas",
        postalCode: "69400",
        addressRegion: "Auvergne-Rhône-Alpes",
        addressCountry: "FR",
      },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Business School by CSND - Campus du Beaujolais",
        },
      ],
      sameAs: [INFOS_PERSONNELLES.linkedin, INFOS_PERSONNELLES.github],
      knowsAbout: [
        "Développement Web",
        "Next.js",
        "TypeScript",
        "PHP",
        "Java",
        "Python",
        "Orchestration Multi-Agents",
        "Serveurs MCP",
        "PostgreSQL",
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: TITRE,
      isPartOf: {
        "@type": "WebSite",
        name: "Portfolio Yekzan KUS",
        url: SITE_URL,
      },
      about: { "@id": `${SITE_URL}/#person` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_URL}/partage.png`,
      },
      inLanguage: "fr-FR",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${display.variable} ${texte.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body>
        <div className="grain" aria-hidden="true" />
        <Navbar />
        <main id="contenu">{children}</main>
        <Pied />
      </body>
    </html>
  );
}
