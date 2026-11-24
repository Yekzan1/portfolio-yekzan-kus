export interface Realisation {
  id: string;
  titre: string;
  badge: string;
  categorie: "ia" | "fullstack" | "demos";
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
    solution: "Développement de l'application web : formulaire d'adhésion HelloAsso avec paiement sécurisé, espaces membres authentifiés, calendrier dynamique d'événements, système de dons et bandeau de consentement CookieYes conforme RGPD.",
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
    titre: "Assistant IA & CRM (HF Concept)",
    badge: "SaaS & API IA",
    categorie: "ia",
    hote: "hfconcept.agence-nexusflow.com",
    url: "https://hfconcept.agence-nexusflow.com",
    libelleLien: "Accéder au SaaS",
    urlSecours: "https://nexus-flow-os-phi.vercel.app",
    libelleSecours: "Aperçu Nexus Flow OS ↗",
    employeur: "Nexus Flow",
    annee: "2026",
    image: "/realisations/nexusflow.webp",
    contexte: "L'équipe commerciale de HF Concept utilisait un outil interne peu centralisé, nécessitant des relances manuelles répétitives.",
    probleme: "Centraliser les fiches prospects et réduire le temps passé à saisir et planifier des rendez-vous commerciaux.",
    solution: "Refonte de l'interface du CRM SaaS et interfaçage avec l'API Infomaniak pour ajouter un assistant connecté à la base PostgreSQL : recherche d'informations clients, suggestion de créneaux et qualification rapide des demandes.",
    stack: ["Next.js", "TypeScript", "API Infomaniak IA", "Tailwind CSS", "Architecture REST", "PostgreSQL / Supabase"],
    resultats: [
      "Interface unifiée pour le suivi des prospects et des statuts de contact",
      "Assistant d'aide à la consultation rapide des dossiers et à la prise de RDV",
      "Formulaires typés en TypeScript et requêtes API sécurisées",
      "Mise en service en environnement réel"
    ],
    miseEnAvant: true,
  },
  {
    id: "multi-agents-mcp",
    titre: "Workflows Multi-Agents & Serveurs MCP",
    badge: "Outillage de Développement",
    categorie: "ia",
    hote: "github.com/Yekzan1",
    url: "https://github.com/Yekzan1",
    libelleLien: "Dépôt GitHub",
    employeur: "Projets R&D & Automatisation",
    annee: "2026",
    image: "/realisations/mcp-agents.webp",
    contexte: "Optimisation de mon environnement de travail local pour accélérer les tâches de développement répétitives (refactoring, typage, tests de non-régression).",
    probleme: "Les assistants de code en chat classique manquent d'accès aux fichiers du projet, aux résultats du linter et aux commandes de tests unitaires.",
    solution: "Configuration de serveurs locaux conformes au protocole MCP (Model Context Protocol) via stdio/SSE et scripts d'orchestration pour exécuter des passes de linter, d'analyse AST et de tests en arrière-plan avec Claude Code et Antigravity CLI.",
    stack: ["Claude Code", "Antigravity CLI", "Serveurs MCP", "GitHub Skills", "TypeScript", "Node.js", "Python"],
    resultats: [
      "Serveurs MCP locaux connectés aux outils de développement (Git diff, tests Vitest, linters)",
      "Automatisation des vérifications de typage strict avant commit",
      "Commandes raccourcies pour les audits de codebase et revues de code",
      "Intégration directe dans le terminal et VS Code"
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
    libelleLien: "Profil LinkedIn Bertrand Piégay",
    urlSecours: "https://www.linkedin.com/in/bertrand-pi%C3%A9gay-%E2%9C%85%E2%80%8B-582b12a2/",
    libelleSecours: "Profil LinkedIn Bertrand Piégay ↗",
    employeur: "Martingale & Céleste",
    annee: "2023",
    image: "/realisations/martingale.webp",
    contexte: "Durant mon stage, l'agence devait constituer un annuaire d'entreprises locales pour un travail de prospection ciblé.",
    probleme: "La collecte manuelle des coordonnées sur les annuaires publics représentait un volume d'heures important et des risques d'erreurs de saisie.",
    solution: "Écriture d'un script Python automatisé utilisant BeautifulSoup et Requests pour extraire les données publiques (raison sociale, téléphone, adresse) et générer un fichier CSV propre et structuré.",
    stack: ["Python", "Web Scraping", "BeautifulSoup", "Requests", "CSV", "WordPress / DIVI"],
    resultats: [
      "Extraction automatisée de plusieurs milliers de lignes de contacts",
      "Gain de temps significatif pour l'équipe commerciale",
      "Participation en parallèle à la mise en page et l'intégration de pages web sous WordPress",
      "Attestation de stage validée par le directeur de l'agence"
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
    role: "Développeur Full-Stack & Assistant IA",
    lieu: "Villefranche-sur-Saône",
    description: "Développement d'une application associative en ligne et contribution à la refonte du CRM avec ajout d'un assistant connecté.",
    missions: [
      "Développement en 2 semaines de l'application After'ish (adhésions HelloAsso, espace membres, calendrier d'événements)",
      "Refonte de l'interface CRM (Nexus Flow OS / HF Concept) avec Next.js et Tailwind CSS",
      "Connexion de l'API Infomaniak pour assister la consultation des contacts et la prise de rendez-vous",
      "Mise en place de la bannière de consentement CookieYes conforme RGPD",
    ],
    tags: ["Next.js", "TypeScript", "API Infomaniak", "HelloAsso", "Tailwind CSS", "PostgreSQL"],
  },
  {
    periode: "Mai 2025 — Juillet 2025",
    entreprise: "Unimage Communication",
    role: "Développeur Web & E-Commerce",
    lieu: "Villefranche-sur-Saône",
    description: "Création de deux sites vitrines et mise en place d'une boutique en ligne pour des clients de l'agence.",
    missions: [
      "Développement de 2 sites vitrines (WordPress avec Elementor et Spectra, ajouts de styles CSS et snippets PHP)",
      "Configuration et intégration d'un site marchand PrestaShop (catalogue produits, modules de paiement et livraison)",
      "Améliorations ergonomiques sur les pages de l'agence",
      "Optimisation du référencement naturel local (balisage, métadonnées, performances)",
    ],
    tags: ["WordPress", "PrestaShop", "PHP", "JavaScript", "SEO", "CSS"],
  },
  {
    periode: "Mars 2024 — Avril 2024",
    entreprise: "Rougevert Communication",
    role: "Stagiaire Développeur Web PHP",
    lieu: "Villefranche-sur-Saône",
    description: "Développement d'un portail web pour l'UNSA Défense avec moteur de recherche interne.",
    missions: [
      "Développement et mise en ligne en 3 jours du site d'actualités et publications pour l'UNSA Défense",
      "Programmation en PHP natif d'un moteur de recherche documentaire avec requêtes SQL filtrées",
      "Configuration du suivi d'audience avec Google Analytics",
      "Organisation et intégration des archives de communiqués",
    ],
    tags: ["PHP", "MySQL", "Moteur de recherche", "Google Analytics", "Architecture MVC"],
  },
  {
    periode: "Novembre 2023 — Décembre 2023",
    entreprise: "Martingale & Céleste",
    role: "Stagiaire Développement & Données",
    lieu: "Valence",
    description: "Automatisation de l'extraction de données d'annuaires et intégration web.",
    missions: [
      "Écriture d'un script Python (BeautifulSoup, Requests) pour extraire les coordonnées d'entreprises locales et export CSV",
      "Intégration de maquettes de pages sous WordPress avec le constructeur Divi",
      "Optimisation de base du référencement naturel on-page",
    ],
    tags: ["Python", "Web Scraping", "WordPress", "DIVI", "Données CSV"],
  },
  {
    periode: "Janvier 2023 — Février 2023",
    entreprise: "Pharmagest Interactive",
    role: "Stagiaire Systèmes & Infrastructure",
    lieu: "Saint-Didier-au-Mont-d'Or (Région lyonnaise)",
    description: "Découverte des infrastructures serveurs et de l'administration système en entreprise.",
    missions: [
      "Préparation et configuration de serveurs dédiés sous Linux Debian",
      "Installation et déploiement de systèmes d'exploitation sur postes clients",
      "Observation des processus de support client et de gestion d'incidents",
    ],
    tags: ["Linux Debian", "Serveurs", "Systèmes", "Support IT"],
  },
  {
    periode: "Février 2022 — Avril 2022",
    entreprise: "IK Formation",
    role: "Stagiaire Développeur Web",
    lieu: "Limas",
    description: "Initiation pratique au développement et à la mise en ligne d'un premier site vitrine.",
    missions: [
      "Intégration HTML/CSS d'un site web dédié aux recueils d'un auteur local",
      "Configuration de l'hébergement et mise en ligne",
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
