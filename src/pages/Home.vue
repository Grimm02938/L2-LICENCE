<script setup lang="ts">
import { useRouter } from 'vue-router'
import CollapsiblePanel from '../shared/CollapsiblePanel.vue'
import ScheduleBoard from '../components/ScheduleBoard.vue'
import { subjects } from '../shared/data/subjects'

const router = useRouter()

type ScheduleEntry = {
	day: string
	slots: { time: string; title: string; room?: string; teacher?: string }[]
}

// En attente de l'emploi du temps officiel : remplissez ce tableau pour activer l'affichage.
const schedulePreview: ScheduleEntry[] = []

function goToSubject(slug: string) {
	router.push({ name: 'subject', params: { slug } })
}
</script>

<template>
	<div class="home">
		<ScheduleBoard :entries="schedulePreview" />

		<section>
		<h1>Matières</h1>
		<div class="panels">
			<CollapsiblePanel
				v-for="s in subjects"
				:key="s.slug"
				:title="s.title"
				:icon-name="s.iconKey"
				:accent="s.accent"
				:accent-rgb="s.accentRgb"
				:accent-hex="s.accentHex"
				:toggle="false"
				@header-click="goToSubject(s.slug)"
			>
				<p class="desc">{{ s.description }}</p>
			</CollapsiblePanel>
		</div>

		<p class="legal">
			Tous les documents hébergés sur ce site appartiennent aux professeurs de licence
			mathématiques de Paris-Saclay. En particulier, tout usage commercial est interdit.
		</p>
		</section>
	</div>
</template>

<style scoped>
.home { display:flex; flex-direction: column; gap: 2.5rem; }
.panels { display:flex; flex-direction: column; gap: 1rem; }
.desc { color: var(--text-secondary); margin: .25rem 0 0; }
.legal { margin-top: 2rem; font-size: .9rem; color: var(--text-secondary); border-top: 1px solid rgba(255,255,255,.08); padding-top: 1.5rem; line-height: 1.5; }
h1 { font-size: 2.25rem; }
@media (min-width: 768px) { h1 { font-size: 2.5rem } }
</style>
