export interface GalerieImage {
  src: string;
  titre: string;
  description: string;
}

export interface ExtraitCode {
  fichier: string;
  langage: string;
  titre: string;
  description: string;
  code: string;
}

export interface Realisation {
  id: string;
  titre: string;
  badge: string;
  roleCourt: string;
  hote: string;
  url: string;
  libelleLien?: string;
  urlSecours?: string;
  libelleSecours?: string;
  urlTertiaire?: string;
  libelleTertiaire?: string;
  employeur: string;
  periode: string;
  image: string;
  description: string;
  ceQueJaiFait: string[];
  stack: string[];
  noteAcces?: string;
  galerie?: GalerieImage[];
  extraitsCode?: ExtraitCode[];
}

export interface Experience {
  periode: string;
  entreprise: string;
  role: string;
  lieu: string;
  description: string;
  missions: string[];
  tags: string[];
}

export interface Formation {
  periode: string;
  diplome: string;
  etablissement: string;
  detail: string;
}

export interface ProjetApplicatif {
  titre: string;
  type: string;
  url: string;
  github?: string;
  description: string;
  stack: string[];
}

export const INFOS_PERSONNELLES = {
  nom: "Yekzan KUS",
  role: "Développeur Web & Concepteur d'Applications",
  statutAlternance: "Recherche d'alternance • Développement web / Programmation / Automatisation • Septembre 2027 (1 an)",
  localisation: "69400 Limas • Métropole de Lyon & Rhône-Alpes",
  permis: "Permis B (en cours)",
  anglais: "Anglais technique",
  violon: "Violon au Conservatoire de Villefranche-sur-Saône (10 ans)",
  email: "yekzankus@icloud.com",
  telephone: "07 85 26 68 22",
  telephoneBrut: "+33785266822",
  github: "https://github.com/Yekzan1",
  linkedin: "https://www.linkedin.com/in/yekzan-kus-674483325/",
  cvPdf: "/cv-yekzan-kus.pdf",
  bio: "Étudiant en 2e année de BTS SIO (option SLAM) et admis en Licence 3 Informatique au Campus du Beaujolais pour septembre 2027. Développeur polyvalent axé sur la conception de plateformes web complètes, l'architecture logicielle (POO, MVC, APIs), les bases de données SQL et l'automatisation. Livraisons en production en agence (After'ish, SaaS Nexus Flow OS, UNSA, PrestaShop).",
};

