<template>
  <div class="absolute z-0">
    <br>
    <article v-for="post in state.posts"
             :key="post.id"
             class="relative group/blog-post flex flex-col rounded-lg overflow-hidden lg:grid lg:grid-cols-4 lg:items-center gap-x-8 bg-default ring ring-default transition hover:bg-elevated/50 mb-10 lg:mx-40">
      <div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none">
        <NuxtImg :alt="post.description"
                 :src="post.cover_image"
                 class="object-cover object-center w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" />
      </div>
      <div class="min-w-0 flex-1 flex flex-col justify-center p-4 sm:p-6 lg:px-0 col-span-3">
        <ULink :href="post.canonical_url"
               tabindex="-1"
               target="_blank"
               class="focus:outline-none peer">
          <span class="absolute inset-0"
                aria-hidden="true"></span>
        </ULink>
        <div class="flex items-center gap-2 mb-2">
          <NuxtTime :datetime="post.post_date"
                    year="numeric"
                    month="long"
                    day="numeric"
                    hour="2-digit"
                    minute="2-digit"
                    class="text-sm text-toned" />
        </div>
        <h2 class="text-xl text-pretty font-semibold text-highlighted">{{ post.title }}</h2>
        <div class="mt-1 text-base text-pretty text-muted pr-1">{{ post.description }}</div>
      </div>
    </article>
  </div>
</template>

<script setup lang="js">
const state = reactive({
  posts: []
});

const toast = useToast();
async function getPosts() {
  const { id: blogToastId } = toast.add({ title: 'Searching', description: 'Getting blog posts.', color: 'info' });
  const response = await fetch('https://kristywebsite.netlify.app/.netlify/functions/substack-proxy');
  state.posts = await response.json();
  toast.remove(blogToastId);
};
getPosts()
</script>