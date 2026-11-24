"use client";

import React, { useState } from "react";
import { INFOS_PERSONNELLES } from "@/lib/data";
import { Bouton } from "./Bouton";

export function Contact() {
  const [copieEmail, setCopieEmail] = useState(false);
  const [copieTel, setCopieTel] = useState(false);

  const copier = (texte: string, type: "email" | "tel") => {
    navigator.clipboard.writeText(texte);
    if (type === "email") {
      setCopieEmail(true);
      setTimeout(() => setCopieEmail(false), 2200);
    } else {
      setCopieTel(true);
      setTimeout(() => setCopieTel(false), 2200);
    }
  };

  return (
    <section id="contact" className="section section--creuse border-t border-[#c9a45c]/25">
      <div className="wrap">
        <div className="max-w-3xl mb-12">
          <div className="badge">Me Contacter</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2a1508] mt-3">
            Échangeons sur votre alternance pour septembre 2027
          </h2>
          <p className="text-base sm:text-lg text-[#5c4636] mt-4 leading-relaxed">
            Je suis disponible pour convenir d'un premier échange téléphonique, d'une visio
            ou d'une rencontre en personne sur le secteur de Villefranche-sur-Saône ou de Lyon.
          </p>
        </div>

        {/* Grille des coordonnées directes (sans formulaire) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Carte 1 : Coordonnées directes */}
          <div className="bg-[#faf6ee] border border-[#c9a45c]/35 rounded-[28px] p-7 sm:p-9 shadow-md flex flex-col justify-between gap-6">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#6b3319]">
                  Ligne directe
                </span>
                <h3 className="text-2xl font-bold text-[#2a1508] mt-1">
                  Yekzan KUS
                </h3>
                <p className="text-xs sm:text-sm text-[#5c4636] mt-0.5">
                  Étudiant BTS SIO SLAM • Futur Licence 3 Informatique
                </p>
              </div>

              {/* Email */}
              <div className="bg-white/90 p-4 sm:p-5 rounded-2xl border border-[#c9a45c]/25 flex items-center justify-between gap-3 shadow-xs">
                <div className="truncate">
                  <p className="text-[0.7rem] uppercase font-bold text-[#5c4636]">
                    Email personnel
                  </p>
                  <a
                    href={`mailto:${INFOS_PERSONNELLES.email}`}
                    className="text-base sm:text-lg font-semibold text-[#2a1508] hover:text-[#c9a45c] transition-colors truncate block"
                  >
                    {INFOS_PERSONNELLES.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copier(INFOS_PERSONNELLES.email, "email")}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#2a1508]/5 text-[#6b3319] hover:bg-[#2a1508]/10 transition-colors shrink-0 cursor-pointer"
                  aria-label="Copier l'adresse email"
                >
                  {copieEmail ? "✓ Copié" : "Copier"}
                </button>
              </div>

              {/* Téléphone */}
              <div className="bg-white/90 p-4 sm:p-5 rounded-2xl border border-[#c9a45c]/25 flex items-center justify-between gap-3 shadow-xs">
                <div>
                  <p className="text-[0.7rem] uppercase font-bold text-[#5c4636]">
                    Téléphone direct
                  </p>
                  <a
                    href={`tel:${INFOS_PERSONNELLES.telephoneBrut}`}
                    className="text-base sm:text-lg font-semibold text-[#2a1508] hover:text-[#c9a45c] transition-colors block"
                  >
                    {INFOS_PERSONNELLES.telephone}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copier(INFOS_PERSONNELLES.telephone, "tel")}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#2a1508]/5 text-[#6b3319] hover:bg-[#2a1508]/10 transition-colors shrink-0 cursor-pointer"
                  aria-label="Copier le numéro de téléphone"
                >
                  {copieTel ? "✓ Copié" : "Copier"}
                </button>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`mailto:${INFOS_PERSONNELLES.email}?subject=Prise%20de%20contact%20Alternance%20L3`}
                className="btn btn--or w-full justify-center !min-h-[3rem]"
              >
                M'écrire un e-mail
              </a>
            </div>
          </div>

          {/* Carte 2 : Mobilité, Liens & Document */}
          <div className="bg-[#faf6ee] border border-[#c9a45c]/35 rounded-[28px] p-7 sm:p-9 shadow-md flex flex-col justify-between gap-6">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#6b3319]">
                  Modalités & Localisation
                </span>
                <h3 className="text-2xl font-bold text-[#2a1508] mt-1">
                  Disponibilité & Mobilité
                </h3>
              </div>

              <div className="bg-white/90 p-5 rounded-2xl border border-[#c9a45c]/25 space-y-3 shadow-xs text-xs sm:text-sm text-[#5c4636]">
                <p className="flex items-start gap-2.5">
                  <span className="text-[#c9a45c] font-bold mt-0.5">●</span>
                  <span>
                    <strong className="text-[#2a1508]">Zone géographique : </strong>
                    Limas (69400), Villefranche-sur-Saône et Métropole de Lyon.
                  </span>
                </p>
                <p className="flex items-start gap-2.5">
                  <span className="text-[#c9a45c] font-bold mt-0.5">●</span>
                  <span>
                    <strong className="text-[#2a1508]">Mobilité : </strong>
                    Permis B (en cours), mobilité quotidienne via réseau TER et TCL.
                  </span>
                </p>
                <p className="flex items-start gap-2.5">
                  <span className="text-[#c9a45c] font-bold mt-0.5">●</span>
                  <span>
                    <strong className="text-[#2a1508]">Contrat d'alternance : </strong>
                    Rentrée de septembre 2027 (durée 1 an, Licence 3 Informatique).
                  </span>
                </p>
              </div>

              {/* Réseaux pro */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={INFOS_PERSONNELLES.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/90 border border-[#c9a45c]/25 text-center text-xs font-semibold text-[#2a1508] hover:border-[#c9a45c] hover:bg-white transition-all block shadow-xs"
                >
                  Profil LinkedIn ↗
                </a>
                <a
                  href={INFOS_PERSONNELLES.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/90 border border-[#c9a45c]/25 text-center text-xs font-semibold text-[#2a1508] hover:border-[#c9a45c] hover:bg-white transition-all block shadow-xs"
                >
                  Compte GitHub ↗
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Bouton
                href={INFOS_PERSONNELLES.cvPdf}
                download="CV-Yekzan-KUS-Alternance-L3.pdf"
                ton="fantome-clair"
                className="w-full justify-center !min-h-[3rem]"
              >
                Télécharger mon CV (PDF)
              </Bouton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
