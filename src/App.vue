<template>
  <div id="app-layout">
    <Sidebar @subject-selected="updateSelectedSubject" />
    <ContentDisplay :subject="selectedSubject" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Sidebar from './components/Sidebar.vue';
import ContentDisplay from './components/ContentDisplay.vue';

const selectedSubject = ref(null);

function updateSelectedSubject(subject) {
  selectedSubject.value = subject;
}
</script>

<style scoped>
#app-layout {
  display: flex;
  height: 100vh;
}
</style>
