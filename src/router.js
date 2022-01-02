import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
import Signup from './components/Signup.vue'

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
      path: '/hello_world',
      name: 'hello_world',
      component: HelloWorld
    }, {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
  ]
})
