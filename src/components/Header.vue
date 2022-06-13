<template>
  <div class="flex">
    <router-link to="/">
      <h3 class="font-extrabold text-3xl tracking-tight mt-6">Safebook</h3>
    </router-link>

    <div class="mx-auto h-12 mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-1/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
      <form action="/search" class="flex flex-wrap justify-between md:flex-row">
        <input type="search" name="query" placeholder="Search users" required="required" class="flex-1 h-10 px-4 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0 border-gray-800" />
        <button type="submit" class="flex items-center justify-center w-full p-2 m-1
          text-white transition-colors duration-300 transform rounded-lg lg:w-10 lg:h-10 lg:p-0
          bg-black hover:bg-success/70 focus:outline-none focus:bg-success/70"> <!-- bg-success -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
            </path>
          </svg>
        </button>
      </form>
    </div>

    <div v-if="!$store.state.account" class="pt-9">
      <router-link to="signin">
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Signin
        </button>
      </router-link>
      <router-link to="signup">
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4">
          Signup
        </button>
      </router-link>
    </div>

    <div v-else class="pt-9" @click="displayUserMenu = !displayUserMenu">
      <a href="#">
        <span>Username</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>

      <div v-show="displayUserMenu" class="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1" id="dropdownId">
        <div class="py-1" role="none">
          <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Edit</a>
          <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Duplicate</a>
        </div>
        <div class="py-1" role="none">
          <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Archive</a>
          <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Move</a>
        </div>
        <div class="py-1" role="none">
          <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-4">Share</a>
          <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-5">Add to favorites</a>
        </div>
        <div class="py-1" role="none">
          <a @click="logout" href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-6">Logout</a>
        </div>
      </div>
    </div>
  </div>

  <!--
  <div class="flex flex-row">
    <div class="p-4 basis-1/4">
      <router-link to="/">
        <h3 class="font-extrabold text-3xl text-green-700 tracking-tight">Safebook</h3>
      </router-link>
    </div>
    <div class="p-4 basis-3/4 mx-auto">
      <div v-if="account">
        <a @click="goToAccount()">Ma page</a>
        <div class="space"></div>
        <a @click="goToMessaging()">Messagerie</a>
        <div class="space"></div>
        <a @click="logout()">Déconnexion</a>
      </div>
      <div v-else>
        <div class="btn btn-outline btn-accent m-2" @click="signin()">
          | Connexion
        </div>
        <div class="btn btn-accent m-2">
          | Inscription
        </div>
      </div>
    </div>
  </div>
  -->
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      displayUserMenu: false
    }
  },
  computed: {
    account () {
      return this.$store.state.account
    }
  },
  methods: {
    logout () {
      this.$store.commit('logout')
      this.$router.push('/')
    },
    goToHome () {
      this.$router.push('/')
    },
    goToAccount () {
      this.$router.push(`/u/${this.$store.state.account.address}`)
    },
    goToMessaging () {
      this.$router.push('/m')
    },
    signin () {
      this.$router.push('/signin')
    }
  }
}
</script>
