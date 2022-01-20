<template>
  <div id="user">
    <div id="side">
      <AddressQR :address="address" />
      <AddressSquared :address="address" />
    </div>
    <div id="main">
      <p id="send">Envoyer un message privée</p>
      <textarea v-model="message" placeholder="Votre message"></textarea>
      <button @click="send()">Envoyer</button>
      <p>Bonjour, je suis qqn</p>
      <p>Je raconte des choses</p>
      <p>Et des machins</p>
    </div>
  </div>
</template>

<script>
const safebook = require('safebook')
import AddressSquared from "./AddressSquared"
import AddressQR from "./AddressQR"

export default {
  name: 'Signup',
  components: {
    AddressSquared,
    AddressQR
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
    },
    logout() {
      this.$router.push('/')
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
  width: 100%;
  min-height: 300px;
  display: table;
}
#side {
 display: table-cell;
 height: 100%;
 width: 40%;
 border-right: 2px solid green;
}
#main {
 display: table-cell;
 height: 100%;
 width: 60%;
}

#qrcode {
  display: inline-block;
  padding: 0;
  margin: 0;
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
