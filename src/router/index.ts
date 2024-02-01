import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductOverView from '@/components/icons/ProductOverView.vue'
import CheckOut from '@/views/CheckOut.vue'
import OrderSummaries from '@/views/OrderSummaries.vue'
import YourOrder from '@/views/YourOrder.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/checkOut',
      name: 'checkout',
      component: CheckOut
    },
    {
      path: '/order-summaries',
      name: 'orderSummaries',
      component: OrderSummaries
    },
    {
      path: '/your-order',
      name: 'yourOrder',
      component: YourOrder
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product-Overview',
      name: 'productOverview',
      component: ProductOverView
    },
    {
      path: '/list',
      name: 'list',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ListView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
