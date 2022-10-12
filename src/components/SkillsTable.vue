<script setup>
const skills = {
  Developer: [
    "GNU/Linux",
    "Git",
    "Github",
    "Bash scripting",
    "Python scripting",
  ],
  "Front-end": ["HTML5", "CSS3", "Tailwind", "Javascript", "Vuejs"],
  Personal: [
    "Fluent English",
    "Fast learner",
    "Problem solver",
    "Good looking",
    "Open source enthusiast",
  ],
};
</script>

<template>
  <div id="skills">
    <h2>Skills</h2>
    <div class="skill-grid">
      <div
        v-for="(skillList, category) in skills"
        :key="category"
        class="column"
      >
        <div class="header">{{ category }}</div>
        <div v-for="skill in skillList" :key="skill" class="skill">
          {{ skill }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#skills {
  max-width: 1000px;
  margin: 0 auto;
  height: 80vh;
}

h2 {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 4rem;
  font-family: var(--serif);
  font-weight: 600;
}

.skill-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  justify-items: center;
  font-size: 1.1rem;
  text-align: center;
}

.column {
  width: 30ch;
  border: 0.1rem solid var(--bg-details);
  border-radius: 2%;
  overflow: clip;
}

.skill {
  margin: 0 auto;
  line-height: 3;
  max-width: 25ch;
}

.skill:not(:last-child) {
  border-bottom: 0.1rem solid var(--bg-secondary);
}

.header {
  line-height: 3.5;
  margin: 0 auto;
  background-color: var(--bg-secondary);
  font-weight: 600;
}
</style>
