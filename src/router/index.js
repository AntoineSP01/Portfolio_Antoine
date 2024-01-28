import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import maisonChrysalideView from '../views/maisonChrysalideView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/maison-chrysalide',
      name: 'maisonChrysalideView',
      component: maisonChrysalideView
    }
  ]
})

export default router
