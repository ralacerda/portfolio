<script setup>
import OpenInNew from "~icons/mdi/open-in-new";

defineProps(["title", "imgUrl", "repoUrl", "siteUrl", "altText"]);
</script>

<template>
  <div class="project">
    <h4 class="title">
      {{ title }}
    </h4>
    <div class="preview-background">
      <a :href="siteUrl ? siteUrl : repoUrl" target="_blank">
        <img
          :src="imgUrl"
          :alt="altText"
          class="project-preview"
          loading="lazy"
        />
      </a>
    </div>
    <div class="description">
      <slot> </slot>
      <span class="links">
        <a v-if="siteUrl" :href="siteUrl" class="button-link" target="_blank"
          >Visit the website
          <OpenInNew style="font-size: 0.8rem; color: var(--fg-details)"
        /></a>
        <a
          :href="repoUrl"
          :class="siteUrl ? 'inline-link' : 'button-link'"
          target="_blank"
          >Source code
          <OpenInNew style="font-size: 0.8rem; color: var(--fg-details)" />
        </a>
      </span>
    </div>
  </div>
</template>

<style scoped>
.project {
  display: grid;
  margin-bottom: 4rem;
  --screenshot-offset: -4px, -4px;
  margin-right: 64px;
  column-gap: 32px;
  align-items: start;
  grid-template-columns: 1fr;
  grid-template-areas:
    "title"
    "screenshot"
    "description";
}

@media (--tablet) {
  .project {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "title title"
      "screenshot description";
  }
}

@media (--desktop) {
  .project {
    grid-template-columns: 33% 33%;
  }
}

.title {
  grid-area: title;
}

.preview-background {
  grid-area: screenshot;
  background-color: var(--danger);
  border-radius: 3px;
  margin-bottom: 1rem;
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
