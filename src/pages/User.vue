<template lang="pug">
  #user.table
    //Side(:address="address" :owned="myself")
    #side
      Avatar(:address="address")
      div(v-if="myself")
        button#account.button(@click="$router.push(`/signup`)") Mon compte
      div(v-if="!myself")
        button#privateMessage.button(@click="goToMessaging()") Envoyer un message privé
        button#privateMessage.button(@click="goToMessaging()") Envoyer un lettre
        button#addContact.button(@click="addContact()") Ajouter comme contact
    #main
      SignedMessageInput(:address="address")
      #scope
        hr
        h4: a(v-bind:class="{ active: scope == 'published' }" @click="scope = 'published'")
            | Publiés ({{ published.length }})
        h4: a(v-bind:class="{ active: scope == 'inbox' }" @click="scope = 'inbox'")
            | Reçus ({{ inbox.length }})
        h4: a(v-bind:class="{ active: scope == 'outbox' }" @click="scope = 'outbox'")
            | Envoyés ({{ outbox.length }})
        hr
      div(v-if="scope == 'published'")
        Publication(v-for="(message, index) in published" :message="message" :key="index")
      div(v-if="scope == 'inbox'")
        SignedMessage(v-for="(message, index) in inbox" :message="message" :key="index")
      div(v-if="scope == 'outbox'")
        SignedMessage(v-for="(message, index) in outbox" :message="message" :key="index")
</template>

<script>
import config from "@/config"

import Avatar from "@/components/Avatar"
import SignedMessageInput   from "@/messages/SignedMessageInput"
import SignedMessage  from "@/messages/SignedMessage"
import Publication  from "@/messages/Publication"
import Contact  from "@/components/Contact"
import Side  from "@/components/Side"

export default {
  name: 'Signup',
  components: {
    Avatar, SignedMessageInput,
    SignedMessage, Publication,
    Contact, Side
  },
  data() {
    return {
      scope:      'published',
      inbox:      [],
      outbox:     [],
      published:  [],
      followers:  [],
      following:  []
    }
  },
  computed: {
    account() {
      return this.$store.state.account
    },
    address() {
      return this.$route.params.address
    },
    myself() {
      if (this.account)
        return this.address == this.account.address
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
    addContact() {
      const follow = {
        author: this.account.address,
        receiver: this.address
      }
      fetch(`${config.url}/${this.address}/contacts`, {
        method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(follow)
      }).then((res) => { console.log(res) })
      .catch((res) => { console.log(res) })
      this.followers.push(follow.author);
    },
    fetch() {
      fetch(`${config.api}/u/${this.address}`)
        .then(response => response.json())
        .then((data) => {
          this.published = data.published
          this.inbox = data.inbox
          this.outbox = data.outbox
          this.followers = data.followers
          this.following = data.following
        })
    }
  },
  mounted() {
    this.scope = 'published'
    this.fetch()
  },
  watch: {
    '$route.params.address': function () {
      this.fetch()
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
.follow-title {
  margin: 10px;
}
</style>
