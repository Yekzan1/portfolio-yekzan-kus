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
  bio: "Développeur web et concepteur d'applications (BTS SIO option SLAM, future Licence 3 Informatique). Habitué à livrer des projets complets en agence et en autonomie : sites sous WordPress et PrestaShop, architectures Next.js / TypeScript, scripts d'automatisation Python et intégrations d'APIs.",
};

export const REALISATIONS: Realisation[] = [
  {
    id: "afterish",
    titre: "Plateforme & Portail After'ish",
    badge: "Production • Livré en 2 semaines",
    categorie: "fullstack",
    hote: "afterish.agence-nexusflow.com",
    url: "https://afterish.agence-nexusflow.com",
    employeur: "Nexus Flow",
    annee: "2026",
    image: "/realisations/afterish.webp",
    contexte: "Stage chez Nexus Flow. L'association professionnelle After'ish avait besoin d'une plateforme web pour fédérer sa communauté et gérer ses adhésions.",
    probleme: "Concevoir et mettre en ligne une solution complète en seulement 2 semaines d'autonomie : adhésions, espace membres, billetterie d'événements et conformité légale.",
    solution: "Développement complet de l'application sous Next.js et TypeScript : intégration des formulaires de paiement HelloAsso, espace membre sécurisé, calendrier des rencontres et module de dons en ligne.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "API HelloAsso", "Vercel"],
    resultats: [
      "Plateforme livrée et opérationnelle en 2 semaines",
      "200 membres inscrits dès le lancement officiel, dont 23 adhésions payantes",
      "4 articles de fond et 3 événements majeurs publiés"
    ],
    miseEnAvant: true,
  },
  {
    id: "crm-ia-nexusflow",
    titre: "Refonte CRM & Assistant IA (HF Concept)",
    badge: "SaaS & Intégration API",
    categorie: "ia",
    hote: "hf.agence-nexusflow.com",
    url: "https://accounts.agence-nexusflow.com/sign-in?redirect_url=https%3A%2F%2Fhf.agence-nexusflow.com%2Fdashboard",
    libelleLien: "Accéder au portail CRM",
    employeur: "Nexus Flow",
    annee: "2026",
    image: "/realisations/nexusflow.webp",
    contexte: "Stage chez Nexus Flow. L'entreprise cliente HF Concept utilisait un CRM interne en production nécessitant une modernisation de son interface et une assistance sur le suivi client.",
    probleme: "Faciliter l'accès aux fiches clients et automatiser la prise de rendez-vous pour réduire la charge de saisie manuelle.",
    solution: "Refonte de l'interface utilisateur du CRM en TypeScript et intégration de l'API Infomaniak pour raccorder un assistant IA capable d'interroger la base de données client, planifier les créneaux et rediriger l'utilisateur vers la page souhaitée.",
    stack: ["Next.js", "TypeScript", "API Infomaniak IA", "Tailwind CSS", "PostgreSQL", "Supabase"],
    resultats: [
      "Refonte de l'interface du tableau de bord et des vues fiches clients",
      "Assistant IA connecté permettant la consultation rapide et la planification",
      "Redirection contextuelle directe selon la demande de l'utilisateur",
      "Outil déployé et utilisé en environnement de production réel"
    ],
    miseEnAvant: true,
  },
  {
    id: "unsa-defense",
    titre: "Portail UNSA Défense & Moteur PHP",
    badge: "Livré en autonomie en 3 jours",
    categorie: "fullstack",
    hote: "unsa-defense.org",
    url: "https://www.unsa-defense.org",
    employeur: "Rougevert Communication",
    annee: "2024",
    image: "/realisations/unsa.webp",
    contexte: "Stage chez Rougevert Communication. L'organisation syndicale nationale UNSA Défense devait publier rapidement ses actualités et documents officiels.",
    probleme: "Créer un site web complet en 3 jours avec un moteur de recherche interne capable de filtrer efficacement un volume dense d'articles et d'archives syndicales.",
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
    contexte: "Stage chez Unimage Communication. L'agence souhaitait déployer des sites satellites spécialisés pour cibler les recherches locales à Lyon et Villefranche-sur-Saône.",
    probleme: "Créer deux sites vitrines performants et conformes au RGPD, avec des composants sur mesure sans surcharger le code.",
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
