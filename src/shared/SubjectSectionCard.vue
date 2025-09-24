<script setup lang="ts">
defineProps<{ title: string; description?: string; icon?: string; accent?: 'purple'|'green'|'yellow'|'blue' }>()
</script>

<template>
  <div class="card" :class="accent">
    <header class="card-header">
      <span class="icon">{{ icon ?? '∫' }}</span>
      <h2>{{ title }}</h2>
    </header>
    <p v-if="description" class="desc">{{ description }}</p>
    <div class="body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.card{ border:1px solid var(--border-color); border-radius:var(--radius); padding:1rem; background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0)), rgba(17,24,39,.6); }
.card-header{ display:flex; align-items:center; gap:.5rem; font-weight:700; margin-bottom:.35rem; color: var(--text-primary); }
.card-header h2{ font-size:1.05rem; }
.icon{ display:inline-flex; align-items:center; justify-content:center; width:26px; height:26px; border-radius:999px; background: rgba(122,162,247,.15); border:1px solid rgba(122,162,247,.35) }
.desc{ opacity:.85; margin:.25rem 0 1rem }
.body{ display:grid; gap:.75rem }
.purple{ box-shadow: inset 0 0 0 1px rgba(192,153,255,.45); background: rgba(192,153,255,.08); }
.green{ box-shadow: inset 0 0 0 1px rgba(110,231,183,.45); background: rgba(110,231,183,.08); }
.yellow{ box-shadow: inset 0 0 0 1px rgba(250,204,21,.45); background: rgba(250,204,21,.08); }
.blue{ box-shadow: inset 0 0 0 1px rgba(122,162,247,.45); background: rgba(122,162,247,.08); }
</style>
