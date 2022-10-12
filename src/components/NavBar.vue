<script setup>
import ThemeButton from "./ThemeButton.vue";
</script>

<template>
  <div class="navbar">
    <div class="navbar-items">
      <div>
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
  transition: background-color 1s ease;
  margin-top: 5px;
}

.navbar-items {
  font-size: 1.2rem;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.2rem;
}

.navbar-link {
  text-decoration: none;
  margin-right: 3rem;
  font-family: var(--serif);
  color: var(--fg);
}

.navbar-link:hover {
  border-bottom: 2px solid var(--danger);
  display: inline-block;
  line-height: 1;
}
</style>
