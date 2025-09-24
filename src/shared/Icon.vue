<script setup lang="ts">
withDefaults(defineProps<{ name: string; size?: number | string; class?: string }>(), { size: 24 })

// Clean, readable icons tuned for small sizes
const paths: Record<string, string> = {
	// Algebra: axes + blocks to evoke matrices/linear mappings
	algebra: 'M4 4h2v14h14v2H4V4zm6 2h8v2h-8V6zm0 4h6v2h-6v-2zm0 4h4v2h-4v-2zM6 10h2v2H6v-2zM6 14h2v2H6v-2z',

	// Matrix (kept for compatibility)
	matrix: 'M3 5h18v14H3V5zm2 2v3h4V7H5zm0 5v5h4v-5H5zm6-5v3h8V7h-8zm0 5v5h8v-5h-8z',

	// Function/analysis: smooth S-curve
	function: 'M3 15c2-5 5-7 8-7s6 2 10 9l-2 1c-3-5-6-7-8-7s-4 1-6 5l-2-1z',

	// Integers/arithmetics: equal bars + minus
	integers: 'M5 7h14v2H5V7zm0 4h10v2H5v-2zm0 4h14v2H5v-2z',

	// Topology: nested circles
	topology: 'M12 3a9 9 0 100 18 9 9 0 000-18zm0 3a6 6 0 110 12 6 6 0 010-12z',

	// Book (unused but available)
	book: 'M4 6a2 2 0 012-2h12v14H6a2 2 0 100 4h12v2H6a4 4 0 110-8h12V4H6a2 2 0 00-2 2z',

	// Code/computation
	code: 'M9 17L4 12l5-5 1.5 1.5L7 12l3.5 3.5L9 17zm6 0l-1.5-1.5L17 12l-3.5-3.5L15 7l5 5-5 5z',
}
</script>

<template>
	<svg :width="size" :height="size" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
		<path :d="paths[name] || ''" />
	</svg>
  
</template>

<style scoped>
svg { display:inline-block }
</style>
