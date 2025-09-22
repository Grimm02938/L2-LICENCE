
# L2-LICENCE

## Overview

Site destiné aux élèves de L2 MATHS Paris Saclay, inspiré par le design et l'organisation de `vb.webprepa.eu`. Le site fournira les cours, TDs, TDs corrigés, et examens pour les matières principales : Arithmétique, Algèbre linéaire, Analyse, Topologie.

## Features & Design

- **Navigation :** Barre latérale fixe avec la liste des matières.
- **Contenu :** Zone principale affichant les listes de documents (PDF, etc.).
- **Style :** Design sobre, académique et fonctionnel, similaire au site de référence.
- **Données :** Contenu géré via un fichier de données interne pour une mise à jour facile.

## Plan de Développement

1.  **Structure et Composants de Base :**
    *   Créer une barre de navigation (`Sidebar.vue`).
    *   Créer un composant pour afficher le contenu (`ContentDisplay.vue`).
    *   Mettre en place la disposition principale dans `App.vue`.

2.  **Mise en Page et Style (CSS) :**
    *   Appliquer le style pour imiter le site de référence.

3.  **Gestion des Données :**
    *   Créer un fichier `subjects.ts` pour stocker la liste des matières et des documents.

4.  **Affichage Dynamique :**
    *   Connecter la barre de navigation à l'affichage du contenu.

5.  **Hébergement (Déploiement) :**
    *   Déployer sur Firebase Hosting une fois la version 1 prête.

## Tâche Actuelle

**Étape 2 : Refonte du design pour imiter `vb.webprepa.eu`.**
- Création d'une feuille de style globale `src/styles.css`.
- Mise à jour de `index.html` pour lier la nouvelle feuille de style.
- Refonte de `App.vue` avec une nouvelle structure (header, main, footer).
- Création des composants `Header.vue`, `Sidebar.vue`, et `ContentDisplay.vue`.
- Intégration des composants dans `App.vue`.
