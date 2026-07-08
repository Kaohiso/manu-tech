<script setup lang="ts">
interface Props {
  variant?: 'filled' | 'outlined' | 'text-only'
  iconPosition?: 'left' | 'right'
}

const { variant = 'filled', iconPosition = 'left' } = defineProps<Props>()
</script>

<template>
  <component class="button-mt" :is="$attrs.href ? 'a' : 'button'" :class="[variant, iconPosition]">
    <slot />
  </component>
</template>

<style scoped>
.button-mt {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: var(--sys-color-text-primary);
  padding: var(--sys-padding-vertical-cta-button) var(--sys-padding-horizontal-cta-button);
  border-radius: var(--sys-radius-cta-button);
  gap: var(--sys-gap-cta-button);
  font-size: var(--sys-font-size-cta-button);
  font-weight: var(--sys-font-weight-cta-button);

  &.filled {
    background-color: var(--sys-color-primary);
    border: solid hsl(from var(--sys-color-primary) h s l / 0.15);
  }

  &.outlined {
    background-color: transparent;
    border: solid hsl(from var(--ref-color-white) h s l / 0.25);
  }

  &.right {
    flex-direction: row-reverse;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
