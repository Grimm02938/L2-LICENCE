export type Subject = {
  slug: string
  name: string
  accent: 'purple'|'green'|'yellow'|'blue'
  icon?: string
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
    icon: '⟂',
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
    icon: '∎',
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
    icon: '∑',
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
    accent: 'yellow',
    icon: '𝔸',
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
    icon: 'ℤ',
    sections: [
      { id: 'div', title: 'Divisibilité et congruences', groups: [
        { id: 'cours', title: 'Cours', links: [ { label: 'Chapitre : Ouvrir', href: '#' } ] },
        { id: 'td', title: 'TD', links: [ { label: 'Énoncé : Ouvrir', href: '#' }, { label: 'Correction : Ouvrir', href: '#' } ] },
      ]}
    ]
  },
]
