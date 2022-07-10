<template>
  <div id="contact">
    <a @click="goToUser()">
      {{ nameOf(address) }}
    </a>
  </div>
</template>

<script>
import safebook from "@/lib/safebook";
import config from "@/config";

export default {
  name: "Contact",
  props: ["address"],
  computed: {
    url() {
      return `${config.vueUrl}/u/${this.address}`;
    },
  },
  methods: {
    goToUser() {
      this.$router.push(`/u/${this.address}`);
    },
    nameOf(address) {
      return safebook.name(address).join(" ");
    },
  },
};
</script>

<style scoped></style>
