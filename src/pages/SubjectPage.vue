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

const heroStyle = computed(() => {
	const fallback = '#3b82f6'
	const hex = subject.value?.accentHex ?? fallback
	const rgb = subject.value?.accentRgb ?? '59 130 246'
	return {
		'--subject-accent-hex': hex,
		'--subject-accent-rgb': rgb,
	}
})

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
		<div class="subject-hero" :style="heroStyle">
			<div class="subject-mark">
				<Icon :name="subject.iconKey" class="ic" />
			</div>
			<div class="subject-copy">
				<p class="subject-kicker">Programme de L2 — {{ subject.category || 'Mathématiques' }}</p>
				<h1>{{ subject.title }}</h1>
				<p class="desc">{{ subject.description }}</p>
			</div>
		</div>

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
.subject-hero { display:flex; align-items:flex-start; gap:1.5rem; padding: 1.5rem 1.8rem; border-radius: 20px; border:1px solid rgba(var(--subject-accent-rgb), .35); background: linear-gradient(135deg, rgba(var(--subject-accent-rgb), .12), rgba(15,23,42,.92)); box-shadow: 0 22px 38px rgba(2, 12, 34, .22); margin-bottom: 1.5rem; position:relative; overflow:hidden; }
.subject-hero::after { content:''; position:absolute; inset:0; background: radial-gradient(circle at 18% 18%, rgba(var(--subject-accent-rgb), .18), transparent 60%); opacity:.65; pointer-events:none; mix-blend-mode: screen; }
.subject-mark { width:64px; height:64px; border-radius:18px; display:flex; align-items:center; justify-content:center; background: rgba(var(--subject-accent-rgb), .18); border:1px solid rgba(var(--subject-accent-rgb), .45); box-shadow: inset 0 0 0 1px rgba(255,255,255,.06); flex-shrink:0; }
.subject-mark .ic { width: 34px; height: 34px; color: var(--text-primary); }
.subject-copy { display:grid; gap:.4rem; position:relative; z-index:1; }
.subject-kicker { margin:0; text-transform: uppercase; font-size:.75rem; letter-spacing:.22em; color: rgba(var(--subject-accent-rgb), .9); font-weight:700; }
.subject-copy h1 { margin:0; font-size: clamp(2rem, 3vw, 2.8rem); }
.desc { color: rgba(226,232,240,.86); margin:0; line-height:1.5; }
.chapters { display: grid; gap: 16px; margin-top: 18px }

@media (max-width: 640px) {
	.subject-hero { flex-direction: column; padding: 1.2rem; gap: 1rem; }
	.subject-mark { width:56px; height:56px; border-radius:16px; }
	.subject-mark .ic { width:30px; height:30px; }
	.subject-copy h1 { font-size: clamp(1.8rem, 7vw, 2.3rem); }
}
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
