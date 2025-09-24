# L2-LICENCE

Portail de ressources pour les étudiants de L2 Mathématiques de l’université Paris-Saclay.

## Aperçu

- Interface sombre moderne avec cartes colorées par matière
- Accès rapide aux chapitres : cours, TD, corrections, DS
- Barre latérale (desktop) avec recherche, explorateur et raccourcis utiles
- Avertissement légal sur la page d’accueil : documents propriété des enseignants, usage commercial interdit

## Ajouter des documents

Consultez `docs/ADDING_CONTENT.md` pour connaître la procédure détaillée :

1. Déposer vos PDF dans `public/docs/<matiere>/`
2. Mettre à jour les liens dans `src/shared/data/content.ts`
3. (Optionnel) Utiliser `scripts/split_pdf.py` pour découper automatiquement un PDF volumineux en chapitres

## Développement

```bash
npm install
npm run dev
```

Build de production :

```bash
npm run build
```

## Licence

Projet interne – diffusion limitée aux étudiants de la licence. Toute réutilisation commerciale des documents pédagogiques est interdite.

## Configuration du déploiement

Pour configurer correctement le déploiement sur GitHub Pages, suivez ces étapes:

1. Allez dans les paramètres du dépôt (Settings)
2. Cliquez sur "Pages" dans la barre latérale
3. Dans la section "Build and deployment", sélectionnez:
   - Source: "Deploy from a branch"
   - Branch: "gh-pages" / "/(root)"
4. Cliquez sur "Save"

5. Allez dans la section "Actions" > "General" des paramètres
6. Dans la section "Workflow permissions", sélectionnez:
   - "Read and write permissions"
   - Cochez "Allow GitHub Actions to create and approve pull requests"
7. Cliquez sur "Save"

## Développement local

Pour développer localement:

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Déployer manuellement (si besoin)
npm run deploy
```
