<template>
  <div class="flex flex-row">
    <div class="p-4 basis-1/4">
      <router-link to="/">
        <h3 class="font-extrabold	text-3xl text-green-700 tracking-tight">Safebook</h3>
      </router-link>
    </div>
    <div class="p-4 basis-3/4">
      <div v-if="account">
        <a @click="goToAccount()">Ma page</a>
        <div class="space"></div>
        <a @click="goToMessaging()">Messagerie</a>
        <div class="space"></div>
        <a @click="logout()">Déconnexion</a>
      </div>
      <div v-else>
        <div class="btn btn-outline btn-accent m-2" @click="signin()">
          Connexion
        </div>
        <div class="btn btn-accent m-2">
          Inscription
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    logout() {
      this.$store.commit('logout');
      this.$router.push('/');
    },
    goToHome() { this.$router.push(`/`); },
    goToAccount() { this.$router.push(`/u/${this.$store.state.account.address}`); },
    goToMessaging() { this.$router.push(`/m`); },
    signin() { this.$router.push(`/signin`); }
  },
  computed: {
    account() {
      return this.$store.state.account
    }
  }
}
</script>
