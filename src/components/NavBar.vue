<script setup lang="ts">
import Logo from './Logo.vue'
</script>

<template>
  <header class="navbar-container">
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
  z-index: 30;
  width: 100%;
  padding: 0.75rem clamp(1rem, 5vw, 3rem);
  background: rgba(7, 11, 23, 0.82);
  border-bottom: 1px solid rgba(148, 163, 184, 0.18);
  backdrop-filter: blur(18px);
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  color: var(--text-primary);
  text-decoration: none;
}

.brand-text {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.brand-title {
  font-weight: 900;
  letter-spacing: 0.5px;
  font-size: 1.08rem;
}

.brand-sub {
  color: var(--text-secondary);
  font-size: 0.8rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .navbar-container {
    padding: 0.6rem 1.1rem;
  }

  .navbar {
    justify-content: center;
  }

  .brand {
    gap: 0.65rem;
  }

  .brand-title {
    font-size: 1rem;
  }

  .brand-sub {
    font-size: 0.72rem;
    letter-spacing: 0.14em;
  }
}
</style>