<script setup>
import Github from "~icons/mdi/github";
import Twitter from "~icons/mdi/twitter";
import Linkedin from "~icons/mdi/linkedin";
import Codepen from "~icons/mdi/codepen";
</script>

<template>
  <section class="content" id="contactme">
    <h2>Contact</h2>
    <p class="contact__text">
      Do think I'm a good fit for your company? <br />
      Do you have an learning opportunity for me? <br />
      Any feedbacks or questions? Please, let me know!
    </p>

    <p class="contact__text">
      You can e-mail me at
      <a href="mailto:renato.ac.lacerda@gmail.com">
        renato.ac.lacerda@gmail.com
      </a>
    </p>

    <p class="contact__text">You can also find me on these social medias:</p>
    <div class="contact__social">
      <a
        href="https://github.com/ralacerda"
        target="_blank"
        aria-label="Visite my GitHub page"
        ><Github
      /></a>
      <a
        href="https://twitter.com/renatoaclacerda"
        target="_blank"
        aria-label="Visite my Twitter page"
        ><Twitter
      /></a>
      <a
        href="https://www.linkedin.com/in/renato-lacerda-b581aa253/"
        target="_blank"
        aria-label="Visite my Linkedin page"
        ><Linkedin
      /></a>
      <a
        href="https://codepen.io/ralacerda"
        target="_blank"
        aria-label="Visite my Codepen page"
        ><Codepen
      /></a>
    </div>
  </section>
</template>

<style scoped>
.contact__text {
  margin-bottom: 1rem;
}

@media (--tablet) {
  .contact__text {
    width: 66%;
  }
}

.contact__social {
  font-size: 2rem;
  display: flex;
  gap: 1rem;
}

.contact__social *:hover,
.contact__social *:focus-visible {
  color: var(--danger);
}

.contact_antispam {
  display: none;
}
</style>
