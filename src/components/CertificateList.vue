<script setup>
import CertificateCard from "./CertificateCard.vue";
import javascriptFCC from "../assets/certificates/freecodecamp_javascript.png";
import sololearnJS from "../assets/certificates/sololearn_javascript.png";
import sololearnRR from "../assets/certificates/sololearn_react.png";
import sololearnPC from "../assets/certificates/sololearn_pythoncore.png";
</script>

<template>
  <h2>Certificates</h2>
  <div class="content grid">
    <CertificateCard
      title="Javascript"
      :img="sololearnJS"
      url="https://www.sololearn.com/certificates/CT-KM0ZBUKV"
      class="sololearn"
    >
      Given by X. To aquire this certificated, I solved 5 projects solutions can
      be found on the link.
    </CertificateCard>

    <CertificateCard
      title="React + Redux"
      :img="sololearnRR"
      url="https://www.sololearn.com/certificates/CT-HKASY6WE"
      class="sololearn"
    >
      Given by X. To aquire this certificated, I solved 5 projects solutions can
      be found on the link.
    </CertificateCard>

    <CertificateCard
      title="Python Core"
      :img="sololearnPC"
      url="https://www.sololearn.com/certificates/CT-Y83WZJCZ"
      class="sololearn"
    >
      Given by X. To aquire this certificated, I solved 5 projects solutions can
      be found on the link.
    </CertificateCard>

    <CertificateCard
      title="JavaScript Algorithms"
      :img="javascriptFCC"
      url="https://www.freecodecamp.org/certification/renatolacerda92/javascript-algorithms-and-data-structures"
      class="freecodecamp right"
    >
      Given by X. To aquire this certificated, I solved 5 projects solutions can
      be found on the link.
    </CertificateCard>

    <CertificateCard
      title="Responsive Web Design"
      :img="javascriptFCC"
      url="https://www.freecodecamp.org/certification/renatolacerda92/responsive-web-design"
      class="freecodecamp left"
    >
      Given by X. To aquire this certificated, I solved 5 projects solutions can
      be found on the link.
    </CertificateCard>
  </div>
</template>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 32px;
  row-gap: 64px;
  justify-items: center;
  margin-bottom: 32px;
}

.sololearn {
  grid-column: span 2;
}

.right {
  grid-column: 2 / span 2;
}

.left {
  grid-column: span 2;
}
</style>
