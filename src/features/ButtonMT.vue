<script lang="ts"></script>

<template>
  <button class="button"><slot></slot></button>
</template>

<style scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--sys-color-primary);
  color: var(--sys-color-text-primary);
  padding: var(--sys-padding-vertical-cta-button) var(--sys-padding-horizontal-cta-button);
  border-radius: var(--ref-size-4);
  border: none;
  gap: var(--ref-size-8);
}

button:hover {
  cursor: pointer;
}
</style>
