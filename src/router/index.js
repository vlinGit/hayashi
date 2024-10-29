import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/home/index.vue'),
    },
    {
      path: '/menu',
      name: 'Menu',
      component: () => import('@/views/menu/index.vue'),
    },
    {
      path: '/order',
      name: 'Order',
      component: () => import('@/views/order/index.vue'),
    }
  ],
})

export default router
