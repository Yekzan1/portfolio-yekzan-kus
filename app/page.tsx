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
  RECOMMANDATIONS,
  Realisation,
} from "@/lib/data";

export default function Page() {
  const [projetModal, setProjetModal] = useState<Realisation | null>(null);
  const [recommandationModal, setRecommandationModal] = useState<string | null>(null);
  const [menuMobile, setMenuMobile] = useState(false);

  const recommandationActive =
    RECOMMANDATIONS.find((r) => r.id === recommandationModal) || RECOMMANDATIONS[0];

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-gray-200 antialiased">
      {/* Navigation responsive avec menu mobile */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="conteneur flex items-center justify-between h-18">
          <a
            href="#"
            className="font-bold text-gray-950 text-base sm:text-lg tracking-tight hover:opacity-80 transition-opacity"
          >
            {INFOS_PERSONNELLES.nom}
          </a>

          {/* Navigation bureau */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-600">
            <a href="#projets" className="hover:text-gray-950 transition-colors">
              Projets
            </a>
            <a href="#parcours" className="hover:text-gray-950 transition-colors">
              Parcours
            </a>
            <a href="#competences" className="hover:text-gray-950 transition-colors">
              Compétences
            </a>
            <a href="#contact" className="hover:text-gray-950 transition-colors">
              Contact
            </a>
            <a
              href={INFOS_PERSONNELLES.cvPdf}
              download="CV-Yekzan-KUS.pdf"
              className="px-3.5 py-2 text-xs font-semibold bg-gray-950 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-xs"
            >
              CV (PDF)
            </a>
          </nav>

          {/* Bouton burger mobile */}
          <button
            type="button"
            onClick={() => setMenuMobile(!menuMobile)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuMobile ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu déroulant mobile */}
        {menuMobile && (
          <div className="md:hidden border-t border-gray-100 bg-white px-5 py-4 space-y-3">
            <a
              href="#projets"
              onClick={() => setMenuMobile(false)}
              className="block text-base font-medium text-gray-700 hover:text-gray-950 py-1"
            >
              Projets
            </a>
            <a
              href="#parcours"
              onClick={() => setMenuMobile(false)}
              className="block text-base font-medium text-gray-700 hover:text-gray-950 py-1"
            >
              Parcours
            </a>
            <a
              href="#competences"
              onClick={() => setMenuMobile(false)}
              className="block text-base font-medium text-gray-700 hover:text-gray-950 py-1"
            >
              Compétences
            </a>
            <a
              href="#contact"
              onClick={() => setMenuMobile(false)}
              className="block text-base font-medium text-gray-700 hover:text-gray-950 py-1"
            >
              Contact
            </a>
            <a
              href={INFOS_PERSONNELLES.cvPdf}
              download="CV-Yekzan-KUS.pdf"
              className="block w-full text-center px-4 py-2.5 text-sm font-semibold bg-gray-950 text-white rounded-lg mt-2"
            >
              Télécharger mon CV (PDF)
            </a>
          </div>
        )}
      </header>

      <main className="conteneur py-12 sm:py-16 md:py-20 space-y-20 md:space-y-28">
        {/* Présentation / Hero visible et lisible */}
        <section className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8 md:gap-12 pb-14 md:pb-20 border-b border-gray-200">
          <div className="space-y-6 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Septembre 2027 • Licence 3 Informatique</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-950 leading-tight">
              Développeur Web &amp; Concepteur d&apos;Applications
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Étudiant en 2<sup>e</sup> année de BTS SIO (option SLAM) à la Business School by CSND
              à Limas, et futur étudiant en Licence 3 Informatique pour septembre 2027.
              J&apos;ai réalisé plusieurs missions en agence web (création de sites complets WordPress,
              PrestaShop, PHP, JavaScript) et je conçois des applications avec Next.js, React,
              TypeScript et PostgreSQL.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <a
                href={`mailto:${INFOS_PERSONNELLES.email}`}
                className="px-5 py-2.5 text-sm sm:text-base font-semibold bg-gray-950 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-xs"
              >
                Me contacter
              </a>
              <a
                href={INFOS_PERSONNELLES.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-sm sm:text-base font-semibold bg-white border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-50 transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href={INFOS_PERSONNELLES.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-sm sm:text-base font-semibold bg-white border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-50 transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="shrink-0">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-2xl overflow-hidden border-2 border-gray-200 shadow-md">
              <Image
                src="/photo-cv.webp"
                alt="Photo de Yekzan KUS"
                fill
                priority
                sizes="(max-width: 768px) 176px, 208px"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section 1 : Réalisations en entreprise */}
        <section id="projets" className="space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-950">
              Réalisations en entreprise
            </h2>
            <p className="text-base text-gray-600 mt-2">
              Sites web et applications développés en autonomie lors de mes stages en agence web.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {REALISATIONS.map((projet) => (
              <article
                key={projet.id}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 transition-all hover:shadow-md flex flex-col justify-between bg-white"
              >
                <div className="relative aspect-[16/10] w-full bg-gray-100 border-b border-gray-100 overflow-hidden">
                  <Image
                    src={projet.image}
                    alt={projet.titre}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>

                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between gap-6">
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 font-medium">
                      <span className="text-gray-900 font-semibold">{projet.employeur}</span>
                      <span>{projet.annee}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-950 leading-snug">
                      {projet.titre}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {projet.contexte}
                    </p>

                    <div className="text-xs sm:text-sm text-gray-800 bg-gray-50 p-4 rounded-xl border border-gray-200/80 leading-relaxed">
                      <strong className="text-gray-950 font-semibold">Ce que j&apos;ai fait : </strong>
                      {projet.solution}
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-1.5">
                      {projet.stack.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs bg-gray-100 text-gray-800 rounded-md font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setProjetModal(projet)}
                        className="text-xs sm:text-sm font-semibold text-gray-700 hover:text-gray-950 underline underline-offset-4 cursor-pointer"
                      >
                        Détails &amp; résultats ↗
                      </button>

                      <div className="flex items-center gap-2">
                        <a
                          href={projet.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 text-xs sm:text-sm font-semibold bg-gray-950 text-white rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center gap-1.5 shadow-xs"
                        >
                          <span>{projet.libelleLien || "Visiter le site"}</span>
                          <span aria-hidden="true">↗</span>
                        </a>

                        {projet.urlSecours && (
                          <a
                            href={projet.urlSecours}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3.5 py-2 text-xs sm:text-sm font-medium bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            {projet.libelleSecours || "Site 2"} ↗
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

        {/* Section 2 : Projets applicatifs & académiques */}
        <section className="space-y-6 pt-4 border-t border-gray-200">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-950">
              Projets applicatifs déployés
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-1">
              Applications interactives développées et testables en ligne.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJETS_APPLICATIFS.map((app, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-2xl p-6 flex flex-col justify-between gap-4 hover:border-gray-300 transition-colors bg-white shadow-xs"
              >
                <div className="space-y-2.5">
                  <span className="inline-block text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {app.type}
                  </span>
                  <h3 className="font-bold text-gray-950 text-lg">{app.titre}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {app.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {app.stack.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-xs bg-gray-100 text-gray-700 rounded font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-3 border-t border-gray-100 text-sm">
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gray-950 hover:underline"
                  >
                    Ouvrir l&apos;application ↗
                  </a>
                  {app.github && (
                    <a
                      href={app.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-950"
                    >
                      Code GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 : Recommandations signées */}
        <section className="space-y-5 pt-4 border-t border-gray-200">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-950">
              Recommandations &amp; Attestations de stage
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-1">
              Lettres officielles signées par mes tuteurs en agence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RECOMMANDATIONS.map((rec) => (
              <button
                key={rec.id}
                type="button"
                onClick={() => setRecommandationModal(rec.id)}
                className="text-left border border-gray-200 rounded-2xl p-5 hover:border-gray-400 transition-colors flex flex-col justify-between gap-3 bg-white cursor-pointer shadow-xs"
              >
                <div>
                  <p className="text-sm font-bold text-gray-950">{rec.entreprise}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{rec.auteur}</p>
                  <p className="text-xs sm:text-sm text-gray-600 italic mt-3 line-clamp-3">
                    « {rec.citation} »
                  </p>
                </div>
                <span className="text-xs font-semibold text-gray-950 underline underline-offset-4">
                  Voir la lettre signée ↗
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Section 4 : Expériences & Parcours */}
        <section id="parcours" className="space-y-6 pt-4 border-t border-gray-200">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-950">
              Expériences professionnelles
            </h2>
          </div>

          <div className="space-y-6">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-2xl p-6 sm:p-7 space-y-3.5 bg-white shadow-xs"
              >
                <div className="flex flex-wrap items-center justify-between gap-1 text-sm text-gray-500">
                  <span className="font-bold text-gray-950 text-base">{exp.role}</span>
                  <span className="font-medium">{exp.periode}</span>
                </div>

                <p className="text-sm font-semibold text-gray-700">
                  {exp.entreprise} — {exp.lieu}
                </p>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                  {exp.missions.map((m, mIdx) => (
                    <li key={mIdx} className="flex items-start gap-2.5">
                      <span className="text-gray-400 mt-0.5">•</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 text-xs bg-gray-100 text-gray-700 rounded-md font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 : Compétences & Formation */}
        <section id="competences" className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-gray-200">
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-950">
              Compétences techniques
            </h2>

            <div className="space-y-4">
              {COMPETENCES.map((c, idx) => (
                <div key={idx} className="border border-gray-200 rounded-2xl p-5 space-y-2.5 bg-white shadow-xs">
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider">{c.categorie}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {c.competences.map((comp, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-1 text-xs sm:text-sm bg-gray-50 text-gray-800 rounded-lg border border-gray-200"
                      >
                        {comp.nom}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-950">
              Formations
            </h2>

            <div className="space-y-4">
              {FORMATIONS.map((f, idx) => (
                <div key={idx} className="border border-gray-200 rounded-2xl p-5 space-y-1.5 bg-white shadow-xs">
                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                    <span className="font-bold text-gray-950 text-sm sm:text-base">{f.diplome}</span>
                    <span>{f.periode}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium">{f.etablissement}</p>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed pt-1">
                    {f.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Contact direct */}
        <section id="contact" className="border border-gray-200 rounded-3xl p-7 sm:p-10 space-y-5 bg-gray-50">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-950">
            Me contacter
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl leading-relaxed">
            Disponible pour un échange professionnel, un entretien technique ou une opportunité d&apos;alternance (L3 Informatique, septembre 2027) :
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white border border-gray-200 space-y-1.5 shadow-xs">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</p>
              <a
                href={`mailto:${INFOS_PERSONNELLES.email}`}
                className="text-base sm:text-lg font-bold text-gray-950 hover:underline block break-all"
              >
                {INFOS_PERSONNELLES.email}
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-gray-200 space-y-1.5 shadow-xs">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Téléphone</p>
              <a
                href={`tel:${INFOS_PERSONNELLES.telephoneBrut}`}
                className="text-base sm:text-lg font-bold text-gray-950 hover:underline block"
              >
                {INFOS_PERSONNELLES.telephone}
              </a>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 pt-1">
            Secteur géographique : Limas (69400), Villefranche-sur-Saône, Métropole de Lyon. Permis B en cours.
          </p>
        </section>
      </main>

      {/* Pied de page */}
      <footer className="border-t border-gray-200 py-10 text-center text-sm text-gray-500 bg-white">
        <div className="conteneur flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {INFOS_PERSONNELLES.nom}.</p>
          <div className="flex items-center gap-5 text-sm font-medium">
            <a href={INFOS_PERSONNELLES.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-950 transition-colors">
              GitHub
            </a>
            <span>•</span>
            <a href={INFOS_PERSONNELLES.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gray-950 transition-colors">
              LinkedIn
            </a>
            <span>•</span>
            <a href={INFOS_PERSONNELLES.cvPdf} download className="hover:text-gray-950 transition-colors">
              CV (PDF)
            </a>
          </div>
        </div>
      </footer>

      {/* Modale d'Étude de Cas */}
      {projetModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setProjetModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl p-6 sm:p-8 space-y-5 shadow-2xl border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setProjetModal(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center text-base cursor-pointer"
              aria-label="Fermer"
            >
              ✕
            </button>

            <div>
              <p className="text-xs sm:text-sm text-gray-500 font-semibold">
                {projetModal.employeur} • {projetModal.annee}
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-950 mt-1">
                {projetModal.titre}
              </h3>
            </div>

            <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-gray-200 bg-gray-100">
              <Image
                src={projetModal.image}
                alt={projetModal.titre}
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="space-y-3.5 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                <strong className="text-gray-950">Contexte : </strong>
                {projetModal.contexte}
              </p>
              <p>
                <strong className="text-gray-950">Défi technique : </strong>
                {projetModal.probleme}
              </p>
              <p>
                <strong className="text-gray-950">Travail réalisé : </strong>
                {projetModal.solution}
              </p>
            </div>

            <div>
              <p className="text-sm font-bold text-gray-950 mb-2">Résultats et livrables :</p>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                {projetModal.resultats.map((res, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {projetModal.stack.map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs bg-gray-100 rounded-md text-gray-800 font-mono">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={projetModal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-sm font-semibold bg-gray-950 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                {projetModal.libelleLien || "Consulter le site"} ↗
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Modale Recommandation / Lettre signée */}
      {recommandationModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setRecommandationModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl p-6 sm:p-8 space-y-5 shadow-2xl border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setRecommandationModal(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center text-base cursor-pointer"
              aria-label="Fermer"
            >
              ✕
            </button>

            <div>
              <p className="text-xs sm:text-sm text-gray-500 font-semibold">
                Attestation de stage • {recommandationActive.annee}
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-950 mt-1">
                {recommandationActive.entreprise}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                {recommandationActive.auteur} — {recommandationActive.poste}
              </p>
            </div>

            <blockquote className="p-4 bg-gray-50 border-l-4 border-gray-950 text-sm text-gray-800 italic rounded-r-lg">
              « {recommandationActive.citation} »
            </blockquote>

            <div className="relative aspect-[3/4] sm:aspect-[4/3] w-full max-h-[60vh] rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
              <Image
                src={recommandationActive.image}
                alt={`Lettre de recommandation de ${recommandationActive.entreprise}`}
                fill
                className="object-contain p-2"
              />
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
              {RECOMMANDATIONS.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setRecommandationModal(r.id)}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm rounded-lg transition-colors cursor-pointer ${
                    r.id === recommandationModal
                      ? "bg-gray-950 text-white font-semibold"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {r.entreprise}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
