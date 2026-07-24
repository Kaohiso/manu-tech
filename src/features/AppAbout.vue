<script setup lang="ts">
import { ChevronRightIcon } from '@lucide/vue'
import ButtonMT from '@/ui/ButtonMT.vue'
import EyebrowMT from '@/ui/EyebrowMT.vue'
import AppSection from '@/features/layout/AppSection.vue'
import { callPhoneNumber } from '@/data/contactInformation'
import CardMT from '@/ui/CardMT.vue'

import topdon from '../assets/images/logo/topdon-logo.jpg'
import fnirsi from '../assets/images/logo/fnirsi-logo.jpg'

const iconSize = <number>13
</script>

<template>
  <AppSection class="app-about" id-section="about">
    <div class="about-image">
      <div class="fitter">
        <img
          src="../assets/images/electronics-workshop.jpg"
          alt="Réparation et maintenance électroniques pratiques, avec un accent particulier sur les cartes de circuits imprimés."
        />
        <div class="container-tag">
          <p>10+</p>
          <EyebrowMT variant="on-card">années d'expertise</EyebrowMT>
        </div>
      </div>
    </div>

    <div class="about-text">
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
        <li>Outillage professionnel : diagnostic et programmation de clefs</li>
        <li>Station de soudure et matériel de haute précision</li>
        <li>Composants d'origine ou qualité OEM sur toutes interventions</li>
      </ul>

      <EyebrowMT variant="caption"> Équipements de référence utilisés </EyebrowMT>

      <div class="container-card">
        <CardMT :imgSrc="topdon">
          <template #heading>Topdon</template>
          <template #subheading>Diagnostic automobile</template>
        </CardMT>
        <CardMT :imgSrc="fnirsi">
          <template #heading>FNIRSI</template>
          <template #subheading>Instruments de mesure</template>
        </CardMT>
      </div>
      <ButtonMT icon-position="right" :href="callPhoneNumber">
        <ChevronRightIcon :size="iconSize" />
        <span>Prendre rendez-vous</span>
      </ButtonMT>
    </div>
  </AppSection>
</template>

<style lang="css" scoped>
:deep(.app-about) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(450px, 100%), 1fr));
  align-items: center;
  gap: 40px;

  .about-image {
    order: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    .fitter {
      position: relative;
      width: 100%;
      max-width: 560px;
      aspect-ratio: 1 / 1;

      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .container-tag {
        position: absolute;
        bottom: -15px;
        right: -15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        /* padding: var(--ref-size-2); */
        background-color: var(--ref-color-bluerocratic-500);
        border-radius: var(--app-radius);
        aspect-ratio: 1/1;
        text-align: center;

        > p {
          font-family: var(--ref-font-family-condensed);
          font-weight: var(--ref-font-weight-black);
          font-size: var(--ref-size-32);
          color: var(--sys-color-text-primary);
        }

        > span {
          width: 20ch;
        }
      }
    }
  }

  .about-text {
    order: -1;
    display: grid;
    text-align: start;
    justify-items: start;
    row-gap: 20px;

    > p {
      width: min(60ch, 100%);
    }

    .container-card {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 12px;
    }

    ul {
      text-align: start;
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

@media (min-width: 768px) {
  :deep(.app-about) {
    .about-image {
      order: -1;

      .fitter {
        .container-tag {
          bottom: -30px;
          right: -30px;
          /* padding: var(--ref-size-4); */

          > p {
            font-size: var(--ref-size-44);
          }
        }
      }
    }

    .about-text {
      order: 1;
    }
  }
}
</style>
