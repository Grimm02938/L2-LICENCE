<script setup lang="ts">
import * as L from 'lucide-vue-next'

const props = withDefaults(defineProps<{ name: string; size?: number | string; class?: string }>(), { size: 24 })

// Map semantic keys to Lucide icons (professional set)
const map: Record<string, any> = {
	algebra: L.Sigma,
	matrix: (L.Table2 || L.Table),
	function: (L.FunctionSquare || L.Activity || L.LineChart),
	integers: L.Calculator,
	topology: (L.Box || L.Cuboid || L.Shapes),
	book: L.BookOpen,
	code: L.Code2,
}

const Cmp = map[props.name] || L.Circle
</script>

<template>
	<component :is="Cmp" :size="size" :class="props.class" aria-hidden="true" />
</template>

<style scoped>
:deep(svg){ display:inline-block }
</style>
