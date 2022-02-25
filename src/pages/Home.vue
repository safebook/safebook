<template>
  <div id="home" class="table">
    <div id="side">
      <img alt="Vue logo" src="../assets/logo.png">
      <h3 class="font-extrabold	text-3xl text-green-700">Safebook</h3>
      <p>
        réseau social cryptographique
      </p>
      <div id="doc">
        <button class="button" @click="$router.push('/what')">
          Documentation utilisateur
        </button>
        <button class="button" @click="$router.push('/how')">
          Documentation technique
        </button>
        <button class="button" @click="$router.push('/about')">
          A propos
        </button>
      </div>
    </div>
    <div id="main">
      <div>
        <button class="button" id="signup" @click="createAccount()">
          Créer un compte
        </button>
      </div>
      <p>
        --- ou ---
      </p>
      <div>
        <h4>Entrez votre mot de passe, <br /> ou votre phrase mnémotechnique</h4>
        <input id="password" type="password"
          v-model="password" placeholder="Mot de passe" />
      </div>
      <div>
        <button id="signin" class="button"
          @click="signin()" v-bind:class="{ active: password.length > 0 }">
          Se connecter
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
      this.$router.push('/what')
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
#signup {
  font-size: 1.05em;
  padding: 10px;
  margin: 20px;
}
#password {
  width: 350px;
  height: 25px;
  text-align: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border-color: green;
  outline: none;
}
#main {
  padding-top: 50px;
  padding-bottom: 50px;
}
#doc {
  margin: 15px;
}
#doc button, #signin {
  margin: 5px;
  border: 1px solid green;
}
</style>

