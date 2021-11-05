<template>
<vue-markdown>
  {{ content }}
</vue-markdown>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import content from 'raw-loader!@/assets/how.md'
export default {
  name: 'How',
  components: { VueMarkdown },
  data() {
    return {
      content
    }
  }
}
</script>

<style scoped>
.word {
  display: inline-block !important;
  width: 33%;
  text-align: center;
  font-weight: bold;
}
</style>

