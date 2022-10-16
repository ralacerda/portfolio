<script setup>
defineProps(["title", "imgUrl", "repoUrl", "siteUrl"]);
</script>

<template>
  <div class="project">
    <h3 class="title">
      {{ title }}
    </h3>

    <div class="description">
      <slot> </slot>
      <div class="links">
        <a v-if="siteUrl" :href="siteUrl" class="button-link">Live website</a>
        <a :href="repoUrl" class="inline-link">Code repository</a>
      </div>
    </div>

    <div class="preview-background">
      <a href="https://ralacerda.github.io/coloquio-kuhn/">
        <img :src="imgUrl" alt="Project Screenshot" class="project-preview" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.project {
  margin-top: 4rem;
  margin-bottom: 8rem;
  --screenshot-offset: -12px, -12px;
  display: grid;
  grid-template-columns: 5fr 4fr;
  grid-template-areas:
    "title screenshot"
    "description screenshot ";
  align-items: start;
  grid-template-rows: auto 1fr;
  row-gap: 28px;
  column-gap: 120px;
}

.project:nth-child(even) {
  --screenshot-offset: 12px, -12px;
  grid-template-columns: 4fr 5fr;
  grid-template-areas:
    "screenshot title"
    "screenshot description";
}

.title {
  grid-area: title;
  text-align: center;
}

.preview-background {
  background-color: var(--danger);
  grid-area: screenshot;
  align-self: start;
}

.project-preview {
  box-shadow: 0px 0px 0px 0px rgb(0, 0, 0, 0);
  transition: box-shadow 200ms, transform 200ms;
}

.project-preview:hover {
  box-shadow: 3px 3px 6px 0 rgb(0, 0, 0, 0.2);
  transform: translate(var(--screenshot-offset));
}

.links {
  text-align: center;
  margin-top: 2rem;
}

.links > * {
  margin-right: 2rem;
}

.description {
  grid-area: description;
}

.description > :deep(p) {
  margin-bottom: 16px;
}
</style>
