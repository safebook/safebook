<template>
  <div id="contact">
    <a @click="goToUser()">
      {{ nameOf(address) }}
    </a>
  </div>
</template>

<script>
import safebook from "@/safebook";
import config from "@/config";

export default {
  name: "Contact",
  props: ["address"],
  methods: {
    goToUser() {
      this.$router.push(`/u/${this.address}`);
    },
    nameOf(address) {
      return safebook.name(address).join(" ");
    },
  },
  computed: {
    url() {
      return `${config.vue_url}/u/${this.address}`;
    },
  },
};
</script>

<style scoped></style>
