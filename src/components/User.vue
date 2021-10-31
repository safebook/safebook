<template>
  <div id="user" class="table">
    <div id="side">
      <Avatar :address="address" />
    </div>
    <div id="main">
      <div id="scope">
        <h4 class="scope-title">
          <a @click="goToScope(0)" v-bind:class="{ selected: scope == 0 }">
            Publications
          </a>
        </h4>
        <h4 class="scope-title">
          <a @click="goToScope(1)" v-bind:class="{ selected: scope == 1 }">
            Messages privés
          </a>
        </h4>
      </div>
      <Posts    v-if="scope == 0" :posts="posts" />
      <Messages v-if="scope == 1" :messages="messages" :address="address" />
    </div>
  </div>
</template>

<script>
const safebook = require('safebook')
import Avatar from "./Avatar"
import Messages from "@/messages/Messages"
import Posts from "@/posts/Posts"

export default {
  name: 'Signup',
  components: {
    Posts, Messages,
    Avatar
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
      scope: 0,
      myself: this.$route.params.address == account.address,
    }
  },
  computed: {
    myAddress() {
      return this.$store.state.account.address
    },
    posts() { return this.$store.state.posts },
    messages() { return this.$store.state.messages }
  },
  methods: {
    send() {
      let ciphertext = safebook.encrypt(this.account, this.message, this.address)
      console.log(ciphertext)
    },
    logout() {
      this.$router.push('/')
    },
    goToScope(s) { this.scope = s }
  },
  created() {
    this.$store.commit({
      type: 'loadPosts',
      address: this.address
    });
    this.$store.commit({
      type: 'loadMessages',
      address: this.address
    });
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
 #avatar {
  height: 138px;
 }
 #signin {
  display: inline-block;
  width: 20%;
 }
 #no-posts {
  margin: 30px 30px 0 30px;
 }
 #send {
  text-align: right;
 }
 #send button {
  background-color: green;
  color: white;
 }
 #name input {
  margin-top: 15px;
  text-align: center;
  margin-bottom: 5px;
 }
 #name h3 {
  margin-bottom: 0px;
  padding-bottom: 0px;
 }
 #address div {
  margin-bottom: 45px;
  margin-right: 40px;
 }
 #qr {
  margin-top: -25px;
  font-size: 0.85em;
 }
 .selected {
  color: black;
  text-decoration: none;
  cursor: auto;
  font-weight: bold;
 }
 .scope-title {
  display: inline-block;
  text-align: center;
  width: 50%;
 }
 #edit {
  margin-top: 20px;
 }
</style>
