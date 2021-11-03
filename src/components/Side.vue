<script>
import Avatar from "@/components/Avatar"
export default {
  components: { Avatar },
  props: ["address", "owned"]
}
</script>

<template>
  <div id="side">
    <Avatar :address="address" />
    <div v-if="owned">
      <button id="account" class="button" @click="$router.push(`/u/${address}/info`)">Informations</button>
    </div>
    <div v-if="!owned">
      <button id="privateMessage" class="button" @click="goToMessaging()">Envoyer un message privé</button>
      <button id="addContact" class="button" @click="addContact()">Ajouter en contact</button>
    </div>
    <!--
    <h4 class="follow-title">{{following.length}} following</h4>
    <Contact v-for='(address, idx) in following' :key="idx" :address='address' />
    <h4 class="follow-title">{{followers.length}} followers</h4>
    <Contact v-for='(address, idx) in followers' :key="idx" :address='address' />
    -->
  </div>
</template>
