<script setup lang="ts">
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import CourseCard from './components/CourseCard.vue'

const courses = ref([
  {
    id: 1,
    title: 'Algèbre',
    description: 'Espaces vectoriels, applications linéaires, matrices et déterminants.',
    image: '/images/algebra.webp',
    badge: 'Fondamental',
    professor: 'Dr. Martin'
  },
  {
    id: 2,
    title: 'Analyse',
    description: 'Suites et séries, calcul différentiel et intégral, équations différentielles.',
    image: '/images/analysis.webp',
    badge: 'Fondamental',
    professor: 'Dr. Dubois'
  },
  {
    id: 3,
    title: 'Probabilités',
    description: 'Variables aléatoires, lois de probabilité, estimation et tests statistiques.',
    image: '/images/probability.webp',
    badge: 'Spécialité',
    professor: 'Dr. Chen'
  }
])
</script>

<template>
  <div class="app-wrapper">
    <NavBar />
    
    <main>
      <div class="container">
        <HeroSection />
        
        <section id="courses" class="section">
          <h2>Cours Disponibles</h2>
          <p class="section-description">Découvrez nos cours de mathématiques pour la licence 2.</p>
          
          <div class="grid">
            <CourseCard 
              v-for="course in courses" 
              :key="course.id" 
              :title="course.title"
              :description="course.description"
              :image="course.image"
              :badge="course.badge"
              :professor="course.professor"
            />
          </div>
        </section>
        
        <section id="schedule" class="section">
          <h2>Emploi du Temps</h2>
          <p class="section-description">Consultez votre planning hebdomadaire.</p>
          
          <div class="card schedule-card">
            <div class="schedule-header">
              <button class="ghost-button">Semaine Précédente</button>
              <h3>Semaine du 23 Septembre 2025</h3>
              <button class="ghost-button">Semaine Suivante</button>
            </div>
            
            <div class="schedule-grid">
              <!-- Placeholder for schedule content -->
              <div class="schedule-placeholder">
                <p>Emploi du temps en cours de chargement...</p>
                <button>Voir l'emploi du temps complet</button>
              </div>
            </div>
          </div>
        </section>
        
        <section id="resources" class="section">
          <h2>Ressources</h2>
          <p class="section-description">Accédez à nos ressources pédagogiques.</p>
          
          <div class="resources-grid">
            <div class="card resource-card glow-effect">
              <div class="resource-icon">📚</div>
              <h3>Bibliothèque Numérique</h3>
              <p>Accédez à notre collection d'ouvrages et articles scientifiques.</p>
              <a href="#" class="resource-link">Explorer</a>
            </div>
            
            <div class="card resource-card glow-effect">
              <div class="resource-icon">📝</div>
              <h3>Exercices</h3>
              <p>Entraînez-vous avec nos exercices corrigés et travaux dirigés.</p>
              <a href="#" class="resource-link">Commencer</a>
            </div>
            
            <div class="card resource-card glow-effect">
              <div class="resource-icon">🧪</div>
              <h3>Laboratoires Virtuels</h3>
              <p>Expérimentez avec nos simulations et outils interactifs.</p>
              <a href="#" class="resource-link">Découvrir</a>
            </div>
          </div>
        </section>
      </div>
    </main>
    
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <h3>L2 - LICENCE</h3>
            <p>Plateforme pédagogique pour les étudiants en Licence 2 Mathématiques</p>
          </div>
          
          <div class="footer-links">
            <div class="footer-section">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#" class="nav-link">Accueil</a></li>
                <li><a href="#courses" class="nav-link">Cours</a></li>
                <li><a href="#schedule" class="nav-link">Emploi du temps</a></li>
                <li><a href="#resources" class="nav-link">Ressources</a></li>
              </ul>
            </div>
            
            <div class="footer-section">
              <h4>Contact</h4>
              <ul>
                <li><a href="#" class="nav-link">Support</a></li>
                <li><a href="#" class="nav-link">Enseignants</a></li>
                <li><a href="#" class="nav-link">Administration</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2025 L2-LICENCE. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding-top: 2rem;
}

.section {
  margin-bottom: 4rem;
}

.section-description {
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.resource-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
}

.resource-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.resource-link {
  margin-top: auto;
  padding: 0.5rem 1rem;
  border: 1px solid var(--primary);
  border-radius: 4px;
  transition: var(--transition-normal);
}

.resource-link:hover {
  background: var(--primary);
  color: var(--dark-bg);
}

.schedule-card {
  overflow: visible;
}

.schedule-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.schedule-grid {
  min-height: 300px;
}

.schedule-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  background: rgba(10, 174, 255, 0.05);
  border-radius: 8px;
  padding: 2rem;
}

.footer {
  background: var(--darker-bg);
  border-top: 1px solid var(--border-color);
  padding: 4rem 0 1rem;
  margin-top: 4rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 2rem;
}

.footer-brand h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.footer-links {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.footer-section h4 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--primary);
  background: none;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section li {
  margin-bottom: 0.5rem;
}

.footer-bottom {
  border-top: 1px solid var(--border-color);
  padding-top: 1rem;
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
