# L2-LICENCE
Site destiné aux élèves de L2 MATHS Paris Saclay

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
