import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import SubjectPage from '../pages/SubjectPage.vue'
import SchedulePage from '../pages/SchedulePage.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/emploi-du-temps', name: 'schedule', component: SchedulePage },
  { path: '/matiere/:slug', name: 'subject', component: SubjectPage, props: true },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
