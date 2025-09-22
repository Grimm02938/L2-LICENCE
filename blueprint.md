# L2-LICENCE

## Overview

Site destiné aux élèves de L2 MATHS Paris Saclay, strictement inspiré par le design sobre et l'organisation de `vb.webprepa.eu`. Le site fournira les cours, TDs, TDs corrigés, et examens pour les matières principales.

## Features & Design (Version 2 - Refonte)

- **Layout :** Structure simple à deux colonnes.
- **Navigation :** Barre latérale fixe à gauche listant les matières. Un clic sur une matière met à jour la vue principale.
- **Contenu :** Zone principale à droite affichant les listes de documents (PDFs, etc.) pour la matière sélectionnée.
- **Style :** Design sobre, académique et fonctionnel, imitant `vb.webprepa.eu`. Couleurs neutres, typographie simple et lisible. Aucune animation ou effet superflu.
- **Données :** Contenu entièrement géré via un fichier de données interne (`src/data/subjects.ts`) pour une mise à jour facile et centralisée.

## Plan de Développement (Tâche Actuelle)

**Objectif : Abandonner le design actuel et reconstruire le site pour qu'il soit une réplique fonctionnelle de `vb.webprepa.eu`.**

1.  **Nettoyage du Projet :**
    *   Supprimer les composants existants (`Header.vue`, `Hero.vue`, etc.) qui ne font pas partie du nouveau design.
    *   Supprimer les styles CSS complexes et inutiles.

2.  **Création de la Source de Données :**
    *   Créer le fichier `src/data/subjects.ts` qui exportera un tableau de données contenant la structure des cours.

3.  **Création des Nouveaux Composants :**
    *   Créer `src/components/Sidebar.vue`.
    *   Créer `src/components/ContentDisplay.vue`.

4.  **Assemblage et Style Final :**
    *   Réécrire entièrement `src/App.vue` pour importer les nouveaux composants et gérer la logique d'affichage.
    *   Créer une nouvelle feuille de style (`src/assets/main.css`) avec le style minimaliste requis.
    *   Lier la nouvelle feuille de style dans `index.html`.

5.  **Déploiement :**
    *   Construire et déployer la nouvelle version sur GitHub Pages.
