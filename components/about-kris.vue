<template>
  <div class="card w-100 rounded-2xl"
       :data-state="state">
    <div class="card-header">
      <div class="card-cover"
           :style="krisAvatar"></div>
      <NuxtImg src="/kris.png"
               alt="Kristina Sheppard"
               class="card-avatar" />
      <h1 class="card-fullname">Kristina Sheppard</h1>
      <h2 class="card-jobtitle">Life Coach and Supervisor</h2>
    </div>
    <div class="card-main">
      <div class="card-section is-active"
           id="about">
        <div class="card-content">
          <div class="card-subtitle">ABOUT</div>
          <div class="card-desc">
            <span>Accredited Coaching Supervisor (ICF/EMCC/AC diploma, 2020)</span>
            <span>Accredited Life Coach (ICF/EMCC/AC diploma, 2018)</span>
            <span>Receives her own supervision</span>
            <span>Integrative practitioner and a lifelong learner</span>
            <span>Also: a mama of 2 cool kids, Projector 1/3 in HD, claircogznant neurospicy woman. Slightly woo 😊</span>
          </div>
        </div>
        <div class="px-5 text-center text-xl">
          <ULink to="/"
                 class="mr-4">
            <UIcon name="i-hugeicons-linkedin-02" />
          </ULink>
          <ULink to="/"
                 class="mr-4">
            <UIcon name="i-hugeicons-instagram" />
          </ULink>
          <ULink to="/">
            <UIcon name="i-hugeicons-threads" />
          </ULink>
        </div>
      </div>
      <div class="card-section"
           id="experience">
        <div class="card-content">
          <div class="card-subtitle">COACHING EXPERIENCE</div>
          <div class="card-timeline">
            <div class="card-item"
                 data-year="2014">
              <div class="card-item-title">Left job at <span>Barclays</span></div>
              <div class="card-item-desc">Beginning my life coach journey.</div>
            </div>
            <div class="card-item"
                 data-year="2016">
              <div class="card-item-title">Certified with <span>TheMakings</span></div>
              <div class="card-item-desc">Officially a recognised certified Life Coach.</div>
            </div>
            <div class="card-item"
                 data-year="2018">
              <div class="card-item-title">Accredited by <span>Coaching Accreditations Ltd</span></div>
              <div class="card-item-desc">etc...</div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-section"
           id="contact">
        <div class="card-content">
          <div class="card-subtitle">CONTACT</div>
          <div class="card-contact-wrapper">
            <div class="card-contact">
              <UIcon name="i-lucide-map-pin" />
              London, UK
            </div>
            <div class="card-contact">
              <UIcon name="i-lucide-coffee" />
              <a href="https://kristinasheppard.substack.com"
                 class="i-lucide-mail"
                 rel="noopener noreferrer nofollow external">Coaching Mastery Cafe</a>
            </div>
            <div class="card-contact">
              <UIcon name="i-lucide-mail" />
              kris@krissheppard.com
            </div>
            <button class="contact-me">WORK TOGETHER</button>
          </div>
        </div>
      </div>
      <div class="card-buttons">
        <button @click="setState"
                data-section="#about"
                class="is-active">ABOUT</button>
        <button @click="setState"
                data-section="#experience">EXPERIENCE</button>
        <button @click="setState"
                data-section="#contact">CONTACT</button>
      </div>
    </div>
  </div>
</template>

<!--
https://kristina-s-school-a9f8.thinkific.com/
https://www.youtube.com/watch?v=FiigLLbsKqI
https://www.instagram.com/itskrissheppard/
https://www.threads.net/@itskrissheppard
 -->

<script setup>
const img = useImage();
const krisAvatar = computed(() => {
  const imgUrl = img('/kris.png', { width: 300 })
  return { backgroundImage: `url('${imgUrl}')` }
});

const state = ref('#about');
const setState = e => {
  const targetSection = e.target.getAttribute("data-section");
  state.value = targetSection;
};
</script>

<style scoped>
.card {
  position: relative;
  overflow: hidden;
  background-color: white;
  display: flex;
  flex-direction: column;
  z-index: 1;
  transition: 0.3s;
}

.card-desc>span {
  display: block;
  padding-top: 0.2em;
}

.card[data-state="#about"] {
  height: 540px;
}

.card[data-state="#about"] .card-main {
  padding-top: 0;
}

.card[data-state="#contact"] {
  height: 430px;
}

.card[data-state="#experience"] {
  height: 550px;
}

.card:not([data-state="#about"]) .card-header {
  height: 80px;
}

.card:not([data-state="#about"]) .card-cover {
  height: 100px;
  top: -50px;
}

.card:not([data-state="#about"]) .card-avatar {
  transform: none;
  left: 20px;
  width: 50px;
  height: 50px;
  bottom: 10px;
}

