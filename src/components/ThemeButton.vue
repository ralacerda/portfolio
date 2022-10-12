<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { IconMoonLine, IconSunLine } from "@iconify-prerendered/vue-ri";

const isDark = useDark({ selector: "body" });
const toggleDark = useToggle(isDark);
</script>

<template>
  <div @click="toggleDark()">
    <Transition name="fade" mode="out-in">
      <KeepAlive>
        <component
          :is="isDark ? IconMoonLine : IconSunLine"
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
  transition: opacity 0.5s ease, transform 0.5s ease, color 0.5s;
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
  transform-origin: 50% 50px;
  vertical-align: middle;
  margin: 10px;
}
</style>
