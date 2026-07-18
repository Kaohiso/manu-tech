<script setup lang="ts">
import { DotIcon, ChevronRightIcon, PhoneIcon } from '@lucide/vue'
import ButtonMT from '../ui/ButtonMT.vue'
import ChipMT from '../ui/ChipMT.vue'
import Eyebrow from '../ui/EyebrowMT.vue'
import AppSection from '@/features/layout/AppSection.vue'
import { callPhoneNumber, smsPhoneNumber } from '@/data/contact.ts'

const iconSize = 12
</script>

<template>
  <AppSection class="app-hero" id-section="home">
    <div class="left-column">
      <ChipMT>
        <DotIcon :size="iconSize * 2" color="var(--sys-color-status-open)" />
        <Eyebrow style="padding-right: 8px">Expert certifié · Ars-sur-moselle</Eyebrow>
      </ChipMT>
      <h1>
        <span class="titleH1">Diagnostic</span>
        <span class="titleH1">Professionnel</span>
        <span class="titleH1">& Réparation Electronique</span>
      </h1>
      <p>
        Spécialiste en diagnostic et réparation d'ECU automobiles, smartphones, tablettes, consoles
        portables et équipements électroniques. Composants d'origine ou premium — tarifs
        transparents.
      </p>
      <div class="container-items">
        <ButtonMT icon-position="right" :href="smsPhoneNumber">
          <ChevronRightIcon :size="iconSize" />
          <span>Demander un devis</span>
        </ButtonMT>

        <ButtonMT variant="outlined" :href="callPhoneNumber">
          <PhoneIcon :size="iconSize" />
          <span>Nous contacter</span>
        </ButtonMT>
      </div>
      <div class="container-items">
        <div class="container-tag">
          <span class="tag">10+</span>
          <span class="under-tag">années d'expérience</span>
        </div>
        <div class="container-tag">
          <span class="tag">500+</span>
          <span class="under-tag">véhicules traités</span>
        </div>
        <div class="container-tag">
          <span class="tag">100%</span>
          <span class="under-tag">satisfaction clients</span>
        </div>
      </div>
    </div>
    <div class="right-column">
      <div class="container-image-hero">
        <img class="image-main-hero" src="../assets/images/cat-hero.jpeg" alt="logo-header" />
        <div class="text-image-hero">Interface OBD-II Pro</div>
      </div>
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
          <Eyebrow color="var(--sys-color-status-open)">Diagnostic actif</Eyebrow>
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
  grid-template-columns: 1fr 1fr;
  column-gap: var(--ref-size-88);
  align-items: center;
  height: 100dvh;
  background: radial-gradient(
    closest-side,
    hsl(from var(--sys-color-primary) h s l / 0.1),
    transparent
  );

  .left-column {
    display: grid;
    height: fit-content;
    width: 80%;
    gap: 30px;

    .titleH1 {
      background: linear-gradient(
        to right,
        hsl(from var(--sys-color-primary) h s calc(l + 20)),
        var(--sys-color-primary),
        var(--sys-color-primary)
      );
      background-clip: text;
      color: transparent;

      &:first-of-type {
        color: var(--sys-color-text-primary);
      }

      &:last-child {
        font-size: var(--sys-font-size-h1-accent);
        font-weight: var(--sys-font-weight-h1-accent);
        color: hsl(from var(--sys-color-text-secondary) h calc(s - 6) calc(l + 19));
        line-height: 53px;
      }
    }

    .container-items {
      display: flex;
      gap: var(--ref-size-32);
    }

    .container-tag {
      display: grid;
    }

    .tag {
      font-family: var(--ref-font-family-condensed);
      font-size: var(--ref-size-32);
      color: var(--sys-color-text-primary);
      font-weight: var(--ref-font-weight-black);
    }

    .under-tag {
      font-size: var(--ref-size-11);
      color: hsl(from var(--sys-color-text-secondary) h calc(s - 5) calc(l - 18));
    }
  }

  .right-column {
    position: relative;

    .container-image-hero {
      position: relative;
      border-radius: var(--ref-size-12);

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
      position: absolute;
      bottom: -50px;
      right: 50px;
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
</style>
