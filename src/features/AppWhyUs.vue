<script setup lang="ts">
import AppSection from '@/features/layout/AppSection.vue'
import CardWhyUsMT from '@/ui/CardWhyUsMT.vue'
import EyebrowMT from '@/ui/EyebrowMT.vue'
import * as Icons from '@lucide/vue'

interface ReasonProps {
  id: number
  icon: Icons.LucideIcon
  title: string
  content: string
}

const reasons: ReasonProps[] = [
  {
    id: 1,
    icon: Icons.BadgeIcon,
    title: 'Prix justes & transparents',
    content: 'Tarification claire sans mauvaises surprises. Devis avant toute intervention.',
  },
  {
    id: 2,
    icon: Icons.ShieldIcon,
    title: 'Qualité certifiée',
    content:
      "Pièces d'origine ou qualité premium uniquement. Chaque réparation est soigneusement contrôlée.",
  },
  {
    id: 3,
    icon: Icons.ClockIcon,
    title: 'Délais maîtrisés',
    content:
      'Diagnostic rapide, intervention efficace. Votre immobilisation est réduite au minimum.',
  },
  {
    id: 4,
    icon: Icons.TargetIcon,
    title: 'Service personnalisé',
    content:
      'Chaque client est unique. Nous adaptons nos solutions à votre situation et votre budget.',
  },
  {
    id: 5,
    icon: Icons.CpuIcon,
    title: 'Expertise technique pointue',
    content:
      'Spécialiste en électronique embarquée et réparation de précision depuis plus de 10 ans.',
  },
  {
    id: 6,
    icon: Icons.StarIcon,
    title: 'Satisfaction garantie',
    content:
      "100% de clients satisfaits. Notre réputation repose sur l'honnêteté et le professionnalisme.",
  },
]
</script>

<template>
  <AppSection class="app-price">
    <div class="title">
      <EyebrowMT>Pourquoi nous choisir</EyebrowMT>
      <h2>La différence MANU-TECH</h2>
      <p>Un engagement sur la qualité, l'honnêteté et la précision — à chaque intervention.</p>
    </div>
    <CardWhyUsMT v-for="reason in reasons" :key="reason.id">
      <template #icon>
        <component :is="reason.icon" class="icon-title" />
      </template>
      <template #title>
        {{ reason.title }}
      </template>
      <template #content>
        {{ reason.content }}
      </template>
    </CardWhyUsMT>
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
  }

  .caption {
    grid-column: span 3;
  }

  .icon-title {
    padding: 10px;
    background-color: hsl(from var(--sys-color-primary) h s l / 0.12);
    border: 2px solid hsl(from var(--sys-color-primary) h s l / 0.12);
    border-radius: var(--app-radius-icon);

    width: 24px;
    height: 24px;
  }
}
</style>
