<script setup lang="ts">
import Logo from './Logo.vue'
</script>

<template>
  <header class="navbar-container">
    <div class="container">
      <div class="navbar">
        <router-link to="/" class="brand">
          <Logo />
          <div class="brand-text">
            <span class="brand-title">L2-Licence</span>
            <span class="brand-sub">Université Paris-Saclay</span>
          </div>
        </router-link>
        <div class="nav-orbit"></div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbar-container {
  position: sticky;
  top: 0;
  z-index: 40;
  width: 100%;
  backdrop-filter: blur(16px);
  background: var(--nav-gradient);
  box-shadow: inset 0 -1px 0 rgba(43, 86, 160, 0.45);
}

.navbar-container::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, rgba(21, 45, 88, 0.4), rgba(11, 25, 52, 0.8));
  opacity: 0.55;
  z-index: 0;
}

.navbar {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  position: relative;
}

.brand::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 48px;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #6366f1, #a855f7);
  opacity: 0.8;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.brand:hover::after {
  transform: scaleX(1);
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-title {
  font-size: 1.125rem;
  font-weight: 800;
  color: var(--text-primary);
}

.brand-sub {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.nav-orbit {
  width: 120px;
  height: 120px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.1), transparent 60%);
  pointer-events: none;
}

@media (max-width: 900px) {
  .brand-sub {
    display: none;
  }
  .brand-title {
    font-size: 1.25rem;
  }
  .brand::after {
    display: none;
  }
}

@media (max-width: 600px) {
  .navbar {
    height: 60px;
  }
  .brand {
    gap: 0.5rem;
  }
  .brand-title {
    font-size: 1.1rem;
  }
  .brand > :deep(.logo .svg) {
    width: 32px;
    height: 32px;
  }
  .brand::after {
    left: 42px;
  }
}
</style>