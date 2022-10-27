<script setup>
import CertificateCard from "./CertificateCard.vue";
import javascriptFCC from "../assets/certificates/freecodecamp_javascript.webp";
import javascriptWeb from "../assets/certificates/freecodecamp_webdesign.webp";
import sololearnJS from "../assets/certificates/sololearn_javascript.webp";
import sololearnRR from "../assets/certificates/sololearn_react.webp";
import sololearnPC from "../assets/certificates/sololearn_pythoncore.webp";
import linkedinAgile from "../assets/certificates/agile.webp";
</script>

<template>
  <section class="content" id="certificates">
    <h2>Certificates</h2>
    <div class="grid">
      <CertificateCard
        title="Javascript"
        provider="Sololearn"
        :img="sololearnJS"
        url="https://www.sololearn.com/certificates/CT-KM0ZBUKV"
      >
      </CertificateCard>

      <CertificateCard
        title="React + Redux"
        provider="Sololearn"
        :img="sololearnRR"
        url="https://www.sololearn.com/certificates/CT-HKASY6WE"
      >
      </CertificateCard>

      <CertificateCard
        title="Python Core"
        provider="Sololearn"
        :img="sololearnPC"
        url="https://www.sololearn.com/certificates/CT-Y83WZJCZ"
      >
      </CertificateCard>

      <CertificateCard
        title="JavaScript Algorithms"
        provider="freeCodeCamp"
        :img="javascriptFCC"
        url="https://www.freecodecamp.org/certification/renatolacerda92/javascript-algorithms-and-data-structures"
      >
      </CertificateCard>

      <CertificateCard
        title="Responsive Web Design"
        provider="freeCodeCamp"
        :img="javascriptWeb"
        url="https://www.freecodecamp.org/certification/renatolacerda92/responsive-web-design"
      >
      </CertificateCard>
      <CertificateCard
        title="Agile Software Development"
        provider="Linkedin"
        :img="linkedinAgile"
        url="https://lnkd.in/dv8phaxB"
      >
      </CertificateCard>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 64px;
  row-gap: 64px;
  justify-items: start;
  margin-bottom: 32px;
}

@media (--tablet) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (--desktop) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
