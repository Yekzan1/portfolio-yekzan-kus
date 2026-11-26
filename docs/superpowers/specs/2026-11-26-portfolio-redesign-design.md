# Refonte du portfolio — PRD

## Problème

- La page actuelle répète les mêmes cartes, badges et étiquettes techniques, ce qui donne un rendu générique.
- Les compétences mises en avant ne correspondent pas à la priorité demandée : PHP/Laravel, Java/POO et Supabase sont noyés dans une longue liste.
- Plusieurs captures et descriptions sont associées au mauvais projet ou ne sont pas confirmées par les images du rapport.

## Options

- **A — Corriger le contenu dans la mise en page actuelle.** Rapide et peu risqué, mais conserve l'impression de template et la répétition des cartes.
- **B — Recomposer le portfolio autour de deux études de cas éditoriales.** Demande plus de travail, mais donne une hiérarchie personnelle, permet d'expliquer les contributions et valorise les preuves réelles. **Choix retenu.**

## Northstar

Succès = un recruteur comprend immédiatement le profil, voit After'ish en premier, distingue le travail réalisé des technologies utilisées, et peut vérifier chaque affirmation à partir d'une capture ou d'une explication concrète.

## V1

- Refaire l'accueil et les sections de réalisations avec une composition éditoriale claire, un fond clair, une typographie sobre et des captures réelles.
- Garder After'ish à la première place, puis présenter Nexus Flow OS avec des captures correctement légendées et une explication simple du correctif d'inscription.
- Réorganiser les compétences autour de PHP/Laravel, Java/POO (dont héritage et encapsulation), SQL, PostgreSQL/Supabase, développement web et outils de production.
- Retirer du contenu visible du site les mentions Next.js, TypeScript et la rubrique de compétences IA, conformément à la demande.
- Corriger les descriptions Capte et MindLoop à partir de leurs dépôts locaux. Le CV intégré est identique au PDF fourni et reste inchangé.
- Ne pas présenter comme captures Kanban ou facturation des images qui montrent en réalité des réglages de marque.
- Afficher seulement l'année 2026 pour le stage Nexus Flow afin de ne pas reproduire la différence de dates entre le CV et le rapport.

## V2

- Ajouter des captures vérifiées du Kanban et de la facturation si elles sont disponibles dans une source correspondant réellement à ces écrans.
- Refaire le PDF du CV uniquement dans une demande séparée.

## Exigences de conception et d'ingénierie

- Pas de dégradés décoratifs, de pastilles empilées, d'emojis, d'icônes IA, ni de fausses métriques.
- Conserver le portrait et les visuels de projets authentiques; recadrer les captures pour enlever les barres de navigateur et éléments hors sujet.
- Employer des phrases directes à la première personne et distinguer « réalisé », « corrigé », « testé » et « participé ».
- Décrire le nettoyage du compte Clerk et de l'organisation après échec comme une annulation compensatoire, pas comme une transaction distribuée strictement atomique.
- Garder le site accessible au clavier, responsive et lisible avec les préférences de mouvement réduites.
- Ne pas ajouter d'analytique.

## Vérifications de livraison

- Construire le site avec `npm run build`.
- Contrôler le diff des données et la correspondance de chaque image avec sa légende.
- Après publication, vérifier la réponse du site public et la présence du contenu attendu.
