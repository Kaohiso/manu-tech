<script setup lang="ts"></script>

<template>
  <div class="chip-mt">
    <slot></slot>
  </div>
</template>

<style scoped lang="css">
.chip-mt {
  display: inline-flex;
  background-color: hsl(from var(--sys-color-primary) h s l / 0.08);
  border: solid hsl(from var(--sys-color-primary) h s l / 0.2);
  border-radius: 100px;
  width: fit-content;
  height: fit-content;
  padding: 0 8px;
  justify-content: center;
  align-items: center;
}
</style>
