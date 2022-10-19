<script setup>
import Github from "~icons/mdi/github";
import Twitter from "~icons/mdi/twitter";
import Linkedin from "~icons/mdi/linkedin";
import Codepen from "~icons/mdi/codepen";
</script>

<template>
  <section class="content">
    <h2>Contact</h2>
    <p class="contact__text">
      Do think I'm a good fit for your company? Do you have an learning
      opportunity for me? Any feedbacks or questions? Please, let me know!
    </p>

    <p class="contact__text">
      You can e-mail me at
      <a href="mailto:renato.ac.lacerda@gmail.com">
        renato.ac.lacerda@gmail.com
      </a>
    </p>

    <p class="contact__text">You can also find me on these social medias:</p>
    <div class="contact__social">
      <a href="https://github.com/ralacerda"><Github /></a>
      <a href="https://twitter.com/renatoaclacerda"><Twitter /></a>
      <a href="https://www.linkedin.com/in/renato-lacerda-b581aa253/"
        ><Linkedin
      /></a>
      <a href="https://codepen.io/ralacerda"><Codepen /></a>
    </div>
  </section>
</template>

<style>
.contact__text {
  width: 736px;
  margin-bottom: 1rem;
}

.contact__social {
  font-size: 2rem;
  display: flex;
  gap: 1rem;
}

.contact__social *:hover {
  color: var(--danger);
}

.contact_antispam {
  display: none;
}
</style>
