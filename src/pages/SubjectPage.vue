<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { subjects } from '../shared/data/subjects'
import { contentBySubject } from '../shared/data/content'
import Icon from '../shared/Icon.vue'
import CollapsiblePanel from '../shared/CollapsiblePanel.vue'

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))
const subject = computed(() => subjects.find(s => s.slug === slug.value))

const chapters = computed(() => contentBySubject[slug.value] || [])
</script>

<template>
	<section v-if="subject">
		<div class="title">
			<Icon :name="subject.iconKey" class="ic" />
			<h1>{{ subject.title }}</h1>
		</div>
		<p class="desc">{{ subject.description }}</p>

		<div class="chapters">
			<CollapsiblePanel
				v-for="ch in chapters"
				:key="ch.title"
				:title="ch.title"
				:icon-name="subject.iconKey"
				:accent-hex="subject.accentHex"
				:accent-rgb="subject.accentRgb"
			>
				<div class="rows">
					<div class="row" v-if="ch.sections.cours">
						<span class="label">Cours :</span>
						<a class="chip" :href="ch.sections.cours.url" target="_blank" rel="noopener">{{ ch.sections.cours.label || 'Ouvrir' }}</a>
					</div>
					<div class="row" v-if="ch.sections.td">
						<span class="label">TD :</span>
						<a class="chip" :href="ch.sections.td.url" target="_blank" rel="noopener">{{ ch.sections.td.label || 'Ouvrir' }}</a>
					</div>
					<div class="row" v-if="ch.sections.tdCorrige">
						<span class="label">TD (Correction) :</span>
						<a class="chip" :href="ch.sections.tdCorrige.url" target="_blank" rel="noopener">{{ ch.sections.tdCorrige.label || 'Ouvrir' }}</a>
					</div>
					<div class="row" v-if="ch.sections.ds">
						<span class="label">DS :</span>
						<a class="chip" :href="ch.sections.ds.url" target="_blank" rel="noopener">{{ ch.sections.ds.label || 'Ouvrir' }}</a>
					</div>
					<div class="row" v-if="ch.sections.dsCorrige">
						<span class="label">DS (Correction) :</span>
						<a class="chip" :href="ch.sections.dsCorrige.url" target="_blank" rel="noopener">{{ ch.sections.dsCorrige.label || 'Ouvrir' }}</a>
					</div>
				</div>
			</CollapsiblePanel>
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
.desc { color: var(--text-secondary); margin-bottom: .5rem }
.chapters { display: grid; gap: 12px; margin-top: 14px }
.rows { display: grid; gap: .5rem; }
.row { display:grid; grid-template-columns: 140px minmax(0, 1fr); align-items:center; gap:.55rem; }
.label { color: var(--text-primary); font-weight: 700; line-height:1.35 }
.chip { display:inline-flex; align-items:center; justify-content:flex-start; padding: .18rem .55rem; border-radius: 999px; border:1px solid rgba(var(--accent-color), .45); background: rgba(var(--accent-color), .14); color: rgb(var(--accent-color)); font-weight:700; font-size:.85rem; letter-spacing:.01em }
.chip:hover { background: rgba(var(--accent-color), .2) }
.chip:focus-visible { outline: 2px solid rgba(var(--accent-color), .6); outline-offset: 2px }

@media (max-width: 600px) {
	.row { grid-template-columns: 1fr; justify-items:flex-start; row-gap:.2rem; }
	.label { margin-bottom: .05rem; }
}
</style>
