<template>
  <!-- TODO rename to user -->
  <div id="side">
    <Avatar :address="address" />
    <div v-if="owned">
      <button id="account" class="button" @click="$router.push(`/signup`)">Mon compte</button>
    </div>
    <div v-if="!owned">
      <button id="privateMessage" class="button" @click="goToMessaging()">Envoyer un message (ou Conversation)</button>
      <button id="privateMessage" class="button" @click="">Ecrire une lettre</button>
      <button id="addContact" class="button" @click="addContact()">Suivre (Signature)</button>
    </div>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar.vue'
export default {
  components: { Avatar },
  props: ['address', 'owned']
}
</script>
