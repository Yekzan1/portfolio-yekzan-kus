"use client";

import React from "react";
import Image from "next/image";
import { RECOMMANDATIONS } from "@/lib/data";

interface RecommandationsModalProps {
  idActif: string | null;
  onFermer: () => void;
  onChanger: (id: string) => void;
}

export function RecommandationsModal({
  idActif,
  onFermer,
  onChanger,
}: RecommandationsModalProps) {
  if (!idActif) return null;

  const recommandation =
    RECOMMANDATIONS.find((r) => r.id === idActif) || RECOMMANDATIONS[0];

  return (
    <div
      className="modale-overlay"
      onClick={onFermer}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="modale-boite !max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onFermer}
          className="modale-fermer"
          aria-label="Fermer la lettre"
        >
          ✕
        </button>

        {/* En-tête */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#e8c97a]">
              Attestation officielle de travail
            </span>
            <span className="text-xs text-[#faf6ee]/60">
              {recommandation.annee}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#faf6ee] mt-1">
            {recommandation.entreprise}
          </h3>
          <p className="text-xs sm:text-sm text-[#e8c97a] mt-0.5">
            {recommandation.auteur} — {recommandation.poste}
          </p>
        </div>

        {/* Citation clé */}
        <blockquote className="bg-[#141210] p-4 rounded-xl border-l-4 border-[#e8c97a] text-sm text-[#faf6ee]/90 italic mb-6">
          « {recommandation.citation} »
        </blockquote>

        {/* Scan authentique de la lettre */}
        <div className="relative aspect-[3/4] sm:aspect-[4/3] w-full max-h-[60vh] rounded-xl overflow-hidden bg-white shadow-inner border border-white/20 mb-6">
          <Image
            src={recommandation.image}
            alt={`Lettre de recommandation de ${recommandation.entreprise}`}
            fill
            className="object-contain p-2"
          />
        </div>

        {/* Onglets de sélection pour basculer facilement */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4 border-t border-white/10">
          {RECOMMANDATIONS.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => onChanger(r.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                r.id === idActif
                  ? "bg-[#e8c97a] text-[#0d0b09] font-bold"
                  : "bg-white/5 text-[#faf6ee]/70 hover:bg-white/10"
              }`}
            >
              {r.entreprise}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
