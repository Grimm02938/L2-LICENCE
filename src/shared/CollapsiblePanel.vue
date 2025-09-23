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
.panel{ border:1px solid var(--border-color); background: rgba(16, 23, 42, .5); border-radius:.75rem; overflow:hidden; }
.panel-header{ display:flex; align-items:center; gap:.5rem; padding:.75rem 1rem; cursor:pointer; font-weight:600 }
.icon{ opacity:.8 }
.chev{ margin-left:auto; opacity:.7 }
.panel-body{ padding: .5rem 1rem 1rem }
</style>
