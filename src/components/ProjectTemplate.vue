<script setup></script>

<template>
  <h3>
    <slot name="name"></slot>
  </h3>
  <div class="flow">
    <slot name="description"></slot>
    <slot name="image"></slot>
  </div>
</template>

<style scoped></style>
