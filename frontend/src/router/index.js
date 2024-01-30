import { createRouter, createWebHistory } from 'vue-router'
function guest(to, from, next) {
  if (localStorage.getItem('token')) {
    next({ name: 'home' })
  } else {
    next()
  }
}

function guard(to, from, next) {
  if (localStorage.getItem('token')) {
    next()
  } else {
    next({ name: 'login' })
  }
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      beforeEnter: guard,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      beforeEnter: guest
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
      beforeEnter: guest
    }
  ]
})

export default router
