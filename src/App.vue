<template lang="pug">
  .container
    Header
    router-view
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: { Header },
  mounted() {
    this.$store.commit('restoreAccount')
  }
}
</script>

<style>
</style>
