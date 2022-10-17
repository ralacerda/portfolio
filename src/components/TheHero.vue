<script setup>
import HeroIcons from "@/components/HeroIcons.vue";
import Avatar from "@/assets/avatar.png";
</script>

<template>
  <div class="hero-bg">
    <div class="hero content">
      <img :src="Avatar" class="avatar" />
      <div>
        <h1 class="name">Hi, I'm Renato</h1>
        <div class="position">Front-end developer</div>
      </div>
      <div class="skills">
        <HeroIcons />
      </div>
    </div>
  </div>
</template>

<style scoped>
.name {
  font-size: 3.5rem;
  opacity: 0;
  animation: 0.7s ease-out 1.5s forwards fadeIn;
  font-weight: 600;
}
.position {
  opacity: 0;
  font-size: 2.5rem;
  color: var(--fg);
  animation: 0.7s ease-out 2s forwards fadeIn;
  position: relative;
  display: block;
  max-width: fit-content;
  overflow: hidden;
}

.position::after {
  content: "";
  position: absolute;
  bottom: 0.6rem;
  left: 0;
  width: 100%;
  height: 0.1rem;
  background-color: var(--danger);
  transform: translateX(-100%);
  animation: 0.9s 2.3s forwards slideIn;
}

.hero-bg {
  background-color: var(--bg);
  transition: background-color 1s;
}

.hero {
  padding-top: 90px;
  padding-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50vh 30vh;
  align-items: center;
  gap: 60px;
  font-family: var(--display);
}

.skills {
  display: flex;
  grid-column: 1 / -1;
  justify-self: center;
  align-self: center;
  justify-content: space-around;
  width: 80%;
  flex-wrap: wrap;
}

.avatar {
  height: 400px;
  justify-self: right;
  box-shadow: 4px -8px 0 9px var(--danger);
  background-color: var(--danger);
  border-radius: 100%;
  opacity: 0;
  animation: 0.7s ease-out 1s forwards fadeIn;
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
