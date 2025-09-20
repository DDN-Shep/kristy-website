<template>
  <UButton variant="outline"
           class="p-3 shadow-md"
           @click.prevent="openCalendly">
    Curious to find out more?
    <br>
    Click here to book a discovery call
  </UButton>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

function openCalendly() {
  if (window.Calendly)
    window.Calendly.initPopupWidget({ url: 'https://calendly.com/sessionwithkris/clarity-call?hide_event_type_details=1&hide_gdpr_banner=1' });
}

onMounted(() => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://assets.calendly.com/assets/external/widget.css';
  document.head.appendChild(link);

  const script = document.createElement('script');
  script.src = 'https://assets.calendly.com/assets/external/widget.js';
  script.async = true;
  document.body.appendChild(script);
})
</script>