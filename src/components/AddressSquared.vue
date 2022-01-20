<template>
  <div id="addressSquared">
    <div class="line" v-for="line in lines" :key="line">
      {{ line }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    address: String
  },
  computed: {
    lines() {
      return [
        this.address.substr(0, 13),
        this.address.substr(13, 13),
        this.address.substr(26, 13),
        this.address.substr(39)
      ];
    }
  }
}
</script>

<style>
#addressSquared {
  text-align: center;
  font-weight: bold;
  font-family: monospace;
  color: green;
  display: inline-block;
  width: 20%;
  margin-left: 2%;
  vertical-align: top;
  margin-top: 25px;
}
.line {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
