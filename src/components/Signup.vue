<template>
  <div id="signup">
    <h3 class="center">Bonjour, nous créons votre compte...</h3>
    <p class="center">
      Si vous ne souhaitez pas que votre addresse commence par sb, <br />
      vous pouvez <a @click="stop()" href="#">arreter ici</a>
    </p>
    <p class="center">
      <span id="address">{{ account.address }}</span>
    </p>
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
      <button v-if="generating" @click="regenerate()">Stop</button>
      <button v-if="!generating" @click="regenerate()">Regenerate</button>
    </p>
  </div>
</template>

<script>
//const safebook = require('safebook')

export default {
  name: 'Signup',
  data() {
    return {
      showPassword: true,
      showPassphrase: true,
      generating: true
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
    stop() {
      this.generating = false
    }
  },
  beforeCreate() {
    if (!this.$store.state.account)
      this.$router.push('/')
  }
}
</script>

<style scoped>
#signup {
  text-align: left;
}
#address {
  text-align: center;
  font-weight: bold;
  color: green;
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
}
#passphrase span {
  display: inline-block;
  width: 15%;
}
</style>

