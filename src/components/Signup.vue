<template>
  <div id="signup">
    <h3>Bonjour, voici votre addresse...</h3>
    <div>
      <div id="address">
        <p v-for="a in addressSquared" :key="a">{{ a }}</p>
      </div>
      <div id="or">
        ou
      </div>
      <div id="qrcode">
        <vue-qr :text="account.address" :size="100"></vue-qr>
      </div>
    </div>
    <p v-if="!generating" id="vanity">
      <a @click="vanity()">Vous pouvez aussi calculer une address qui commencer par "SB"</a>
    </p>
    <p v-if="generating" id="generating">
      <a @click="stop()" href="#">arreter maintenant</a>
    </p>
    <div v-if="!generating">
      <p class="center">
        Gardez précieusement votre phrase mnémotechnique
        <a href="#" @click="showPassphrase = !showPassphrase">({{showPassphrase ? "cacher" : "afficher" }})</a>
      </p>
      <p id="passphrase" v-if="showPassphrase">
        <span v-for="word in account.mnemonic.split(' ')" :key='word'>
          <span>{{ word }} </span>
        </span>
      </p>
      <p class="center">
        Ou votre entropie
        <a href="#" @click="showPassword = !showPassword">({{showPassword ? "cacher" : "afficher" }})</a>
      </p>
      <p id="password" v-if="showPassword">
        {{ account.entropy }}
      </p>
      <p class='center'>
        <button>Suivant</button>
        <button @click="regenerate()">Regenerer</button>
      </p>
    </div>
  </div>
</template>

<script>
//const safebook = require('safebook')
const QRious = require('qrious')
import VueQr from 'vue-qr/src/packages/vue-qr.vue'

export default {
  name: 'Signup',
  components: {VueQr},
  data() {
    return {
      showPassword: false,
      showPassphrase: false,
      generating: false
    }
  },
  computed: {
    account() {
      return this.$store.state.account
    },
    addressSquared() {
      if (!this.account)
        return []
      return [
        this.account.address.substr(0,17),
        this.account.address.substr(17,17),
        this.account.address.substr(34)
      ]
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
    qrCode() {
      var qr = new QRious({
        element: document.getElementById('qrcode'),
        value: 'https://github.com/neocotic/qrious'
      });
      qr;
    }
  },
  beforeCreate() {
    if (!this.$store.state.account)
      this.$router.push('/')
  },
  created() {
    this.qrCode()
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
</style>
