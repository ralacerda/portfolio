<script setup>
import ProjectCard from "./ProjectCard.vue";
import kuhn from "@/assets/projects/kuhn.webp";
import f1next from "@/assets/projects/f1next.webp";
import portfolio from "@/assets/projects/portfolio.webp";
</script>

<template>
  <section class="content" id="projects">
    <h2>Projects</h2>
    <div class="projects">
      <ProjectCard
        title="Thomas Kuhn Colloquium"
        :imgUrl="kuhn"
        siteUrl="https://ralacerda.github.io/coloquio-kuhn/"
        repoUrl="https://github.com/ralacerda/coloquio-kuhn"
        class="project"
        altText="Thomas Kuhn Colloquium website"
      >
        <p>Website created for the academic event Thomas Kuhn Colloquium.</p>
        <p>
          Built with Eleventy, AlpineJS and Tailwind, hosted on Github Pages
        </p>
      </ProjectCard>

      <ProjectCard
        title="Portfolio"
        :imgUrl="portfolio"
        repoUrl="https://github.com/ralacerda/portfolio"
        class="project"
        altText="This portfolio GitHub page"
      >
        <p>Built using Vue.js, Vite and PostCSS. Hosted on Netlify</p>
      </ProjectCard>

      <ProjectCard
        title="F1 Next"
        :imgUrl="f1next"
        repoUrl="https://github.com/ralacerda/f1next"
        class="project"
        altText="F1 Next github page"
      >
        <p>
          A small script written in Python to display information about the next
          Formula 1 Grand Prix from the terminal.
        </p>
      </ProjectCard>
    </div>
  </section>
</template>

<style></style>
