export type Subject = {
  slug: string
  name: string
  accent: 'purple'|'green'|'yellow'|'blue'
  iconKey?: 'sigma'|'matrix'|'function'|'integers'|'topology'|'python'
  sections: {
    id: string
    title: string
    description?: string
    groups: {
      id: string
      title: string
      links: { label: string; href: string }[]
    }[]
  }[]
}

export const subjects: Subject[] = [
  {
    slug: 'topologie-1',
    name: 'Topologie 1',
    accent: 'purple',
    iconKey: 'topology',
    sections: [
      { id: 'intro', title: 'Bases de la topologie', description: 'Ouverts, fermés, adhérences.', groups: [
        { id: 'cours', title: 'Cours', links: [ { label: 'Chapitre : Ouvrir', href: '#' } ] },
        { id: 'td', title: 'TD', links: [ { label: 'Énoncé : Ouvrir', href: '#' }, { label: 'Correction : Ouvrir', href: '#' } ] },
      ]}
    ]
  },
  {
    slug: 'calcul-numerique',
    name: 'Calcul Numérique',
    accent: 'green',
    iconKey: 'python',
    sections: [
      { id: 'approx', title: 'Approximation et erreurs', description: 'Erreurs absolues et relatives.', groups: [
        { id: 'cours', title: 'Cours', links: [ { label: 'Chapitre : Ouvrir', href: '#' } ] },
        { id: 'td', title: 'TD', links: [ { label: 'Énoncé : Ouvrir', href: '#' }, { label: 'Correction : Ouvrir', href: '#' } ] },
      ]}
    ]
  },
  {
    slug: 'analyse',
    name: 'Analyse',
    accent: 'blue',
    iconKey: 'function',
    sections: [
      { id: 'series', title: 'Séries et convergence', groups: [
        { id: 'cours', title: 'Cours', links: [ { label: 'Chapitre : Ouvrir', href: '#' } ] },
        { id: 'td', title: 'TD', links: [ { label: 'Énoncé : Ouvrir', href: '#' }, { label: 'Correction : Ouvrir', href: '#' } ] },
      ]}
    ]
  },
  {
    slug: 'algebre-lineaire',
    name: 'Algèbre linéaire',
    accent: 'blue',
    iconKey: 'matrix',
    sections: [
      { id: 'matrices', title: 'Matrices et applications linéaires', groups: [
        { id: 'cours', title: 'Cours', links: [ { label: 'Chapitre : Ouvrir', href: '#' } ] },
        { id: 'td', title: 'TD', links: [ { label: 'Énoncé : Ouvrir', href: '#' }, { label: 'Correction : Ouvrir', href: '#' } ] },
      ]}
    ]
  },
  {
    slug: 'arithmetique',
    name: 'Arithmétique',
    accent: 'purple',
    iconKey: 'integers',
    sections: [
      { id: 'div', title: 'Divisibilité et congruences', groups: [
        { id: 'cours', title: 'Cours', links: [ { label: 'Chapitre : Ouvrir', href: '#' } ] },
        { id: 'td', title: 'TD', links: [ { label: 'Énoncé : Ouvrir', href: '#' }, { label: 'Correction : Ouvrir', href: '#' } ] },
      ]}
    ]
  },
]
