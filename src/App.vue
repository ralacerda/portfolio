<script setup>
import NavBar from "@/components/NavBar.vue";
import TheHero from "@/components/TheHero.vue";
import SkillsTable from "@/components/SkillsTable.vue";
import ProjectList from "@/components/ProjectList.vue";
import CertificateList from "./components/CertificateList.vue";
import AboutMe from "./components/AboutMe.vue";
import ContactMe from "./components/ContactMe.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <div class="app">
    <NavBar />
    <TheHero />
    <SkillsTable />
    <ProjectList />
    <CertificateList />
    <AboutMe />
    <ContactMe />
    <TheFooter />
  </div>
</template>

<style scoped>
.app {
  background-color: var(--bg);
  transition: background-color 1s;
}

@custom-media --tablet (min-width: 640px);
@custom-media --desktop (min-width: 960px);
</style>
