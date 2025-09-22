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

<style>
/* Reset global et style de base */
body, html {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  background-color: #fff;
  color: #333;
}

#app-layout {
  display: flex;
  height: 100vh;
}
</style>
