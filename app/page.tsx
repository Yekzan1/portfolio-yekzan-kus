"use client";

import React, { useState } from "react";
import { Hero } from "@/components/Hero";
import { Realisations } from "@/components/Realisations";
import { DemosVercelShowcase } from "@/components/DemosVercelShowcase";
import { Competences } from "@/components/Competences";
import { Parcours } from "@/components/Parcours";
import { Contact } from "@/components/Contact";
import { RecommandationsModal } from "@/components/RecommandationsModal";

export default function HomePage() {
  const [recommandationActive, setRecommandationActive] = useState<string | null>(null);

  return (
    <>
      <Hero />
      <Realisations onOuvrirRecommandation={(id) => setRecommandationActive(id)} />
      <DemosVercelShowcase />
      <Competences />
      <Parcours />
      <Contact />

      <RecommandationsModal
        idActif={recommandationActive}
        onFermer={() => setRecommandationActive(null)}
        onChanger={(id) => setRecommandationActive(id)}
      />
    </>
  );
}
