export type Subject = {
  slug: string
  title: string
  description: string
  iconKey: string
  accent: 'blue' | 'green' | 'purple' | 'red' | 'orange'
  accentRgb?: string // optional custom RGB triplet like "59 130 246"
  accentHex?: string // optional exact HEX like "#6d28d9"
}

export const subjects: Subject[] = [
  {
    slug: 'algebre-lineaire',
    title: 'Algèbre linéaire',
    description: "Cette section regroupe les cours d'Algèbre (Menous).",
    iconKey: 'algebra',
    accent: 'blue',
    accentRgb: '59 130 246',
    accentHex: '#b69af1',
  },
  {
    slug: 'analyse',
    title: 'Analyse',
    description: "Cette section regroupe les cours d'Analyse (Pallard).",
    iconKey: 'function',
    accent: 'purple',
    accentRgb: '99 102 241',
    // accentHex: '#7c7ef5',
  },
  {
    slug: 'arithmetique',
    title: 'Arithmétique',
    description: "Cette section regroupe les cours d'Arithmétique (Fahlaoui).",
    iconKey: 'integers',
    accent: 'orange',
    accentRgb: '249 115 22',
    accentHex: '#f97316',
  },
  {
    slug: 'topologie-1',
    title: 'Topologie',
    description: 'Cette section regroupe les cours de Topologie (Haglund).',
    iconKey: 'topology',
    accent: 'green',
    accentRgb: '16 185 129',
    // accentHex: '#22c55e',
  },
  {
    slug: 'calcul-numerique',
    title: 'Calcul Numérique',
    description: 'Cette section regroupe les cours de Calcul numérique (Graille).',
    iconKey: 'code',
    accent: 'blue',
    accentRgb: '14 165 233',
    // accentHex: '#60a5fa',
  },
]
