export const INFOS_PERSONNELLES = {
  nom: "Yekzan KUS",
  email: "yekzankus@icloud.com",
  telephone: "07 85 26 68 22",
  telephoneBrut: "+33785266822",
  localisation: "Limas, Rhône",
  github: "https://github.com/Yekzan1",
  linkedin: "https://www.linkedin.com/in/yekzan-kus-674483325/",
  cvPdf: "/cv-yekzan-kus.pdf",
  portrait: "/photo-cv.webp",
  bio: "Étudiant en BTS SIO, option SLAM, je suis admis en Licence 3 Informatique au Campus du Beaujolais pour septembre 2027. Je cherche une alternance d’un an en développement web et logiciel.",
};

export const REALISATIONS = [
  {
    id: "afterish",
    numero: "01",
    entreprise: "Nexus Flow",
    periode: "Stage · 2026",
    titre: "After’ish",
    sousTitre: "Un portail pour faire vivre un réseau d’entrepreneurs",
    introduction:
      "J’ai développé le portail de l’association After’ish pendant mon stage chez Nexus Flow. Le site rassemble les événements du club, les adhésions, les dons et l’espace réservé aux membres.",
    image: "/realisations/portfolio/afterish-home.webp",
    imageAlt: "Page d’accueil du site After’ish en production",
    lien: "https://afterish.agence-nexusflow.com",
    lienLabel: "Voir le site After’ish",
    resultats: [
      { valeur: "2 semaines", libelle: "pour livrer le portail" },
      { valeur: "200", libelle: "membres au lancement" },
      { valeur: "23", libelle: "adhésions payantes" },
    ],
    mission: [
      "J’ai construit les pages du site sous WordPress et intégré les besoins de l’association dans le thème DIVI.",
      "J’ai écrit une boucle WP_Query qui récupère trois événements publiés et les trie par date à partir de leurs métadonnées.",
      "J’ai ajouté un shortcode PHP qui calcule la période d’adhésion de 150 jours à partir de la date d’inscription du membre.",
      "J’ai mis en place l’espace membre et configuré HelloAsso pour les adhésions et les dons en ligne.",
      "J’ai participé à la mise en production : domaines, DNS et certificats SSL chez Infomaniak.",
    ],
    code: {
      fichier: "functions.php · requête des événements",
      explication:
        "La requête cible le type de contenu des événements, limite le résultat à trois publications et les classe selon la date enregistrée dans _event_date.",
      extrait: [
        "$args = [",
        "    'post_type'      => 'evenements',",
        "    'posts_per_page' => 3,",
        "    'post_status'    => 'publish',",
        "    'orderby'        => 'meta_value',",
        "    'meta_key'       => '_event_date',",
        "    'order'          => 'ASC',",
        "];",
        "",
        "$query = new WP_Query($args);",
      ].join("\n"),
    },
    capture: {
      image: "/realisations/portfolio/afterish-member.webp",
      alt: "Tableau de bord de l’espace membre After’ish avec l’annuaire et les services du club",
      legende: "Tableau de bord de l’espace membre",
    },
    technologies: "PHP 8 · WordPress · DIVI · WP_Query · HelloAsso",
  },
  {
    id: "nexus-flow",
    numero: "02",
    entreprise: "Nexus Flow · HF Concept",
    periode: "Stage de cinq semaines · 2026",
    titre: "Nexus Flow OS",
    sousTitre: "Fiabiliser les inscriptions d’un CRM multi-entreprise",
    introduction:
      "Nexus Flow OS regroupe le suivi commercial, les devis et factures, le support client et les relances. Pendant mon stage, j’ai travaillé sur la fiabilité de l’inscription, les contrôles de séparation des comptes et la recette fonctionnelle.",
    image: "/realisations/portfolio/saas-dashboard.webp",
    imageAlt: "Tableau de bord commercial de Nexus Flow OS",
    lien: "https://accounts.agence-nexusflow.com/sign-in?redirect_url=https%3A%2F%2Fhf.agence-nexusflow.com%2Fdashboard",
    lienLabel: "Ouvrir le portail de connexion",
    resultats: [
      { valeur: "Inscription", libelle: "validation et correction d’un échec partiel" },
      { valeur: "Données", libelle: "vérification de l’isolation entre entreprises" },
      { valeur: "Recette", libelle: "parcours CRM testés et anomalies consignées" },
    ],
    mission: [
      "J’ai repéré un cas où le compte utilisateur pouvait être créé sans que l’espace de travail soit correctement enregistré.",
      "Avec la validation de mon tuteur, j’ai ajouté le contrôle des champs et le nettoyage des éléments déjà créés lorsque l’inscription échoue.",
      "J’ai vérifié les règles PostgreSQL qui empêchent une entreprise d’accéder aux données d’une autre.",
      "J’ai exécuté des tests fonctionnels sur la connexion, l’inscription, le pipeline Kanban et le lien de désinscription des courriels.",
      "J’ai relu le routage par sous-domaine et vérifié le comportement des espaces clients.",
    ],
    etapesInscription: [
      "Valider les informations saisies et refuser les sous-domaines réservés.",
      "Créer le compte utilisateur, puis l’espace de travail et son compte administrateur.",
      "Si une étape échoue, supprimer les éléments déjà créés pour éviter un compte orphelin.",
    ],
    capture: {
      image: "/realisations/portfolio/saas-branding.webp",
      alt: "Réglages de marque et de domaine d’un espace client dans Nexus Flow OS",
      legende: "Personnalisation de l’espace client",
    },
    technologies: "PostgreSQL · Clerk · Prisma · Inngest",
  },
];

