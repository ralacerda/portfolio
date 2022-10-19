<script setup>
import IconBash from "~icons/simple-icons/gnubash";
import Git from "~icons/simple-icons/git";
import Github from "~icons/simple-icons/github";
import Html from "~icons/simple-icons/html5";
import Css from "~icons/simple-icons/css3";
import Tailwind from "~icons/simple-icons/tailwindcss";
import Javascript from "~icons/simple-icons/javascript";
import Vue from "~icons/simple-icons/vuejs";

const iconList = [IconBash, Git, Github, Html, Css, Tailwind, Javascript, Vue];
</script>

<template>
  <div class="skill-icons">
    <component
      v-for="(icon, index) in iconList"
      :key="icon"
      :is="icon"
      class="icon"
      :style="{ animationDelay: index * 0.1 + 1.2 + 's' }"
    ></component>
  </div>
</template>

<style scoped>
.skill-icons {
  margin: 0 auto;
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
}

.icon {
  animation-name: fadeIn, slideIn;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  font-size: 4.5rem;
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
