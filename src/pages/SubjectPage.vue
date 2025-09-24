<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PageLayout from '../shared/PageLayout.vue'
import SubjectSectionCard from '../shared/SubjectSectionCard.vue'
import CollapsiblePanel from '../shared/CollapsiblePanel.vue'
import Icon from '../shared/Icon.vue'
import { subjects } from '../shared/data/subjects'

const route = useRoute()
const subject = computed(() => subjects.find(s => s.slug === String(route.params.slug)))

function panelIcon(groupId: string){
  const id = groupId.toLowerCase()
  if(id.includes('cours')) return 'book'
  if(id.includes('td')) return 'function'
  if(id.includes('info') || id.includes('algo') || id.includes('code')) return 'code'
  if(id.includes('phys')) return 'atom'
  if(id.includes('franc') || id.includes('angl')) return 'language'
  return 'sigma'
}
</script>

<template>
  <PageLayout>
    <template #title>
      <span class="title-with-icon" v-if="subject">
        <Icon :name="subject.slug === 'analyse' ? 'function' : subject.slug === 'algebre-lineaire' ? 'matrix' : subject.slug === 'arithmetique' ? 'integers' : subject.slug === 'topologie-1' ? 'topology' : subject.slug === 'calcul-numerique' ? 'python' : 'sigma'" :size="20" />
        <span>{{ subject.name }}</span>
      </span>
      <span v-else>Matière</span>
    </template>

    <div v-if="subject" class="sections">
      <SubjectSectionCard
        v-for="sec in subject.sections"
        :key="sec.id"
        :title="sec.title"
        :description="sec.description"
        :icon-name="subject.slug === 'analyse' ? 'function' : subject.slug === 'algebre-lineaire' ? 'matrix' : subject.slug === 'arithmetique' ? 'integers' : subject.slug === 'topologie-1' ? 'topology' : subject.slug === 'calcul-numerique' ? 'python' : 'sigma'"
        :accent="subject.accent"
      >
        <CollapsiblePanel v-for="grp in sec.groups" :key="grp.id" :title="grp.title" :accent="subject.accent" :icon-name="panelIcon(grp.id)">
          <ul class="links">
            <li v-for="l in grp.links" :key="l.label">
              <a class="chip" :href="l.href" target="_blank" rel="noopener">{{ l.label }}</a>
            </li>
          </ul>
        </CollapsiblePanel>
      </SubjectSectionCard>
    </div>

    <p v-else>Aucune donnée trouvée pour cette matière.</p>
  </PageLayout>
</template>

<style scoped>
.sections { display: grid; gap: 1.25rem; }
.links { display: grid; gap: .5rem; list-style: none; padding: 0; }
.chip { display:inline-block; padding:.25rem .6rem; border-radius:.5rem; background: rgba(148,163,184,.12); border:1px solid rgba(148,163,184,.24); }
.chip:hover { background: rgba(148,163,184,.18); }
</style>
