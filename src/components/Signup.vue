<template>
  <div id="signup">
    <p id="hello">Bonjour <input type="text" placeholder="Alice"></p>
    <p>Voici votre addresse unique:</p>
    <p id="address"><b>{{ account.address }}</b></p>
    <p>
      Voici votre mot de passe :
    </p>
    <p id="password">
      8Xii3jPyGyAwX8fDWL8uE9p7ExXyCzTJgBTVvVtKjupDrAvmF2
    </p>
    <p>
      Ou vous pouvez utiliser cette phrase mnémotechnique
    </p>
    <p id="passphrase">
      <span v-for="word in account.mnemonic.split(' ')" :key='word'>
        <span>{{ word }}</span>
      </span>
    </p>
    <p>Stop</p>
    <p>
      <br />
      <br />
      <router-link to="/">Téléverser mon compte</router-link>
      <br />
      <router-link to="/">J'ai déjà un compte</router-link>
    </p>
  </div>
</template>

<script>
let safebook = require("safebook")

let account = safebook.generate_account()

export default {
  name: 'Signup',
  data: () => {
    return {
      account
    }
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

