<template>
  <div></div> <!-- Calendly injects the badge automatically -->
</template>

<script setup lang="ts">
onMounted(() => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://assets.calendly.com/assets/external/widget.css'
  document.head.appendChild(link)

  const script = document.createElement('script')
  script.src = 'https://assets.calendly.com/assets/external/widget.js'
  script.async = true
  script.onload = () => {
    if (window.Calendly) {
      window.Calendly.initBadgeWidget({
        url: 'https://calendly.com/sessionwithkris/clarity-call?hide_event_type_details=1&hide_gdpr_banner=1',
        text: 'Schedule time with me',
        color: '#0069ff',
        textColor: '#ffffff',
        branding: true
      })
    }
  }
  document.body.appendChild(script)
})
</script>