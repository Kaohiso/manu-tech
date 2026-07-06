<script setup lang="ts">
import './styles/index.css'
import HeaderMT from './features/HeaderMT.vue'
</script>

<template><HeaderMT /></template>

<style>
html {
  background-color: var(--sys-color-background);
}

body {
  display: grid;
  justify-content: center;
}

#app {
  max-width: var(--ref-size-1280);
}

a {
  text-decoration: none;
}
</style>
