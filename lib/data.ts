export interface GalerieImage {
  src: string;
  titre: string;
  description: string;
}

export interface ExtraitCode {
  fichier: string;
  langage: string;
  description: string;
  code: string;
}

export interface Realisation {
  id: string;
  titre: string;
  badge: string;
  categorie: "ia" | "fullstack" | "web";
  hote: string;
  url: string;
  libelleLien?: string;
  urlSecours?: string;
  libelleSecours?: string;
  employeur: string;
  annee: string;
  image: string;
  contexte: string;
  probleme: string;
  solution: string;
  stack: string[];
  resultats: string[];
  miseEnAvant?: boolean;
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
  statut?: string;
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
  titreCourt: "Développeur Web & Concepteur d'Applications",
  titreLong: "Yekzan KUS — Développeur Web, Programmation & Automatisation",
  statutAlternance: "Septembre 2027 • Licence 3 Informatique",
  rythme: "Rythme 1 an (Licence 3 Informatique)",
  localisation: "Limas (69400) / Villefranche-sur-Saône / Lyon",
  permis: "Permis B (en cours)",
  email: "yekzankus@icloud.com",
  telephone: "07 85 26 68 22",
  telephoneBrut: "+33785266822",
  github: "https://github.com/Yekzan1",
  linkedin: "https://www.linkedin.com/in/yekzan-kus-674483325/",
  cvPdf: "/cv-yekzan-kus.pdf",
  bio: "Développeur web et concepteur d'applications (BTS SIO option SLAM, future Licence 3 Informatique). Habitué à livrer des projets complets en agence et en autonomie : architectures SaaS Next.js / TypeScript, intégrations d'APIs, sites sous WordPress et PrestaShop, et scripts d'automatisation.",
};

