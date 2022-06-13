<template>
  <div>
    <h3 class="text-center py-5">Profile</h3>
    <p>Nom</p>
    <p>Prenom</p>
    <p>Date de naissance</p>
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
