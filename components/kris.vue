<template>
  <div class="banner"
       :style="krisBanner" />
  <div>
    <h1>Kristina Sheppard</h1>
    <h2>Accredited Life Coach and Coaching Supervisor</h2>
  </div>
</template>

<script setup>
const img = useImage()
const krisBanner = computed(() => {
  const imgUrl = img('/kris.png', { width: 800 })
  return { backgroundImage: `url('${imgUrl}')` }
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