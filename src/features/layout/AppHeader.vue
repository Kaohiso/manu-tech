<script setup lang="ts">
import { PhoneIcon } from '@lucide/vue'
import ButtonMT from '@/ui/ButtonMT.vue'
import { callPhoneNumber } from '@/data/contact.ts'
import AppHeaderDesktop from '@/ui/header/AppHeaderDesktop.vue'
import AppHeaderMobile from '@/ui/header/AppHeaderMobile.vue'

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
  <AppHeaderMobile />
</template>
