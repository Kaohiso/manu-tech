<script setup lang="ts">
import { PhoneIcon } from '@lucide/vue'
import ButtonMT from './ButtonMT.vue'
import { phoneNumber } from '@/data/contact.ts'

type Link = { id: string; label: string }

const sections = <Link[]>[
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

const iconSize = <number>13
</script>

<template>
  <header>
    <img src="../assets/logo-manu-tech.png" alt="logo-header" />
    <nav>
      <ul>
        <li v-for="{ id, label } in sections" :key="id">
          <a :href="id">{{ label }}</a>
        </li>
      </ul>
    </nav>

    <ButtonMT :href="'tel:' + phoneNumber">
      <PhoneIcon :size="iconSize" #icon />
      <span>Demander un devis</span>
    </ButtonMT>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--ref-size-12) var(--ref-size-32);
  gap: var(--ref-size-48);
}

nav {
  font-size: var(--sys-font-size-li);
  font-weight: var(--sys-font-weight-li);
}

ul {
  margin: 0;
  padding: 0;
  display: flex;
  gap: var(--ref-size-24);
}

li {
  list-style: none;
  text-align: center;
}

li > a {
  font-size: var(--sys-font-size-li);
  color: var(--sys-color-text-secondary);
  cursor: pointer;
}
</style>
