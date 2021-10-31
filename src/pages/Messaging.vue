<template>
  <div id="messaging">
    <div id="side">
      <div class="user">{{ get_name(address) }}</div>
      <div class="user" v-for="user in users" :key="user">{{ get_name(user) }}</div>
    </div>
    <div id="main">
      <PrivateMessageInput :address="address" />
      <PrivateMessage v-for="(message, index) in pms" :message="message" :key="index" />
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
  }
}
</script>

<style scoped>
#messaging {
  width: 100%;
  min-height: 300px;
  display: table;
}
</style>

