<template>
  <div class="col-span-3 page-break"
       :class="isRtl ? 'col-start-10' : ''" />
</template>

<script setup>
const props = defineProps({
  isRtl: Boolean
})
const img = useImage()
const branchPageBreak = computed(() => {
  const imgUrl = img('/logos/ks-branch-logo-1.png', { width: 800 })
  return { backgroundImage: `url('${imgUrl}')`, transform: props.isRtl ? '' : 'scaleX(-1)' }
})
</script>

<style scoped>
/* .page-break {
  height: 150px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
} */
.page-break::after {
  content: "";
  display: block;
  width: 300px;
  height: 250px;
  background-image: url('/images/ks-branch-logo-1.png');
  background-size: contain;
  background-repeat: no-repeat;
  border: 1px solid #666;

  /* Positioning the image */
  margin: 20px auto;
  /* Centers horizontally with vertical spacing */
  transform: translateY(20px);
  /* Adjusts the offset below the element */
}
</style>