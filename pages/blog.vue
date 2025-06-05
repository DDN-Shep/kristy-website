<template>
  <div>
    Blog 
    <div v-for="post in state.posts" :key="post.id">
      <a :href="post.canonical_url">{{ post.title }}</a>
      <img :src="post.cover_image" width="230">
      <p>{{ post.truncated_body_text }}</p>
    </div>
    <UButton @click="getPosts" label="Get Posts" />
  </div>
</template>

<script setup lang="js">
const state = reactive({
  posts: []
});

const toast = useToast();
async function getPosts() {
  toast.add({ title: 'Searching', description: 'Getting blog posts.', color: 'info' });
  const response = await fetch('/.netlify/functions/substack-proxy');
  state.posts = await response.json();
  console.log('state.posts', state.posts);
};
</script>
