<template>
  <div id="user" class="table">
    <div id="side">
      <AddressQR :address="address" />
      <AddressSquared :address="address" />
    </div>
    <div id="main">
      <PostInput />
      <div class="post" v-for="post in posts" :key="post">
        <div class="author">
          King Kong
        </div>
        <div class="message">
          {{ post }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const safebook = require('safebook')
import AddressSquared from "./AddressSquared"
import AddressQR from "./AddressQR"
import PostInput from "./PostInput"

export default {
  name: 'Signup',
  components: {
    AddressSquared,
    AddressQR,
    PostInput
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
      account: account,
      posts: [
        "Viva la vida",
        "Je raconte des choses",
        "Et des machins"
      ]
    }
  },
  methods: {
    send() {
      let ciphertext = safebook.encrypt(this.account, this.message, this.address)
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
 .post {
  border: 2px solid green;
  border-radius: 15px;
  margin: 10px 30px 0 30px;
 }
 .author {
  text-align: left;
  margin: 10px;
  font-weight: bold;
 }
 .message {
  margin-bottom: 10px;
 }
 #send {
  text-align: right;
 }
 #send button {
  background-color: green;
  color: white;
 }
</style>
