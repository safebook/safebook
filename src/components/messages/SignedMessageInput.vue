<template>
  <div class="pt-10">
    <textarea
      class="w-full"
      v-model="content"
      placeholder="Votre message publique"
      rows="3"
      autofocus
      @keydown="autogrow"
    />
    <div id="send">
      <button
        @click="sendSignedMessage()"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Envoyer un message public
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageInput",
  props: ["address"],
  data() {
    return {
      content: "",
    };
  },
  created() {
    this.autogrow();
  },
  methods: {
    sendSignedMessage() {
      this.$store.commit({
        type: "sendSignedMessage",
        content: this.content,
        receiver: this.address,
      });
      this.content = "";
      this.autogrow();
    },
    refresh() {
      this.$store.commit({
        type: "loadMessages",
        address: this.address,
      });
    },
    autogrow() {
      setTimeout(() => {
        const el = document.querySelector("textarea");
        el.style.cssText = "height:auto;";
        const height = el.scrollHeight - 20;
        el.style.height = height + "px";
      }, 0);
    },
  },
};
</script>

<style>
textarea {
  width: 400px;
  margin: 10px;
  border: 2px solid grey;
  border-radius: 10px;
  padding: 10px;
}
#send {
  text-align: right;
  margin-right: 20px;
}
.button {
  width: 300px;
  text-align: center;
}
.private {
  background-color: green;
  color: white;
}
.public {
  background-color: blue;
  color: white;
}
</style>
