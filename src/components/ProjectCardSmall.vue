<script setup>
defineProps(["title", "imgUrl", "repoUrl", "siteUrl", "altText"]);
</script>

<template>
  <div class="project">
    <h4 class="title">
      {{ title }}
    </h4>
    <div class="preview-background">
      <a :href="siteUrl ? siteUrl : repoUrl" target="_blank">
        <img :src="imgUrl" :alt="altText" class="project-preview" />
      </a>
    </div>
    <div class="description">
      <slot> </slot>
      <span class="links">
        <a v-if="siteUrl" :href="siteUrl" class="button-link" target="_blank"
          >Visit the website</a
        >
        <a
          :href="repoUrl"
          :class="siteUrl ? 'inline-link' : 'button-link'"
          target="_blank"
          >Source code</a
        >
      </span>
    </div>
  </div>
</template>

<style scoped>
.project {
  margin-bottom: 4rem;
  --screenshot-offset: -4px, -4px;
  margin-right: 64px;
}

.title {
  grid-area: title;
}

.preview-background {
  background-color: var(--danger);
  border-radius: 3px;
  margin-bottom: 1rem;
}

.project-preview {
  box-shadow: 0px 0px 2px 2px var(--shadow);
  transition: box-shadow 200ms, transform 200ms;
  border-radius: 3px;
}

.project-preview:hover,
.project-preview:focus-visible {
  box-shadow: 0px 0px 2px 1px var(--shadow);
  transform: translate(var(--screenshot-offset));
}

.links {
  display: inline-flex;
  row-gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
}

.inline-link {
  margin-left: 1rem;
}

.description > :deep(p) {
  margin-bottom: 16px;
}
</style>
