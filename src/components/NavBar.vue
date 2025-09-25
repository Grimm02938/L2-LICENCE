<script setup lang="ts">
import Logo from './Logo.vue'
</script>

<template>
  <header class="navbar-container">
    <div class="nav-orbit"></div>
    <div class="container">
      <nav class="navbar">
        <a href="#/" class="brand">
          <Logo />
          <span class="brand-text">
            <span class="brand-title">L2-Licence</span>
            <span class="brand-sub">Université Paris-Saclay</span>
          </span>
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar-container {
  position: sticky;
  top: 0;
  z-index: 30;
  overflow: hidden;
  background: rgba(7, 11, 23, 0.68);
  border-bottom: 1px solid rgba(148, 163, 184, 0.18);
  backdrop-filter: blur(22px);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding: 1rem 0;
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
    radial-gradient(circle at 18% -30%, rgba(99, 102, 241, 0.35), transparent 60%),
    radial-gradient(circle at 92% 12%, rgba(244, 114, 182, 0.25), transparent 55%);
  opacity: 0.55;
  z-index: -1;
}

@media (max-width: 900px) {
  .navbar {
    justify-content: center;
    text-align: center;
  }

  .brand::after {
    display: none;
  }
}

@media (max-width: 600px) {
  .container {
    padding: 0 1rem;
  }

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
}
</style>