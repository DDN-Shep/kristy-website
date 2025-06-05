<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <a :href="post.canonical_url">{{ post.title }}</a>
      <img :src="post.cover_image" width="230">
      <p>{{ post.truncated_body_text }}</p>
    </div>
  </div>
</template>

<script setup>
const response = await fetch('/.netlify/functions/proxy');
const posts = response.json();
console.log(posts);
</script>
