<template>
<VueMarkdown>
  {{ content }}
</VueMarkdown>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import content from 'raw-loader!@/assets/about.md'
export default {
  name: 'About',
  components: { VueMarkdown },
  data() {
    return {
      content
    }
  }
}
</script>

<style scoped>
</style>


