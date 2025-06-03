<template>
  <div>
    <h2>Recent Instagram Posts</h2>
    <div v-for="post in posts"
         :key="post.id">
      <img :src="post.images.standard_resolution.url"
           alt="Instagram post image">
      <p>{{ post.caption.text }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'InstagramFeed',
  data() {
    return {
      posts: []
    }
  },
  created() {
    axios.get('https://api.instagram.com/v1/users/self/media/recent', {
      params: {
        access_token: 'YOUR_ACCESS_TOKEN'
      }
    })
      .then(response => {
        this.posts = response.data.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
}
</script>

<!-- <script setup>
import { useHead } from '#imports';

useHead({
  script: [
    {
      src: 'https://substackapi.com/embeds/feed.js',
      async: true,
    },
  ],
});
// sk_live_4dc1399684564791b1fb0ff2b64c1507
const setupSubstackFeed = () => {
  window.SubstackFeedWidget = {
    substackUrl: 'kristinasheppard.substack.com',
    posts: 5,
    filter: 'top',
  };
};
</script>

<template>
  <div class="w-2xl"
       :onload="setupSubstackFeed">
    <div id="substack-feed-embed"></div>
  </div>
</template> -->
