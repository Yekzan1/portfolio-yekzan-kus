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

  const recommandationActive =
    RECOMMANDATIONS.find((r) => r.id === recommandationModal) || RECOMMANDATIONS[0];

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-gray-100 antialiased">
      {/* Navigation discrète */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="conteneur flex items-center justify-between h-16">
          <a href="#" className="font-semibold text-gray-950 text-sm tracking-tight hover:opacity-75 transition-opacity">
            {INFOS_PERSONNELLES.nom}
          </a>

          <nav className="flex items-center gap-6 text-sm text-gray-600">
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
              className="px-3 py-1.5 text-xs font-medium bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              CV (PDF)
            </a>
          </nav>
        </div>
      </header>

      <main className="conteneur py-14 sm:py-20 space-y-24">
        {/* Présentation / Bio factuelle */}
        <section className="flex flex-col-reverse md:flex-row items-start justify-between gap-10 pb-16 border-b border-gray-100">
          <div className="space-y-5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>Septembre 2027 • Licence 3 Informatique</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-950 leading-tight">
              Développeur Web & Concepteur d&apos;Applications
            </h1>

            <p className="text-base text-gray-600 leading-relaxed">
              Étudiant en 2<sup>e</sup> année de BTS SIO (option SLAM) à la Business School by CSND
              à Limas, et futur étudiant en Licence 3 Informatique pour septembre 2027.
              J&apos;ai travaillé en agence web sur la création de sites complets (WordPress, PrestaShop, PHP, JavaScript)
              et je conçois des applications full-stack avec Next.js, React, TypeScript et PostgreSQL.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={`mailto:${INFOS_PERSONNELLES.email}`}
                className="px-4 py-2 text-sm font-medium bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                Me contacter
              </a>
              <a
                href={INFOS_PERSONNELLES.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium bg-white border border-gray-200 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href={INFOS_PERSONNELLES.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium bg-white border border-gray-200 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="shrink-0">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src="/yekzan.webp"
                alt="Yekzan KUS"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section Projets réels d'agences */}
        <section id="projets" className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-950">
              Réalisations en entreprise
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Projets réels livrés lors de mes stages en agence web, tous consultables en ligne.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {REALISATIONS.map((projet) => (
              <article
                key={projet.id}
                className="group border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-colors flex flex-col justify-between bg-white"
              >
                <div className="relative aspect-[16/10] w-full bg-gray-100 border-b border-gray-100 overflow-hidden">
                  <Image
                    src={projet.image}
                    alt={projet.titre}
                    fill
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between gap-5">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="font-semibold text-gray-900">{projet.employeur}</span>
                      <span>{projet.annee}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-950 leading-snug">
                      {projet.titre}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {projet.contexte}
                    </p>

                    <div className="text-xs text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100 leading-relaxed">
                      <strong className="text-gray-900 font-medium">Réalisation : </strong>
                      {projet.solution}
                    </div>
                  </div>

                  <div className="space-y-4 pt-2 border-t border-gray-100">
                    <div className="flex flex-wrap gap-1.5">
                      {projet.stack.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-xs bg-gray-100 text-gray-700 rounded font-mono text-[0.7rem]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => setProjetModal(projet)}
                        className="text-xs font-medium text-gray-600 hover:text-gray-950 underline underline-offset-4"
                      >
                        Détails & résultats
                      </button>

                      <div className="flex items-center gap-2">
                        <a
                          href={projet.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-1.5 text-xs font-medium bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors inline-flex items-center gap-1.5"
                        >
                          <span>{projet.libelleLien || "Visiter le site"}</span>
                          <span aria-hidden="true">↗</span>
                        </a>

                        {projet.urlSecours && (
                          <a
                            href={projet.urlSecours}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 text-xs font-medium bg-white border border-gray-200 text-gray-700 rounded hover:bg-gray-50 transition-colors"
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

        {/* Section Projets applicatifs & académiques */}
        <section className="space-y-6 pt-4 border-t border-gray-100">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-gray-950">
              Projets applicatifs déployés
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Applications web interactives développées et hébergées en ligne.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJETS_APPLICATIFS.map((app, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-xl p-5 flex flex-col justify-between gap-3 hover:border-gray-300 transition-colors bg-white"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="font-medium text-gray-700">{app.type}</span>
                  </div>
                  <h3 className="font-semibold text-gray-950 text-base">{app.titre}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {app.description}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {app.stack.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[0.7rem] bg-gray-100 text-gray-600 rounded font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-3 border-t border-gray-100 text-xs">
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-gray-900 hover:underline"
                  >
                    Tester l&apos;application ↗
                  </a>
                  {app.github && (
                    <a
                      href={app.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-900"
                    >
                      Code GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Lettres de recommandation signées */}
        <section className="space-y-4 pt-4 border-t border-gray-100">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-gray-950">
              Recommandations & Attestations de stage
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Lettres officielles signées par mes tuteurs en agence web.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RECOMMANDATIONS.map((rec) => (
              <button
                key={rec.id}
                type="button"
                onClick={() => setRecommandationModal(rec.id)}
                className="text-left border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-colors flex flex-col justify-between gap-3 bg-white cursor-pointer"
              >
                <div>
                  <p className="text-xs font-semibold text-gray-950">{rec.entreprise}</p>
                  <p className="text-[0.75rem] text-gray-500 mt-0.5">{rec.auteur}</p>
                  <p className="text-xs text-gray-600 italic mt-2.5 line-clamp-3">
                    « {rec.citation} »
                  </p>
                </div>
                <span className="text-xs font-medium text-gray-900 underline underline-offset-2">
                  Voir la lettre signée ↗
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Section Parcours & Expériences */}
        <section id="parcours" className="space-y-6 pt-4 border-t border-gray-100">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-gray-950">
              Expériences professionnelles
            </h2>
          </div>

          <div className="space-y-6">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-xl p-6 space-y-3 bg-white"
              >
                <div className="flex flex-wrap items-center justify-between gap-1 text-xs text-gray-500">
                  <span className="font-semibold text-gray-950 text-sm">{exp.role}</span>
                  <span>{exp.periode}</span>
                </div>

                <p className="text-xs font-medium text-gray-700">
                  {exp.entreprise} — {exp.lieu}
                </p>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-1.5 text-xs text-gray-600">
                  {exp.missions.map((m, mIdx) => (
                    <li key={mIdx} className="flex items-start gap-2">
                      <span className="text-gray-400">•</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1 pt-2 border-t border-gray-100">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[0.7rem] bg-gray-100 text-gray-600 rounded font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Compétences & Formation */}
        <section id="competences" className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-gray-100">
          <div className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-gray-950">
              Compétences techniques
            </h2>

            <div className="space-y-3">
              {COMPETENCES.map((c, idx) => (
                <div key={idx} className="border border-gray-200 rounded-xl p-4 space-y-2 bg-white">
                  <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">{c.categorie}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {c.competences.map((comp, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2 py-1 text-xs bg-gray-50 text-gray-800 rounded border border-gray-200"
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
            <h2 className="text-xl font-bold tracking-tight text-gray-950">
              Formations
            </h2>

            <div className="space-y-3">
              {FORMATIONS.map((f, idx) => (
                <div key={idx} className="border border-gray-200 rounded-xl p-4 space-y-1 bg-white">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="font-semibold text-gray-950">{f.diplome}</span>
                    <span>{f.periode}</span>
                  </div>
                  <p className="text-xs text-gray-600">{f.etablissement}</p>
                  <p className="text-xs text-gray-500 leading-relaxed pt-1">
                    {f.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Contact direct */}
        <section id="contact" className="border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-4 bg-gray-50">
          <h2 className="text-xl font-bold tracking-tight text-gray-950">
            Me contacter
          </h2>
          <p className="text-sm text-gray-600">
            Disponible pour un échange, un entretien technique ou une opportunité d&apos;alternance (L3 Informatique, septembre 2027) :
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-1">
              <p className="text-xs text-gray-500 font-medium">Email</p>
              <a
                href={`mailto:${INFOS_PERSONNELLES.email}`}
                className="text-sm font-semibold text-gray-950 hover:underline block"
              >
                {INFOS_PERSONNELLES.email}
              </a>
            </div>

            <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-1">
              <p className="text-xs text-gray-500 font-medium">Téléphone</p>
              <a
                href={`tel:${INFOS_PERSONNELLES.telephoneBrut}`}
                className="text-sm font-semibold text-gray-950 hover:underline block"
              >
                {INFOS_PERSONNELLES.telephone}
              </a>
            </div>
          </div>

          <p className="text-xs text-gray-500 pt-1">
            Secteur géographique : Limas (69400), Villefranche-sur-Saône, Métropole de Lyon. Permis B en cours.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 text-center text-xs text-gray-500 bg-white">
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
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-xl p-6 sm:p-8 space-y-5 shadow-2xl border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setProjetModal(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center text-sm cursor-pointer"
              aria-label="Fermer"
            >
              ✕
            </button>

            <div>
              <p className="text-xs text-gray-500 font-medium">
                {projetModal.employeur} • {projetModal.annee}
              </p>
              <h3 className="text-xl font-bold text-gray-950 mt-1">
                {projetModal.titre}
              </h3>
            </div>

            <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
              <Image
                src={projetModal.image}
                alt={projetModal.titre}
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="space-y-3 text-sm text-gray-700">
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

            <div>
              <p className="text-xs font-semibold text-gray-950 mb-2">Résultats et livrables :</p>
              <ul className="space-y-1.5 text-xs text-gray-600">
                {projetModal.resultats.map((res, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {projetModal.stack.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-xs bg-gray-100 rounded text-gray-700 font-mono">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={projetModal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-medium bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors"
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
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-xl p-6 sm:p-8 space-y-5 shadow-2xl border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setRecommandationModal(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center text-sm cursor-pointer"
              aria-label="Fermer"
            >
              ✕
            </button>

            <div>
              <p className="text-xs text-gray-500 font-medium">
                Attestation de stage • {recommandationActive.annee}
              </p>
              <h3 className="text-xl font-bold text-gray-950 mt-1">
                {recommandationActive.entreprise}
              </h3>
              <p className="text-xs text-gray-600">
                {recommandationActive.auteur} — {recommandationActive.poste}
              </p>
            </div>

            <blockquote className="p-3 bg-gray-50 border-l-4 border-gray-900 text-xs text-gray-700 italic">
              « {recommandationActive.citation} »
            </blockquote>

            <div className="relative aspect-[3/4] sm:aspect-[4/3] w-full max-h-[60vh] rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
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
                  className={`px-3 py-1 text-xs rounded transition-colors cursor-pointer ${
                    r.id === recommandationModal
                      ? "bg-gray-900 text-white font-medium"
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
