<script setup lang="ts">
import { DotIcon, ChevronRightIcon, PhoneIcon } from '@lucide/vue'
import ButtonMT from './ButtonMT.vue'
import ChipMT from './ChipMT.vue'

const iconSize = <number>13
const chipSize = <number>6
</script>

<template>
  <main id="container">
    <section>
      <ChipMT>
        <DotIcon :size="iconSize * 2" color="#05DF72" />
        <span>Expert certifié · Ars-sur-moselle</span>
      </ChipMT>
      <h1>
        <span class="title">Diagnostic</span>
        <span class="title">Professionnel</span>
        <span class="title">& Réparation Electronique</span>
      </h1>
      <p>
        Spécialiste en diagnostic et réparation d'ECU automobiles, smartphones, tablettes, consoles
        portables et équipements électroniques. Composants d'origine ou premium — prix transparents.
      </p>
      <div class="containerButton">
        <ButtonMT icon-position="right">
          <ChevronRightIcon :size="iconSize" />

          <span>Demande un devis</span>
        </ButtonMT>

        <ButtonMT variant="outlined">
          <PhoneIcon :size="iconSize" />

          <span>Nous contacter</span>
        </ButtonMT>
      </div>
      <div class="containerTags">
        <div class="containerTag">
          <span class="tag">10+</span>
          <span class="underTag">années d'expérience</span>
        </div>
        <div class="containerTag">
          <span class="tag">500+</span>
          <span class="underTag">véhicules traités</span>
        </div>
        <div class="containerTag">
          <span class="tag">100%</span>
          <span class="underTag">satisfaction clients</span>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="css" scoped>
#container {
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100vh;
  width: fit-content;
  /* column-gap: var(--ref-size-14); */
}

section {
  display: grid;
  align-self: center;
  gap: 30px;
}

h1 {
  display: grid;
  font-size: var(--sys-font-size-h1);
  font-weight: var(--sys-font-weight-h1);
  font-family: var(--sys-font-family-h1);
  letter-spacing: var(--sys-letter-spacing-h1);
}

p {
  max-width: 75%;
}

h1 > span {
  line-height: 83px;
}

.title:first-of-type {
  color: var(--sys-color-text-primary);
}

.title {
  background: linear-gradient(
    to right,
    hsl(from var(--sys-color-primary) h s calc(l + 20)),
    var(--sys-color-primary),
    var(--sys-color-primary)
  );
  background-clip: text;
  color: transparent;
}

.title:last-child {
  font-size: var(--sys-font-size-h1-accent);
  font-weight: var(--sys-font-weight-h1-accent);
  color: hsl(from var(--sys-color-text-secondary) h calc(s - 6) calc(l + 19));

  line-height: 53px;
}

.containerButton {
  display: inline-flex;
  gap: var(--ref-size-14);
}

.containerTags {
  display: grid;
  grid-template-columns: 33% 33% 33%;
}

.containerTag {
  display: grid;
}

.tag {
  font-family: var(--ref-font-family-condensed);
  font-size: var(--ref-size-32);
  color: var(--sys-color-text-primary);
  font-weight: var(--ref-font-weight-black);
}

.underTag {
  font-size: var(--ref-size-11);
}
</style>
