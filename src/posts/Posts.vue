<template>
  <div>
    <PostInput />
    <div id="no-posts" v-if="posts.length == 0">
      Pas de publications pour l'instant.
    </div>
    <Post v-for="(post, index) in posts" :post="post" :key="index" />
  </div>
</template>

<script>
import Post from "./Post"
import PostInput from "./PostInput"

export default {
  name: 'Posts',
  components: { PostInput, Post },
  props: ['posts'],
}
</script>

<style>
</style>
