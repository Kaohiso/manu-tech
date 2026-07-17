<script setup lang="ts">
import AppSection from '@/features/layout/AppSection.vue'
import ChipMT from '@/ui/ChipMT.vue'
import EyebrowMT from '@/ui/EyebrowMT.vue'

const vehicules: string[] = [
  'Peugeot',
  'Citroën',
  'DS',
  'Opel',
  'Volkswagen',
  'Mitsubishi',
  'Audi',
  'Renault',
  'SEAT',
  'Dacia',
  'BMW',
  'Ford',
  'Mercedes-Benz',
  'Mazda',
  'Mercedes-AMG',
  'Smart',
  'Maybach',
  'Fiat',
  'Alfa Romeo',
  'Škoda',
  'MINI',
]
</script>

<template>
  <section>
    <div class="app-vehicules">
      <EyebrowMT>Véhicules compatibles</EyebrowMT>
      <h3>Marques prises en charge</h3>
      <div class="container-chips">
        <ChipMT v-for="vehicule in vehicules" display="list">
          <span>{{ vehicule }}</span>
        </ChipMT>
      </div>
    </div>
  </section>
</template>

<style scoped>
.app-vehicules {
  background-color: var(--app-background-on-background);
  display: grid;
  text-align: center;
  gap: 20px;
  padding: 40px;
  border-radius: var(--app-radius);
  border: 2px solid hsl(from var(--sys-color-text-secondary) h s l / 0.1);

  .container-chips {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5px;
  }
}
</style>
