<script setup>
import HeroIcons from "@/components/HeroIcons.vue";
import Avatar from "@/assets/avatar.png";
</script>

<template>
  <section class="content" id="intro">
    <div class="hero">
      <img class="avatar" :src="Avatar" />
      <div>
        <h1 class="name">Hi, I'm Renato</h1>
        <div class="position">
          Looking for a learning opportunity as Front-end developer
        </div>
      </div>
    </div>
    <HeroIcons />
  </section>
</template>

<style scoped>
.name {
  font-size: 3.5rem;
  opacity: 0;
  animation: 0.4s ease-out 0.4s forwards fadeIn;
  font-weight: 600;
}
.position {
  opacity: 0;
  font-size: 2.5rem;
  color: var(--fg);
  animation: 0.4s ease-out 0.8s forwards fadeIn;
  position: relative;
  display: block;
  max-width: fit-content;
  overflow: hidden;
  line-height: 1.2;
}

.hero {
  margin: 6rem 0;
  display: grid;
  align-items: center;
  place-content: center;
  grid-template-columns: 1fr 1fr;
  column-gap: 48px;
  font-family: var(--display);
  background-color: var(--bg);
  transition: background-color 1s;
}

.avatar {
  justify-self: right;
  box-shadow: 4px -8px 0 8px var(--danger);
  background-color: var(--danger);
  border-radius: 100%;
  opacity: 0;
  animation: 0.4s ease-out forwards fadeIn;
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
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
