<template>
  <div id="name-input">
    <input v-model="name" type="text" placeholder="Votre nom" />
    <button>Send</button>
  </div>
</template>

<script>
export default {
  name: 'NameInput',
  model() {
    return {
      name: this.oldName
    }
  },
  props: ['oldName'],
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
