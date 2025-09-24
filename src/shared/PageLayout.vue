<script setup lang="ts">
import ExplorerSidebar from './ExplorerSidebar.vue'
import Breadcrumbs from './Breadcrumbs.vue'
</script>

<template>
  <div class="page">
    <ExplorerSidebar />
    <div class="content">
      <Breadcrumbs />
      <h1 class="page-title"><slot name="title" /></h1>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.page { display: grid; grid-template-columns: 280px 1fr; gap: 1.25rem; }
.content { background: var(--dark-bg); padding: 1rem; border-radius: var(--radius); border:1px solid var(--border-color); }
.page-title { margin: .25rem 0 1rem; }
@media (max-width: 900px){ .page{ grid-template-columns: 1fr } }
</style>
