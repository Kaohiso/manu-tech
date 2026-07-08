<script setup lang="ts">
interface Props {
  color?: string
  textAlign?: 'start' | 'center'
}

const { color = 'var(--sys-color-text-accent-primary)', textAlign = 'center' } =
  defineProps<Props>()

console.log(color)
</script>

<template>
  <span class="app-eyebrow" :style="{ color: color }">
    <slot />
  </span>
</template>

<style scoped lang="css">
.app-eyebrow {
  text-transform: uppercase;
  letter-spacing: var(--sys-letter-spacing-eyebrow);
  font-size: var(--sys-font-size-eyebrow);
  font-family: var(--sys-font-family-eyebrow);
}
</style>
