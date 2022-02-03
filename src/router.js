import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import Signup from '@/pages/Signup.vue'
import Signin from '@/pages/Signin.vue'
import User from '@/pages/User.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/signup',
      name: 'signup',
      component: Signup
    }, {
      path: '/signin',
      name: 'signin',
      component: Signin
    }, {
      path: '/u/:address',
      name: 'user',
      component: User
    },
  ]
})