.card:not([data-state="#about"]) .card-fullname {
  font-size: 18px;
}

.card:not([data-state="#about"]) .card-jobtitle {
  font-size: 10px;
}

.card-header {
  position: relative;
  display: flex;
  height: 200px;
  flex-shrink: 0;
  width: 100%;
  transition: 0.3s;
}

.card-header * {
  transition: 0.3s;
}

.card-cover {
  width: 100%;
  height: 100%;
  position: absolute;
  height: 160px;
  top: -20%;
  left: 0;
  will-change: top;
  background-size: cover;
  background-position: center;
  filter: blur(30px);
  transform: scale(1.2);
  transition: 0.5s;
}

.card-avatar {
  width: 100px;
  height: 100px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  object-position: center;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-64px);
}

.card-fullname {
  position: absolute;
  bottom: 0;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  transform: translateY(-10px) translateX(-50%);
  left: 50%;
}

.card-jobtitle {
  position: absolute;
  bottom: 0;
  font-size: 11px;
  white-space: nowrap;
  font-weight: 500;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0;
  left: 50%;
  transform: translateX(-50%) translateY(5px);
}

.card-main {
  position: relative;
  flex: 1;
  display: flex;
  padding-top: 10px;
  flex-direction: column;
}

.card-subtitle {
  font-weight: 700;
  font-size: 13px;
  margin-bottom: 8px;
}

.card-content {
  padding: 20px;
}

.card-desc {
  line-height: 1.6;
  color: #636b6f;
  font-size: 14px;
  margin: 0;
  font-weight: 400;
}

.card-buttons {
  display: flex;
  background-color: #fff;
  margin-top: auto;
  position: sticky;
  bottom: 0;
  left: 0;
}

.card-buttons button {
  flex: 1 1 auto;
  user-select: none;
  background: 0;
  font-size: 13px;
  border: 0;
  padding: 15px 5px;
  cursor: pointer;
  color: #5c5c6d;
  transition: 0.3s;
  font-family: "Jost", sans-serif;
  font-weight: 500;
  outline: 0;
  border-bottom: 3px solid transparent;
}

.card[data-state='#about'] button[data-section='#about'],
.card[data-state='#experience'] button[data-section='#experience'],
.card[data-state='#contact'] button[data-section='#contact'],
.card-buttons button:hover {
  border-bottom: 3px solid #8a84ff;
  background: linear-gradient(to bottom, rgba(127, 199, 231, 0) 0%,
      rgba(207, 204, 255, 0.2) 44%,
      rgba(211, 226, 255, 0.4) 100%);
}

.card-section {
  display: none;
}

.card[data-state='#about'] .card-section#about,
.card[data-state='#experience'] .card-section#experience,
.card[data-state='#contact'] .card-section#contact {
  display: block;
  animation: fadeIn 0.6s both;
}

.card-timeline {
  margin-top: 30px;
  position: relative;
}

.card-timeline:after {
  background: linear-gradient(to top, rgba(134, 214, 243, 0) 0%, #516acc 100%);
  content: "";
  left: 42px;
  width: 2px;
  top: 0;
  height: 100%;
  position: absolute;
  content: "";
}

.card-item {
  position: relative;
  padding-left: 60px;
  padding-right: 20px;
  padding-bottom: 30px;
  z-index: 1;
}

.card-item:last-child {
  padding-bottom: 5px;
}

.card-item:after {
  content: attr(data-year);
  width: 10px;
  position: absolute;
  top: 0;
  left: 37px;
  width: 8px;
  height: 8px;
  line-height: 0.6;
  border: 2px solid #fff;
  font-size: 11px;
  text-indent: -35px;
  border-radius: 50%;
  color: rgba(134, 134, 134, 0.7);
  background: linear-gradient(to bottom, #a0aee3 0%, #516acc 100%);
}

.card-item-title {
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
}

.card-item-desc {
  font-size: 13px;
  color: #6f6f7b;
  line-height: 1.5;
}

.card-contact-wrapper {
  margin-top: 20px;
}

.card-contact {
  display: flex;
  align-items: center;
  color: #6f6f7b;
  line-height: 1.6;
  cursor: pointer;
}

.card-contact svg {
  flex-shrink: 0;
  width: 30px;
  min-height: 34px;
  margin-right: 12px;
  transition: 0.3s;
  padding-right: 12px;
  border-right: 1px solid #dfe2ec;
}

.contact-me {
  border: 0;
  outline: none;
  background: linear-gradient(to right, rgba(83, 200, 239, 0.8) 0%, rgba(81, 106, 204, 0.8) 96%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  color: #fff;
  padding: 12px 16px;
  width: 100%;
  border-radius: 5px;
  margin-top: 25px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: 0.3s;
}
</style>
