<template>
  <blockquote class="relative shadow-xl rounded-xl z-0 p-5">
    <div class="pl-15">
      <slot />
    </div>
    <cite class="pt-4 block text-sm text-right">
      <span class="uppercase">{{ author }}</span>
      <br>
      {{ description }}
    </cite>
  </blockquote>
</template>

<script setup>
defineProps({
  author: String,
  description: String
})
</script>

<style scoped>
blockquote:before {
  position: absolute;
  content: '\201C';
  font-size: 5em;
  font-weight: 700;
  opacity: 0.5;
  top: 0;
  left: 15px;
  z-index: -1;
  opacity: 0.4;
  font-style: italic;
}

cite span {
  letter-spacing: 0.1em;
}
</style>