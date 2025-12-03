import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD

import AuthLayout from '@/components/layouts/MainLayout.vue'
=======
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import AuthLayout from '@/components/Layouts/AuthLayout.vue'
>>>>>>> 0de59df8aa405ce26385dcdbbda5fc3f8d528b9a

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AuthLayout,
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          path:'login',
          name: 'login',
          component: LoginView,
        },
        {
          path:'register',
          name: 'register',
          component: () => import('@/views/auth/RegisterView.vue'),
        },
      ]
    },
  ],
})

export default router
