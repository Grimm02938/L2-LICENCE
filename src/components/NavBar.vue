<script setup lang="ts">
import { ref } from 'vue';

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
          <a href="#/" class="logo"><span class="symbol">∑</span> L2 <span class="highlight">MATHS</span></a>
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

.logo {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: 1px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
}

.logo::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  background: var(--primary);
  margin-right: 8px;
  border-radius: 50%;
  box-shadow: 0 0 10px var(--primary);
}

.highlight {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-left: 2px;
}

.symbol { margin-right: .5rem; filter: drop-shadow(0 2px 6px rgba(122,162,247,.35)); }

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