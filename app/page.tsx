"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  INFOS_PERSONNELLES,
  REALISATIONS,
  PROJETS_APPLICATIFS,
  EXPERIENCES,
  COMPETENCES,
  FORMATIONS,
  Realisation,
} from "@/lib/data";

export default function Page() {
  const [projetModal, setProjetModal] = useState<Realisation | null>(null);
  const [menuMobile, setMenuMobile] = useState(false);
  const [imageAgrandie, setImageAgrandie] = useState<{ src: string; titre: string } | null>(null);
  const [codeCopie, setCodeCopie] = useState<string | null>(null);

  const copierCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCodeCopie(id);
    setTimeout(() => setCodeCopie(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-900 selection:bg-neutral-900 selection:text-white">
      {/* Barre de navigation sobre et technique */}
      <header className="sticky top-0 z-30 bg-[#fafafa]/90 backdrop-blur-md border-b border-neutral-200">
        <div className="conteneur flex items-center justify-between h-16">
          <a
            href="#"
            className="font-medium text-neutral-950 text-base tracking-tight hover:text-neutral-600 transition-colors"
          >
            {INFOS_PERSONNELLES.nom}
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600 font-normal">
            <a href="#projets" className="hover:text-neutral-950 transition-colors">
              Projets
            </a>
            <a href="#parcours" className="hover:text-neutral-950 transition-colors">
              Expériences
            </a>
            <a href="#competences" className="hover:text-neutral-950 transition-colors">
              Compétences
            </a>
            <a href="#contact" className="hover:text-neutral-950 transition-colors">
              Contact
            </a>
            <a
              href={INFOS_PERSONNELLES.cvPdf}
              download="CV-Yekzan-KUS.pdf"
              className="px-3.5 py-1.5 text-xs font-medium text-neutral-950 border border-neutral-300 rounded-md hover:bg-neutral-100 transition-colors"
            >
              CV (PDF)
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMenuMobile(!menuMobile)}
            className="md:hidden p-2 text-neutral-700 hover:text-neutral-950 focus:outline-none"
            aria-label="Menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuMobile ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuMobile && (
          <div className="md:hidden border-t border-neutral-200 bg-[#fafafa] px-6 py-4 space-y-3 text-sm">
            <a
              href="#projets"
              onClick={() => setMenuMobile(false)}
              className="block text-neutral-700 hover:text-neutral-950"
            >
              Projets
            </a>
            <a
              href="#parcours"
              onClick={() => setMenuMobile(false)}
              className="block text-neutral-700 hover:text-neutral-950"
            >
              Expériences
            </a>
            <a
              href="#competences"
              onClick={() => setMenuMobile(false)}
              className="block text-neutral-700 hover:text-neutral-950"
            >
              Compétences
            </a>
            <a
              href="#contact"
              onClick={() => setMenuMobile(false)}
              className="block text-neutral-700 hover:text-neutral-950"
            >
              Contact
            </a>
            <a
              href={INFOS_PERSONNELLES.cvPdf}
              download="CV-Yekzan-KUS.pdf"
              className="inline-block px-4 py-2 text-xs font-medium bg-neutral-950 text-white rounded-md mt-1"
            >
              Télécharger mon CV (PDF)
            </a>
          </div>
        )}
      </header>

      <main className="conteneur py-12 sm:py-16 space-y-20">
        {/* En-tête / Profil conforme au CV */}
        <section className="flex flex-col-reverse md:flex-row items-start justify-between gap-8 md:gap-12 pb-12 border-b border-neutral-200">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>Septembre 2027 • Alternance 1 an (Licence 3 Informatique)</span>
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-950">
                {INFOS_PERSONNELLES.nom}
              </h1>
              <p className="text-base text-neutral-600 mt-1 font-medium">
                Développement web • Programmation • Automatisation
              </p>
            </div>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              {INFOS_PERSONNELLES.bio}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-500 pt-1">
              <span>📍 {INFOS_PERSONNELLES.localisation}</span>
              <span>•</span>
              <span>🚗 {INFOS_PERSONNELLES.permis}</span>
              <span>•</span>
              <span>🌐 {INFOS_PERSONNELLES.anglais}</span>
              <span>•</span>
              <span>🎻 {INFOS_PERSONNELLES.violon}</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-sm">
              <a
                href={`mailto:${INFOS_PERSONNELLES.email}`}
                className="px-4 py-2 text-xs sm:text-sm font-medium bg-neutral-950 text-white rounded-md hover:bg-neutral-800 transition-colors"
              >
                {INFOS_PERSONNELLES.email}
              </a>
              <a
                href={`tel:${INFOS_PERSONNELLES.telephoneBrut}`}
                className="px-4 py-2 text-xs sm:text-sm font-medium bg-white border border-neutral-200 text-neutral-800 rounded-md hover:bg-neutral-50 transition-colors"
              >
                {INFOS_PERSONNELLES.telephone}
              </a>
              <a
                href={INFOS_PERSONNELLES.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs sm:text-sm font-medium bg-white border border-neutral-200 text-neutral-800 rounded-md hover:bg-neutral-50 transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href={INFOS_PERSONNELLES.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs sm:text-sm font-medium bg-white border border-neutral-200 text-neutral-800 rounded-md hover:bg-neutral-50 transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="shrink-0">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border border-neutral-300 shadow-sm bg-neutral-100">
              <Image
                src="/photo-cv.webp"
                alt="Photo de Yekzan KUS"
                fill
                priority
                sizes="(max-width: 768px) 112px, 144px"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section 1 : Projets & Réalisations réelles */}
        <section id="projets" className="space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-950">
              Réalisations en entreprise
            </h2>
            <p className="text-sm text-neutral-500 mt-1">
              Plateformes web, SaaS multi-tenant et outils livrés lors de mes stages professionnels.
            </p>
          </div>

          <div className="space-y-10">
            {REALISATIONS.map((projet) => (
              <article
                key={projet.id}
                className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover:border-neutral-300 transition-colors shadow-xs"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Capture d'écran du site */}
                  <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto bg-neutral-100 border-b lg:border-b-0 lg:border-r border-neutral-200 overflow-hidden">
                    <Image
                      src={projet.image}
                      alt={projet.titre}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Fiche d'intervention technique */}
                  <div className="lg:col-span-7 p-6 sm:p-7 flex flex-col justify-between gap-5">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-neutral-500 font-mono">
                        <span className="font-semibold text-neutral-900">{projet.employeur}</span>
                        <span>{projet.periode}</span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-semibold text-neutral-950">
                        {projet.titre}
                      </h3>

                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {projet.description}
                      </p>

                      {projet.noteAcces && (
                        <p className="text-xs text-neutral-600 bg-neutral-50 border border-neutral-200 p-2.5 rounded-md">
                          {projet.noteAcces}
                        </p>
                      )}
                    </div>

                    <div className="space-y-4 pt-4 border-t border-neutral-100">
                      <div className="flex flex-wrap gap-1.5">
                        {projet.stack.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 text-xs bg-neutral-100 text-neutral-700 rounded font-mono"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-2.5 pt-1">
                        <button
                          type="button"
                          onClick={() => setProjetModal(projet)}
                          className="px-3.5 py-1.5 text-xs font-medium bg-neutral-950 text-white rounded-md hover:bg-neutral-800 transition-colors cursor-pointer"
                        >
                          Détails &amp; Code source
                        </button>

                        <a
                          href={projet.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 text-xs font-medium bg-white border border-neutral-200 text-neutral-700 rounded-md hover:bg-neutral-50 transition-colors"
                        >
                          {projet.libelleLien || "Lien principal"} ↗
                        </a>

                        {projet.urlSecours && (
                          <a
                            href={projet.urlSecours}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 text-xs font-medium bg-white border border-neutral-200 text-neutral-700 rounded-md hover:bg-neutral-50 transition-colors"
                          >
                            {projet.libelleSecours || "Site 2"} ↗
                          </a>
                        )}

                        {projet.urlTertiaire && (
                          <a
                            href={projet.urlTertiaire}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 text-xs font-medium bg-white border border-neutral-200 text-neutral-700 rounded-md hover:bg-neutral-50 transition-colors"
                          >
                            {projet.libelleTertiaire || "Site 3"} ↗
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 2 : Projets applicatifs déployés */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-950">
              Projets applicatifs
            </h2>
            <p className="text-sm text-neutral-500 mt-1">
              Applications web personnelles et projets académiques développés en autonomie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PROJETS_APPLICATIFS.map((app, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200 rounded-xl p-5 flex flex-col justify-between gap-4"
              >
                <div className="space-y-2">
                  <span className="text-xs text-neutral-500 font-mono">{app.type}</span>
                  <h3 className="font-semibold text-neutral-950 text-base">{app.titre}</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {app.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-neutral-100">
                  <div className="flex flex-wrap gap-1">
                    {app.stack.map((t) => (
                      <span
                        key={t}
                        className="px-1.5 py-0.5 text-[0.7rem] bg-neutral-100 text-neutral-600 rounded font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 text-xs">
                    <a
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-neutral-950 hover:underline"
                    >
                      Voir le site ↗
                    </a>
                    {app.github && (
                      <a
                        href={app.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-500 hover:text-neutral-950"
                      >
                        Code GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 : Parcours professionnel détaillé */}
        <section id="parcours" className="space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-950">
              Expérience professionnelle
            </h2>
            <p className="text-sm text-neutral-500 mt-1">
              Missions de développement en agence et administration de serveurs.
            </p>
          </div>

          <div className="space-y-4">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200 rounded-xl p-5 sm:p-6 space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-1 text-xs text-neutral-500">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-neutral-950 text-sm">{exp.role}</span>
                    <span>•</span>
                    <span className="text-neutral-700 font-medium">{exp.entreprise}</span>
                  </div>
                  <span className="font-mono">{exp.periode}</span>
                </div>

                <p className="text-xs text-neutral-500">{exp.lieu}</p>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-1.5 text-xs text-neutral-700 pt-1">
                  {exp.missions.map((m, mIdx) => (
                    <li key={mIdx} className="flex items-start gap-2">
                      <span className="text-neutral-400">•</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs bg-neutral-100 text-neutral-700 rounded font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mention discrète et professionnelle des lettres de recommandation fournies avec le dossier */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-5 text-xs sm:text-sm text-neutral-600 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-0.5">
              <p className="font-semibold text-neutral-950">
                Attestations &amp; Lettres de recommandation de stage
              </p>
              <p className="text-neutral-500">
                Signées par les tuteurs et dirigeants d&apos;agence (Nexus Flow, Unimage Communication, Rougevert Communication, Martingale).
              </p>
            </div>
            <span className="shrink-0 text-xs text-neutral-700 font-medium bg-white px-3 py-1.5 rounded-md border border-neutral-200">
              Jointes à mon dossier de candidature
            </span>
          </div>
        </section>

        {/* Section 4 : Compétences & Formation */}
        <section id="competences" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-5">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-950">
                Compétences techniques
              </h2>
              <p className="text-sm text-neutral-500 mt-1">
                Conformes au référentiel de compétences de mon CV.
              </p>
            </div>

            <div className="space-y-4">
              {COMPETENCES.map((c, idx) => (
                <div key={idx} className="bg-white border border-neutral-200 rounded-xl p-4 space-y-2">
                  <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider font-mono">
                    {c.categorie}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {c.competences.map((comp, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-1 text-xs bg-neutral-50 text-neutral-800 rounded border border-neutral-200"
                      >
                        {comp.nom}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-950">
                Formation
              </h2>
              <p className="text-sm text-neutral-500 mt-1">
                Cursus supérieur en informatique de gestion et développement logiciel.
              </p>
            </div>

            <div className="space-y-4">
              {FORMATIONS.map((f, idx) => (
                <div key={idx} className="bg-white border border-neutral-200 rounded-xl p-4 space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-neutral-500">
                    <span className="font-semibold text-neutral-950 text-sm">{f.diplome}</span>
                    <span className="font-mono">{f.periode}</span>
                  </div>
                  <p className="text-xs text-neutral-600 font-medium">{f.etablissement}</p>
                  <p className="text-xs text-neutral-500 leading-relaxed pt-1">
                    {f.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-white border border-neutral-200 rounded-xl p-4 space-y-1.5">
              <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider font-mono">
                Centres d&apos;intérêt &amp; Pratique artistique
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700">
                <strong>Violon</strong> — Pratique instrumentale au Conservatoire de Villefranche-sur-Saône pendant 10 ans. Rigueur, écoute et persévérance.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 : Contact direct */}
        <section id="contact" className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-9 space-y-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-950">
              Coordonnées &amp; Candidature
            </h2>
            <p className="text-sm text-neutral-600 mt-1">
              À la recherche d&apos;une alternance en Développement web / Programmation / Automatisation pour septembre 2027 (rythme 1 an, Licence 3 Informatique).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200 space-y-1">
              <p className="text-xs text-neutral-500 font-medium uppercase font-mono">Email</p>
              <a
                href={`mailto:${INFOS_PERSONNELLES.email}`}
                className="text-sm sm:text-base font-medium text-neutral-950 hover:underline block break-all"
              >
                {INFOS_PERSONNELLES.email}
              </a>
            </div>

            <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200 space-y-1">
              <p className="text-xs text-neutral-500 font-medium uppercase font-mono">Téléphone</p>
              <a
                href={`tel:${INFOS_PERSONNELLES.telephoneBrut}`}
                className="text-sm sm:text-base font-medium text-neutral-950 hover:underline block"
              >
                {INFOS_PERSONNELLES.telephone}
              </a>
            </div>
          </div>

          <p className="text-xs text-neutral-500">
            {INFOS_PERSONNELLES.localisation} • Permis B en cours.
          </p>
        </section>
      </main>

      {/* Pied de page sobre */}
      <footer className="border-t border-neutral-200 py-8 text-xs text-neutral-500 bg-white">
        <div className="conteneur flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {INFOS_PERSONNELLES.nom}.</p>
          <div className="flex items-center gap-4">
            <a href={INFOS_PERSONNELLES.github} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-950 transition-colors">
              GitHub
            </a>
            <span>•</span>
            <a href={INFOS_PERSONNELLES.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-950 transition-colors">
              LinkedIn
            </a>
            <span>•</span>
            <a href={INFOS_PERSONNELLES.cvPdf} download className="hover:text-neutral-950 transition-colors">
              CV (PDF)
            </a>
          </div>
        </div>
      </footer>

      {/* Modal d'Étude de Cas Technique (Projet) */}
      {projetModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-neutral-900/60 backdrop-blur-xs"
          onClick={() => setProjetModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-xl p-6 sm:p-8 space-y-7 shadow-xl border border-neutral-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header du modal */}
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono">
                  <span>{projetModal.employeur}</span>
                  <span>•</span>
                  <span>{projetModal.periode}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-neutral-950">
                  {projetModal.titre}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-medium">
                  {projetModal.roleCourt}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setProjetModal(null)}
                className="w-8 h-8 rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center text-sm cursor-pointer"
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>

            {/* Note d'accès */}
            {projetModal.noteAcces && (
              <div className="p-3.5 rounded-md bg-neutral-50 border border-neutral-200 text-xs text-neutral-700 leading-relaxed">
                {projetModal.noteAcces}
              </div>
            )}

            {/* Image principale */}
            <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-neutral-200 bg-neutral-100">
              <Image
                src={projetModal.image}
                alt={projetModal.titre}
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Actions techniques concrètes */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-neutral-950">
                Interventions techniques réalisées
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
                {projetModal.ceQueJaiFait.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-neutral-400 mt-1">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Galerie d'écrans réels */}
            {projetModal.galerie && projetModal.galerie.length > 0 && (
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-semibold text-neutral-950">
                  Captures d&apos;écran réelles du projet
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {projetModal.galerie.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => setImageAgrandie({ src: item.src, titre: item.titre })}
                      className="border border-neutral-200 rounded-lg overflow-hidden bg-neutral-50 hover:border-neutral-400 transition-colors cursor-pointer"
                    >
                      <div className="relative aspect-[16/10] w-full bg-neutral-100">
                        <Image
                          src={item.src}
                          alt={item.titre}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                      <div className="p-3 space-y-0.5">
                        <p className="text-xs font-semibold text-neutral-950">{item.titre}</p>
                        <p className="text-xs text-neutral-600 line-clamp-2">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Extraits de code annotés */}
            {projetModal.extraitsCode && projetModal.extraitsCode.length > 0 && (
              <div className="space-y-4 pt-2">
                <h4 className="text-sm font-semibold text-neutral-950">
                  Extraits de code source
                </h4>
                <div className="space-y-4">
                  {projetModal.extraitsCode.map((extrait, idx) => (
                    <div key={idx} className="border border-neutral-200 rounded-lg overflow-hidden bg-neutral-900 text-neutral-100">
                      <div className="bg-neutral-800/90 px-4 py-2 border-b border-neutral-700 flex items-center justify-between text-xs font-mono">
                        <div className="flex items-center gap-2">
                          <span className="text-neutral-300 font-semibold">{extrait.fichier}</span>
                          <span className="text-[0.65rem] uppercase px-1.5 py-0.5 bg-neutral-700 text-neutral-300 rounded">{extrait.langage}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => copierCode(extrait.code, `${projetModal.id}-${idx}`)}
                          className="text-xs text-neutral-400 hover:text-white cursor-pointer"
                        >
                          {codeCopie === `${projetModal.id}-${idx}` ? "Copié ✓" : "Copier"}
                        </button>
                      </div>
                      <div className="px-4 py-2 text-xs text-neutral-300 border-b border-neutral-800 bg-neutral-900/60">
                        <strong className="text-white">{extrait.titre} : </strong>
                        {extrait.description}
                      </div>
                      <pre className="p-4 text-xs font-mono overflow-x-auto leading-relaxed text-neutral-200">
                        <code>{extrait.code}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Footer du modal */}
            <div className="pt-4 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1">
                {projetModal.stack.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-xs bg-neutral-100 rounded text-neutral-700 font-mono">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={projetModal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-medium bg-neutral-950 text-white rounded-md hover:bg-neutral-800 transition-colors"
                >
                  {projetModal.libelleLien || "Accéder au projet"} ↗
                </a>

                {projetModal.urlSecours && (
                  <a
                    href={projetModal.urlSecours}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 text-xs font-medium bg-white border border-neutral-200 text-neutral-700 rounded-md hover:bg-neutral-50 transition-colors"
                  >
                    {projetModal.libelleSecours || "Site 2"} ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal plein écran d'image */}
      {imageAgrandie && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-xs"
          onClick={() => setImageAgrandie(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-xl p-4 space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <p className="font-medium text-neutral-950 text-sm">{imageAgrandie.titre}</p>
              <button
                type="button"
                onClick={() => setImageAgrandie(null)}
                className="w-7 h-7 rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center text-xs cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="relative aspect-[16/10] w-full max-h-[75vh] rounded-lg overflow-hidden bg-neutral-100">
              <Image
                src={imageAgrandie.src}
                alt={imageAgrandie.titre}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
