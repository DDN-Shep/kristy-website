<template>
  <blockquote class="relative">
    <slot class="italic text-lg" />
    <cite class="pt-4 block text-sm">
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
blockquote {
  line-height: 1.4;
}

blockquote:before {
  position: absolute;
  content: '\201C';
  font-size: 7.5em;
  font-weight: 700;
  opacity: 0.5;
  top: -.2em;
  left: -.2em;
  z-index: -1;
}

cite span {
  letter-spacing: 0.1em;
}
</style>