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

export const contentBySubject: Record<string, Chapter[]> = {
  'analyse': [
    {
      title: 'Notions de logiques',
      semester: 1,
      sections: {
        cours: { url: '#', label: 'Ouvrir' },
        td: { url: '#', label: 'Ouvrir' },
        tdCorrige: { url: '#', label: 'Ouvrir' },
      }
    },
    {
      title: 'I - Ensembles, Méthodes de démonstration',
      semester: 1,
      sections: {
        cours: { url: '#', label: 'Ouvrir' },
        td: { url: '#', label: 'Ouvrir' },
        tdCorrige: { url: '#', label: 'Ouvrir' },
      }
    }
  ],
  'algebre-lineaire': [
    {
      title: 'Chapitre 1 - Espaces vectoriels',
      semester: 1,
      sections: {
        cours: { url: '#', label: 'Ouvrir' },
        td: { url: '#', label: 'Ouvrir' },
        tdCorrige: { url: '#', label: 'Ouvrir' },
        ds: { url: '#', label: 'Ouvrir' },
        dsCorrige: { url: '#', label: 'Ouvrir' },
      }
    },
    {
      title: 'Chapitre 2 - Applications linéaires',
      semester: 1,
      sections: {
        cours: { url: '#', label: 'Ouvrir' },
        td: { url: '#', label: 'Ouvrir' }
      }
    }
  ]
}
