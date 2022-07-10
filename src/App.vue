<script setup>
//import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";

import { useMainStore } from "@/stores/index.js";
const mainStore = useMainStore();
mainStore.restoreAccount();
</script>

<template>
  <div class="container mx-auto w-1/2">
    <Header />
    <router-view />
  </div>
</template>
