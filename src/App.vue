<script setup lang="ts">
import '@fontsource/barlow-condensed/600.css'
import '@fontsource/barlow-condensed/900.css'
import '@fontsource-variable/dm-sans/wght.css'
import '@fontsource-variable/jetbrains-mono/wght.css'
import './styles/index.css'
import HeaderMT from './features/HeaderMT.vue'
import HeroSection from './features/HeroSection.vue'
</script>

<template>
  <HeaderMT />
  <HeroSection />
</template>

<style>
html {
  background-color: var(--sys-color-background);
}

body {
  display: grid;
  justify-content: center;
  font-family: var(--ref-font-family-base);
  font-size: var(--ref-size-15);
  font-weight: var(--ref-font-weight-regular);
  color: var(--sys-color-text-secondary);
}

#app {
  max-width: var(--ref-size-1280);
}

a {
  text-decoration: none;
}

h1 {
  margin: 0;
}

p {
  margin: 0;
  line-height: 24.4px;
}
</style>
