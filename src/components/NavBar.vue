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
            <span class="brand-sub">Plateforme mathématiques • Licence 2</span>
          </span>
        </a>

        <div class="nav-center">
          <span class="pill">2024 - 2025</span>
          <div class="nav-metrics">
            <span>12 matières</span>
            <span class="dot"></span>
            <span>100+ ressources</span>
            <span class="dot"></span>
            <a href="#courses" class="nav-link accent-link">Explorer</a>
          </div>
          <div class="nav-glow"></div>
        </div>

        <div class="nav-right">
          <span class="status-pill">
            Mise à jour <strong>sept. 2025</strong>
          </span>
          <span class="pulse"></span>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar-container {
  position: sticky;
  top: 0;
  z-index: 30;
  backdrop-filter: blur(30px);
  background: rgba(7, 11, 23, 0.65);
  border-bottom: 1px solid rgba(148, 163, 184, 0.18);
  overflow: hidden;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1rem 0;
  position: relative;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  color: var(--text-primary);
  text-decoration: none;
  position: relative;
}

.brand::after {
  content: '';
  position: absolute;
  bottom: -0.25rem;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #f472b6, #6366f1);
  opacity: 0.45;
}

.brand-text {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.brand-title {
  font-weight: 900;
  letter-spacing: 0.45px;
  font-size: 1.05rem;
}

.brand-sub {
  color: var(--text-secondary);
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.nav-center {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: flex-start;
  position: relative;
  padding: 0.6rem 1rem;
  border-radius: 18px;
  background: rgba(15, 23, 42, 0.78);
  border: 1px solid rgba(148, 163, 184, 0.18);
  box-shadow: 0 20px 40px rgba(2, 12, 34, 0.25);
}

.nav-center .pill {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  background: rgba(99, 102, 241, 0.2);
  color: #c7d2fe;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 700;
}

.nav-metrics {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  color: var(--text-secondary);
  font-size: 0.85rem;
}

.nav-metrics .dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(148, 163, 184, 0.55);
}

.accent-link {
  color: #f472b6;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.accent-link::after {
  content: '';
  display: block;
  margin-top: 0.2rem;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #f472b6, #6366f1);
  opacity: 0.6;
}

.nav-glow {
  position: absolute;
  inset: -25%;
  border-radius: 24px;
  background: radial-gradient(circle, rgba(244, 114, 182, 0.15), transparent 65%);
  filter: blur(22px);
  pointer-events: none;
  z-index: -1;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  background: rgba(56, 189, 248, 0.18);
  color: rgba(191, 239, 255, 0.95);
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.status-pill strong {
  font-weight: 800;
}

.pulse {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #22d3ee;
  box-shadow: 0 0 0 0 rgba(34, 211, 238, 0.6);
  animation: ping 2s infinite;
}

.nav-orbit {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at 20% -30%, rgba(99, 102, 241, 0.35), transparent 60%),
    radial-gradient(circle at 90% 10%, rgba(244, 114, 182, 0.25), transparent 55%);
  opacity: 0.55;
  z-index: -1;
}

@keyframes ping {
  0% {
    transform: scale(0.9);
    opacity: 1;
  }
  75% {
    transform: scale(1.6);
    opacity: 0;
  }
  100% {
    transform: scale(0.9);
    opacity: 0;
  }
}

@media (max-width: 900px) {
  .navbar {
    flex-direction: column;
    align-items: stretch;
    gap: 1.5rem;
    text-align: center;
  }

  .nav-right {
    justify-content: center;
  }

  .nav-center {
    width: 100%;
    align-items: center;
  }

  .brand::after {
    display: none;
  }
}
</style>