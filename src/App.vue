<script setup lang="ts">
import '@fontsource/barlow-condensed/600.css'
import '@fontsource/barlow-condensed/900.css'
import '@fontsource-variable/dm-sans/wght.css'
import '@fontsource-variable/jetbrains-mono/wght.css'
import './styles/index.css'
import HeaderMT from './features/layout/AppHeader.vue'
import AppHero from './features/AppHero.vue'
import AppAbout from '@/features/AppAbout.vue'
import AppServices from '@/features/AppServices.vue'
import AppPrice from '@/features/AppPrice.vue'
import AppWhyUs from '@/features/AppWhyUs.vue'
import AppGallery from '@/features/AppGallery.vue'
import AppPickup from '@/features/AppPickup.vue'
import AppContact from '@/features/AppContact.vue'
import AppFooter from '@/features/layout/AppFooter.vue'
</script>

<template>
  <HeaderMT />
  <AppHero />
  <AppAbout />
  <AppServices />
  <AppPrice />
  <AppWhyUs />
  <AppGallery />
  <AppPickup />
  <AppContact />
  <AppFooter />
</template>

<style>
:root {
  --app-inline-size: var(--ref-size-1280);
  --app-radius: var(--ref-size-12);
  --app-radius-icon: var(--ref-size-6);
  --app-background-on-background: hsl(
    from var(--sys-color-background) calc(h + 10) calc(s + 5) calc(l + 5)
  );
  --app-pading-section: 128px 10px;
}

* {
  text-wrap: pretty;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overscroll-behavior-x: none;
}

html {
  color: var(--sys-color-text-secondary);
}

body {
  background-color: var(--sys-color-background);
  font-family: var(--ref-font-family-base);
  font-size: var(--ref-size-15);
  font-weight: var(--ref-font-weight-regular);
  margin: 0;
}

a {
  text-decoration: none;
}

h1 {
  margin: 0;
  display: grid;
  font-size: var(--sys-font-size-h1);
  font-weight: var(--sys-font-weight-h1);
  font-family: var(--sys-font-family-h1);
  letter-spacing: var(--sys-letter-spacing-h1);

  > span {
    line-height: 83px;
  }
}

h2 {
  margin: 0;
  font-size: var(--sys-font-size-h2);
  font-family: var(--sys-font-family-h2);
  font-weight: var(--sys-font-weight-h2);
  line-height: 70px;
  letter-spacing: -1.4px;
  color: var(--sys-color-text-primary);

  > span {
    display: block;

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

h3 {
  margin: 0;
  display: block;
  font-family: var(--sys-font-family-h3);
  font-size: var(--sys-font-size-h3);
  font-weight: var(--sys-font-weight-h3);
  color: var(--sys-color-text-primary);

  & + p {
    display: block;
    font-family: var(--sys-font-family-caption);
    font-size: var(--sys-font-size-caption);
    color: var(--sys-color-text-tertiary);
  }
}

h4 {
  margin: 0;
  display: block;
  font-weight: var(--sys-font-weight-h4);
  color: var(--sys-color-text-primary);

  & + span {
    font-family: var(--sys-font-family-caption);
    display: block;
    font-size: var(--sys-font-size-caption);
    color: var(--sys-color-text-caption);
  }

  & + p {
    font-family: var(--sys-font-family-caption);
    display: block;
    font-size: var(--sys-font-size-caption);
    color: var(--sys-color-text-tertiary);
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

svg {
  display: block;
}
</style>
