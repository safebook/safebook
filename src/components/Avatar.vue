<template>
  <div id="avatar">
    <div id="name">
      <NameInput v-if="myself" :old-name="name" />
      <h3 v-if="!myself">{{ name }}</h3>
    </div>
    <div v-if="showImg == 'avatar'" id="avatar">
      <img :src="avatarUrl" />
    </div>
    <AddressQR v-if="showImg == 'qr'" :address="address" />
    <div id="address">
      <AddressSquared v-if="showImg == 'address'" :address="address" />
    </div>
    <div id="qr">
      <a @click="showAvatar()" v-bind:class="{ selected: showImg == 'avatar' }">Avatar</a>
      - 
      <a @click="showQR()" v-bind:class="{ selected: showImg == 'qr' }">QRCode</a>
      -
      <a @click="showAddress()" v-bind:class="{ selected: showImg == 'address' }">Address</a>
    </div>
    <div>
      <button id="edit" class="button">Modifier</button>
    </div>
  </div>
</template>

<script>
import AddressSquared from "./AddressSquared"
import AddressQR from "./AddressQR"
import NameInput from "./NameInput"

export default {
  name: 'Signup',
  components: {
    AddressSquared, AddressQR,
    NameInput
  },
  props: ['address'],
  data() {
    return {
      name: 'Stitch',
      avatarUrl: require("@/assets/stitch.jpg"),
      showImg: 'avatar',
      myself: false
    }
  },
  computed: {
    myAddress() {
      return this.$store.state.account.address
    },
    posts() {
      return this.$store.state.posts
    }
  },
  methods: {
    showQR() { this.showImg = 'qr' },
    showAddress() { this.showImg = 'address' },
    showAvatar() { this.showImg = 'avatar' }
  }
}
</script>

<style scoped>
#user {
  width: 100%;
  min-height: 300px;
  display: table;
}
#qrcode {
  display: inline-block;
  padding: 0;
  margin: 0;
}
 #title {
  display: inline-block;
  font-weight: bold;
  width: 20%;
 }
 #address {
  display: inline-block;
  color: grey;
  width: 60%;
 }
 #avatar {
  height: 138px;
 }
 #signin {
  display: inline-block;
  width: 20%;
 }
 #no-posts {
  margin: 30px 30px 0 30px;
 }
 #send {
  text-align: right;
 }
 #send button {
  background-color: green;
  color: white;
 }
 #name input {
  margin-top: 15px;
  text-align: center;
  margin-bottom: 5px;
 }
 #name h3 {
  margin-bottom: 0px;
  padding-bottom: 0px;
 }
 #address div {
  margin-bottom: 45px;
  margin-right: 40px;
 }
 #qr {
  margin-top: -25px;
  font-size: 0.85em;
 }
 .selected {
  color: black;
  text-decoration: none;
  cursor: auto;
  font-weight: bold;
 }
 .scope-title {
  display: inline-block;
  text-align: center;
  width: 50%;
 }
 #edit {
  margin-top: 20px;
 }
</style>

