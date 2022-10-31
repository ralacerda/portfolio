<script setup>
defineProps(["title", "provider", "img", "url"]);
</script>

<template>
  <div>
    <h3 class="certificate-title">{{ title }}</h3>
    <div class="certificate-provider">{{ provider }}</div>

    <div class="certificate-background">
      <a :href="url" target="_blank">
        <img
          class="certificate-image"
          :src="img"
          alt="Verify this certificate"
          loading="lazy"
        />
      </a>
    </div>
  </div>
</template>

<style scoped>
.certificate-title {
  font-size: 1.5rem;
  margin-bottom: 0;
}

.certificate-provider {
  color: var(--fg-details);
  margin-bottom: 1rem;
}
.certificate-image {
  transition: inherit;
  border-radius: 6px;
  box-shadow: 0px 0px 3px var(--shadow);
  transition: transform 200ms;
}

.certificate-text {
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

.certificate-background {
  background-color: var(--danger);
  border-radius: 6px;
}

.certificate-image:hover,
.certificate-image:focus-visible {
  transform: translate(-5px, -5px);
}
</style>
