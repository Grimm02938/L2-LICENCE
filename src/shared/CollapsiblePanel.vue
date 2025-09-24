<script setup lang="ts">
import { ref } from 'vue'
import Icon from './Icon.vue'

const props = withDefaults(defineProps<{
	title: string
	iconName?: string
	accent?: 'blue' | 'green' | 'purple' | 'red'
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
</script>

<template>
	<div class="panel" :class="`accent-${props.accent}`">
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
  border-radius: 12px;
  background:
    linear-gradient(0deg, rgba(var(--accent-color), .08), rgba(var(--accent-color), .08)),
    rgba(17,24,39,.65);
  box-shadow: inset 0 0 0 1px rgba(0,0,0,.15);
}
.header { width:100%; padding:.75rem; display:flex; align-items:center; background:transparent; border:none; color:var(--text-primary); cursor:pointer }
.pill { display:inline-flex; align-items:center; gap:.5rem; padding:.35rem .6rem; border-radius: 999px; border:1px solid rgba(var(--accent-color), .35); background: rgba(var(--accent-color), .12) }
.ttl { font-weight: 700 }
.caret { opacity:.7; margin-left:.35rem }
.ic { width: 18px; height: 18px }
.body { padding: 0 1rem 1rem 1rem; color: var(--text-secondary) }

/* Accent variants map the RGB triplet used by rgba(var(--accent-color), a) */
.accent-blue { --accent-color: 59 130 246; }
.accent-green { --accent-color: 34 197 94; }
.accent-purple { --accent-color: 168 85 247; }
.accent-red { --accent-color: 239 68 68; }
</style>
