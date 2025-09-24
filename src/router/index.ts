import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('../pages/Home.vue')
const CoursTD = () => import('../pages/MPSI/Mathematiques/CoursTD.vue')

const SubjectPage = () => import('../pages/SubjectPage.vue')

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/MPSI/Mathematiques/Cours_TD', name: 'coursTD', component: CoursTD },
  { path: '/matiere/:slug', name: 'subject', component: SubjectPage },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() { return { top: 0 } },
})

export default router
