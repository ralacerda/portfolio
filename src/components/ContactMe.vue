<script setup>
import Github from "~icons/mdi/github";
import Twitter from "~icons/mdi/twitter";
import Linkedin from "~icons/mdi/linkedin";
import Codepen from "~icons/mdi/codepen";
</script>

<template>
  <section class="content">
    <h2>Contact</h2>
    <p class="contact_text">
      Do think I'm a good fit for your company? Do you have an learning
      opportunity for me? Any feedbacks or questions? Please, let me know! You
      can contact me using the form bellow:
    </p>
    <div class="contact_email">renato.ac.lacerda@gmail</div>
    <p class="contact_text">You can also find me on these websites:</p>
    <div class="contact__social">
      <a href="#"><Github /></a>
      <a href="#"><Twitter /></a>
      <a href="#"><Linkedin /></a>
      <a href="#"><Codepen /></a>
    </div>
  </section>
</template>

<style>
.contact__social {
  font-size: 2rem;
  display: flex;
  gap: 1rem;
}

.contact__social *:hover {
  color: var(--danger);
}
</style>
