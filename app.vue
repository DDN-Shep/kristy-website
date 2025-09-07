<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage :transition="{
        name: 'layout',
        mode: 'out-in'
      }" />
    </NuxtLayout>
  </UApp>
</template>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.2s;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}
</style>