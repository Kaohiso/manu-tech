<script setup lang="ts">
import { PhoneIcon } from '@lucide/vue'
import ButtonMT from '@/ui/ButtonMT.vue'
import { callPhoneNumber } from '@/data/contactInformation'

type Link = { id: string; label: string }

const sections: Link[] = [
  { id: '#home', label: 'Accueil' },
  { id: '#about', label: 'A propos' },
  { id: '#services', label: 'Services' },
  { id: '#price', label: 'Tarif' },
  { id: '#whyUs', label: 'Pourquoi nous' },
  { id: '#gallery', label: 'Galerie' },
  { id: '#pickup', label: 'Point relais' },
  { id: '#contact', label: 'Contact' },
]

const iconSize = 13
</script>

<template>
  <header class="app-header-desktop">
    <div class="container">
      <img src="/src/assets/images/logo/manu-tech-logo.png" alt="logo-header" class="image-logo" />
      <nav>
        <ul>
          <li v-for="{ id, label } in sections" :key="id">
            <a :href="id">{{ label }}</a>
          </li>
        </ul>
      </nav>

      <ButtonMT :href="callPhoneNumber">
        <PhoneIcon :size="iconSize" />
        <span>Demander un devis</span>
      </ButtonMT>
    </div>
  </header>
</template>

<style scoped>
.app-header-desktop {
  padding-inline: 15px;
  display: flex;
  justify-content: center;
  z-index: 666;
  position: fixed;
  top: 0;
  background-color: var(--sys-color-background);
  box-shadow: 0px 10px 30px -10px var(--sys-color-background);
  inline-size: 100%;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: var(--app-inline-size);
    width: 100%;
    padding: var(--ref-size-32) 0;

    .image-logo {
      width: 150px;
      height: auto;
    }
  }

  nav {
    font-size: var(--sys-font-size-li);
    font-weight: var(--sys-font-weight-li);
  }

  ul {
    display: flex;
    gap: var(--ref-size-24);
  }

  li {
    list-style: none;
  }

  li > a {
    font-size: var(--sys-font-size-li);
    color: var(--sys-color-text-secondary);
  }
}
</style>
