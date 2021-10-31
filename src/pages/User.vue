<template>
  <div id="user" class="table">
    <div id="side">
      <Avatar :address="address" />
    </div>
    <div id="main">
      <MessageInput :address="address" />
      <div id="scope">
        <h4><a v-bind:class="{ active: scope == 'author' }" @click="scope = 'author'">
            Auteur ({{ authorMessages.length }})
        </a></h4>
        <h4><a v-bind:class="{ active: scope == 'public' }" @click="scope = 'public'">
            Publiques ({{ signedMessages.length }})
        </a></h4>
        <h4><a v-bind:class="{ active: scope == 'private' }" @click="scope = 'private'">
            Privés ({{ privateMessages.length }})
        </a></h4>
      </div>
      <div v-if="scope == 'author'">
        <SignedMessage v-for="(message, index) in authorMessages" :message="message" :key="index" />
      </div>
      <div v-if="scope == 'public'">
        <SignedMessage v-for="(message, index) in signedMessages" :message="message" :key="index" />
      </div>
      <div v-if="scope == 'private'">
        <PrivateMessage v-for="(message, index) in privateMessages" :message="message" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
const safebook = require('safebook')
import Avatar from "@/components/Avatar"
import MessageInput   from "@/messages/MessageInput"
import PrivateMessage from "@/messages/PrivateMessage"
import SignedMessage  from "@/messages/SignedMessage"

export default {
  name: 'Signup',
  components: { Avatar, MessageInput, PrivateMessage, SignedMessage },
  data() {
    let account = this.$store.state.account
    if (!account)
    {
      this.$store.commit('createAccount')
      account = this.$store.state.account
    }
    return {
      message: '',
      account: account,
      scope: 'author',
      myself: this.$route.params.address == account.address,
    }
  },
  computed: {
    address() {
      return this.$route.params.address
    },
    authorMessages() {
      return this.$store.state.signedMessages.filter(msg => msg.author == this.address)
    },
    signedMessages() {
      return this.$store.state.signedMessages
    },
    privateMessages() {
      return this.$store.state.privateMessages
    },
  },
  methods: {
    send() {
      let ciphertext = safebook.encrypt(this.account, this.message, this.address)
      console.log(ciphertext)
    },
    logout() {
      this.$router.push('/')
    },
    goToScope(s) { this.scope = s },
  },
  created() {
    this.$store.commit({
      type: 'loadSignedMessages',
      address: this.address
    });
    this.$store.commit({
      type: 'loadPrivateMessages',
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

#scope h4 {
  display: inline-block;
  width: 33%;
}
.active {
  text-decoration: none;
  color: black;
}
</style>
