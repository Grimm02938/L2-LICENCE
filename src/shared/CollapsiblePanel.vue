<script setup lang="ts">
import { ref } from 'vue'
import Icon from './Icon.vue'
const props = withDefaults(defineProps<{ title: string; iconName?: string; accent?: 'green'|'blue'|'purple'|'yellow'|'red'; toggle?: boolean }>(), {
  accent: 'blue',
  toggle: true,
})
const emit = defineEmits<{ (e: 'header-click'): void }>()
const open = ref(true)
</script>

<template>
  <section class="panel" :data-accent="props.accent" :class="{ open }">
    <header class="panel-header" @click="emit('header-click'); if (props.toggle) open = !open">
      <span class="tag">
        <Icon v-if="props.iconName" :name="props.iconName" :size="16" />
        <span class="tag-text">{{ title }}</span>
        <span v-if="props.toggle" class="chev">{{ open ? '▾' : '▸' }}</span>
      </span>
    </header>
    <div class="panel-body" v-show="props.toggle ? open : true">
      <slot />
    </div>
  </section>
  
</template>

<style scoped>
.panel{ border:1px solid var(--border-color); background: linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,0)), var(--card-bg); border-radius: 10px; overflow:hidden; }
.panel-header{ display:flex; align-items:center; padding: 0.85rem 1rem; cursor:pointer }
.tag{ display:inline-flex; align-items:center; gap:.5rem; padding:.3rem .6rem; border-radius: 8px; font-weight:800; letter-spacing:.2px; border:1px solid transparent; }
.tag-text{ color: var(--text-primary) }
.chev{ margin-left:.25rem; opacity:.85 }
.panel-body{ padding: 0.5rem 1rem 1rem; color: var(--text-primary); }

/* Accent variants exactly like screenshot: accent border + tinted background */
[data-accent="green"]{ border-color: rgba(52,211,153,.5); background: linear-gradient(0deg, rgba(52,211,153,.10), rgba(52,211,153,.10)), var(--card-bg) }
[data-accent="green"] .tag{ color:#22c55e; background: rgba(34,197,94,.12); border-color: rgba(34,197,94,.55) }

[data-accent="blue"]{ border-color: rgba(96,165,250,.5); background: linear-gradient(0deg, rgba(96,165,250,.10), rgba(96,165,250,.10)), var(--card-bg) }
[data-accent="blue"] .tag{ color:#60a5fa; background: rgba(96,165,250,.10); border-color: rgba(96,165,250,.55) }

[data-accent="purple"]{ border-color: rgba(192,132,252,.5); background: linear-gradient(0deg, rgba(192,132,252,.12), rgba(192,132,252,.12)), var(--card-bg) }
[data-accent="purple"] .tag{ color:#c084fc; background: rgba(192,132,252,.15); border-color: rgba(192,132,252,.55) }

[data-accent="yellow"]{ border-color: rgba(250,204,21,.45); background: linear-gradient(0deg, rgba(250,204,21,.10), rgba(250,204,21,.10)), var(--card-bg) }
[data-accent="yellow"] .tag{ color:#facc15; background: rgba(250,204,21,.12); border-color: rgba(250,204,21,.55) }

[data-accent="red"]{ border-color: rgba(251,113,133,.5); background: linear-gradient(0deg, rgba(251,113,133,.10), rgba(251,113,133,.10)), var(--card-bg) }
[data-accent="red"] .tag{ color:#fb7185; background: rgba(251,113,133,.12); border-color: rgba(251,113,133,.55) }
</style>
