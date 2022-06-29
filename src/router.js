import Vue from 'vue'
import Router from 'vue-router'

import Presentation from '@/components/presentation'
import Intro from '@/components/presentation/Intro'
import SecretBonding from '@/components/presentation/SecretBonding'
import SecretRendezVous from '@/components/presentation/SecretRendezVous'
import MetaDataInSignal from '@/components/presentation/MetaDataInSignal'
import Names from '@/components/presentation/Names'
import SimilarProjects from '@/components/presentation/SimilarProjects'

import Home from '@/components/home'
import Signup from '@/components/signup'
import Signin from '@/components/signin'
import User from '@/components/user'
import Messaging from '@/components/messaging'

import What from '@/components/what'
import How from '@/components/how'
import About from '@/components/about'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // <!-- Presentation
    {
      path: '/',
      component: Presentation
    },
    {
      path: '/intro',
      component: Intro
    },
    {
      path: '/secret_bonding',
      component: SecretBonding
    },
    {
      path: '/secret_rendez_vous',
      component: SecretRendezVous
    },
    {
      path: '/metadata_in_signal',
      component: MetaDataInSignal
    },
    {
      path: '/names',
      component: Names
    },
    {
      path: '/similar_projects',
      component: SimilarProjects
    },
    // Presentation -->
    // <!-- App
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/u/:address',
      name: 'user',
      component: User
    },
    {
      path: '/m/:address',
      name: 'messaging',
      component: Messaging
    },
    {
      path: '/what',
      name: 'what',
      component: What
    },
    {
      path: '/how',
      name: 'how',
      component: How
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
    // App -->
  ]
})
