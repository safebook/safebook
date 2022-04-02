<template lang="pug">
  .flex
    <router-link to="/">
      h3.font-extrabold.text-3xl.text-green-700.tracking-tight Safebook
    </router-link>

    p.mx-auto
      <div class="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
        <form action="/search" class="flex flex-wrap justify-between md:flex-row">
          <input type="search" name="query" placeholder="Search Components" required="required" class="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0">
            <button type="submit" class="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
              </path>
            </svg>
            </button>
          </form>
        </div>
    
    <div class="flex flex-row">
      <div class="p-4 basis-1/4">
        <router-link to="/">
          <h3 class="font-extrabold	text-3xl text-green-700 tracking-tight">Safebook</h3>
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
</template>

<script>
export default {
  name: "Header",
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push("/");
    },
    goToHome() {
      this.$router.push(`/`);
    },
    goToAccount() {
      this.$router.push(`/u/${this.$store.state.account.address}`);
    },
    goToMessaging() {
      this.$router.push(`/m`);
    },
    signin() {
      this.$router.push(`/signin`);
    },
  },
  computed: {
    account() {
      return this.$store.state.account;
    },
  },
};
</script>
