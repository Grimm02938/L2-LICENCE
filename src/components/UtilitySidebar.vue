<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { subjects } from '../shared/data/subjects'

const query = ref('')
const router = useRouter()

const filtered = computed(() => {
  const value = query.value.trim().toLowerCase()
  if (!value) return subjects.slice(0, 5)
  return subjects.filter(s => s.title.toLowerCase().includes(value) || s.slug.includes(value))
})

function openSubject(slug: string) {
  router.push({ name: 'subject', params: { slug } })
}

const shortcuts = [
  { label: 'Calendrier examen', href: 'https://www.universite-paris-saclay.fr/' },
  { label: 'Forum étudiants', href: 'https://forum.math.u-psud.fr/' },
  { label: 'Dépôt devoirs (ENT)', href: 'https://uvsq.course.sakai/' },
]

const resources = [
  { label: 'Bibliothèque Numérique', href: 'https://www.bib.math.u-psud.fr/' },
  { label: 'Annales DS', href: '#' },
  { label: 'Contacts enseignants', href: '#' },
]
</script>

<template>
  <aside class="sidebar" aria-label="Outils rapides">
    <div class="block">
      <h3>Recherche</h3>
      <input
        v-model="query"
        type="search"
        placeholder="Rechercher une matière"
        class="search"
      />
      <ul class="results" v-if="filtered.length">
        <li v-for="s in filtered" :key="s.slug">
          <button type="button" @click="openSubject(s.slug)">
            {{ s.title }}
          </button>
        </li>
      </ul>
      <p v-else class="empty">Aucun résultat.</p>
    </div>

    <div class="block">
      <h3>Explorateur</h3>
      <ul class="links">
        <li v-for="s in subjects" :key="s.slug">
          <button type="button" @click="openSubject(s.slug)">
            {{ s.title }}
          </button>
        </li>
      </ul>
    </div>

    <div class="block">
      <h3>Raccourcis</h3>
      <ul class="links">
        <li v-for="item in shortcuts" :key="item.label">
          <a :href="item.href" target="_blank" rel="noopener">{{ item.label }}</a>
        </li>
      </ul>
    </div>

    <div class="block">
      <h3>Ressources utiles</h3>
      <ul class="links">
        <li v-for="item in resources" :key="item.label">
          <a :href="item.href" target="_blank" rel="noopener">{{ item.label }}</a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.25rem;
  width: 280px;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 18px;
  box-shadow: 0 20px 45px rgba(0,0,0,0.35);
  backdrop-filter: blur(12px);
}

.block h3 {
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  margin-bottom: 0.65rem;
  text-transform: uppercase;
  color: var(--text-secondary);
}

.search {
  width: 100%;
  background: rgba(17,24,39,0.9);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 999px;
  padding: 0.55rem 0.9rem;
  color: var(--text-primary);
  font-size: 0.95rem;
}

.search:focus {
  outline: none;
  border-color: rgba(99,102,241,0.5);
  box-shadow: 0 0 0 3px rgba(99,102,241,0.2);
}

.results,
.links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.results button,
.links button {
  width: 100%;
  text-align: left;
  border: none;
  background: rgba(255,255,255,0.05);
  border-radius: 12px;
  padding: 0.55rem 0.75rem;
  color: var(--text-primary);
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.15s ease, background 0.2s ease;
}

.results button:hover,
.links button:hover {
  background: rgba(59,130,246,0.18);
  transform: translateX(4px);
}

.links a {
  display: block;
  padding: 0.5rem 0.75rem;
  border-radius: 12px;
  background: rgba(255,255,255,0.04);
  color: var(--text-secondary);
  transition: background 0.2s ease, color 0.2s ease;
}

.links a:hover {
  background: rgba(59,130,246,0.20);
  color: var(--text-primary);
}

.empty {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-top: 0.5rem;
}
</style>
