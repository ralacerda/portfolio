<script setup>
const skills = {
  Developer: [
    "Linux",
    "Git",
    "Github",
    "Command Line",
    "Bash scripting",
    "Python scripting",
  ],
  "Front-end": ["HTML5", "CSS3", "Tailwind", "Bootstrap", "Javascript", "Vue"],
  Personal: [
    "Fluent English",
    "Avid reader",
    "Always learning",
    "Problem solver",
    "Good communicator",
    "Open source enthusiast",
  ],
};
</script>

<template>
  <section class="skills content" id="skills">
    <h2>Skills</h2>
    <div class="skill-grid">
      <div
        v-for="(skillList, category) in skills"
        :key="category"
        class="column"
      >
        <div class="header skill">{{ category }}</div>
        <div v-for="skill in skillList" :key="skill" class="skill">
          {{ skill }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skill-grid {
  justify-content: start;
  justify-items: start;
  display: grid;
  column-gap: 8px;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1rem;
}

@media (--tablet) {
  .skill-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.column {
  border-radius: 2%;
  overflow: clip;
  height: 100%;
  white-space: nowrap;
}

.skill {
  padding-left: 4px;
  padding-top: 1.2rem;
  margin: 0 auto;
  line-height: 1.4;
  border-bottom: 0.1rem solid var(--bg-secondary);
}

.header {
  font-size: 1.2rem;
  font-weight: 600;
}
</style>
