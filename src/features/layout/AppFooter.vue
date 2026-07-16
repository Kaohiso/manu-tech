<script setup lang="ts">
import manuTechLogo from '@/assets/images/logo/manu-tech-logo.png'
import ButtonMT from '@/ui/ButtonMT.vue'
import EyebrowMT from '@/ui/EyebrowMT.vue'
import { MailIcon, MapPinIcon, PhoneIcon } from '@lucide/vue'
type Link = { id: string; label: string }

const links: Link[] = [
  { id: '#home', label: 'Accueil' },
  { id: '#service', label: 'Services' },
  { id: '#diagnosis', label: 'Diagnostics' },
  { id: '#repair', label: 'Réparation' },
  { id: '#price', label: 'Tarif' },
  { id: '#about', label: 'A propos' },
  { id: '#gallery', label: 'Galerie' },
  { id: '#pickup', label: 'Point relais' },
  { id: '#contact', label: 'Contact' },
]
</script>

<template>
  <footer class="app-footer">
    <div class="container">
      <div class="column">
        <img :src="manuTechLogo" class="manu-logo" />
        <span class="paragraphe">
          Expert en diagnostic ECU automobile et réparation d'appareils électroniques à
          Ars-sur-Moselle. Fiabilité, précision, prix justes.
        </span>
      </div>
      <div />
      <div class="column">
        <EyebrowMT class="nav-eyebrow">Navigation</EyebrowMT>
        <nav>
          <ul class="list-link">
            <li v-for="{ id, label } in links" :key="id">
              <a :href="id" variant="text-only">{{ label }}</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="column">
        <EyebrowMT class="nav-eyebrow">Contact</EyebrowMT>
        <ul>
          <li>
            <PhoneIcon :size="12" class="icon" />
            <span>+33 7 87 33 43 35</span>
          </li>
          <li>
            <MailIcon :size="12" class="icon" />
            <span>manu-tech@orange.fr</span>
          </li>
          <li>
            <MapPinIcon :size="12" class="icon" />
            <span>Ars-sur-Moselle, France</span>
          </li>
          <li>
            <span>Lun–Ven : 9h00–18h30 </span>
            <span>Samedi : 9h00–14h00</span>
          </li>
          <li>
            <img src="../../assets/images/logo/leboncoin-logo.png" class="brand-logo" />
            <img src="../../assets/images/logo/facebook-logo.png" class="brand-logo" />
          </li>
        </ul>
      </div>
    </div>

    <div class="line" />
    <div class="bottom-footer">
      <span>© 2025 MANU-TECH. Tous droits réservés.</span>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  display: grid;
  gap: var(--ref-size-24);
  padding: 32px 0;
  background-color: var(--ref-color-authentic-black-950);
  justify-content: center;

  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: var(--app-inline-size);
    width: 100%;
    gap: 10px;
    color: var(--sys-color-text-tertiary);

    .column {
      display: grid;
      gap: var(--ref-size-20);
      height: fit-content;

      .paragraphe {
        color: var(--sys-color-text-tertiary);
        font-size: var(--ref-size-13);
      }

      .manu-logo {
        width: 150px;
        height: auto;
      }

      .brand-logo {
        width: 65px;
        height: auto;
      }

      .nav-eyebrow {
        color: var(--ref-color-white);
        font-weight: var(--ref-font-weight-bold);
      }

      nav {
        font-size: var(--sys-font-size-li);
        font-weight: var(--sys-font-weight-li);
      }

      ul {
        display: grid;
        gap: var(--ref-size-10);
        padding: 0;
      }

      li {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        list-style: none;
        text-align: start;
      }

      .icon {
        color: var(--sys-color-primary);
      }

      li:has(span + span) {
        display: grid;
        gap: 0;
        font-family: var(--ref-font-family-mono);
        color: var(--sys-color-text-tertiary);
        font-size: var(--ref-size-11);
      }

      li > a {
        font-size: var(--sys-font-size-li);
        color: var(--sys-color-text-secondary);
      }
    }
  }

  .line {
    border-top: 2px solid hsl(from var(--ref-color-white) h s l / 0.05);
  }

  .bottom-footer {
    font-family: var(--ref-font-family-mono);
    color: var(--sys-color-text-tertiary);
    font-size: var(--ref-size-11);
  }
}
</style>
