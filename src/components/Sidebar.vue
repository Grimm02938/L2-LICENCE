<template>
  <aside class="sidebar">
    <nav>
      <ul>
        <li v-for="subject in subjects" :key="subject.name">
          <a href="#" @click.prevent="selectSubject(subject)">
            {{ subject.name }}
          </a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { subjects } from '../data/subjects';

const emit = defineEmits(['subject-selected']);

function selectSubject(subject) {
  emit('subject-selected', subject);
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #f4f4f4;
  padding: 20px;
  border-right: 1px solid #ddd;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li a {
  display: block;
  padding: 8px 12px;
  text-decoration: none;
  color: #333;
  border-radius: 4px;
}

li a:hover {
  background-color: #e0e0e0;
}
</style>
