export interface Realisation {
  id: string;
  titre: string;
  badge: string;
  categorie: "ia" | "fullstack" | "demos";
  hote: string;
  url: string;
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

export interface DemoVercel {
  titre: string;
  secteur: string;
  url: string;
  description: string;
}

export const INFOS_PERSONNELLES = {
  nom: "Yekzan KUS",
  titreCourt: "Développeur Web & Ingénieur IA",
  titreLong: "Yekzan KUS — Développeur Web, Programmation & Automatisation IA",
  statutAlternance: "Disponible Septembre 2027 • Alternance L3 Informatique (1 an)",
  rythme: "Rythme 1 an (Licence 3 Informatique)",
  localisation: "Limas (69400) / Villefranche-sur-Saône / Lyon",
  permis: "Permis B (en cours)",
  email: "yekzankus@icloud.com",
  telephone: "07 85 26 68 22",
  telephoneBrut: "+33785266822",
  github: "https://github.com/Yekzan1",
  linkedin: "https://www.linkedin.com/in/yekzan-kus-674483325/",
  cvPdf: "/cv-yekzan-kus.pdf",
  bio: "Étudiant en 2e année de BTS SIO option SLAM (Business School by CSND, Limas), futur étudiant en Licence 3 Informatique à la rentrée de septembre 2027. Autonome et rigoureux, je conçois des architectures web modernes et j'intègre des systèmes d'automatisation et d'IA générative directement en production.",
};

export const REALISATIONS: Realisation[] = [
  {
    id: "afterish",
    titre: "Plateforme & Portail After'ish",
    badge: "Production • 2 semaines",
    categorie: "fullstack",
    hote: "afterish.agence-nexusflow.com",
    url: "https://afterish.agence-nexusflow.com",
    employeur: "Nexus Flow",
    annee: "2026",
    image: "/realisations/afterish.webp",
    contexte: "Nexus Flow devait créer de zéro une plateforme communautaire et associative pour un réseau professionnel lyonnais articulé en quatre pôles d'activités.",
    probleme: "Besoin urgent d'un système complet d'adhésion en ligne, gestion d'événements, espace membres restreint, billetterie sécurisée et conformité RGPD, à livrer en autonomie totale dans un délai très serré de 2 semaines.",
    solution: "Conception intégrale de l'application web de la page blanche à la mise en production : intégration de l'adhésion HelloAsso avec paiement sécurisé, espaces membres authentifiés, calendrier dynamique d'événements, système de dons, chatbot d'orientation et bandeau de conformité CookieYes.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HelloAsso API", "CookieYes RGPD", "Vercel"],
    resultats: [
      "Livraison complète en autonomie en seulement 2 semaines",
      "200 membres inscrits dès le lancement officiel, dont 23 adhésions payantes",
      "4 articles et 3 événements majeurs publiés et réservables en ligne",
      "100% conforme RGPD et fluidité mobile validée"
    ],
    miseEnAvant: true,
  },
  {
    id: "crm-ia-nexusflow",
    titre: "Assistant IA & Refonte CRM (HF Concept)",
    badge: "IA & SaaS en Production",
    categorie: "ia",
    hote: "hfconcept.agence-nexusflow.com",
    url: "https://hfconcept.agence-nexusflow.com",
    urlSecours: "https://nexus-flow-os-phi.vercel.app",
    libelleSecours: "Aperçu Nexus Flow OS ↗",
    employeur: "Nexus Flow",
    annee: "2026",
    image: "/realisations/nexusflow.webp",
    contexte: "HF Concept utilisait un CRM interne vieillissant avec des processus commerciaux lents et des relances clients manuelles chronophages.",
    probleme: "Absence de centralisation des prospects, friction dans la prise de rendez-vous et perte de temps sur la consultation des fiches clients.",
    solution: "Refonte ergonomique et technique complète du CRM SaaS en production (Nexus Flow OS). Intégration de l'API Infomaniak pour déployer un assistant IA connecté directement à la base de données client : l'IA consulte les données en temps réel, qualifie le besoin, planifie automatiquement les rendez-vous et redirige l'utilisateur vers l'action ciblée.",
    stack: ["Next.js", "TypeScript", "API Infomaniak IA", "Tailwind CSS", "Architecture REST", "PostgreSQL / Supabase"],
    resultats: [
      "Gain de temps immédiat sur les prises de contact et le suivi client",
      "Assistant IA capable de planifier des rendez-vous et d'orienter en temps réel",
      "Génération assistée de devis et scoring automatique des opportunités",
      "Déploiement stable et éprouvé en conditions réelles d'exploitation"
    ],
    miseEnAvant: true,
  },
  {
    id: "multi-agents-mcp",
    titre: "Workflows Multi-Agents & Serveurs MCP",
    badge: "Ingénierie IA Avancée",
    categorie: "ia",
    hote: "github.com/Yekzan1",
    url: "https://github.com/Yekzan1",
    employeur: "Projets R&D & Automatisation",
    annee: "2026",
    image: "/realisations/afterish.webp",
    contexte: "Exploration et mise en place d'architectures d'ingénierie logicielle assistées par agents autonomes pour multiplier la vélocité et la fiabilité du code produit.",
    probleme: "Les LLMs classiques en mode chat isolé manquent de contexte projet, commettent des erreurs de régression et ne peuvent pas agir directement sur l'environnement de développement ou exécuter de tests.",
    solution: "Paramétrage poussé et orchestration de flottes d'agents de code autonomes (Claude Code maîtrisé au quotidien, Codex, Antigravity CLI). Conception et configuration de serveurs MCP (Model Context Protocol) sur-mesure et de Skills GitHub personnalisés avec commandes slash dédiées aux audits de code, à la génération de tests et aux déploiements automatisés.",
    stack: ["Claude Code", "Antigravity CLI", "Serveurs MCP", "GitHub Skills", "Python", "TypeScript", "Node.js", "APIs LLM Claude & Google"],
    resultats: [
      "Orchestration fluide de sous-agents spécialisés (recherche, refactoring, tests)",
      "Réduction drastique du temps de mise en place de fonctionnalités complexes",
      "Automatisation des audits de conformité, de typage et de sécurité",
      "Méthodologie reproductible et intégrée au workflow Git/GitHub"
    ],
    miseEnAvant: true,
  },
  {
    id: "unsa-defense",
    titre: "Portail Syndical & Moteur PHP (UNSA Défense)",
    badge: "Développement en 3 jours",
    categorie: "fullstack",
    hote: "unsa-defense.org",
    url: "https://www.unsa-defense.org",
    employeur: "Rougevert Communication",
    annee: "2024",
    image: "/realisations/unsa.webp",
    contexte: "L'organisation syndicale UNSA Défense avait besoin d'un nouveau site officiel pour diffuser ses publications et comptes rendus à l'échelle nationale.",
    probleme: "Délai d'intervention extrêmement court (3 jours) avec une contrainte clé : les adhérents devaient pouvoir retrouver instantanément n'importe quel accord, texte de loi ou compte rendu syndical parmi des centaines d'archives.",
    solution: "Développement autonome du portail web complet en 3 jours avec conception d'un moteur de recherche interne personnalisé en PHP natif (requêtes optimisées, filtres par dates et mots-clés) et interfaçage avec Google Analytics pour le suivi d'audience.",
    stack: ["PHP", "MySQL", "Architecture MVC", "JavaScript", "HTML5 / CSS3", "Google Analytics"],
    resultats: [
      "Projet livré et mis en ligne en autonomie complète en 3 jours",
      "Moteur de recherche interne rapide et précis sur un catalogue documentaire dense",
      "Site toujours en exploitation active avec publication continue d'actualités",
      "Lettre de recommandation élogieuse de la direction de Rougevert Communication"
    ],
    miseEnAvant: true,
  },
  {
    id: "unimage-sites",
    titre: "Écosystème Web & PrestaShop (Unimage)",
    badge: "3 Sites Web en Autonomie",
    categorie: "fullstack",
    hote: "unimage.fr",
    url: "https://unimage.fr",
    employeur: "Unimage Communication",
    annee: "2025",
    image: "/realisations/unimage.webp",
    contexte: "Stage en agence de communication web portant sur la refonte de vitrines stratégiques et le développement d'un nouveau pôle e-commerce.",
    probleme: "Nécessité de moderniser l'image de marque de l'agence, d'étendre son référencement sur deux bassins économiques distincts (Lyon et Villefranche-sur-Saône) et de monter une boutique en ligne clé en main.",
    solution: "Développement autonome de deux sites vitrines complémentaires (agence-site-internet-lyon.fr et creation-site-internet-villefranche.fr) avec intégrations CSS, PHP et JavaScript sur-mesure, conformité RGPD CookieYes, et création intégrale d'une boutique e-commerce sous PrestaShop.",
    stack: ["WordPress", "PrestaShop", "PHP", "JavaScript", "CSS3 / Sass", "Elementor & Spectra", "SEO Rank Math", "CookieYes"],
    resultats: [
      "Développement en autonomie de 2 sites vitrines ciblant Lyon et Villefranche",
      "Création complète d'un site marchand PrestaShop prêt à la vente",
      "Intégration technique d'un premier agent conversationnel pour la qualification",
      "Félicitations de la direction pour l'autonomie et la rigueur d'exécution"
    ],
  },
  {
    id: "martingale-scraping",
    titre: "Web Scraping & Automatisation Python",
    badge: "Data & Automatisation",
    categorie: "ia",
    hote: "martingale-et-celeste.fr",
    url: "https://www.linkedin.com/in/bertrand-pi%C3%A9gay-%E2%9C%85%E2%80%8B-582b12a2/",
    urlSecours: "https://www.linkedin.com/in/bertrand-pi%C3%A9gay-%E2%9C%85%E2%80%8B-582b12a2/",
    libelleSecours: "Profil LinkedIn Bertrand Piégay ↗",
    employeur: "Martingale & Céleste",
    annee: "2023",
    image: "/realisations/martingale.webp",
    contexte: "L'agence avait besoin de constituer rapidement des bases de données qualifiées d'entreprises locales pour alimenter des campagnes de prospection ciblées.",
    probleme: "La collecte manuelle des coordonnées sur les annuaires publics représentait des dizaines d'heures de saisie fastidieuse et source d'erreurs.",
    solution: "Développement d'un script Python automatisé de web scraping ciblant Pages Jaunes pour extraire, nettoyer et structurer les données d'entreprises (nom, téléphone, adresse, activité) avec export direct au format CSV exploitable.",
    stack: ["Python", "Web Scraping", "BeautifulSoup / Requests", "Traitement de données CSV", "WordPress / DIVI"],
    resultats: [
      "Extraction automatique de plusieurs milliers de lignes de données qualifiées",
      "Suppression totale de la saisie manuelle et gain de temps massif",
      "Participation en parallèle à la création et l'intégration du site web de l'agence",
      "Attestation de stage soulignant le sens de l'initiative et l'autonomie"
    ],
  },
];

