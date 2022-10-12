<script setup>
const iconList = [
  "devicon-bash-plain",
  "devicon-git-plain",
  "devicon-github-original",
  "devicon-html5-plain-wordmark",
  "devicon-css3-plain-wordmark",
  "devicon-sass-original",
  "devicon-tailwindcss-plain",
  "devicon-javascript-plain",
  "devicon-vuejs-plain",
];
</script>

<template>
  <div
    v-for="(icon, index) in iconList"
    :key="icon"
    class="icon"
    :style="{ animationDelay: index * 0.1 + 2.3 + 's' }"
  >
    <i :class="icon"></i>
  </div>
</template>

<style>
.icon {
  animation-name: fadeIn, slideIn;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  font-size: 5rem;
  opacity: 0;
  color: var(--fg-secondary);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
</style>
