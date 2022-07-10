import { createRouter, createWebHistory } from "vue-router";

import Presentation from '@/components/presentation/index.vue'
import Intro from '@/components/presentation/Intro.vue'
import SecretBonding from '@/components/presentation/SecretBonding.vue'
import SecretRendezVous from '@/components/presentation/SecretRendezVous.vue'
import MetaDataInSignal from '@/components/presentation/MetaDataInSignal.vue'
import Safebook from '@/components/presentation/Safebook.vue'
import Names from '@/components/presentation/Names.vue'
import Drive from '@/components/presentation/Drive.vue'
import SimilarProjects from '@/components/presentation/SimilarProjects.vue'

import Home from '@/components/home/index.vue'
import Signup from '@/components/signup/index.vue'
import Signin from '@/components/signin/index.vue'
import User from '@/components/user/index.vue'
import Messaging from '@/components/messaging/index.vue'

import What from '@/components/what/index.vue'
import How from '@/components/how/index.vue'
import About from '@/components/about/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      path: '/safebook',
      component: Safebook
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
      path: '/drive',
      component: Drive
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
});

export default router;
