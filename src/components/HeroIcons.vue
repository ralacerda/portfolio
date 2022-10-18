<script setup>
import IconBash from "~icons/mdi/bash";
import Git from "~icons/mdi/git";
import Github from "~icons/mdi/github";
import Html from "~icons/mdi/language-html5";
import Css from "~icons/mdi/language-css3";
import Sass from "~icons/mdi/sass";
import Javascript from "~icons/mdi/language-javascript";
import Vue from "~icons/mdi/vuejs";
import Baguette from "~icons/mdi/baguette";

const iconList = [
  IconBash,
  Git,
  Github,
  Html,
  Css,
  Sass,
  Javascript,
  Vue,
  Baguette,
];
</script>

<template>
  <component
    v-for="(icon, index) in iconList"
    :key="icon"
    :is="icon"
    class="icon"
    :style="{ animationDelay: index * 0.1 + 1.2 + 's' }"
  ></component>
</template>

<style scoped>
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
