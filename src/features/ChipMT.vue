<script setup lang="ts"></script>

<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped lang="css">
div {
  display: inline-flex;
  background-color: hsl(from var(--sys-color-primary) h s l / 0.08);
  border: solid hsl(from var(--sys-color-primary) h s l / 0.2);
  border-radius: 100px;
  width: fit-content;
  height: fit-content;
  padding: 0 8px;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  letter-spacing: var(--sys-letter-spacing-eyebrow);
  font-size: var(--sys-font-size-eyebrow);
  font-family: var(--sys-font-family-eyebrow);
}
</style>
