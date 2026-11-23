"use client";

import React, { useState, useEffect } from "react";
import { INFOS_PERSONNELLES } from "@/lib/data";
import { Bouton } from "./Bouton";

const LIENS = [
  { href: "#projets", label: "Projets & Études de cas" },
  { href: "#competences", label: "Compétences" },
  { href: "#parcours", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [estScrolle, setEstScrolle] = useState(false);
  const [menuMobileOuvert, setMenuMobileOuvert] = useState(false);

  useEffect(() => {
    const gererScroll = () => {
      setEstScrolle(window.scrollY > 40);
    };
    window.addEventListener("scroll", gererScroll, { passive: true });
    return () => window.removeEventListener("scroll", gererScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        estScrolle
          ? "py-3 bg-[#0d0b09]/90 backdrop-blur-md border-b border-[#e8c97a]/15 shadow-xl"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="wrap flex items-center justify-between gap-4">
        {/* Identité */}
        <a
          href="#"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="Retour en haut"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#e8c97a] via-[#c9a45c] to-[#996e2b] flex items-center justify-center font-bold text-[#0d0b09] text-sm shadow-md group-hover:scale-105 transition-transform">
            YK
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-base tracking-tight text-[#faf6ee] group-hover:text-[#e8c97a] transition-colors">
              {INFOS_PERSONNELLES.nom}
            </span>
            <span className="text-[0.65rem] uppercase tracking-widest text-[#e8c97a]/80 font-medium">
              Licence 3 Informatique 2027
            </span>
          </div>
        </a>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#141210]/70 border border-[#e8c97a]/20 px-4 py-1.5 rounded-full backdrop-blur-sm">
          {LIENS.map((lien) => (
            <a
              key={lien.href}
              href={lien.href}
              className="px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-[#faf6ee]/80 hover:text-[#e8c97a] hover:bg-white/5 rounded-full transition-all"
            >
              {lien.label}
            </a>
          ))}
        </nav>

        {/* Actions & Téléchargement CV */}
        <div className="hidden sm:flex items-center gap-3">
          <Bouton
            href={INFOS_PERSONNELLES.cvPdf}
            download="CV-Yekzan-KUS-Alternance-L3.pdf"
            ton="or"
            className="!min-h-[2.5rem] !py-1 !px-4 !text-xs"
          >
            Télécharger mon CV
          </Bouton>
        </div>

        {/* Bouton Hamburger Mobile */}
        <button
          type="button"
          onClick={() => setMenuMobileOuvert(!menuMobileOuvert)}
          className="lg:hidden p-2 rounded-lg bg-white/5 text-[#faf6ee] border border-white/10 hover:text-[#e8c97a] focus:outline-none"
          aria-label={menuMobileOuvert ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuMobileOuvert ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile dépliant */}
      {menuMobileOuvert && (
        <div className="lg:hidden bg-[#0d0b09]/98 border-b border-[#e8c97a]/20 px-6 py-6 mt-3 shadow-2xl flex flex-col gap-4">
          <nav className="flex flex-col gap-2">
            {LIENS.map((lien) => (
              <a
                key={lien.href}
                href={lien.href}
                onClick={() => setMenuMobileOuvert(false)}
                className="py-2 text-sm font-medium uppercase tracking-wider text-[#faf6ee] hover:text-[#e8c97a] border-b border-white/5"
              >
                {lien.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <Bouton
              href={INFOS_PERSONNELLES.cvPdf}
              download="CV-Yekzan-KUS-Alternance-L3.pdf"
              ton="or"
              className="w-full justify-center"
              onClick={() => setMenuMobileOuvert(false)}
            >
              Télécharger mon CV (PDF)
            </Bouton>
          </div>
        </div>
      )}
    </header>
  );
}
