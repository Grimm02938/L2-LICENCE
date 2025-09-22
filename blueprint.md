
# L2-LICENCE

## Overview

Site destiné aux élèves de L2 MATHS Paris Saclay, strictement inspiré par le design sobre et l'organisation de `vb.webprepa.eu`. Le site fournit les cours, TDs, TDs corrigés, et examens pour les matières principales.

## Features & Design (Version 2.1 - Améliorations)

- **Layout :** Structure simple à deux colonnes.
- **Navigation :** Barre latérale fixe à gauche listant les matières. Un clic sur une matière met à jour la vue principale.
- **Contenu :** Zone principale à droite affichant les listes de documents. Le contenu a été enrichi avec plus de documents et la matière "Algèbre 3".
- **Style :** Design sobre, académique et fonctionnel, imitant `vb.webprepa.eu`.
    - **Typographie :** Utilisation de "Times New Roman" pour un aspect classique et lisible.
    - **Couleurs :** Palette de couleurs neutres avec un fond blanc cassé (`#fdfdfd`) pour un meilleur confort de lecture.
- **Données :** Contenu géré via un fichier de données interne (`src/data/subjects.ts`).

## Plan de Développement

### Tâche 1 : Refonte Initiale (TERMINÉ)

**Objectif : Abandonner le design initial et reconstruire le site pour qu'il soit une réplique fonctionnelle de `vb.webprepa.eu`.**

1.  **Nettoyage du Projet :** Suppression des composants et styles superflus.
2.  **Création de la Source de Données :** Création du fichier `src/data/subjects.ts`.
3.  **Création des Nouveaux Composants :** `Sidebar.vue` et `ContentDisplay.vue`.
4.  **Assemblage et Style :** Mise en place de la structure dans `App.vue` et des styles globaux.

### Tâche 2 : Améliorations et Finitions (TERMINÉ)

**Objectif : Enrichir le contenu et affiner le style pour se rapprocher de la cible.**

1.  **Enrichissement du Contenu :**
    *   Ajout de documents supplémentaires aux matières existantes.
    *   Ajout de la matière "Algèbre 3".
2.  **Affinage du Style :**
    *   Changement de la police pour "Times New Roman".
    *   Ajustement de la couleur de fond pour un look plus académique.

## Prochaines Étapes Possibles

- Implémentation d'une fonctionnalité de recherche pour filtrer les documents.
- Mise en place d'un système de "tags" pour les documents (e.g., "Cours", "TD", "Examen").
- Déploiement sur une plateforme d'hébergement comme Firebase Hosting.
