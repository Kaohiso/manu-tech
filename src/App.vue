<script setup lang="ts">
import '@fontsource/barlow-condensed/600.css'
import '@fontsource/barlow-condensed/900.css'
import '@fontsource-variable/dm-sans/wght.css'
import '@fontsource-variable/jetbrains-mono/wght.css'
import './styles/index.css'
import HeaderMT from './features/layout/AppHeader.vue'
import AppHero from './features/AppHero.vue'
import AppAbout from '@/features/AppAbout.vue'
</script>

<template>
  <HeaderMT />
  <AppHero />
  <AppAbout />
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
  --app-inline-size: var(--ref-size-1280);
  --app-radius: var(--ref-size-12);
  --app-background-on-background: hsl(
    from var(--sys-color-background) calc(h + 10) calc(s + 5) calc(l + 5)
  );
  max-width: var(--app-inline-size);
}

a {
  text-decoration: none;
}

h1 {
  margin: 0;
}

h2 {
  margin: 0;
  font-size: var(--sys-font-size-h2);
  font-family: var(--sys-font-family-h2);
  font-weight: var(--sys-font-weight-h2);
  line-height: 70px;
  letter-spacing: -1.4px;

  > span {
    display: block;
    color: var(--sys-color-text-primary);

    &:nth-child(2) {
      background: linear-gradient(
        to right,
        hsl(from var(--sys-color-primary) h s calc(l + 20)),
        var(--sys-color-primary),
        var(--sys-color-primary)
      );
      background-clip: text;
      color: transparent;
    }
  }
}

p {
  margin: 0;
  line-height: 24.4px;
}

img {
  border-radius: var(--app-radius);
}

ul {
  list-style: none;
}
</style>
