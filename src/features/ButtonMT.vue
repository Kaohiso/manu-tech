<script lang="ts"></script>

<template>
  <a>
    <slot />
  </a>
</template>

<style scoped>
a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: var(--sys-color-primary);
  color: var(--sys-color-text-primary);
  padding: var(--sys-padding-vertical-cta-button) var(--sys-padding-horizontal-cta-button);
  border-radius: var(--sys-radius-cta-button);
  border: none;
  gap: var(--sys-gap-cta-button);
  font-size: var(--sys-font-size-cta-button);
  font-weight: var(--sys-font-weight-cta-button);
}

a:hover {
  cursor: pointer;
}
</style>
