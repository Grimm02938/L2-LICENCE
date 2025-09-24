<script setup lang="ts">
import { ref, computed } from 'vue'
import Icon from './Icon.vue'

const props = withDefaults(defineProps<{
	title: string
	iconName?: string
	accent?: 'blue' | 'green' | 'purple' | 'red'
	accentRgb?: string // optional "r g b" override (e.g., "30 58 138")
	accentHex?: string // optional "#RRGGBB" or "#RGB"
	toggle?: boolean
}>(), {
	accent: 'blue',
	toggle: true,
})

const emit = defineEmits<{ 'header-click': [] }>()
const open = ref(true)

function onHeaderClick() {
	emit('header-click')
	if (props.toggle) open.value = !open.value
}

// Compute CSS variable from either accentRgb or accentHex
const accentVar = computed(() => {
	if (props.accentRgb) return props.accentRgb
	if (props.accentHex) {
		const h = props.accentHex.replace('#','')
		let r = 0, g = 0, b = 0
		if (h.length === 3) {
			r = parseInt(h[0] + h[0], 16)
			g = parseInt(h[1] + h[1], 16)
			b = parseInt(h[2] + h[2], 16)
			return `${r} ${g} ${b}`
		}
		if (h.length >= 6) {
			r = parseInt(h.slice(0,2), 16)
			g = parseInt(h.slice(2,4), 16)
			b = parseInt(h.slice(4,6), 16)
			return `${r} ${g} ${b}`
		}
	}
	return ''
})
</script>

<template>
	<div class="panel" :class="`accent-${props.accent}`" :style="accentVar ? { '--accent-color': accentVar } : undefined">
		<button class="header" type="button" @click="onHeaderClick">
			<span class="pill">
				<Icon v-if="props.iconName" :name="props.iconName" class="ic" />
				<span class="ttl">{{ props.title }}</span>
				<span v-if="props.toggle" class="caret">▾</span>
			</span>
		</button>
		<div v-show="open || !props.toggle" class="body">
			<slot />
		</div>
	</div>
  
</template>

<style scoped>
/* Base panel styling */
.panel {
  --accent-color: 59 130 246; /* default to blue RGB components */
	border: 1px solid rgba(var(--accent-color), .35);
	border-radius: 16px;
  background:
    linear-gradient(0deg, rgba(var(--accent-color), .08), rgba(var(--accent-color), .08)),
    rgba(17,24,39,.65);
	box-shadow:
		inset 0 0 0 1px rgba(0,0,0,.15),
		0 6px 16px rgba(0,0,0,.25),
		0 0 0 1px rgba(255,255,255,.02);
	transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
}
.panel:hover { transform: translateY(-1px); box-shadow: 0 10px 20px rgba(0,0,0,.3), inset 0 0 0 1px rgba(0,0,0,.15) }
.header { width:100%; padding:.75rem; display:flex; align-items:center; background:transparent; border:none; color:var(--text-primary); cursor:pointer }
.pill { display:inline-flex; align-items:center; gap:.5rem; padding:.35rem .6rem; border-radius: 999px; border:1px solid rgba(var(--accent-color), .45); background: rgba(var(--accent-color), .16); color: rgb(var(--accent-color)) }
.ttl { font-weight:800; text-transform: uppercase; letter-spacing: .02em }
.caret { opacity:.7; margin-left:.35rem }
.ic { width: 18px; height: 18px }
.body { padding: 0 1rem 1rem 1rem; color: var(--text-secondary) }

/* Accent variants map the RGB triplet used by rgba(var(--accent-color), a) */
.accent-blue { --accent-color: 59 130 246; }
.accent-green { --accent-color: 34 197 94; }
.accent-purple { --accent-color: 168 85 247; }
.accent-red { --accent-color: 239 68 68; }
</style>
