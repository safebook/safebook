import Vue from "vue";
import Vuex from "vuex";
import safebook from "@/safebook";
import config from "./config";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    account: null,
    user: null,
    inbox: [],
    outbox: [],
    pms: [],
    contacts: [],
  },
  mutations: {
    createAccount(state) {
      state.account = safebook.generate_account();
      localStorage.setItem("mnemonic", state.account.mnemonic);
    },
    restoreAccount(state) {
      let mnemonic = localStorage.getItem("mnemonic");
      if (mnemonic) {state.account = safebook.load(mnemonic);}
    },
    loadAccount(state, payload) {
      try {
        state.account = safebook.load(payload.mnemonic);
        localStorage.setItem("mnemonic", state.account.mnemonic);
        router.push("/signup");
      } catch (e) {
        window.alert("Mot de passe invalide");
      }
    },
    logout(state) {
      state.account = null;
      localStorage.removeItem("mnemonic");
    },
    selectUser(state, payload) {
      state.user = payload.address;
    },
    loadInbox(state, payload) {
      state.inbox = [];
      fetch(`${config.url}/${payload.address}/inbox`)
        .then((response) => response.json())
        .then((data) => {
          state.inbox = data;
        });
    },
    loadOutbox(state, payload) {
      state.outbox = [];
      fetch(`${config.url}/${payload.address}/outbox`)
        .then((response) => response.json())
        .then((data) => {
          state.outbox = data;
        });
    },
    loadPrivateMessages(state) {
      fetch(`${config.url}/${state.account.address}/private_messages`)
        .then((response) => response.json())
        .then((data) => {
          for (let i = 0; i < data.length; i++) {
            try {
              if (data[i].author == state.account.address)
                {data[i].content = safebook.decrypt(
                  state.account,
                  data[i].receiver,
                  data[i].hidden_content
                );}
              else
                {data[i].content = safebook.decrypt(
                  state.account,
                  data[i].author,
                  data[i].hidden_content
                );}
            } catch (e) {
              data[i].content = "Error";
            }
          }
          state.pms = data;
        });
    },
    sendSignedMessage(state, payload) {
      const sig = safebook.sign(state.account, payload.content); // TODO: also sign metadata
      const message = {
        author: state.account.address,
        receiver: payload.receiver,
        content: payload.content,
        sig,
      };
      fetch(`${config.url}/${state.account.address}/inbox`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      })
        .then((res) => {
          console.log(res);
        })
        .catch((res) => {
          console.log(res);
        });
      state.inbox.push(message);
      if (message.receiver == state.account.address) {state.outbox.push(message);}
    },
    sendPrivateMessage(state, payload) {
      console.log(state.account, payload.receiver, payload.content);
      const hidden_content = safebook.encrypt(
        state.account,
        payload.receiver,
        payload.content
      );
      const message = {
        author: state.account.address,
        receiver: payload.receiver,
        hidden_content: hidden_content,
      };
      fetch(`${config.url}/${state.account.address}/private_messages`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      })
        .then((res) => {
          console.log(res);
        })
        .catch((res) => {
          console.log(res);
        });
      state.pms.push({ ...message, ...{ content: payload.content } });
    },
    loadContacts(state, payload) {
      state.contacts = [];
      fetch(`${config.url}/${payload.address}/contacts`)
        .then((response) => response.json())
        .then((data) => {
          state.contacts = data;
        });
    },
    deleteContact(state, payload) {
      fetch(`${config.url}/${payload.address}/contacts`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          author: state.account.address,
          receiver: payload.address,
        }),
      })
        .then((res) => {
          console.log(res);
        })
        .catch((res) => {
          console.log(res);
        });
    },
  },
  actions: {},
  getters: {},
});
