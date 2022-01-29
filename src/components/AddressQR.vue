<template>
  <div id="qrcode">
    <vue-qr :text="url" :size="130"></vue-qr>
  </div>
</template>

<script>
import VueQr from 'vue-qr/src/packages/vue-qr.vue'
import config from '../config'

export default {
  name: "AddressQR",
  components: {
    VueQr
  },
  props: {
    address: String
  },
  computed: {
    url() {
      return `${config.url}/u/${this.address}`;
    }
  }
}
</script>

<style>
  #qrcode {
    display: inline-block;
  }
</style>
