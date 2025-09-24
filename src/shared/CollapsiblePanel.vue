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
			</span>
			<span v-if="props.toggle" class="caret">▾</span>
		</button>
		<div v-show="open || !props.toggle" class="body">
			<slot />
		</div>
	</div>
  
</template>

<style scoped>
.panel { border: 1px solid var(--border-color); border-radius: 12px; background: rgba(17,24,39,.6); }
.header { width:100%; padding:.75rem; display:flex; justify-content:space-between; align-items:center; background:transparent; border:none; color:var(--text-primary); cursor:pointer }
.pill { display:inline-flex; align-items:center; gap:.5rem; padding:.35rem .6rem; border-radius: 999px; border:1px solid var(--border-color); background: rgba(59,130,246,.08) }
.ttl { font-weight: 700 }
.caret { opacity:.6 }
.ic { width: 18px; height: 18px }
.body { padding: 0 1rem 1rem 1rem; color: var(--text-secondary) }

.accent-blue .pill { background: rgba(59,130,246,.10); border-color: rgba(59,130,246,.35) }
.accent-green .pill { background: rgba(34,197,94,.10); border-color: rgba(34,197,94,.35) }
.accent-purple .pill { background: rgba(168,85,247,.10); border-color: rgba(168,85,247,.35) }
.accent-red .pill { background: rgba(239,68,68,.10); border-color: rgba(239,68,68,.35) }
</style>