export const REALISATIONS: Realisation[] = [
  {
    id: "afterish",
    titre: "After'ish — Plateforme d'Association & Portail Membres",
    badge: "Livré seul en 2 semaines • Production",
    roleCourt: "Développement full-stack complet en autonomie",
    hote: "afterish.agence-nexusflow.com",
    url: "https://afterish.agence-nexusflow.com",
    libelleLien: "Consulter afterish.agence-nexusflow.com",
    employeur: "Nexus Flow",
    periode: "05/2026 – 07/2026",
    image: "/realisations/afterish-real-0.png",
    description: "Plateforme d'association complète livrée seul en 2 semaines : adhésion en ligne, espace membres sécurisé, catalogue dynamique d'événements, dons, chatbot et conformité RGPD. 200 membres dont 23 payants dès le lancement.",
    ceQueJaiFait: [
      "Conception et livraison intégrale du site en autonomie en 2 semaines sur WordPress avec le thème DIVI.",
      "Développement de requêtes WP_Query sur-mesure dans functions.php pour l'affichage dynamique et chronologique des 3 prochains événements.",
      "Programmation d'un shortcode dynamique calculant la durée restante de la période d'adhésion (J-150) selon la date d'inscription SQL de chaque adhérent.",
      "Mise en place de l'espace membre, gestion des profils et formulaire d'adhésion avec intégration HelloAsso.",
      "Configuration complète de la production chez Infomaniak : zones DNS, sous-domaines et certificats SSL."
    ],
    stack: ["PHP 8", "WordPress", "DIVI Builder", "WP_Query", "API HelloAsso", "CSS3", "Infomaniak Cloud"],
    galerie: [
      {
        src: "/realisations/afterish-real-0.png",
        titre: "Page d'accueil officielle en production",
        description: "Capture réelle du site After'ish déployé : présentation du club, adhésions et rencontres réseau."
      },
      {
        src: "/realisations/afterish-real-1.png",
        titre: "Catalogue d'événements & Inscriptions",
        description: "Section des événements alimentée par la boucle WP_Query avec liens d'inscription directs."
      },
      {
        src: "/realisations/afterish-admin.png",
        titre: "Espace membre & Profil adhérent",
        description: "Tableau de bord membre permettant la gestion des informations personnelles et la consultation des événements."
      },
      {
        src: "/realisations/afterish-wordpress.png",
        titre: "Administration WordPress",
        description: "Gestion des Custom Post Types avec métadonnées personnalisées (dates, lieux, intervenants)."
      },
      {
        src: "/realisations/afterish-infomaniak.png",
        titre: "Console Cloud Infomaniak",
        description: "Supervision du serveur, configuration DNS et certificats SSL Let's Encrypt."
      }
    ],
    extraitsCode: [
      {
        fichier: "wp-content/themes/afterish-child/functions.php",
        langage: "php",
        titre: "Boucle dynamique des prochains événements (WP_Query)",
        description: "Filtrage et affichage chronologique des événements publiés avec récupération sécurisée des métadonnées.",
        code: `<?php
function afterish_render_latest_events() {
    $args = [
        'post_type'      => 'evenements',
        'posts_per_page' => 3,
        'post_status'    => 'publish',
        'orderby'        => 'meta_value',
        'meta_key'       => '_event_date',
        'order'          => 'ASC'
    ];

    $query = new WP_Query($args);
    if (!$query->have_posts()) {
        return '<p class="text-neutral-500">Aucun événement à venir pour le moment.</p>';
    }

    $html = '<div class="events-grid">';
    while ($query->have_posts()) {
        $query->the_post();
        $date = get_post_meta(get_the_ID(), '_event_date', true);
        $lieu = get_post_meta(get_the_ID(), '_event_location', true);

        $html .= '<article class="event-card">';
        $html .= '<h4>' . esc_html(get_the_title()) . '</h4>';
        $html .= '<p class="event-meta">📅 ' . esc_html($date) . ' — 📍 ' . esc_html($lieu) . '</p>';
        $html .= '<a href="' . esc_url(get_permalink()) . '" class="event-link">Réserver ma place</a>';
        $html .= '</article>';
    }
    wp_reset_postdata();
    $html .= '</div>';

    return $html;
}
add_shortcode('afterish_events', 'afterish_render_latest_events');`
      },
      {
        fichier: "wp-content/themes/afterish-child/functions.php",
        langage: "php",
        titre: "Calcul dynamique du compte à rebours d'adhésion (J-150)",
        description: "Calcul en temps réel de l'échéance d'adhésion à partir du timestamp SQL de l'utilisateur connecté.",
        code: `<?php
function afterish_membership_countdown() {
    if (!is_user_logged_in()) {
        return '<span class="guest-notice">Connectez-vous pour voir votre période d\'adhésion.</span>';
    }

    $user_id         = get_current_user_id();
    $registered_date = get_the_author_meta('user_registered', $user_id);
    $start_timestamp = strtotime($registered_date);
    $end_timestamp   = $start_timestamp + (150 * 86400); // 150 jours
    $now             = time();

    $days_left = max(0, ceil(($end_timestamp - $now) / 86400));

    return '<div class="membership-badge">⏳ <strong>' . intval($days_left) . ' jours</strong> restants dans votre adhésion</div>';
}
add_shortcode('afterish_compteur_adhesion', 'afterish_membership_countdown');`
      }
    ]
  },
  {
    id: "crm-ia-nexusflow",
    titre: "Nexus Flow OS & HF Concept — SaaS Multi-Tenant & IA",
    badge: "Architecture SaaS • Production",
    roleCourt: "Débogage transactions, QA et intégration API IA Infomaniak",
    hote: "os.agence-nexusflow.com",
    url: "https://accounts.agence-nexusflow.com/sign-in?redirect_url=https%3A%2F%2Fhf.agence-nexusflow.com%2Fdashboard",
    libelleLien: "Portail de connexion Clerk",
    employeur: "Nexus Flow",
    periode: "05/2026 – 07/2026",
    image: "/realisations/saas-real-0.png",
    noteAcces: "Sous-domaine client en cours de bascule SSL. Vous pouvez accéder à la page d'authentification Clerk du SaaS via le lien ci-dessus. L'ensemble des modules réels (Dashboard, Kanban, RAG IA, Code source) est détaillé et consultable ci-dessous.",
    description: "Refonte du CRM utilisé par un client en production (showroom HF Concept) et intégration de l'API Infomaniak avec un assistant IA capable d'accéder aux données client, planifier les rendez-vous et rediriger l'utilisateur vers la page demandée.",
    ceQueJaiFait: [
      "Résolution du bug critique d'inscription : écriture d'une transaction serveur avec schéma Zod et rollback atomique (suppression immédiate de l'utilisateur Clerk si la création d'organisation échoue dans PostgreSQL).",
      "Intégration de l'API Infomaniak IA pour le module assistant : connexion LLM sécurisée avec extraction de contexte et exécution d'actions (prise de rendez-vous, redirection dynamique).",
      "Audit et tests d'isolation multi-tenant : validation de la séparation stricte des données entre organisations clientes via les politiques RLS (Row-Level Security) de PostgreSQL.",
      "Vérification du middleware de routage Next.js pour la réécriture dynamique par sous-domaine client (<tenant>.agence-nexusflow.com).",
      "Exécution du protocole complet de recette fonctionnelle QA (authentification Clerk, gestion des prospects en pipeline Kanban, conformité du lien /unsubscribe RGPD)."
    ],
    stack: ["Next.js 14", "TypeScript", "Prisma ORM", "PostgreSQL", "Clerk Auth", "API Infomaniak AI", "Inngest", "Tailwind CSS", "Turborepo"],
    galerie: [
      {
        src: "/realisations/saas-real-0.png",
        titre: "Dashboard général du SaaS",
        description: "Vue d'accueil de l'espace de travail en production : indicateurs de performance commerciale et accès rapides."
      },
      {
        src: "/realisations/saas-dashboard.png",
        titre: "Métriques & Chiffre d'Affaires",
        description: "Suivi des statistiques de conversion et du volume d'opportunités par commercial."
      },
      {
        src: "/realisations/saas-kanban.png",
        titre: "Pipeline Commercial Kanban",
        description: "Gestion des étapes du cycle de vente : contact, qualification, devis et signature."
      },
      {
        src: "/realisations/saas-ia-knowledge.png",
        titre: "Base documentaire RAG & Assistant IA",
        description: "Indexation documentaire pour permettre à l'assistant IA de répondre précisément sur les catalogues clients."
      },
      {
        src: "/realisations/saas-branding.png",
        titre: "Gestion Multi-Tenant & Branding",
        description: "Personnalisation des thèmes, logos et sous-domaines par organisation."
      }
    ],
    extraitsCode: [
      {
        fichier: "apps/web/src/app/signup/actions.ts",
        langage: "typescript",
        titre: "Provisionnement de workspace avec rollback atomique Clerk / PostgreSQL",
        description: "Validation des entrées avec Zod. En cas d'erreur dans l'écriture PostgreSQL, le compte Clerk est immédiatement purgé pour éliminer tout compte orphelin.",
        code: `'use server'

import { z } from 'zod'
import { clerkClient } from '@clerk/nextjs/server'
import { prisma } from '@hf/db'

const signupSchema = z.object({
  workspaceName: z.string().trim().min(2).max(80),
  slug: z.string().trim().min(2).max(50).regex(/^[a-z0-9-]+$/, 'Caractères minuscules et tirets uniquement'),
  email: z.string().trim().toLowerCase().email(),
  password: z.string().min(8).max(120),
  firstName: z.string().trim().min(1),
  lastName: z.string().trim().min(1),
})

export async function provisionWorkspaceAction(formData: FormData) {
  const data = signupSchema.parse(Object.fromEntries(formData))
  let clerkUserId: string | null = null
  let createdOrgId: string | null = null

  try {
    // 1. Création du compte utilisateur dans Clerk
    const clerkUser = await clerkClient.users.createUser({
      emailAddress: [data.email],
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
    })
    clerkUserId = clerkUser.id

    // 2. Création de l'organisation dans PostgreSQL
    const org = await prisma.organization.create({
      data: {
        name: data.workspaceName,
        slug: data.slug,
        plan: 'TRIAL',
      }
    })
    createdOrgId = org.id

    // 3. Association de l'utilisateur avec le rôle ADMIN
    await prisma.user.create({
      data: {
        clerkId: clerkUserId,
        email: data.email,
        role: 'ADMIN',
        organizationId: org.id,
      }
    })

    return { success: true, redirectUrl: \`https://\${org.slug}.agence-nexusflow.com\` }

  } catch (err) {
    // Rollback de sécurité : purge Clerk et PostgreSQL si une étape échoue
    if (clerkUserId) await clerkClient.users.deleteUser(clerkUserId).catch(() => null)
    if (createdOrgId) await prisma.organization.delete({ where: { id: createdOrgId } }).catch(() => null)
    throw new Error("Erreur lors de la création du compte. Données réinitialisées.")
  }
}`
      },
      {
        fichier: "apps/web/src/middleware.ts",
        langage: "typescript",
        titre: "Middleware multi-tenant de réécriture d'URL",
        description: "Routage dynamique par sous-domaine vers le tenant isolé correspondant.",
        code: `import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse, type NextRequest } from 'next/server'

const isPublicRoute = createRouteMatcher([
  '/',
  '/signup(.*)',
  '/sign-in(.*)',
  '/api/health',
  '/unsubscribe/(.*)',
])

const RESERVED_SUBDOMAINS = new Set(['www', 'app', 'api', 'admin', 'auth'])

export default clerkMiddleware((auth, req: NextRequest) => {
  const hostname = req.headers.get('host') || ''
  const subdomain = hostname.split('.')[0]

  if (RESERVED_SUBDOMAINS.has(subdomain) || hostname.includes('os.agence-nexusflow.com')) {
    if (!isPublicRoute(req)) auth().protect()
    return NextResponse.next()
  }

  const url = req.nextUrl.clone()
  url.pathname = \`/tenant/\${subdomain}\${url.pathname}\`
  return NextResponse.rewrite(url)
})`
      }
    ]
  },
  {
    id: "unsa-defense",
    titre: "UNSA Défense — Portail Web & Moteur de Recherche PHP",
    badge: "Livré en autonomie en 3 jours",
    roleCourt: "Développement autonome du portail et moteur de recherche",
    hote: "unsa-defense.org",
    url: "https://www.unsa-defense.org",
    libelleLien: "Visiter unsa-defense.org",
    employeur: "Rougevert Communication",
    periode: "03/2024 – 04/2024",
    image: "/realisations/unsa.webp",
    description: "Création en autonomie en 3 jours d'un site web complet pour l'organisation syndicale nationale UNSA Défense : développement d'un moteur de recherche documentaire en PHP, analyse des données et suivi Google Analytics.",
    ceQueJaiFait: [
      "Développement autonome et livraison en 3 jours du site web officiel.",
      "Programmation d'un moteur de recherche documentaire en PHP avec requêtes SQL indexées pour filtrer les communiqués syndicaux.",
      "Conception d'une structure ergonomique et responsive adaptée aux adhérents.",
      "Mise en place de Google Analytics pour le suivi d'audience et l'analyse des parcours."
    ],
    stack: ["PHP", "MySQL", "Architecture MVC", "JavaScript", "CSS3", "Google Analytics"],
  },
  {
    id: "unimage-sites",
    titre: "Sites Satellites d'Agence — Référencement & SEO Local",
    badge: "2 Sites Vitrines en Autonomie",
    roleCourt: "Développement WordPress, intégration CSS/JS et RGPD",
    hote: "agence-site-internet-lyon.fr",
    url: "https://www.creation-site-web-lyon.fr",
    libelleLien: "creation-site-web-lyon.fr",
    urlSecours: "https://www.creation-site-internet-villefranche.fr",
    libelleSecours: "creation-site-internet-villefranche.fr",
    urlTertiaire: "https://www.agence-site-internet-lyon.fr",
    libelleTertiaire: "agence-site-internet-lyon.fr",
    employeur: "Unimage Communication",
    periode: "05/2025 – 07/2025",
    image: "/realisations/unimage.webp",
    description: "Développement autonome de sites web vitrines sous WordPress (Elementor et Spectra) avec intégration CSS, PHP et JavaScript, optimisation du référencement local et conformité RGPD via CookieYes.",
    ceQueJaiFait: [
      "Développement en autonomie de sites vitrines professionnels sous WordPress avec Elementor et Spectra.",
      "Écriture de scripts JavaScript et composants CSS sur-mesure pour affiner l'interaction et le design.",
      "Intégration et paramétrage du gestionnaire de consentement CookieYes conforme RGPD.",
      "Optimisation SEO technique et balisage sémantique."
    ],
    stack: ["WordPress", "Elementor", "Spectra", "PHP", "JavaScript", "CSS3", "CookieYes RGPD", "SEO Local"],
  },
  {
    id: "cadeo-sport",
    titre: "Cadeosport — Site E-Commerce PrestaShop",
    badge: "E-Commerce PrestaShop",
    roleCourt: "Création autonome d'une boutique e-commerce complète",
    hote: "cadeo-sport.fr",
    url: "https://cadeo-sport.fr",
    libelleLien: "Visiter cadeo-sport.fr",
    employeur: "Unimage Communication",
    periode: "05/2025 – 07/2025",
    image: "/realisations/lyon.webp",
    description: "Création en autonomie d'un site e-commerce PrestaShop complet : structuration du catalogue produits, paramétrage des passerelles bancaires et logistique.",
    ceQueJaiFait: [
      "Installation et déploiement de PrestaShop sur serveur de production.",
      "Arborescence du catalogue : fiches produits, déclinaisons de tailles et variantes d'équipements sportifs.",
      "Configuration des modules de paiement sécurisé et des grilles tarifaires de livraison.",
      "Ajustements CSS pour respecter l'identité de marque du client."
    ],
    stack: ["PrestaShop", "PHP", "MySQL", "Gestion Catalogue", "Paiements Sécurisés"],
  },
  {
    id: "martingale-scraping",
    titre: "Martingale & Céleste — Script de Scraping Python & Site WordPress",
    badge: "Automatisation Python & WordPress",
    roleCourt: "Développement script Python et intégration DIVI",
    hote: "Pages Jaunes & DIVI",
    url: "https://github.com/Yekzan1",
    libelleLien: "GitHub @Yekzan1",
    employeur: "Martingale & Céleste",
    periode: "11/2023 – 12/2023",
    image: "/realisations/bow-studio.webp",
    description: "Développement d'un script Python pour extraire les données d'entreprises de Pages Jaunes et les exporter en fichier CSV structuré. Développement d'un site web WordPress avec DIVI.",
    ceQueJaiFait: [
      "Conception d'un scraper web en Python automatisant la collecte de coordonnées professionnelles.",
      "Nettoyage, normalisation des données et export automatique au format CSV.",
      "Intégration d'un site web WordPress avec le constructeur DIVI."
    ],
    stack: ["Python", "Web Scraping", "Export CSV", "WordPress", "DIVI Builder"],
  },
];

