<template>
  <div id="header">
    <div class="col-25">
      <router-link to="/">
        <span id="logo">Safebook</span>
      </router-link>
    </div>
    <div class="col-50">
      <span id="address" v-if="account">{{ account.name.join(' ') }}</span>
    </div>
    <div class="col-25">
      <a @click="logout()">Se déconnecter</a>
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
#header {}
.col-50, .col-25 { display: inline-block; }
.col-50 { width: 50% }
.col-25 { width: 25% }
#logo {
  color: green;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}
</style>