export const REALISATIONS: Realisation[] = [
  {
    id: "afterish",
    titre: "Plateforme & Portail du Club After'ish",
    badge: "Production • Livré en 2 semaines",
    categorie: "fullstack",
    hote: "afterish.agence-nexusflow.com",
    url: "https://afterish.agence-nexusflow.com",
    libelleLien: "Ouvrir afterish.agence-nexusflow.com",
    employeur: "Nexus Flow",
    annee: "2026",
    image: "/realisations/afterish-real-0.png",
    contexte: "Stage de BTS SIO chez Nexus Flow. Refonte complète du site web du club d'affaires After'ish (présidé par le dirigeant de l'agence) pour fédérer 200 membres autour d'événements et de rencontres régulières.",
    probleme: "Livrer seul en 2 semaines un portail complet avec adhésions en ligne, espace membre sécurisé, affichage dynamique des prochains événements et calcul du temps restant d'adhésion.",
    solution: "Développement du site avec DIVI et écriture de fonctions PHP sur-mesure dans functions.php du thème enfant : boucle personnalisée WP_Query pour filtrer les 3 prochains événements par date, shortcode dynamique de compte à rebours (J-150) calculé depuis la date d'inscription SQL, et intégration des paiements HelloAsso.",
    stack: ["PHP 8", "WordPress 6.x", "DIVI Builder", "WP_Query", "API HelloAsso", "CSS3", "Infomaniak Cloud"],
    resultats: [
      "Site livré et mis en ligne en autonomie en 2 semaines",
      "200 membres inscrits dès le lancement officiel, dont 23 adhésions payantes",
      "Fonction PHP personnalisée pour la boucle dynamique des événements",
      "Shortcode de calcul automatique de l'échéance d'adhésion pour chaque membre"
    ],
    miseEnAvant: true,
    galerie: [
      {
        src: "/realisations/afterish-real-0.png",
        titre: "Page d'accueil officielle en ligne",
        description: "Capture réelle du site After'ish en production : présentation des activités, adhésions et prochains événements."
      },
      {
        src: "/realisations/afterish-real-1.png",
        titre: "Section Événements & Adhésions",
        description: "Vue du module d'événements alimenté par la requête PHP WP_Query et formulaire d'inscription direct."
      },
      {
        src: "/realisations/afterish-admin.png",
        titre: "Espace membre & Profil adhérent",
        description: "Espace personnel permettant aux adhérents de gérer leur profil et voir les événements auxquels ils participent."
      },
      {
        src: "/realisations/afterish-wordpress.png",
        titre: "Back-office WordPress & Custom Post Types",
        description: "Configuration du type de publication personnalisé 'evenements' avec ses métadonnées de date et lieu."
      },
      {
        src: "/realisations/afterish-infomaniak.png",
        titre: "Gestion DNS & Domaines chez Infomaniak",
        description: "Configuration de la zone DNS, des sous-domaines et des certificats SSL sur le tableau de bord Infomaniak."
      }
    ],
    extraitsCode: [
      {
        fichier: "wp-content/themes/afterish-child/functions.php",
        langage: "php",
        description: "Boucle dynamique WP_Query affichant les 3 prochains événements triés par date croissante :",
        code: `<?php
function afterish_render_latest_events() {
    $args = array(
        'post_type'      => 'evenements',
        'posts_per_page' => 3,
        'post_status'    => 'publish',
        'orderby'        => 'meta_value',
        'meta_key'       => '_event_date',
        'order'          => 'ASC'
    );

    $events_query = new WP_Query($args);
    $output = '<div class="afterish-events-grid">';

    if ($events_query->have_posts()) {
        while ($events_query->have_posts()) {
            $events_query->the_post();
            $date = get_post_meta(get_the_ID(), '_event_date', true);
            $lieu = get_post_meta(get_the_ID(), '_event_location', true);

            $output .= '<div class="event-card">';
            $output .= '<h4>' . esc_html(get_the_title()) . '</h4>';
            $output .= '<p class="event-meta">📅 ' . esc_html($date) . ' — 📍 ' . esc_html($lieu) . '</p>';
            $output .= '<a href="' . esc_url(get_permalink()) . '" class="event-btn">Réserver ma place</a>';
            $output .= '</div>';
        }
        wp_reset_postdata();
    } else {
        $output .= '<p>Aucun événement planifié pour le moment.</p>';
    }

    $output .= '</div>';
    return $output;
}
add_shortcode('afterish_events', 'afterish_render_latest_events');`
      },
      {
        fichier: "wp-content/themes/afterish-child/functions.php",
        langage: "php",
        description: "Shortcode de calcul dynamique du nombre de jours restants sur la période d'adhésion (J-150) :",
        code: `<?php
function afterish_days_remaining_shortcode() {
    if (!is_user_logged_in()) {
        return '<span class="countdown-guest">Rejoignez le club pour activer vos 150 jours !</span>';
    }

    $user_id = get_current_user_id();
    $registered_date = get_the_author_meta('user_registered', $user_id);
    $start_timestamp = strtotime($registered_date);
    $end_timestamp   = $start_timestamp + (150 * 24 * 60 * 60); // 150 jours en secondes
    $now             = time();

    $days_left = max(0, ceil(($end_timestamp - $now) / (24 * 60 * 60)));

    return '<div class="countdown-badge">⏳ <strong>' . intval($days_left) . ' jours</strong> restants dans votre période active</div>';
}
add_shortcode('afterish_compteur_adhesion', 'afterish_days_remaining_shortcode');`
      }
    ]
  },
  {
    id: "crm-ia-nexusflow",
    titre: "Application SaaS Nexus Flow OS & HF Concept",
    badge: "SaaS Multi-Tenant • Recette QA & Débogage",
    categorie: "ia",
    hote: "os.agence-nexusflow.com",
    url: "https://accounts.agence-nexusflow.com/sign-in?redirect_url=https%3A%2F%2Fhf.agence-nexusflow.com%2Fdashboard",
    libelleLien: "Accéder au portail de connexion SaaS",
    employeur: "Nexus Flow",
    annee: "2026",
    image: "/realisations/saas-real-0.png",
    noteAcces: "Ce lien pointe vers la page d'authentification Clerk du SaaS. Comme le sous-domaine direct de production est en cours de renouvellement de certificat SSL, tous les écrans du SaaS (Dashboard, Kanban, RAG IA, Code source) sont directement consultables et expliqués ci-dessous.",
    contexte: "Stage de BTS SIO chez Nexus Flow. L'agence édite Nexus Flow OS, un SaaS multi-tenant structuré en monorepo (Next.js 14, Turborepo, Prisma, PostgreSQL) qui centralise les opérations commerciales de clients comme le showroom HF Concept.",
    probleme: "Fiabiliser le produit avant déploiement client : un bug critique sur le formulaire d'inscription bloquait les utilisateurs (l'utilisateur était créé dans Clerk Auth mais si la création d'organisation échouait dans PostgreSQL, le compte restait orphelin et bloqué). Il fallait aussi tester l'étanchéité des données multi-tenants (RLS) et sécuriser le middleware de routage par sous-domaine.",
    solution: "1. Réécriture de l'action serveur signup/actions.ts avec schéma de validation Zod et rollback atomique (suppression Clerk + cascade PostgreSQL si échec dans le try/catch). 2. Exécution du cahier de recette fonctionnelle (authentification Clerk, RLS Postgres, pipeline Kanban, lien /unsubscribe conforme RGPD). 3. Audit de middleware.ts pour vérifier l'étanchéité des sous-domaines réservés et organisationnels. 4. Configuration de l'API Infomaniak IA (modèles mixtes LLM) via script d'automatisation.",
    stack: ["Next.js 14 (App Router)", "TypeScript", "Prisma ORM", "PostgreSQL (Supabase)", "Clerk Auth", "Inngest", "Tailwind CSS", "Turborepo"],
    resultats: [
      "Bug critique A02 résolu : rollback atomique assurant zéro compte orphelin",
      "Cahier de recette fonctionnelle QA validé (A01, B01, C01, D01 validés)",
      "Isolation stricte des données garantie entre chaque tenant via PostgreSQL RLS",
      "Pipeline Kanban commercial et gestion des relances Inngest opérationnels"
    ],
    miseEnAvant: true,
    galerie: [
      {
        src: "/realisations/saas-real-0.png",
        titre: "Écran d'accueil et Dashboard du SaaS",
        description: "Vue principale de l'application SaaS Nexus Flow OS en environnement réel : indicateurs de performance, opportunités et raccourcis."
      },
      {
        src: "/realisations/saas-dashboard.png",
        titre: "Tableau de Bord Métriques & Chiffre d'Affaires",
        description: "Suivi du volume des ventes, taux de conversion des prospects et statut des dossiers clients."
      },
      {
        src: "/realisations/saas-kanban.png",
        titre: "Pipeline Commercial Kanban",
        description: "Suivi des étapes de prospection par cartes déplaçables (Contact, Rendez-vous, Devis, Signature)."
      },
      {
        src: "/realisations/saas-ia-knowledge.png",
        titre: "Interface RAG & Base Documentaire IA",
        description: "Module permettant d'uploader des catalogues PDF pour alimenter la base de connaissances de l'assistant IA."
      },
      {
        src: "/realisations/saas-branding.png",
        titre: "Branding Personnalisé Multi-Tenant",
        description: "Personnalisation graphique par client (logo, couleurs d'accent, nom du workspace)."
      }
    ],
    extraitsCode: [
      {
        fichier: "apps/web/src/app/signup/actions.ts",
        langage: "typescript",
        description: "Action serveur avec schéma Zod strict et Rollback Atomique (suppression immédiate du compte Clerk en cas d'erreur de base de données) :",
        code: `'use server'

import { z } from 'zod'
import { clerkClient } from '@clerk/nextjs/server'
import { prisma } from '@hf/db'

// Schéma de validation Zod strict
const provisionSchema = z.object({
  workspaceName: z.string().trim().min(2).max(80),
  slug: z.string().trim().min(2).max(50).regex(/^[a-z0-9-]+$/, 'Minuscules et tirets uniquement'),
  email: z.string().trim().toLowerCase().email(),
  password: z.string().min(8).max(120),
  firstName: z.string().trim().min(1),
  lastName: z.string().trim().min(1),
})

export async function provisionWorkspaceAction(formData: FormData) {
  const validated = provisionSchema.parse(Object.fromEntries(formData))
  let clerkUserId: string | null = null
  let createdOrgId: string | null = null

  try {
    // 1. Création du compte dans Clerk Auth
    const clerkUser = await clerkClient.users.createUser({
      emailAddress: [validated.email],
      password: validated.password,
      firstName: validated.firstName,
      lastName: validated.lastName,
    })
    clerkUserId = clerkUser.id

    // 2. Création de l'Organisation dans PostgreSQL via Prisma
    const org = await prisma.organization.create({
      data: {
        name: validated.workspaceName,
        slug: validated.slug,
        plan: 'TRIAL',
      }
    })
    createdOrgId = org.id

    // 3. Liaison de l'utilisateur avec le rôle ADMIN
    await prisma.user.create({
      data: {
        clerkId: clerkUserId,
        email: validated.email,
        role: 'ADMIN',
        organizationId: org.id,
      }
    })

    return { success: true, redirectUrl: \`https://\${org.slug}.agence-nexusflow.com\` }

  } catch (error) {
    // ROLLBACK ATOMIQUE : Nettoyage immédiat pour éviter tout compte orphelin
    if (clerkUserId) await clerkClient.users.deleteUser(clerkUserId).catch(() => null)
    if (createdOrgId) await prisma.organization.delete({ where: { id: createdOrgId } }).catch(() => null)
    throw new Error("Échec du provisionnement du workspace. Annulation complète effectuée.")
  }
}`
      },
      {
        fichier: "apps/web/src/middleware.ts",
        langage: "typescript",
        description: "Routage dynamique multi-tenant et vérification des sous-domaines réservés :",
        code: `import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse, type NextRequest } from 'next/server'

const isPublicRoute = createRouteMatcher([
  '/',
  '/signup(.*)',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/health',
  '/api/inngest(.*)',
  '/unsubscribe/(.*)',
])

const RESERVED_SUBDOMAINS = new Set(['www', 'app', 'api', 'admin', 'mail', 'auth'])

export default clerkMiddleware((auth, req) => {
  const hostname = req.headers.get('host') || ''
  const subdomain = hostname.split('.')[0]

  // Si c'est un sous-domaine réservé ou la landing page, laisser passer vers les routes publiques
  if (RESERVED_SUBDOMAINS.has(subdomain) || hostname.includes('os.agence-nexusflow.com')) {
    if (!isPublicRoute(req)) auth().protect()
    return NextResponse.next()
  }

  // Routage tenant : réécriture d'URL contextuelle pour isoler le workspace
  const url = req.nextUrl.clone()
  url.pathname = \`/tenant/\${subdomain}\${url.pathname}\`
  return NextResponse.rewrite(url)
})`
      },
      {
        fichier: "scripts/fix-infomaniak-ai.sh",
        langage: "bash",
        description: "Script shell automatisant la mise à jour des clés et endpoints de l'API Infomaniak sur le VPS de production :",
        code: `#!/bin/bash
# Configuration de l'API Infomaniak AI (Product ID + Token)
SSH_KEY=~/.ssh/nexus-hf.pem
VPS=ubuntu@185.143.103.110

read -p "Product ID Infomaniak AI : " PRODUCT_ID
read -s -p "API Token : " AI_TOKEN

BASE_URL="https://api.infomaniak.com/1/ai/\${PRODUCT_ID}/openai/v1"

ssh -i $SSH_KEY $VPS "
  sed -i '/^INFOMANIAK_AI_PRODUCT_ID=/d' ~/hf-growth-os/.env
  sed -i '/^INFOMANIAK_AI_API_TOKEN=/d' ~/hf-growth-os/.env
  echo 'INFOMANIAK_AI_PRODUCT_ID=\${PRODUCT_ID}' >> ~/hf-growth-os/.env
  echo 'INFOMANIAK_AI_API_TOKEN=\${AI_TOKEN}' >> ~/hf-growth-os/.env
  pm2 restart hf-web
"
echo "Configuration IA mise à jour avec succès sur le VPS !"`
      }
    ]
  },
  {
    id: "unsa-defense",
    titre: "Portail UNSA Défense & Moteur de Recherche PHP",
    badge: "Livré en autonomie en 3 jours",
    categorie: "fullstack",
    hote: "unsa-defense.org",
    url: "https://www.unsa-defense.org",
    libelleLien: "Visiter unsa-defense.org",
    employeur: "Rougevert Communication",
    annee: "2024",
    image: "/realisations/unsa.webp",
    contexte: "Stage chez Rougevert Communication. L'organisation syndicale nationale UNSA Défense devait publier rapidement ses actualités et accords officiels.",
    probleme: "Créer un site web complet en 3 jours avec un moteur de recherche interne capable de filtrer efficacement un volume dense d'articles et d'archives.",
    solution: "Développement autonome du portail en PHP avec modélisation MySQL, programmation d'un moteur de recherche documentaire avec requêtes SQL optimisées et configuration du suivi d'audience Google Analytics.",
    stack: ["PHP", "MySQL", "Architecture MVC", "JavaScript", "HTML5 / CSS3", "Google Analytics"],
    resultats: [
      "Site développé, testé et mis en ligne seul en 3 jours",
      "Moteur de recherche interne rapide et pertinent sur les publications",
      "Suivi d'audience et analyse des comportements via Google Analytics",
      "Site toujours actif et alimenté régulièrement"
    ],
    miseEnAvant: true,
  },
  {
    id: "unimage-sites",
    titre: "Sites Satellites Web & Référencement",
    badge: "2 Sites Vitrines en Autonomie",
    categorie: "web",
    hote: "agence-site-internet-lyon.fr",
    url: "https://www.agence-site-internet-lyon.fr",
    libelleLien: "Site Lyon",
    urlSecours: "https://www.creation-site-internet-villefranche.fr",
    libelleSecours: "Site Villefranche",
    employeur: "Unimage Communication",
    annee: "2025",
    image: "/realisations/unimage.webp",
    contexte: "Stage chez Unimage Communication. L'agence souhaitait déployer des vitrines spécialisées pour cibler les recherches locales à Lyon et Villefranche-sur-Saône.",
    probleme: "Créer deux sites vitrines performants et conformes au RGPD avec des composants sur mesure sans surcharger le code.",
    solution: "Création autonome des pages sous WordPress avec Elementor et Spectra, ajout de styles CSS personnalisés, ajustements en PHP et JavaScript, et intégration du gestionnaire de cookies CookieYes.",
    stack: ["WordPress", "Elementor", "Spectra", "PHP", "JavaScript", "CSS3", "CookieYes RGPD", "SEO Local"],
    resultats: [
      "Deux sites vitrines opérationnels livrés en autonomie",
      "Formulaires de contact et composants stylisés en CSS/JS",
      "Conformité RGPD CookieYes intégrée",
      "Balisage sémantique et optimisation du temps de chargement"
    ],
  },
  {
    id: "cadeo-sport",
    titre: "Boutique E-Commerce Cadeosport",
    badge: "E-Commerce PrestaShop",
    categorie: "web",
    hote: "cadeo-sport.fr",
    url: "https://cadeo-sport.fr",
    libelleLien: "Visiter cadeo-sport.fr",
    employeur: "Unimage Communication",
    annee: "2025",
    image: "/realisations/lyon.webp",
    contexte: "Stage chez Unimage Communication. Projet de création d'une boutique de vente en ligne complète pour du matériel et des équipements sportifs.",
    probleme: "Mettre en place une boutique fonctionnelle, structurer un catalogue produit dense et configurer l'ensemble des flux de vente.",
    solution: "Installation et configuration complète de PrestaShop : hiérarchie des catégories, fiches produits, paramétrage des passerelles de paiement, transporteurs et règles de taxes.",
    stack: ["PrestaShop", "PHP", "MySQL", "E-Commerce", "Gestion Catalogue", "Paiement en ligne"],
    resultats: [
      "Boutique e-commerce configurée de A à Z prête à la vente",
      "Organisation claire des catégories et déclinaisons produits",
      "Configuration des modules de livraison et transactions sécurisées",
      "Validation technique par le responsable de l'agence"
    ],
  },
  {
    id: "bow-studio",
    titre: "Site Web Bow Studio & Scraping Python",
    badge: "WordPress Divi & Script Data",
    categorie: "web",
    hote: "creation-site-web-lyon.fr",
    url: "https://www.creation-site-web-lyon.fr",
    libelleLien: "Visiter creation-site-web-lyon.fr",
    employeur: "Martingale & Céleste",
    annee: "2023",
    image: "/realisations/bowstudio.webp",
    contexte: "Stage chez Martingale & Céleste (Valence). L'agence travaillait sur le positionnement web d'un studio créatif et sur la prospection commerciale locale.",
    probleme: "Développer un site vitrine optimisé pour le référencement et collecter des données d'entreprises locales pour éviter des saisies manuelles fastidieuses.",
    solution: "Développement du site WordPress avec le constructeur Divi et optimisation on-page avec Rank Math SEO. En parallèle, écriture d'un script Python pour extraire les coordonnées d'entreprises sur Pages Jaunes et les exporter en CSV.",
    stack: ["WordPress", "DIVI Builder", "Rank Math SEO", "Python", "Web Scraping", "Export CSV"],
    resultats: [
      "Site vitrine Bow Studio développé et optimisé SEO",
      "Script Python d'extraction automatisée opérationnel",
      "Plusieurs centaines de fiches entreprises extraites et structurées en CSV",
      "Gain de temps direct pour la prospection de l'équipe"
    ],
  },
  {
    id: "multi-agents-mcp",
    titre: "Outillage de Développement & Serveurs MCP",
    badge: "Automatisation de Développement",
    categorie: "ia",
    hote: "github.com/Yekzan1",
    url: "https://github.com/Yekzan1",
    libelleLien: "Profil GitHub",
    employeur: "Projets Techniques & Automatisation",
    annee: "2026",
    image: "/realisations/mcp-agents.webp",
    contexte: "Optimisation de ma chaîne de développement locale pour automatiser les tâches répétitives de contrôle qualité (typage, tests, revues de code).",
    probleme: "Les assistants standards manquent de contexte projet direct et ne peuvent pas exécuter les commandes d'outils locaux.",
    solution: "Configuration et orchestration d'agents de code (Claude Code, Antigravity CLI) avec des serveurs locaux conformes au protocole MCP (Model Context Protocol) et des compétences personnalisées GitHub.",
    stack: ["Claude Code", "Antigravity CLI", "Serveurs MCP", "GitHub Skills", "TypeScript", "Node.js", "Python"],
    resultats: [
      "Serveurs MCP locaux connectés aux outils de développement (Git, linters, tests)",
      "Automatisation des vérifications de code avant commit",
      "Gain de temps et rigueur accrue sur les projets récents"
    ],
  },
];