export const PROJETS_APPLICATIFS: ProjetApplicatif[] = [
  {
    titre: "Capte",
    type: "Application Web Next.js",
    url: "https://capte.vercel.app",
    github: "https://github.com/Yekzan1/capte",
    description: "Application d'analyse et d'audit de pages web : diagnostic de performance, métriques de lisibilité et axes d'optimisation.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    titre: "MindLoop",
    type: "Application Web Next.js",
    url: "https://mindloop-one.vercel.app",
    github: "https://github.com/Yekzan1/MindLoop",
    description: "Interface de productivité et de gestion de notes modulaires avec synchronisation d'état et persistance locale.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    titre: "Site de la Mairie d'Arnas",
    type: "Projet Académique BTS SIO",
    url: "https://mairie-arnas.vercel.app",
    github: "https://github.com/Yekzan1/mairie-arnas",
    description: "Portail citoyen respectant les normes d'accessibilité numérique (RGAA), démarches administratives et annuaire municipal.",
    stack: ["Next.js", "Accessibilité RGAA", "Tailwind CSS"],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    periode: "05/2026 – 07/2026",
    entreprise: "Nexus Flow",
    role: "Développeur Full-Stack (Stage)",
    lieu: "Limas (69400)",
    description: "Stage chez un éditeur de logiciels et agence digitale.",
    missions: [
      "Refonte du CRM utilisé par un client en production (HF Concept) et intégration de l'API Infomaniak avec un assistant IA : il accède aux données du client, planifie les rendez-vous et redirige l'utilisateur vers la page demandée.",
      "After'ish : Plateforme d'association complète livrée seul en 2 semaines (adhésion en ligne, espace membres, événements, dons, chatbot, RGPD). 200 membres dont 23 payants dès le lancement + 4 articles et 3 événements publiés.",
      "Débogage critique de l'action d'inscription avec schéma Zod et rollback atomique Clerk / PostgreSQL.",
      "Audit d'isolation multi-tenant (RLS) et recette fonctionnelle QA complète."
    ],
    tags: ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL", "Clerk Auth", "API Infomaniak AI", "PHP 8", "WordPress"],
  },
  {
    periode: "05/2025 – 07/2025",
    entreprise: "Unimage Communication",
    role: "Développeur Web & E-Commerce (Stage)",
    lieu: "Villefranche-sur-Saône (69400)",
    description: "Production de sites web professionnels et e-commerce pour les clients de l'agence.",
    missions: [
      "Développement autonome de 2 sites web (Elementor et Spectra) avec intégration CSS, PHP et JavaScript.",
      "Création en autonomie d'un site e-commerce PrestaShop complet (catalogue, transporteurs, passerelles bancaires).",
      "Conformité RGPD avec intégration CookieYes et optimisation du référencement local."
    ],
    tags: ["WordPress", "Elementor", "Spectra", "PrestaShop", "PHP", "JavaScript", "CSS3", "CookieYes RGPD"],
  },
  {
    periode: "03/2024 – 04/2024",
    entreprise: "Rougevert Communication",
    role: "Développeur Web (Stage)",
    lieu: "Gleizé (69400)",
    description: "Développement web pour des organisations syndicales et des entreprises.",
    missions: [
      "Création en autonomie en 3 jours d'un site web pour l'UNSA.",
      "Développement d'un moteur de recherche en PHP avec requêtes SQL.",
      "Utilisation de Google Analytics et analyse des données de fréquentation."
    ],
    tags: ["PHP", "MySQL", "Architecture MVC", "JavaScript", "Google Analytics"],
  },
  {
    periode: "11/2023 – 12/2023",
    entreprise: "Martingale & Céleste",
    role: "Développeur Python & Web (Stage)",
    lieu: "Villefranche-sur-Saône (69400)",
    description: "Automatisation de données et intégration web.",
    missions: [
      "Développement d'un script Python pour extraire les données d'entreprises de Pages Jaunes et les exporter en fichier CSV.",
      "Développement d'un site web WordPress avec DIVI."
    ],
    tags: ["Python", "Web Scraping", "Export CSV", "WordPress", "DIVI"],
  },
  {
    periode: "01/2023 – 02/2023",
    entreprise: "Pharmagest",
    role: "Systèmes & Serveurs (Stage)",
    lieu: "Région Lyonnaise",
    description: "Immersion dans l'administration système et le support technique.",
    missions: [
      "Découverte de l'environnement Linux et préparation de serveurs.",
      "Installation de systèmes d'exploitation et relations clients."
    ],
    tags: ["Linux", "Serveurs", "Systèmes d'exploitation", "Support client"],
  },
  {
    periode: "02/2022 – 04/2022",
    entreprise: "IK FORMATION",
    role: "Développeur Web (Stage)",
    lieu: "Villefranche-sur-Saône",
    description: "Projet web éditorial.",
    missions: [
      "Conception et mise en ligne d'un site web pour un poète."
    ],
    tags: ["WordPress", "Web Design", "Mise en ligne"],
  },
];

