<script>
export default {
  props: ["href"]
}
</script>

<template>
  <a class="text-blue-500" :href="href">
    <slot />
  </a>
</template>
