<script setup lang="ts">
import AppHeaderDesktop from '@/ui/header/AppHeaderDesktop.vue'
import AppHeaderMobile from '@/ui/header/AppHeaderMobile.vue'
</script>

<template>
  <div class="app-header-mt">
    <AppHeaderMobile class="header-mobile" />
    <!-- <AppHeaderDesktop class="header-desktop" /> -->
  </div>
</template>

<style>
.app-header-mt {
  .header-desktop {
    visibility: hidden;
  }
}

/* @media (min-width: 1025px) {
  .app-header-mt {
    .header-mobile {
      visibility: hidden;
    }

    .header-desktop {
      visibility: visible;
    }
  }
} */
</style>
