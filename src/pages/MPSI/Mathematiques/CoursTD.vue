<script setup lang="ts">
import PageLayout from '../../../shared/PageLayout.vue'
import SubjectSectionCard from '../../../shared/SubjectSectionCard.vue'
import CollapsiblePanel from '../../../shared/CollapsiblePanel.vue'
import { mathsCoursTD } from '../../../shared/data/mathsCoursTD'
</script>

<template>
  <PageLayout>
    <template #title>[MPSI] Mathématiques — Cours & TD</template>

    <div class="sections">
      <SubjectSectionCard
        v-for="section in mathsCoursTD"
        :key="section.id"
        :icon="section.icon"
        :title="section.title"
        :description="section.description"
        :accent="section.accent"
      >
        <CollapsiblePanel
          v-for="group in section.groups"
          :key="group.id"
          :title="group.title"
          :icon="group.icon"
        >
          <ul class="links">
            <li v-for="link in group.links" :key="link.label">
              <a class="chip" :href="link.href" target="_blank" rel="noopener">{{ link.label }}</a>
            </li>
          </ul>
        </CollapsiblePanel>
      </SubjectSectionCard>
    </div>
  </PageLayout>
</template>

<style scoped>
.sections {
  display: grid;
  gap: 1.25rem;
}
.links {
  display: grid;
  gap: .5rem;
  list-style: none;
  padding: 0;
}
.chip {
  display: inline-block;
  padding: .25rem .6rem;
  border-radius: .5rem;
  background: rgba(148, 163, 184, .12);
  border: 1px solid rgba(148, 163, 184, .24);
}
.chip:hover { background: rgba(148, 163, 184, .18); }
</style>
