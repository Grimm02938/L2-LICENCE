<script setup lang="ts">
import { ref } from 'vue'
import Icon from './Icon.vue'
const props = withDefaults(defineProps<{ title: string; iconName?: string; accent?: 'green'|'blue'|'purple'|'yellow'|'red' }>(), {
  accent: 'blue'
})
const open = ref(true)
</script>

<template>
  <section class="panel" :data-accent="props.accent" :class="{ open }">
    <header class="panel-header" @click="open = !open">
      <span class="tag">
        <Icon v-if="props.iconName" :name="props.iconName" :size="16" />
        <span class="tag-text">{{ title }}</span>
        <span class="chev">{{ open ? '▾' : '▸' }}</span>
      </span>
    </header>
    <div class="panel-body" v-show="open">
      <slot />
    </div>
  </section>
  
</template>

<style scoped>
.panel{ border:1px solid var(--border-color); background: linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,0)), var(--card-bg); border-radius: var(--radius); overflow:hidden; }
.panel-header{ display:flex; align-items:center; padding: var(--space-2) var(--space-3); cursor:pointer }
.tag{ display:inline-flex; align-items:center; gap:.5rem; padding:.35rem .6rem; border-radius: 10px; font-weight:800; letter-spacing:.2px; border:1px solid transparent; }
.tag-text{ color: var(--text-primary) }
.chev{ margin-left:.25rem; opacity:.85 }
.panel-body{ padding: var(--space-2) var(--space-3) var(--space-4); color: var(--text-primary); }

/* Accent variants like in screenshot */
[data-accent="green"] .tag{ color:#34d399; background: rgba(52,211,153,.08); border-color: rgba(52,211,153,.5) }
[data-accent="green"]{ box-shadow: inset 0 0 0 1px rgba(52,211,153,.35) }
[data-accent="blue"] .tag{ color:#60a5fa; background: rgba(96,165,250,.08); border-color: rgba(96,165,250,.5) }
[data-accent="blue"]{ box-shadow: inset 0 0 0 1px rgba(96,165,250,.35) }
[data-accent="purple"] .tag{ color:#c084fc; background: rgba(192,132,252,.10); border-color: rgba(192,132,252,.55) }
[data-accent="purple"]{ box-shadow: inset 0 0 0 1px rgba(192,132,252,.35) }
[data-accent="yellow"] .tag{ color:#facc15; background: rgba(250,204,21,.10); border-color: rgba(250,204,21,.55) }
[data-accent="yellow"]{ box-shadow: inset 0 0 0 1px rgba(250,204,21,.45) }
[data-accent="red"] .tag{ color:#fb7185; background: rgba(251,113,133,.10); border-color: rgba(251,113,133,.55) }
[data-accent="red"]{ box-shadow: inset 0 0 0 1px rgba(251,113,133,.45) }
</style>