export const PROJETS_APPLICATIFS: ProjetApplicatif[] = [
  {
    titre: "MindLoop",
    type: "Application Web Cartographique & Sociale",
    url: "https://mindloop-mu.vercel.app/",
    github: "https://github.com/Yekzan1/mindloop-v5-premium-prod",
    description: "Application interactive francophone combinant carte interactive, flux d'échange et données en temps réel développée avec React, TypeScript et Supabase.",
    stack: ["React", "TypeScript", "Supabase", "Cartographie", "Vercel"],
  },
  {
    titre: "Capte (Yekzan AI Platform)",
    type: "SaaS d'Extraction & Génération de Quiz",
    url: "https://github.com/Yekzan1/yekzan-ai-platform",
    github: "https://github.com/Yekzan1/yekzan-ai-platform",
    description: "Application SaaS permettant d'extraire le contenu de documents et de générer automatiquement des quiz d'apprentissage via l'API Gemini.",
    stack: ["Next.js", "TypeScript", "API Gemini", "Supabase", "Stripe"],
  },
  {
    titre: "Portail de Réservation Municipale (Arnas)",
    type: "Plateforme de Réservation en Ligne",
    url: "https://arnas-reservation.vercel.app/",
    description: "Prototype de portail municipal permettant la consultation et la réservation d'équipements publics avec gestion des créneaux horaires.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    titre: "Site Web Auteur (IK Formation)",
    type: "Site Vitrine & Recueils Poétiques",
    url: "https://github.com/Yekzan1",
    github: "https://github.com/Yekzan1",
    description: "Conception et mise en ligne en autonomie d'un site web dédié aux recueils d'un auteur lors de mon premier stage chez IK Formation.",
    stack: ["HTML5", "CSS3", "JavaScript", "Hébergement Web"],
  },
];

