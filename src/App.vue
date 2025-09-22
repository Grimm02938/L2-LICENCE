
<script setup lang="ts">
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import ContentDisplay from './components/ContentDisplay.vue';
</script>

<template>
  <div id="app-container">
    <Header />
    <div class="main-layout">
      <Sidebar />
      <main class="content-area">
        <ContentDisplay />
      </main>
    </div>
  </div>
</template>

<style scoped>
#app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--main-bg-color);
}

.main-layout {
  display: flex;
  flex: 1;
  overflow: hidden; /* Empêche le débordement de contenu */
}

.content-area {
  flex: 1;
  padding: 2rem;
  overflow-y: auto; /* Ajoute le défilement si le contenu est trop grand */
}
</style>
