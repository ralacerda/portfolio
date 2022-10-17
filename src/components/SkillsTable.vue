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
    "Avid reader",
    "Always learning",
    "Problem solver",
    "Good communicator",
    "Open source enthusiast",
  ],
};
</script>

<template>
  <div class="skills content">
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
  </div>
</template>

<style scoped>
.skill-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  justify-items: center;
  align-content: center;
  margin: 0 auto;
  font-size: 1.1rem;
  text-align: center;
  height: 60vh;
  max-width: 50vw;
}

.column {
  width: 30ch;
  border: 0.1rem solid var(--bg-details);
  border-radius: 2%;
  overflow: clip;
  height: 100%;
  box-shadow: 0 0 18px var(--hl);
}

.skill {
  margin: 0 auto;
  line-height: 3.5;
  max-width: 25ch;
}

.skill:not(:last-child) {
  border-bottom: 0.1rem solid var(--bg-secondary);
}

.header {
  font-size: 1.2rem;
  font-weight: 600;
  border-bottom: 0.1rem solid var(--danger);
}
</style>
