<template lang="pug">
  #app
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
body {
  text-align: center;
  margin-top: 0;
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
  border: 1px solid green;
}
.center {
  text-align: center;
}
a {
  color: #42b983;
  cursor: pointer;
  text-decoration: underline;
}
.table {
  display: table;
}
#side {
 vertical-align: top;
 display: table-cell;
 height: 100%;
 width: 40%;
 border-right: 2px solid green;
}
#main {
 display: table-cell;
 height: 100%;
 width: 60%;
 vertical-align: top;
}
.button {
  padding: 6px 30px 6px 30px;
  margin: 0px 10px 0px 10px;
  border-width: 1px;
  border-style: solid;
  border-radius: 15px;
}
.button:hover {
  box-shadow: inset 0 0 1px 1px #9eed1e, 0 0 1px 3px rgba(0, 0, 0, 0.15);
}
</style>
