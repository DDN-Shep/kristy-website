<template>
  <UContainer>
    <div class="grid grid-cols-4 md:grid-cols-10">
      <div class="col-span-1 md:col-span-8 lg:col-span-6 ml-0 md:order-2 my-5 lg:m-auto">
        <Nav />
      </div>
      <div class="col-span-2 m-auto md:order-1">
        <NuxtImg src="/kris-logo.png"
                 alt="Kristina Sheppard"
                 class="w-100" />
      </div>
      <div class="lg:col-span-2 m-auto hidden lg:block order-3">
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