<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { subjects } from '../shared/data/subjects'
import { contentBySubject } from '../shared/data/content'
import type { Chapter } from '../shared/data/content'
import Icon from '../shared/Icon.vue'
import CollapsiblePanel from '../shared/CollapsiblePanel.vue'

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))
const subject = computed(() => subjects.find(s => s.slug === slug.value))

const chapters = computed(() => contentBySubject[slug.value] || [])

const resourceMeta = [
	{ key: 'cours', label: 'Cours :' },
	{ key: 'td', label: 'TD :' },
	{ key: 'tdCorrige', label: 'TD (Correction) :' },
	{ key: 'ds', label: 'DS :' },
	{ key: 'dsCorrige', label: 'DS (Correction) :' },
] satisfies { key: keyof Chapter['sections']; label: string }[]

type ResourceKey = (typeof resourceMeta)[number]['key']

function visibleSections(chapter: Chapter) {
	return resourceMeta
		.map(meta => ({ meta, section: chapter.sections[meta.key] }))
		.filter((entry): entry is {
			meta: (typeof resourceMeta)[number]
			section: NonNullable<Chapter['sections'][ResourceKey]>
		} => Boolean(entry.section))
}
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
					<div class="row" v-for="item in visibleSections(ch)" :key="item.meta.key">
						<span class="label">{{ item.meta.label }}</span>
						<a
							v-if="item.section.url"
							class="chip"
							:href="item.section.url"
							target="_blank"
							rel="noopener"
						>
							{{ item.section.label || 'Ouvrir' }}
						</a>
						<span v-else class="chip placeholder">{{ item.section.label || 'À venir' }}</span>
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
.chip.placeholder { border-style: dashed; background: rgba(var(--accent-color), .08); color: var(--text-secondary); pointer-events: none; }

@media (max-width: 600px) {
	.row { grid-template-columns: 1fr; justify-items:flex-start; row-gap:.2rem; }
	.label { margin-bottom: .05rem; }
}
</style>