export const RECOMMANDATIONS: Recommandation[] = [
  {
    id: "nexus-flow",
    auteur: "Direction de Nexus Flow",
    poste: "Agence Digitale & SaaS",
    entreprise: "Nexus Flow (Villefranche-sur-Saône)",
    annee: "2026",
    image: "/recommandations/lettre-nexus-flow.webp",
    citation: "Yekzan a fait preuve d'une autonomie appréciable en livrant l'application After'ish en 2 semaines, tout en intégrant des fonctionnalités adaptées sur nos outils CRM.",
  },
  {
    id: "unimage",
    auteur: "Direction d'Unimage Communication",
    poste: "Agence de communication 360°",
    entreprise: "Unimage Communication (Villefranche-sur-Saône)",
    annee: "2025",
    image: "/recommandations/lettre-unimage.webp",
    citation: "Rigoureux, sérieux et travailleur, Yekzan a mené avec sérieux le développement de deux sites vitrines et la mise en place d'une boutique e-commerce.",
  },
  {
    id: "rougevert",
    auteur: "Direction de Rougevert Communication",
    poste: "Agence de communication",
    entreprise: "Rougevert Communication (Villefranche-sur-Saône)",
    annee: "2024",
    image: "/recommandations/lettre-rougevert.webp",
    citation: "En 3 jours de stage, Yekzan a conçu et mis en ligne le portail de l'UNSA avec un moteur de recherche en PHP fonctionnel.",
  },
  {
    id: "martingale",
    auteur: "Bertrand Piégay",
    poste: "Fondateur & Directeur",
    entreprise: "Martingale & Céleste (Valence)",
    annee: "2023",
    image: "/recommandations/lettre-martingale.webp",
    citation: "Curieux et motivé, Yekzan a développé des scripts Python d'extraction de données utiles et s'est bien intégré au travail de l'agence.",
  },
];

