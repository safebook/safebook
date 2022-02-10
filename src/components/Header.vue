<template>
  <div id="header">
    <div class="col-20" id="logo">
      <router-link to="/">
        Safebook
      </router-link>
    </div>
    <div class="col-40">
    </div>
    <div class="col-40" id="logout">
      <div v-if="!account">
        <a @click="goToHome()">Accueil</a>
        <div class="space"></div> <div class="space"></div>
        <a @click="signin()">Connexion</a>
      </div>
      <div v-if="account">
        <a @click="goToAccount()">Ma page</a>
        <div class="space"></div>
        <a @click="goToMessaging()">Messagerie</a>
        <div class="space"></div>
        <a @click="logout()">Déconnexion</a>
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

<style scoped>
#header {
  border-bottom: 1px solid green;
  background-color: green;
}
.col-40, .col-20 {
  display: inline-block;
  text-align: center;
}
.col-40 { width: 40% }
.col-20 { width: 20% }
#logo a {
  color: white;
  font-weight: bold;
  font-size: 1.2em;
  cursor: pointer;
  text-decoration: none;
  padding: 10px;
}
a {
  color: white;
  text-decoration: none;
}
.space {
  display: inline-block;
  width: 10px;
}
.text-right {
  text-align: right;
}
</style>

