<script setup lang="ts">
import ScheduleBoard from '../components/ScheduleBoard.vue'
import { scheduleEntries } from '../shared/data/schedule'
</script>

<template>
  <section class="schedule-page">
    <header>
      <h1>Emploi du temps</h1>
      <p class="lead">
        Retrouvez ici le planning hebdomadaire officiel. Mettez à jour les créneaux dans
        <code>src/shared/data/schedule.ts</code>.
      </p>
    </header>

    <ScheduleBoard :entries="scheduleEntries" />

    <p class="tips">
      Besoin d’un export PDF ? Vous pouvez dupliquer les créneaux dans un tableur pour l’imprimer rapidement.
    </p>
  </section>
</template>

<style scoped>
.schedule-page {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

header {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

h1 {
  font-size: 2.25rem;
  margin: 0;
}

.lead {
  margin: 0;
  font-size: 1rem;
  color: var(--text-secondary);
}

code {
  background: rgba(148, 163, 184, 0.12);
  border-radius: 6px;
  padding: 0.15rem 0.4rem;
  font-size: 0.85rem;
}

.tips {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
}
</style>
