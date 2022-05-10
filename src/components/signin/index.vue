<template>
  <div id="signin">
    <h3 class="text-center py-5">Entrez votre mot de passe ou phrase mnémotechnique</h3>
    <div class="flex justify-center">
      <textarea class="mx-auto" v-model="passphrase" placeholder="Votre mot de passe" />
    </div>
    <div class="text-center py-4">
      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" @click="loadAccount()">
        Se connecter
      </button>
    </div>
    <div class="text-center">
      <p><a @click="signup()">Creer un compte</a></p>
    </div>
  </div>
</template>

<script>
// let safebook = require("@/lib/safebook")

// let account = safebook.generate_account()

export default {
  name: 'Signup',
  data: () => {
    return {
      passphrase: ''
    }
  },
  methods: {
    loadAccount () {
      this.$store.commit({
        type: 'loadAccount',
        mnemonic: this.passphrase.trim()
      })
      this.$router.push('/signup')
    },
    signup () {
      this.$store.commit('createAccount')
      this.$router.push('/signup')
    }
  }
}
</script>

<style scoped>
textarea {
  text-align: center;
  width: 300px;
  height: 100px;
}
#passphrase {
  text-align: center;
  font-weight: bold;
  color: #ff5733;
}
#passphrase span {
  display: inline-block;
  width: 15%;
}
</style>
