import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import maisonChrysalideView from '../views/maisonChrysalideView.vue'
import philipsHueView from '../views/philipsHueView.vue'
import oberfighterView from '../views/oberfighterView.vue'
import pingPassionView from '../views/pingPassionView.vue'
import ecommercePokemonView from '../views/ecommercePokemonVIew.vue'
import portfolioArthurView from '../views/portfolioArthurView.vue'
import monPortfolioView from '../views/monPortfolioView.vue'
import lyfeView from '../views/lyfeView.vue'

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
    },
    {
      path: '/oberfighter',
      name: 'oberfighterView',
      component: oberfighterView
    },
    {
      path: '/ping-passion',
      name: 'pingPassionView',
      component: pingPassionView
    },
    {
      path: '/ecommerce-pokemon',
      name: 'ecommercePokemonView',
      component: ecommercePokemonView
    },
    {
      path: '/portfolio-arthur',
      name: 'portfolioArthurView',
      component: portfolioArthurView
    },
    {
      path: '/mon-portfolio',
      name: 'monPortfolioView',
      component: monPortfolioView
    },
    {
      path: '/lyfe',
      name: 'lyfeView',
      component: lyfeView
    }
  ]
})

export default router
