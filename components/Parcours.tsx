import React from "react";
import { EXPERIENCES, FORMATIONS, ATOUTS } from "@/lib/data";

export function Parcours() {
  return (
    <section id="parcours" className="section section--sombre">
      <div className="wrap">
        <div className="max-w-3xl mb-14">
          <div className="badge">Expériences & Cursus</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#faf6ee] mt-3">
            Un parcours professionnalisant axé sur la livraison concrète
          </h2>
          <p className="text-base sm:text-lg text-[#faf6ee]/75 mt-4 leading-relaxed">
            Dès mes premières années d'études, j'ai choisi de multiplier les expériences
            en agence web et en entreprise afin de me confronter directement aux contraintes
            de production, aux exigences clients et aux délais serrés.
          </p>
        </div>

        {/* Section Expériences Professionnelles (6 expériences) */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-[#e8c97a] mb-8 flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e8c97a]" />
            Expériences Professionnelles (6 étapes clés)
          </h3>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 sm:before:left-4 before:w-0.5 before:bg-[#e8c97a]/20">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={idx}
                className="relative pl-9 sm:pl-12 group"
              >
                {/* Pastille de timeline */}
                <div className="absolute left-1.5 sm:left-2.5 top-1.5 w-3.5 h-3.5 -translate-x-1/2 rounded-full bg-[#141210] border-2 border-[#e8c97a] group-hover:scale-125 transition-transform" />

                <div className="bg-[#141210] border border-[#e8c97a]/20 p-6 sm:p-7 rounded-[22px] shadow-lg hover:border-[#e8c97a]/50 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#e8c97a]">
                      {exp.periode}
                    </span>
                    <span className="text-xs text-[#faf6ee]/60">
                      {exp.lieu}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-[#faf6ee] mb-1">
                    {exp.role} — <span className="text-[#e8c97a] font-normal">{exp.entreprise}</span>
                  </h4>

                  <p className="text-xs sm:text-sm text-[#faf6ee]/80 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5 mb-4">
                    {exp.missions.map((m, mIdx) => (
                      <li
                        key={mIdx}
                        className="text-xs text-[#faf6ee]/70 flex items-start gap-2"
                      >
                        <span className="text-[#e8c97a] mt-0.5">▹</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {exp.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[0.68rem] px-2 py-0.5 rounded bg-white/5 text-[#e8c97a] border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grille Formations & Atouts Personnels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-[#e8c97a]/20">
          {/* Cursus Académique */}
          <div className="lg:col-span-7">
            <h3 className="text-xl sm:text-2xl font-bold text-[#e8c97a] mb-6 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e8c97a]" />
              Formation Académique
            </h3>

            <div className="space-y-4">
              {FORMATIONS.map((f, idx) => (
                <div
                  key={idx}
                  className="bg-[#141210] border border-[#e8c97a]/20 p-5 rounded-2xl"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-mono font-semibold text-[#e8c97a]">
                      {f.periode}
                    </span>
                    {f.statut && (
                      <span className="text-[0.65rem] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#e8c97a]/20 text-[#e8c97a] border border-[#e8c97a]/40">
                        {f.statut}
                      </span>
                    )}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-[#faf6ee]">
                    {f.diplome}
                  </h4>
                  <p className="text-xs text-[#faf6ee]/60 mt-0.5">
                    {f.etablissement}
                  </p>
                  <p className="text-xs text-[#faf6ee]/75 mt-2 leading-relaxed">
                    {f.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Atouts & Discipline */}
          <div className="lg:col-span-5">
            <h3 className="text-xl sm:text-2xl font-bold text-[#e8c97a] mb-6 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e8c97a]" />
              Atouts & Discipline
            </h3>

            <div className="space-y-4">
              {ATOUTS.map((atout, idx) => (
                <div
                  key={idx}
                  className="bg-[#141210] border border-[#e8c97a]/20 p-5 rounded-2xl"
                >
                  <span className="text-xs uppercase font-bold tracking-widest text-[#e8c97a]">
                    {atout.titre}
                  </span>
                  <h4 className="text-sm sm:text-base font-semibold text-[#faf6ee] mt-1">
                    {atout.valeur}
                  </h4>
                  <p className="text-xs text-[#faf6ee]/70 mt-1.5 leading-relaxed">
                    {atout.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
