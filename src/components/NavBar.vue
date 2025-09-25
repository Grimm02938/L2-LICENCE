<script setup lang="ts">
import { ref, watch } from 'vue';
import Logo from './Logo.vue'

const isMenuOpen = ref(false);

const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value };
const closeMenu = () => { isMenuOpen.value = false };

watch(isMenuOpen, (open) => {
  if (typeof document !== 'undefined') {
    document.body.classList.toggle('no-scroll', open);
  }
});
</script>

<template>
  <header class="navbar-container">
    <div class="container">
      <nav class="navbar">
        <div class="navbar-brand">
          <a href="#/" class="brand">
            <Logo />
            <span class="brand-text">
              <span class="brand-title">L2-Licence</span>
              <span class="brand-sub">Plateforme Pédagogique Mathématiques</span>
            </span>
          </a>
        </div>
        
        <!-- Mobile menu button hidden per request -->
        <button class="mobile-menu-button" style="display:none" aria-hidden="true" tabindex="-1">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
        
        <div class="navbar-menu" :class="{ 'is-active': isMenuOpen }">
          <div class="nav-links creative-nav">
            <a href="#" class="nav-link active" @click="closeMenu">Accueil</a>
          </div>
          <div class="navbar-decor">
            <span class="nav-gradient"></span>
            <span class="nav-dot"></span>
            <span class="nav-dot nav-dot2"></span>
            <span class="nav-dot nav-dot3"></span>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar-container {
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(8px);
  background: rgba(15, 22, 38, 0.85);
  border-bottom: 1px solid var(--border-color);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.brand { display:flex; align-items:center; gap:.75rem; color: var(--text-primary); text-decoration:none; }
.brand-text { display:flex; flex-direction:column; line-height:1.1 }
.brand-title { font-weight: 900; letter-spacing:.4px }
  
  /* Hide mobile overlay menu entirely per request to avoid dark patch at left */
  .mobile-menu-button { display: none; }
  .navbar-menu { display: none; }
.brand-sub { color: var(--text-secondary); font-size:.8rem }

.navbar-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: var(--text-secondary);
  font-weight: 500;
  transition: var(--transition-fast);
  padding: 0.5rem 0;
}

.nav-link.active, .nav-link:hover {
  color: var(--text-primary);
}



.mobile-menu-button {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-shadow: none;
}

.mobile-menu-button:hover {
  background: transparent;
  transform: none;
  box-shadow: none;
}

.bar {
  height: 3px;
  width: 100%;
  background: var(--text-primary);
  border-radius: 3px;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .mobile-menu-button {
    display: none; /* hidden on mobile */
  }
  
  .navbar-menu {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    background: rgba(15, 22, 38, 0.96);
    backdrop-filter: blur(8px);
    align-items: flex-start;
    padding: 2rem;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    z-index: 999;
  }
  
  .navbar-menu.is-active {
    transform: translateX(0);
  }
  
  .nav-links {
    flex-direction: column;
    width: 100%;
  }
  
  .navbar-end {
    margin-left: 0;
    margin-top: 2rem;
  }
}
/* Creative nav bar design */
.creative-nav {
  position: relative;
  z-index: 2;
}
.navbar-decor {
  position: absolute;
  right: 2.5rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 0.7rem;
  pointer-events: none;
}
.nav-gradient {
  display: block;
  width: 90px;
  height: 8px;
  border-radius: 8px;
  background: linear-gradient(90deg, #f472b6 0%, #6366f1 100%);
  opacity: 0.18;
  margin-right: 0.5rem;
}
.nav-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #f472b6;
  box-shadow: 0 0 12px 2px #f472b6aa;
  opacity: 0.7;
  animation: navDotPulse 2.5s infinite alternate;
}
.nav-dot2 {
  background: #6366f1;
  box-shadow: 0 0 12px 2px #6366f1aa;
  animation-delay: 0.7s;
}
.nav-dot3 {
  background: #fbbf24;
  box-shadow: 0 0 12px 2px #fbbf24aa;
  animation-delay: 1.2s;
}
@keyframes navDotPulse {
  0% { transform: scale(1); opacity: 0.7; }
  100% { transform: scale(1.25); opacity: 1; }
}
</style>