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
  employeur: string;
  annee: string;
  image: string;
  description: string;
  ceQueJaiFait: string[];
  stack: string[];
  noteAcces?: string;
  galerie?: GalerieImage[];
  extraitsCode?: ExtraitCode[];
}

export interface Recommandation {
  id: string;
  auteur: string;
  poste: string;
  entreprise: string;
  annee: string;
  image: string;
  citation: string;
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
  statutAlternance: "Recherche d'alternance • Licence 3 Informatique (Sept. 2027)",
  localisation: "Limas (69400) • Lyon & Région Rhône-Alpes",
  email: "yekzankus@icloud.com",
  telephone: "07 85 26 68 22",
  telephoneBrut: "+33785266822",
  github: "https://github.com/Yekzan1",
  linkedin: "https://www.linkedin.com/in/yekzan-kus-674483325/",
  cvPdf: "/cv-yekzan-kus.pdf",
  bio: "Étudiant en 2e année de BTS SIO (option SLAM) et futur étudiant en Licence 3 Informatique. Développeur orienté produit et architecture web : Next.js 14, TypeScript, PostgreSQL/Prisma, PHP et WordPress/PrestaShop. Rigoureux sur la qualité du code, les flux d'authentification et l'autonomie en production.",
};

export const REALISATIONS: Realisation[] = [
  {
    id: "afterish",
    titre: "After'ish — Plateforme & Portail Événementiel",
    badge: "Production • Livré en 2 semaines",
    roleCourt: "Développement full-stack complet en autonomie",
    hote: "afterish.agence-nexusflow.com",
    url: "https://afterish.agence-nexusflow.com",
    libelleLien: "Visiter After'ish",
    employeur: "Nexus Flow",
    annee: "2026",
    image: "/realisations/afterish-real-0.png",
    description: "Refonte et livraison autonome du portail du club d'affaires After'ish en 2 semaines. Plateforme intégrant l'adhésion en ligne, un espace membre privé et la gestion dynamique des événements.",
    ceQueJaiFait: [
      "Développement autonome du portail avec thème DIVI et surcharges PHP personnalisées dans functions.php.",
      "Développement d'une requête WP_Query optimisée pour afficher automatiquement les prochains événements à venir triés par date.",
      "Conception d'un shortcode dynamique calculant les jours restants de la période d'adhésion (J-150) selon la date d'inscription SQL de chaque membre.",
      "Intégration du système d'adhésion avec formulaires et paiements HelloAsso.",
      "Configuration de l'hébergement, DNS et sécurisation SSL chez Infomaniak."
    ],
    stack: ["PHP 8", "WordPress", "DIVI Builder", "WP_Query", "API HelloAsso", "CSS3", "Infomaniak Cloud"],
    galerie: [
      {
        src: "/realisations/afterish-real-0.png",
        titre: "Page d'accueil en production",
        description: "Capture réelle du site After'ish déployé : bannière d'accueil, présentation des rencontres et adhésions."
      },
      {
        src: "/realisations/afterish-real-1.png",
        titre: "Section Événements & Adhésions",
        description: "Module des événements alimenté par la boucle PHP WP_Query avec liens d'inscription directs."
      },
      {
        src: "/realisations/afterish-admin.png",
        titre: "Espace membre & Profil adhérent",
        description: "Vue du compte adhérent permettant la consultation des accès et événements inscrits."
      },
      {
        src: "/realisations/afterish-wordpress.png",
        titre: "Back-office WordPress",
        description: "Gestion des événements (Custom Post Types) avec métadonnées de dates et coordonnées."
      },
      {
        src: "/realisations/afterish-infomaniak.png",
        titre: "Console Cloud Infomaniak",
        description: "Paramétrage DNS, sous-domaines et certificats SSL Let's Encrypt."
      }
    ],
    extraitsCode: [
      {
        fichier: "wp-content/themes/afterish-child/functions.php",
        langage: "php",
        titre: "Boucle dynamique des 3 prochains événements (WP_Query)",
        description: "Requête optimisée filtrant les publications personnalisées de type 'evenements' par date croissante.",
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
        titre: "Compteur dynamique de fin d'adhésion (J-150)",
        description: "Calcul en temps réel du nombre de jours restants à partir de la date d'inscription SQL du membre connecté.",
        code: `<?php
function afterish_membership_countdown() {
    if (!is_user_logged_in()) {
        return '<span class="guest-notice">Connectez-vous pour voir votre période d\'adhésion.</span>';
    }

    $user_id         = get_current_user_id();
    $registered_date = get_the_author_meta('user_registered', $user_id);
    $start_timestamp = strtotime($registered_date);
    $end_timestamp   = $start_timestamp + (150 * 86400); // 150 jours en secondes
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
    titre: "Nexus Flow OS — SaaS Multi-Tenant & RAG",
    badge: "Architecture SaaS • Recette & Débogage",
    roleCourt: "Débogage transactions, QA et routage multi-tenant",
    hote: "os.agence-nexusflow.com",
    url: "https://accounts.agence-nexusflow.com/sign-in?redirect_url=https%3A%2F%2Fhf.agence-nexusflow.com%2Fdashboard",
    libelleLien: "Accéder à l'authentification SaaS",
    employeur: "Nexus Flow",
    annee: "2026",
    image: "/realisations/saas-real-0.png",
    noteAcces: "Sous-domaine client en cours de bascule SSL. Vous pouvez accéder au portail d'authentification Clerk via le bouton ci-dessus, et consulter l'ensemble des modules réels (Dashboard, Kanban, RAG, Code source) directement documentés ci-dessous.",
    description: "Nexus Flow OS est une plateforme SaaS multi-tenant structurée en monorepo (Next.js 14, Turborepo, Prisma, PostgreSQL). Mission axée sur la sécurisation des souscriptions, l'étanchéité multi-tenant et la recette fonctionnelle QA.",
    ceQueJaiFait: [
      "Correction d'un bug critique lors de l'inscription : implémentation d'une transaction avec schéma Zod et rollback atomique (suppression du compte Clerk si l'insertion de l'organisation PostgreSQL échoue).",
      "Vérification de l'isolation multi-tenant : contrôle de l'étanchéité des données par organisation via Row-Level Security (RLS) PostgreSQL.",
      "Revue et audit du middleware de routage Next.js pour réécriture transparente des requêtes par sous-domaine client (<tenant>.agence-nexusflow.com).",
      "Exécution du plan de recette fonctionnelle QA : inscription, connexion Clerk, gestion de prospects Kanban, désabonnement RGPD.",
      "Configuration de l'accès API Infomaniak AI (modèles LLM hébergés en Suisse) pour l'assistant documentaire RAG."
    ],
    stack: ["Next.js 14", "TypeScript", "Prisma ORM", "PostgreSQL", "Clerk Auth", "Inngest", "Tailwind CSS", "Turborepo"],
    galerie: [
      {
        src: "/realisations/saas-real-0.png",
        titre: "Dashboard principal du SaaS",
        description: "Vue d'ensemble de l'espace de travail : métriques d'activité, actions rapides et navigation organisationnelle."
      },
      {
        src: "/realisations/saas-dashboard.png",
        titre: "Métriques de performance & Chiffre d'affaires",
        description: "Indicateurs de conversion commerciale et volume des opportunités en cours."
      },
      {
        src: "/realisations/saas-kanban.png",
        titre: "Pipeline commercial Kanban",
        description: "Gestion des étapes du cycle de vente : contact entrant, qualification, devis et signature."
      },
      {
        src: "/realisations/saas-ia-knowledge.png",
        titre: "Base documentaire RAG & Assistant IA",
        description: "Indexation de documents techniques et catalogues produits pour alimenter l'assistant virtuel."
      },
      {
        src: "/realisations/saas-branding.png",
        titre: "Paramétrage multi-tenant & Branding",
        description: "Personnalisation graphique et configuration du sous-domaine par organisation cliente."
      }
    ],
    extraitsCode: [
      {
        fichier: "apps/web/src/app/signup/actions.ts",
        langage: "typescript",
        titre: "Provisionnement de workspace avec rollback atomique Clerk / PostgreSQL",
        description: "Validation des entrées avec Zod. En cas d'échec d'écriture dans PostgreSQL, le compte Clerk créé est immédiatement purgé pour éliminer tout compte orphelin.",
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
        description: "Interception des requêtes par nom de domaine et routage dynamique vers le dossier /tenant/<slug> correspondant.",
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

  // Routes publiques et domaines racines
  if (RESERVED_SUBDOMAINS.has(subdomain) || hostname.includes('os.agence-nexusflow.com')) {
    if (!isPublicRoute(req)) auth().protect()
    return NextResponse.next()
  }

  // Réécriture contextuelle vers le workspace tenant
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
    roleCourt: "Développement MVC PHP & intégration complète",
    hote: "unsa-defense.org",
    url: "https://www.unsa-defense.org",
    libelleLien: "Visiter unsa-defense.org",
    employeur: "Rougevert Communication",
    annee: "2024",
    image: "/realisations/unsa.webp",
    description: "Création complète en autonomie d'un portail web pour le syndicat national UNSA Défense afin de diffuser leurs actualités et accords officiels.",
    ceQueJaiFait: [
      "Développement en autonomie du portail sous architecture MVC en PHP avec base de données MySQL.",
      "Programmation d'un moteur de recherche documentaire avec requêtes SQL indexées pour filtrer rapidement les articles et communiqués.",
      "Mise en place d'un design responsive optimisé pour mobile et tablette.",
      "Intégration du tag de mesure d'audience Google Analytics et configuration de la conformité des cookies."
    ],
    stack: ["PHP", "MySQL", "Architecture MVC", "JavaScript", "CSS3", "Google Analytics"],
  },
  {
    id: "unimage-sites",
    titre: "Sites Satellites d'Agence & Référencement Local",
    badge: "2 Sites Vitrines en Autonomie",
    roleCourt: "Intégration WordPress, CSS personnalisé et RGPD",
    hote: "agence-site-internet-lyon.fr",
    url: "https://www.agence-site-internet-lyon.fr",
    libelleLien: "Site Lyon",
    urlSecours: "https://www.creation-site-internet-villefranche.fr",
    libelleSecours: "Site Villefranche",
    employeur: "Unimage Communication",
    annee: "2025",
    image: "/realisations/unimage.webp",
    description: "Conception de deux sites vitrines autonomes dédiés au référencement local de l'agence à Lyon et Villefranche-sur-Saône.",
    ceQueJaiFait: [
      "Création complète des pages avec WordPress, Elementor et Spectra.",
      "Développement de composants CSS et snippets JavaScript pour des animations interactives légères.",
      "Intégration et paramétrage du bandeau de consentement RGPD avec CookieYes.",
      "Optimisation des temps de chargement et du balisage sémantique SEO."
    ],
    stack: ["WordPress", "Elementor", "PHP", "JavaScript", "CSS3", "CookieYes RGPD", "SEO Local"],
  },
  {
    id: "cadeo-sport",
    titre: "Cadeosport — Boutique E-Commerce PrestaShop",
    badge: "E-Commerce PrestaShop",
    roleCourt: "Configuration PrestaShop & structuration du catalogue",
    hote: "cadeo-sport.fr",
    url: "https://cadeo-sport.fr",
    libelleLien: "Visiter cadeo-sport.fr",
    employeur: "Unimage Communication",
    annee: "2025",
    image: "/realisations/lyon.webp",
    description: "Mise en place complète d'une boutique en ligne dédiée au matériel sportif sous PrestaShop.",
    ceQueJaiFait: [
      "Installation et paramétrage de PrestaShop sur serveur de production.",
      "Organisation de l'arborescence du catalogue : catégories, attributs et fiches produits avec déclinaisons.",
      "Configuration des passerelles de paiement bancaire et des zones de livraison/transporteurs.",
      "Ajustements de la mise en page CSS pour s'adapter à la charte graphique du client."
    ],
    stack: ["PrestaShop", "PHP", "MySQL", "Gestion Catalogue", "Paiements Sécurisés"],
  },
  {
    id: "bow-studio",
    titre: "Bow Studio — Site Vitrine & Identité de Marque",
    badge: "Site Vitrine Réalisé Seul",
    roleCourt: "Conception & développement web",
    hote: "bowstudio.fr",
    url: "https://bowstudio.fr",
    libelleLien: "Visiter bowstudio.fr",
    employeur: "Rougevert Communication",
    annee: "2024",
    image: "/realisations/bow-studio.webp",
    description: "Création intégrale d'un site vitrine moderne pour un studio d'architecture et de design.",
    ceQueJaiFait: [
      "Conception de la structure de navigation et mise en valeur des projets photographiques.",
      "Intégration web responsive avec typographie soignée et animations fluides en CSS.",
      "Formulaire de contact avec protection anti-spam et validation côté serveur.",
      "Recette multi-navigateurs et livraison finale au client."
    ],
    stack: ["WordPress", "PHP", "CSS3", "JavaScript", "Responsive Design"],
  },
];

export const PROJETS_APPLICATIFS: ProjetApplicatif[] = [
  {
    titre: "Capte",
    type: "Application d'Analyse & Conversion",
    url: "https://capte.vercel.app",
    github: "https://github.com/Yekzan1/capte",
    description: "Outil d'audit et de qualification des pages web : analyse des points de friction, métriques de lisibilité et recommandations d'optimisation.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    titre: "MindLoop",
    type: "Application de Productivité & Notes",
    url: "https://mindloop-one.vercel.app",
    github: "https://github.com/Yekzan1/MindLoop",
    description: "Interface de prise de notes et d'organisation par blocs avec persistance locale et synchronisation rapide.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    titre: "Site de la Mairie d'Arnas",
    type: "Projet Académique BTS SIO",
    url: "https://mairie-arnas.vercel.app",
    github: "https://github.com/Yekzan1/mairie-arnas",
    description: "Portail citoyen respectant les normes d'accessibilité (RGAA), démarches administratives et annuaire des services municipaux.",
    stack: ["Next.js", "Accessibilité RGAA", "Tailwind CSS"],
  },
];

export const RECOMMANDATIONS: Recommandation[] = [
  {
    id: "nexus-flow",
    auteur: "Sébastien PERRIN",
    poste: "Président & Directeur",
    entreprise: "Nexus Flow",
    annee: "2026",
    image: "/recommandations/recommandation-nexusflow.webp",
    citation: "Yekzan a démontré une excellente autonomie technique sur la plateforme After'ish ainsi que sur notre SaaS multi-tenant. Capable de déboguer, tester et livrer du code propre en respectant les délais.",
  },
  {
    id: "unimage",
    auteur: "Christian CARLE",
    poste: "Gérant & Directeur d'Agence",
    entreprise: "Unimage Communication",
    annee: "2025",
    image: "/recommandations/recommandation-unimage.webp",
    citation: "Très investi et rigoureux, Yekzan a su mener à bien la création de nos deux sites satellites et le paramétrage e-commerce avec une grande réactivité.",
  },
  {
    id: "rougevert",
    auteur: "Direction Technique",
    poste: "Responsable de Production",
    entreprise: "Rougevert Communication",
    annee: "2024",
    image: "/recommandations/recommandation-rougevert.webp",
    citation: "Yekzan a livré le portail UNSA Défense en seulement 3 jours avec un moteur de recherche fonctionnel en PHP/MySQL, en faisant preuve d'une efficacité remarquable.",
  },
  {
    id: "martingale",
    auteur: "Équipe de Direction",
    poste: "Tuteur de Stage",
    entreprise: "Martingale",
    annee: "2023",
    image: "/recommandations/recommandation-martingale.webp",
    citation: "Ponctuel, curieux et appliqué. Un profil prometteur qui sait rapidement monter en compétences sur des technologies variées.",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    periode: "Janv. 2026 – Févr. 2026",
    entreprise: "Nexus Flow",
    role: "Développeur Full-Stack (Stage)",
    lieu: "Limas (69400)",
    description: "Développement en production chez un éditeur de logiciels web et agence digitale.",
    missions: [
      "Création intégrale et mise en ligne du site After'ish en 2 semaines (PHP, WordPress, DIVI, API HelloAsso).",
      "Débogage critique de l'inscription SaaS Nexus Flow OS : validation Zod et rollback atomique Clerk / PostgreSQL.",
      "Audit de sécurité multi-tenant : vérification de l'étanchéité RLS PostgreSQL et du middleware de sous-domaines.",
      "Réalisation du cahier de recette fonctionnelle QA pour valider les flux avant ouverture client."
    ],
    tags: ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL", "Clerk", "PHP", "WordPress", "Infomaniak"],
  },
  {
    periode: "Mai 2025 – Juin 2025",
    entreprise: "Unimage Communication",
    role: "Développeur Web & E-Commerce (Stage)",
    lieu: "Villefranche-sur-Saône (69400)",
    description: "Production de sites web professionnels et e-commerce pour le portefeuille clients de l'agence.",
    missions: [
      "Conception et mise en ligne en autonomie de 2 sites vitrines dédiés au référencement local (Lyon et Villefranche).",
      "Intégration de styles CSS sur-mesure, animations JavaScript et conformité RGPD (CookieYes).",
      "Configuration complète de la boutique e-commerce Cadeosport sous PrestaShop (catalogue, paiements, transporteurs)."
    ],
    tags: ["WordPress", "Elementor", "PrestaShop", "PHP", "CSS3", "JavaScript", "RGPD"],
  },
  {
    periode: "Nov. 2024 – Déc. 2024",
    entreprise: "Rougevert Communication",
    role: "Développeur Web (Stage)",
    lieu: "Gleizé (69400)",
    description: "Développement web pour des organisations syndicales et des entreprises locales.",
    missions: [
      "Création en autonomie du portail national UNSA Défense en 3 jours sous architecture MVC en PHP/MySQL.",
      "Développement du moteur de recherche d'articles et d'accords syndicaux.",
      "Conception du site vitrine Bow Studio avec typographie et mise en page soignées."
    ],
    tags: ["PHP", "MySQL", "Architecture MVC", "JavaScript", "HTML5", "CSS3"],
  },
];

export const FORMATIONS: Formation[] = [
  {
    periode: "Sept. 2027 – Juin 2028",
    diplome: "Licence 3 Informatique (en alternance)",
    etablissement: "Université Lyon 1 / Établissement partenaire — Lyon",
    detail: "Spécialisation en génie logiciel, algorithmique avancée, architecture des systèmes distribués et bases de données relationnelles.",
  },
  {
    periode: "2024 – 2026",
    diplome: "BTS SIO — Option SLAM (Solutions Logicielles et Applications Métiers)",
    etablissement: "Business School by CSND — Limas (69400)",
    detail: "Conception logicielle, programmation web & objet (PHP, JS/TS, Python, C#), modélisation SQL, gestion de versions Git, intégration continue.",
  },
  {
    periode: "2021 – 2024",
    diplome: "Baccalauréat Général (Mathématiques & SES)",
    etablissement: "Lycée CSND — Villefranche-sur-Saône",
    detail: "Obtenu avec mention. Fondations en logique, raisonnement quantitatif et modélisation.",
  },
];

export const COMPETENCES = [
  {
    categorie: "Langages & Frontend",
    competences: [
      { nom: "TypeScript" },
      { nom: "JavaScript (ES6+)" },
      { nom: "PHP 8" },
      { nom: "React / Next.js 14" },
      { nom: "HTML5 / CSS3" },
      { nom: "Tailwind CSS" },
      { nom: "SQL" }
    ],
  },
  {
    categorie: "Backend & Données",
    competences: [
      { nom: "PostgreSQL (Supabase)" },
      { nom: "Prisma ORM" },
      { nom: "MySQL" },
      { nom: "Clerk Auth" },
      { nom: "Architecture MVC" },
      { nom: "API REST" },
      { nom: "Row-Level Security (RLS)" }
    ],
  },
  {
    categorie: "CMS & E-Commerce",
    competences: [
      { nom: "WordPress (Avancé)" },
      { nom: "PrestaShop" },
      { nom: "DIVI & Elementor" },
      { nom: "WP_Query / Hooks PHP" },
      { nom: "HelloAsso API" },
      { nom: "CookieYes RGPD" }
    ],
  },
  {
    categorie: "Outils & Déploiement",
    competences: [
      { nom: "Git & GitHub" },
      { nom: "Vercel" },
      { nom: "Infomaniak Cloud & DNS" },
      { nom: "Turborepo" },
      { nom: "Bash / Shell" },
      { nom: "Recette QA" }
    ],
  },
];
