<template>
  <div>
    <div>
      <textarea id="textbox" v-model="message" placeholder="Votre message" rows=1 @keydown="autogrow" autofocus></textarea>
    </div>
    <div id="send">
      <button class="button" @click="send()">Publier</button>
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
      this.$store.commit('post', this.message)
      this.message = ''
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
  width: 400px;
  margin: 10px;
  border: 2px solid green;
  border-radius: 10px;
  padding: 10px;
}
#send {
  text-align: right;
  margin-right: 20px;
}
button {
  background-color: green;
  color: white;
  text-align: right;
}
</style>

