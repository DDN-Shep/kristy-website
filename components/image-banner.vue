<template>
  <div class="banner"
       :style="bannerStyle" />
</template>

<script setup>
const props = defineProps({
  imageUrl: String
})
const img = useImage()
const bannerStyle = computed(() => {
  const imageUrl = img(props.imageUrl, { width: 800 })
  return { backgroundImage: `url('${imageUrl}')` }
})
</script>

<style scoped>
.banner {
  height: 30rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>