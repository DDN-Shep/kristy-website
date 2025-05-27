<template>
  <nav>
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/supervision">1:1 Supervision</NuxtLink></li>
      <li><NuxtLink to="/group-supervision">Group Supervision</NuxtLink></li>
      <li><NuxtLink to="/self-study">Self-study</NuxtLink></li>
      <li><NuxtLink to="/mother-wound-healing">Mother Wound Healing</NuxtLink></li>
      <li><NuxtLink to="/learn">Learn</NuxtLink></li>
      <li><NuxtLink to="/contact">Contact</NuxtLink></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  flex: 1 1 100%;
  justify-content: center;
}
nav > ul {
  padding-left: 0;
  margin: 0;
  display: inline-flex;
  width: auto;
}
nav > ul > li {
  display: inline-flex;
	list-style: none;
}
nav > ul > li > a {
  display: inline-block;
  padding: 1rem;
  color: #313131;
  text-decoration: none;
}
nav > ul > li > a:hover,
nav > ul > li > a:focus,
nav > ul > li > a:active {
	outline: none;
  text-decoration: underline;
}
@media (min-width: 600px) {
	nav > ul > li > a {
		display: inline-block;
	}
}
</style>