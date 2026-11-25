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

export default function HomePage() {
  const [projetModal, setProjetModal] = useState<Realisation | null>(null);
  const [recommandationModal, setRecommandationModal] = useState<string | null>(null);

  const recommandationActive =
    RECOMMANDATIONS.find((r) => r.id === recommandationModal) || RECOMMANDATIONS[0];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-neutral-200">
      {/* Barre de navigation simple et épurée */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-neutral-200">
        <div className="conteneur flex items-center justify-between h-16">
          <a href="#" className="font-semibold text-neutral-900 tracking-tight">
            {INFOS_PERSONNELLES.nom}
          </a>

          <nav className="flex items-center gap-6 text-sm text-neutral-600">
            <a href="#projets" className="hover:text-neutral-900 transition-colors">
              Projets
            </a>
            <a href="#experiences" className="hover:text-neutral-900 transition-colors">
              Parcours
            </a>
            <a href="#competences" className="hover:text-neutral-900 transition-colors">
              Compétences
            </a>
            <a href="#contact" className="hover:text-neutral-900 transition-colors">
              Contact
            </a>
            <a
              href={INFOS_PERSONNELLES.cvPdf}
              download="CV-Yekzan-KUS.pdf"
              className="px-3 py-1.5 text-xs font-medium bg-neutral-900 text-white rounded-md hover:bg-neutral-800 transition-colors"
            >
              CV (PDF)
            </a>
          </nav>
        </div>
      </header>

      <main className="conteneur py-12 sm:py-16 space-y-20">
        {/* En-tête / Présentation directe */}
        <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pb-12 border-b border-neutral-200">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>Septembre 2027 • Licence 3 Informatique</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
              Développeur Web & Concepteur d&apos;Applications
            </h1>

            <p className="text-base text-neutral-600 leading-relaxed">
              Étudiant en 2<sup>e</sup> année de BTS SIO (option SLAM) à la Business School by CSND
              (Limas). Je développe des applications web (Next.js, TypeScript, PHP, SQL) et des outils
              d&apos;automatisation. Vous trouverez ci-dessous mes réalisations en entreprise et mes projets en ligne.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`mailto:${INFOS_PERSONNELLES.email}`}
                className="px-4 py-2 text-sm font-medium bg-neutral-900 text-white rounded-md hover:bg-neutral-800 transition-colors"
              >
                Me contacter
              </a>
              <a
                href={INFOS_PERSONNELLES.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium bg-white border border-neutral-200 text-neutral-700 rounded-md hover:bg-neutral-50 transition-colors"
              >
                GitHub
              </a>
              <a
                href={INFOS_PERSONNELLES.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium bg-white border border-neutral-200 text-neutral-700 rounded-md hover:bg-neutral-50 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="shrink-0">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-neutral-200 shadow-sm">
              <Image
                src="/yekzan.webp"
                alt="Photo de Yekzan KUS"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section 1 : Réalisations en entreprise */}
        <section id="projets" className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
              Réalisations en entreprise
            </h2>
            <p className="text-sm text-neutral-600 mt-1">
              Sites et applications développés en autonomie lors de mes stages, avec liens en ligne vérifiables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REALISATIONS.map((projet) => (
              <div
                key={projet.id}
                className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-xs hover:border-neutral-300 transition-colors flex flex-col justify-between"
              >
                <div className="relative aspect-video w-full bg-neutral-100 border-b border-neutral-200">
                  <Image
                    src={projet.image}
                    alt={projet.titre}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <div className="p-5 flex flex-col flex-grow justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-neutral-500">
                      <span className="font-medium text-neutral-800">{projet.employeur}</span>
                      <span>{projet.annee}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-neutral-900 leading-snug">
                      {projet.titre}
                    </h3>

                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {projet.contexte}
                    </p>

                    <p className="text-sm text-neutral-700 bg-neutral-50 p-3 rounded-lg border border-neutral-100">
                      <strong className="text-neutral-900">Ce que j&apos;ai fait : </strong>
                      {projet.solution}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-neutral-100">
                    <div className="flex flex-wrap gap-1.5">
                      {projet.stack.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-xs bg-neutral-100 text-neutral-700 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => setProjetModal(projet)}
                        className="text-xs font-medium text-neutral-600 hover:text-neutral-900 underline underline-offset-2"
                      >
                        Voir les détails
                      </button>

                      <div className="flex items-center gap-2">
                        <a
                          href={projet.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 text-xs font-medium bg-neutral-900 text-white rounded hover:bg-neutral-800 transition-colors inline-flex items-center gap-1"
                        >
                          <span>{projet.libelleLien || "Visiter le site"}</span>
                          <span aria-hidden="true">↗</span>
                        </a>

                        {projet.urlSecours && (
                          <a
                            href={projet.urlSecours}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 text-xs font-medium bg-white border border-neutral-200 text-neutral-700 rounded hover:bg-neutral-50 transition-colors"
                          >
                            {projet.libelleSecours || "Site 2 ↗"}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2 : Projets personnels & applicatifs */}
        <section className="space-y-6 pt-8 border-t border-neutral-200">
          <div>
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">
              Projets applicatifs & académiques
            </h2>
            <p className="text-sm text-neutral-600 mt-1">
              Applications déployées et prototypes techniques hébergés en ligne.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJETS_APPLICATIFS.map((app, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200 rounded-lg p-5 flex flex-col justify-between gap-3 shadow-xs"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-neutral-500">
                    <span className="font-medium text-neutral-700">{app.type}</span>
                  </div>
                  <h3 className="font-semibold text-neutral-900">{app.titre}</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {app.description}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {app.stack.map((t) => (
                      <span
                        key={t}
                        className="px-1.5 py-0.5 text-[0.7rem] bg-neutral-100 text-neutral-600 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-neutral-100">
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-neutral-900 hover:underline"
                  >
                    Ouvrir le projet ↗
                  </a>
                  {app.github && (
                    <a
                      href={app.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-neutral-500 hover:text-neutral-900"
                    >
                      Dépôt GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 : Lettres de recommandation */}
        <section className="space-y-4 pt-8 border-t border-neutral-200">
          <div>
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">
              Attestations de stage & Recommandations
            </h2>
            <p className="text-sm text-neutral-600 mt-1">
              Lettres officielles signées par mes tuteurs de stage en agence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RECOMMANDATIONS.map((rec) => (
              <button
                key={rec.id}
                type="button"
                onClick={() => setRecommandationModal(rec.id)}
                className="text-left bg-white border border-neutral-200 rounded-lg p-4 hover:border-neutral-400 transition-colors flex flex-col justify-between gap-3 shadow-xs"
              >
                <div>
                  <p className="text-xs font-semibold text-neutral-900">{rec.entreprise}</p>
                  <p className="text-[0.75rem] text-neutral-500 mt-0.5">{rec.auteur}</p>
                  <p className="text-xs text-neutral-600 italic mt-2 line-clamp-3">
                    « {rec.citation} »
                  </p>
                </div>
                <span className="text-xs font-medium text-neutral-800 underline underline-offset-2">
                  Lire la lettre signée ↗
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Section 4 : Parcours professionnel & Cursus */}
        <section id="experiences" className="space-y-6 pt-8 border-t border-neutral-200">
          <div>
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">
              Expériences professionnelles
            </h2>
          </div>

          <div className="space-y-6">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200 rounded-lg p-5 space-y-3 shadow-xs"
              >
                <div className="flex flex-wrap items-center justify-between gap-1 text-xs text-neutral-500">
                  <span className="font-semibold text-neutral-900 text-sm">{exp.role}</span>
                  <span>{exp.periode}</span>
                </div>

                <p className="text-xs font-medium text-neutral-700">
                  {exp.entreprise} — {exp.lieu}
                </p>

                <p className="text-xs text-neutral-600 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-1 text-xs text-neutral-600">
                  {exp.missions.map((m, mIdx) => (
                    <li key={mIdx} className="flex items-start gap-2">
                      <span className="text-neutral-400">•</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1 pt-2 border-t border-neutral-100">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="px-1.5 py-0.5 text-[0.7rem] bg-neutral-100 text-neutral-600 rounded"
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
        <section id="competences" className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-neutral-200">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">
              Compétences techniques
            </h2>

            <div className="space-y-3">
              {COMPETENCES.map((c, idx) => (
                <div key={idx} className="bg-white border border-neutral-200 rounded-lg p-4 space-y-2">
                  <h3 className="text-sm font-semibold text-neutral-900">{c.categorie}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {c.competences.map((comp, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2 py-0.5 text-xs bg-neutral-100 text-neutral-800 rounded border border-neutral-200"
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
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">
              Formation
            </h2>

            <div className="space-y-3">
              {FORMATIONS.map((f, idx) => (
                <div key={idx} className="bg-white border border-neutral-200 rounded-lg p-4 space-y-1">
                  <div className="flex items-center justify-between text-xs text-neutral-500">
                    <span className="font-semibold text-neutral-900">{f.diplome}</span>
                    <span>{f.periode}</span>
                  </div>
                  <p className="text-xs text-neutral-600">{f.etablissement}</p>
                  <p className="text-xs text-neutral-500 leading-relaxed pt-1">
                    {f.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 : Contact */}
        <section id="contact" className="bg-white border border-neutral-200 rounded-xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-neutral-900 tracking-tight">
            Contact direct
          </h2>
          <p className="text-sm text-neutral-600">
            Pour tout échange professionnel, entretien ou opportunité d&apos;alternance (L3 Informatique, septembre 2027) :
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200 space-y-1">
              <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">Email</p>
              <a
                href={`mailto:${INFOS_PERSONNELLES.email}`}
                className="text-sm font-medium text-neutral-900 hover:underline block"
              >
                {INFOS_PERSONNELLES.email}
              </a>
            </div>

            <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200 space-y-1">
              <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">Téléphone</p>
              <a
                href={`tel:${INFOS_PERSONNELLES.telephoneBrut}`}
                className="text-sm font-medium text-neutral-900 hover:underline block"
              >
                {INFOS_PERSONNELLES.telephone}
              </a>
            </div>
          </div>

          <p className="text-xs text-neutral-500 pt-2">
            Localisation : Limas (69400), Villefranche-sur-Saône, Métropole de Lyon. Permis B en cours.
          </p>
        </section>
      </main>

      {/* Pied de page sobre */}
      <footer className="border-t border-neutral-200 bg-white py-8 mt-16 text-center text-xs text-neutral-500">
        <div className="conteneur flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {INFOS_PERSONNELLES.nom}.</p>
          <div className="flex items-center gap-4">
            <a href={INFOS_PERSONNELLES.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
              GitHub
            </a>
            <span>•</span>
            <a href={INFOS_PERSONNELLES.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
            <span>•</span>
            <a href={INFOS_PERSONNELLES.cvPdf} download className="hover:underline">
              CV PDF
            </a>
          </div>
        </div>
      </footer>

      {/* Modale d'Étude de Cas Détaillée */}
      {projetModal && (
        <div
          className="modale-overlay"
          onClick={() => setProjetModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="modale-boite" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setProjetModal(null)}
              className="modale-fermer"
              aria-label="Fermer"
            >
              ✕
            </button>

            <div className="space-y-4">
              <div>
                <p className="text-xs text-neutral-500">
                  {projetModal.employeur} • {projetModal.annee}
                </p>
                <h3 className="text-xl font-bold text-neutral-900 mt-1">
                  {projetModal.titre}
                </h3>
              </div>

              <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-neutral-200">
                <Image
                  src={projetModal.image}
                  alt={projetModal.titre}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="space-y-3 text-sm text-neutral-700">
                <p>
                  <strong>Contexte : </strong>
                  {projetModal.contexte}
                </p>
                <p>
                  <strong>Défi technique : </strong>
                  {projetModal.probleme}
                </p>
                <p>
                  <strong>Travail réalisé : </strong>
                  {projetModal.solution}
                </p>
              </div>

              <div className="pt-2">
                <p className="text-xs font-semibold text-neutral-900 mb-2">Livrables et résultats :</p>
                <ul className="space-y-1 text-xs text-neutral-600">
                  {projetModal.resultats.map((res, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {projetModal.stack.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs bg-neutral-100 rounded text-neutral-700">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={projetModal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-medium bg-neutral-900 text-white rounded hover:bg-neutral-800 transition-colors"
                >
                  {projetModal.libelleLien || "Consulter le site"} ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modale Recommandation / Lettre signée */}
      {recommandationModal && (
        <div
          className="modale-overlay"
          onClick={() => setRecommandationModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="modale-boite" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setRecommandationModal(null)}
              className="modale-fermer"
              aria-label="Fermer"
            >
              ✕
            </button>

            <div className="space-y-4">
              <div>
                <p className="text-xs text-neutral-500">
                  Attestation officielle • {recommandationActive.annee}
                </p>
                <h3 className="text-xl font-bold text-neutral-900 mt-1">
                  {recommandationActive.entreprise}
                </h3>
                <p className="text-xs text-neutral-600">
                  {recommandationActive.auteur} — {recommandationActive.poste}
                </p>
              </div>

              <blockquote className="p-3 bg-neutral-50 border-l-4 border-neutral-800 text-xs text-neutral-700 italic">
                « {recommandationActive.citation} »
              </blockquote>

              <div className="relative aspect-[3/4] sm:aspect-[4/3] w-full max-h-[60vh] rounded-lg overflow-hidden border border-neutral-200 bg-neutral-100">
                <Image
                  src={recommandationActive.image}
                  alt={`Lettre de recommandation de ${recommandationActive.entreprise}`}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-200">
                {RECOMMANDATIONS.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setRecommandationModal(r.id)}
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      r.id === recommandationModal
                        ? "bg-neutral-900 text-white font-medium"
                        : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                    }`}
                  >
                    {r.entreprise}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
