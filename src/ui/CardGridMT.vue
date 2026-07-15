<script setup lang="ts">
import EyebrowMT from '@/ui/EyebrowMT.vue'
</script>

<template>
  <div class="card-grid-mt">
    <div class="head-card">
      <div class="container-icon">
        <slot name="icon" />
      </div>
      <div class="title">
        <h4>
          <slot name="title" />
        </h4>
        <EyebrowMT variant="caption">
          <slot name="subtitle" />
        </EyebrowMT>
      </div>
    </div>

    <slot name="content" />

    <span>
      <slot name="caption" />
    </span>
  </div>
</template>

<style scoped>
.card-grid-mt {
  display: grid;
  grid-row: span 2;
  background-color: var(--app-background-on-background);
  padding: var(--ref-size-20);
  border-radius: var(--app-radius);
  border: solid hsl(from var(--ref-color-white) h s l / 0.05);
  gap: 20px;

  .head-card {
    display: inline-flex;
    align-items: center;
    gap: 10px;

    .container-icon {
      background-color: hsl(from var(--sys-color-secondary) h s l / 0.12);
      padding: 10px;
      border-radius: var(--app-radius);
    }

    .title {
      display: grid;
      text-align: start;
      gap: 3px;
    }
  }
}
</style>
