import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => Index,
    },
    {
      path: '/dashboard',
      component: () => import('@/layouts/DashboardLayout.vue'),
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('@/pages/Dashboard.vue'),
        }
      ]
    }
  ],
})

export default router
