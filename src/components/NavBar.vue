<script setup lang="ts">
import { ref } from 'vue';
import Logo from './Logo.vue'

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
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
        
        <button class="mobile-menu-button" @click="toggleMenu" aria-label="Menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
        
        <div class="navbar-menu" :class="{ 'is-active': isMenuOpen }">
          <div class="nav-links">
            <a href="#" class="nav-link active">Accueil</a>
            <a href="#courses" class="nav-link">Cours</a>
            <a href="#schedule" class="nav-link">Emploi du temps</a>
            <a href="#resources" class="nav-link">Ressources</a>
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
  backdrop-filter: blur(10px);
  background: rgba(10, 14, 23, 0.8);
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
    display: flex;
  }
  
  .navbar-menu {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    background: var(--dark-bg);
    align-items: flex-start;
    padding: 2rem;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    z-index: 99;
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
</style>