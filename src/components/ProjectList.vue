<script setup>
import ProjectCard from "./ProjectCard.vue";
import kuhn from "@/assets/projects/kuhn.png";
import f1next from "@/assets/projects/f1next.png";
import portfolio from "@/assets/projects/portfolio.png";
</script>

<template>
  <section class="content">
    <h2>Projects</h2>
    <div class="projects">
      <ProjectCard
        title="Thomas Kuhn Colloquium"
        :imgUrl="kuhn"
        siteUrl="https://ralacerda.github.io/coloquio-kuhn/"
        repoUrl="https://github.com/ralacerda/coloquio-kuhn"
        class="project"
      >
        <p>
          Website created for the academic event Thomas Kuhn Colloquium. It
          includes information about the event location, dates, guests, talks
          and schedule.",
        </p>
        <p>
          Built with <em>Eleventy</em>, <em>AlpineJS</em> and <em>Tailwind</em>,
          hosted on <em>Github Pages</em>
        </p>
      </ProjectCard>

      <ProjectCard
        title="F1 Next"
        :imgUrl="f1next"
        repoUrl="https://github.com/ralacerda/f1next"
        class="project"
      >
        <p>
          A small script written in <em>Python</em> to display information about
          the next Formula 1 Grand Prix from the terminal.
        </p>
        <p>
          It includes flags for showing the full weekend schedule or a countdown
          to the next event.
        </p>
      </ProjectCard>

      <ProjectCard
        title="My Portfolio"
        :imgUrl="portfolio"
        repoUrl="https://github.com/ralacerda/portfolio"
        class="project"
      >
        <p>The portfolio you are visiting right now.</p>
        <p>Built using Vue.js, Vite and PostCSS. Hosted on GitHub Pages</p>
      </ProjectCard>
    </div>
  </section>
</template>

<style></style>
