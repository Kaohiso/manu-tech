<script setup lang="ts">
interface Props {
  display?: 'title' | 'list' | 'on-card'
  color?: 'primary' | 'secondary'
}

const { display = 'title', color = 'primary' } = defineProps<Props>()
</script>

<template>
  <div class="chip-mt" :class="[display, color]">
    <slot></slot>
  </div>
</template>

<style scoped lang="css">
.chip-mt {
  display: inline-flex;
  width: fit-content;
  height: fit-content;
  text-align: center;
  align-items: center;
  border-radius: 100px;

  &.title {
    border: solid hsl(from var(--sys-color-primary) h s l / 0.2);
    padding: 6px 16px;

    &.secondary {
      display: flex;
      gap: var(--ref-size-20);
      border: solid hsl(from var(--sys-color-secondary) h s l / 0.2);
      background-color: hsl(from var(--sys-color-secondary) h s l / 0.1);
    }
  }

  &.list {
    padding: 8px 16px;
    color: hsl(from var(--sys-color-text-secondary) h s calc(l + 5));
    border: 2px solid hsl(from var(--sys-color-text-secondary) h s l / 0.1);
    border-radius: var(--app-radius-icon);
  }

  &.on-card {
    padding: 4px 8px;
  }
}
</style>
