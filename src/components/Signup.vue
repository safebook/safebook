<template>
  <div id="signup">
    <h3>Bonjour, voici votre addresse...</h3>
    <div>
      <AddressSquared :address="account.address" />
      <div id="or">
        ou
      </div>
      <div id="qrcode">
        <vue-qr :text="account.address" :size="100"></vue-qr>
      </div>
    </div>
    <p v-if="generating" id="generating">
      <a @click="stop()" href="#">arreter maintenant</a>
    </p>
    <div v-if="!generating">
      <p>
        Gardez précieusement votre mot de passe
        <a href="#" @click="showPassword = !showPassword">({{showPassword ? "cacher" : "afficher" }})</a>
      </p>
      <p id="password" v-if="showPassword">
        {{ account.entropy }}
      </p>
      <p>
        Ou votre phrase mnémotechnique
        <a href="#" @click="showPassphrase = !showPassphrase">({{showPassphrase ? "cacher" : "afficher" }})</a>
      </p>
      <p id="passphrase" v-if="showPassphrase">
        <span v-for="word in account.mnemonic.split(' ')" :key='word'>
          <span>{{ word }} </span>
        </span>
      </p>
      <p class='center'>
        <button id="start" @click="start()">Commencer</button>
        <button id="regenerate" @click="regenerate()">Regenerer</button>
      </p>
      <p>[Experimental name] {{ account.name.join(" ") }}</p>
    </div>
  </div>
</template>

<script>
//const safebook = require('safebook')
import AddressSquared from "./AddressSquared"
import VueQr from 'vue-qr/src/packages/vue-qr.vue'

export default {
  name: 'Signup',
  components: {
    VueQr,
    AddressSquared
  },
  data() {
    return {
      showPassword: false,
      showPassphrase: false,
      generating: false,
    }
  },
  computed: {
    account() {
      return this.$store.state.account
    }
  },
  methods: {
    regenerate() {
      this.$store.commit('createAccount');
    },
    vanity() {
      this.$store.commit('createVanityAccount');
    },
    stop() {
      this.generating = false
    },
    start() {
      this.$router.push(`/u/${this.account.address}`)
    },
  },
  beforeCreate() {
    if (!this.$store.state.account)
      this.$router.push('/')
  },
  created() {
  }
}
</script>

<style scoped>
#signup {
  text-align: center;
}
#address {
  text-align: center;
  font-weight: bold;
  font-family: monospace;
  color: green;
  display: inline-block;
  width: 20%;
  margin-left: 2%;
}
#address p {
  margin-top: 5px;
  margin-bottom: 5px;
}
#or {
  display: inline-block;
  width: 5%;
}
#qrcode {
  display: inline-block;
  width: 20%;
  margin-left: -30px;
  margin-bottom: -10px;
  height: 100px;
  overflow: hidden;
}
#vanity {
  font-size: 80%;
  color: grey;
}
#hello {
  text-align: center;
}
#password {
  text-align: center;
  font-weight: bold;
  color: #ff5733;
}
#passphrase {
  text-align: center;
  font-weight: bold;
  color: #ff5733;
  width: 50%;
  margin-left: 25%;
}
#passphrase span {
  display: inline-block;
  width: 25%;
}
#start, #regenerate {
  padding: 6px 30px 6px 30px;
  margin: 0px 10px 0px 10px;
  border-width: 1px;
  border-style: solid;
  border-radius: 15px;
}
#start:hover, #regenerate:hover {
  box-shadow: inset 0 0 1px 1px #9eed1e, 0 0 1px 3px rgba(0, 0, 0, 0.15);
}
#start {
  background-color: green;
}
</style>
