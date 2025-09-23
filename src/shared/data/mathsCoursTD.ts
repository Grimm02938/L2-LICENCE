export type LinkItem = { label: string; href: string }
export type Group = { id: string; title: string; icon?: string; links: LinkItem[] }
export type Section = { id: string; title: string; description?: string; icon?: string; accent?: 'purple'|'green'|'yellow'|'blue'; groups: Group[] }

export const mathsCoursTD: Section[] = [
  {
    id: 'iv',
    title: 'ƒ IV - Fonctions usuelles',
    description: 'Cette section regroupe les documents autour des fonctions usuelles.',
    icon: 'ƒ',
    accent: 'purple',
    groups: [
      {
        id: 'iv-docs',
        title: 'ƒ IV - Fonctions usuelles',
        links: [
          { label: 'Chapitre : Ouvrir', href: '#' },
          { label: 'TD (Énoncé) : Ouvrir', href: '#' },
          { label: 'TD (Correction) : Ouvrir', href: '#' },
          { label: 'TD (Correction Girand) : Ouvrir', href: '#' },
        ],
      },
    ],
  },
  {
    id: 'v',
    title: 'ƒ V - Applications, relations',
    description: 'Applications et relations, définitions et propriétés.',
    icon: 'ƒ',
    accent: 'green',
    groups: [
      {
        id: 'v-docs',
        title: 'ƒ V - Applications, relations',
        links: [
          { label: 'Chapitre : Ouvrir', href: '#' },
          { label: 'TD (Énoncé) : Ouvrir', href: '#' },
          { label: 'TD (Correction) : Ouvrir', href: '#' },
        ],
      },
    ],
  },
  {
    id: 'i',
    title: '∑ I - Ensembles, raisonnement',
    description: 'Ensembles et méthodes de raisonnement.',
    icon: '∑',
    accent: 'blue',
    groups: [
      {
        id: 'i-docs',
        title: '∑ I - Ensembles, raisonnement',
        links: [
          { label: 'Chapitre : Ouvrir', href: '#' },
          { label: 'TD (Énoncé) : Ouvrir', href: '#' },
          { label: 'TD (Correction) : Ouvrir', href: '#' },
        ],
      },
    ],
  },
]
