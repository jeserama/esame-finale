import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import listAttrazione from '../views/listAttrazioni.vue'
import dettaglio from '../views/dettaglio.vue'
import acquista from '../views/acquista.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'lisAttrazione',
    component: listAttrazione
  },
  {
    path: '/dettaglio',
    name: 'dettaglio',
    component: dettaglio
  },
  {
    path: '/acquista',
    name: 'acquista',
    component: acquista
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
