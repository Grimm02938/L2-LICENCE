<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import TreeNode from './TreeNode.vue'

const q = ref('')
const router = useRouter()

const items = [
  { label: 'Agenda', path: '/' },
  { label: 'MP', path: '/' },
  { label: 'MPSI', children: [
    { label: '[MPSI] Anglais', path: '/' },
    { label: '[MPSI] Français', path: '/' },
    { label: '[MPSI] Informatique', path: '/' },
    { label: '[MPSI] Mathématiques', children: [
      { label: 'Cours & TD', path: '/MPSI/Mathematiques/Cours_TD' },
    ] },
    { label: '[MPSI] Physique Chimie', path: '/' },
  ] }
]

const filtered = computed(() => {
  const term = q.value.trim().toLowerCase()
  if (!term) return items
  const filterTree = (nodes: any[]): any[] => nodes
    .map(n => ({...n, children: n.children ? filterTree(n.children) : undefined }))
    .filter(n => n.label.toLowerCase().includes(term) || (n.children && n.children.length))
  return filterTree(items)
})

function go(path?: string){ if (path) router.push(path) }
</script>

<template>
  <aside class="explorer">
    <div class="explorer-header">
      <div class="search">
        <input v-model="q" type="text" placeholder="Recherche" />
      </div>
    </div>
    <nav class="tree">
      <TreeNode v-for="item in filtered" :key="item.label" :node="item" @navigate="go" />
    </nav>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({ name: 'ExplorerSidebar' })
</script>

<style scoped>
.explorer{ background: var(--darker-bg); border:1px solid var(--border-color); border-radius:.75rem; padding:1rem; }
.explorer-header{ display:flex; align-items:center; justify-content:space-between; margin-bottom: .75rem; }
.search input{ width:100%; background: var(--dark-bg); border:1px solid var(--border-color); border-radius:.5rem; padding:.5rem .75rem; color:var(--text-primary) }
.tree{ font-size:.95rem }
.label{ padding:.35rem .25rem; border-radius:.5rem; }
.label.clickable{ cursor:pointer }
.label.clickable:hover{ background: rgba(148,163,184,.12) }
.children{ margin-left: .75rem; border-left:1px dashed var(--border-color); padding-left:.5rem }
</style>