export const COMPETENCES = [
  {
    categorie: "Développement Web & Frameworks",
    icone: "web",
    description: "Conception d'applications web réactives, modulaires et maintenables avec typage strict.",
    competences: [
      { nom: "Next.js (App Router, Server Components)", niveau: "Développement d'applications", tag: "Principal" },
      { nom: "React & TypeScript strict", niveau: "Composants, hooks et typage", tag: "Quotidien" },
      { nom: "JavaScript (ES6+, DOM, Asynchrone)", niveau: "Logique applicative", tag: "Fondation" },
      { nom: "Tailwind CSS & CSS3 moderne", niveau: "Intégration responsive et soignée", tag: "Maîtrise" },
      { nom: "WordPress (Elementor, Divi, Spectra)", niveau: "Création et personnalisation de sites", tag: "Production" },
      { nom: "PrestaShop", niveau: "Configuration de boutiques e-commerce", tag: "Pratique" },
    ],
  },
  {
    categorie: "Back-End, Programmation & Données",
    icone: "serveur",
    description: "Programmation orientée objet, conception de bases de données relationnelles et APIs.",
    competences: [
      { nom: "PHP (POO, MVC, DAO, Routage, Laravel)", niveau: "Architecture logicielle propre", tag: "Fondation" },
      { nom: "Java (POO, Collections, Encapsulation)", niveau: "Programmation orientée objet", tag: "BTS SLAM" },
      { nom: "SQL (MySQL, PostgreSQL / Supabase)", niveau: "Requêtes, jointures et modélisation", tag: "Production" },
      { nom: "Merise & UML (MCD, MLD, Diagrammes)", niveau: "Conception relationnelle", tag: "Méthode" },
      { nom: "Python", niveau: "Scripts d'automatisation et scraping", tag: "Pratique" },
      { nom: "Langage C", niveau: "Structures de données et gestion mémoire", tag: "Fondation" },
    ],
  },
  {
    categorie: "Ingénierie IA & Automatisation",
    icone: "cerveau",
    description: "Automatisation de flux de travail et interfaçage d'assistants IA avec des bases de données.",
    competences: [
      { nom: "Agents de code (Claude Code, Antigravity CLI)", niveau: "Orchestration et paramétrage", tag: "Avancé" },
      { nom: "Serveurs MCP (Model Context Protocol)", niveau: "Connexion d'outils locaux", tag: "Avancé" },
      { nom: "Intégration d'APIs LLM (Infomaniak, Gemini, Claude)", niveau: "Raccordement applicatif et assistants", tag: "Production" },
      { nom: "Skills GitHub & Commandes slash (/)", niveau: "Personnalisation des chaînes de travail", tag: "Pratique" },
    ],
  },
  {
    categorie: "DevOps, Systèmes & Outils",
    icone: "outils",
    description: "Gestion de version, déploiement continu et administration système de base.",
    competences: [
      { nom: "Git & GitHub", niveau: "Gestion de branches, commits et revues", tag: "Quotidien" },
      { nom: "Vercel & Déploiement continu", niveau: "Hébergement et variables d'environnement", tag: "Production" },
      { nom: "Docker", niveau: "Conteneurisation d'applications", tag: "Pratique" },
      { nom: "Linux Debian & Windows Server", niveau: "Préparation de serveurs et systèmes", tag: "Système" },
      { nom: "IDEs (IntelliJ, PhpStorm, PyCharm, VS Code)", niveau: "Environnements de développement", tag: "Quotidien" },
      { nom: "SEO & Analytics (Rank Math, Google Analytics)", niveau: "Balisage et suivi de trafic", tag: "Pratique" },
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    periode: "Mai 2026 — Juillet 2026",
    entreprise: "Nexus Flow",
    role: "Stagiaire Développeur Web & Assistant IA",
    lieu: "Villefranche-sur-Saône",
    description: "Développement d'une plateforme associative complète et contribution à la refonte du CRM client.",
    missions: [
      "Développement en autonomie en 2 semaines de la plateforme After'ish (adhésions HelloAsso, espace membres, calendrier d'événements)",
      "Refonte de l'interface du CRM (HF Concept) sous Next.js et TypeScript",
      "Intégration de l'API Infomaniak pour ajouter un assistant IA connecté aux fiches clients et à la prise de rendez-vous",
    ],
    tags: ["Next.js", "TypeScript", "API Infomaniak", "HelloAsso", "Tailwind CSS", "PostgreSQL"],
  },
  {
    periode: "Mai 2025 — Juillet 2025",
    entreprise: "Unimage Communication",
    role: "Stagiaire Développeur Web & E-Commerce",
    lieu: "Villefranche-sur-Saône",
    description: "Création de sites vitrines satellites et déploiement d'une boutique e-commerce.",
    missions: [
      "Développement en autonomie de 2 sites vitrines (WordPress avec Elementor et Spectra, ajouts CSS, PHP et JavaScript)",
      "Configuration et mise en ligne complète d'un site e-commerce PrestaShop (Cadeosport)",
      "Intégration du bandeau de consentement CookieYes pour la conformité RGPD",
      "Optimisation du référencement naturel local (SEO)",
    ],
    tags: ["WordPress", "PrestaShop", "PHP", "JavaScript", "SEO", "CSS3"],
  },
  {
    periode: "Mars 2024 — Avril 2024",
    entreprise: "Rougevert Communication",
    role: "Stagiaire Développeur Web PHP",
    lieu: "Villefranche-sur-Saône",
    description: "Développement d'un portail web pour l'UNSA Défense avec moteur de recherche interne.",
    missions: [
      "Développement et mise en ligne en autonomie en 3 jours du site web officiel pour l'UNSA Défense",
      "Programmation en PHP d'un moteur de recherche documentaire avec requêtes SQL filtrées",
      "Configuration du suivi d'audience avec Google Analytics et analyse des visites",
    ],
    tags: ["PHP", "MySQL", "Moteur de recherche", "Google Analytics", "Architecture MVC"],
  },
  {
    periode: "Novembre 2023 — Décembre 2023",
    entreprise: "Martingale & Céleste",
    role: "Stagiaire Développement Web & Données",
    lieu: "Valence",
    description: "Développement de site web sous WordPress et automatisation d'extraction de données en Python.",
    missions: [
      "Développement d'un site web WordPress avec le constructeur Divi et optimisation Rank Math SEO",
      "Écriture d'un script Python (BeautifulSoup, Requests) pour extraire les données d'entreprises locales sur Pages Jaunes et export en CSV",
    ],
    tags: ["Python", "Web Scraping", "WordPress", "DIVI", "Rank Math SEO", "CSV"],
  },
  {
    periode: "Janvier 2023 — Février 2023",
    entreprise: "Pharmagest",
    role: "Stagiaire Systèmes & Infrastructure",
    lieu: "Région lyonnaise",
    description: "Découverte de l'environnement Linux et préparation de matériel serveur.",
    missions: [
      "Découverte de l'environnement Linux et préparation de serveurs dédiés",
      "Installation de systèmes d'exploitation et accompagnement relation client",
    ],
    tags: ["Linux", "Serveurs", "Systèmes d'exploitation", "Support"],
  },
  {
    periode: "Février 2022 — Avril 2022",
    entreprise: "IK Formation",
    role: "Stagiaire Développeur Web",
    lieu: "Limas",
    description: "Conception et mise en ligne d'un premier site vitrine.",
    missions: [
      "Conception et mise en ligne d'un site web dédié aux recueils d'un auteur",
      "Installation de systèmes d'exploitation et relation client",
    ],
    tags: ["HTML / CSS", "Mise en ligne", "Systèmes"],
  },
];

export const FORMATIONS: Formation[] = [
  {
    periode: "Septembre 2027 — 2028 (Alternance)",
    diplome: "Licence 3 Informatique",
    etablissement: "Business School by CSND au Campus du Beaujolais",
    detail: "Formation supérieure en conception logicielle, programmation avancée, architectures web et bases de données.",
    statut: "Recherche d'alternance (1 an)",
  },
  {
    periode: "2025 — 2027",
    diplome: "BTS SIO option SLAM (Solutions Logicielles et Applications Métiers)",
    etablissement: "Business School by CSND au Campus du Beaujolais (Limas)",
    detail: "Développement orienté objet (PHP, Java), conception de bases de données (SQL, Merise/UML), cybersécurité applicative et travail en équipe.",
    statut: "En cours (2e année)",
  },
  {
    periode: "2022 — 2025",
    diplome: "Baccalauréat Professionnel SN (Systèmes Numériques)",
    etablissement: "Lycée CSND",
    detail: "Réseaux informatiques, télécommunications, systèmes d'exploitation et administration de base.",
  },
];

export const ATOUTS = [
  {
    titre: "Anglais technique",
    valeur: "Lu et utilisé au quotidien",
    detail: "Compréhension directe des documentations officielles (Next.js, MDN, RFCs, APIs, GitHub).",
  },
  {
    titre: "10 ans de Violon",
    valeur: "Conservatoire de Villefranche",
    detail: "Pratique musicale développant rigueur, persévérance, écoute attentive et concentration sur la durée.",
  },
  {
    titre: "Mobilité & Logistique",
    valeur: "Limas / Villefranche / Lyon",
    detail: "Permis B en cours, accès direct aux réseaux ferroviaires (TER) et transports urbains (TCL).",
  },
];
