<script setup lang="ts">
defineProps<{ name: string; class?: string }>()

const paths: Record<string, string> = {
	algebra: 'M4 6h7v7H4z M13 6h7v7h-7z M4 15h7v7H4z M13 15h7v7h-7z',
	function: 'M3 12c0-4.418 3.582-8 8-8h4v2h-4a6 6 0 0 0-6 6c0 3.314 2.686 6 6 6h4v2h-4c-4.418 0-8-3.582-8-8z',
	matrix: 'M3 5h18v14H3V5zm2 2v3h4V7H5zm0 5v5h4v-5H5zm6-5v3h8V7h-8zm0 5v5h8v-5h-8z',
	integers: 'M5 19V5h2v14H5zm6-10h8v2h-8v-2zm0 6h8v2h-8v-2z',
	topology: 'M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 12 6z',
	book: 'M4 6a2 2 0 0 1 2-2h12v14H6a2 2 0 1 0 0 4h12v2H6a4 4 0 1 1 0-8h12V4H6a2 2 0 0 0-2 2z',
	code: 'M9 18L3 12l6-6 1.5 1.5L6 12l4.5 4.5L9 18zm6 0l-1.5-1.5L18 12l-4.5-4.5L15 6l6 6-6 6z',
}
</script>

<template>
	<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
		<path :d="paths[name] || ''" />
	</svg>
</template>

<style scoped>
svg { display:inline-block }
</style>
