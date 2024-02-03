import { createRouter, createWebHistory } from 'vue-router'
import CheckOut from '@/views/CheckOut.vue'
import OrderSummaries from '@/views/OrderSummaries.vue'
import YourOrder from '@/views/YourOrder.vue'
import AddProduct from '@/views/AddProduct.vue'
import ProductOverView from '@/views/ProductOverView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/add-product',
      name: 'addProduct',
      component: () => import('@/views/AddProduct.vue')
    },

    {
      path: '/checkOut',
      name: 'checkout',
      component: () => import('@/views/CheckOut.vue')
    },
    {
      path: '/order-summaries',
      name: 'orderSummaries',
      component: () => import('@/views/OrderSummaries.vue')
    },
    {
      path: '/your-order',
      name: 'yourOrder',
      component: () => import('@/views/YourOrder.vue')
    },

    {
      path: '/overview/:id',
      name: 'productOverview',
      component: () => import('@/views/ProductOverView.vue')
    },
    {
      path: '/list',
      name: 'list',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ListView.vue')
    }
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'not-found',
    //   component: () => import('../views/NotFoundView.vue')
    // }
  ]
})

export default router
