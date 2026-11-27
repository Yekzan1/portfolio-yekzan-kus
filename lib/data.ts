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
  bio: "Je pars d’un besoin concret et je cherche comment le résoudre avec du code. Je développe des sites et des applications, et je crée des automatisations pour éviter les tâches répétitives. J’aime aussi configurer des workflows avec Claude Code, Codex ou Antigravity CLI : sous-agents, serveurs MCP, skills personnalisés et commandes slash.",
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
    resume: "Inscription fiable, données séparées par entreprise et parcours CRM vérifiés.",
    image: "/realisations/portfolio/saas-dashboard-card.webp",
    imageAlt: "Indicateurs et activité du tableau de bord Nexus Flow OS",
    lien: "https://accounts.agence-nexusflow.com/sign-in?redirect_url=https%3A%2F%2Fhf.agence-nexusflow.com%2Fdashboard",
    lienLabel: "Ouvrir le portail de connexion",
    resultats: [
      { valeur: "Inscription", libelle: "validation et correction d’un échec partiel" },
      { valeur: "Données", libelle: "vérification de l’isolation entre entreprises" },
      { valeur: "Recette", libelle: "parcours CRM testés et anomalies consignées" },
    ],
    mission: [
      "J’ai étudié l’architecture de Nexus Flow OS et ses espaces clients afin de comprendre le parcours d’inscription, les organisations et leurs utilisateurs.",
      "J’ai isolé un échec d’inscription qui pouvait laisser un compte créé dans le service d’authentification sans espace de travail utilisable.",
      "Avec la validation de mon tuteur, j’ai renforcé la validation des champs et corrigé le nettoyage des ressources créées si une étape du provisionnement échoue.",
      "J’ai vérifié le rattachement du compte à son organisation et les règles d’isolation des données entre entreprises (Row-Level Security).",
      "J’ai contrôlé le routage par sous-domaine et le middleware qui associe un espace client à son organisation.",
      "J’ai rédigé et exécuté une recette fonctionnelle : connexion, inscription, isolation des données, création et déplacement d’opportunités dans le Kanban, désinscription des courriels.",
      "J’ai vérifié que les campagnes de relance respectent la liste de désinscription et participé aux vérifications de mise en production sur le VPS (migrations, processus PM2 et certificats SSL).",
    ],
    etapesInscription: [
      "Valider les informations saisies et refuser les sous-domaines réservés.",
      "Créer le compte utilisateur, puis l’espace de travail et son compte administrateur.",
      "Si une étape échoue, supprimer les éléments déjà créés pour éviter un compte orphelin.",
    ],
    capture: {
      image: "/realisations/saas-ia-knowledge.png",
      alt: "Réglages des documents de la base de connaissances d’un espace client",
      legende: "Documents et base de connaissances",
    },
    capturesSupplementaires: [
      {
        image: "/realisations/saas-dashboard.png",
        alt: "Vue générale du tableau de bord Nexus Flow OS",
        legende: "Vue générale du CRM",
        width: 1322,
        height: 797,
      },
      {
        image: "/realisations/saas-kanban.png",
        alt: "Paramètres de marque d’un autre workspace Nexus Flow OS",
        legende: "Thème d’un autre espace client",
        width: 1278,
        height: 884,
      },
      {
        image: "/realisations/saas-branding.png",
        alt: "Formulaire de personnalisation du workspace Nexus Flow OS",
        legende: "Paramètres de marque et du workspace",
        width: 1159,
        height: 705,
      },
      {
        image: "/realisations/saas-real-0.png",
        alt: "Échange de test avec l’assistant documentaire de Nexus Flow OS",
        legende: "Test du module de réponse documentaire",
        width: 1428,
        height: 899,
      },
      {
        image: "/realisations/saas-signup-code.png",
        alt: "Éditeur de code avec le script de préparation des certificats du domaine",
        legende: "Environnement de développement et préparation SSL",
        width: 1446,
        height: 919,
      },
    ],
    technologies: "PostgreSQL · Clerk · Prisma · Inngest",
  },
];

