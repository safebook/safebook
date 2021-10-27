<template>
  <div id="user" class="table">
    <div id="side">
      <div id="name">
        <input v-if="myself" type="text" placeholder="Votre nom" v-model="name" />
        <h3 v-if="!myself">{{ name }}</h3>
      </div>
      <div v-if="showImg == 'avatar'" id="avatar">
        <img :src="avatarUrl" />
      </div>
      <AddressQR v-if="showImg == 'qr'" :address="address" />
      <div id="address">
        <AddressSquared v-if="showImg == 'address'" :address="address" />
      </div>
      <div id="qr">
        <a @click="showAvatar()" v-bind:class="{ selected: showImg == 'avatar' }">Avatar</a>
        - 
        <a @click="showQR()" v-bind:class="{ selected: showImg == 'qr' }">QRCode</a>
        -
        <a @click="showAddress()" v-bind:class="{ selected: showImg == 'address' }">Address</a>
      </div>
    </div>
    <div id="main">
      <div id="scope">
        <h4 class="scope-title">
          Publications
        </h4>
        <h4 class="scope-title">
          Messages privés
        </h4>
      </div>
      <PostInput />
      <div class="post" v-for="post in posts" :key="post">
        <div class="author">
          King Kong
        </div>
        <div class="message">
          {{ post.content }}
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
import config from "../config"

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
      name: 'Stitch',
      avatarUrl: require("@/assets/stitch.jpg"),
      showImg: 'avatar',
      myself: this.$route.params.address == account.address,
      posts: []
    }
  },
  methods: {
    send() {
      let ciphertext = safebook.encrypt(this.account, this.message, this.address)
      console.log(ciphertext)
    },
    logout() {
      this.$router.push('/')
    },
    showQR() { this.showImg = 'qr' },
    showAddress() { this.showImg = 'address' },
    showAvatar() { this.showImg = 'avatar' }
  },
  computed: {
    myAddress() {
      return this.$store.state.account.address
    }
  },
  created() {
    const that = this
    console.log("Hello")
    console.log(config)
    console.log(`${config.url}/${this.address}/posts`)
    fetch(`${config.url}/${this.address}/posts`)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        that.posts = data
      })
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
  cursor: none;
  font-weight: bold;
 }
 .scope-title {
  display: inline-block;
  text-align: center;
  width: 50%;
 }
</style>
