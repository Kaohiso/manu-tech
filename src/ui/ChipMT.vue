<script setup lang="ts">
interface Props {
  variant?: 'list' | 'on-card'
}

defineProps<Props>()
</script>

<template>
  <div class="chip-mt" :class="[variant]">
    <slot />
  </div>
</template>

<style scoped>
.chip-mt {
  display: inline-flex;
  width: fit-content;
  height: fit-content;
  text-align: center;
  align-items: center;
  border-radius: 100px;

  background-color: hsl(from var(--sys-color-primary) h s l / 0.08);
  border: solid hsl(from var(--sys-color-primary) h s l / 0.2);
  padding: 2px 8px;

  &.list {
    padding: 8px 16px;
    border: 2px solid hsl(from var(--sys-color-text-secondary) h s l / 0.1);
    border-radius: var(--app-radius-icon);
  }

  &.on-card {
    padding: 4px 8px;
  }
}
</style>