export const DEMOS_VERCEL_HIGHLIGHTS: DemoVercel[] = [
  {
    titre: "La Botte Caladoise",
    secteur: "Artisanat & Commerce",
    url: "https://corvio-demo-cordonnier.vercel.app",
    description: "Démo ultra-rapide avec design haut de gamme ivoire & charbon, score de performance 100/100, réservations et prestations en direct.",
  },
  {
    titre: "Abbaye Caladoise",
    secteur: "Hôtellerie & Gastronomie",
    url: "https://corvio-demo-abbaye.vercel.app",
    description: "Site immersif pour établissement hôtelier avec carte gastronomique interactive, galerie fluide et formulaire de réservation.",
  },
  {
    titre: "Dynam'Ostéo",
    secteur: "Santé & Bien-être",
    url: "https://corvio-demo-dynamosteo.vercel.app",
    description: "Plateforme claire pour cabinet d'ostéopathie, prise de contact ciblée, fiches conseils et réassurance patient.",
  },
  {
    titre: "Corvio Space",
    secteur: "SaaS & Gestion",
    url: "https://corvio-space.vercel.app",
    description: "Application interactive de gestion de projets, tableau de bord réactif et déploiement instantané.",
  },
  {
    titre: "AeroTechno",
    secteur: "Industrie & Ingénierie",
    url: "https://aerotechno-demo.vercel.app",
    description: "Vitrine technique épurée valorisant les process industriels de haute précision et la prise de contact B2B.",
  },
  {
    titre: "Comptoir Évasion",
    secteur: "Voyages & Tourisme",
    url: "https://corvio-demo-comptoirevasion.vercel.app",
    description: "Expérience visuelle élégante valorisant des séjours sur-mesure et l'accompagnement personnalisé.",
  },
  {
    titre: "Fleurs de Coton",
    secteur: "Art Floral & Événements",
    url: "https://corvio-demo-fleursdecoton.vercel.app",
    description: "Présentation des créations florales, commande d'arrangements pour mariages et cérémonies.",
  },
  {
    titre: "Cycles Rolland",
    secteur: "Mobilité & Sport",
    url: "https://corvio-demo-cyclesrolland.vercel.app",
    description: "Catalogue dynamique de vélos et accessoires avec module de prise de rendez-vous d'atelier mécanique.",
  },
];

