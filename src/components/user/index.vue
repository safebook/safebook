<template>
  <div>
    <div v-if="!address">Loading...</div>
    <div v-else class="table">
      <div class="table-cell w-1/3 align-top">
        <Avatar :address="address"></Avatar>
        <div v-if="myself">
          <button
            @click="$router.push(`/signup`)"
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4"
          >
            Mon compte
          </button>
        </div>
        <div v-if="!myself">
          <button class="button" id="privateMessage" @click="goToMessaging()">
            Envoyer un message privé
          </button>
          <button class="button" id="privateMessage" @click="goToMessaging()">
            Envoyer un lettre
          </button>
          <button class="button" id="addContact" @click="addContact()">
            Ajouter comme contact
          </button>
        </div>
      </div>
      <div class="table-cell w-2/3 align-top">
        <SignedMessageInput :address="address"></SignedMessageInput>
      </div>
    </div>
    <!-- div>
      <div id="scope">
        <hr />
        <h4><a v-bind:class="{ active: scope == 'published' }" @click="scope = 'published'">Publiés ({{ published.length }})</a></h4>
        <h4><a v-bind:class="{ active: scope == 'inbox' }" @click="scope = 'inbox'">Reçus ({{ inbox.length }})</a></h4>
        <h4><a v-bind:class="{ active: scope == 'outbox' }" @click="scope = 'outbox'">Envoyés ({{ outbox.length }})</a></h4>
        <hr />
      </div>
      <div v-if="scope == 'published'">
        <Publication v-for="(message, index) in published" :message="message" :key="index"></Publication>
      </div>
      <div v-if="scope == 'inbox'">
        <SignedMessage v-for="(message, index) in inbox" :message="message" :key="index"></SignedMessage>
      </div>
      <div v-if="scope == 'outbox'">
        <SignedMessage v-for="(message, index) in outbox" :message="message" :key="index"></SignedMessage>
      </div>
    </div-->
  </div>
</template>

<script>
import config from "@/config.js";

import Avatar from "@/components/Avatar.vue";
import SignedMessageInput from "@/components/messages/SignedMessageInput.vue";
// import SignedMessage from '@/components/messages/SignedMessage.vue'
// import Publication from '@/components/messages/Publication.vue'
// import Contact from '@/components/Contact.vue'
// import Side from '@/components/Side.vue'

export default {
  name: "Signup",
  components: {
    Avatar,
    SignedMessageInput,
    // SignedMessage,
    // Publication
    // Contact,
    // Side
  },
  data() {
    return {
      scope: "published",
      inbox: [],
      outbox: [],
      published: [],
      followers: [],
      following: [],
    };
  },
  computed: {
    account() {
      return this.$store.state.account;
    },
    address() {
      return this.$route.params.address;
    },
    myself() {
      if (this.account) {
        return this.address === this.account.address;
      }
      return false;
    },
  },
  watch: {
    "$route.params.address": function () {
      this.fetch();
    },
  },
  mounted() {
    this.scope = "published";
    this.fetch();
  },
  methods: {
    logout() {
      this.$router.push("/");
    },
    goToMessaging() {
      this.$router.push(`/m/${this.address}`);
    },
    goToAccount() {
      this.$router.push("/signup");
    },
    addContact() {
      const follow = {
        author: this.account.address,
        receiver: this.address,
      };
      fetch(`${config.url}/${this.address}/contacts`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(follow),
      })
        .then((res) => {
          console.log(res);
        })
        .catch((res) => {
          console.log(res);
        });
      this.followers.push(follow.author);
    },
    fetch() {
      fetch(`${config.api}/u/${this.address}`)
        .then((response) => response.json())
        .then((data) => {
          this.published = data.published;
          this.inbox = data.inbox;
          this.outbox = data.outbox;
          this.followers = data.followers;
          this.following = data.following;
        });
    },
  },
};
</script>

<style scoped></style>
