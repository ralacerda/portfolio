<script setup>
import ProjectCard from "./ProjectCard.vue";
import ProjectCardSmall from "./ProjectCardSmall.vue";
import kuhn from "@/assets/projects/kuhn.webp";
import f1next from "@/assets/projects/f1next.webp";
import portfolio from "@/assets/projects/portfolio.webp";
import fem_preview from "@/assets/projects/fem_preview.webp";
import fem_qrcode from "@/assets/projects/fem_qrcode.webp";
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
        <ul class="project-tools">
          <li>Eleventy</li>
          <li>AlpineJS</li>
          <li>Tailwind</li>
          <li>Hosted on Github Pages</li>
        </ul>
      </ProjectCard>

      <ProjectCard
        title="Portfolio"
        :imgUrl="portfolio"
        repoUrl="https://github.com/ralacerda/portfolio"
        class="project"
        altText="This portfolio GitHub page"
      >
        <p>A portfolio to show case my projects, skills and experiences.</p>
        <ul class="project-tools">
          <li>Vue</li>
          <li>Vite</li>
          <li>PostCSS</li>
          <li>Hosted on Netlify</li>
        </ul>
      </ProjectCard>
    </div>
    <h3>Other Projects</h3>
    <div class="other-projects">
      <ProjectCardSmall
        title="Product Preview"
        :imgUrl="fem_preview"
        repoUrl="https://github.com/ralacerda/product-preview-card"
        siteUrl="https://ralacerda.github.io/product-preview-card/"
        class="project"
        altText="Product Preview challenge screenshot"
      >
        <p>A Front-end Mentor challenge to implement the design provided.</p>
        <ul class="project-tools">
          <li>HTML</li>
          <li>CSS</li>
          <li>Responsive Design</li>
        </ul>
      </ProjectCardSmall>

      <ProjectCardSmall
        title="QR Code"
        :imgUrl="fem_qrcode"
        repoUrl="https://github.com/ralacerda/frondend-qr-code"
        siteUrl="https://ralacerda.github.io/frondend-qr-code/"
        class="project"
        altText="QR Code challenge screenshot"
      >
        <p>A Front-end Mentor challenge to implement the design provided.</p>
        <ul class="project-tools">
          <li>HTML</li>
          <li>CSS</li>
          <li>Responsive Design</li>
        </ul>
      </ProjectCardSmall>

      <ProjectCardSmall
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
        <ul class="project-tools">
          <li>Python</li>
          <li>Rest API</li>
        </ul>
      </ProjectCardSmall>
    </div>
  </section>
</template>

<style scoped>
.project-tools {
  padding-left: 0;
}
.project-tools li {
  list-style-position: inside;
}

.project-tools li::marker {
  color: var(--danger);
}
</style>
