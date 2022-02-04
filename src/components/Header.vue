<template>
  <div id="header">
    <div class="col-25" id="logo">
      <router-link to="/">
        Safebook
      </router-link>
    </div>
    <div class="col-50">
      <span id="address" v-if="account">{{ account.name.join(' ') }}</span>
    </div>
    <div class="col-25" id="logout">
      <router-link v-if="!account" to="signin">Connexion</router-link>
      <a v-if="account" @click="goToAccount()">Mon compte</a>
      <div class="space"></div>
      <a v-if="account" @click="logout()">Déconnexion</a>
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
    goToAccount() {
      this.$router.push(`/u/${this.$store.state.account.address}`);
    }
  },
  computed: {
    account() {
      return this.$store.state.account
    }
  }
}
</script>

<style>
#header {
  border-bottom: 1px solid green;
}
.col-50, .col-25 { display: inline-block; }
.col-50 { width: 50% }
.col-25 { width: 25% }
#logo a {
  color: green;
  font-weight: bold;
  font-size: 1.1em;
  cursor: pointer;
  text-decoration: none;
}
#logout a {
  text-decoration: none;
}
.space {
  display: inline-block;
  width: 10px;
}
</style>

