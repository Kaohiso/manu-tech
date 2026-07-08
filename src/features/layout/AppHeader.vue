<script setup lang="ts">
import { PhoneIcon } from '@lucide/vue'
import ButtonMT from '@/ui/ButtonMT.vue'
import { phoneNumber } from '@/data/contact.ts'

type Link = { id: string; label: string }

const sections: Link[] = [
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

const iconSize = 13
</script>

<template>
  <header class="app-header">
    <img src="/src/assets/images/logo/logo-manu-tech.png" alt="logo-header" />
    <nav>
      <ul>
        <li v-for="{ id, label } in sections" :key="id">
          <a :href="id">{{ label }}</a>
        </li>
      </ul>
    </nav>

    <ButtonMT :href="'tel:' + phoneNumber">
      <PhoneIcon :size="iconSize" />
      <span>Demander un devis</span>
    </ButtonMT>
  </header>
</template>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  background-color: var(--sys-color-background);
  box-shadow: 0px 10px 30px -10px var(--sys-color-background);
  padding: var(--ref-size-32) 0;
  max-inline-size: var(--app-inline-size);
  inline-size: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
