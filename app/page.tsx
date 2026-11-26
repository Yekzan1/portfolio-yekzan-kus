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
  const [imageAgrandie, setImageAgrandie] = useState<{ src: string; titre: string } | null>(null);

  const recommandationActive =
    RECOMMANDATIONS.find((r) => r.id === recommandationModal) || RECOMMANDATIONS[0];

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-gray-200 antialiased">
      {/* Navigation responsive */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="conteneur flex items-center justify-between h-18">
          <a
            href="#"
            className="font-bold text-gray-950 text-base sm:text-lg tracking-tight hover:opacity-80 transition-opacity"
          >
            {INFOS_PERSONNELLES.nom}
          </a>

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
        {/* Présentation / Hero */}
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
              J&apos;ai travaillé en agence web sur la création de sites complets (WordPress, PrestaShop, PHP, JavaScript)
              et sur la fiabilisation d&apos;un SaaS en production (Next.js 14, TypeScript, Prisma, PostgreSQL).
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
              Sites web, applications SaaS et outils développés en autonomie lors de mes stages.
              Cliquez sur <strong className="text-gray-900 font-semibold">« Détails, code &amp; captures ↗ »</strong> pour inspecter l&apos;architecture, les écrans réels et les extraits de code source.
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
                  {projet.galerie && (
                    <div className="absolute bottom-3 right-3 bg-black/75 text-white text-xs px-2.5 py-1 rounded-md backdrop-blur-xs font-medium">
                      📷 {projet.galerie.length} captures réelles
                    </div>
                  )}
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

                    {projet.noteAcces && (
                      <p className="text-xs text-amber-800 bg-amber-50/70 border border-amber-200/70 p-2.5 rounded-lg">
                        ℹ️ {projet.noteAcces}
                      </p>
                    )}
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
                        className="text-xs sm:text-sm font-bold text-indigo-700 hover:text-indigo-900 underline underline-offset-4 cursor-pointer"
                      >
                        Détails, code &amp; captures ↗
                      </button>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setProjetModal(projet)}
                          className="px-4 py-2 text-xs sm:text-sm font-semibold bg-gray-950 text-white rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center gap-1.5 shadow-xs cursor-pointer"
                        >
                          <span>{projet.libelleLien || "Consulter le projet"}</span>
                          <span aria-hidden="true">↗</span>
                        </button>

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

      {/* Modale d'Étude de Cas Détaillée avec Galerie & Code */}
      {projetModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-xs"
          onClick={() => setProjetModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white rounded-2xl p-6 sm:p-10 space-y-8 shadow-2xl border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton fermer */}
            <button
              type="button"
              onClick={() => setProjetModal(null)}
              className="sticky top-0 float-right -mt-2 -mr-2 z-10 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center text-base cursor-pointer shadow-sm"
              aria-label="Fermer"
            >
              ✕
            </button>

            {/* En-tête */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-gray-500">
                <span className="text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {projetModal.badge}
                </span>
                <span>•</span>
                <span>{projetModal.employeur}</span>
                <span>•</span>
                <span>{projetModal.annee}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950 leading-tight">
                {projetModal.titre}
              </h3>
            </div>

            {/* Note d'accès bien visible */}
            {projetModal.noteAcces && (
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm leading-relaxed">
                <strong className="font-semibold">Statut d&apos;accès en ligne : </strong>
                {projetModal.noteAcces}
              </div>
            )}

            {/* Image principale */}
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 shadow-xs">
              <Image
                src={projetModal.image}
                alt={projetModal.titre}
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Grille Contexte / Problème / Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 sm:p-7 rounded-2xl border border-gray-200">
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-gray-500 mb-1">
                    1. Contexte du stage
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {projetModal.contexte}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-red-600 mb-1">
                    2. Défi technique &amp; Problème à résoudre
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {projetModal.probleme}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-700 mb-1">
                    3. Travail réalisé &amp; Architecture
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {projetModal.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-gray-500 mb-1">
                    4. Résultats mesurés &amp; Livrables
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-gray-700">
                    {projetModal.resultats.map((res, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Galerie d'écrans réels */}
            {projetModal.galerie && projetModal.galerie.length > 0 && (
              <div className="space-y-4 pt-2">
                <div>
                  <h4 className="text-lg font-bold text-gray-950">
                    Captures d&apos;écran réelles du projet
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Extraites du travail de stage et du rapport officiel. Cliquez sur une image pour l&apos;agrandir.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {projetModal.galerie.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => setImageAgrandie({ src: item.src, titre: item.titre })}
                      className="group border border-gray-200 rounded-xl overflow-hidden hover:border-gray-400 transition-all bg-white cursor-pointer shadow-xs"
                    >
                      <div className="relative aspect-[16/10] w-full bg-gray-100 overflow-hidden">
                        <Image
                          src={item.src}
                          alt={item.titre}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-3.5 space-y-1 bg-white">
                        <p className="text-xs sm:text-sm font-bold text-gray-950 group-hover:text-indigo-600 transition-colors">
                          {item.titre}
                        </p>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Extraits de code source annotés */}
            {projetModal.extraitsCode && projetModal.extraitsCode.length > 0 && (
              <div className="space-y-4 pt-2">
                <div>
                  <h4 className="text-lg font-bold text-gray-950">
                    Code source développé &amp; annoté
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Implémentation réelle (TypeScript / PHP) réalisée durant le stage.
                  </p>
                </div>

                <div className="space-y-4">
                  {projetModal.extraitsCode.map((extrait, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden shadow-xs">
                      <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center justify-between text-xs font-mono text-gray-700">
                        <span className="font-semibold text-gray-900">{extrait.fichier}</span>
                        <span className="uppercase text-[0.65rem] bg-gray-200 px-2 py-0.5 rounded font-bold">{extrait.langage}</span>
                      </div>
                      <p className="text-xs text-gray-600 px-4 pt-3 bg-gray-900 text-gray-300">
                        {extrait.description}
                      </p>
                      <pre className="p-4 bg-gray-900 text-gray-100 text-xs font-mono overflow-x-auto leading-relaxed">
                        <code>{extrait.code}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Barre d'actions en bas de modale */}
            <div className="pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {projetModal.stack.map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs bg-gray-100 rounded-md text-gray-800 font-mono font-medium">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={projetModal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-sm font-semibold bg-gray-950 text-white rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center gap-2 shadow-xs"
                >
                  <span>{projetModal.libelleLien || "Consulter le site en direct"}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modale d'agrandissement d'image de capture */}
      {imageAgrandie && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          onClick={() => setImageAgrandie(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-2xl p-4 sm:p-6 space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <p className="font-bold text-gray-950 text-base">{imageAgrandie.titre}</p>
              <button
                type="button"
                onClick={() => setImageAgrandie(null)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 flex items-center justify-center text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="relative aspect-[16/10] w-full max-h-[75vh] rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
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
