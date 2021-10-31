import Vue from 'vue'
import Vuex from 'vuex'
import safebook from 'safebook'
import config from './config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account: null,
    posts: [],
    messages: []
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
      fetch(`${config.url}/${state.account.address}/${payload.address}/messages`)
        .then(response => response.json())
        .then((data) => {
          for (let i = 0; i < data.length; i++)
          {
            try {
              console.log(state.account, data[i].author, data[i].hidden_content)
              console.log(safebook.decrypt(state.account, data[i].author, data[i].hidden_content))
              if (data[i].author == state.account.address)
                data[i].content = safebook.decrypt(state.account, data[i].receiver, data[i].hidden_content)
              else
                data[i].content = safebook.decrypt(state.account, data[i].author, data[i].hidden_content)
            } catch (e) {
              data[i].content = "Error"
            }
          }
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
      const hidden_content = safebook.encrypt(state.account, payload.address, payload.content)
      state.messages.push({
        author: state.account.address,
        receiver: payload.address,
        content: payload.content,
        hidden_content: hidden_content
      })
      console.log(state.account, payload.address, hidden_content)
      console.log(safebook.decrypt(state.account, payload.address, hidden_content))
      fetch(`${config.url}/${payload.address}/messages`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          author: state.account.address,
          receiver: payload.address, // TODO: useless
          hidden_content: hidden_content
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
