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
      <h1>Bienvenue sur la plateforme pédagogique</h1>
      <p>Sélectionnez une matière dans le menu de gauche pour afficher les ressources correspondantes.</p>
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
  padding: 30px 50px;
  flex: 1;
  background-color: #ffffff;
}

h1 {
  margin-top: 0;
  font-size: 2.5rem;
  border-bottom: 3px solid #f0f0f0;
  padding-bottom: 15px;
  margin-bottom: 30px;
  color: #343a40;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 12px;
}

li a {
  font-size: 1.1rem;
  text-decoration: none;
}

li a:hover {
  text-decoration: underline;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #6c757d;
}
</style>
