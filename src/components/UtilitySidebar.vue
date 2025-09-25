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
const statusKind = ref<'idle' | 'success' | 'error'>('idle')
const sending = ref(false)
const journalOpen = ref(false)

const canSend = computed(
  () =>
    !sending.value &&
    contact.email.trim().length > 0 &&
    contact.subject.trim().length > 0 &&
    contact.message.trim().length > 4,
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

function setStatus(kind: 'idle' | 'success' | 'error', message = '') {
  statusKind.value = kind
  status.value = message
  if (kind !== 'idle' && typeof window !== 'undefined') {
    window.setTimeout(() => {
      statusKind.value = 'idle'
      status.value = ''
    }, 6000)
  }
}

async function sendContact() {
  if (!canSend.value) return
  const target = decodeRecipient()
  if (!target) {
    setStatus('error', "Impossible de récupérer l'adresse de destination.")
    return
  }

  try {
    sending.value = true
    setStatus('idle')

    const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(target)}`
    const payload = {
      email: contact.email.trim(),
      name: contact.subject.trim(),
      message: contact.message.trim(),
      _subject: `Plateforme L2 — ${contact.subject.trim()}`,
      _template: 'box',
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) throw new Error('send_failed')

    resetForm()
    setStatus('success', 'Message envoyé ! Pensez à valider FormSubmit la première fois.')
  } catch (error) {
    console.error('contact form error', error)
    setStatus(
      'error',
      "L'envoi a échoué. Vérifiez votre connexion ou validez l'adresse sur formsubmit.co.",
    )
  } finally {
    sending.value = false
  }
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

    <section class="card contact modern-contact">
      <h2>Contact</h2>
      <form @submit.prevent="sendContact">
        <div class="form-row">
          <label for="contact-email">Email *</label>
          <input id="contact-email" v-model="contact.email" type="email" required autocomplete="email" placeholder="prenom.nom@universite.fr" />
        </div>
        <div class="form-row">
          <label for="contact-subject">Objet *</label>
          <input id="contact-subject" v-model="contact.subject" type="text" required placeholder="Ex. Question sur le TD 3" />
        </div>
        <div class="form-row">
          <label for="contact-message">Message *</label>
          <textarea id="contact-message" v-model="contact.message" rows="4" required placeholder="Décrivez votre demande"></textarea>
        </div>
        <button class="modern-btn" type="submit" :disabled="!canSend">
          <span v-if="!sending">Envoyer</span>
          <span v-else>Envoi…</span>
        </button>
        <div class="form-status">
          <transition name="fade">
            <span v-if="status" :class="['status', statusKind]">{{ status }}</span>
          </transition>
        </div>
        <p class="footer-note">Le premier envoi déclenchera un email de confirmation FormSubmit.<br>Si rien ne se passe, vérifiez vos spams ou contactez-nous directement.</p>
      </form>
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

.contact h2 {
  font-size: 0.9rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 0.6rem;
  color: var(--text-primary);
}

.contact h2 {
  font-size: 0.9rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 0.6rem;
  color: var(--text-primary);
}


.modern-contact form {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  background: linear-gradient(120deg, rgba(30,41,59,0.92) 60%, rgba(244,114,182,0.08) 100%);
  border-radius: 18px;
  padding: 1.1rem 1rem 1.2rem 1rem;
  box-shadow: 0 8px 32px rgba(244,114,182,0.08);
}
.modern-contact .form-row {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.modern-contact label {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.1rem;
}
.modern-contact input,
.modern-contact textarea {
  background: rgba(15, 23, 42, 0.98);
  border: 1.5px solid rgba(244,114,182,0.18);
  border-radius: 10px;
  padding: 0.55rem 0.7rem;
  color: var(--text-primary);
  font-size: 1rem;
  transition: border 0.18s, box-shadow 0.18s;
  font-family: inherit;
}
.modern-contact input:focus,
.modern-contact textarea:focus {
  outline: none;
  border-color: #f472b6;
  box-shadow: 0 0 0 2px #f472b633;
}
.modern-contact textarea {
  resize: vertical;
  min-height: 90px;
}
.modern-btn {
  border: none;
  border-radius: 999px;
  padding: 0.7rem 1.2rem;
  font-weight: 800;
  font-size: 1rem;
  color: #fff;
  background: linear-gradient(90deg, #f472b6 0%, #6366f1 100%);
  cursor: pointer;
  box-shadow: 0 4px 18px rgba(244,114,182,0.13);
  transition: background 0.18s, transform 0.18s, box-shadow 0.18s;
}
.modern-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}
.modern-btn:not(:disabled):hover {
  background: linear-gradient(90deg, #6366f1 0%, #f472b6 100%);
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 8px 32px rgba(244,114,182,0.18);
}
.form-status {
  min-height: 1.2em;
  margin-top: 0.2em;
}
.status.success {
  color: #bbf7d0;
}
.status.error {
  color: #fca5a5;
}
.footer-note {
  margin-top: 0.7rem;
  font-size: 0.8rem;
  color: var(--text-secondary);
  opacity: 0.8;
  text-align: center;
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
