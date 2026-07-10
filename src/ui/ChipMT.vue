<script setup lang="ts">
interface Props {
  display?: 'title' | 'list'
}

const { display = 'title' } = defineProps<Props>()
</script>

<template>
  <div class="chip-mt" :class="display">
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

  &.title {
    border: solid hsl(from var(--sys-color-primary) h s l / 0.2);
    border-radius: 100px;
    padding: 0 8px;
  }

  &.list {
    padding: 8px 16px;
    color: hsl(from var(--sys-color-text-secondary) h s calc(l + 5));
    border: 2px solid hsl(from var(--sys-color-text-secondary) h s l / 0.1);
    border-radius: var(--app-radius-icon);
  }
}
</style>
