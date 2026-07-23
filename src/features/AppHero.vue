<script setup lang="ts">
import { DotIcon, ChevronRightIcon, PhoneIcon } from '@lucide/vue'
import ButtonMT from '../ui/ButtonMT.vue'
import ChipMT from '../ui/ChipMT.vue'
import Eyebrow from '../ui/EyebrowMT.vue'
import AppSection from '@/features/layout/AppSection.vue'
import { callPhoneNumber, smsPhoneNumber } from '@/data/contactInformation.ts'
import { useMediaQuery } from '@/composables/useMediaQuery.ts'

const isDesktop = useMediaQuery('(min-width: 1025px)')

const iconSize = 12
</script>

<template>
  <AppSection class="app-hero" id-section="home">
    <div class="text-content">
      <ChipMT>
        <DotIcon :size="iconSize * 2" color="var(--sys-color-status-open)" />
        <Eyebrow>Expert certifié · Ars-sur-moselle</Eyebrow>
      </ChipMT>
      <h1>
        <span>Diagnostic</span>
        <span>Professionnel</span>
        <span>& Réparation Electronique</span>
      </h1>
      <p>
        Spécialiste en diagnostic et réparation d'ECU automobiles, smartphones, tablettes, consoles
        portables et équipements électroniques. Composants d'origine ou premium — tarifs
        transparents.
      </p>

      <div class="container-buttons">
        <ButtonMT icon-position="right" :href="smsPhoneNumber">
          <ChevronRightIcon :size="iconSize" />
          Demander un devis
        </ButtonMT>

        <ButtonMT variant="outlined" :href="callPhoneNumber">
          <PhoneIcon :size="iconSize" />
          Nous contacter
        </ButtonMT>
      </div>

      <div class="container-tags">
        <div>
          <p>10+</p>
          <p>années d'expérience</p>
        </div>
        <div>
          <p>500+</p>
          <p>véhicules traités</p>
        </div>
        <div>
          <p>100%</p>
          <p>satisfaction clients</p>
        </div>
      </div>
    </div>
    <div v-if="isDesktop" class="image-content">
      <img class="image-main-hero" src="../assets/images/cat-hero.jpeg" alt="logo-header" />
      <div class="text-image-hero">Interface OBD-II Pro</div>

      <div class="container-image-hero-small">
        <img class="image-second-hero" src="../assets/images/cat-hero-2.jpeg" alt="logo-header" />
        <div class="text-image-hero">
          <div>Réparation PCB</div>
          <div style="color: var(--sys-color-text-accent-primary)">Précision & qualité</div>
        </div>
      </div>

      <div class="container-diagnostic">
        <div class="container-diagnostic-title">
          <DotIcon :size="iconSize * 2" color="var(--sys-color-status-open)" />
          <Eyebrow variant="open">Diagnostic actif</Eyebrow>
        </div>
        <ul>
          <li>Lecture défauts : OK</li>
          <li>Actionneurs : 12/12</li>
          <li>ECU : Connectée</li>
        </ul>
      </div>
    </div>
  </AppSection>
</template>

<style lang="css" scoped>
:deep(.app-hero) {
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  background: radial-gradient(
    closest-side,
    hsl(from var(--sys-color-primary) h s l / 0.1),
    transparent
  );

  .text-content {
    display: grid;
    height: fit-content;
    gap: 30px;

    .container-buttons {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
    }

    .container-tags {
      display: flex;
      gap: 10px;

      > div {
        display: grid;

        > p:first-child {
          font-family: var(--ref-font-family-condensed);
          font-size: var(--ref-size-32);
          color: var(--sys-color-text-primary);
          font-weight: var(--ref-font-weight-black);
        }

        > p:nth-of-type(2) {
          font-size: var(--ref-size-11);
          color: var(--sys-color-text-tertiary);
        }
      }
    }
  }

  .image-content {
    position: relative;
    width: fit-content;
    height: fit-content;

    .image-main-hero {
      width: 32.5rem;
      height: 23rem;
      object-fit: cover;
    }

    &::after {
      content: '';
      border-radius: var(--ref-size-12);
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: radial-gradient(transparent, hsl(from var(--sys-color-background) h s l / 0.6));
    }

    .text-image-hero {
      z-index: 10;
      position: absolute;
      bottom: 10px;
      left: 10px;
      color: var(--sys-color-text-primary);
      font-family: var(--ref-font-family-mono);
    }

    .container-image-hero-small {
      z-index: 1;
      position: absolute;
      bottom: -50px;
      right: -50px;
      border-radius: var(--ref-size-12);

      &::after {
        content: '';
        border-radius: var(--ref-size-12);
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: radial-gradient(transparent, hsl(from var(--sys-color-background) h s l / 0.6));
      }

      .image-second-hero {
        width: 13rem;
        height: 11rem;
        object-fit: cover;
      }
    }

    .container-diagnostic {
      z-index: 1;
      position: absolute;
      top: -50px;
      left: -50px;
      display: grid;
      width: fit-content;
      background-color: hsl(from var(--sys-color-background) h s l / 0.95);
      border: solid hsl(from var(--sys-color-primary) h s l / 0.2);
      border-radius: var(--ref-size-12);
      padding: var(--ref-size-16);

      .container-diagnostic-title {
        display: inline-flex;
        align-items: center;
      }

      ul {
        list-style: none;
        font-family: var(--ref-font-family-mono);
        font-size: var(--ref-size-10);
        padding: 0 var(--ref-size-11);
      }

      ul li::before {
        content: '✔';
        padding-right: var(--ref-size-13);
        color: var(--sys-color-text-accent-primary);
      }
    }
  }
}

@media (min-width: 1025px) {
  :deep(.app-hero) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(500px, 100%), 1fr));
    justify-content: center;
  }
}
</style>
