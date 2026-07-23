<script setup lang="ts">
interface Props {
  variant?: 'on-card' | 'caption' | 'filled-blue' | 'green-border' | 'orange' | 'open' | 'on-chip'
}

defineProps<Props>()
</script>

<template>
  <span class="app-eyebrow" :class="[variant]">
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

  &.on-card,
  &.green-border {
    color: var(--sys-color-text-tertiary);
    font-family: var(--ref-font-family-mono);
    letter-spacing: 1.5px;
  }

  &.filled-blue {
    color: hsl(from var(--ref-color-white) calc(h + 213) calc(s + 87) calc(l - 13));
  }

  &.caption {
    color: var(--sys-color-text-tertiary);
  }

  &.on-chip {
    font-weight: var(--ref-font-weight-bold);
    color: var(--ref-color-white);
  }

  &.orange {
    color: hsl(from var(--sys-color-secondary) calc(h + 7) s calc(l + 1));
  }

  &.open {
    color: var(--sys-color-status-open);
  }
}
</style>
