<script setup>
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
          >Visit the website</a
        >
        <a
          :href="repoUrl"
          :class="siteUrl ? 'inline-link' : 'button-link'"
          target="_blank"
          >See the source code</a
        >
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
  row-gap: 16px;
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

.project:last-child {
  margin-bottom: 0;
}

.title {
  grid-area: title;
}

.preview-background {
  background-color: var(--danger);
  grid-area: screenshot;
  align-self: start;
  border-radius: 3px;
}

.project-preview {
  box-shadow: 0px 0px 2px 2px var(--hl);
  transition: box-shadow 200ms, transform 200ms;
  border-radius: 3px;
}

.project-preview:hover,
.project-preview:focus-visible {
  box-shadow: 0px 0px 4px 2px var(--hl);
  transform: translate(var(--screenshot-offset));
}

.links {
  margin-top: 2rem;
  display: flex;
  flex-flow: column;
  row-gap: 2rem;
  column-gap: 2rem;
  align-items: center;
}

@media (--tablet) {
  .links {
    flex-flow: row;
  }
}
.description {
  grid-area: description;
  margin-right: 8px;
}

.description > :deep(p) {
  margin-bottom: 16px;
}
</style>
