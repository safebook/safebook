<template>
  <div>
    <MessageInput :address="address" />
    <div id="no-messages" v-if="messages.length == 0">
      Pas de messages privés pour l'instant.
    </div>
    <Message v-for="(message, index) in messages" :message="message" :key="index" />
  </div>
</template>

<script>
import MessageInput from "./MessageInput"
import Message from "./Message"

export default {
  name: 'Messages',
  components: { MessageInput, Message },
  props: ['messages', 'address'],
}
</script>

<style>
</style>
