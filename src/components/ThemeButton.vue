<script setup>
import { useDark, useToggle } from "@vueuse/core";
import IconSun from "~icons/bx/sun";
import IconMoon from "~icons/bx/moon";

const isDark = useDark({ selector: "body" });
const toggleDark = useToggle(isDark);
</script>

<template>
  <div @click="toggleDark()">
    <Transition name="fade" mode="out-in">
      <KeepAlive>
        <component
          :is="isDark ? IconMoon : IconSun"
          class="theme-button"
        ></component>
      </KeepAlive>
    </Transition>
  </div>
</template>

<style scoped>
div {
  display: table-cell;
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.8s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: rotate(-90deg);
}

.fade-leave-to {
  opacity: 0;
  transform: rotate(90deg);
}

.theme-button {
  transform-origin: 50% 70px;
  vertical-align: middle;
  margin: 10px;
  font-size: 1.2rem;
}
</style>
