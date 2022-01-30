<template>
  <div>
    <div id="no-messages" v-if="messages.length == 0">
      Pas de messages privés pour l'instant.
    </div>
    <PM v-for="(message, index) in messages" :message="message" :key="index" />
    <PMInput :address="address" />
  </div>
</template>

<script>
import PMInput from "./PMInput"
import PM from "./PM"

export default {
  name: 'PMs',
  components: { PMInput, PM },
  props: ['messages', 'address'],
}
</script>

<style>
</style>
