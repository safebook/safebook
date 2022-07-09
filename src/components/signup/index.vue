<template>
  <div class="pt-10 text-center">
    <h2>
      Bonjour
      <span id="name">{{ account.name.join(" ") }}</span>
    </h2>
    <h3 class="py-5">Votre crypto-addresse :</h3>
    <div>
      <AddressSquared :address="account.address" />
      <div id="or">
        ou
      </div>
      <AddressQR :address="account.address" />
    </div>
    <p v-if="generating" id="generating">
      <a href="#" @click="stop()">arreter maintenant</a>
    </p>
    <div v-if="!generating">
      <p class="py-5">
        Gardez précieusement votre mot de passe
        <a href="#" @click="showPassword = !showPassword"
          >({{ showPassword ? "cacher" : "afficher" }})</a
        >
      </p>
      <p v-if="showPassword" id="password">
        {{ account.entropy }}
      </p>
      <p class="py-5">
        Ou votre phrase mnémotechnique
        <a href="#" @click="showPassphrase = !showPassphrase"
          >({{ showPassphrase ? "cacher" : "afficher" }})</a
        >
      </p>
      <p v-if="showPassphrase" id="passphrase">
        <span
          v-for="word in account.mnemonic.split(' ')"
          :key="word"
          class="word"
        >
          <span>{{ word }} </span>
        </span>
      </p>
      <p class="py-5">
        <button @click="regenerate()" class="px-5 mx-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Regenerer
        </button>
        <button @click="start()" class="px-5 mx-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Ma page
        </button>
      </p>
    </div>
  </div>
</template>

<script>
// const safebook = require('@/lib/safebook')
import AddressSquared from '@/components/AddressSquared.vue'
import AddressQR from '@/components/AddressQR.vue'

export default {
  name: 'Signup',
  components: {
    AddressQR,
    AddressSquared
  },
  data () {
    return {
      showPassword: false,
      showPassphrase: false,
      generating: false
    }
  },
  computed: {
    account () {
      return this.$store.state.account
    },
    splittedMnemonic () {
      const words = this.account.mnemonic.split(' ')
      return [
        words.slice(0, 3),
        words.slice(3, 6),
        words.slice(6, 9),
        words.slice(9)
      ]
    }
  },
  beforeCreate () {
    if (!this.$store.state.account) {
      this.$store.commit('createAccount')
    }
  },
  created () {},
  methods: {
    regenerate () {
      this.$store.commit('createAccount')
    },
    vanity () {
      this.$store.commit('createVanityAccount')
    },
    stop () {
      this.generating = false
    },
    start () {
      this.$router.push(`/u/${this.account.address}`)
    }
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
  color: white;
}
#name {
  color: green;
}
#regenerate {
  border: 2px solid grey;
}
</style>
