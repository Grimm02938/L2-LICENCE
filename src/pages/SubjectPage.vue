<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { subjects } from '../shared/data/subjects'
import { contentBySubject } from '../shared/data/content'
import Icon from '../shared/Icon.vue'
import SectionCard from '../shared/SectionCard.vue'
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
.desc { color: var(--text-secondary) }
.chapters { display: grid; gap: 12px; margin-top: 14px }
.rows { display: grid; gap: .4rem; }
.row { display:flex; align-items:center; gap:.5rem }
.label { color: var(--text-primary); font-weight: 700 }
.chip { display:inline-block; padding: .15rem .45rem; border-radius: 6px; border:1px solid rgba(255,255,255,.1); background: rgba(255,255,255,.06); color: rgb(var(--accent-color)); }
</style>
