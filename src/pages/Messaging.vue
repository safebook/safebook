<template>
  <div id="messaging">
    <div id="side">
      <div class="user top">
        <b>{{ get_name(address) }}</b>
      </div>
      <div class="user" v-for="user in users" :key="user">
        <a @click="goToUser(user)">
          {{ get_name(user) }}
        </a>
      </div>
    </div>
    <div id="main">
      <PrivateMessageInput :address="address" />
      <PrivateMessage v-for="(message, index) in pms" :message="message" :key="index" :sent="message.author == address" />
    </div>
  </div>
</template>

<script>
import safebook from "safebook"
import PrivateMessageInput from "@/messages/PrivateMessageInput"
import PrivateMessage from "@/messages/PrivateMessage"

export default {
  name: 'Messaging',
  components: { PrivateMessageInput, PrivateMessage },
  data: () => { return {} },
  methods: {
    get_name(address) {
      if (!address) return ""
      return safebook.name(address).join(" ")
    },
    goToUser(user) {
      this.$router.push(`/m/${user}`)
    }
  },
  computed: {
    address() {
      return this.$route.params.address
    },
    address_name() {
      return safebook.name(this.address).join(" ")
    },
    pms() {
      return this.$store.state.pms.filter(m =>
        (m.author == this.address || m.receiver == this.address)
      )
    },
    users() {
      const authored = this.$store.state.pms.map(m => m.author)
      const received = this.$store.state.pms.map(m => m.receiver)
      return [...new Set(authored.concat(received))]
        .filter(a => a != this.$store.state.account.address)
        .filter(a => a != this.address)
    }
  },
  mounted() {
    this.$nextTick(() =>
      this.$store.commit('loadPrivateMessages')
    )
    setInterval(() => {
      this.$store.commit('loadPrivateMessages')
    }, 3000)
  }
}
</script>

<style scoped>
#messaging {
  width: 100%;
  min-height: 300px;
  display: table;
}
.user {
  margin: 10px;
}
</style>

