import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from '../layout/index.vue'
import LoginView from '../views/LoginView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/login' },
    {
      path: '/',
      name: 'layout',
      component: LayoutView,
      children: []
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

export default router
