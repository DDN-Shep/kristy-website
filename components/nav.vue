<template>
  <div class="py-8 px-2">
    <UNavigationMenu :items="items"
                     :ui="{ link: 'text-lg px-4 hover:underline' }"
                     variant="link"
                     content-orientation="vertical"
                     class="w-full" />
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

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
      { label: "Self-study", to: "/self-study" },
      { label: "Mother Wound Healing", to: "/mother-wound-healing" }
    ]
  },
  {
    label: "Learn",
    to: "/learn",
  },
  {
    label: "Contact",
    to: "/contact",
  },
]);
</script>