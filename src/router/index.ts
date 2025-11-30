import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import AuthLayout from '@/components/Layouts/AuthLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
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
