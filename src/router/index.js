import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // component: HomeView
      // component: () => import('../views/Navbar1.vue')
      // component: () => import('../views/LandingPage2.vue')
      component: () => import('../views/LandingPage1.vue')
      // component: () => import('../views/Slider.vue')
      // component: () => import('../views/Carousel.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    }
  ]
})

export default router
