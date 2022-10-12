<script setup>
import HeroIcons from "./HeroIcons.vue";
</script>

<template>
  <div class="hero">
    <img src="../assets/avatar.png" />
    <div>
      <div class="name">Olá, eu sou o Renato</div>
      <div class="position">Desenvolver Front-end</div>
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
}
.position {
  opacity: 0;
  font-size: 2.5rem;
  color: var(--fg);
  animation: 0.7s ease-out 2s forwards fadeIn;
}

.hero {
  max-width: 1400px;
  margin: 0 auto;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;
}

.skills {
  display: flex;
  grid-column: 1 / -1;
  justify-self: center;
  align-self: start;
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
</style>
