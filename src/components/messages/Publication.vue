<template>
  <div id="post">
    <div id="message">
      {{ message.content }}
    </div>
    <!--div id="footer">
    </div-->
  </div>
</template>

<script>
import safebook from '@/lib/safebook'

export default {
  name: 'Publication',
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
#message {
  margin: 0;
  text-align: left;
}
</style>
