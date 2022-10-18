<script setup>
import HeroIcons from "@/components/HeroIcons.vue";
import Avatar from "@/assets/avatar.png";
</script>

<template>
  <div class="hero">
    <img class="avatar" :src="Avatar" />
    <div>
      <h1 class="name">Hi, I'm Renato</h1>
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
  display: grid;
  margin: auto auto;
  padding-top: calc(10vh - 2.5rem);
  grid-template-columns: repeat(2, calc(1200px / 2));
  grid-template-rows: 5fr 4fr;
  height: calc(100vh - 2.5rem);
  align-items: center;
  place-content: center;
  column-gap: 90px;
  row-gap: 40px;
  font-family: var(--display);
  background-color: var(--bg);
  transition: background-color 1s;
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
  height: 100%;
  justify-self: right;
  box-shadow: 4px -8px 0 10px var(--danger);
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
