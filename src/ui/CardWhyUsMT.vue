<script setup lang="ts"></script>

<template>
  <div class="card-why-us-mt">
    <slot name="icon" />
    <span class="title">
      <slot name="title" />
    </span>

    <span class="content">
      <slot name="content" />
    </span>
  </div>
</template>

<style scoped>
.card-why-us-mt {
  display: grid;
  text-align: start;
  padding: var(--ref-size-24);
  border: 2px solid hsl(from var(--ref-color-white) h s l / 0.05);
  background-color: var(--app-background-on-background);
  border-radius: var(--app-radius);
  gap: 10px;

  .title {
    color: var(--sys-color-text-primary);
    font-weight: var(--ref-font-weight-semi-bold);
  }

  .content {
    color: var(--sys-color-text-tertiary);
  }
}
</style>
