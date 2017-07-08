import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import HomeContainer from '@/components/HomeContainer'
import Feed from '@/components/Feed'
import Profile from '@/components/Profile'
import firebase from 'firebase'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    // { path: '/', name: 'feed', component: Feed, meta: { requiresAuth: true } },
    {
      path: '/',
      component: HomeContainer,
      children: [
        {
          path: '',
          name: 'feed',
          component: Feed
        },
        {
          path: '/profile',
          name: 'profile',
          component: Profile
        }
      ],
      meta: { requiresAuth: true }
    },
    { path: '/signin', name: 'signIn', component: SignIn }
    // { path: '/profile', name: 'profile', component: Profile, meta: { requiresAuth: true } }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((x) => x.meta.requiresAuth)) {
    const cancel = firebase.auth().onAuthStateChanged((user) => {
      cancel()
      if (user) {
        next()
        return
      }
      next({ name: 'signIn', query: { redirect: to.fullPath } })
    })
    return
  }
  next()
})

export default router
