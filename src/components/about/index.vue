<template>
<VueMarkdown>
  {{ content }}
</VueMarkdown>
</template>

<script>
import VueMarkdown from 'vue-markdown'
// eslint-disable-next-line import/no-webpack-loader-syntax
import content from 'raw-loader!@/assets/about.md'
export default {
  name: 'About',
  components: { VueMarkdown },
  data () {
    return {
      content
    }
  }
}
</script>

<style scoped>
</style>
