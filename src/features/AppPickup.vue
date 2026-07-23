<script setup lang="ts">
import AppSection from '@/features/layout/AppSection.vue'
import EyebrowMT from '@/ui/EyebrowMT.vue'
import { pickups } from '@/data/pickup'
import CardMT from '@/ui/CardMT.vue'
import { ClockIcon, TruckIcon } from '@lucide/vue'
import ScheduleMT from '@/ui/ScheduleMT.vue'
import colissimo from '../assets/images/logo/colissimo-logo.png'
import dpd from '../assets/images/logo/dpd-logo.png'
import chronopost from '../assets/images/logo/chronopost-logo.png'
import colisPrive from '../assets/images/logo/colis-prive-logo.png'

const schedule = [
  { key: 'Lundi - Vendredi', firstValue: '9h - 12h30', lastValue: '13h30 - 18h30' },
  { key: 'Samedi', lastValue: '9h - 12h30' },
  { key: 'Dimanche', lastValue: 'Fermé' },
]

const imagesPartners = [colissimo, dpd, chronopost, colisPrive]
</script>

<template>
  <AppSection class="app-pickup" id-section="pickup">
    <header>
      <EyebrowMT variant="orange"> Point Relais Officiel </EyebrowMT>
      <h2>
        <span>Point Relais de </span>
        <span>confiance</span>
      </h2>
      <p>
        MANU-TECH est également un point relais Chronopost, Colissimo et DPD officiel. Déposez ou
        retirez vos colis directement en boutique lors de vos visites — pratique, sécurisé, sans
        rendez-vous.
      </p>
    </header>

    <div class="content-pickup">
      <div class="container-short-information-pickup">
        <CardMT
          v-for="pickup in pickups"
          :key="pickup.id"
          :graphic-icon="pickup.icon"
          :icon-size="24"
          card-size="big"
          variant="orange"
        >
          <template #heading>
            {{ pickup.heading }}
          </template>
          <template #subheading>
            {{ pickup.subheading }}
          </template>
          <template #cardMtContent>
            <p v-for="value in pickup.content">{{ value }}</p>
          </template>
        </CardMT>
      </div>

      <div class="container-schedule-image">
        <CardMT :graphic-icon="ClockIcon" :icon-size="24" card-size="big" variant="orange">
          <template #heading>Horaires d'ouvertures</template>
          <template #subheading>Horaires du point relais</template>
          <template #cardMtContent>
            <ScheduleMT :content="schedule" />
          </template>
        </CardMT>

        <CardMT :graphic-icon="TruckIcon" :icon-size="24" card-size="big" variant="orange">
          <template #heading>Partenaires logistiques</template>
          <template #subheading>Marques</template>
          <template #cardMtContent>
            <div class="content-images-partners">
              <div v-for="image in imagesPartners" class="images-partners">
                <img :src="image" class="image-partner" />
              </div>
            </div>
          </template>
        </CardMT>
      </div>
    </div>
  </AppSection>
</template>

<style scoped>
:deep(.app-pickup) {
  display: grid;
  gap: 20px;

  > header {
    display: grid;
    gap: 20px;
    grid-column: 1 / -1;
    text-align: center;
    justify-items: center;

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

    > p {
      max-inline-size: 60ch;
    }
  }

  .content-pickup {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(500px, 100%), 1fr));
    gap: 20px;

    .container-short-information-pickup {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
      gap: var(--ref-size-20);
    }

    .container-schedule-image {
      display: grid;
      gap: 20px;

      .content-images-partners {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr));
        gap: 20px;

        > div {
          display: inline-flex;
          justify-content: center;
          background-color: var(--sys-color-background);
          border-radius: var(--app-radius);
          border: 2px solid hsl(from var(--ref-color-white) h s l / 0.05);
          padding: 16px;

          > img {
            border-radius: 0;
            height: 25px;
            object-fit: contain;
          }
        }
      }
    }
  }
}
</style>
