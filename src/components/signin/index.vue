<template lang="pug">
  #signin
    h3 Entrez votre mot de passe ou phrase mnémotechnique
    textarea(v-model="passphrase" placeholder="Votre mot de passe")
    p: button.button(@click="loadAccount()") Se connecter
    p: a(@click="signup()") Creer un compte
  </div>
</template>

<script>
// let safebook = require("@/safebook")

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
