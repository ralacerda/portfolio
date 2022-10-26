<script setup>
import ThemeButton from "@/components/ThemeButton.vue";
import OpenNav from "~icons/dashicons/menu-alt";
import CloseNav from "~icons/dashicons/no";
import { useToggle } from "@vueuse/core";
import { useWindowScroll } from "@vueuse/core";

const { y } = useWindowScroll();
const [showNav, toggleNav] = useToggle(false);

const sections = {
  "#skills": "Skills",
  "#projects": "Projects",
  "#certificates": "Certificates",
  "#aboutme": "About me",
  "#contactme": "Contact",
};
</script>

<template>
  <nav class="navbar" :class="[y > 0 ? 'navbar_shadow' : '']">
    <div class="content navbar__flex">
      <header class="navbar__title">
        <a href="#intro" class="navbar__link" @click.left="showNav = false">
          Renato Lacerda
        </a>
        <button
          class="navButton"
          @click="toggleNav()"
          aria-label="Toggle navigation menu"
        >
          <component :is="showNav ? CloseNav : OpenNav" />
        </button>
      </header>
      <div class="navbar__navigation">
        <a
          v-for="(name, id) in sections"
          class="navbar__link"
          :key="id"
          :href="id"
          @click.left="showNav = false"
        >
          {{ name }}</a
        >
        <ThemeButton class="navbar__button" />
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  overflow: hidden;
  background-color: var(--bg);
  transition: background-color 1s, box-shadow 500ms;
  position: fixed;
  z-index: 10;
  inset: 0 0 auto 0;
  height: v-bind("showNav ? 'auto' : '4rem'");
  box-shadow: 0px 0px 4px 2px var(--hl);
  max-height: 100%;
}

@media (--desktop) {
  .navbar {
    visibility: visible;
    box-shadow: unset;
  }
}

.navbar_shadow {
  box-shadow: 0px 0px 4px 2px var(--hl);
}

.navButton {
  height: 2rem;
  width: 2rem;
  display: flex;
  place-items: center;
  border: none;
  background-color: var(--bg);
  color: var(--fg);
  cursor: pointer;
}

.navbar__flex {
  display: flex;
  flex-flow: column;
  justify-items: center;
}

.navbar__title {
  height: 100%;
  font-size: 1.4rem;
  font-weight: 600;
  flex-shrink: 0;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__navigation {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 1rem;
  justify-content: space-between;
  font-size: 1.2rem;
}

.navbar__button {
  width: 44px;
  height: 44px;
}

.navbar__button {
  justify-self: center;
  display: flex;
  align-items: center;
  cursor: pointer;
}

@media (--desktop) {
  .navButton {
    display: none;
  }

  .navbar__flex {
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-items: flex-start;
  }

  .navbar__navigation {
    margin-top: 0;
    width: 100%;
    flex-direction: row;
    column-gap: 2rem;
    justify-content: space-around;
    align-items: center;
  }
}
.navbar__link {
  background: linear-gradient(var(--danger) 0 0) calc(100% - var(--p, 0%)) 80% /
    var(--p, 0%) 2px no-repeat;
  text-decoration: none;
  color: var(--fg);
  transition: 250ms, background-position 0s, color 0s;
  white-space: nowrap;
}

.navbar__link:hover,
.navbar__link:focus-visible {
  --p: 100%;
}
</style>
