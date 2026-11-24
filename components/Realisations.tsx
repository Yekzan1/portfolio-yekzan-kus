"use client";

import React, { useState } from "react";
import Image from "next/image";
import { REALISATIONS, Realisation } from "@/lib/data";
import { Bouton } from "./Bouton";

export function Realisations({
  onOuvrirRecommandation,
}: {
  onOuvrirRecommandation: (id: string) => void;
}) {
  const [filtre, setFiltre] = useState<"tous" | "ia" | "fullstack">("tous");
  const [projetSelectionne, setProjetSelectionne] = useState<Realisation | null>(null);

  const projetsFiltres =
    filtre === "tous"
      ? REALISATIONS
      : REALISATIONS.filter((p) => p.categorie === filtre);

  return (
    <section id="projets" className="section section--creuse">
      <div className="wrap">
        {/* En-tête de section */}
        <div className="max-w-3xl mb-12">
          <div className="badge">Études de cas & Réalisations</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2a1508] mt-3">
            Des projets réels livrés en autonomie, vérifiables en ligne
          </h2>
          <p className="text-base sm:text-lg text-[#5c4636] mt-4 leading-relaxed">
            Applications, sites web et scripts d&apos;automatisation développés en entreprise
            ou en R&amp;D personnelle, avec détails techniques et liens d&apos;accès directs.
          </p>

          {/* Filtres de catégorie */}
          <div className="flex flex-wrap items-center gap-2 mt-8">
            <button
              type="button"
              onClick={() => setFiltre("tous")}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                filtre === "tous"
                  ? "bg-[#2a1508] text-[#faf6ee] shadow-md"
                  : "bg-white/60 text-[#5c4636] hover:bg-white border border-[#c9a45c]/20"
              }`}
            >
              Tous les projets ({REALISATIONS.length})
            </button>
            <button
              type="button"
              onClick={() => setFiltre("ia")}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                filtre === "ia"
                  ? "bg-[#2a1508] text-[#faf6ee] shadow-md"
                  : "bg-white/60 text-[#5c4636] hover:bg-white border border-[#c9a45c]/20"
              }`}
            >
              Ingénierie IA & Données
            </button>
            <button
              type="button"
              onClick={() => setFiltre("fullstack")}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                filtre === "fullstack"
                  ? "bg-[#2a1508] text-[#faf6ee] shadow-md"
                  : "bg-white/60 text-[#5c4636] hover:bg-white border border-[#c9a45c]/20"
              }`}
            >
              Full-Stack, Web & PHP
            </button>
          </div>
        </div>

        {/* Grille des fiches projets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projetsFiltres.map((projet) => (
            <article
              key={projet.id}
              className="bg-[#faf6ee] border border-[#c9a45c]/30 rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Cadre écran façon Corvio */}
              <div className="p-4 sm:p-5 pb-0">
                <div className="fiche__vignette--ecran">
                  <div className="fiche__barre">
                    <span className="truncate max-w-[200px] sm:max-w-[280px]">
                      {projet.hote}
                    </span>
                    <div className="fiche__pastilles" aria-hidden="true">
                      <span className="fiche__pastille" />
                      <span className="fiche__pastille" />
                      <span className="fiche__pastille" />
                    </div>
                  </div>

                  <div className="relative aspect-[16/10] overflow-hidden bg-[#141210]">
                    <Image
                      src={projet.image}
                      alt={`Capture d'écran du projet ${projet.titre}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Corps de la fiche */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between gap-6">
                <div>
                  {/* Métadonnées & badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-[0.7rem] uppercase font-bold tracking-widest text-[#6b3319] bg-[#c9a45c]/15 px-3 py-1 rounded-full">
                      {projet.badge}
                    </span>
                    <span className="text-xs text-[#5c4636] font-medium">
                      {projet.employeur} • {projet.annee}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#2a1508] leading-tight mb-3">
                    {projet.titre}
                  </h3>

                  {/* Résumé du problème & solution */}
                  <div className="space-y-2 text-sm text-[#5c4636] leading-relaxed">
                    <p>
                      <strong className="text-[#2a1508]">Problème résolu : </strong>
                      {projet.probleme}
                    </p>
                    <p>
                      <strong className="text-[#2a1508]">Solution apportée : </strong>
                      {projet.solution}
                    </p>
                  </div>

                  {/* Stack technique */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {projet.stack.map((techno) => (
                      <span
                        key={techno}
                        className="text-[0.72rem] font-medium px-2.5 py-0.5 rounded-md bg-[#2a1508]/5 text-[#2a1508] border border-[#c9a45c]/20"
                      >
                        {techno}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Résultats & Actions */}
                <div className="pt-4 border-t border-[#c9a45c]/20 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setProjetSelectionne(projet)}
                    className="text-xs font-semibold text-[#6b3319] hover:text-[#2a1508] flex items-center gap-1.5 underline underline-offset-4 cursor-pointer"
                  >
                    <span>Consulter l'étude de cas complète</span>
                    <span aria-hidden="true">→</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={projet.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-[#2a1508] text-[#faf6ee] text-xs font-semibold uppercase tracking-wider hover:bg-[#6b3319] transition-colors flex items-center gap-1.5"
                    >
                      <span>{projet.libelleLien || "Voir le site"}</span>
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bannière de transition vers les lettres de recommandation */}
        <div className="mt-16 bg-[#141210] border border-[#e8c97a]/20 rounded-[28px] p-6 sm:p-8 text-[#faf6ee] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <span className="text-[0.7rem] uppercase tracking-widest font-bold text-[#e8c97a]">
              Témoignages & Lettres de recommandation
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#faf6ee]">
              Des attestations réelles signées par mes employeurs
            </h3>
            <p className="text-xs sm:text-sm text-[#faf6ee]/70 max-w-xl">
              Consultez les lettres officielles délivrées par Nexus Flow, Unimage Communication,
              Rougevert Communication et Martingale & Céleste attestant de mon travail en autonomie.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <Bouton
              onClick={() => onOuvrirRecommandation("nexus-flow")}
              ton="fantome"
              className="!text-xs !py-1.5 !px-4"
            >
              Nexus Flow
            </Bouton>
            <Bouton
              onClick={() => onOuvrirRecommandation("unimage")}
              ton="fantome"
              className="!text-xs !py-1.5 !px-4"
            >
              Unimage
            </Bouton>
            <Bouton
              onClick={() => onOuvrirRecommandation("rougevert")}
              ton="fantome"
              className="!text-xs !py-1.5 !px-4"
            >
              Rougevert
            </Bouton>
            <Bouton
              onClick={() => onOuvrirRecommandation("martingale")}
              ton="fantome"
              className="!text-xs !py-1.5 !px-4"
            >
              Martingale
            </Bouton>
          </div>
        </div>
      </div>

      {/* Modale d'Étude de Cas Détaillée */}
      {projetSelectionne && (
        <div
          className="modale-overlay"
          onClick={() => setProjetSelectionne(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modale-boite"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setProjetSelectionne(null)}
              className="modale-fermer"
              aria-label="Fermer la modale"
            >
              ✕
            </button>

            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#e8c97a]">
                  Étude de cas détaillée • {projetSelectionne.employeur} ({projetSelectionne.annee})
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#faf6ee] mt-1">
                  {projetSelectionne.titre}
                </h3>
              </div>

              {/* Image en grand */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#e8c97a]/20">
                <Image
                  src={projetSelectionne.image}
                  alt={projetSelectionne.titre}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Grille Problème / Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#141210] p-6 rounded-2xl border border-white/5">
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[#e8c97a] mb-2">
                    1. Contexte & Problème
                  </h4>
                  <p className="text-sm text-[#faf6ee]/80 leading-relaxed mb-3">
                    {projetSelectionne.contexte}
                  </p>
                  <p className="text-sm text-[#faf6ee]/90 leading-relaxed">
                    <strong>Défi technique : </strong>
                    {projetSelectionne.probleme}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[#e8c97a] mb-2">
                    2. Solution technique & Architecture
                  </h4>
                  <p className="text-sm text-[#faf6ee]/80 leading-relaxed">
                    {projetSelectionne.solution}
                  </p>
                </div>
              </div>

              {/* Résultats & Métriques */}
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#e8c97a] mb-3">
                  3. Résultats concrets mesurés
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {projetSelectionne.resultats.map((res, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-[#faf6ee]/85 bg-white/5 p-3 rounded-xl border border-white/5"
                    >
                      <span className="text-[#e8c97a] font-bold">✓</span>
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack & Liens */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {projetSelectionne.stack.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded bg-[#e8c97a]/15 text-[#e8c97a] border border-[#e8c97a]/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={projetSelectionne.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--or !text-xs !min-h-[2.5rem]"
                  >
                    {projetSelectionne.libelleLien || "Visiter le projet"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
