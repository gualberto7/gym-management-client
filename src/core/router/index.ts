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
      path: '/auth',
      component: () => import('@/core/layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/areas/auth/Login.vue'),
        },
        {
          path: 'create-account',
          name: 'create-account',
          component: () => import('@/areas/auth/Register.vue'),
        }
      ]
    },
    {
      path: '/dashboard',
      component: () => import('@/core/layouts/DashboardLayout.vue'),
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('@/pages/Dashboard.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/pages/Register.vue'),
        },
        {
          path: 'memberships',
          name: 'memberships',
          component: () => import('@/pages/Membership.vue'),
        }
      ]
    }
  ],
})

export default router
