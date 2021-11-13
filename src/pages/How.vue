<template>
<vue-markdown id="markdown">
  {{ content }}
</vue-markdown>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import content from 'raw-loader!@/assets/how.fr.md'
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

<style>
#markdown {
  text-align: left;
  margin: 10px;
}
#markdown h1 {
  text-align: center !important;
}
.word {
  display: inline-block !important;
  width: 33%;
  text-align: center;
  font-weight: bold;
}
</style>

