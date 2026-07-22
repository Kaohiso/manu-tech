<script setup lang="ts">
interface Props {
  variant?: 'filled-blue' | 'filled-green' | 'outlined' | 'text-only' | 'icon'
  textPosition?: 'text-center' | 'text-start'
  iconPosition?: 'left' | 'right'
}

const {
  variant = 'filled-blue',
  textPosition = 'text-center',
  iconPosition = 'left',
} = defineProps<Props>()
</script>

<template>
  <component
    class="button-mt"
    :is="$attrs.href ? 'a' : 'button'"
    :class="[variant, textPosition, iconPosition]"
  >
    <slot />
  </component>
</template>

<style scoped>
.button-mt {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  color: var(--sys-color-text-primary);
  padding: var(--sys-padding-vertical-cta-button) var(--sys-padding-horizontal-cta-button);
  border-radius: var(--sys-radius-cta-button);
  gap: var(--sys-gap-cta-button);
  font-size: var(--sys-font-size-cta-button);
  font-weight: var(--sys-font-weight-cta-button);

  &.icon {
    padding: 10px;
    background-color: transparent;
    border: none;
  }

  &.filled-blue {
    background-color: var(--sys-color-primary);
    border: solid hsl(from var(--sys-color-primary) h s l / 0.15);
  }

  &.filled-green {
    background-color: var(--sys-color-brand-whatsapp);
    border: solid var(--sys-color-brand-whatsapp);
  }

  &.outlined {
    background-color: transparent;
    border: solid hsl(from var(--ref-color-white) h s l / 0.25);
  }

  &.text-only {
    padding: 0;
    width: 100%;
    background-color: transparent;
    font-size: var(--ref-size-11);
    border: none;
    color: hsl(from var(--sys-color-primary) h s calc(l + 20));
  }

  &.text-center {
    justify-content: center;
  }

  &.text-start {
    justify-content: start;
    width: fit-content;
  }

  &.right {
    flex-direction: row-reverse;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
