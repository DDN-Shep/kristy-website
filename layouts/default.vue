<template>
  <UContainer>
    <div class="grid grid-cols-10">
      <div class="col-span-2 m-auto">
        <NuxtImg src="/kris-logo.png"
                 alt="Kristina Sheppard"
                 class="w-100" />
      </div>
      <div class="col-span-6 m-auto">
        <Nav />
      </div>
      <div class="col-span-2 m-auto">
        <UButton variant="outline"
                 class="p-3 shadow-md">
          Curious to find out more?
          <br>
          Click here to book a discovery call
        </UButton>
      </div>
    </div>
    <div class="main-content">
      <slot />
    </div>
  </UContainer>
</template>