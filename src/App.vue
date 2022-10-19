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
  <NavBar />
  <TheHero />
  <SkillsTable />
  <ProjectList />
  <CertificateList />
  <AboutMe />
  <ContactMe />
  <TheFooter />
</template>
