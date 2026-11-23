import React from "react";
import { INFOS_PERSONNELLES } from "@/lib/data";

const ANNEE = new Date().getFullYear();

export function Pied() {
  return (
    <footer className="pied py-12 border-t border-[#e8c97a]/15 bg-[#0d0b09] text-[#faf6ee]/70">
      <div className="wrap">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-serif font-bold text-xl text-[#faf6ee]">
              {INFOS_PERSONNELLES.nom}
            </span>
            <span className="text-xs text-[#e8c97a] mt-0.5">
              Candidat Alternance Licence 3 Informatique • Septembre 2027
            </span>
            <p className="text-xs text-[#faf6ee]/50 max-w-md mt-2">
              Étudiant en BTS SIO SLAM à Business School by CSND (Limas). Concepteur
              d'applications web et intégrateur de solutions d'automatisation et d'IA.
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs uppercase tracking-wider font-semibold">
            <a href="#projets" className="hover:text-[#e8c97a] transition-colors">
              Projets
            </a>
            <a href="#competences" className="hover:text-[#e8c97a] transition-colors">
              Compétences
            </a>
            <a href="#parcours" className="hover:text-[#e8c97a] transition-colors">
              Parcours
            </a>
            <a href="#contact" className="hover:text-[#e8c97a] transition-colors">
              Contact
            </a>
            <a
              href={INFOS_PERSONNELLES.cvPdf}
              download
              className="text-[#e8c97a] hover:underline"
            >
              CV (PDF)
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[0.7rem] text-[#faf6ee]/40">
          <p>© {ANNEE} {INFOS_PERSONNELLES.nom}. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <a
              href={INFOS_PERSONNELLES.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#e8c97a] transition-colors"
            >
              GitHub : @Yekzan1
            </a>
            <span>•</span>
            <a
              href={INFOS_PERSONNELLES.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#e8c97a] transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <span>Mobilité : Limas / Villefranche / Lyon</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
