<script setup lang="ts">
interface Props {
  content: string[]
}

defineProps<Props>()
</script>

<template>
  <div class="content-text">
    <div class="text">
      <span v-for="value in content">
        {{ value }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.content-text {
  display: grid;
  color: var(--sys-color-text-primary);
  gap: 20px;

  .text {
    display: grid;
    gap: 10px;
  }

  .line {
    border-top: 2px solid hsl(from var(--ref-color-white) h s l / 0.05);
  }
}
</style>
