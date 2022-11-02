<script setup>
const skills = {
  Developer: [
    "Linux",
    "Git",
    "GitHub",
    "Bash scripting",
    "Python scripting",
    "Nodejs",
  ],
  "Front-end": ["HTML5", "CSS3", "Tailwind", "Bootstrap", "Javascript", "Vue"],
  Personal: [
    "Fluent English",
    "Always learning",
    "Problem solver",
    "Avid reader",
    "Open source enthusiast",
    "Detail-oriented",
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
        <div class="header">{{ category }}</div>
        <ul>
          <li v-for="skill in skillList" :key="skill" class="skill">
            {{ skill }}
          </li>
        </ul>
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
  padding-top: 0.8rem;
  margin: 0 auto;
  line-height: 1.6;
}

.header {
  font-size: 1.2rem;
  font-weight: 600;
}
</style>
