
<template>
  <aside class="sidebar">
    <nav>
      <ul>
        <li><a href="#">Arithmétique</a></li>
        <li><a href="#">Algèbre linéaire</a></li>
        <li><a href="#">Analyse</a></li>
        <li><a href="#">Topologie</a></li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 250px;
  background-color: var(--sidebar-bg-color);
  padding: 1rem;
  border-right: 1px solid var(--border-color);
  box-shadow: 2px 0 5px var(--shadow-color);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li a {
  display: block;
  padding: 0.75rem 1.25rem;
  border-radius: 5px;
  color: var(--text-color);
  font-weight: 500;
}

li a:hover {
  background-color: var(--main-bg-color);
  text-decoration: none;
}
</style>
