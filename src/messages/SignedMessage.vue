<template>
  <div id="post">
    <div id="header">
      <a @click="goToAuthor()">{{ author_name().join(" ") }}</a>
    </div>
    <div id="message">
      {{ message.content }}
    </div>
  </div>
</template>

<script>
import safebook from "safebook"

export default {
  name: 'Message',
  props: ['message'],
  methods: {
    author_name() { return safebook.name(this.message.author) },
    goToAuthor() {
      this.$router.push({
        name: 'user',
        params: { address: this.message.author }
      })
    }
  }
}
</script>

<style scoped>
#post {
 border: 2px solid green;
 border-radius: 15px;
 margin: 10px 30px 10px 30px;
}
#header {
 text-align: center;
 margin: 10px;
}
#message {
 margin-bottom: 10px;
}
</style>

