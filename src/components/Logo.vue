<script setup lang="ts">
// Purely decorative logo mark (orbit + node)
</script>

<template>
  <svg class="logo" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#7aa2f7"/>
        <stop offset="100%" stop-color="#c099ff"/>
      </linearGradient>
    </defs>
    <!-- Orbit ring -->
    <ellipse cx="32" cy="32" rx="22" ry="12" fill="none" stroke="url(#g)" stroke-width="2.5"/>
    <!-- Vertical ring -->
    <ellipse cx="32" cy="32" rx="12" ry="22" fill="none" stroke="url(#g)" stroke-width="2.5" opacity="0.65"/>
    <!-- Node -->
    <circle cx="48" cy="28" r="4" fill="url(#g)"/>
  </svg>
  
</template>

<style scoped>
.logo { width: 32px; height: 32px; display: block; filter: drop-shadow(0 2px 10px rgba(122,162,247,.35)); }
</style>
