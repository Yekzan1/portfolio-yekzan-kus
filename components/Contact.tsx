"use client";

import React, { useState } from "react";
import { INFOS_PERSONNELLES } from "@/lib/data";
import { Bouton } from "./Bouton";

export function Contact() {
  const [copieEmail, setCopieEmail] = useState(false);
  const [copieTel, setCopieTel] = useState(false);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [envoye, setEnvoye] = useState(false);

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

  const soumettreFormulaire = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    
    // Ouvrir mailto pré-rempli pour garantie zéro perte et sans dépendance serveur
    const sujet = encodeURIComponent(`Prise de contact alternance L3 — ${nom || "Recruteur"}`);
    const corps = encodeURIComponent(`De: ${nom} (${email})\n\nMessage:\n${message}`);
    window.location.href = `mailto:${INFOS_PERSONNELLES.email}?subject=${sujet}&body=${corps}`;
    setEnvoye(true);
  };

  return (
    <section id="contact" className="section section--creuse border-t border-[#c9a45c]/25">
      <div className="wrap">
        <div className="max-w-3xl mb-12">
          <div className="badge">Contact & Échange</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2a1508] mt-3">
            Échangeons sur votre projet d'alternance pour septembre 2027
          </h2>
          <p className="text-base sm:text-lg text-[#5c4636] mt-4 leading-relaxed">
            Vous recherchez un profil autonome, rigoureux et immédiatement opérationnel
            en développement web, back-end ou intégration d'IA ? Je suis à votre disposition
            pour un entretien ou un échange technique.
          </p>
        </div>

        {/* Grille : Coordonnées directes / Formulaire */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Colonne Coordonnées Directes */}
          <div className="lg:col-span-5 bg-[#faf6ee] border border-[#c9a45c]/35 rounded-[28px] p-6 sm:p-8 shadow-md space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6b3319]">
                Coordonnées directes
              </span>
              <h3 className="text-xl font-bold text-[#2a1508] mt-1">
                Yekzan KUS
              </h3>
              <p className="text-xs text-[#5c4636] mt-0.5">
                Candidat Alternance Licence 3 Informatique (1 an)
              </p>
            </div>

            {/* Email avec bouton copie */}
            <div className="bg-white/90 p-4 rounded-2xl border border-[#c9a45c]/25 flex items-center justify-between gap-3 shadow-xs">
              <div>
                <p className="text-[0.7rem] uppercase font-bold text-[#5c4636]">
                  Adresse e-mail
                </p>
                <a
                  href={`mailto:${INFOS_PERSONNELLES.email}`}
                  className="text-sm font-semibold text-[#2a1508] hover:text-[#c9a45c] transition-colors"
                >
                  {INFOS_PERSONNELLES.email}
                </a>
              </div>
              <button
                type="button"
                onClick={() => copier(INFOS_PERSONNELLES.email, "email")}
                className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#2a1508]/5 text-[#6b3319] hover:bg-[#2a1508]/10 transition-colors"
                aria-label="Copier l'adresse email"
              >
                {copieEmail ? "✓ Copié !" : "Copier"}
              </button>
            </div>

            {/* Téléphone avec bouton copie */}
            <div className="bg-white/90 p-4 rounded-2xl border border-[#c9a45c]/25 flex items-center justify-between gap-3 shadow-xs">
              <div>
                <p className="text-[0.7rem] uppercase font-bold text-[#5c4636]">
                  Téléphone direct
                </p>
                <a
                  href={`tel:${INFOS_PERSONNELLES.telephoneBrut}`}
                  className="text-sm font-semibold text-[#2a1508] hover:text-[#c9a45c] transition-colors"
                >
                  {INFOS_PERSONNELLES.telephone}
                </a>
              </div>
              <button
                type="button"
                onClick={() => copier(INFOS_PERSONNELLES.telephone, "tel")}
                className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#2a1508]/5 text-[#6b3319] hover:bg-[#2a1508]/10 transition-colors"
                aria-label="Copier le numéro de téléphone"
              >
                {copieTel ? "✓ Copié !" : "Copier"}
              </button>
            </div>

            {/* Localisation & Mobilité */}
            <div className="space-y-2 pt-2 text-xs text-[#5c4636]">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c9a45c]" />
                <strong>Localisation : </strong> {INFOS_PERSONNELLES.localisation}
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c9a45c]" />
                <strong>Mobilité : </strong> {INFOS_PERSONNELLES.permis} + réseau TER/TCL
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c9a45c]" />
                <strong>Disponibilité : </strong> Septembre 2027 (rythme 1 an)
              </p>
            </div>

            {/* Téléchargement direct du CV */}
            <div className="pt-2">
              <Bouton
                href={INFOS_PERSONNELLES.cvPdf}
                download="CV-Yekzan-KUS-Alternance-L3.pdf"
                ton="fantome-clair"
                className="w-full justify-center !min-h-[2.85rem]"
              >
                Télécharger mon CV complet (PDF)
              </Bouton>
            </div>
          </div>

          {/* Formulaire de Contact */}
          <div className="lg:col-span-7 bg-[#faf6ee] border border-[#c9a45c]/35 rounded-[28px] p-6 sm:p-8 shadow-md">
            <h3 className="text-xl font-bold text-[#2a1508] mb-1">
              Envoyer un message direct
            </h3>
            <p className="text-xs text-[#5c4636] mb-6">
              Remplissez ce formulaire pour m'adresser votre demande ou convenir d'un rendez-vous.
            </p>

            {envoye ? (
              <div className="bg-emerald-50 border border-emerald-300 p-6 rounded-2xl text-center space-y-2">
                <span className="text-2xl">✓</span>
                <h4 className="font-bold text-emerald-900 text-base">
                  Votre client email s'est ouvert avec le message pré-rempli !
                </h4>
                <p className="text-xs text-emerald-700">
                  Si la fenêtre ne s'est pas ouverte, vous pouvez m'écrire directement à{" "}
                  <strong>{INFOS_PERSONNELLES.email}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={soumettreFormulaire} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#5c4636] mb-1">
                      Votre Nom / Entreprise
                    </label>
                    <input
                      type="text"
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                      placeholder="Ex: Entreprise Tech / RH"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#c9a45c]/30 text-sm text-[#2a1508] focus:outline-none focus:border-[#c9a45c]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#5c4636] mb-1">
                      Votre Adresse Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nom@entreprise.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#c9a45c]/30 text-sm text-[#2a1508] focus:outline-none focus:border-[#c9a45c]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#5c4636] mb-1">
                    Votre Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Présentez votre entreprise, le poste d'alternance ou proposez une date d'échange..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#c9a45c]/30 text-sm text-[#2a1508] focus:outline-none focus:border-[#c9a45c]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#2a1508] text-[#faf6ee] font-semibold text-xs uppercase tracking-wider hover:bg-[#6b3319] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Envoyer mon message</span>
                  <span aria-hidden="true">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
