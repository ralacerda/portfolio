<script setup>
import HeroIcons from "@/components/HeroIcons.vue";
import Avatar from "@/assets/avatar.webp";
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
        <div class="cta">
          <a href="#projects" class="button-link"> See my projects </a>
        </div>
      </div>
    </div>
    <HeroIcons />
  </section>
</template>

<style scoped>
.cta {
  margin-top: 2rem;
  font-size: 1.5rem;
  animation: 0.4s ease-out 1.2s forwards fadeIn;
  opacity: 0;
}

.name {
  font-size: 2.5rem;
  opacity: 0;
  animation: 0.4s ease-out 0.4s forwards fadeIn;
  font-weight: 600;
  margin-bottom: 1rem;
}
.position {
  opacity: 0;
  font-size: 1.5rem;
  color: var(--fg);
  animation: 0.4s ease-out 0.8s forwards fadeIn;
  position: relative;
  display: block;
  max-width: fit-content;
  overflow: hidden;
}

.hero {
  text-align: center;
  margin-bottom: 4rem;
  line-height: 1.1;
  display: grid;
  align-items: center;
  place-content: center;
  grid-template-columns: 1fr;
  column-gap: 48px;
  row-gap: 16px;
  font-family: var(--display);
  background-color: var(--bg);
  transition: background-color 1s;
}

.avatar {
  justify-self: center;
  box-shadow: 4px -8px 0 8px var(--danger);
  background-color: var(--danger);
  border-radius: 100%;
  opacity: 0;
  animation: 0.4s ease-out forwards fadeIn;
}

@media (--tablet) {
  .hero {
    text-align: left;
    grid-template-columns: 1fr 1fr;
  }
  .avatar {
    justify-self: right;
  }
}

@media (--desktop) {
  .hero {
    margin: 6rem 0;
  }
  .name {
    font-size: 3.5rem;
  }
  .position {
    font-size: 2.5rem;
  }
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
