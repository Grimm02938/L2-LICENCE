<script setup lang="ts">
import { reactive, ref, computed } from 'vue'

const updates = [
  {
    version: 'v1.3',
    date: '24 sept. 2025',
    tags: ['Sidebar repensée', 'Chapitres repliés'],
    note: 'Optimisation de la navigation desktop et polish mobile.',
  },
  {
    version: 'v1.2',
    date: '23 sept. 2025',
    tags: ['Couleurs exactes', 'Icônes Lucide'],
    note: 'Palette par matière et refonte visuelle des cartes.',
  },
  {
    version: 'v1.1',
    date: '22 sept. 2025',
    tags: ['Déploiement'],
    note: 'Mise en ligne GitHub Pages + Firebase.',
  },
]

const contact = reactive({ email: '', subject: '', message: '' })
const status = ref('')
const journalOpen = ref(false)

const canSend = computed(
  () => contact.email.trim().length > 0 && contact.subject.trim().length > 0 && contact.message.trim().length > 4,
)
const encoded = 'YWRhbWUuYWJkZWxtb3VsYUB1bml2ZXJzaXRlLXBhcmlzLXNhY2xheS5mcg=='

function decodeRecipient() {
  if (typeof atob === 'function') return atob(encoded)
  return ''
}

function resetForm() {
  contact.email = ''
  contact.subject = ''
  contact.message = ''
}

function sendContact() {
  if (!canSend.value || typeof window === 'undefined') return
  const target = decodeRecipient()
  if (!target) return
  const params = new URLSearchParams({
    subject: contact.subject.trim(),
    body: `Expéditeur : ${contact.email}\n\n${contact.message}`,
  })
  window.location.href = `mailto:${target}?${params.toString()}`
  status.value = 'Message prêt dans votre messagerie. L’envoi direct sera ajouté ultérieurement.'
  resetForm()
  window.setTimeout(() => (status.value = ''), 3600)
}

function toggleJournal() {
  journalOpen.value = !journalOpen.value
}
</script>

<template>
  <aside class="sidebar" aria-label="Journal et outils">
    <button class="journal-toggle" type="button" @click="toggleJournal">
      <span>Journal de bord</span>
      <span class="chevron" :class="{ open: journalOpen }">▾</span>
    </button>

    <transition name="fade">
      <section v-if="journalOpen" class="card timeline">
        <ol>
          <li v-for="item in updates" :key="item.version">
            <div class="line"></div>
            <div class="meta">
              <span class="badge">{{ item.version }}</span>
              <span class="date">{{ item.date }}</span>
            </div>
            <p class="note">{{ item.note }}</p>
            <ul class="tags">
              <li v-for="tag in item.tags" :key="tag">{{ tag }}</li>
            </ul>
          </li>
        </ol>
      </section>
    </transition>

    <section class="card links">
      <h2>Navigation rapide</h2>
      <router-link class="link" to="/emploi-du-temps">Consulter l'emploi du temps</router-link>
    </section>

    <section class="card contact">
      <h2>Contacter la coordination</h2>
      <form @submit.prevent="sendContact">
        <label>
          <span>Email *</span>
          <input v-model="contact.email" type="email" required placeholder="prenom.nom@universite.fr" />
        </label>
        <label>
          <span>Objet *</span>
          <input v-model="contact.subject" type="text" required />
        </label>
        <label class="textarea">
          <span>Message *</span>
          <textarea v-model="contact.message" rows="3" required></textarea>
        </label>
        <button type="submit" :disabled="!canSend">Préparer l'envoi</button>
      </form>
      <p class="hint">L'email partira depuis votre messagerie. Une version avec envoi automatique est à l'étude.</p>
      <p v-if="status" class="status">{{ status }}</p>
    </section>
  </aside>
</template>

<style scoped>
.sidebar {
  position: sticky;
  top: 90px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 240px;
  color: var(--text-secondary);
}

.journal-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.65rem 0.85rem;
  border-radius: 999px;
  border: 1px solid rgba(99, 102, 241, 0.45);
  background: rgba(79, 70, 229, 0.2);
  color: var(--text-primary);
  font-weight: 700;
  letter-spacing: 0.01em;
  cursor: pointer;
  transition: background 0.18s ease, transform 0.18s ease;
}

.journal-toggle:hover {
  background: rgba(99, 102, 241, 0.28);
  transform: translateY(-2px);
}

.chevron {
  transition: transform 0.2s ease;
}

.chevron.open {
  transform: rotate(180deg);
}

.card {
  background: linear-gradient(160deg, rgba(15, 23, 42, 0.92), rgba(30, 41, 59, 0.85));
  border: 1px solid rgba(122, 162, 247, 0.08);
  border-radius: 16px;
  padding: 0.95rem 1rem;
  box-shadow: 0 16px 36px rgba(2, 12, 34, 0.35);
  backdrop-filter: blur(14px);
}

.timeline ol {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.timeline li {
  position: relative;
  padding-left: 1.6rem;
}

.timeline .line {
  position: absolute;
  left: 0.55rem;
  top: 0.35rem;
  width: 2px;
  height: calc(100% + 0.4rem);
  background: linear-gradient(180deg, rgba(59, 130, 246, 0.5), rgba(147, 51, 234, 0));
}

.timeline li:last-child .line {
  display: none;
}

.meta {
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
}

.badge {
  background: rgba(59, 130, 246, 0.25);
  color: #9cc4ff;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
}

.date {
  font-size: 0.72rem;
  opacity: 0.75;
}

.note {
  margin: 0.35rem 0 0.25rem;
  color: var(--text-secondary);
  font-size: 0.85rem;
}

.tags {
  list-style: none;
  display: flex;
  gap: 0.25rem;
  margin: 0;
  padding: 0;
}

.tags li {
  font-size: 0.7rem;
  padding: 0.15rem 0.45rem;
  border-radius: 999px;
  background: rgba(147, 51, 234, 0.18);
  color: #cfc4ff;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.links h2,
.contact h2 {
  font-size: 0.9rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 0.6rem;
  color: var(--text-primary);
}

.link {
  display: block;
  padding: 0.55rem 0.7rem;
  border-radius: 12px;
  background: rgba(59, 130, 246, 0.18);
  color: var(--text-primary);
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.18s ease, background 0.18s ease;
}

.link:hover {
  transform: translateX(4px);
  background: rgba(59, 130, 246, 0.28);
}

.contact form {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

label {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  font-size: 0.78rem;
  color: var(--text-secondary);
}

input,
textarea {
  background: rgba(15, 23, 42, 0.92);
  border: 1px solid rgba(148, 163, 184, 0.25);
  border-radius: 10px;
  padding: 0.45rem 0.6rem;
  color: var(--text-primary);
  font-size: 0.85rem;
  transition: border 0.18s ease, box-shadow 0.18s ease;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: rgba(99, 102, 241, 0.6);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}

textarea {
  resize: vertical;
  min-height: 90px;
}

button {
  border: none;
  border-radius: 999px;
  padding: 0.55rem 0.8rem;
  font-weight: 700;
  font-size: 0.82rem;
  color: #0b1220;
  background: linear-gradient(135deg, #60a5fa, #7c3aed);
  cursor: pointer;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

button:not(:disabled):hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 25px rgba(79, 70, 229, 0.35);
}

.hint {
  margin-top: 0.6rem;
  font-size: 0.74rem;
  opacity: 0.75;
}

.status {
  margin-top: 0.4rem;
  font-size: 0.75rem;
  color: #bbf7d0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
