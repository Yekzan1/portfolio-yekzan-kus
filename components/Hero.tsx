import React from "react";
import Image from "next/image";
import { INFOS_PERSONNELLES } from "@/lib/data";
import { Bouton } from "./Bouton";

export function Hero() {
  return (
    <section className="section section--heros min-h-[88vh] flex items-center pt-32 pb-20 relative overflow-hidden">
      {/* Halo lumineux d'ambiance */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a45c]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="wrap relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Colonne Gauche : Texte & Accroche */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            {/* Badge Disponibilité sobre */}
            <div className="badge badge--vert">
              <span className="text-[#faf6ee] font-semibold">
                {INFOS_PERSONNELLES.statutAlternance}
              </span>
            </div>

            {/* Titre Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#faf6ee] leading-[1.08]">
              Yekzan KUS <br />
              <span className="text-[#e8c97a] font-normal italic">
                Développeur Web & Concepteur d&apos;Applications
              </span>
            </h1>

            {/* Positionnement sobre et factuel */}
            <p className="text-base sm:text-lg text-[#faf6ee]/85 max-w-2xl leading-relaxed">
              Étudiant en 2<sup>e</sup> année de{" "}
              <strong className="text-[#faf6ee]">BTS SIO option SLAM</strong> (Business
              School by CSND, Limas), futur étudiant en{" "}
              <strong className="text-[#e8c97a]">Licence 3 Informatique</strong>. J&apos;interviens
              sur la conception de sites web, le développement full-stack (Next.js, PHP, React, SQL)
              et l&apos;automatisation de flux de travail.
            </p>

            {/* Actions & Réseaux */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Bouton href="#projets" ton="or">
                Voir mes réalisations
              </Bouton>

              <Bouton
                href={INFOS_PERSONNELLES.cvPdf}
                download="CV-Yekzan-KUS.pdf"
                ton="fantome"
              >
                Télécharger le CV (PDF)
              </Bouton>

              {/* Liens GitHub & LinkedIn */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={INFOS_PERSONNELLES.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/5 border border-[#e8c97a]/20 flex items-center justify-center text-[#faf6ee] hover:text-[#e8c97a] hover:bg-white/10 transition-all hover:scale-105"
                  aria-label="Profil GitHub de Yekzan KUS"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                </a>

                <a
                  href={INFOS_PERSONNELLES.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/5 border border-[#e8c97a]/20 flex items-center justify-center text-[#faf6ee] hover:text-[#e8c97a] hover:bg-white/10 transition-all hover:scale-105"
                  aria-label="Profil LinkedIn de Yekzan KUS"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.37 9.74v-8.37H5.09v8.37h2.74z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Infos localisation & rythme */}
            <div className="flex flex-wrap gap-y-2 gap-x-6 text-xs text-[#faf6ee]/70 border-t border-white/10 pt-4 mt-2">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c9a45c]" />
                Secteur : {INFOS_PERSONNELLES.localisation}
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c9a45c]" />
                {INFOS_PERSONNELLES.permis}
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c9a45c]" />
                {INFOS_PERSONNELLES.rythme}
              </span>
            </div>
          </div>

          {/* Colonne Droite : Photo professionnelle */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              <div
                className="absolute -inset-3 rounded-[32px] bg-gradient-to-tr from-[#c9a45c]/40 via-transparent to-[#e8c97a]/20 blur-sm group-hover:blur-md transition-all duration-500"
                aria-hidden="true"
              />

              <div className="relative rounded-[28px] overflow-hidden border border-[#e8c97a]/30 bg-[#141210] shadow-2xl p-2.5 max-w-[340px] sm:max-w-[380px]">
                <div className="relative w-full aspect-[4/5] rounded-[22px] overflow-hidden bg-[#0d0b09]">
                  <Image
                    src="/yekzan.webp"
                    alt="Photo professionnelle de Yekzan KUS"
                    fill
                    priority
                    sizes="(max-width: 768px) 320px, 380px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b09]/80 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 bg-[#0d0b09]/90 border border-[#e8c97a]/30 p-3 rounded-xl backdrop-blur-md">
                    <p className="text-xs font-semibold text-[#faf6ee]">
                      Yekzan KUS
                    </p>
                    <p className="text-[0.7rem] text-[#e8c97a]">
                      Développeur Web & Concepteur d&apos;Applications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chiffres factuels */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-[#e8c97a]/15">
          <div className="bg-[#141210]/60 border border-[#e8c97a]/15 p-5 rounded-2xl">
            <p className="text-3xl sm:text-4xl font-bold text-[#e8c97a] font-serif">
              6
            </p>
            <p className="text-xs uppercase tracking-wider text-[#faf6ee]/70 mt-1">
              Stages et missions réalisés
            </p>
          </div>

          <div className="bg-[#141210]/60 border border-[#e8c97a]/15 p-5 rounded-2xl">
            <p className="text-3xl sm:text-4xl font-bold text-[#e8c97a] font-serif">
              2 sem.
            </p>
            <p className="text-xs uppercase tracking-wider text-[#faf6ee]/70 mt-1">
              Livraison plateforme After&apos;ish
            </p>
          </div>

          <div className="bg-[#141210]/60 border border-[#e8c97a]/15 p-5 rounded-2xl">
            <p className="text-3xl sm:text-4xl font-bold text-[#e8c97a] font-serif">
              3 jours
            </p>
            <p className="text-xs uppercase tracking-wider text-[#faf6ee]/70 mt-1">
              Développement portail UNSA
            </p>
          </div>

          <div className="bg-[#141210]/60 border border-[#e8c97a]/15 p-5 rounded-2xl">
            <p className="text-3xl sm:text-4xl font-bold text-[#e8c97a] font-serif">
              100%
            </p>
            <p className="text-xs uppercase tracking-wider text-[#faf6ee]/70 mt-1">
              Liens réels et vérifiables
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
