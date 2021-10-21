<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: { Header },
  computed: {
    account() {
      return this.$store.state.account
    }
  }
}
</script>

<style>
body {
  text-align: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  width: 800px;
  display: inline-block;
  margin: 0 auto;
  text-align: center;
  color: #2c3e50;
}
.center {
  text-align: center;
}
a {
  color: #42b983;
  cursor: pointer;
  text-decoration: underline;
}
</style>
