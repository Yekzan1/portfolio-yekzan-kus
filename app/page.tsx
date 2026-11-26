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

const pseudoCodeInscription = `valider les informations saisies\ncreer le compte utilisateur\ncreer l'espace de travail\n\nsi une etape echoue :\n    supprimer les elements deja crees\n    retourner une erreur explicite\n\nsinon :\n    attribuer le role administrateur\n    ouvrir l'espace de travail`;

export default function Page() {
  const [projetOuvert, setProjetOuvert] = useState<Projet | null>(null);
  const [menuOuvert, setMenuOuvert] = useState(false);

  useEffect(() => {
    if (!projetOuvert) return;
    const fermerAvecEchap = (event: KeyboardEvent) => {
      if (event.key === "Escape") setProjetOuvert(null);
    };
    const overflowInitial = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", fermerAvecEchap);
    return () => {
      document.body.style.overflow = overflowInitial;
      window.removeEventListener("keydown", fermerAvecEchap);
    };
  }, [projetOuvert]);

  const fermerMenu = () => setMenuOuvert(false);

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
                <div className="featured-image"><Image src={projet.image} alt={projet.imageAlt} fill sizes="(max-width: 900px) 100vw, 42vw" /></div>
                <div className="featured-content">
                  <div className="card-meta"><span>{projet.entreprise}</span><span>{projet.periode}</span></div>
                  <p className="card-kicker">{projet.id === "afterish" ? "Site associatif · WordPress" : "CRM multi-entreprise"}</p>
                  <h3>{projet.titre}</h3>
                  <p className="card-subtitle">{projet.sousTitre}</p>
                  <p className="card-description">{projet.introduction}</p>
                  <div className="card-facts">{projet.resultats.map((resultat) => <span key={resultat.libelle}><strong>{resultat.valeur}</strong> {resultat.libelle}</span>)}</div>
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
          <div className="section-title"><div><h2>Expériences</h2><p>Les autres stages et missions réalisés en agence.</p></div></div>
          <div className="experience-list">{AUTRES_REALISATIONS.map((experience) => <article className="experience-row" key={experience.entreprise}><div className="experience-date">{experience.periode}</div><div><h3>{experience.entreprise}</h3><p className="experience-role">{experience.role}</p><p>{experience.description}</p></div></article>)}</div>
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
          <div className="modal-section"><h3>Captures du projet</h3><div className="modal-gallery"><figure><Image src={projetOuvert.image} alt={projetOuvert.imageAlt} width={1920} height={1200} sizes="(max-width: 720px) 100vw, 50vw" /><figcaption>{projetOuvert.id === "afterish" ? "Page d’accueil After’ish" : "Tableau de bord Nexus Flow OS"}</figcaption></figure><figure><Image src={projetOuvert.capture.image} alt={projetOuvert.capture.alt} width={projetOuvert.id === "afterish" ? 1299 : 2466} height={projetOuvert.id === "afterish" ? 675 : 1620} sizes="(max-width: 720px) 100vw, 50vw" /><figcaption>{projetOuvert.capture.legende}</figcaption></figure></div></div>
          {projetOuvert.code && <div className="modal-section"><h3>Exemple de code PHP</h3><p>{projetOuvert.code.explication}</p><div className="code-window"><div>{projetOuvert.code.fichier}</div><pre><code>{projetOuvert.code.extrait}</code></pre></div></div>}
          {projetOuvert.id === "nexus-flow" && <div className="modal-section"><h3>Logique du parcours d’inscription</h3><p>Schéma simplifié du traitement que j’ai corrigé, présenté en pseudo-code.</p><div className="code-window"><div>Inscription · étapes et nettoyage en cas d’échec</div><pre><code>{pseudoCodeInscription}</code></pre></div><ol className="modal-steps">{projetOuvert.etapesInscription?.map((etape) => <li key={etape}>{etape}</li>)}</ol></div>}
          <div className="modal-bottom"><span className="technology-line">{projetOuvert.technologies}</span><a className="button button-dark" href={projetOuvert.lien} target="_blank" rel="noreferrer">{projetOuvert.id === "afterish" ? "Aller sur le site" : "Ouvrir la connexion"}<span aria-hidden="true"> ↗</span></a></div>
        </section>
      </div>}
    </div>
  );
}
