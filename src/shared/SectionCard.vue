<script setup lang="ts">
import { computed } from 'vue'
import * as L from 'lucide-vue-next'

const props = withDefaults(defineProps<{
  title: string
  description?: string
  accentRgb?: string
  accentHex?: string
  icon?: string
}>(), {
  description: '',
  icon: 'FileText'
})

const map: Record<string, any> = {
  Chapitre: L.BookOpen,
  TD: L.FileText,
  'TD corrigé': L.CheckCircle2,
  DS: L.PenTool,
  'DS corrigé': L.BadgeCheck,
}

const R = (hex?: string) => {
  if (!hex) return ''
  const h = hex.replace('#','')
  const r = parseInt(h.slice(0,2),16)
  const g = parseInt(h.slice(2,4),16)
  const b = parseInt(h.slice(4,6),16)
  return `${r} ${g} ${b}`
}

const accent = computed(() => props.accentRgb || R(props.accentHex) || '99 102 241')
const IconCmp = map[props.title] || L.FileText
</script>

<template>
  <div class="card" :style="{ '--a': accent }">
    <div class="hdr">
      <component :is="IconCmp" :size="18" class="ic" />
      <span class="ttl">{{ title }}</span>
    </div>
    <p v-if="description" class="desc">{{ description }}</p>
    <slot />
  </div>
  
</template>

<style scoped>
.card { border:1px solid rgba(var(--a), .35); border-radius:14px; padding:.9rem; background: linear-gradient(0deg, rgba(var(--a), .08), rgba(var(--a), .08)), rgba(17,24,39,.65); box-shadow: inset 0 0 0 1px rgba(0,0,0,.15) }
.hdr { display:flex; align-items:center; gap:.5rem; color: rgb(var(--a)); font-weight:800; text-transform:uppercase; letter-spacing:.02em }
.ic { opacity:.9 }
.desc { margin:.5rem 0 0; color: var(--text-secondary) }
</style>
