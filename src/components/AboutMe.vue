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
          I'm a brazilian Biologist, graduated from the University of São Paulo,
          finishing my Master's degree in Ecology from the University of
          Campinas, currently changing careers into web development.
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
          At this moment, I'm focused on learning Front-end technologies. I have
          practical skills of Javascript, HTML5, CSS3, a basic notion of React,
          Tailwind and Bootstrap, and solid knowledge of Vue and Vite. I also
          have experience in creating sites for events, usage of the command
          line, Git, Github, and Python. I've contributed with code and
          documentation for Open Source projects.
        </p>
        <p class="aboutme__paragraph">
          I am a free software enthusiast, board games, computer games and
          Formula 1 fan. I also enjoy cooking and baking bread on weekends.
        </p>
        <p class="aboutme__paragraph">
          I'm looking for an opportunity to help me evolve as a developer. I'm
          excited to learn new skills and to strengthen that ones that I have.
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
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "text text photo";
  }
}

.aboutme__paragraph {
  margin-bottom: 16px;
}

.aboutme__text {
  grid-area: text;
}

.aboutme__picture {
  width: 240px;
  grid-area: photo;
  border-radius: 100%;
  box-shadow: 0px 0px 3px 4px var(--hl);
}
</style>
