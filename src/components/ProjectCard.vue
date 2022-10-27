<script setup>
import OpenInNew from "~icons/mdi/open-in-new";

defineProps(["title", "imgUrl", "repoUrl", "siteUrl", "altText"]);
</script>

<template>
  <div class="project">
    <h3 class="title">
      {{ title }}
    </h3>

    <div class="description">
      <slot> </slot>
      <div class="links">
        <a v-if="siteUrl" :href="siteUrl" class="button-link" target="_blank"
          >Visit the website<OpenInNew style="font-size: 0.8rem"
        /></a>
        <a
          :href="repoUrl"
          :class="siteUrl ? 'inline-link' : 'button-link'"
          target="_blank"
          >Source code<OpenInNew style="font-size: 0.8rem"
        /></a>
      </div>
    </div>

    <div class="preview-background">
      <a :href="siteUrl ? siteUrl : repoUrl" target="_blank">
        <img :src="imgUrl" :alt="altText" class="project-preview" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.project {
  margin-bottom: 4rem;
  --screenshot-offset: -12px, -12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "title"
    "screenshot"
    "description";

  align-items: start;
  grid-template-rows: auto 1fr;
  column-gap: 8px;
}

@media (--tablet) {
  .project {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "title screenshot"
      "description screenshot ";
  }
}

.title {
  grid-area: title;
}

.preview-background {
  background-color: var(--danger);
  grid-area: screenshot;
  align-self: start;
  border-radius: 3px;
  margin-bottom: 1.5rem;
}

.project-preview {
  box-shadow: 0px 0px 4px var(--shadow);
  transition: box-shadow 200ms, transform 200ms;
  border-radius: 3px;
}

.project-preview:hover,
.project-preview:focus-visible {
  transform: translate(var(--screenshot-offset));
}

.links {
  margin-top: 1rem;
  display: flex;
  row-gap: 1rem;
  flex-wrap: wrap;
  flex-shrink: 0;
  column-gap: 2rem;
  align-items: center;
}

.description {
  grid-area: description;
}

@media (--tablet) {
  .description {
    margin-right: 64px;
  }
}

.description > :deep(p) {
  margin-bottom: 16px;
}
</style>
