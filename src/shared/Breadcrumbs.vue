<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
const crumbs = computed(() => {
  const parts = String(route.fullPath).replace(/^#?\//, '').split('/').filter(Boolean)
  const acc: { label: string; to?: string }[] = [{ label: 'Home', to: '/' }]
  let build = ''
  for (const p of parts) {
    build += '/' + p
    acc.push({ label: decodeURIComponent(p.replace(/-/g,' ')), to: build })
  }
  return acc
})
function nav(to?: string){ if (to) router.push(to) }
</script>

<template>
  <nav class="breadcrumbs">
    <span v-for="(c,i) in crumbs" :key="i" class="crumb" :class="{link: !!c.to && i < crumbs.length-1}" @click="nav(c.to)">
      {{ c.label }}<span v-if="i < crumbs.length-1" class="sep">›</span>
    </span>
  </nav>
</template>

<style scoped>
.breadcrumbs{ color: var(--text-secondary); margin-bottom:.25rem; font-size:.9rem }
.crumb.link{ cursor:pointer }
.crumb.link:hover{ color: var(--text-primary) }
.sep{ margin: 0 .35rem; opacity:.6 }
</style>
