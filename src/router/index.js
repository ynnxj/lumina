import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: LandingPage,
    },
 /*  {
      path: '/order',
      name: 'order',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
     component: () => import('../views/Orderpage.vue'),
   },
   {
    path: '/menu',
    name: 'menu',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   component: () => import('../views/MenuPage.vue'),
 },*/
  ],
})

export default router
