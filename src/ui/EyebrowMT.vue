<script setup lang="ts">
interface Props {
  color?: string
}

const { color = 'var(--sys-color-text-accent-primary)' } = defineProps<Props>()

console.log(color)
</script>

<template>
  <span class="app-eyebrow" :style="{ color: color }">
    <slot />
  </span>
</template>

<style scoped lang="css">
.eyebrow-mt {
  text-transform: uppercase;
  letter-spacing: var(--sys-letter-spacing-eyebrow);
  font-size: var(--sys-font-size-eyebrow);
  font-family: var(--sys-font-family-eyebrow);
}
</style>
