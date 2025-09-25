<template>
  <aside class="sidebar" aria-hidden="true">
    <div class="accent"></div>
  </aside>
</template>

<style scoped>
.sidebar {
  position: sticky;
  top: 96px;
  width: 220px;
  display: flex;
  justify-content: center;
  padding-top: 0.5rem;
}

.accent {
  width: 3px;
  flex-grow: 1;
  max-height: 460px;
  border-radius: 999px;
  background:
    linear-gradient(180deg, rgba(99, 102, 241, 0.4), rgba(59, 130, 246, 0.1)),
    linear-gradient(90deg, rgba(244, 114, 182, 0.35), rgba(99, 102, 241, 0.2));
  box-shadow: 0 12px 28px rgba(2, 12, 34, 0.45);
}

@media (max-width: 1099px) {
  .sidebar {
    display: none;
  }
}
</style>
