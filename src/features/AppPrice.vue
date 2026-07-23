<script setup lang="ts">
import { smsPhoneNumber } from '@/data/contactInformation'
import AppSection from '@/features/layout/AppSection.vue'
import ButtonMT from '@/ui/ButtonMT.vue'
import CardMT from '@/ui/CardMT.vue'
import EyebrowMT from '@/ui/EyebrowMT.vue'
import { ChevronRightIcon } from '@lucide/vue'

interface TarifProps {
  id: number
  heading: string
  content: string[]
  tag?: 'new'
}

const tarifs: TarifProps[] = [
  {
    id: 1,
    content: ['Tarif fixe', '35'],
    heading: 'Diagnostic électronique automobile',
  },
  { id: 2, content: ['A partir de', '40'], heading: "Activation d'option" },
  { id: 3, content: ['A partir de', '50'], heading: 'Codage' },
  { id: 4, content: ['A partir de', '50'], heading: 'Réparation électronique' },
  { id: 5, content: ['A partir de', '50'], heading: 'Remplacement rétroéclairage LED' },
  {
    id: 6,
    content: ['A partir de', '20'],
    heading: 'Pose de film Hydrogel sur mesure',
    tag: 'new',
  },
]
</script>

<template>
  <AppSection class="app-price" id-section="price">
    <header>
      <EyebrowMT>Transparence tarifaire</EyebrowMT>
      <h2>Nos tarifs</h2>
      <p>
        Tarifs fixes et transparents, sans mauvaise surprise. Devis avant toute intervention
        spécifique.
      </p>
    </header>

    <div class="content-cards">
      <CardMT
        v-for="tarif in tarifs"
        :key="tarif.id"
        type="price"
        :tag="tarif.tag"
        card-size="big"
        footer-divider="line"
      >
        <template #heading>
          {{ tarif.heading }}
        </template>

        <template #cardMtContent>
          <EyebrowMT variant="caption">
            {{ tarif.content[0] }}
          </EyebrowMT>
          <p class="price">
            <span>{{ tarif.content[1] }}</span>
            <span class="euro">€</span>
          </p>
        </template>

        <template #cardMtFooter>
          <ButtonMT variant="text-only" icon-position="right" :href="smsPhoneNumber">
            <ChevronRightIcon :size="11" />
            Demander un devis
          </ButtonMT>
        </template>

        <template #chip-on-card-mt> Nouveaute </template>
      </CardMT>
    </div>

    <EyebrowMT variant="caption">
      * Tarifs indicatifs. Devis personnalisé sur demande. Contact par SMS recommandé.
    </EyebrowMT>
  </AppSection>
</template>

<style scoped>
:deep(.app-price) {
  display: grid;
  text-align: center;
  gap: var(--ref-size-20);

  > header {
    display: grid;
    row-gap: 20px;
  }

  .content-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));

    gap: 20px;

    .price {
      font-family: var(--ref-font-family-condensed);
      font-weight: var(--ref-font-weight-black);
      font-size: var(--ref-size-44);
      color: hsl(from var(--sys-color-primary) h s calc(l + 20));
      margin-top: var(--ref-size-8);

      > span:nth-of-type(2) {
        font-size: var(--ref-size-20);
      }
    }
  }
}
</style>
