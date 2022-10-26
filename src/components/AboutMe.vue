<script setup>
import aboutMePicture from "../assets/pictures/about_me.webp";
</script>

<template>
  <section class="content" id="aboutme">
    <h2>About me</h2>
    <div class="aboutme">
      <img
        class="aboutme__picture"
        :src="aboutMePicture"
        alt="Renato crouching on high grass while looking through binoculars"
      />
      <div class="aboutme__text">
        <p class="aboutme__paragraph">
          I'm a Brazilian biologist, who graduated from the University of São
          Paulo, finishing my Master's degree in Ecology from the University of
          Campinas, and currently changing careers to web development.
        </p>
        <p class="aboutme__paragraph">
          I learned python scripting and data analysis with R during my
          undergraduate studies, sharpening those skills during my graduate
          studies.
        </p>
        <p class="aboutme__paragraph">
          I've been using GNU/Linux since 2018, which has taught me how to use
          the command line in-depth, navigate and solve problems with the
          Operating System.
        </p>
        <p class="aboutme__paragraph">
          At this moment, I'm focused on Front-end development. I have practical
          knowledge of Javascript, HTML5, CSS3, and Vuejs. I also have
          experience creating sites for events, and using the command line, Git,
          Github, and Python. I've contributed code and documentation for Open
          Source projects.
        </p>
        <p class="aboutme__paragraph">
          I am a free software enthusiast, board games, computer games, and
          Formula 1 fan. I also enjoy cooking and baking bread on weekends.
        </p>
        <p class="aboutme__paragraph">
          I'm looking for an opportunity to help me evolve as a developer. I'm
          excited to learn new skills and strengthen those that I have.
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
  grid-template-columns: 1fr;
  grid-template-areas: "photo" "text";
  row-gap: 2rem;
  column-gap: 8px;
}

@media (--tablet) {
  .aboutme {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "text photo";
  }
}

.aboutme__paragraph {
  margin-bottom: 16px;
}

.aboutme__text {
  grid-area: text;
}

.aboutme__picture {
  max-width: 360px;
  grid-area: photo;
  border-radius: 100%;
  box-shadow: 0px 0px 3px 4px var(--shadow);
}

@media (--tablet) {
  .aboutme__picture {
    justify-self: center;
  }
}
</style>
