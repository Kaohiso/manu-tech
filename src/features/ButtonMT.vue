<script setup lang="ts">
interface Props {
  variant?: 'filled' | 'outlined' | 'text-only'
  iconPosition?: 'left' | 'right'
}

const { variant = 'filled', iconPosition = 'left' } = defineProps<Props>()
</script>

<template>
  <a :data-variant="variant" :data-icon-position="iconPosition">
    <slot />
  </a>
</template>

<style scoped>
a {
  display: inline-flex;
  /* width: fit-content;
  height: fit-content; */
  justify-content: center;
  align-items: center;
  color: var(--sys-color-text-primary);
  padding: var(--sys-padding-vertical-cta-button) var(--sys-padding-horizontal-cta-button);
  border-radius: var(--sys-radius-cta-button);
  gap: var(--sys-gap-cta-button);
  font-size: var(--sys-font-size-cta-button);
  font-weight: var(--sys-font-weight-cta-button);
}

a[data-variant='filled'] {
  background-color: var(--sys-color-primary);
  border: solid hsl(from var(--sys-color-primary) h s l / 0.15);
}

a[data-variant='outlined'] {
  background-color: transparent;
  border: solid hsl(from var(--ref-color-white) h s l / 0.25);
}

a[data-icon-position='right'] {
  flex-direction: row-reverse;
}

a:hover {
  cursor: pointer;
}
</style>