export const RECOMMANDATIONS: Recommandation[] = [
  {
    id: "nexus-flow",
    auteur: "Direction de Nexus Flow",
    poste: "Agence Digitale & SaaS",
    entreprise: "Nexus Flow (Lyon)",
    annee: "2026",
    image: "/recommandations/lettre-nexus-flow.webp",
    citation: "Yekzan a fait preuve d'une autonomie exceptionnelle en livrant seul en 2 semaines l'application complète After'ish, tout en intégrant des fonctionnalités d'IA et de CRM sur nos solutions en production.",
  },
  {
    id: "unimage",
    auteur: "Direction d'Unimage Communication",
    poste: "Agence de communication 360°",
    entreprise: "Unimage Communication (Villefranche)",
    annee: "2025",
    image: "/recommandations/lettre-unimage.webp",
    citation: "Rigoureux, force de proposition et travailleur, Yekzan a su mener en toute indépendance le développement de plusieurs sites clients et d'une boutique e-commerce avec une remarquable qualité d'exécution.",
  },
  {
    id: "rougevert",
    auteur: "Direction de Rougevert Communication",
    poste: "Agence de communication",
    entreprise: "Rougevert Communication",
    annee: "2024",
    image: "/recommandations/lettre-rougevert.webp",
    citation: "En seulement 3 jours de travail, Yekzan a conçu et mis en ligne le nouveau site complet de l'UNSA avec un moteur de recherche en PHP parfaitement fonctionnel.",
  },
  {
    id: "martingale",
    auteur: "Bertrand Piégay",
    poste: "Fondateur & Directeur",
    entreprise: "Martingale & Céleste (Valence)",
    annee: "2023",
    image: "/recommandations/lettre-martingale.webp",
    citation: "Curieux et motivé, Yekzan a su développer des scripts Python d'extraction de données très efficaces et s'est intégré avec aisance aux travaux d'intégration web de l'équipe.",
  },
];

