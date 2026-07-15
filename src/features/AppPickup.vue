<script setup lang="ts">
import AppSection from '@/features/layout/AppSection.vue'
import CardGridMT from '@/ui/CardGridMT.vue'
import EyebrowMT from '@/ui/EyebrowMT.vue'
import ContentText from '@/ui/grid/ContentText.vue'
import ContentSchedule from '@/ui/grid/ContentSchedule.vue'
import ContentImage from '@/ui/grid/ContentImage.vue'
import { pickups } from '@/data/pickup'

const orangeVariant = 'hsl(from var(--sys-color-secondary) calc(h + 7) s calc(l + 1))'

function updateSpan(type: string) {
  if (type === 'schedule' || type === 'image') {
    return 'grid-column: 2 span; grid-row: 3 span;'
  }
}
</script>

<template>
  <AppSection class="app-pickup">
    <div class="title">
      <EyebrowMT :color="orangeVariant"> Point Relais Officiel </EyebrowMT>
      <h2>
        <span>Point Relais de </span>
        <span>confiance</span>
      </h2>
      <p>
        MANU-TECH est également un point relais Chronopost, Colissimo et DPD officiel. Déposez ou
        retirez vos colis directement en boutique lors de vos visites — pratique, sécurisé, sans
        rendez-vous.
      </p>
    </div>

    <CardGridMT v-for="pickup in pickups" :key="pickup.id" :style="updateSpan(pickup.type)">
      <template #icon>
        <component :is="pickup.icon" :color="orangeVariant" />
      </template>
      <template #title>
        {{ pickup.title }}
      </template>
      <template #subtitle>
        {{ pickup.subtitle }}
      </template>
      <template #content>
        <ContentText v-if="pickup.type === 'text'" :content="pickup.content" />
        <ContentSchedule v-else-if="pickup.type === 'schedule'" :content="pickup.content" />
        <ContentImage v-else-if="pickup.type === 'image'" :content="pickup.content" />
      </template>
    </CardGridMT>
  </AppSection>
</template>

<style scoped>
:deep(.app-pickup) {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto repeat(6, fit-content(100px));
  gap: var(--ref-size-20);

  .title {
    display: grid;
    gap: 20px;
    grid-column: 2 / span 2;
    text-align: center;

    & + div {
      grid-column-start: 1;
    }

    h2 > span {
      display: inline;

      &:nth-child(2) {
        background: linear-gradient(
          to right,
          hsl(from var(--sys-color-secondary) h s calc(l + 20)),
          var(--sys-color-secondary),
          var(--sys-color-secondary)
        );
        background-clip: text;
        color: transparent;
      }
    }
  }
}
</style>
