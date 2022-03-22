<template>
  <div id="messageBox" :class="{ sent: sent }">
    <span id="message" :class="{ sent: sent }">
      {{ message.content }}
    </span>
  </div>
</template>

<script>
import safebook from "@/safebook";

export default {
  name: "Message",
  props: ["message", "sent"],
  methods: {
    author_name() {
      return safebook.name(this.message.author);
    },
    receiver_name() {
      return safebook.name(this.message.receiver);
    },
  },
};
</script>

<style scoped>
#messageBox {
  text-align: left;
}
#messageBox.sent {
  text-align: right;
}
#message {
  border: 2px solid green;
  border-radius: 15px;
  margin: 10px 30px 10px 30px;
  display: inline-block;
  margin: 5px;
  text-align: left;
}
#message {
  padding: 6px;
  background-color: green;
  color: white;
  border: 1px solid green !important;
}
#message.sent {
  text-align: right;
  background-color: blue;
  border: 1px solid blue !important;
}
</style>
