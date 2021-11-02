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
        <h4>Votre mot de passe ou phrase mnémotechnique :</h4>
        <input id="password" type="password"
          v-model="password" placeholder="Mot de passe" />
      </div>
      <div>
        <button id="signin" class="button"
          @click="signin()" v-bind:class="{ active: password.length > 0 }">
          Se connecter
        </button>
      </div>
      <p>
        --- ou ---
      </p>
      <div>
      <button class="button" id="signup" @click="createAccount()">
        Créer un compte
      </button>
      </div>
      <div id="doc">
        <button class="button" @click="goToUserDoc()">
          Documentation utilisateur
        </button>
        <button class="button" @click="goToTechnicalDoc()">
          Documentation technique
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
    },
    goToUserDoc() {
      this.$router.push('/doc')
    },
    goToTechnicalDoc() {
      window.location = 'https://github.com/mjal/safebook-doc/blob/master/technical.org';
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
#signin.active, #signup {
  color: white;
  background-color: green;
}
#password {
  width: 350px;
  height: 25px;
  text-align: center;
  margin-bottom: 20px;
  border-radius: 5px;
  border-color: green;
}
#main {
  padding-top: 50px;
  padding-bottom: 50px;
}
#doc {
  margin: 15px;
}
#doc button {
  margin: 5px;
}
</style>

