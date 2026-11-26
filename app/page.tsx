import Image from "next/image";
import {
  AUTRES_REALISATIONS,
  COMPETENCES,
  FORMATIONS,
  INFOS_PERSONNELLES,
  LOISIR,
  PROJETS_APPLICATIFS,
  REALISATIONS,
} from "@/lib/data";

export default function Page() {
  const afterish = REALISATIONS[0];
  const saas = REALISATIONS[1];

  return (
    <>
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <header className="site-header">
        <div className="wrap header-inner">
          <a className="wordmark" href="#accueil">Yekzan KUS<span>.</span></a>
          <nav aria-label="Navigation principale">
            <a href="#realisations">Réalisations</a>
            <a href="#parcours">Parcours</a>
            <a href="#competences">Compétences</a>
            <a href="#contact">Contact</a>
            <a className="cv-link" href={INFOS_PERSONNELLES.cvPdf} download="CV-Yekzan-KUS.pdf">Mon CV</a>
          </nav>
        </div>
      </header>

      <main id="contenu" className="wrap">
        <section className="hero" id="accueil">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio · Limas, Rhône</p>
            <h1>Développer des outils utiles,<br />et comprendre comment ils tiennent.</h1>
            <p className="hero-intro">Je m’appelle Yekzan. Je prépare un BTS SIO, option SLAM, et poursuis en Licence 3 Informatique à la rentrée 2027. Je cherche une alternance d’un an où contribuer à des projets web et logiciels concrets.</p>
            <div className="hero-meta"><span>Rentrée septembre 2027</span><span>Licence 3 Informatique</span><span>Alternance sur un an</span></div>
            <div className="hero-links">
              <a href={`mailto:${INFOS_PERSONNELLES.email}`}>Me contacter <span aria-hidden="true">↗</span></a>
              <a href={INFOS_PERSONNELLES.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              <a href={INFOS_PERSONNELLES.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="portrait-frame"><Image src={INFOS_PERSONNELLES.portrait} alt="Yekzan KUS" fill priority sizes="(max-width: 760px) 42vw, 260px" /></div>
          <div className="hero-rule"><span>PHP · Laravel · Java · Bases de données</span><span>01 / 04</span></div>
        </section>

        <section id="realisations" className="section realisations">
          <div className="section-heading"><div><p className="eyebrow">Travail en entreprise</p><h2>Réalisations</h2></div><p>Deux projets menés pendant mon stage chez Nexus Flow, avec des rôles différents et des résultats concrets.</p></div>

          <article className="case-study" aria-labelledby="afterish-title">
            <div className="case-topline"><span>01 — {afterish.entreprise}</span><span>{afterish.periode}</span></div>
            <div className="case-intro"><div><p className="eyebrow">Site associatif · WordPress</p><h3 id="afterish-title">{afterish.titre}</h3><p className="case-subtitle">{afterish.sousTitre}</p></div><p>{afterish.introduction}</p></div>
            <a className="image-link" href={afterish.lien} target="_blank" rel="noreferrer" aria-label="Voir le site After’ish">
              <Image src={afterish.image} alt={afterish.imageAlt} width={1920} height={1200} sizes="(max-width: 760px) 100vw, 1100px" />
            </a>
            <div className="facts-row">{afterish.resultats.map((fact) => <div className="fact" key={fact.libelle}><strong>{fact.valeur}</strong><span>{fact.libelle}</span></div>)}</div>
            <div className="case-details">
              <div><p className="eyebrow">Ce que j’ai réalisé</p><ul className="plain-list">{afterish.mission.map((item) => <li key={item}>{item}</li>)}</ul></div>
              {afterish.code && <div className="code-note"><p className="eyebrow">Un exemple de code</p><p>{afterish.code.explication}</p><div className="code-label">{afterish.code.fichier}</div><pre><code>{afterish.code.extrait}</code></pre></div>}
            </div>
            <figure className="supporting-image"><Image src={afterish.capture.image} alt={afterish.capture.alt} width={1299} height={675} sizes="(max-width: 760px) 100vw, 800px" /><figcaption>{afterish.capture.legende}</figcaption></figure>
            <div className="case-bottom"><span>{afterish.technologies}</span><a href={afterish.lien} target="_blank" rel="noreferrer">Visiter After’ish <span aria-hidden="true">↗</span></a></div>
          </article>

          <article className="case-study second-case" aria-labelledby="saas-title">
            <div className="case-topline"><span>02 — {saas.entreprise}</span><span>{saas.periode}</span></div>
            <div className="case-intro"><div><p className="eyebrow">CRM multi-entreprise · Nexus Flow OS</p><h3 id="saas-title">{saas.titre}</h3><p className="case-subtitle">{saas.sousTitre}</p></div><p>{saas.introduction}</p></div>
            <Image className="case-image" src={saas.image} alt={saas.imageAlt} width={2466} height={727} sizes="(max-width: 760px) 100vw, 1100px" />
            <div className="case-details saas-details">
              <div><p className="eyebrow">Mon intervention</p><ul className="plain-list">{saas.mission.map((item) => <li key={item}>{item}</li>)}</ul></div>
              <div><p className="eyebrow">Parcours d’inscription vérifié</p><ol className="steps-list">{saas.etapesInscription?.map((step, index) => <li key={step}><span>0{index + 1}</span><p>{step}</p></li>)}</ol></div>
            </div>
            <figure className="supporting-image"><Image src={saas.capture.image} alt={saas.capture.alt} width={2466} height={1620} sizes="(max-width: 760px) 100vw, 800px" /><figcaption>{saas.capture.legende}</figcaption></figure>
            <div className="case-bottom"><span>{saas.technologies}</span><a href={saas.lien} target="_blank" rel="noreferrer">Accéder à la connexion <span aria-hidden="true">↗</span></a></div>
          </article>
        </section>

        <section id="parcours" className="section parcours">
          <div className="section-heading"><div><p className="eyebrow">Expérience professionnelle</p><h2>Le parcours</h2></div><p>Stages en agence, du développement de sites à la mise en place de fonctionnalités métier.</p></div>
          <div className="experience-list">{AUTRES_REALISATIONS.map((experience) => <article className="experience" key={experience.entreprise}><div className="experience-date">{experience.periode}</div><div><h3>{experience.entreprise}</h3><p className="experience-role">{experience.role}</p><p>{experience.description}</p></div></article>)}</div>
        </section>

        <section className="section side-projects">
          <div className="section-heading"><div><p className="eyebrow">En dehors des stages</p><h2>Projets personnels et scolaires</h2></div><p>Des projets où je travaille aussi bien l’interface que le stockage des données.</p></div>
          <div className="project-list">{PROJETS_APPLICATIFS.map((project, index) => <article className="project" key={project.titre}><div className="project-index">0{index + 1}</div><div className="project-body"><p className="eyebrow">{project.type}</p><h3>{project.titre}</h3><p>{project.description}</p><span className="project-stack">{project.donnees}</span></div><div className="project-links"><a href={project.url} target="_blank" rel="noreferrer">Voir le projet ↗</a><a href={project.github} target="_blank" rel="noreferrer">Code ↗</a></div></article>)}</div>
        </section>

        <section id="competences" className="section skills-section">
          <div className="section-heading"><div><p className="eyebrow">Outils et méthodes</p><h2>Compétences</h2></div><p>Des bases de programmation aux sites mis en ligne, acquises en cours et en stage.</p></div>
          <div className="skills-list">{COMPETENCES.map((skill) => <article className="skill" key={skill.titre}><h3>{skill.titre}</h3><p>{skill.description}</p></article>)}</div>
        </section>

        <section className="section studies-section">
          <div><p className="eyebrow">Études</p><h2>Formation</h2>{FORMATIONS.map((formation) => <article className="study" key={formation.diplome}><div><h3>{formation.diplome}</h3><p>{formation.etablissement}</p></div><span>{formation.periode}</span><p className="study-detail">{formation.detail}</p></article>)}</div>
          <aside className="interest"><p className="eyebrow">En dehors du code</p><h3>Le violon</h3><p>{LOISIR}</p></aside>
        </section>

        <section id="contact" className="contact-section"><p className="eyebrow">Pour la rentrée 2027</p><h2>Parlons de votre alternance.</h2><p>Je recherche une alternance d’un an en développement web ou logiciel, dans le cadre de ma Licence 3 Informatique.</p><div className="contact-links"><a href={`mailto:${INFOS_PERSONNELLES.email}`}>{INFOS_PERSONNELLES.email}</a><a href={`tel:${INFOS_PERSONNELLES.telephoneBrut}`}>{INFOS_PERSONNELLES.telephone}</a><span>{INFOS_PERSONNELLES.localisation}</span></div></section>
      </main>

      <footer className="site-footer"><div className="wrap footer-inner"><span>© {new Date().getFullYear()} Yekzan KUS</span><div><a href={INFOS_PERSONNELLES.github} target="_blank" rel="noreferrer">GitHub</a><a href={INFOS_PERSONNELLES.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={INFOS_PERSONNELLES.cvPdf} download>CV PDF</a></div></div></footer>
    </>
  );
}
