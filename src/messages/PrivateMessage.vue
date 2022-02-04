<template>
  <div id="post">
    <div id="header">
      {{ author_name().join(" ") }} -> {{ receiver_name().join(" ") }}
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
    receiver_name() { return safebook.name(this.message.receiver) }
  }
}
</script>

<style>
#post {
 border: 2px solid green;
 border-radius: 15px;
 margin: 10px 30px 10px 30px;
}
#header {
 text-align: left;
 margin: 10px;
}
#message {
 margin-bottom: 10px;
}
</style>
