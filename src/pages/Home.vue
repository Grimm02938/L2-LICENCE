<script setup lang="ts">
import { useRouter } from 'vue-router'
import CollapsiblePanel from '../shared/CollapsiblePanel.vue'
import { subjects } from '../shared/data/subjects'

const router = useRouter()

function goToSubject(slug: string) {
	router.push({ name: 'subject', params: { slug } })
}
</script>

<template>
	<section>
		<h1>Matières</h1>
		<div class="panels">
			<CollapsiblePanel
				v-for="s in subjects"
				:key="s.slug"
				:title="s.title"
				:icon-name="s.iconKey"
				:accent="s.accent"
				:toggle="false"
				@header-click="goToSubject(s.slug)"
			>
				<p class="desc">{{ s.description }}</p>
			</CollapsiblePanel>
		</div>
	</section>
</template>

<style scoped>
.panels { display:flex; flex-direction: column; gap: 1rem; }
.desc { color: var(--text-secondary); margin: .25rem 0 0; }
</style>
