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

const placeholder = (): SectionLink => ({
  label: 'Disponible prochainement',
})

export const contentBySubject: Record<string, Chapter[]> = {
  analyse: [
    {
      title: 'Chapitre 1 — Suites et limites',
      semester: 1,
      sections: {
        cours: makeCours('/docs/analyse/chapitre-01-suites-limites.pdf'),
        td: placeholder(),
        tdCorrige: placeholder(),
        ds: placeholder(),
        dsCorrige: placeholder(),
      },
    },
    {
      title: 'Chapitre 2 — Continuité et dérivabilité',
      semester: 1,
      sections: {
        cours: makeCours('/docs/analyse/chapitre-02-derivabilite.pdf'),
        td: placeholder(),
        tdCorrige: placeholder(),
        ds: placeholder(),
        dsCorrige: placeholder(),
      },
    },
    {
      title: 'Chapitre 3 — Intégration',
      semester: 2,
      sections: {
        cours: makeCours('/docs/analyse/chapitre-03-integration.pdf'),
        td: placeholder(),
        tdCorrige: placeholder(),
        ds: placeholder(),
        dsCorrige: placeholder(),
      },
    },
    {
      title: 'Chapitre 4 — Séries numériques',
      semester: 2,
      sections: {
        cours: makeCours('/docs/analyse/chapitre-04-series.pdf'),
        td: placeholder(),
        tdCorrige: placeholder(),
        ds: placeholder(),
        dsCorrige: placeholder(),
      },
    },
  ],
  'algebre-lineaire': [
    {
      title: 'Chapitre 1 — Espaces vectoriels',
      semester: 1,
      sections: {
        cours: makeCours('/docs/algebre-lineaire/chapitre-01-espaces.pdf'),
        td: placeholder(),
        tdCorrige: placeholder(),
        ds: placeholder(),
        dsCorrige: placeholder(),
      },
    },
    {
      title: 'Chapitre 2 — Applications linéaires',
      semester: 1,
      sections: {
        cours: makeCours('/docs/algebre-lineaire/chapitre-02-applications.pdf'),
        td: placeholder(),
        tdCorrige: placeholder(),
        ds: placeholder(),
        dsCorrige: placeholder(),
      },
    },
    {
      title: 'Chapitre 3 — Matrices et déterminants',
      semester: 2,
      sections: {
        cours: makeCours('/docs/algebre-lineaire/chapitre-03-matrices.pdf'),
        td: placeholder(),
        tdCorrige: placeholder(),
        ds: placeholder(),
        dsCorrige: placeholder(),
      },
    },
    {
      title: 'Chapitre 4 — Réduction et diagonalisation',
      semester: 2,
      sections: {
        cours: makeCours('/docs/algebre-lineaire/chapitre-04-diagonalisation.pdf'),
        td: placeholder(),
        tdCorrige: placeholder(),
        ds: placeholder(),
        dsCorrige: placeholder(),
      },
    },
  ],
  arithmetique: [
    {
      title: 'Chapitre 1 — Divisibilité et congruences',
      semester: 1,
      sections: {
        cours: makeCours('/docs/arithmetique/chapitre-01-divisibilite.pdf'),
        td: placeholder(),
        tdCorrige: placeholder(),
        ds: placeholder(),
        dsCorrige: placeholder(),
      },
    },
    {
      title: 'Chapitre 2 — Théorèmes classiques',
      semester: 1,
      sections: {
        cours: makeCours('/docs/arithmetique/chapitre-02-theoremes.pdf'),
        td: placeholder(),
        tdCorrige: placeholder(),
        ds: placeholder(),
        dsCorrige: placeholder(),
      },
    },
    {
      title: 'Chapitre 3 — Arithmétique modulaire',
      semester: 2,
      sections: {
        cours: makeCours('/docs/arithmetique/chapitre-03-modulaire.pdf'),
        td: placeholder(),
        tdCorrige: placeholder(),
        ds: placeholder(),
        dsCorrige: placeholder(),
      },
    },
  ],
  'topologie-1': [
    {
      title: 'Chapitre 1 — Suites',
      semester: 1,
      sections: {
        cours: makeCours('/docs/topologie/chapitre-01-espaces-topologiques.pdf'),
        td: placeholder(),
        tdCorrige: placeholder(),
        ds: placeholder(),
        dsCorrige: placeholder(),
      },
    },
    {
      title: 'Chapitre 2 — Fonctions continues et homéomorphismes',
      semester: 1,
      sections: {
        cours: makeCours('/docs/topologie/chapitre-02-continuite.pdf'),
        td: placeholder(),
        tdCorrige: placeholder(),
        ds: placeholder(),
        dsCorrige: placeholder(),
      },
    },
    {
      title: 'Chapitre 3 — Compacité',
      semester: 2,
      sections: {
        cours: makeCours('/docs/topologie/chapitre-03-compacite.pdf'),
        td: placeholder(),
        tdCorrige: placeholder(),
        ds: placeholder(),
        dsCorrige: placeholder(),
      },
    },
    {
      title: 'Chapitre 4 — Connexité',
      semester: 2,
      sections: {
        cours: makeCours('/docs/topologie/chapitre-04-connexite.pdf'),
        td: placeholder(),
        tdCorrige: placeholder(),
        ds: placeholder(),
        dsCorrige: placeholder(),
      },
    },
    {
      title: 'Chapitre 5 — Espaces métriques',
      semester: 2,
      sections: {
        cours: makeCours('/docs/topologie/chapitre-05-espaces-metriques.pdf'),
        td: placeholder(),
        tdCorrige: placeholder(),
        ds: placeholder(),
        dsCorrige: placeholder(),
      },
    },
  ],
  'calcul-numerique': [
    {
      title: 'Chapitre 1 — Méthodes de résolution d\'équations',
      semester: 1,
      sections: {
        cours: makeCours('/docs/calcul-numerique/chapitre-01-equations.pdf'),
        td: placeholder(),
        tdCorrige: placeholder(),
        ds: placeholder(),
        dsCorrige: placeholder(),
      },
    },
    {
      title: 'Chapitre 2 — Intégration numérique',
      semester: 2,
      sections: {
        cours: makeCours('/docs/calcul-numerique/chapitre-02-integration-numerique.pdf'),
        td: placeholder(),
        tdCorrige: placeholder(),
        ds: placeholder(),
        dsCorrige: placeholder(),
      },
    },
    {
      title: 'Chapitre 3 — Méthodes itératives linéaires',
      semester: 2,
      sections: {
        cours: makeCours('/docs/calcul-numerique/chapitre-03-iteratives.pdf'),
        td: placeholder(),
        tdCorrige: placeholder(),
        ds: placeholder(),
        dsCorrige: placeholder(),
      },
    },
  ],
}
