import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const Home = () => import('../pages/Home.vue')
const CoursTD = () => import('../pages/MPSI/Mathematiques/CoursTD.vue')

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: Home },
  { path: '/MPSI/Mathematiques/Cours_TD', name: 'coursTD', component: CoursTD },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() { return { top: 0 } },
})

export default router
