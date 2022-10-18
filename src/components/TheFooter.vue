<script setup>
import Github from "~icons/mdi/github";
import Linkedin from "~icons/mdi/linkedin";
import Twitter from "~icons/mdi/twitter";
import Codepen from "~icons/mdi/codepen";
</script>

<template>
  <div class="footer">
    <div class="footer__content content">
      <div class="social-media">
        <a href="#" class="social-media__link"><Github /></a>
        <a href="#" class="social-media__link"><Linkedin /></a>
        <a href="#" class="social-media__link"><Twitter /></a>
        <a href="#" class="social-media__link"><Codepen /></a>
      </div>
      <div class="email">renato.ac.lacerda@gmail.com</div>
    </div>
  </div>
</template>

<style>
.footer {
  background-color: var(--bg-secondary);
  box-shadow: 0px 0 2px 0px #00000060;
}

.footer__content {
  display: flex;
  flex-direction: column;
}

.social-media {
  margin: 0.7rem 0;
  font-size: 2rem;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 1rem;
}

.social-media__link {
  display: grid;
  align-items: center;
  color: var(--neutral-fg);
}

.social-media__link:hover {
  color: var(--danger);
}

.email {
  text-align: center;
}
</style>
