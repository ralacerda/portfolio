<script setup>
import ThemeButton from "@/components/ThemeButton.vue";
</script>

<template>
  <nav class="navbar">
    <div class="navbar__items content">
      <header class="navbar__title">
        <a href="#intro" class="navbar__link">Renato Lacerda</a>
      </header>
      <div class="navbar__navigation">
        <a href="#skills" class="navbar__link">Skills</a>
        <a href="#projects" class="navbar__link">Projects</a>
        <a href="#certificates" class="navbar__link">Certificates</a>
        <a href="#aboutme" class="navbar__link">About me</a>
        <a href="#contactme" class="navbar__link">Contact</a>
      </div>
      <ThemeButton class="navbar__button" />
    </div>
  </nav>
</template>

<style>
.navbar {
  overflow: clip;
  background-color: var(--bg);
  transition: background-color 1s;
  position: sticky;
  z-index: 10;
  top: 0;
  border-bottom: solid 1px var(--bg-details);
  box-shadow: 0px 0px 2px 0px var(--hl);
}

.navbar__title {
  font-size: 1.4rem;
  font-weight: 600;
  grid-column: span 2;
}

.navbar__items {
  height: 4rem;
  display: grid;
  grid-auto-flow: column;
  column-gap: 8px;
  align-items: center;
  grid-template-columns: repeat(8, 1fr);
}

.navbar__navigation {
  grid-column: span 5;
  display: flex;
  gap: 2rem;
  align-items: center;
  font-size: 1.2rem;
}

.navbar__button {
  height: 100%;
  width: 100%;
  justify-self: center;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.navbar__link {
  background: linear-gradient(var(--danger) 0 0) calc(100% - var(--p, 0%)) 75% /
    var(--p, 0%) 2px no-repeat;
  text-decoration: none;
  color: var(--fg);
  transition: 250ms, background-position 0s, color 0s;
  font-family: var(--serif);
}

.navbar__link:hover,
.navbar__link:focus-visible {
  --p: 100%;
}
</style>
