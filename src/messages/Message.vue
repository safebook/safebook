<template>
  <div id="post">
    <div id="author">
      {{ message.author.slice(0,12) }}
    </div>
    <div id="message">
      {{ message.content }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: ['message'],
}
</script>

<style>
#post {
 border: 2px solid green;
 border-radius: 15px;
 margin: 10px 30px 0 30px;
}
#author {
 text-align: left;
 margin: 10px;
 font-weight: bold;
}
#message {
 margin-bottom: 10px;
}
</style>
