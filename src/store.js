import Vue from 'vue'
import Vuex from 'vuex'
import safebook from 'safebook'
import config from './config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account: null
  },
  mutations: {
    createAccount(state) {
      state.account = safebook.generate_account()
    },
    createVanityAccount(state) {
      state.account = safebook.create()
    },
    loadAccount(state, payload) {
      state.account = safebook.load(payload.mnemonic)
    },
    logout(state) {
      state.account = null
    },
    post(state, message) {
      console.log("post")
      const sig = safebook.sign(state.account, message)
      fetch(`${config.url}/${state.account.address}/posts`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          author: state.account.address,
          content: message,
          sig
        })
      }).then((res) => { console.log(res) })
      .catch((res) => { console.log(res) })
    }
  },
  /*
  actions: {

  },
  getters: {

  }*/
})
