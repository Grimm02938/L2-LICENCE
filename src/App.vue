<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import CosmicBackground from './shared/CosmicBackground.vue'
</script>

<template>
  <div class="app-wrapper">
    <CosmicBackground />
    <NavBar />

    <main>
      <div class="container">
        <router-view />
      </div>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer-bottom">
          <p>&copy; 2025 L2-LICENCE. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  </div>
  
</template>

<style scoped>
.app-wrapper { display:flex; flex-direction:column; min-height:100vh; position: relative; }
main { flex:1; padding: 2rem 0; }
.footer { background: var(--darker-bg); border-top: 1px solid var(--border-color); padding: 2rem 0 1rem; margin-top: 2rem; }
.footer-bottom { text-align:center; color: var(--text-secondary); font-size:.9rem; }
</style>
