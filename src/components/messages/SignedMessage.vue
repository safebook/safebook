<template>
  <div id="post">
    <div v-if="message.author != message.receiver" id="header">
      <div v-if="message.author != address" class="right">
        => <a @click="goToAuthor()">{{ author_name }}</a>
      </div>
      <div v-if="message.author == address" class="left">
        <a @click="goToReceiver()">{{ receiver_name }}</a> :
      </div>
    </div>
    <div id="message">
      {{ message.content }}
    </div>
  </div>
</template>

<script>
import safebook from '@/lib/safebook'

export default {
  name: 'Message',
  props: ['message'],
  computed: {
    author_name () {
      return safebook.name(this.message.author).join(' ')
    },
    receiver_name () {
      return safebook.name(this.message.receiver).join(' ')
    },
    address () {
      return this.$route.params.address
    }
  },
  methods: {
    goToAuthor () {
      this.$router.push({
        name: 'user',
        params: { address: this.message.author }
      })
    },
    goToReceiver () {
      this.$router.push({
        name: 'user',
        params: { address: this.message.receiver }
      })
    }
  }
}
</script>

<style scoped>
#post {
  border: 1px solid grey;
  margin: 10px 30px 10px 30px;
  text-align: right;
  padding: 8px;
}
#header {
  margin: 0;
}
#header .left {
  text-align: left;
}
#header .right {
  text-align: right;
}
#message {
  margin: 0;
}
</style>
