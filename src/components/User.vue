<template>
  <div>
    <div id="header">
      <div id="title">Safebook</div>
      <div id="address">{{ myAddress }}</div>
      <div id="signin"><a>changer</a></div>
    </div>
    <div id="signup">
      <p class="center">
        <span id="send">Envoyer vers {{ address }}</span>
      </p>
      <p>
        <textarea v-model="message" placeholder="Votre message"></textarea>
        <button @click="send()">Envoyer</button>
      </p>
    </div>
  </div>
</template>

<script>
const safebook = require('safebook')

export default {
  name: 'Signup',
  data() {
    let account = this.$store.state.account
    if (!account)
    {
      this.$store.commit('createAccount')
      account = this.$store.state.account
    }
    return {
      message: '',
      address: this.$route.params.address,
      account: account
    }
  },
  methods: {
    send() {
      let ciphertext = safebook.encrypt(this.$store.state.account.pubkey, this.message, this.address)
      console.log(ciphertext)
    }
  },
  computed: {
    myAddress() {
      return this.$store.state.account.address
    }
  }
}
</script>

<style scoped>
 #title {
  display: inline-block;
  font-weight: bold;
  width: 20%;
 }
 #address {
  display: inline-block;
  color: grey;
  width: 60%;
 }
 #signin {
  display: inline-block;
  width: 20%;
 }
</style>
