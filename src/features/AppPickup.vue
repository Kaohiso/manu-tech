<script setup lang="ts">
import AppSection from '@/features/layout/AppSection.vue'
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

    <div v-for="pickup in pickups" :key="pickup.id" :style="updateSpan(pickup.type)" class="card">
      <div class="head-card">
        <div class="container-icon">
          <component :is="pickup.icon" :color="orangeVariant" />
        </div>
        <div class="title">
          <h4>
            {{ pickup.title }}
          </h4>
          <EyebrowMT variant="caption">
            {{ pickup.subtitle }}
          </EyebrowMT>
        </div>
      </div>

      <ContentText v-if="pickup.type === 'text'" :content="pickup.content" />
      <ContentSchedule v-else-if="pickup.type === 'schedule'" :content="pickup.content" />
      <ContentImage v-else-if="pickup.type === 'image'" :content="pickup.content" />

      <template v-if="pickup.type === 'schedule'">
        <div class="footer">
          <div class="line" />
          <span class="text-caption">{{ pickup.caption }}</span>
        </div>
      </template>
    </div>
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

  .card {
    display: grid;
    align-items: start;
    grid-row: span 2;
    background-color: var(--app-background-on-background);
    padding: var(--ref-size-20);
    border-radius: var(--app-radius);
    border: solid hsl(from var(--ref-color-white) h s l / 0.05);
    gap: 20px;

    .head-card {
      display: inline-flex;
      align-items: center;
      gap: 10px;

      .container-icon {
        width: fit-content;
        height: fit-content;
        background-color: hsl(from var(--sys-color-secondary) h s l / 0.12);
        padding: 10px;
        border-radius: var(--app-radius);
      }

      .title {
        display: grid;
        text-align: start;
        gap: 3px;
      }
    }
  }

  .footer {
    display: grid;
    gap: 10px;

    .line {
      border-top: 2px solid hsl(from var(--ref-color-white) h s l / 0.05);
    }

    .text-caption {
      text-align: center;

      color: var(--sys-color-text-tertiary);
      font-family: var(--ref-font-family-mono);
      font-size: var(--ref-size-10);
    }
  }
}
</style>
