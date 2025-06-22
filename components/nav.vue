<template>
  <div class="py-2 block md:hidden">
    <UCollapsible :unmount-on-hide="true">
      <UButton icon="i-lucide-menu"
               variant="outline"
               size="xl" />
      <template #content>
        <UNavigationMenu :items="items"
                         :ui="{ link: 'text-lg px-4 hover:underline', content: 'bg-white' }"
                         orientation="vertical"
                         content-orientation="vertical"
                         variant="link"
                         class="w-full absolute z-1 bg-white" />
      </template>
    </UCollapsible>
  </div>
  <div class="py-8 px-2 hidden md:block">
    <UNavigationMenu :items="items"
                     :ui="{ link: 'text-lg px-4 hover:underline', content: 'bg-white' }"
                     orientation="horizontal"
                     content-orientation="vertical"
                     variant="link"
                     class="w-full" />
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
// import { useBreakpoints } from '@vueuse/core'

// const breakpoints = useBreakpoints({
//   sm: 640,
//   md: 768,
//   lg: 1024
// })
// const isMobile = breakpoints.smaller('md')

const items = ref<NavigationMenuItem[]>([
  {
    label: "Home",
    to: "/"
  },
  {
    label: "Supervision",
    children: [
      { label: '1:1 Supervision', to: '/supervision' },
      { label: 'Group Supervision', to: '/group-supervision' }
    ]
  },
  {
    label: "Coaching",
    children: [
      { label: "1:1 Coaching", to: "/coaching" },
      { label: "Mother Wound Healing", to: "/mother-wound-healing" }
    ]
  },
  {
    label: "Self-study",
    to: "/self-study"
  },
  {
    label: "Blog",
    to: "/blog"
  },
  {
    label: "Contact",
    to: "/contact"
  },
]);
</script>