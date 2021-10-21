<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>Safebook</h3>
    <p>
      a cryptographic social network
    </p>
    <p>
      <a @click="createAccount()">Créer un compte</a>
    </p>
    <p>
      <router-link to="/signin">Se connecter</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    createAccount() {
      this.$store.commit('createAccount');
      this.$router.push('/signup')
    }
  }
}
</script>

<style scoped>
#home {
  margin-top: 60px;
}
h3 {
  margin: 40px 0 0;
}
</style>

