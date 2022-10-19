<script setup>
defineProps(["title", "img", "url"]);
</script>

<template>
  <div>
    <h3 class="certificate-title">{{ title }}</h3>
    <a :href="url">
      <div class="certificate-card">
        <img class="certificate-image" :src="img" />
        <div class="certificate-text">
          <slot></slot>
        </div>
      </div>
    </a>
  </div>
</template>

<style scoped>
.certificate-title {
  font-size: 1rem;
  text-align: center;
}

.certificate-image {
  transition: inherit;
  border-radius: 6px;
  box-shadow: 0px 0px 3px 4px var(--hl);
}

.certificate-text {
  color: var(--neutral-100);
  transition: inherit;
  opacity: 0;
  position: absolute;
  inset: 0;
  display: flex;
  flex-flow: column;
  place-items: center;
  place-content: center;
  height: 100%;
  width: 100%;
  padding: 24px;
  text-align: center;
}

.certificate-card {
  position: relative;
  transition: 0.3s;
}
.certificate-card:hover .certificate-text {
  opacity: 1;
}

.certificate-card:hover .certificate-image {
  filter: brightness(20%);
}
</style>
