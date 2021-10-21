<template>
  <div id="user">
    <div id="side">
      <div id="qrcode">
        <vue-qr :text="address" :size="100"></vue-qr>
        <AddressSquared :address="address" />
      </div>
    </div>
    <div id="main">
      <p>Bonjour, je suis qqn</p>
      <p>Je raconte des choses</p>
      <p>Et des machins</p>
      <div id="address">{{ myAddress }}</div>
      <p>
        <span id="send">Envoyer vers {{ address }}</span>
        <textarea v-model="message" placeholder="Votre message"></textarea>
        <button @click="send()">Envoyer</button>
      </p>
    </div>
  </div>
</template>

<script>
const safebook = require('safebook')
import AddressSquared from "./AddressSquared"
import VueQr from 'vue-qr/src/packages/vue-qr.vue'

export default {
  name: 'Signup',
  components: {
    AddressSquared,
    VueQr
  },
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
#user {
  min-height: 300px;
}
#side {
 display: table-cell;
 height: 100%;
 width: 33%;
 border-right: 2px solid green;
}
#main {
 display: table-cell;
 height: 100%;
 width: 66%;
}

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
