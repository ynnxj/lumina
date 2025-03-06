import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import MenuPage from '../views/MenuPage.vue'
/*import OrderPage from '../views/OrderPage.vue'*/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: LandingPage,
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuPage,
    },
    /*
    {
      path: '/order',
      name: 'order',
      component: OrderPage,
    }
    */
  ],
})

export default router
