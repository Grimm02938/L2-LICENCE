<script setup lang="ts">
import PageLayout from '../shared/PageLayout.vue'
import { subjects } from '../shared/data/subjects'
import CollapsiblePanel from '../shared/CollapsiblePanel.vue'
function iconName(slug: string){
  switch(slug){
    case 'analyse': return 'function'
    case 'algebre-lineaire': return 'matrix'
    case 'arithmetique': return 'integers'
    case 'topologie-1': return 'topology'
    case 'calcul-numerique': return 'python'
    default: return 'sigma'
  }
}
</script>

<template>
  <PageLayout>
    <template #title>Bienvenue</template>
    <p class="lead">Choisissez une matière pour accéder aux cours et TD.</p>

    <h3 class="section-title">Matières :</h3>
    <div class="category-list">
      <CollapsiblePanel
        v-for="s in subjects"
        :key="s.slug"
        :title="s.name"
        :icon-name="iconName(s.slug)"
        :accent="s.accent === 'purple' ? 'purple' : s.accent"
      >
        <p>Cette section regroupe les cours de {{ s.name }}.</p>
      </CollapsiblePanel>
    </div>
  </PageLayout>
</template>

<style scoped>
.lead{ color: var(--text-secondary); margin-bottom: 1rem }
.section-title{ margin: 0 0 .75rem; font-size: 1.1rem; color: var(--text-secondary) }
.category-list{ display: grid; gap: 1rem }
</style>
