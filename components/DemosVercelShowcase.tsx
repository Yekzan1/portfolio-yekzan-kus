"use client";

import React, { useState } from "react";
import { DEMOS_VERCEL_HIGHLIGHTS } from "@/lib/data";

export function DemosVercelShowcase() {
  const [indexActif, setIndexActif] = useState(0);
  const demoActive = DEMOS_VERCEL_HIGHLIGHTS[indexActif];

  return (
    <section className="section section--sombre border-t border-[#e8c97a]/15">
      <div className="wrap">
        <div className="max-w-3xl mb-12">
          <div className="badge">Démos Interactives en Direct</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#faf6ee] mt-3">
            Des démos Next.js & Vercel déployées et testables en production
          </h2>
          <p className="text-base sm:text-lg text-[#faf6ee]/75 mt-4 leading-relaxed">
            Pour illustrer concrètement ma maîtrise de Next.js, de Tailwind CSS et des
            bonnes pratiques d'intégration (temps de chargement rapide et adaptation mobile),
            voici une sélection de démos fonctionnelles hébergées sur Vercel.
          </p>
        </div>

        {/* Grille : Sélecteur à gauche / Carte interactive à droite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Liste des démos à gauche */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {DEMOS_VERCEL_HIGHLIGHTS.map((demo, idx) => {
              const estActive = idx === indexActif;
              return (
                <button
                  key={demo.url}
                  type="button"
                  onClick={() => setIndexActif(idx)}
                  className={`text-left p-4 rounded-2xl transition-all border flex items-center justify-between cursor-pointer ${
                    estActive
                      ? "bg-[#e8c97a]/15 border-[#e8c97a] text-[#faf6ee] shadow-lg translate-x-1"
                      : "bg-[#141210] border-white/5 text-[#faf6ee]/70 hover:bg-white/5 hover:text-[#faf6ee]"
                  }`}
                >
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-[#faf6ee]">
                      {demo.titre}
                    </p>
                    <p className="text-xs text-[#e8c97a]/80 mt-0.5">
                      {demo.secteur}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#faf6ee]/40">
                    {estActive ? "●" : "→"}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Fiche d'aperçu de la démo sélectionnée à droite */}
          <div className="lg:col-span-7 bg-[#141210] border border-[#e8c97a]/30 rounded-[28px] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#e8c97a]">
                    {demoActive.secteur}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#faf6ee] mt-1">
                    {demoActive.titre}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>En ligne sur Vercel</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#faf6ee]/80 leading-relaxed">
                {demoActive.description}
              </p>

              {/* URL et bouton d'action directe */}
              <div className="bg-[#0d0b09] p-4 rounded-xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs font-mono text-[#e8c97a] truncate max-w-full">
                  {demoActive.url}
                </div>
                <a
                  href={demoActive.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#e8c97a] to-[#c9a45c] text-[#0d0b09] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2 whitespace-nowrap shadow-md"
                >
                  <span>Tester la démo en direct</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>

              {/* Métriques d'optimisation ciblées */}
              <div className="grid grid-cols-3 gap-3 pt-2 text-center">
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                  <span className="text-[#e8c97a] font-bold text-sm font-mono">Next.js 15</span>
                  <p className="text-[0.65rem] uppercase tracking-wider text-[#faf6ee]/60 mt-0.5">
                    Architecture App Router
                  </p>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                  <span className="text-[#e8c97a] font-bold text-sm font-mono">Tailwind CSS</span>
                  <p className="text-[0.65rem] uppercase tracking-wider text-[#faf6ee]/60 mt-0.5">
                    Responsive &amp; Mobile-first
                  </p>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                  <span className="text-[#e8c97a] font-bold text-sm font-mono">Lighthouse</span>
                  <p className="text-[0.65rem] uppercase tracking-wider text-[#faf6ee]/60 mt-0.5">
                    Optimisé SEO &amp; Perf
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
