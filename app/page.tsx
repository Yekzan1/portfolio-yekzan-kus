"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  AUTRES_REALISATIONS,
  COMPETENCES,
  FORMATIONS,
  INFOS_PERSONNELLES,
  LOISIR,
  PROJETS_APPLICATIFS,
  REALISATIONS,
} from "@/lib/data";

type Projet = (typeof REALISATIONS)[number];
type Experience = (typeof AUTRES_REALISATIONS)[number];

const pseudoCodeInscription = `donnees = valider_le_formulaire_avec_zod(formulaire)\nutilisateur_id = null\norganisation_id = null\n\nessayer :\n    utilisateur = creer_le_compte_clerk(donnees)\n    utilisateur_id = utilisateur.id\n\n    organisation = creer_le_workspace(donnees)\n    organisation_id = organisation.id\n\n    rattacher_utilisateur(organisation, role="ADMIN")\n    ouvrir_le_sous_domaine(organisation.slug)\n\nsauf erreur :\n    si utilisateur_id existe : supprimer_le_compte_clerk(utilisateur_id)\n    si organisation_id existe : supprimer_le_workspace(organisation_id)\n    retourner_une_erreur_explicite`;

export default function Page() {
  const [projetOuvert, setProjetOuvert] = useState<Projet | null>(null);
  const [experienceOuverte, setExperienceOuverte] = useState<Experience | null>(null);
  const [menuOuvert, setMenuOuvert] = useState(false);

  useEffect(() => {
    if (!projetOuvert && !experienceOuverte) return;
    const fermerAvecEchap = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProjetOuvert(null);
        setExperienceOuverte(null);
      }
    };
    const overflowInitial = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", fermerAvecEchap);
    return () => {
      document.body.style.overflow = overflowInitial;
      window.removeEventListener("keydown", fermerAvecEchap);
    };
  }, [projetOuvert, experienceOuverte]);

  const fermerMenu = () => setMenuOuvert(false);
  const capturesProjet = projetOuvert
    ? [
        {
          image: projetOuvert.image,
          alt: projetOuvert.imageAlt,
          legende: projetOuvert.id === "afterish" ? "Page d’accueil After’ish" : "Tableau de bord de Nexus Flow OS",
          width: projetOuvert.id === "afterish" ? 1920 : 2396,
          height: projetOuvert.id === "afterish" ? 1200 : 727,
        },
        {
          image: projetOuvert.capture.image,
          alt: projetOuvert.capture.alt,
          legende: projetOuvert.capture.legende,
          width: projetOuvert.id === "afterish" ? 1299 : 1297,
          height: projetOuvert.id === "afterish" ? 675 : 777,
        },
        ...("capturesSupplementaires" in projetOuvert ? projetOuvert.capturesSupplementaires ?? [] : []),
      ]
    : [];

  return (
    <div className="portfolio-page">
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <header className="old-header">
        <div className="conteneur header-inner">
          <a className="brand-name" href="#accueil">{INFOS_PERSONNELLES.nom}</a>
          <nav className="desktop-nav" aria-label="Navigation principale">
            <a href="#projets">Projets</a>
            <a href="#parcours">Expériences</a>
            <a href="#competences">Compétences</a>
            <a href="#contact">Contact</a>
            <a className="cv-nav" href={INFOS_PERSONNELLES.cvPdf} download="CV-Yekzan-KUS.pdf">CV (PDF)</a>
          </nav>
          <button className="menu-toggle" type="button" aria-expanded={menuOuvert} aria-controls="menu-mobile" aria-label={menuOuvert ? "Fermer le menu" : "Ouvrir le menu"} onClick={() => setMenuOuvert(!menuOuvert)}>
            <span /><span /><span />
          </button>
        </div>
        {menuOuvert && <nav id="menu-mobile" className="mobile-nav" aria-label="Navigation mobile">
          <a href="#projets" onClick={fermerMenu}>Projets</a><a href="#parcours" onClick={fermerMenu}>Expériences</a><a href="#competences" onClick={fermerMenu}>Compétences</a><a href="#contact" onClick={fermerMenu}>Contact</a><a href={INFOS_PERSONNELLES.cvPdf} download onClick={fermerMenu}>Télécharger mon CV (PDF)</a>
        </nav>}
      </header>

      <main id="contenu" className="conteneur main-content">
        <section className="profile-section" id="accueil">
          <div className="profile-copy">
            <p className="profile-date">Septembre 2027 · Alternance d’un an · Licence 3 Informatique</p>
            <h1>{INFOS_PERSONNELLES.nom}</h1>
            <p className="profile-role">Développement web et logiciel</p>
            <p className="profile-bio">{INFOS_PERSONNELLES.bio}</p>
            <div className="profile-facts"><span>{INFOS_PERSONNELLES.localisation}</span><span>Anglais technique</span><span>Violon au conservatoire</span></div>
            <div className="profile-links">
              <a className="button button-dark" href={`mailto:${INFOS_PERSONNELLES.email}`}>Me contacter</a>
              <a className="button button-light" href={INFOS_PERSONNELLES.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="button button-light" href={INFOS_PERSONNELLES.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="button button-light cv-mobile" href={INFOS_PERSONNELLES.cvPdf} download>CV (PDF)</a>
            </div>
          </div>
          <div className="profile-photo"><Image src={INFOS_PERSONNELLES.portrait} alt="Portrait de Yekzan KUS" fill priority sizes="(max-width: 640px) 112px, 144px" /></div>
        </section>

        <section id="projets" className="content-section">
          <div className="section-title"><div><h2>Réalisations en entreprise</h2><p>Projets auxquels j’ai contribué pendant mes stages.</p></div></div>
          <div className="project-cards">
            {REALISATIONS.map((projet) => (
              <article className="featured-card" key={projet.id}>
                <div className={`featured-image${projet.id === "nexus-flow" ? " featured-image--dashboard" : ""}`}><Image src={projet.image} alt={projet.imageAlt} fill sizes="(max-width: 700px) 100vw, 42vw" /></div>
                <div className="featured-content">
                  <div className="card-meta"><span>{projet.entreprise}</span><span>{projet.periode}</span></div>
                  <p className="card-kicker">{projet.id === "afterish" ? "Site associatif · WordPress" : "CRM multi-entreprise"}</p>
                  <h3>{projet.titre}</h3>
                  <p className="card-subtitle">{projet.sousTitre}</p>
                  <p className="card-description">{"resume" in projet ? projet.resume : projet.introduction}</p>
                  {projet.id !== "nexus-flow" && <div className="card-facts">{projet.resultats.map((resultat) => <span key={resultat.libelle}><strong>{resultat.valeur}</strong> {resultat.libelle}</span>)}</div>}
                  <div className="technology-line">{projet.technologies}</div>
                  <div className="card-actions">
                    <button className="button button-dark" type="button" onClick={() => setProjetOuvert(projet)}>Voir les détails</button>
                    <a className="button button-light" href={projet.lien} target="_blank" rel="noreferrer">{projet.id === "afterish" ? "Aller sur le site" : "Ouvrir la connexion"}<span aria-hidden="true"> ↗</span></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="parcours" className="content-section">
          <div className="section-title"><div><h2>Autres expériences</h2><p>Les sites et outils que j’ai réalisés au cours de mes stages.</p></div></div>
          <div className="experience-cards">{AUTRES_REALISATIONS.map((experience) => {
            const preview = "vignette" in experience
              ? { ...experience.captures[0], ...experience.vignette }
              : experience.captures[0];
            return <article className="experience-card" key={experience.id}>
              {preview.url
                ? <a className={`experience-card-preview${experience.id === "rougevert" ? " experience-card-preview--unsa" : ""}`} href={preview.url} target="_blank" rel="noreferrer" aria-label={`Ouvrir le site : ${preview.titre}`}><Image src={preview.src} alt={preview.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 500px" /></a>
                : <button className="experience-card-preview" type="button" onClick={() => setExperienceOuverte(experience)} aria-label={`Voir les détails : ${experience.entreprise}`}><Image src={preview.src} alt={preview.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 500px" /></button>}
              <div className="experience-card-body">
                <header className="experience-card-header"><div><p className="experience-date">{experience.entreprise} · {experience.periode}</p><h3>{experience.role}</h3></div></header>
                <div className="experience-card-copy"><p className="experience-summary">{experience.description}</p><p className="technology-line">{experience.technologies}</p></div>
                <div className="experience-card-actions">
                  {experience.captures.filter((capture) => capture.url).map((capture) => <a className="button button-light" key={capture.src} href={capture.url} target="_blank" rel="noreferrer">{"lienLabel" in capture ? capture.lienLabel : "Voir le site"}<span aria-hidden="true"> ↗</span></a>)}
                  <button className="button button-dark" type="button" onClick={() => setExperienceOuverte(experience)}>Voir les détails</button>
                </div>
              </div>
            </article>;
          })}</div>
        </section>

        <section className="content-section">
          <div className="section-title"><div><h2>Projets applicatifs</h2><p>Projets personnels et scolaires.</p></div></div>
          <div className="small-project-grid">{PROJETS_APPLICATIFS.map((projet) => <article className="small-project" key={projet.titre}><p className="small-project-type">{projet.type}</p><h3>{projet.titre}</h3><p>{projet.description}</p><p className="technology-line">{projet.donnees}</p><div className="small-project-links"><a href={projet.url} target="_blank" rel="noreferrer">Voir le projet ↗</a><a href={projet.github} target="_blank" rel="noreferrer">Code ↗</a></div></article>)}</div>
        </section>

        <section id="competences" className="content-section two-column-section">
          <div><div className="section-title"><div><h2>Compétences techniques</h2><p>Les langages, outils et méthodes que j’utilise.</p></div></div><div className="skill-cards">{COMPETENCES.map((competence) => <article className="skill-card" key={competence.titre}><h3>{competence.titre}</h3><p>{competence.description}</p></article>)}</div></div>
          <div><div className="section-title"><div><h2>Formation</h2><p>Mon parcours en informatique.</p></div></div><div className="education-list">{FORMATIONS.map((formation) => <article className="education-card" key={formation.diplome}><div><h3>{formation.diplome}</h3><p>{formation.etablissement}</p></div><span>{formation.periode}</span><p>{formation.detail}</p></article>)}</div><div className="interest-card"><h3>En dehors du développement</h3><p>{LOISIR}</p></div></div>
        </section>

        <section id="contact" className="contact-section"><div><h2>Contact</h2><p>Je recherche une alternance d’un an en développement web ou logiciel pour ma Licence 3, à partir de septembre 2027.</p></div><div className="contact-list"><a href={`mailto:${INFOS_PERSONNELLES.email}`}>{INFOS_PERSONNELLES.email}</a><a href={`tel:${INFOS_PERSONNELLES.telephoneBrut}`}>{INFOS_PERSONNELLES.telephone}</a><span>{INFOS_PERSONNELLES.localisation}</span></div></section>
      </main>

      <footer className="old-footer"><div className="conteneur footer-inner"><p>© {new Date().getFullYear()} {INFOS_PERSONNELLES.nom}</p><div><a href={INFOS_PERSONNELLES.github} target="_blank" rel="noreferrer">GitHub</a><a href={INFOS_PERSONNELLES.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={INFOS_PERSONNELLES.cvPdf} download>CV PDF</a></div></div></footer>

      {projetOuvert && <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setProjetOuvert(null); }}>
        <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="modal-heading"><div><p className="card-meta">{projetOuvert.entreprise} · {projetOuvert.periode}</p><h2 id="modal-title">{projetOuvert.titre}</h2><p>{projetOuvert.sousTitre}</p></div><button className="modal-close" type="button" aria-label="Fermer les détails" onClick={() => setProjetOuvert(null)}>×</button></div>
          <p className="modal-intro">{projetOuvert.introduction}</p>
          <div className="modal-results">{projetOuvert.resultats.map((resultat) => <div key={resultat.libelle}><strong>{resultat.valeur}</strong><span>{resultat.libelle}</span></div>)}</div>
          <div className="modal-section"><h3>Ce que j’ai fait</h3><ul>{projetOuvert.mission.map((mission) => <li key={mission}>{mission}</li>)}</ul></div>
          <div className="modal-section"><h3>Captures du projet</h3><div className="modal-gallery">{capturesProjet.map((capture) => <figure key={capture.image}><Image src={capture.image} alt={capture.alt} width={capture.width} height={capture.height} sizes="(max-width: 720px) 100vw, 50vw" /><figcaption>{capture.legende}</figcaption></figure>)}</div></div>
          {projetOuvert.code && <div className="modal-section"><h3>Exemple de code PHP</h3><p>{projetOuvert.code.explication}</p><div className="code-window"><div>{projetOuvert.code.fichier}</div><pre><code>{projetOuvert.code.extrait}</code></pre></div></div>}
          {projetOuvert.id === "nexus-flow" && <div className="modal-section"><h3>Correction du parcours d’inscription</h3><p>Le rapport décrit un compte qui pouvait rester créé sans workspace utilisable. J’ai corrigé le flux pour valider les données, créer l’utilisateur et son organisation, puis supprimer les éléments déjà créés si une étape échoue.</p><div className="code-window"><div>Provisionnement · extrait schématique fidèle au correctif</div><pre><code>{pseudoCodeInscription}</code></pre></div><ol className="modal-steps">{projetOuvert.etapesInscription?.map((etape) => <li key={etape}>{etape}</li>)}</ol></div>}
          <div className="modal-bottom"><span className="technology-line">{projetOuvert.technologies}</span><a className="button button-dark" href={projetOuvert.lien} target="_blank" rel="noreferrer">{projetOuvert.id === "afterish" ? "Aller sur le site" : "Ouvrir la connexion"}<span aria-hidden="true"> ↗</span></a></div>
        </section>
      </div>}

      {experienceOuverte && <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setExperienceOuverte(null); }}>
        <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="experience-modal-title">
          <div className="modal-heading"><div><p className="card-meta">{experienceOuverte.entreprise} · {experienceOuverte.periode}</p><h2 id="experience-modal-title">{experienceOuverte.role}</h2></div><button className="modal-close" type="button" aria-label="Fermer les détails" onClick={() => setExperienceOuverte(null)}>×</button></div>
          <p className="modal-intro">{experienceOuverte.description}</p>
          <div className="modal-section"><h3>Missions réalisées</h3><ul>{experienceOuverte.missions.map((mission) => <li key={mission}>{mission}</li>)}</ul></div>
          <div className="modal-section"><h3>Captures des sites et outils</h3><div className="modal-gallery experience-detail-gallery">{experienceOuverte.captures.map((capture) => <figure key={capture.src}><div className="experience-detail-shot"><Image src={capture.src} alt={capture.alt} fill sizes="(max-width: 720px) 100vw, 50vw" /></div><figcaption>{capture.titre}{capture.url && <> · <a href={capture.url} target="_blank" rel="noreferrer">{"lienLabel" in capture ? capture.lienLabel : "Voir le site"} ↗</a></>}</figcaption></figure>)}</div></div>
          {"code" in experienceOuverte && experienceOuverte.code && <div className="modal-section"><h3>Code Python du stage</h3><p>Extraits des scripts conservés dans mes archives. Les fichiers téléchargeables reprennent les versions réalisées pendant le stage.</p>{experienceOuverte.code.map((source) => <div className="experience-code-item" key={source.fichier}><h4>{source.titre}</h4><p>{source.explication}</p><div className="code-window"><div>{source.fichier.split("/").pop()}</div><pre><code>{source.extrait}</code></pre></div><a className="button button-light code-download" href={source.fichier} download>{source.nomFichier}</a></div>)}</div>}
          <div className="modal-bottom experience-modal-bottom"><span className="technology-line">{experienceOuverte.technologies}</span><div className="experience-modal-actions">{experienceOuverte.captures.filter((capture) => capture.url).map((capture) => <a className="button button-dark" key={capture.src} href={capture.url} target="_blank" rel="noreferrer">{"lienLabel" in capture ? capture.lienLabel : "Voir le site"}<span aria-hidden="true"> ↗</span></a>)}</div></div>
        </section>
      </div>}
    </div>
  );
}
