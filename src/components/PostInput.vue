<template>
  <div>
    <div>
      <textarea id="textbox" v-model="message" placeholder="Votre message" rows=1 @keydown="autogrow"></textarea>
    </div>
    <div id="send">
      <button class="button" @click="send()">Envoyer</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostInput',
  data () {
    return {
      message: ''
    }
  },
  methods: {
    send () {
      const contact = this.contacts[this.contactIndex]
      this.$emit('post', this.message, contact.alias, contact.pubkey)
      this.currentMessage = ''
      this.autogrow()
    },
    autogrow () {
      setTimeout(() => {
        const el = document.querySelector('textarea')
        el.style.cssText = 'height:auto;'
        let height = el.scrollHeight
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
  width: 100%;
  margin: 10px;
  border: 2px solid green;
  border-radius: 10px;
  padding: 10px;
}
#send {
  text-align: right;
}
button {
  background-color: green;
  color: white;
  text-align: right;
}
</style>