export const FORMATIONS: Formation[] = [
  {
    periode: "Septembre 2027 – 2028 (1 an)",
    diplome: "Licence 3 Informatique (en alternance)",
    etablissement: "Business School by CSND au Campus du Beaujolais",
    detail: "Recherche active d'une alternance en Développement web / Programmation / Automatisation. Rythme 1 an.",
  },
  {
    periode: "2025 – 2027 (2 ans)",
    diplome: "BTS SIO option SLAM (Solutions Logicielles et Applications Métiers)",
    etablissement: "Business School by CSND au Campus du Beaujolais",
    detail: "Conception logicielle, POO, architecture MVC, DAO, bases de données relationnelles SQL, développement web & applicatif.",
  },
];

export const COMPETENCES = [
  {
    categorie: "Web et Frameworks",
    competences: [
      { nom: "JavaScript" },
      { nom: "Next.js" },
      { nom: "PHP" },
      { nom: "Java" },
      { nom: "POO" },
      { nom: "Architecture MVC" },
      { nom: "DAO" },
      { nom: "Laravel" },
      { nom: "Routage" }
    ],
  },
  {
    categorie: "Back-End & Données",
    competences: [
      { nom: "SQL & SGBD" },
      { nom: "MySQL" },
      { nom: "PostgreSQL (Supabase)" },
      { nom: "Merise / UML (MCD, MLD)" },
      { nom: "Conception relationnelle" },
      { nom: "Jointures & Requêtes avancées" }
    ],
  },
  {
    categorie: "Programmation & Algorithmique",
    competences: [
      { nom: "Python (Extraction & Data)" },
      { nom: "C (Gestion mémoire)" },
      { nom: "Collections & Encapsulation" },
      { nom: "TypeScript" },
      { nom: "Tailwind CSS" }
    ],
  },
  {
    categorie: "Ingénierie IA & Automatisation",
    competences: [
      { nom: "Agents de code (Claude Code, Codex, Antigravity CLI)" },
      { nom: "Workflows multi-agents & sous-agents" },
      { nom: "Serveurs MCP" },
      { nom: "Skills personnalisés & Commandes slash" },
      { nom: "APIs LLM (Claude, Google, Infomaniak)" }
    ],
  },
  {
    categorie: "DevOps, Cloud & CMS",
    competences: [
      { nom: "Suite JetBrains (IntelliJ, PhpStorm, PyCharm)" },
      { nom: "VS Code" },
      { nom: "Git / GitHub" },
      { nom: "Vercel" },
      { nom: "Docker" },
      { nom: "WordPress (DIVI, Elementor, Spectra)" },
      { nom: "PrestaShop" },
      { nom: "Déploiement FTP" }
    ],
  },
  {
    categorie: "SEO, RGPD & Méthodes",
    competences: [
      { nom: "SEO technique (Rank Math, Yoast SEO)" },
      { nom: "Google Analytics" },
      { nom: "CookieYes RGPD" },
      { nom: "Linux Debian" },
      { nom: "Windows Server" },
      { nom: "VMware & Cisco" },
      { nom: "ITIL v3" }
    ],
  },
];
