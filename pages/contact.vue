<template>
  <form name="contact-form">
    <input
      name="name"
      type="text"
      placeholder="Your name"
      maxlength="100"
      autocomplete="off"
      value=""
      required
    />
    <input
      name="email"
      type="email"
      pattern="^.+@.+\.[a-zA-Z]{2,63}$"
      placeholder="Your email"
      maxlength="250"
      autocomplete="off"
      value=""
      required
    />
    <textarea name="message" placeholder="Your message..." required></textarea>
    <UButton
      label="Send"
      :loading="loading"
      loading-icon="i-heroicons-academic-cap"
    />
  </form>
</template>

<script setup>
const loading = ref(true);
</script>