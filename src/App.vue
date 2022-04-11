<template>
  <div class="container mx-auto w-1/2">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: { Header },
  mounted () {
    this.$store.commit('restoreAccount')
  }
}
</script>

<style></style>
