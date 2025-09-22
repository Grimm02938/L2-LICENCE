<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  image: string;
  badge: string;
  professor: string;
}>();
</script>

<template>
  <div class="course-card card glow-effect">
    <div class="course-card-image">
      <div class="course-image-placeholder" :data-title="title[0]"></div>
      <div class="course-badge" :class="{ 'accent': badge === 'Spécialité' }">{{ badge }}</div>
    </div>
    
    <div class="course-card-body">
      <h3 class="course-title">{{ title }}</h3>
      <p class="course-description">{{ description }}</p>
      
      <div class="course-professor">
        <div class="professor-avatar">{{ professor[0] }}</div>
        <span>{{ professor }}</span>
      </div>
      
      <div class="course-card-footer">
        <a href="#" class="course-link">Voir le cours</a>
        <span class="course-stats">24 leçons</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.course-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  transition: var(--transition-normal);
}

.course-card:hover {
  transform: translateY(-10px);
}

.course-card-image {
  height: 160px;
  position: relative;
  overflow: hidden;
  margin: -1.5rem -1.5rem 1.5rem;
}

.course-image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Orbitron', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  color: var(--dark-bg);
  background: var(--gradient-primary);
}

.course-image-placeholder::before {
  content: attr(data-title);
}

.course-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--primary);
  color: var(--dark-bg);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  z-index: 1;
}

.course-badge.accent {
  background: var(--accent);
}

.course-card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.course-title {
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
}

.course-description {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  flex: 1;
}

.course-professor {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.professor-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: var(--dark-bg);
}

.course-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--border-color);
  padding-top: 1rem;
  font-size: 0.9rem;
}

.course-link {
  position: relative;
  padding-right: 24px;
}

.course-link::after {
  content: '→';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: transform 0.3s ease;
}

.course-link:hover::after {
  transform: translate(5px, -50%);
}

.course-stats {
  color: var(--text-secondary);
}
</style>