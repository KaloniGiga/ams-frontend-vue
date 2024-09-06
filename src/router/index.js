/* eslint-disable no-unused-vars */
// import useAuthStore from '@/stores/auth'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import UserView from '@/views/UserView.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import ArtistView from '@/views/ArtistView.vue'
import SongView from '@/views/SongView.vue'
import { roleTypeObj } from '@/lib/constants'
import NotFound from '@/views/NotFound.vue'
import useAuthStore from '@/stores/auth'
import { storeToRefs } from 'pinia'

const authGuard = (to, next) => {
  const authStore = useAuthStore()
  const { isLoggedIn, user, bearerToken } = storeToRefs(authStore)

  console.log(isLoggedIn.value, user.value, bearerToken.value)

  const { authorize, requiresAuth } = to.meta

  if (!isLoggedIn && requiresAuth) return next({ path: '/auth/login' })
  if (isLoggedIn && !requiresAuth) return next({ path: '/dashboard/user' })
  if (authorize) {
    if (!isLoggedIn) {
      // not logged in so redirect to login page with the return url
      // return next({ path: '/auth/login', query: { returnUrl: to.path } });
    }

    // check if route is restricted by role
    if (authorize.length && !authorize.includes(user.role)) {
      // role not authorised so redirect to home page
      return next({ path: '/' })
    }
  }
    return next()
}


const authPathGuard = (to, from, next) => {
   const validAuthPath = ["/auth/login", "/auth/signup"]
   if (validAuthPath.includes(to.path)) {
    console.log('we are hrere')
    next()
   } else {
     next({ path: "/not-found" })
   }
}

const dashboardPathGuard = (to, from , next) => {
  const validDashboardPath = ["/dashboard/user", "/dashboard/artist", "/dashboard/song/:artistId"]
  if (validDashboardPath.includes(to.path)) {
    next()
  } else {
    next({ path: "/not-found"})
  }
}

const homePageGuard = (to, from, next) => {
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'auth-layout',
      component: AuthLayout,
      beforeEnter: authPathGuard,
      children: [
        {
          path: 'login',
          name: 'login',
          component: LoginView,
          meta: { requiresAuth: false }
        },
        {
          path: 'signup',
          name: 'signup',
          component: RegisterView,
          meta: { requiresAuth: false }
        }
      ],
    },
    {
      path: '/dashboard',
      name: 'main-layout',
      component: MainLayout,
      beforeEnter: dashboardPathGuard,
      children: [
        {
          path: 'user',
          name: 'user',
          component: UserView,
          meta: { authorize: [roleTypeObj.SuperAdmin] }
        },
        {
          path: 'artist',
          name: 'artist',
          component: ArtistView,
          meta: { authorize: [roleTypeObj.SuperAdmin, roleTypeObj.ArtistManager] }
        },
        {
          path: 'song/:artistId',
          name: 'song',
          component: SongView,
          meta: {
            authorize: [roleTypeObj.SuperAdmin, roleTypeObj.ArtistManager, roleTypeObj.Artist]
          }
        }
      ],
      meta: { requiresAuth: true }
    },
    {
       path: "/",
       name: "home",
       meta: {
        requiresAuth: false
       }
    },
    {
      path: "/not-found",
      name: "not-found",
      component: NotFound,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound
    }
  ]
})

router.beforeEach((to, _from, next) => {
  authGuard(to, next)
})

export default router
