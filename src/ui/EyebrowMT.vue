<script setup lang="ts">
interface Props {
  color?: string
  variant?: 'on-card' | 'caption' | 'on-blue-card'
}

const { color = '', variant = '' } = defineProps<Props>()
</script>

<template>
  <span class="app-eyebrow" :class="variant" :style="{ color: color }">
    <slot />
  </span>
</template>

<style scoped>
.app-eyebrow {
  text-transform: uppercase;
  letter-spacing: var(--sys-letter-spacing-eyebrow);
  font-size: var(--sys-font-size-eyebrow);
  font-family: var(--sys-font-family-eyebrow);
  color: var(--sys-color-text-accent-primary);

  &.on-card {
    color: var(--sys-color-text-primary);
    font-weight: var(--ref-font-weight-semi-bold);
    font-family: var(--ref-font-family-base);

    &.on-blue-card {
      color: var(--sys-color-text-primary);
    }
  }

  &.caption {
    color: var(--sys-color-text-tertiary);
  }
}
</style>
