<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import UtilitySidebar from './components/UtilitySidebar.vue'
import CosmicBackground from './shared/CosmicBackground.vue'
</script>

<template>
  <div class="app-wrapper">
    <CosmicBackground />
    <NavBar />
    <div class="hero-splash" aria-hidden="true">
      <span class="halo h1"></span>
      <span class="halo h2"></span>
      <span class="halo h3"></span>
    </div>

    <main>
      <div class="container content-layout">
        <UtilitySidebar class="utility" />
        <div class="view">
          <router-view />
        </div>
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
.hero-splash { position: relative; height: 140px; margin-bottom: -60px; }
.hero-splash .halo { position: absolute; border-radius: 999px; filter: blur(40px); opacity: .4; }
.hero-splash .h1 { width: 340px; height: 160px; top: -40px; left: 12%; background: radial-gradient(circle, rgba(99,102,241,.35), transparent 65%); }
.hero-splash .h2 { width: 280px; height: 140px; top: -30px; right: 18%; background: radial-gradient(circle, rgba(244,114,182,.28), transparent 68%); animation: drift 10s ease-in-out infinite alternate; }
.hero-splash .h3 { width: 520px; height: 120px; bottom: -60px; left: 35%; background: radial-gradient(circle, rgba(14,165,233,.25), transparent 70%); opacity: .28; }
@keyframes drift { from { transform: translateY(0); } to { transform: translateY(16px); } }
main { flex:1; padding: 2.4rem 0; }
.content-layout { display:flex; gap: 2rem; align-items:flex-start; }
.utility { display:none; }
.view { flex:1; min-width:0; }
.footer { background: var(--darker-bg); border-top: 1px solid var(--border-color); padding: 2rem 0 1rem; margin-top: 2rem; }
.footer-bottom { text-align:center; color: var(--text-secondary); font-size:.9rem; }

@media (min-width: 1100px) {
  .utility { display:block; }
}

@media (max-width: 768px) {
  .hero-splash { height: 90px; margin-bottom: -40px; }
  .hero-splash .h1 { width: 220px; height: 110px; top: -20px; left: 8%; }
  .hero-splash .h2 { width: 200px; height: 100px; right: 10%; }
  .hero-splash .h3 { width: 320px; height: 90px; left: 20%; bottom: -40px; }
  main { padding: 1.6rem 0; }
  .content-layout { flex-direction: column; gap: 1.5rem; }
}
</style>
