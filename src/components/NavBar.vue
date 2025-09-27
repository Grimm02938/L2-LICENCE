<script setup lang="ts">
import Logo from './Logo.vue'
</script>

<template>
  <header class="navbar-container">
    <div class="nav-orbit"></div>
    <nav class="navbar">
      <a href="#/" class="brand">
        <Logo />
        <span class="brand-text">
          <span class="brand-title">L2-Licence</span>
          <span class="brand-sub">Université Paris-Saclay</span>
        </span>
      </a>
    </nav>
  </header>
</template>

<style scoped>
.navbar-container {
  position: sticky;
  top: 0;
  z-index: 40;
  overflow: hidden;
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
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding: 1rem 0;
  width: min(1200px, 100% - 3rem);
  margin: 0 auto;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  color: var(--text-primary);
  text-decoration: none;
  position: relative;
}

.brand::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -0.25rem;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #f472b6, #6366f1);
  opacity: 0.4;
}

.brand-text {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.brand-title {
  font-weight: 900;
  letter-spacing: 0.45px;
  font-size: 1.06rem;
}

.brand-sub {
  color: var(--text-secondary);
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.nav-orbit {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at 18% -40%, rgba(95, 136, 255, 0.35), transparent 60%),
    radial-gradient(circle at 84% 8%, rgba(43, 96, 210, 0.24), transparent 58%);
  opacity: 0.45;
  z-index: 1;
}

@media (max-width: 900px) {
  .navbar {
    justify-content: center;
    text-align: center;
    width: calc(100% - 2.5rem);
  }

  .brand::after {
    display: none;
  }
}

@media (max-width: 600px) {
  .brand {
    gap: 0.6rem;
  }

  .brand-title {
    font-size: 0.98rem;
  }

  .brand-sub {
    font-size: 0.7rem;
    letter-spacing: 0.13em;
  }

  .navbar {
    width: calc(100% - 2rem);
  }
}
</style>