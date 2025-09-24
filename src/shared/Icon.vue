<script setup lang="ts">
const props = withDefaults(defineProps<{ name: string; size?: number; color?: string }>(), {
  size: 18,
})

const icons: Record<string, string> = {
  sigma: '<path d="M5 3h14v3H9l6 6-6 6h10v3H5l7-9L5 3Z"/>',
  matrix: '<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="11" y="3" width="6" height="6" rx="1"/><rect x="3" y="11" width="6" height="6" rx="1"/><rect x="11" y="11" width="6" height="6" rx="1"/>',
  function: '<path d="M6 18c3 0 3-12 6-12h6" stroke-width="2" fill="none"/><circle cx="18" cy="6" r="1.5"/>',
  integers: '<path d="M6 5v14h3l9-14v14" stroke-width="2" fill="none"/>',
  topology: '<path d="M12 4c4.418 0 8 3.134 8 7s-3.582 7-8 7-8-3.134-8-7 3.582-7 8-7Zm0 0c3 3 3 11 0 14" stroke-width="2" fill="none"/>',
  python: '<path d="M9 3h4a3 3 0 0 1 3 3v3H10a2 2 0 0 1-2-2V3Z"/><path d="M15 21h-4a3 3 0 0 1-3-3v-3h6a2 2 0 0 1 2 2v4Z"/><circle cx="13" cy="6" r="1" fill="currentColor"/>',
  flask: '<path d="M10 3h4v2l4 6v6a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V11l4-6V3Z" fill="none" stroke-width="2"/><path d="M8 14h8" stroke-width="2"/>',
  code: '<path d="M8 8 4 12l4 4" fill="none" stroke-width="2"/><path d="M16 8l4 4-4 4" fill="none" stroke-width="2"/>',
  book: '<path d="M5 5h9a3 3 0 0 1 3 3v11H8a3 3 0 0 0-3 3V5Z" fill="none" stroke-width="2"/><path d="M17 19V8a3 3 0 0 1 3-3v14a3 3 0 0 0-3-0Z" fill="none" stroke-width="2"/>',
  language: '<circle cx="12" cy="12" r="9" fill="none" stroke-width="2"/><path d="M3 12h18M12 3c3 3 3 15 0 18M6 6c4 2 8 2 12 0M6 18c4-2 8-2 12 0" fill="none" stroke-width="2"/>',
  atom: '<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="4" fill="none" stroke-width="2"/><ellipse cx="12" cy="12" rx="4" ry="9" fill="none" stroke-width="2"/>'
}

const svg = icons[props.name] ?? icons['function']
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" :style="{ color }" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
    <g v-html="svg" />
  </svg>
</template>

<style scoped>
svg { display: inline-block; vertical-align: middle }
</style>
