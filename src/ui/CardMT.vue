<script lang="ts" setup></script>

<template>
  <div class="card-mt">
    <slot name="image-card" />
    <div class="container-text">
      <span class="title">
        <slot name="title" />
      </span>
      <span class="subtitle">
        <slot name="subtitle" />
      </span>
    </div>
  </div>
</template>

<style lang="css" scoped>
.card-mt {
  display: grid;
  width: fit-content;
  grid-template-columns: 20% 80%;
  gap: 12px;
  background-color: var(--app-background-on-background);
  border: solid hsl(from var(--sys-color-primary) h s l / 0.15);
  padding: 16px 12px;
  border-radius: var(--app-radius);

  .container-text {
    display: grid;

    .title {
      color: var(--sys-color-text-primary);
      font-weight: var(--ref-font-weight-bold);
    }

    .subtitle {
      font-family: var(--ref-font-family-mono);
      font-size: var(--ref-size-11);
      color: var(--sys-color-text-tertiary);
    }
  }
}
</style>
