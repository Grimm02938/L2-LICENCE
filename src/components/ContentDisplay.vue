<template>
  <main class="content-display">
    <div v-if="subject">
      <h1>{{ subject.name }}</h1>
      <ul v-if="subject.links && subject.links.length">
        <li v-for="link in subject.links" :key="link.name">
          <a :href="link.url" target="_blank" rel="noopener noreferrer">
            {{ link.name }}
          </a>
        </li>
      </ul>
      <p v-else>
        Aucun document disponible pour cette matière pour le moment.
      </p>
    </div>
    <div v-else>
      <h1>Bienvenue</h1>
      <p>Veuillez sélectionner une matière dans la barre latérale.</p>
    </div>
  </main>
</template>

<script setup>
defineProps({
  subject: Object,
});
</script>

<style scoped>
.content-display {
  padding: 20px 40px;
  flex: 1;
}

h1 {
  margin-top: 0;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li a {
  display: inline-block;
  padding: 5px 0;
  text-decoration: underline;
  color: #0000ee;
}
</style>
