<template>
  <div class="home">
    <h3>Safebook</h3>
    <p>
      cryptographic social network
    </p>
    <p>
      <router-link to="/signup">Signup</router-link>
    </p>
    <p>
      <router-link to="/hello_world">Vue hello world</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>

