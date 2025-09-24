export type Subject = {
  slug: string
  title: string
  description: string
  iconKey: string
  accent: 'blue' | 'green' | 'purple' | 'red'
  accentRgb?: string // optional custom RGB triplet like "59 130 246"
}

export const subjects: Subject[] = [
  {
    slug: 'algebre-lineaire',
    title: 'Algèbre linéaire',
    description: "Espaces vectoriels, applications linéaires, matrices et déterminants.",
    iconKey: 'algebra',
    accent: 'blue',
    accentRgb: '59 130 246',
  },
  {
    slug: 'analyse',
    title: 'Analyse',
    description: 'Suites, séries, continuité, dérivabilité, intégration.',
    iconKey: 'function',
    accent: 'purple',
    accentRgb: '99 102 241',
  },
  {
    slug: 'arithmetique',
    title: 'Arithmétique',
    description: 'Entiers, divisibilité, congruences, théorèmes classiques.',
    iconKey: 'integers',
    accent: 'red',
    accentRgb: '217 70 239',
  },
  {
    slug: 'topologie-1',
    title: 'Topologie 1',
    description: 'Voisinages, ouverts, fermés, continuité topologique.',
    iconKey: 'topology',
    accent: 'green',
    accentRgb: '16 185 129',
  },
  {
    slug: 'calcul-numerique',
    title: 'Calcul Numérique',
    description: 'Méthodes numériques pour équations et intégration.',
    iconKey: 'code',
    accent: 'blue',
    accentRgb: '14 165 233',
  },
]
