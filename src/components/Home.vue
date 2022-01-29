<template>
  <div id="home" class="table">
    <div id="side">
      <img alt="Vue logo" src="../assets/logo.png">
      <h3>Safebook</h3>
      <p>
        a cryptographic social network
      </p>
    </div>
    <div id="main">
      <div>
        <input id="password" type="password"
          v-model="password" placeholder="Votre mot de passe ou phrase mnémotechnique" />
      </div>
      <div>
        <button class="button" @click="signin()">Se connecter</button>
      </div>
      <p>
        --- ou ---
      </p>
      <div>
      <button class="button" id="signup" @click="createAccount()">
        Créer un compte
      </button>
      </div>
      <div>
      <button class="button" id="signup">
        Documentation
      </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      password: ''
    }
  },
  methods: {
    createAccount() {
      this.$store.commit('createAccount');
      this.$router.push('/signup')
    },
    signin() {
      this.$store.commit({
        type: 'loadAccount',
        mnemonic: this.password.trim()
      })
      this.$router.push('/signup')
    }
  }
}
</script>

<style scoped>
#home {
  width: 100%;
}
h3 {
  margin: 20px 0 0;
}
#signup {
  color: white;
  background-color: green;
}
#password {
  width: 350px;
  text-align: center;
  margin-bottom: 20px;
}
#main {
  padding-top: 100px;
  padding-bottom: 50px;
}
</style>

