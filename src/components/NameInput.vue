<template>
  <div id="name-input">
    <input type="text" placeholder="Votre nom" v-model="name" />
    <button>Send</button>
  </div>
</template>

<script>
export default {
  name: 'NameInput',
  props: ['oldName'],
  model() {
    return {
      name: this.oldName
    }
  },
  methods: {
    send() {
      this.$store.commit({
        type: 'attr',
        kind: 'name',
        value: this.message
      })
    }
  }
}
</script>

<style>
#name-input {
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>
