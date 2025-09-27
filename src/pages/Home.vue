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
	<div class="home">
		<section id="courses">
		<div class="overview-card">
			<h2>Présentation</h2>
			<p>
				Ce site met à disposition un ensemble structuré de cours, TD et corrections à destination des
				étudiants de la Licence 2 Mathématiques d'Orsay.
			</p>
		</div>
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
.overview-card { background: linear-gradient(135deg, rgba(59,130,246,.12), rgba(14,165,233,.08)); border: 1px solid rgba(148,163,184,.18); border-radius: 18px; padding: 1.25rem 1.5rem; box-shadow: 0 18px 34px rgba(2,12,34,.22); backdrop-filter: blur(8px); display:grid; gap:.45rem; }
.overview-card h2 { margin:0; font-size:1.1rem; letter-spacing:.12em; text-transform: uppercase; color: rgba(191,219,254,.9); }
.overview-card p { margin:0; color: rgba(226,232,240,.92); line-height:1.55; max-width: 58ch; }
.panels { display:flex; flex-direction: column; gap: 1rem; }
.desc { color: var(--text-secondary); margin: .25rem 0 0; }
.legal { margin-top: 2rem; font-size: .9rem; color: var(--text-secondary); border-top: 1px solid rgba(255,255,255,.08); padding-top: 1.5rem; line-height: 1.5; }
h1 { font-size: 2.25rem; }
@media (min-width: 768px) { h1 { font-size: 2.5rem } }
</style>
