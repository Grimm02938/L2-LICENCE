<script setup lang="ts">
// No additional logic needed for this component
</script>

<template>
  <section class="hero-section">
    <div class="hero-content">
      <div class="badge accent">Licence 2 Mathématiques</div>
      <h1>Bienvenue sur la plateforme<br />L2-LICENCE</h1>
      <p class="hero-description">
        Découvrez une expérience d'apprentissage moderne et interactive pour les étudiants en licence de mathématiques. 
        Accédez à vos cours, exercices et ressources pédagogiques en un seul endroit.
      </p>
      <div class="hero-buttons">
        <button>Découvrir les cours</button>
        <button class="ghost-button">Connexion étudiante</button>
      </div>
      
      <div class="hero-stats">
        <div class="stat-item">
          <div class="stat-value">12</div>
          <div class="stat-label">Cours</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">35+</div>
          <div class="stat-label">Ressources</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">24/7</div>
          <div class="stat-label">Support</div>
        </div>
      </div>
    </div>
    
    <div class="hero-image">
      <div class="geometric-shape shape-1"></div>
      <div class="geometric-shape shape-2"></div>
      <div class="geometric-shape shape-3"></div>
      <div class="hero-card card">
        <div class="hero-card-header">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <div class="hero-card-content">
          <div class="code-block">
            <div class="code-line">
              <span class="keyword">function</span> <span class="function-name">calculateIntegral</span>(<span class="parameter">f</span>, <span class="parameter">a</span>, <span class="parameter">b</span>) {
            </div>
            <div class="code-line indent">
              <span class="keyword">const</span> <span class="variable">n</span> = <span class="number">1000</span>;
            </div>
            <div class="code-line indent">
              <span class="keyword">const</span> <span class="variable">dx</span> = (<span class="parameter">b</span> - <span class="parameter">a</span>) / <span class="variable">n</span>;
            </div>
            <div class="code-line indent">
              <span class="keyword">let</span> <span class="variable">sum</span> = <span class="number">0</span>;
            </div>
            <div class="code-line indent">
              <span class="comment">// Méthode de Simpson</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding: 3rem 0 5rem;
  position: relative;
  min-height: 70vh;
  align-items: center;
}

.hero-content {
  max-width: 580px;
}

.hero-description {
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.7;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}

.hero-stats {
  display: flex;
  gap: 2.5rem;
  margin-top: 3rem;
  position: relative;
}

.hero-stats::before {
  content: '';
  position: absolute;
  top: -1.5rem;
  left: 0;
  width: 50px;
  height: 3px;
  background: var(--gradient-primary);
  border-radius: 3px;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.25rem;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.hero-image {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.geometric-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.3;
}

.shape-1 {
  width: 300px;
  height: 300px;
  background: var(--primary);
  top: -100px;
  right: -100px;
}

.shape-2 {
  width: 200px;
  height: 200px;
  background: var(--accent);
  bottom: 0;
  left: 50px;
}

.shape-3 {
  width: 150px;
  height: 150px;
  background: #9d4edd;
  top: 100px;
  left: -50px;
}

.hero-card {
  width: 100%;
  max-width: 450px;
  position: relative;
  z-index: 1;
  transform: perspective(1000px) rotateY(-10deg) rotateX(5deg);
  transition: transform 0.5s ease;
}

.hero-card:hover {
  transform: perspective(1000px) rotateY(-5deg) rotateX(2deg) translateY(-10px);
}

.hero-card-header {
  display: flex;
  gap: 8px;
  margin-bottom: 1rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--text-secondary);
}

.dot:nth-child(1) {
  background: #ff5f57;
}

.dot:nth-child(2) {
  background: #ffbd2e;
}

.dot:nth-child(3) {
  background: #28ca41;
}

.code-block {
  font-family: 'Consolas', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

.code-line {
  margin-bottom: 0.5rem;
}

.indent {
  padding-left: 1.5rem;
}

.keyword {
  color: #c678dd;
}

.function-name {
  color: #61afef;
}

.parameter {
  color: #e06c75;
}

.variable {
  color: #d19a66;
}

.number {
  color: #98c379;
}

.comment {
  color: #7f848e;
}

@media (max-width: 992px) {
  .hero-section {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .hero-content {
    max-width: 100%;
  }
  
  .hero-image {
    order: -1;
  }
  
  .hero-card {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .hero-buttons {
    flex-direction: column;
  }
  
  .hero-stats {
    gap: 1.5rem;
  }
}
</style>