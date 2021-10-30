import Vue from 'vue'
import Vuex from 'vuex'
import safebook from 'safebook'
import config from './config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account: null,
    posts: [] // { type: "", content: "", sig: "" }
  },
  mutations: {
    createAccount(state) {
      state.account = safebook.generate_account()
    },
    loadAccount(state, payload) {
      state.account = safebook.load(payload.mnemonic)
    },
    logout(state) {
      state.account = null
    },
    loadPosts(state, payload) {
      state.posts = []
      fetch(`${config.url}/${payload.address}/posts`)
        .then(response => response.json())
        .then((data) => {
          state.posts = data
        })
    },
    loadMessages(state, payload) {
      state.messages = []
      fetch(`${config.url}/${payload.address}/inbox`)
        .then(response => response.json())
        .then((data) => {
          state.messages = state.messages.concat(data)
        })
      fetch(`${config.url}/${payload.address}/outbox`)
        .then(response => response.json())
        .then((data) => {
          state.messages = state.messages.concat(data)
        })
    },
    post(state, message) {
      const sig = safebook.sign(state.account, message)
      state.posts.push({
        author: state.account.address,
        content: message,
        sig
      })
      fetch(`${config.url}/${state.account.address}/posts`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          author: state.account.address, // TODO: useless
          content: message,
          sig
        })
      }).then((res) => { console.log(res) })
      .catch((res) => { console.log(res) })
    },
    message(state, payload) {
      console.log(payload)
      const hidden_message = safebook.encrypt(state.account, payload.address, payload.message)
      state.messages.push({
        author: state.account.address,
        receiver: payload.address,
        message: payload.message,
        hidden_message: hidden_message
      })
      fetch(`${config.url}/${payload.address}/inbox`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          author: state.account.address,
          receiver: payload.address, // TODO: useless
          content: hidden_message
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