export const AUTRES_REALISATIONS = [
  {
    id: "unimage",
    entreprise: "Unimage Communication",
    periode: "05/2025 – 07/2025",
    role: "Deux sites WordPress et une boutique PrestaShop",
    description:
      "J’ai réalisé deux sites vitrines WordPress pour Lyon et Villefranche-sur-Saône, puis participé à la mise en place de la boutique Cadéo Sport sous PrestaShop.",
    missions: [
      "Création de deux sites WordPress : pages et mise en page avec Spectra pour le site de Lyon, puis avec Elementor pour celui de Villefranche-sur-Saône.",
      "Préparation et intégration des contenus des pages : services, tarifs, contact et éléments de référencement local.",
      "Intégration d’un quiz de cinq questions pour orienter les visiteurs vers le type de site adapté, ainsi que d’un module de discussion et d’appels au contact ou au devis.",
      "Mise en place de la gestion du consentement avec CookieYes et préparation des pages de mentions légales et de cookies.",
      "Mise en place du catalogue PrestaShop Cadéo Sport : catégories et fiches produits à partir des éléments fournis.",
    ],
    technologies: "WordPress · Elementor · Spectra · PrestaShop · CookieYes · HTML · CSS · JavaScript",
    captures: [
      {
        src: "/realisations/lyon-1216.webp",
        alt: "Page d’accueil du site Agence Site Internet Lyon",
        titre: "Site WordPress · Lyon",
        url: "https://www.agence-site-internet-lyon.fr/",
        lienLabel: "Voir le site · Lyon",
      },
      {
        src: "/realisations/villefranche-1216.webp",
        alt: "Page d’accueil du site Création Site Internet Villefranche-sur-Saône",
        titre: "Site WordPress · Villefranche",
        url: "https://www.creation-site-internet-villefranche.fr/",
        lienLabel: "Voir le site · Villefranche",
      },
      {
        src: "/realisations/experiences/cadeo-catalogue.webp",
        alt: "Catalogue de produits de la boutique Cadéo Sport sous PrestaShop",
        titre: "Boutique PrestaShop · Cadéo Sport",
      },
    ],
  },
  {
    id: "rougevert",
    entreprise: "Rougevert Communication",
    periode: "18/03 – 12/04/2024",
    role: "Sites de l’UNSA et d’un poète · Recherche PHP",
    description:
      "J’ai créé un site WordPress pour l’UNSA en trois jours, construit un moteur de recherche de fiches métier et mis en ligne un second site consacré aux poèmes de Régis Chouette.",
    vignette: {
      src: "/realisations/experiences/unsa-home-card.webp",
      alt: "Page d’accueil du site UNSA Défense, capture fournie par Yekzan",
    },
    missions: [
      "Création en trois jours du site de l’UNSA sous WordPress et Elementor, avec navigation, pages et mise en page adaptées au contenu de l’organisation.",
      "Création de catégories et d’une boucle WordPress pour publier et organiser les articles.",
      "Développement d’un moteur de recherche en PHP intégré par shortcode : deux menus filtrent les fiches métier par employeur et filière, puis affichent les résultats et leurs documents PDF.",
      "Ajout de la mise à jour des résultats avec Ajax et traitement des recherches sans résultat.",
      "Conception et mise en ligne d’un site WordPress avec Elementor pour le poète Régis Chouette, avec ses poèmes répartis sur plusieurs pages et des liens directs vers chaque texte.",
      "Consultation des données Google Analytics dans le cadre du suivi du site.",
    ],
    technologies: "WordPress · Elementor · PHP · WP_Query · Shortcodes · Ajax · Taxonomies · Google Analytics",
    captures: [
      {
        src: "/realisations/experiences/unsa-recherche.webp",
        alt: "Page de résultats du moteur de recherche de fiches métier de l’UNSA",
        titre: "Recherche de fiches métier · UNSA",
        url: "https://www.unsa-defense.org/",
        lienLabel: "Voir le site UNSA",
      },
      {
        src: "/realisations/experiences/rougevert-poemes.webp",
        alt: "Liste de poèmes organisée sur le site de Régis Chouette",
        titre: "Site de poésie · Régis Chouette",
      },
    ],
  },
  {
    id: "martingale",
    entreprise: "Martingale & Céleste",
    periode: "27/11 – 22/12/2023",
    role: "Deux outils Python et un site WordPress",
    description:
      "J’ai créé deux outils Python de collecte de données et réalisé un site WordPress avec Divi pendant un stage de quatre semaines.",
    missions: [
      "Création d’un outil de suivi des prix sur des sites de vente : collecte des prix et des URL, export CSV exploitable dans Excel, puis filtrage pour ne garder que les prix qui ont changé.",
      "Création d’un second outil qui parcourt plusieurs pages des Pages Jaunes et collecte le nom, l’adresse, le téléphone et le site web des entreprises pour la prospection.",
      "Création d’un site WordPress avec Divi : personnalisation du thème et du menu, création des pages d’accueil, vitrine, e-commerce, articles et contact.",
      "Rédaction et mise en page d’articles, ajustements CSS et premières optimisations pour le référencement.",
    ],
    technologies: "Python · Requests · BeautifulSoup · Pandas · Selenium · CSV · Excel · WordPress · Divi · CSS",
    captures: [
      {
        src: "/realisations/martingale-1216.webp",
        alt: "Page d’accueil du site WordPress de Martingale & Céleste",
        titre: "Site WordPress · Divi",
        url: "https://martingale-et-celeste.fr/",
        lienLabel: "Voir le site",
      },
    ],
    code: [
      {
        titre: "Suivi des variations de prix · compare_and_save_prices",
        explication:
          "Cette fonction reprend le cœur du script archivé : elle récupère le prix courant, le compare au CSV précédent et conserve les variations détectées.",
        extrait: `def compare_and_save_prices(urls, headers, old_prices):
    changed_prices = []  # Pour enregistrer les changements de prix

    for url in urls:
        new_price = scrape_price(url, headers)

        if new_price is not None:
            if url in old_prices:
                old_price = old_prices[url]
                if new_price != old_price:
                    print(f"Le prix du produit sur {url} a changé. Ancien prix: {old_price}, Nouveau prix: {new_price}")
                    # Ajouter les informations du produit à la liste des prix changés
                    changed_prices.append({'url': url, 'new_price': new_price})
            else:
                print(f"Le prix du produit sur {url} n'a pas d'ancien prix pour la comparaison.")
        else:
            print(f"Le prix du produit sur {url} n'a pas pu être récupéré.")

    return changed_prices`,
        fichier: "/code/suivi-prix-martingale.py",
        nomFichier: "Télécharger le script de suivi des prix",
      },
      {
        titre: "Prospection · extraction des fiches Pages Jaunes",
        explication:
          "Extrait du script Selenium conservé dans mes archives : ouverture des fiches, récupération de leurs coordonnées et ajout des champs avant l’export CSV.",
        extrait: `for company_info in all_company_data:
    driver.get(company_info['company_link'])
    time.sleep(2)

    website = "Site web non trouvé"
    try:
        website_element = driver.find_element(
            By.CSS_SELECTOR,
            "a[href^='http']:not([href*='pagesjaunes'])"
        )
        website = website_element.get_attribute("href")
    except NoSuchElementException:
        pass

    address_element = WebDriverWait(driver, TIMEOUT).until(
        EC.presence_of_element_located((By.CSS_SELECTOR, "div.bi-address"))
    )
    address = address_element.get_attribute("textContent").replace("Voir le plan", "")

    phone_element = WebDriverWait(driver, TIMEOUT).until(
        EC.presence_of_element_located((By.CSS_SELECTOR, "div.number-contact"))
    )
    phone = phone_element.get_attribute("textContent")

    company_info.update({"address": address, "phone": phone, "website": website})`,
        fichier: "/code/pages-jaunes-martingale.py",
        nomFichier: "Télécharger le script Pages Jaunes",
      },
    ],
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
      "Référencement WordPress avec Rank Math SEO et Yoast SEO, optimisation des pages et balises, suivi Google Analytics et conformité RGPD.",
  },
  {
    titre: "Autres langages et environnements",
    description:
      "Python pour l’extraction de données, C pour la gestion mémoire et Linux Debian.",
  },
  {
    titre: "Automatisation et assistants de développement",
    description:
      "Claude Code, Codex et Antigravity CLI : orchestration de workflows avec sous-agents, serveurs MCP, skills personnalisés GitHub, commandes slash et intégration d’APIs LLM Claude, Google et Infomaniak.",
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
