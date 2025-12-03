import { createRouter, createWebHistory } from 'vue-router'

import AuthLayout from '@/components/layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AuthLayout,
    },
  ],
})

export default router
