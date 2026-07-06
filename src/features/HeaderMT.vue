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
const phoneNumberMT = phoneNumber

function testClick() {
  console.log('Clicked')
}
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
    <a href="tel:{{phoneNumberMT}}">
      <ButtonMT @click="testClick()"
        ><PhoneIcon :size="iconSize" /><text class="textButton">Demander un devis</text></ButtonMT
      ></a
    >
  </header>
</template>

<style scoped>
header {
  font-family: var(--sys-font-family-header);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
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
  font-weight: var(--ref-font-weight-medium);
  text-decoration: none;
  color: var(--sys-color-text-secondary);
  cursor: pointer;
}

.textButton {
  font-weight: var(--sys-font-weight-cta-button);
}
</style>
