export type Subject = {
  slug: string
  title: string
  description: string
  iconKey: string
  accent: 'blue' | 'green' | 'purple' | 'red'
}

export const subjects: Subject[] = [
  {
    slug: 'algebre-lineaire',
    title: 'Algèbre linéaire',
    description: "Espaces vectoriels, applications linéaires, matrices et déterminants.",
    iconKey: 'matrix',
    accent: 'blue', // was yellow; switched to blue
  },
  {
    slug: 'analyse',
    title: 'Analyse',
    description: 'Suites, séries, continuité, dérivabilité, intégration.',
    iconKey: 'function',
    accent: 'purple',
  },
  {
    slug: 'arithmetique',
    title: 'Arithmétique',
    description: 'Entiers, divisibilité, congruences, théorèmes classiques.',
    iconKey: 'integers',
    accent: 'red',
  },
  {
    slug: 'topologie-1',
    title: 'Topologie 1',
    description: 'Voisinages, ouverts, fermés, continuité topologique.',
    iconKey: 'topology',
    accent: 'green',
  },
  {
    slug: 'calcul-numerique',
    title: 'Calcul Numérique',
    description: 'Méthodes numériques pour équations et intégration.',
    iconKey: 'code',
    accent: 'blue',
  },
]
