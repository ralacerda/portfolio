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
  <div class="grid-2">
    <div>a</div>
    <div>a</div>
  </div>
  <div class="grid-3">
    <div>a</div>
    <div>a</div>
    <div>a</div>
  </div>
  <div class="grid-12">
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
  </div>

  <NavBar />
  <TheHero />
  <SkillsTable />
  <ProjectList />
  <CertificateList />
  <AboutMe />
  <ContactMe />
  <TheFooter />
</template>

<style>
.grid-2 {
  position: absolute;
  inset: 0;
  margin: auto auto;
  justify-content: center;
  display: grid;
  max-width: 1240px;
  column-gap: 48px;
  grid-template-columns: repeat(2, 1fr);
  opacity: 0;
}

.grid-3 {
  position: absolute;
  inset: 0;
  margin: auto auto;
  justify-content: center;
  display: grid;
  max-width: 1240px;
  column-gap: 32px;
  grid-template-columns: repeat(3, 1fr);
  opacity: 0;
}

.grid-12 {
  position: absolute;
  inset: 0;
  margin: auto auto;
  justify-content: center;
  display: grid;
  max-width: 1240px;
  column-gap: 8px;
  grid-template-columns: repeat(12, 1fr);
  opacity: 0;
}
</style>
