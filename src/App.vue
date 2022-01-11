<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
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
  margin-top: 60px;
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
