<script setup lang="ts">
interface Props {
  content: string[]
}

defineProps<Props>()
</script>

<template>
  <div class="content-text">
    <span v-for="value in content">
      {{ value }}
    </span>
  </div>
</template>

<style scoped>
.content-text {
  display: flex;
  flex-direction: column;
  /* font-size: var(--ref-size-20); */
  color: var(--sys-color-text-primary);
  gap: 10px;

  &.red {
    color: var(--sys-color-status-closed);
  }
}
</style>
