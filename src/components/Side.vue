<template lang="pug">
  // TODO rename to user
  #side
    Avatar(:address="address")
    div(v-if="owned")
      button#account.button(@click="$router.push(`/signup`)") Mon compte
    div(v-if="!owned")
      button(id="privateMessage" class="button" @click="goToMessaging()") Envoyer un message (ou Conversation)
      button(id="privateMessage" class="button" @click="") Ecrire une lettre
      button(id="addContact" class="button" @click="addContact()") Suivre (Signature)
</template>

<script>
import Avatar from "@/components/Avatar"
export default {
  components: { Avatar },
  props: ["address", "owned"]
}
</script>
