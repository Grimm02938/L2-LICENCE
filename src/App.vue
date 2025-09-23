
<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="app-wrapper">
    <NavBar />
    <main class="container" style="padding-top:1rem;">
      <router-view />
    </main>
  </div>
  
</template>

<style scoped>
.app-wrapper{ min-height:100vh; display:flex; flex-direction:column }
main{ flex:1 }
</style>
