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
.card{ border:1px solid var(--border-color); border-radius:.75rem; padding:1rem; background: rgba(17,24,39,.6); }
.card-header{ display:flex; align-items:center; gap:.5rem; font-weight:700; margin-bottom:.35rem }
.desc{ opacity:.85; margin:.25rem 0 1rem }
.body{ display:grid; gap:.75rem }
.purple{ box-shadow: inset 0 0 0 1px rgba(168, 85, 247, .35) }
.green{ box-shadow: inset 0 0 0 1px rgba(34, 197, 94, .35) }
.yellow{ box-shadow: inset 0 0 0 1px rgba(234, 179, 8, .35) }
.blue{ box-shadow: inset 0 0 0 1px rgba(59, 130, 246, .35) }
</style>
