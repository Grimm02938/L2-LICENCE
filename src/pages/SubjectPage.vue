<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { subjects } from '../shared/data/subjects'
import Icon from '../shared/Icon.vue'
import SectionCard from '../shared/SectionCard.vue'

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))
const subject = computed(() => subjects.find(s => s.slug === slug.value))

const sections = [
	{ title: 'Chapitre', description: 'Cours, fiches et résumés' },
	{ title: 'TD', description: 'Travaux dirigés à faire' },
	{ title: 'TD corrigé', description: 'Solutions détaillées des TD' },
	{ title: 'DS', description: 'Devoirs surveillés' },
	{ title: 'DS corrigé', description: 'Corrections des DS' },
]
</script>

<template>
	<section v-if="subject">
		<div class="title">
			<Icon :name="subject.iconKey" class="ic" />
			<h1>{{ subject.title }}</h1>
		</div>
		<p class="desc">{{ subject.description }}</p>

		<div class="sections">
			<SectionCard
				v-for="s in sections"
				:key="s.title"
				:title="s.title"
				:description="s.description"
				:accent-hex="subject.accentHex"
				:accent-rgb="subject.accentRgb"
			/>
		</div>
	</section>
	<section v-else>
		<h1>Matière introuvable</h1>
		<p class="desc">La matière demandée n'existe pas.</p>
	</section>
</template>

<style scoped>
.title { display:flex; align-items:center; gap:.75rem }
.ic { width: 28px; height: 28px }
.desc { color: var(--text-secondary) }
.sections { display:grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 12px; margin-top: 14px }
@media (max-width: 720px) { .sections { grid-template-columns: 1fr } }
</style>
