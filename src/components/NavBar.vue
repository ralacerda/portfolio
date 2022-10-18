<script setup>
import ThemeButton from "@/components/ThemeButton.vue";
</script>

<template>
  <div class="navbar">
    <div class="navbar-items content">
      <div>
        <a href="#" class="navbar-link">Intro</a>
        <a href="#" class="navbar-link">Skills</a>
        <a href="#" class="navbar-link">Projects</a>
        <a href="#" class="navbar-link">Certificates</a>
        <a href="#" class="navbar-link">About me</a>
        <a href="#" class="navbar-link">Contact</a>
      </div>
      <ThemeButton />
    </div>
  </div>
</template>

<style>
.navbar {
  overflow: clip;
  background-color: var(--bg);
  transition: background-color 1s;
  padding: 6px 0;
  position: sticky;
  z-index: 10;
  top: 0;
  border-bottom: solid 1px var(--bg-details);
}

.navbar-items {
  font-size: 1.2rem;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-link {
  background: linear-gradient(var(--danger) 0 0) calc(100% - var(--p, 0%)) 75% /
    var(--p, 0%) 2px no-repeat;
  text-decoration: none;
  color: var(--fg);
  transition: 250ms, background-position 0s, color 0s;
  margin-right: 3rem;
  font-family: var(--serif);
}

.navbar-link:hover {
  --p: 100%;
}
</style>
