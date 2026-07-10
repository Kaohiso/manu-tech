<script setup lang="ts">
import { ChevronRightIcon } from '@lucide/vue'
import ButtonMT from '@/ui/ButtonMT.vue'
import EyebrowMT from '@/ui/EyebrowMT.vue'
import CardMT from '@/ui/CardMT.vue'
import AppSection from '@/features/layout/AppSection.vue'

const iconSize = <number>13
</script>

<template>
  <AppSection class="app-about">
    <div class="about-left">
      <img
        class="img-about"
        src="../assets/images/oden-about.jpeg"
        alt="Espace de travail chez Manu-Tech."
        width="560"
        height="482"
      />
      <div class="container-tag">
        <span class="tag">10+</span>
        <EyebrowMT color="hsl(from var(--sys-color-text-primary) h s l / 0.5)">années</EyebrowMT>
        <EyebrowMT color="hsl(from var(--sys-color-text-primary) h s l / 0.5)">
          d'expertise
        </EyebrowMT>
      </div>
    </div>
    <div class="about-right">
      <EyebrowMT textAlign="start">A propos de Manu-Tech</EyebrowMT>
      <h2>
        <span>L'expertise technique</span>
        <span>dédié à vos appareils</span>
      </h2>
      <p>
        MANU-TECH est né de la passion pour l'électronique embarquée et la réparation de précision.
        Depuis plus de 10 ans, nous accompagnons particuliers et professionnels dans le diagnostic,
        la réparation et l'optimisation de leurs véhicules et équipements électroniques.
      </p>
      <p>
        Notre philosophie : des réparations fiables qui prolongent la durée de vie des appareils et
        des véhicules, avec des composants d'origine ou de qualité premium, à des prix justes.
      </p>
      <ul>
        <li>Technicien certifié en électronique embarquée automobile</li>
        <li>Outillage professionnel : diagnostic et programmation des clefs</li>
        <li>Station de soudure et matériel de haute précision</li>
        <li>Composants d'origine ou qualité OEM sur toutes interventions</li>
      </ul>
      <div class="separate-line" />
      <EyebrowMT color="var(--sys-color-text-tertiary)"
        >Équipements de référence utilisés</EyebrowMT
      >
      <div class="container-card">
        <CardMT>
          <template #image-card>
            <img src="../assets/images/logo/topdon-logo.jpg" width="36" height="36" />
          </template>
          <template #title>
            <span>Topdon</span>
          </template>
          <template #subtitle>
            <span>Diagnostic automobile</span>
          </template>
        </CardMT>
        <CardMT>
          <template #image-card>
            <img src="../assets/images/logo/fnirsi-logo.jpg" width="36" height="36"
          /></template>
          <template #title>FNIRSI</template>
          <template #subtitle><span>Instruments de mesure</span></template>
        </CardMT>
      </div>
      <ButtonMT icon-position="right">
        <ChevronRightIcon :size="iconSize" />
        <span>Prendre rendez-vous</span>
      </ButtonMT>
    </div>
  </AppSection>
</template>

<style lang="css" scoped>
:deep(.app-about) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  .about-left {
    width: fit-content;
    height: fit-content;
    position: relative;

    .img-about {
      object-fit: cover;
    }

    .container-tag {
      position: absolute;
      bottom: -30px;
      right: -30px;
      display: grid;
      padding: var(--ref-size-20);
      background-color: var(--ref-color-bluerocratic-500);
      border-radius: var(--app-radius);

      .tag {
        font-family: var(--ref-font-family-condensed);
        font-weight: var(--ref-font-weight-black);
        font-size: var(--ref-size-44);
        color: var(--sys-color-text-primary);
      }

      > span {
        text-align: center;
      }
    }
  }

  .about-right {
    display: grid;
    width: fit-content;
    height: fit-content;
    row-gap: 20px;

    .separate-line {
      width: 100%;
      border-top: 1px solid hsl(from var(--ref-color-white) h s l / 0.05);
      border-radius: var(--aap-radius);
    }

    .container-card {
      display: inline-flex;
      gap: 10px;
    }

    ul {
      padding: 0;
      > li {
        margin: 20px 0;
        &::before {
          content: '✔';
          color: var(--sys-color-text-accent-primary);
          padding: 5px;
          margin-right: 5px;
          background-color: var(--app-background-on-background);
          border-radius: var(--ref-size-4);
          border: 1px solid hsl(from var(--sys-color-primary) h s l / 0.15);
        }
      }
    }
  }
}
</style>
