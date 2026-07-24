<script setup lang="ts"></script>

<template>
  <dialog class="dialog-mt" closedby="any">
    <slot />
  </dialog>
</template>

<style scoped>
.dialog-mt {
  position: fixed;
  max-width: 100%;
  inline-size: 100dvw;
  margin: 0;
  border: none;
  background-color: var(--sys-color-background);
}
</style>
