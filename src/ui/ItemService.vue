<script lang="ts" setup></script>

<template>
  <div class="item-service">
    <div class="container-icon">
      <slot name="icon-list" />
    </div>
    <span class="text">
      <slot name="text" />
    </span>
  </div>
</template>

<style lang="css" scoped>
.item-service {
  display: inline-flex;
  padding: 12px;
  align-items: center;
  gap: 12px;
  background-color: var(--app-background-on-background);
  border-radius: var(--app-radius);
  border: solid hsl(from var(--sys-color-primary) h s l / 0.1);

  .container-icon {
    padding: 10px;
    background-color: hsl(from var(--sys-color-primary) h s l / 0.12);
    border-radius: var(--app-radius-icon);

    :slotted(.icon-list) {
      width: 15px;
      height: 15px;
    }
  }

  .text {
    font-size: var(--sys-icon-size-li);
    color: hsl(from var(--sys-color-text-secondary) h s calc(l + 5));
  }
}
</style>
