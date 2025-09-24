export type SectionLink = {
  label?: string
  url?: string
}

export type Chapter = {
  title: string
  semester?: 1 | 2
  sections: {
    cours?: SectionLink
    td?: SectionLink
    tdCorrige?: SectionLink
    ds?: SectionLink
    dsCorrige?: SectionLink
  }
}

const makeCours = (path: string): SectionLink => ({
  label: 'Cours PDF',
  url: path,
})

const placeholder = (label: string): SectionLink => ({
  label,
})

export const contentBySubject: Record<string, Chapter[]> = {
  analyse: [
    {
      title: 'Chapitre 1 — Suites et limites',
      semester: 1,
      sections: {
        cours: makeCours('/docs/analyse/chapitre-01-suites-limites.pdf'),
        td: placeholder('TD disponible bientôt'),
        tdCorrige: placeholder('Correction à venir'),
        ds: placeholder('DS à venir'),
        dsCorrige: placeholder('Corrigé en préparation'),
      },
    },
    {
      title: 'Chapitre 2 — Continuité et dérivabilité',
      semester: 1,
      sections: {
        cours: makeCours('/docs/analyse/chapitre-02-derivabilite.pdf'),
        td: placeholder('TD disponible bientôt'),
        tdCorrige: placeholder('Correction à venir'),
        ds: placeholder('DS à venir'),
        dsCorrige: placeholder('Corrigé en préparation'),
      },
    },
    {
      title: 'Chapitre 3 — Intégration',
      semester: 2,
      sections: {
        cours: makeCours('/docs/analyse/chapitre-03-integration.pdf'),
        td: placeholder('TD disponible bientôt'),
        tdCorrige: placeholder('Correction à venir'),
        ds: placeholder('DS à venir'),
        dsCorrige: placeholder('Corrigé en préparation'),
      },
    },
    {
      title: 'Chapitre 4 — Séries numériques',
      semester: 2,
      sections: {
        cours: makeCours('/docs/analyse/chapitre-04-series.pdf'),
        td: placeholder('TD disponible bientôt'),
        tdCorrige: placeholder('Correction à venir'),
        ds: placeholder('DS à venir'),
        dsCorrige: placeholder('Corrigé en préparation'),
      },
    },
  ],
  'algebre-lineaire': [
    {
      title: 'Chapitre 1 — Espaces vectoriels',
      semester: 1,
      sections: {
        cours: makeCours('/docs/algebre-lineaire/chapitre-01-espaces.pdf'),
        td: placeholder('TD disponible bientôt'),
        tdCorrige: placeholder('Correction à venir'),
        ds: placeholder('DS à venir'),
        dsCorrige: placeholder('Corrigé en préparation'),
      },
    },
    {
      title: 'Chapitre 2 — Applications linéaires',
      semester: 1,
      sections: {
        cours: makeCours('/docs/algebre-lineaire/chapitre-02-applications.pdf'),
        td: placeholder('TD disponible bientôt'),
        tdCorrige: placeholder('Correction à venir'),
        ds: placeholder('DS à venir'),
        dsCorrige: placeholder('Corrigé en préparation'),
      },
    },
    {
      title: 'Chapitre 3 — Matrices et déterminants',
      semester: 2,
      sections: {
        cours: makeCours('/docs/algebre-lineaire/chapitre-03-matrices.pdf'),
        td: placeholder('TD disponible bientôt'),
        tdCorrige: placeholder('Correction à venir'),
        ds: placeholder('DS à venir'),
        dsCorrige: placeholder('Corrigé en préparation'),
      },
    },
    {
      title: 'Chapitre 4 — Réduction et diagonalisation',
      semester: 2,
      sections: {
        cours: makeCours('/docs/algebre-lineaire/chapitre-04-diagonalisation.pdf'),
        td: placeholder('TD disponible bientôt'),
        tdCorrige: placeholder('Correction à venir'),
        ds: placeholder('DS à venir'),
        dsCorrige: placeholder('Corrigé en préparation'),
      },
    },
  ],
  arithmetique: [
    {
      title: 'Chapitre 1 — Divisibilité et congruences',
      semester: 1,
      sections: {
        cours: makeCours('/docs/arithmetique/chapitre-01-divisibilite.pdf'),
        td: placeholder('TD disponible bientôt'),
        tdCorrige: placeholder('Correction à venir'),
        ds: placeholder('DS à venir'),
        dsCorrige: placeholder('Corrigé en préparation'),
      },
    },
    {
      title: 'Chapitre 2 — Théorèmes classiques',
      semester: 1,
      sections: {
        cours: makeCours('/docs/arithmetique/chapitre-02-theoremes.pdf'),
        td: placeholder('TD disponible bientôt'),
        tdCorrige: placeholder('Correction à venir'),
        ds: placeholder('DS à venir'),
        dsCorrige: placeholder('Corrigé en préparation'),
      },
    },
    {
      title: 'Chapitre 3 — Arithmétique modulaire',
      semester: 2,
      sections: {
        cours: makeCours('/docs/arithmetique/chapitre-03-modulaire.pdf'),
        td: placeholder('TD disponible bientôt'),
        tdCorrige: placeholder('Correction à venir'),
        ds: placeholder('DS à venir'),
        dsCorrige: placeholder('Corrigé en préparation'),
      },
    },
  ],
  'topologie-1': [
    {
      title: 'Chapitre 1 — Espaces métriques',
      semester: 1,
      sections: {
        cours: makeCours('/docs/topologie/chapitre-01-espaces-metriques.pdf'),
        td: placeholder('TD disponible bientôt'),
        tdCorrige: placeholder('Correction à venir'),
        ds: placeholder('DS à venir'),
        dsCorrige: placeholder('Corrigé en préparation'),
      },
    },
    {
      title: 'Chapitre 2 — Topologies et ouverts',
      semester: 1,
      sections: {
        cours: makeCours('/docs/topologie/chapitre-02-ouverts.pdf'),
        td: placeholder('TD disponible bientôt'),
        tdCorrige: placeholder('Correction à venir'),
        ds: placeholder('DS à venir'),
        dsCorrige: placeholder('Corrigé en préparation'),
      },
    },
    {
      title: 'Chapitre 3 — Continuité et compacité',
      semester: 2,
      sections: {
        cours: makeCours('/docs/topologie/chapitre-03-continuites.pdf'),
        td: placeholder('TD disponible bientôt'),
        tdCorrige: placeholder('Correction à venir'),
        ds: placeholder('DS à venir'),
        dsCorrige: placeholder('Corrigé en préparation'),
      },
    },
  ],
  'calcul-numerique': [
    {
      title: 'Chapitre 1 — Méthodes de résolution d\'équations',
      semester: 1,
      sections: {
        cours: makeCours('/docs/calcul-numerique/chapitre-01-equations.pdf'),
        td: placeholder('TD disponible bientôt'),
        tdCorrige: placeholder('Correction à venir'),
        ds: placeholder('DS à venir'),
        dsCorrige: placeholder('Corrigé en préparation'),
      },
    },
    {
      title: 'Chapitre 2 — Intégration numérique',
      semester: 2,
      sections: {
        cours: makeCours('/docs/calcul-numerique/chapitre-02-integration-numerique.pdf'),
        td: placeholder('TD disponible bientôt'),
        tdCorrige: placeholder('Correction à venir'),
        ds: placeholder('DS à venir'),
        dsCorrige: placeholder('Corrigé en préparation'),
      },
    },
    {
      title: 'Chapitre 3 — Méthodes itératives linéaires',
      semester: 2,
      sections: {
        cours: makeCours('/docs/calcul-numerique/chapitre-03-iteratives.pdf'),
        td: placeholder('TD disponible bientôt'),
        tdCorrige: placeholder('Correction à venir'),
        ds: placeholder('DS à venir'),
        dsCorrige: placeholder('Corrigé en préparation'),
      },
    },
  ],
}