export const AUTRES_REALISATIONS = [
  {
    entreprise: "Unimage Communication",
    periode: "05/2025 – 07/2025",
    role: "Sites vitrines et e-commerce",
    description:
      "Développement autonome de deux sites WordPress avec Elementor et Spectra, puis création d’un site PrestaShop avec catalogue, livraison et paiement.",
  },
  {
    entreprise: "Rougevert Communication",
    periode: "03/2024 – 04/2024",
    role: "Site de l’UNSA Défense",
    description:
      "Création du site en trois jours et développement d’un moteur de recherche documentaire en PHP et SQL.",
  },
  {
    entreprise: "Martingale & Céleste",
    periode: "11/2023 – 12/2023",
    role: "Collecte de données et site WordPress",
    description:
      "Écriture d’un script Python pour extraire des données d’entreprises et les exporter dans un fichier CSV, en complément d’un site WordPress.",
  },
  {
    entreprise: "Pharmagest · IK Formation",
    periode: "2022 – 2023",
    role: "Systèmes et support",
    description:
      "Découverte de Linux, préparation de serveurs, installation de systèmes et accompagnement des utilisateurs.",
  },
];

export const PROJETS_APPLICATIFS = [
  {
    titre: "Capte",
    type: "Outil de révision",
    description:
      "À partir d’un cours importé — PDF, document bureautique, photo ou texte — Capte prépare un résumé, une fiche de révision, un QCM corrigé et une explication simplifiée.",
    url: "https://capte.vercel.app",
    github: "https://github.com/Yekzan1/capte",
    donnees: "Supabase · PostgreSQL · authentification · stockage de fichiers",
  },
  {
    titre: "MindLoop",
    type: "Carte sociale",
    description:
      "Une carte géographique interactive où les zones, les relations entre amis et leur présence se mettent à jour en temps réel.",
    url: "https://mindloop-mu.vercel.app",
    github: "https://github.com/Yekzan1/MindLoop",
    donnees: "Supabase · PostgreSQL · présence en temps réel",
  },
  {
    titre: "Portail de la mairie d’Arnas",
    type: "Projet de BTS",
    description:
      "Un portail citoyen qui rassemble les informations municipales, l’annuaire et les démarches en ligne.",
    url: "https://mairie-arnas.vercel.app",
    github: "https://github.com/Yekzan1/mairie-arnas",
    donnees: "Accessibilité · démarches administratives",
  },
];

export const COMPETENCES = [
  {
    titre: "PHP et applications web",
    description:
      "PHP, Laravel, programmation orientée objet, MVC, DAO, routage et validation des données.",
  },
  {
    titre: "Java et programmation objet",
    description:
      "Classes, héritage, encapsulation et collections pour structurer un programme et ses responsabilités.",
  },
  {
    titre: "Bases de données",
    description:
      "SQL, MySQL, PostgreSQL avec Supabase, conception relationnelle, jointures et modélisation Merise/UML.",
  },
  {
    titre: "Intégration web et CMS",
    description:
      "JavaScript, CSS, WordPress, DIVI, Elementor, Spectra et PrestaShop.",
  },
  {
    titre: "Mise en production",
    description:
      "Git/GitHub, Docker, Vercel, hébergement Infomaniak, DNS, SSL, Linux et déploiement FTP.",
  },
  {
    titre: "Qualité et référencement",
    description:
      "Recette fonctionnelle, suivi des anomalies, SEO technique, Google Analytics et conformité RGPD.",
  },
  {
    titre: "Autres langages et environnements",
    description:
      "Python pour l’extraction de données, C pour la gestion mémoire, Linux Debian, Windows Server, VMware et Cisco.",
  },
];

export const FORMATIONS = [
  {
    diplome: "BTS SIO · option SLAM",
    periode: "2025 – 2027",
    etablissement: "Business School by CSND · Campus du Beaujolais",
    detail:
      "Développement logiciel, programmation orientée objet, bases de données et conception d’applications métiers.",
  },
  {
    diplome: "Licence 3 Informatique",
    periode: "À partir de septembre 2027",
    etablissement: "Business School by CSND · Campus du Beaujolais",
    detail: "Formation en alternance sur un an.",
  },
];

export const LOISIR =
  "Je joue du violon au Conservatoire de Villefranche-sur-Saône depuis dix ans.";
