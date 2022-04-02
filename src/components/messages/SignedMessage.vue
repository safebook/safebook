<template>
  <div id="post">
    <div id="header" v-if="message.author != message.receiver">
      <div class="right" v-if="message.author != address">
        => <a @click="goToAuthor()">{{ author_name }}</a>
      </div>
      <div class="left" v-if="message.author == address">
        <a @click="goToReceiver()">{{ receiver_name }}</a> :
      </div>
    </div>
    <div id="message">
      {{ message.content }}
    </div>
  </div>
</template>

<script>
import safebook from "@/safebook";

export default {
  name: "Message",
  props: ["message"],
  methods: {
    goToAuthor() {
      this.$router.push({
        name: "user",
        params: { address: this.message.author },
      });
    },
    goToReceiver() {
      this.$router.push({
        name: "user",
        params: { address: this.message.receiver },
      });
    },
  },
  computed: {
    author_name() {
      return safebook.name(this.message.author).join(" ");
    },
    receiver_name() {
      return safebook.name(this.message.receiver).join(" ");
    },
    address() {
      return this.$route.params.address;
    },
  },
};
</script>

<style scoped>
#post {
  border: 1px solid grey;
  margin: 10px 30px 10px 30px;
  text-align: right;
  padding: 8px;
}
#header {
  margin: 0;
}
#header .left {
  text-align: left;
}
#header .right {
  text-align: right;
}
#message {
  margin: 0;
}
</style>
