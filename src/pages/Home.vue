<script setup lang="ts">
import PageLayout from '../shared/PageLayout.vue'
import { subjects } from '../shared/data/subjects'
import { useRouter } from 'vue-router'
const router = useRouter()
function go(slug: string){ router.push(`/matiere/${slug}`) }
</script>

<template>
  <PageLayout>
    <template #title>Bienvenue</template>
    <p class="lead">Choisissez une matière pour accéder aux cours et TD.</p>

    <div class="tiles">
      <button v-for="s in subjects" :key="s.slug" class="tile filled" :data-accent="s.accent" @click="go(s.slug)">
        <span class="icon">{{ s.slug === 'calcul-numerique' ? '🐍' : (s.icon ?? '∑') }}</span>
        <span class="name">{{ s.name }}</span>
      </button>
    </div>
  </PageLayout>
</template>

<style scoped>
.lead{ color: var(--text-secondary); margin-bottom: 1rem }
.tiles{ display:grid; grid-template-columns: repeat(auto-fill,minmax(180px,1fr)); gap:1rem }
.tile{ text-align:left; background: var(--card-bg); border:1px solid var(--border-color); border-radius:.9rem; padding:1rem; display:flex; align-items:center; gap:.75rem; color: var(--text-primary); }
.tile.filled[data-accent="purple"]{ background: rgba(192,153,255,.14); border-color: rgba(192,153,255,.4) }
.tile.filled[data-accent="green"]{ background: rgba(110,231,183,.14); border-color: rgba(110,231,183,.4) }
.tile.filled[data-accent="yellow"]{ background: rgba(250,204,21,.14); border-color: rgba(250,204,21,.45) }
.tile.filled[data-accent="blue"]{ background: rgba(122,162,247,.14); border-color: rgba(122,162,247,.4) }
.tile:hover{ transform: translateY(-2px); box-shadow: var(--shadow-md) }
.icon{ font-size:1.2rem; opacity:.95 }
.name{ font-weight:700; letter-spacing: .2px }
[data-accent="purple"]{ box-shadow: inset 0 0 0 1px rgba(168,85,247,.3) }
[data-accent="green"]{ box-shadow: inset 0 0 0 1px rgba(34,197,94,.3) }
[data-accent="yellow"]{ box-shadow: inset 0 0 0 1px rgba(234,179,8,.3) }
[data-accent="blue"]{ box-shadow: inset 0 0 0 1px rgba(59,130,246,.3) }
</style>
