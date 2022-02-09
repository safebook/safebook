<template>
  <div id="user" class="table">
    <div id="side">
      <Avatar :address="address" />
      <div v-if="myself">
        <button id="account" class="button" @click="goToAccount()">Mon compte</button>
      </div>
      <div v-if="!myself">
        <button id="privateMessage" class="button" @click="goToMessaging()">Envoyer un message privé</button>
        <button id="addContact" class="button" @click="addContact()">Ajouter comme contact</button>
      </div>
      <h4>Follow</h4>
      <div id='contacts'>
        <div v-for='(contact, idx) in followings' :key="idx" class='contact'>
          <Contact :address="contact.receiver" />
        </div>
      </div>
      <h4>Followed by</h4>
      <div id='contacts'>
        <div v-for='(contact, idx) in followers' :key="idx" class='contact'>
          <Contact :address="contact.author" />
        </div>
      </div>
    </div>
    <div id="main">
      <SignedMessageInput :address="address" />
      <div id="scope">
        <hr />
        <h4><a v-bind:class="{ active: scope == 'published' }" @click="scope = 'published'">
            Publiés ({{ published.length }})
        </a></h4>
        <h4><a v-bind:class="{ active: scope == 'inbox' }" @click="scope = 'inbox'">
            Reçus ({{ inbox.length }})
        </a></h4>
        <h4><a v-bind:class="{ active: scope == 'outbox' }" @click="scope = 'outbox'">
            Envoyés ({{ outbox.length }})
        </a></h4>
        <hr />
      </div>
      <div v-if="scope == 'published'">
        <Publication v-for="(message, index) in published" :message="message" :key="index" />
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
import Publication  from "@/messages/Publication"
import Contact  from "@/components/Contact"

export default {
  name: 'Signup',
  components: {
    Avatar, SignedMessageInput,
    SignedMessage, Publication,
    Contact
  },
  data() {
    return {
      account:    this.$store.state.account,
      scope:      'published',
    }
  },
  computed: {
    published() {
      return this.$store.getters.published
    },
    inbox() {
      return this.$store.getters.inbox
    },
    outbox() {
      return this.$store.getters.outbox
    },
    followings() {
      return this.$store.getters.followings
    },
    followers() {
      return this.$store.getters.followers
    },
    address() {
      return this.$route.params.address
    },
    myself() {
      if (this.account)
        return this.$route.params.address == this.account.address
      return false
    },
  },
  methods: {
    logout() {
      this.$router.push('/')
    },
    goToMessaging() {
      this.$router.push(`/m/${this.address}`)
    },
    goToAccount() {
      this.$router.push(`/signup`)
    },
    loadMessages() {
      this.$store.commit({ type: 'selectUser', address: this.address })
      this.$store.commit({ type: 'loadInbox', address: this.address })
      this.$store.commit({ type: 'loadOutbox', address: this.address })
      this.$store.commit({ type: 'loadContacts', address: this.address })
      //setTimeout(() => {
      //  this.published =  this.$store.getters.published
      //  this.inbox =      this.$store.getters.inbox
      //  this.outbox =     this.$store.getters.outbox
      //  this.followings = this.$store.getters.followings
      //  this.followers =  this.$store.getters.followers
      //}, 1000)
      //this.$forceUpdate()
    },
    addContact() {
      this.$store.commit({ type: 'addContact', address: this.address })
    },
    nameOf(address) {
      return safebook.name(address).join(' ')
    },
  },
  created() {
    this.loadMessages()
  },
  beforeRouteUpdate(to, from, next) {
    this.scope = 'published'
    this.loadMessages()
    next()
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

#scope {
  font-size: 0.8em;
}
#scope h4 {
  display: inline-block;
  width: 33%;
  margin: 0;
}
</style>
