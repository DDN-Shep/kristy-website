<template>
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-12 md:col-span-6">
      <NuxtImg src="/home-2.jpg"
               alt="Kristina Sheppard"
               class="w-full rounded-4xl shadow-xl" />
    </div>
    <div class="col-span-12 md:col-span-6">
      <p class="text-2xl"><span class="text-3xl">Hi</span>, I'm <span class="text-3xl italic">Kris</span>, and I'm so glad you're here.</p>
      <p>This isn't just another coaching website—it's a home for coaches and practitioners who are deeply committed to growth, impact, and the art of coaching mastery. Whether you're navigating the complexities of your practice, seeking supervision to deepen your presence, or looking for a like-minded partner on this journey, you're in the right place.</p>
      <p>I believe coaching is a profound privilege. To hold space for someone's stories, dreams, and transformations is sacred work. But as practitioners, we can only offer what we ourselves embody. That's why I'm passionate about creating safe, expansive spaces for coaches like you—spaces where you can process, reflect, and grow so you can powerfully serve others.</p>
    </div>
    <div class="col-span-12 grid grid-cols-subgrid gap-4 page-break-rtl">
      <div class="col-span-12">
        <UCard class="text-center">
          Here, you'll find:
        </UCard>
      </div>
      <div class="col-span-12 md:col-span-4">
        <UCard class="h-full shadow">
          Coaching Supervision: Thoughtful, tailored support for your professional practice, helping you show up with clarity, confidence, and compassion.
        </UCard>
      </div>
      <div class="col-span-12 md:col-span-4">
        <UCard class="h-full shadow">
          Mastery Circle Group Supervision: A community of like-hearted practitioners growing together, exploring challenges, and celebrating breakthroughs.
        </UCard>
      </div>
      <div class="col-span-12 md:col-span-4">
        <UCard class="h-full shadow">
          Resources for Growth: Insights, tools, and reflections to inspire your journey.
        </UCard>
      </div>
    </div>
    <div class="col-span-12 grid grid-cols-subgrid gap-4 page-break">
      <div class="col-span-9">
        <UCard class="shadow ring-0">
          I've been where you are—the doubts, the triumphs, the messy middle—and I know the courage it takes to hold space for others while continuously stretching your own capacity. My mission is to walk alongside you, offering a blend of rigor, warmth, and depth that empowers you to do your best work.
        </UCard>
      </div>
      <div class="col-span-9 col-start-4">
        <UCard class="text-right shadow ring-0">
          This is more than a service—it's a partnership. A place where your aspirations and challenges are met with care, curiosity, and shared commitment to the transformative power of coaching.
        </UCard>
      </div>
      <div class="col-span-9">
        <UCard class="shadow ring-0">
          So take a breath. Look around. And when you're ready, let's explore how we can partner together to elevate your practice and unlock new possibilities.
        </UCard>
      </div>
      <div class="col-span-12">
        <p class="text-center text-2xl p-4">Welcome <span class="italic">home</span>.</p>
      </div>
    </div>
    <div class="col-span-2 col-start-6">
      <NuxtImg src="/logos/Circular Rose Gold.png"
               alt="KS" />
    </div>
  </div>
</template>

<style scoped>
p {
  padding-bottom: 1em;
}
</style>
