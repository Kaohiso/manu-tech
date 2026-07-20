<script setup lang="ts">
import AppSection from '@/features/layout/AppSection.vue'
import CardMT from '@/ui/CardMT.vue'
import EyebrowMT from '@/ui/EyebrowMT.vue'
import * as Icons from '@lucide/vue'

interface ReasonProps {
  id: number
  icon: Icons.LucideIcon
  heading: string
  content: string
}

const reasons: ReasonProps[] = [
  {
    id: 1,
    icon: Icons.BadgeIcon,
    heading: 'Tarifs justes & transparents',
    content: 'Tarification claire sans mauvaises surprises. Devis avant toute intervention.',
  },
  {
    id: 2,
    icon: Icons.ShieldIcon,
    heading: 'Qualité certifiée',
    content:
      "Pièces d'origine ou qualité premium uniquement. Chaque réparation est soigneusement contrôlée.",
  },
  {
    id: 3,
    icon: Icons.ClockIcon,
    heading: 'Délais maîtrisés',
    content:
      'Diagnostic rapide, intervention efficace. Votre immobilisation est réduite au minimum.',
  },
  {
    id: 4,
    icon: Icons.TargetIcon,
    heading: 'Service personnalisé',
    content:
      'Chaque client est unique. Nous adaptons nos solutions à votre situation et votre budget.',
  },
  {
    id: 5,
    icon: Icons.CpuIcon,
    heading: 'Expertise technique pointue',
    content:
      'Spécialiste en électronique embarquée et réparation de précision depuis plus de 10 ans.',
  },
  {
    id: 6,
    icon: Icons.StarIcon,
    heading: 'Satisfaction garantie',
    content:
      "100% de clients satisfaits. Notre réputation repose sur l'honnêteté et le professionnalisme.",
  },
]
</script>

<template>
  <AppSection class="app-price" id-section="whyUs">
    <div class="container-price-title">
      <EyebrowMT>Pourquoi nous choisir</EyebrowMT>
      <h2>La différence MANU-TECH</h2>
      <p>Un engagement sur la qualité, l'honnêteté et la précision — à chaque intervention.</p>
    </div>
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
  </AppSection>
</template>

<style scoped>
:deep(.app-price) {
  display: grid;
  text-align: center;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

  gap: var(--ref-size-20);

  .container-price-title {
    grid-column: 1 / -1;
    display: grid;
    row-gap: 20px;
  }

  .reason-content {
    color: var(--sys-color-text-secondary);
  }
}
</style>
