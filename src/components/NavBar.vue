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
  backdrop-filter: blur(18px);
  background: var(--nav-gradient);
  box-shadow: inset 0 -1px 0 rgba(94, 117, 182, 0.25);
}

.navbar-container::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(18, 33, 73, 0.8), rgba(11, 20, 44, 0.92) 60%, rgba(18, 33, 73, 0.85));
  mix-blend-mode: screen;
  opacity: 0.65;
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

.navbar::after {
  content: '';
  position: absolute;
  inset: 60% -20% -180% -20%;
  background: radial-gradient(circle at 20% 0%, rgba(89, 126, 255, 0.12), transparent 65%),
    radial-gradient(circle at 88% 30%, rgba(255, 132, 209, 0.08), transparent 60%);
  filter: blur(40px);
  opacity: 0.6;
  z-index: 0;
  pointer-events: none;
}

.nav-orbit {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at 18% -40%, rgba(99, 126, 255, 0.4), transparent 62%),
    radial-gradient(circle at 88% 10%, rgba(244, 114, 182, 0.28), transparent 58%);
  opacity: 0.5;
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