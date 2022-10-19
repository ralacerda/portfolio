<script setup>
import aboutMePicture from "../assets/pictures/about_me.jpeg";
</script>

<template>
  <section class="content">
    <h2>About me</h2>
    <div class="aboutme">
      <img class="aboutme__picture" :src="aboutMePicture" />
      <div class="aboutme__text">
        <p class="aboutme__paragraph">
          Biologist, graduated from the University of São Paulo, finishing my
          Master's degree in Ecology from the University of Campinas, I'm
          changing careers into web development.
        </p>
        <p class="aboutme__paragraph">
          I've always enjoyed programming. During my undergraduate studies, I
          learned how to write python script to automate task, and analyze and
          display data with R, I sharpened those skills during my graduate
          studies. I've been using GNU/Linux as my OS since 2018, which has
          taught me how to use the command line in depth, as well as learning
          how to navigate and solve problems in GNU/Linux.
        </p>
        <p class="aboutme__paragraph">
          Currently, I'm focused on learning Front-end technologies, with a
          solid knowledge of Javascript, HTML5, CSS3, basic notions of React,
          Tailwind and Bootstrap, and advancing my skills in Vue.js and Vite. I
          have experience in creating sites for events, automation scripts in
          Bash and Python, usage in Git and Github, and I've contributed with
          code and documentation for Open Source projects.
        </p>
        <p class="aboutme__paragraph">
          I am a free software enthusiast, board games, computer games and
          Formula 1 fan. I also enjoy cooking and baking bread on weekends.
        </p>
        <p class="aboutme__paragraph">
          I love learning new things, so I'm looking for an opportunity that
          helps me evolve as a developer.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.aboutme {
  margin: 0 auto;
  line-height: 1.6;
  display: grid;
  grid-template-columns: 4fr 2fr;
  grid-template-areas: "text photo";
  column-gap: 32px;
  justify-items: center;
}

.aboutme__paragraph {
  margin-bottom: 16px;
}

.aboutme__text {
  grid-area: text;
}

.aboutme__picture {
  grid-area: photo;
  height: 300px;
  border-radius: 100%;
  box-shadow: 0px 0px 3px 4px var(--hl);
}
</style>
