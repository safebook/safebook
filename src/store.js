import Vue from 'vue'
import Vuex from 'vuex'
import safebook from 'safebook'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account: null
  },
  mutations: {
    createAccount: (state) => {
      state.account = safebook.generate_account()
    },
    createVanityAccount: (state) => {
      state.account = safebook.create()
    },
    loadAccount: (state, payload) => {
      state.account = safebook.load(payload.mnemonic)
    }
  },
  /*
  actions: {

  },
  getters: {

  }*/
})
