<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ title: string; icon?: string }>()
const open = ref(true)
</script>

<template>
  <section class="panel" :class="{ open }">
    <header class="panel-header" @click="open = !open">
      <span class="icon">{{ icon ?? '∑' }}</span>
      <h3>{{ title }}</h3>
      <span class="chev">{{ open ? '▾' : '▸' }}</span>
    </header>
    <div class="panel-body" v-show="open">
      <slot />
    </div>
  </section>
  
</template>

<style scoped>
.panel{ border:1px solid var(--border-color); background: linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,0)), rgba(16, 23, 42, .5); border-radius: var(--radius); overflow:hidden; }
.panel-header{ display:flex; align-items:center; gap:.5rem; padding:.75rem 1rem; cursor:pointer; font-weight:600 }
.icon{ opacity:.85; font-size:.95rem }
.chev{ margin-left:auto; opacity:.7 }
.panel-body{ padding: .5rem 1rem 1rem; color: var(--text-primary); }
</style>
