<template>
  <aside class="sidebar" aria-label="Informations pratiques">
    <sectiPS C:\Users\abdel\OneDrive\Documents\GitHub\L2-LICENCE> git push origin main
fatal: unable to access 'https://github.com/Grimm02938/L2-LICENCE.git/': Could not resolve 
host: github.comon class="card info">
      <h2>Point rapide</h2>
      <p class="highlight">
        Dernière mise à jour le <strong>24 septembre</strong> avec une navigation raffinée et des
        ressources uniformisées.
      </p>
      <ul class="focus">
        <li>Sidebar réorganisée pour un accès immédiat aux matières.</li>
        <li>Chapitres repliés par défaut pour une lecture plus fluide.</li>
        <li>Placeholder unifié « Disponible prochainement ».</li>
      </ul>
    </section>

    <section class="card digest">
      <h2>À surveiller</h2>
      <ul>
        <li>
          <span class="tag">Semestre 1</span>
          <p>DS d'analyse prévu semaine 42 — supports en préparation.</p>
        </li>
        <li>
          <span class="tag violet">Semestre 2</span>
          <p>Ouverture des sujets de topologie à partir du 4 novembre.</p>
        </li>
      </ul>
    </section>

    <section class="card support">
      <h2>Coordination</h2>
      <p>
        Pour toute question urgente, contactez directement l’équipe pédagogique par votre messagerie
        étudiante à <strong>adame.abdelmoula@universite-paris-saclay.fr</strong>.
      </p>
      <p class="hint">Pensez à préciser la matière et le chapitre concerné.</p>
    </section>
  </aside>
</template>

<style scoped>
.sidebar {
  position: sticky;
  top: 90px;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  width: 240px;
  color: var(--text-secondary);
}

.card {
  background: linear-gradient(160deg, rgba(15, 23, 42, 0.92), rgba(30, 41, 59, 0.85));
  border: 1px solid rgba(122, 162, 247, 0.08);
  border-radius: 16px;
  padding: 0.95rem 1rem;
  box-shadow: 0 16px 36px rgba(2, 12, 34, 0.35);
  backdrop-filter: blur(14px);
}

.info h2 {
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin: 0 0 0.8rem;
  color: var(--text-primary);
}

.highlight {
  margin: 0 0 0.8rem;
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.45;
}

.highlight strong {
  color: var(--text-primary);
}

.focus {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.focus li {
  font-size: 0.78rem;
  color: rgba(191, 219, 254, 0.85);
  padding-left: 1.1rem;
  position: relative;
}

.focus li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.4rem;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f472b6, #6366f1);
  opacity: 0.75;
}

.digest h2,
.support h2 {
  font-size: 0.82rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin: 0 0 0.75rem;
  color: var(--text-primary);
}

.digest ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.digest li {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  padding: 0.6rem 0.75rem;
  border-radius: 12px;
  background: rgba(15, 23, 42, 0.65);
  border: 1px solid rgba(148, 163, 184, 0.18);
}

.digest .tag {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: rgba(59, 130, 246, 0.18);
  color: #bfdbfe;
}

.digest .tag.violet {
  background: rgba(168, 85, 247, 0.2);
  color: #ddd6fe;
}

.digest p {
  margin: 0;
  font-size: 0.82rem;
  color: var(--text-secondary);
}

.support p {
  margin: 0 0 0.6rem;
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.45;
}

.support .hint {
  font-size: 0.75rem;
  opacity: 0.7;
  margin-bottom: 0;
}
</style>
