<template>
  <div id="signup">
    <h3>Bonjour, voici votre addresse :</h3>
    <div>
      <AddressSquared :address="account.address" />
      <div id="or">
        ou
      </div>
      <AddressQR :address="account.address" />
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
        <span class="word" v-for="word in account.mnemonic.split(' ')" :key='word'>
          <span>{{ word }} </span>
        </span>
      </p>
      <p class='center'>
        <button class="button" id="start" @click="start()">Commencer</button>
        <button class="button" id="regenerate" @click="regenerate()">Regenerer</button>
      </p>
    </div>
  </div>
</template>

<script>
//const safebook = require('safebook')
import AddressSquared from "./AddressSquared"
import AddressQR from "./AddressQR"

export default {
  name: 'Signup',
  components: {
    AddressQR,
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
    },
    splittedMnemonic() {
      let words = this.account.mnemonic.split(" ")
      return [
        words.slice(0,3),
        words.slice(3,6),
        words.slice(6,9),
        words.slice(9)
      ];
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
  vertical-align: top;
  margin-top: 50px;
  margin-right: 30px;
  width: 10%;
}
#qrcode {
  display: inline-block;
  width: 20%;
  margin-left: -30px;
  margin-bottom: -10px;
  height: 130px;
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
.word {
  display: inline-block;
  width: 33%;
}

#start {
  background-color: green;
}
</style>
