import { defineStore } from "pinia";
import safebook from "@/lib/safebook";
import config from "@/config";
import router from "@/router";

export const useMainStore = defineStore("main", {
  state: () => {
    return {
      account: null,
      user: null,
      inbox: [],
      outbox: [],
      pms: [],
      contacts: [],
    };
  },

  actions: {
    createAccount() {
      this.account = safebook.generate_account();
      localStorage.setItem("mnemonic", this.account.mnemonic);
    },
    restoreAccount() {
      console.log("restoreAccount")
      const mnemonic = localStorage.getItem("mnemonic");
      if (mnemonic) {
        this.account = safebook.load(mnemonic);
      }
      console.log(this.account)
    },
    loadAccount(payload) {
      try {
        this.account = safebook.load(payload.mnemonic);
        localStorage.setItem("mnemonic", this.account.mnemonic);
        router.push("/signup");
      } catch (e) {
        window.alert("Mot de passe invalide");
      }
    },
    logout() {
      this.account = null;
      localStorage.removeItem("mnemonic");
    },
    selectUser(payload) {
      this.user = payload.address;
    },
    loadInbox(payload) {
      this.inbox = [];
      fetch(`${config.url}/${payload.address}/inbox`)
        .then((response) => response.json())
        .then((data) => {
          this.inbox = data;
        });
    },
    loadOutbox(payload) {
      this.outbox = [];
      fetch(`${config.url}/${payload.address}/outbox`)
        .then((response) => response.json())
        .then((data) => {
          this.outbox = data;
        });
    },
    loadPrivateMessages() {
      fetch(`${config.url}/${this.account.address}/private_messages`)
        .then((response) => response.json())
        .then((data) => {
          for (let i = 0; i < data.length; i++) {
            try {
              if (data[i].author === this.account.address) {
                data[i].content = safebook.decrypt(
                  this.account,
                  data[i].receiver,
                  data[i].hidden_content
                );
              } else {
                data[i].content = safebook.decrypt(
                  this.account,
                  data[i].author,
                  data[i].hidden_content
                );
              }
            } catch (e) {
              data[i].content = "Error";
            }
          }
          this.pms = data;
        });
    },
    sendSignedMessage(payload) {
      const sig = safebook.sign(this.account, payload.content); // TODO: also sign metadata
      const message = {
        author: this.account.address,
        receiver: payload.receiver,
        content: payload.content,
        sig,
      };
      fetch(`${config.url}/${this.account.address}/inbox`, {
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
      this.inbox.push(message);
      if (message.receiver === this.account.address) {
        this.outbox.push(message);
      }
    },
    sendPrivateMessage(payload) {
      console.log(this.account, payload.receiver, payload.content);
      const hiddenContent = safebook.encrypt(
        this.account,
        payload.receiver,
        payload.content
      );
      const message = {
        author: this.account.address,
        receiver: payload.receiver,
        hidden_content: hiddenContent,
      };
      fetch(`${config.url}/${this.account.address}/private_messages`, {
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
      this.pms.push({ ...message, ...{ content: payload.content } });
    },
    loadContacts(payload) {
      this.contacts = [];
      fetch(`${config.url}/${payload.address}/contacts`)
        .then((response) => response.json())
        .then((data) => {
          this.contacts = data;
        });
    },
    deleteContact(payload) {
      fetch(`${config.url}/${payload.address}/contacts`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          author: this.account.address,
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
});
