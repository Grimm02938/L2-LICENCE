<script setup lang="ts">
import { computed } from 'vue'

type Slot = {
  time: string
  title: string
  room?: string
  teacher?: string
}

type DaySchedule = {
  day: string
  slots: Slot[]
}

const props = defineProps<{ entries?: DaySchedule[] }>()

const hasContent = computed(() => (props.entries ?? []).some(day => day.slots && day.slots.length > 0))

const sample = `[
  {
    day: 'Lundi',
    slots: [
      { time: '08h30 - 10h30', title: 'Algèbre linéaire', room: 'Amphi 3', teacher: 'Menous' }
    ]
  }
]`
</script>

<template>
  <section class="schedule" aria-labelledby="schedule-title">
    <header>
      <div>
        <h2 id="schedule-title">Emploi du temps</h2>
        <p v-if="hasContent" class="subtitle">Planification hebdomadaire mise à jour</p>
        <p v-else class="subtitle">Les créneaux arrivent prochainement.</p>
      </div>
      <span class="tag">Beta</span>
    </header>

    <div v-if="hasContent" class="grid">
      <article v-for="day in props.entries" :key="day.day" class="day">
        <h3>{{ day.day }}</h3>
        <ul>
          <li v-for="slot in day.slots" :key="slot.time + slot.title">
            <div class="time">{{ slot.time }}</div>
            <div class="info">
              <strong>{{ slot.title }}</strong>
              <small>
                <span v-if="slot.room">{{ slot.room }}</span>
                <span v-if="slot.teacher">&nbsp;• {{ slot.teacher }}</span>
              </small>
            </div>
          </li>
        </ul>
      </article>
    </div>

    <div v-else class="placeholder">
      <p>
        Ajoutez vos créneaux dans <code>src/components/ScheduleBoard.vue</code> ou injected data depuis une API.
        Structure attendue :
      </p>
      <pre><code>{{ sample }}</code></pre>
    </div>
  </section>
</template>

<style scoped>
.schedule {
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.92), rgba(30, 41, 59, 0.88));
  border: 1px solid rgba(148, 163, 184, 0.12);
  border-radius: 18px;
  padding: 1.25rem 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 24px 45px rgba(2, 12, 34, 0.28);
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

h2 {
  margin: 0;
  font-size: 1.4rem;
}

.subtitle {
  margin: 0.2rem 0 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.tag {
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  background: rgba(59, 130, 246, 0.18);
  color: #93c5fd;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.grid {
  margin-top: 1.3rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
}

.day {
  background: rgba(17, 24, 39, 0.75);
  border-radius: 14px;
  border: 1px solid rgba(59, 130, 246, 0.08);
  padding: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.day h3 {
  margin: 0;
  font-size: 0.95rem;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.day ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.day li {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.55rem;
}

.time {
  font-size: 0.78rem;
  font-weight: 700;
  color: rgba(148, 163, 184, 0.9);
}

.info strong {
  display: block;
  font-size: 0.85rem;
  color: var(--text-primary);
}

.info small {
  color: var(--text-secondary);
  font-size: 0.75rem;
}

.placeholder {
  margin-top: 1.25rem;
  background: rgba(17, 24, 39, 0.7);
  border-radius: 14px;
  padding: 1rem;
  border: 1px dashed rgba(148, 163, 184, 0.35);
  font-size: 0.85rem;
  color: var(--text-secondary);
}

pre {
  margin: 0.8rem 0 0;
  padding: 0.75rem;
  border-radius: 12px;
  background: rgba(15, 23, 42, 0.9);
  overflow-x: auto;
  color: #a5b4fc;
  font-size: 0.75rem;
}

code {
  font-family: 'Fira Code', 'Source Code Pro', monospace;
}

@media (max-width: 860px) {
  .schedule {
    padding: 1.1rem 1.1rem;
  }
}
</style>
