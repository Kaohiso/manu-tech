<script setup lang="ts">
import EyebrowMT from '@/ui/EyebrowMT.vue'
import AppSection from '@/features/layout/AppSection.vue'
import { reasons } from '@/data/whyUs'
import CardMT from '@/ui/CardMT.vue'
</script>

<template>
  <AppSection class="app-why-us" id-section="whyUs">
    <header>
      <EyebrowMT>Pourquoi nous choisir</EyebrowMT>
      <h2>La différence MANU-TECH</h2>
      <p>Un engagement sur la qualité, l'honnêteté et la précision — à chaque intervention.</p>
    </header>

    <div class="container-content-why-us">
      <CardMT
        v-for="reason in reasons"
        :key="reason.id"
        :graphic-icon="reason.icon"
        card-size="big"
        :icon-size="24"
      >
        <template #heading>
          {{ reason.heading }}
        </template>
        <template #cardMtContent>
          <p class="reason-content">{{ reason.content }}</p>
        </template>
      </CardMT>
    </div>
  </AppSection>
</template>

<style lang="css" scoped>
:deep(.app-why-us) {
  display: grid;
  gap: var(--ref-size-20);

  > header {
    display: grid;
    text-align: center;
    row-gap: 20px;
  }

  .container-content-why-us {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
    gap: var(--ref-size-20);

    .reason-content {
      color: var(--sys-color-text-secondary);
    }
  }
}
</style>
