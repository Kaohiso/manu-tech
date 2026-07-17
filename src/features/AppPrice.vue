<script setup lang="ts">
import AppSection from '@/features/layout/AppSection.vue'
import CardPriceMT from '@/ui/CardPriceMT.vue'
import EyebrowMT from '@/ui/EyebrowMT.vue'

interface TarifProps {
  id: number
  title: string
  price: string
  content: string
  chip?: string
}

const tarifs: TarifProps[] = [
  { id: 1, title: 'Tarif fixe', price: '35', content: 'Diagnostic électronique automobile' },
  { id: 2, title: 'A partir de', price: '40', content: "Activation d'option" },
  { id: 3, title: 'A partir de', price: '50', content: 'Codage' },
  { id: 4, title: 'A partir de', price: '50', content: 'Réparation électronique' },
  { id: 5, title: 'A partir de', price: '50', content: 'Remplacement rétroéclairage LED' },
  {
    id: 6,
    title: 'A partir de',
    price: '20',
    content: 'Pose de film Hydrogel sur mesure',
    chip: 'new',
  },
]
</script>

<template>
  <AppSection class="app-price" id-section="price">
    <div class="title">
      <EyebrowMT>Transparence tarifaire</EyebrowMT>
      <h2>Nos tarifs</h2>
      <p>
        Tarifs fixes et transparents, sans mauvaise surprise. Devis avant toute intervention
        spécifique.
      </p>
    </div>
    <CardPriceMT v-for="tarif in tarifs" :key="tarif.id" :chip="tarif.chip">
      <template #header>
        <EyebrowMT variant="caption">
          {{ tarif.title }}
        </EyebrowMT>
      </template>
      <template #price>
        {{ tarif.price }}
      </template>
      <template #content>
        {{ tarif.content }}
      </template>
    </CardPriceMT>
    <EyebrowMT variant="caption" class="caption">
      * Tarifs indicatifs. Devis personnalisé sur demande. Contact par SMS recommandé.
    </EyebrowMT>
  </AppSection>
</template>

<style scoped>
:deep(.app-price) {
  display: grid;
  text-align: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--ref-size-20);

  .title {
    grid-column: span 3;
    display: grid;
    row-gap: 20px;
  }

  .caption {
    grid-column: span 3;
  }
}
</style>
