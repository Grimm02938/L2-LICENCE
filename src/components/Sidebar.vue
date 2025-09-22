<template>
  <aside class="sidebar">
    <nav>
      <ul>
        <li v-for="subject in subjects" :key="subject.name">
          <a href="#" @click.prevent="selectSubject(subject)" :class="{ 'active': selectedSubject && selectedSubject.name === subject.name }">
            {{ subject.name }}
          </a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { subjects } from '../data/subjects';

defineProps({
  selectedSubject: Object,
});

const emit = defineEmits(['subject-selected']);

function selectSubject(subject) {
  emit('subject-selected', subject);
}
</script>

<style scoped>
.sidebar {
  width: 280px;
  background-color: #f8f9fa;
  padding: 25px;
  border-right: 1px solid #dee2e6;
  overflow-y: auto;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li a {
  display: block;
  padding: 10px 15px;
  text-decoration: none;
  color: #495057;
  border-radius: 5px;
  transition: background-color 0.2s;
}

li a:hover {
  background-color: #e9ecef;
  text-decoration: none;
}

li a.active {
  background-color: #007bff;
  color: #fff;
}
</style>
