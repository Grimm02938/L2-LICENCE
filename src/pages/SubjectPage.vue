<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { subjects } from '../shared/data/subjects'
import Icon from '../shared/Icon.vue'

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))
const subject = computed(() => subjects.find(s => s.slug === slug.value))
</script>

<template>
	<section v-if="subject">
		<div class="title">
			<Icon :name="subject.iconKey" class="ic" />
			<h1>{{ subject.title }}</h1>
		</div>
		<p class="desc">{{ subject.description }}</p>

		<div class="card" style="margin-top:1rem;">
			<p>Contenu à venir pour {{ subject.title }}…</p>
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
</style>
