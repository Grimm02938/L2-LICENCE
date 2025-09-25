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
				<div class="resources">
					<div class="resource" v-for="item in visibleSections(ch)" :key="item.meta.key">
						<div class="resource-label">
							<span class="bullet"></span>
							<span>{{ item.meta.label }}</span>
						</div>
						<div class="resource-action">
							<a
								v-if="item.section.url"
								class="resource-link"
								:href="item.section.url"
								target="_blank"
								rel="noopener"
							>
								<span>{{ item.section.label || 'Ouvrir' }}</span>
								<span class="arrow">↗</span>
							</a>
							<span v-else class="coming-soon">{{ item.section.label || 'À venir' }}</span>
						</div>
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
.chapters { display: grid; gap: 16px; margin-top: 18px }
.resources { display: grid; gap: .65rem; padding: .5rem 0; }
.resource { display:flex; align-items:center; justify-content:space-between; gap: 1rem; padding: .45rem .6rem; border-radius: 12px; background: rgba(15,23,42,0.65); border:1px solid rgba(var(--accent-color), .18); box-shadow: 0 10px 18px rgba(2,12,34,.18); }
.resource-label { display:flex; align-items:center; gap:.55rem; font-weight:700; color: var(--text-primary); letter-spacing:.02em; text-transform: uppercase; font-size:.75rem; }
.resource-label .bullet { width: 8px; height:8px; border-radius:50%; background: rgba(var(--accent-color), .65); box-shadow: 0 0 12px rgba(var(--accent-color), .35); }
.resource-action { display:flex; align-items:center; }
.resource-link { display:inline-flex; align-items:center; gap:.4rem; padding:.35rem .75rem; border-radius: 999px; background: rgba(var(--accent-color), .14); color: rgb(var(--accent-color)); font-weight:700; font-size:.85rem; letter-spacing:.05em; text-transform: uppercase; transition: transform .18s ease, background .18s ease; }
.resource-link .arrow { font-size:.9rem; }
.resource-link:hover { background: rgba(var(--accent-color), .22); transform: translateY(-1px); }
.resource-link:focus-visible { outline: 2px solid rgba(var(--accent-color), .6); outline-offset: 2px; }
.coming-soon { font-size:.82rem; color: rgba(148,163,184,.78); font-style: italic; letter-spacing:.04em; }

@media (max-width: 600px) {
	.resource { flex-direction: column; align-items:flex-start; gap:.45rem; }
	.resource-link { width: 100%; justify-content: center; }
}
</style>
