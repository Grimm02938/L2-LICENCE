# Ajouter des documents (cours, TD, corrections)

Ce guide explique comment préparer vos PDF et les lier à l'application.

## 1. Déposer les fichiers PDF

1. Créez, si nécessaire, un dossier par matière dans `public/docs/` (par exemple `public/docs/analyse/`).
2. Copiez vos PDF dans ces dossiers. Utilisez un nom explicite :
   - `chapitre-01-suites-limites.pdf`
   - `td-01-enonce.pdf`
   - `td-01-correction.pdf`
3. Une fois le fichier dans `public/docs/...`, il sera servi depuis l'URL `/docs/...`. Exemple :
   - `public/docs/analyse/chapitre-01-suites-limites.pdf` → `/docs/analyse/chapitre-01-suites-limites.pdf`

## 2. Déclarer les liens dans le code

Les chapitres sont définis dans `src/shared/data/content.ts`. Chaque chapitre possède une clé `sections` avec jusqu'à cinq ressources :

```ts
sections: {
  cours?: { label?: string; url?: string }
  td?: { label?: string; url?: string }
  tdCorrige?: { label?: string; url?: string }
  ds?: { label?: string; url?: string }
  dsCorrige?: { label?: string; url?: string }
}
```

Pour activer un lien, renseignez simplement l'URL (et, optionnellement, l'étiquette à afficher) :

```ts
sections: {
  cours: {
    label: 'Cours PDF',
    url: '/docs/analyse/chapitre-01-suites-limites.pdf',
  },
  td: {
    label: 'TD 1',
    url: '/docs/analyse/td-01-enonce.pdf',
  },
  tdCorrige: {
    label: 'Correction TD 1',
    url: '/docs/analyse/td-01-correction.pdf',
  },
}
```

La puce « Ouvrir » apparaîtra automatiquement pour chaque ressource dont l'URL est définie.

## 3. Ajouter ou réordonner des chapitres

- Pour ajouter un chapitre, insérez un nouvel objet dans le tableau correspondant à la matière (`contentBySubject['analyse']`, etc.).
- Utilisez le champ `semester` pour regrouper automatiquement les chapitres par semestre (1 ou 2).
- L'ordre dans le tableau est l'ordre d'affichage.

## 4. Mettre à jour la liste des matières

Les textes descriptifs visibles sur la page d'accueil se trouvent dans `src/shared/data/subjects.ts`. Vous pouvez y ajuster les intitulés, couleurs ou icônes si besoin.

## 5. Splitter un PDF volumineux en plusieurs fichiers

> ℹ️ Le dépôt ne contient pas vos PDF d'origine et l'assistant ne peut pas les découper automatiquement. Réalisez l'opération sur votre poste en suivant la procédure ci-dessous, puis ajoutez les fichiers générés dans `public/docs/...`.

Vous pouvez utiliser le script `scripts/split_pdf.py` pour découper un document en chapitres depuis votre machine :

```bash
pip install pypdf
python scripts/split_pdf.py --input cours-analyse.pdf --ranges "1-24:chapitre-01-suites-limites" "25-48:chapitre-02-derivabilite"
```

Chaque intervalle `start-end:title` génère un PDF nommé `title.pdf` dans le dossier `output/`. Vous pouvez ensuite déplacer ces fichiers dans `public/docs/...` puis mettre à jour `content.ts`.

## 6. Déployer les modifications

1. `npm run build`
2. `git commit` + `git push`
3. Déclenchez votre workflow GitHub Pages ou Firebase si nécessaire.

---

N'hésitez pas à compléter ce guide si vous changez l'organisation ou ajoutez de nouveaux types de documents.
