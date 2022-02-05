<template>
  <div id="user" class="table">
    <div id="side">
      <Avatar :address="address" />
      <button id="privateMessage" class="button" v-if="!myself" @click="goToMessaging()">Envoyer un message privé</button>
      <button id="account" class="button" v-if="myself" @click="goToAccount()">Mon compte</button>
    </div>
    <div id="main">
      <SignedMessageInput :address="address" />
      <div id="scope">
        <h4><a v-bind:class="{ active: scope == 'inbox' }" @click="scope = 'inbox'">
            Inbox ({{ inbox.length }})
        </a></h4>
        <h4><a v-bind:class="{ active: scope == 'outbox' }" @click="scope = 'outbox'">
            Outbox ({{ outbox.length }})
        </a></h4>
      </div>
      <div v-if="scope == 'inbox'">
        <SignedMessage v-for="(message, index) in inbox" :message="message" :key="index" />
      </div>
      <div v-if="scope == 'outbox'">
        <SignedMessage v-for="(message, index) in outbox" :message="message" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
const safebook = require('safebook')
import Avatar from "@/components/Avatar"
import SignedMessageInput   from "@/messages/SignedMessageInput"
import SignedMessage  from "@/messages/SignedMessage"

export default {
  name: 'Signup',
  components: { Avatar, SignedMessageInput, SignedMessage },
  data() {
    let account = this.$store.state.account
    if (!account)
    {
      this.$store.commit('restoreAccount')
      account = this.$store.state.account
    }
    return {
      message: '',
      account: account,
      scope: 'inbox',
    }
  },
  computed: {
    address() {
      return this.$route.params.address
    },
    inbox() {
      return this.$store.state.inbox
    },
    outbox() {
      return this.$store.state.outbox
    },
    privateMessages() {
      return this.$store.state.privateMessages
    },
    myself() {
      return this.$route.params.address == this.$store.state.account.address
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
    goToMessaging() {
      this.$router.push(`/m/${this.address}`)
    },
    goToAccount() {
      this.$router.push(`/signup`)
    }
  },
  created() {
    this.$store.commit({
      type: 'loadInbox',
      address: this.address
    })
    this.$store.commit({
      type: 'loadOutbox',
      address: this.address
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
#account, #privateMessage {
  margin: 10px;
  margin-top: 40px;
  background-color: green;
  color: white;
}
</style>
