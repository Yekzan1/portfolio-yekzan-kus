import React from "react";
import { COMPETENCES } from "@/lib/data";

export function Competences() {
  return (
    <section id="competences" className="section section--creuse">
      <div className="wrap">
        <div className="max-w-3xl mb-12">
          <div className="badge">Stack & Savoir-Faire</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2a1508] mt-3">
            Compétences techniques structurées par pôles d'expertise
          </h2>
          <p className="text-base sm:text-lg text-[#5c4636] mt-4 leading-relaxed">
            Un socle solide acquis en formation rigoureuse (BTS SIO SLAM, future Licence 3)
            et forgé par la pratique quotidienne en production sur des architectures web
            et des écosystèmes d'agents d'intelligence artificielle.
          </p>
        </div>

        {/* Grille des 4 pôles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COMPETENCES.map((pole, idx) => (
            <div
              key={idx}
              className="bg-[#faf6ee] border border-[#c9a45c]/35 rounded-[26px] p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* En-tête du pôle */}
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2a1508]">
                    {pole.categorie}
                  </h3>
                  <span className="w-8 h-8 rounded-full bg-[#c9a45c]/20 flex items-center justify-center text-[#6b3319] font-mono text-xs font-bold">
                    0{idx + 1}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#5c4636] mb-6 leading-relaxed">
                  {pole.description}
                </p>

                {/* Liste des compétences */}
                <div className="space-y-3">
                  {pole.competences.map((comp, cIdx) => (
                    <div
                      key={cIdx}
                      className="bg-white/80 p-3 sm:p-3.5 rounded-xl border border-[#c9a45c]/20 flex items-center justify-between gap-3 shadow-xs"
                    >
                      <div className="space-y-0.5">
                        <p className="text-sm font-semibold text-[#2a1508]">
                          {comp.nom}
                        </p>
                        <p className="text-xs text-[#5c4636]">
                          {comp.niveau}
                        </p>
                      </div>
                      <span className="text-[0.65rem] uppercase font-bold tracking-wider px-2 py-1 rounded bg-[#2a1508]/5 text-[#6b3319] border border-[#c9a45c]/30">
                        {comp.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Liseré subtil de pied de carte */}
              <div className="mt-6 pt-4 border-t border-[#c9a45c]/20 flex items-center justify-between text-xs text-[#5c4636]">
                <span>Pratique vérifiée sur projets réels</span>
                <span className="font-mono text-[#6b3319]">● Opérationnel</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
