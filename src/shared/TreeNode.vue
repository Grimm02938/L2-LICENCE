<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{ node: any }>()
const emit = defineEmits<{ (e: 'navigate', path: string): void }>()
const open = ref(true)
function onClick(){
  if (props.node.path) {
    emit('navigate', props.node.path);
  } else {
    open.value = !open.value;
  }
}
</script>

<template>
  <div class="node">
    <div class="label" :class="{ clickable: !!node.path }" @click="onClick">
      <span class="bullet">{{ node.children ? (open ? '▾' : '▸') : '•' }}</span>
      {{ node.label }}
    </div>
    <div v-if="node.children && open" class="children">
      <TreeNode v-for="c in node.children" :key="c.label" :node="c" @navigate="$emit('navigate', $event)" />
    </div>
  </div>
</template>

<style scoped>
.label{ padding:.25rem .25rem; border-radius:.4rem }
.label.clickable{ cursor:pointer }
.label.clickable:hover{ background: rgba(148,163,184,.12) }
.bullet{ width:1rem; display:inline-block; opacity:.8 }
.children{ margin-left:.75rem; border-left:1px dashed var(--border-color); padding-left:.5rem }
</style>
