<template>
  <div id="MessageInput">
    <div>
      <textarea id="textbox" v-model="content" placeholder="Votre message privé" rows=1 @keydown="autogrow" autofocus></textarea>
    </div>
    <div id="send">
      <button class="button private" @click="sendPrivateMessage()">Envoyer un message privé</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageInput',
  data () {
    return {
      content: ''
    }
  },
  props: ['address'],
  methods: {
    sendPrivateMessage () {
      this.$emit('post', this.content)
      this.content = ''
      this.autogrow()
    },
    refresh() {
      this.$store.commit({
        type: 'loadMessages',
        address: this.address
      });
    },
    autogrow () {
      setTimeout(() => {
        const el = document.querySelector('textarea')
        el.style.cssText = 'height:auto;'
        let height = el.scrollHeight - 20
        el.style.height = height + 'px'
      }, 0)
    }
  },
  created () {
    this.autogrow()
  }
}
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

