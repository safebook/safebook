<template>
  <div id="messaging">
    <div id="side">
      <h4 class="title">Utilisateurs</h4>
      <div class="user top">
        <b>{{ get_name(receiver) }}</b>
      </div>
      <div class="user" v-for="user in contacts" :key="user">
        <a @click="goToUser(user)">
          {{ get_name(user) }}
        </a>
      </div>
      <h4 class="title">Groupes</h4>
      <a>Creer un groupe</a>
    </div>
    <div id="main">
      <PrivateMessageInput :address="receiver" @post="post" />
      <PrivateMessage
        v-for="(message, index) in messages"
        :message="message"
        :key="index"
        :sent="message.author == receiver"
      />
    </div>
  </div>
</template>

<script>
import safebook from "@/safebook";
import config from "@/config";
import PrivateMessageInput from "@/components/messages/PrivateMessageInput";
import PrivateMessage from "@/components/messages/PrivateMessage";

export default {
  name: "Messaging",
  components: { PrivateMessageInput, PrivateMessage },
  data() {
    return {
      messages: [],
      loader: 0,
    };
  },
  methods: {
    get_name(address) {
      if (!address) return "";
      return safebook.name(address).join(" ");
    },
    goToUser(user) {
      this.$router.push(`/m/${user}`);
    },
    loadMessages() {
      fetch(`${config.url}/m/${this.account.address}`)
        .then((response) => response.json())
        .then((data) => {
          for (let i = 0; i < data.length; i++) {
            try {
              if (data[i].author == this.account.address)
                data[i].content = safebook.decrypt(
                  this.$store.state.account,
                  data[i].receiver,
                  data[i].hidden_content
                );
              else
                data[i].content = safebook.decrypt(
                  this.$store.state.account,
                  data[i].author,
                  data[i].hidden_content
                );
            } catch (e) {
              data[i].content = "Error";
            }
          }
          this.messages = data;
        });
    },
    post(content) {
      const hidden_content = safebook.encrypt(
        this.account,
        this.receiver,
        content
      );
      const message = {
        author: this.account.address,
        receiver: this.receiver,
        hidden_content: hidden_content,
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
      this.messages.push({ ...message, ...{ content: content } });
    },
  },
  computed: {
    account() {
      return this.$store.state.account;
    },
    receiver() {
      return this.$route.params.address;
    },
    address_name() {
      return safebook.name(this.address).join(" ");
    },
    contacts() {
      return this.$store.getters.contacts;
    },
  },
  mounted() {
    this.$nextTick(() => this.loadMessages());
    this.loader = setInterval(() => {
      this.loadMessages();
    }, 5000);
  },
  destroyed() {
    clearInterval(this.loader);
  },
};
</script>

<style scoped>
#messaging {
  width: 100%;
  min-height: 300px;
  display: table;
}
.title {
  margin-top: 5px;
  margin-bottom: 10px;
  padding-top: 3px;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
}
.user {
  margin: 0;
}
</style>
