import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import maisonChrysalideView from '../views/maisonChrysalideView.vue'
import philipsHueView from '../views/philipsHueView.vue'

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
    },
    {
      path: '/philips-hue',
      name: 'philipsHueView',
      component: philipsHueView
    }
  ]
})

export default router
