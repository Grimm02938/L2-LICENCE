export type ScheduleSlot = {
  time: string
  title: string
  room?: string
  teacher?: string
}

export type ScheduleDay = {
  day: string
  slots: ScheduleSlot[]
}

/**
 * Emploi du temps officiel : remplissez ce tableau puis redéployez.
 * Laissez les tableaux vides pour masquer la journée.
 */
export const scheduleEntries: ScheduleDay[] = [
  { day: 'Lundi', slots: [] },
  { day: 'Mardi', slots: [] },
  { day: 'Mercredi', slots: [] },
  { day: 'Jeudi', slots: [] },
  { day: 'Vendredi', slots: [] },
]
