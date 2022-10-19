<script setup>
import CertificateCard from "./CertificateCard.vue";
import javascriptFCC from "../assets/certificates/freecodecamp_javascript.png";
import javascriptWeb from "../assets/certificates/freecodecamp_webdesign.png";
import sololearnJS from "../assets/certificates/sololearn_javascript.png";
import sololearnRR from "../assets/certificates/sololearn_react.png";
import sololearnPC from "../assets/certificates/sololearn_pythoncore.png";
import linkedinAgile from "../assets/certificates/agile.png";
</script>

<template>
  <section class="content">
    <h2>Certificates</h2>
    <div class="grid">
      <CertificateCard
        title="Javascript"
        :img="sololearnJS"
        url="https://www.sololearn.com/certificates/CT-KM0ZBUKV"
        class="sololearn"
      >
        Certificate provided by Sololearn for the course "Javascript", which
        included lessons and challenges
      </CertificateCard>

      <CertificateCard
        title="React + Redux"
        :img="sololearnRR"
        url="https://www.sololearn.com/certificates/CT-HKASY6WE"
        class="sololearn"
      >
        Certificate provided by Sololearn for the course "React + Redux", which
        included lessons and quizzes
      </CertificateCard>

      <CertificateCard
        title="Python Core"
        :img="sololearnPC"
        url="https://www.sololearn.com/certificates/CT-Y83WZJCZ"
        class="sololearn"
      >
        Certificate provided by Sololearn for the course "Python Core", which
        included lessons and challenges
      </CertificateCard>

      <CertificateCard
        title="JavaScript Algorithms"
        :img="javascriptFCC"
        url="https://www.freecodecamp.org/certification/renatolacerda92/javascript-algorithms-and-data-structures"
        class="freecodecamp right"
      >
        Certificate provided by freeCodeCamp for the course "JavaScript
        Algorithms and Data Structures", which included lessons and 5
        challenges. Solutions are available in the certificate link.
      </CertificateCard>

      <CertificateCard
        title="Responsive Web Design"
        :img="javascriptWeb"
        url="https://www.freecodecamp.org/certification/renatolacerda92/responsive-web-design"
        class="freecodecamp left"
      >
        Certificate provided by freeCodeCamp for the course "Responsive Web
        Design", which included lessons and 5 challenges. Solutions are
        available in the certificate link.
      </CertificateCard>
      <CertificateCard
        title="Agile Software Development"
        :img="linkedinAgile"
        url="https://lnkd.in/dv8phaxB"
        class="freecodecamp left"
      >
        Certificate provided by Linkedin for the course "Agile Software
        Development", which included 1 hour and 53 minutes of video lessons and
        quizzes
      </CertificateCard>
    </div>
  </section>
</template>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 8px;
  row-gap: 64px;
  justify-items: center;
  margin-bottom: 32px;
}
</style>
