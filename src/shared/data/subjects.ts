export type Subject = {
  slug: string
  title: string
  description: string
  iconKey: string
  accent: 'blue' | 'green' | 'purple' | 'red'
  accentRgb?: string // optional custom RGB triplet like "59 130 246"
  accentHex?: string // optional exact HEX like "#6d28d9"
}

export const subjects: Subject[] = [
  {
    slug: 'algebre-lineaire',
    title: 'Algèbre linéaire',
    description: "Espaces vectoriels, applications linéaires, matrices et déterminants.",
    iconKey: 'algebra',
    accent: 'blue',
    accentRgb: '59 130 246',
    accentHex: '#b69af1',
  },
  {
    slug: 'analyse',
    title: 'Analyse',
    description: 'Suites, séries, continuité, dérivabilité, intégration.',
    iconKey: 'function',
    accent: 'purple',
    accentRgb: '99 102 241',
    // accentHex: '#7c7ef5',
  },
  {
    slug: 'arithmetique',
    title: 'Arithmétique',
    description: 'Entiers, divisibilité, congruences, théorèmes classiques.',
    iconKey: 'integers',
    accent: 'red',
    accentRgb: '217 70 239',
    // accentHex: '#ff6b6b',
  },
  {
    slug: 'topologie-1',
    title: 'Topologie',
    description: 'Voisinages, ouverts, fermés, continuité topologique.',
    iconKey: 'topology',
    accent: 'green',
    accentRgb: '16 185 129',
    // accentHex: '#22c55e',
  },
  {
    slug: 'calcul-numerique',
    title: 'Calcul Numérique',
    description: 'Méthodes numériques pour équations et intégration.',
    iconKey: 'code',
    accent: 'blue',
    accentRgb: '14 165 233',
    // accentHex: '#60a5fa',
  },
]
