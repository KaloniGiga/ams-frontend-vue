// import useAuthStore from '@/stores/auth'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import UserView from '@/views/UserView.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import ArtistView from '@/views/ArtistView.vue'
import SongView from '@/views/SongView.vue'

// const authGuard = (to, next) => {
//   const isLoggedIn = useAuthStore().isLoggedIn
//   const requiresAuth = to.meta.requiresAuth
//   if (isLoggedIn && !requiresAuth) return next({ path: '/dashboard/user' })
//   if (!isLoggedIn && requiresAuth) return next({ path: '/auth/login' })
//   return next()
// }

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'auth-layout',
      component: AuthLayout,
      children: [
        {
          path: 'login',
          name: 'login',
          component: LoginView
        },
        {
          path: 'signup',
          name: 'signup',
          component: RegisterView
        }
      ],
      meta: { requiresAuth: false }
    },
    {
      path: '/dashboard',
      name: 'main-layout',
      component: MainLayout,
      children: [
        {
          path: 'user',
          name: 'user',
          component: UserView
        },
        {
          path: 'artist',
          name: 'artist',
          component: ArtistView
        },
        {
          path: 'song/:artistId',
          name: 'song',
          component: SongView
        }
      ],
      meta: { requiresAuth: true }
    }
  ]
})

// router.beforeEach((to, _from, next) => {
//   console.log(to, _from, next)
//   authGuard(to, next)
// })

export default router