export const COMPETENCES = [
  {
    categorie: "Ingénierie IA & Automatisation",
    icone: "cerveau",
    description: "Orchestration multi-agents, outils MCP et intégration d'APIs LLM en environnement de production réel.",
    competences: [
      { nom: "Claude Code", niveau: "Maîtrise avancée", tag: "Expert" },
      { nom: "Orchestration Multi-Agents", niveau: "Workflows & Sous-agents", tag: "Production" },
      { nom: "Serveurs MCP (Model Context Protocol)", niveau: "Conception & Intégration", tag: "Avancé" },
      { nom: "Skills GitHub & Commandes Slash", niveau: "Customisation d'outils", tag: "Avancé" },
      { nom: "Antigravity CLI & Codex", niveau: "Automatisation de dev", tag: "Pratique" },
      { nom: "APIs LLM (Claude, Google Gemini, Infomaniak)", niveau: "Intégration d'assistants", tag: "Production" },
    ],
  },
  {
    categorie: "Back-End, Programmation & Données",
    icone: "serveur",
    description: "Développement orienté objet, architecture logicielle propre et modélisation rigoureuse de bases de données.",
    competences: [
      { nom: "PHP (POO, MVC, DAO, Routage, Laravel)", niveau: "Architecture solide", tag: "Fondation" },
      { nom: "Java (POO, Encapsulation, Collections)", niveau: "Programmation objet", tag: "Académique" },
      { nom: "SQL & SGBD (MySQL, PostgreSQL / Supabase)", niveau: "Requêtes complexes & Jointures", tag: "Production" },
      { nom: "Modélisation Merise / UML (MCD & MLD)", niveau: "Conception relationnelle", tag: "Méthode" },
      { nom: "Python (Scripts d'automatisation & Scraping)", niveau: "Extraction & Traitement", tag: "Pratique" },
      { nom: "Langage C", niveau: "Gestion mémoire & Pointeurs", tag: "Fondation" },
    ],
  },
  {
    categorie: "Front-End, Web & Référencement",
    icone: "web",
    description: "Création d'interfaces web réactives, accessibles, rapides et optimisées pour les moteurs de recherche.",
    competences: [
      { nom: "Next.js (App Router, Server Components)", niveau: "Développement moderne", tag: "Expert" },
      { nom: "React & TypeScript strict", niveau: "Composants & Typage", tag: "Quotidien" },
      { nom: "Tailwind CSS & Design Systems", niveau: "UI haut de gamme & Responsive", tag: "Maîtrise" },
      { nom: "JavaScript (ES6+, Asynchrone, DOM)", niveau: "Logique front-end", tag: "Fondation" },
      { nom: "WordPress (Divi, Elementor, Spectra)", niveau: "Sites vitrines sur-mesure", tag: "Production" },
      { nom: "PrestaShop", niveau: "Boutiques e-commerce", tag: "Pratique" },
      { nom: "SEO Technique & Analytics (Rank Math, GA4)", niveau: "Audit & Optimisation", tag: "Pratique" },
      { nom: "Conformité RGPD (CookieYes)", niveau: "Gestion des consentements", tag: "Légal" },
    ],
  },
  {
    categorie: "DevOps, Systèmes & Outils",
    icone: "outils",
    description: "Environnements de développement professionnels, versioning strict et culture des bonnes pratiques.",
    competences: [
      { nom: "Git & GitHub", niveau: "Branches, PRs, CI/CD", tag: "Quotidien" },
      { nom: "Vercel", niveau: "Déploiements continus", tag: "Production" },
      { nom: "Docker", niveau: "Conteneurisation d'apps", tag: "Pratique" },
      { nom: "Linux Debian & Windows Server", niveau: "Administration système", tag: "Système" },
      { nom: "VMware & Réseaux Cisco", niveau: "Virtualisation & Routage", tag: "Réseau" },
      { nom: "Suite JetBrains (IntelliJ, PhpStorm, PyCharm)", niveau: "IDEs de référence", tag: "Outil" },
      { nom: "VS Code & Déploiement FTP", niveau: "Environnements de dev", tag: "Outil" },
      { nom: "Méthodologie ITIL v3", niveau: "Gestion des services IT", tag: "Process" },
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    periode: "Mai 2026 — Juillet 2026",
    entreprise: "Nexus Flow",
    role: "Développeur Full-Stack & Intégrateur IA",
    lieu: "Lyon",
    description: "Développement en totale autonomie d'une plateforme communautaire complète et refonte du CRM client avec intégration d'un assistant IA.",
    missions: [
      "Livraison complète en 2 semaines de la plateforme After'ish (adhésions HelloAsso, espace membres, événements, chatbot)",
      "Refonte du CRM en production (Nexus Flow OS / HF Concept) avec interface utilisateur réactive",
      "Intégration de l'API Infomaniak pour créer un assistant IA accédant aux données clients et planifiant des rendez-vous",
      "Mise en place de la conformité RGPD intégrale avec CookieYes",
    ],
    tags: ["Next.js", "TypeScript", "IA Infomaniak", "HelloAsso", "Tailwind CSS", "SaaS"],
  },
  {
    periode: "Mai 2025 — Juillet 2025",
    entreprise: "Unimage Communication",
    role: "Développeur Web & E-Commerce",
    lieu: "Villefranche-sur-Saône",
    description: "Conception autonome de sites web vitrines et d'un site marchand complet en environnement d'agence.",
    missions: [
      "Développement en autonomie de 2 sites web (Elementor et Spectra) avec intégrations poussées en CSS, PHP et JavaScript",
      "Création intégrale d'un site e-commerce sous PrestaShop (catalogue produits, paiement sécurisé, gestion des stocks)",
      "Refonte ergonomique de sections du site de l'agence et test d'un premier chatbot d'orientation",
      "Optimisation SEO locale pour les bassins de Lyon et de Villefranche-sur-Saône",
    ],
    tags: ["WordPress", "PrestaShop", "PHP", "JavaScript", "SEO", "Elementor"],
  },
  {
    periode: "Mars 2024 — Avril 2024",
    entreprise: "Rougevert Communication",
    role: "Développeur Web PHP",
    lieu: "Région Auvergne-Rhône-Alpes",
    description: "Développement express et autonome d'un portail syndical à forte visibilité documentaire.",
    missions: [
      "Création complète en autonomie en 3 jours du nouveau site de l'UNSA Défense",
      "Conception et programmation d'un moteur de recherche interne en PHP sur catalogue documentaire",
      "Mise en place et analyse des données de fréquentation avec Google Analytics",
      "Publication et maintenance des archives syndicales en production",
    ],
    tags: ["PHP", "MySQL", "Moteur de recherche", "Google Analytics", "Architecture MVC"],
  },
  {
    periode: "Novembre 2023 — Décembre 2023",
    entreprise: "Martingale & Céleste",
    role: "Stagiaire Développement & Données",
    lieu: "Valence",
    description: "Automatisation de la collecte de données B2B et intégration de sites sous WordPress.",
    missions: [
      "Développement d'un script Python de web scraping pour extraire les données d'entreprises (Pages Jaunes) avec export CSV",
      "Intégration de pages web WordPress avec le constructeur Divi",
      "Participation aux travaux d'optimisation de référencement naturel on-page",
    ],
    tags: ["Python", "Web Scraping", "WordPress", "DIVI", "Données CSV"],
  },
  {
    periode: "Janvier 2023 — Février 2023",
    entreprise: "Pharmagest Interactive",
    role: "Stagiaire Systèmes & Infrastructure",
    lieu: "Région Rhône-Alpes",
    description: "Découverte des infrastructures serveurs et de l'administration système en environnement d'entreprise.",
    missions: [
      "Préparation et configuration de serveurs dédiés sous Linux Debian",
      "Installation et déploiement de systèmes d'exploitation sur parc machine",
      "Sensibilisation au support client et à la résolution d'incidents techniques",
    ],
    tags: ["Linux Debian", "Serveurs", "Systèmes", "Support IT"],
  },
  {
    periode: "Février 2022 — Avril 2022",
    entreprise: "IK Formation",
    role: "Développeur Web Junior",
    lieu: "Limas",
    description: "Première mise en ligne d'un projet web artistique complet.",
    missions: [
      "Conception graphique et développement d'un site web dédié aux œuvres d'un auteur-poète",
      "Mise en ligne, gestion de l'hébergement et premiers pas dans le cycle de livraison web",
    ],
    tags: ["HTML / CSS", "Hébergement", "Web Design"],
  },
];

export const FORMATIONS: Formation[] = [
  {
    periode: "Septembre 2027 — 2028 (Cible alternance)",
    diplome: "Licence 3 Informatique",
    etablissement: "Business School by CSND au Campus du Beaujolais",
    detail: "Spécialisation en développement logiciel, architectures systèmes, programmation avancée et intégration de technologies d'intelligence artificielle.",
    statut: "Candidature en cours • Rythme 1 an",
  },
  {
    periode: "2025 — 2027",
    diplome: "BTS SIO option SLAM (Solutions Logicielles et Applications Métiers)",
    etablissement: "Business School by CSND au Campus du Beaujolais (Limas)",
    detail: "Conception et maintenance de solutions logicielles, POO (PHP, Java), bases de données relationnelles, sécurité applicative et gestion de projets agiles.",
    statut: "En cours (2e année)",
  },
  {
    periode: "2022 — 2025",
    diplome: "Baccalauréat Professionnel SN (Systèmes Numériques)",
    etablissement: "Lycée CSND",
    detail: "Réseaux informatiques, télécommunications, systèmes communicants et administration de base.",
  },
];

export const ATOUTS = [
  {
    titre: "Anglais technique",
    valeur: "Lu, écrit et utilisé au quotidien",
    detail: "Lecture de documentations techniques en anglais (RFCs, Next.js, APIs LLM, GitHub, serveurs MCP).",
  },
  {
    titre: "10 ans de Violon",
    valeur: "Conservatoire de Villefranche",
    detail: "Pratique assidue ayant développé rigueur d'apprentissage, sens de l'écoute, persévérance et concentration soutenue.",
  },
  {
    titre: "Mobilité & Logistique",
    valeur: "Limas / Villefranche / Lyon",
    detail: "Permis B en cours, excellente accessibilité aux transports en commun TER et TCL sur l'axe Villefranche-Lyon.",
  },
];
