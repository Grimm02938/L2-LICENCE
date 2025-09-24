<script setup lang="ts">
// No props; purely decorative background layer
</script>

<template>
  <div class="cosmic-bg" aria-hidden="true">
    <div class="stars" />
    <div class="twinkle" />
    <div class="nebula" />
  </div>
  
</template>

<style scoped>
.cosmic-bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
  background: radial-gradient(1200px 800px at 10% 20%, rgba(80, 120, 255, 0.05), transparent 60%),
              radial-gradient(1000px 700px at 80% 10%, rgba(255, 80, 180, 0.045), transparent 60%),
              radial-gradient(900px 900px at 70% 80%, rgba(50, 200, 160, 0.04), transparent 60%),
              #0f1626;
}

.stars, .twinkle, .nebula {
  position: absolute;
  inset: 0;
}

/* Base star field using multiple tiny radial gradients */
.stars {
  background-image:
    radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.7), rgba(255,255,255,0)),
    radial-gradient(1px 1px at 60% 70%, rgba(255,255,255,0.8), rgba(255,255,255,0)),
    radial-gradient(1px 1px at 80% 20%, rgba(255,255,255,0.6), rgba(255,255,255,0)),
    radial-gradient(1px 1px at 40% 80%, rgba(255,255,255,0.7), rgba(255,255,255,0)),
    radial-gradient(1px 1px at 10% 90%, rgba(255,255,255,0.6), rgba(255,255,255,0)),
    radial-gradient(1px 1px at 90% 50%, rgba(255,255,255,0.75), rgba(255,255,255,0));
  background-repeat: no-repeat;
  animation: drift 120s linear infinite;
}

/* Slight twinkling overlay */
.twinkle {
  background-image:
    radial-gradient(1.5px 1.5px at 25% 25%, rgba(255,255,255,0.8), rgba(255,255,255,0)),
    radial-gradient(1.5px 1.5px at 75% 65%, rgba(255,255,255,0.9), rgba(255,255,255,0)),
    radial-gradient(1.5px 1.5px at 55% 35%, rgba(255,255,255,0.8), rgba(255,255,255,0));
  background-repeat: no-repeat;
  mix-blend-mode: screen;
  animation: twinkle 6s ease-in-out infinite alternate;
}

/* Soft moving nebula fog */
.nebula {
  background: radial-gradient(800px 600px at 30% 70%, rgba(120, 200, 255, 0.05), transparent 65%),
              radial-gradient(600px 600px at 70% 40%, rgba(255, 160, 220, 0.05), transparent 60%);
  filter: blur(20px) saturate(120%);
  animation: flow 60s ease-in-out infinite alternate;
}

@keyframes drift {
  from { transform: translate3d(0,0,0); }
  to   { transform: translate3d(-2%, -2%, 0); }
}

@keyframes twinkle {
  0%, 100% { opacity: 0.25; }
  50% { opacity: 0.5; }
}

@keyframes flow {
  0% { transform: translate3d(0,0,0) scale(1); }
  100% { transform: translate3d(1%, -1%, 0) scale(1.02); }
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .stars, .twinkle, .nebula { animation: none !important; }
}
</style>
