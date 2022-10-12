<script setup>
import HeroIcons from "./HeroIcons.vue";
</script>

<template>
  <div class="hero">
    <img src="../assets/avatar.png" />
    <div>
      <div class="name">Hi, I'm Renato</div>
      <div class="position">Front-end developer</div>
    </div>
    <div class="skills">
      <HeroIcons />
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

.hero {
  max-width: 1400px;
  margin: 90px auto 20px;
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

img {
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
