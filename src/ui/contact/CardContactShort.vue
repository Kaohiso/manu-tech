<script setup lang="ts">
import ButtonMT from '@/ui/ButtonMT.vue'
import EyebrowMT from '@/ui/EyebrowMT.vue'
import { ChevronRightIcon } from '@lucide/vue'

interface Props {
  color?: 'classic' | 'filled-blue' | 'green'
  redirect: string
}

const { color = 'classic' } = defineProps<Props>()

function updateColor(color: string) {
  if (color === 'classic') {
    return 'color: hsl(from var(--sys-color-primary) h s calc(l + 20))'
  } else if (color === 'filled-blue') {
    return 'color: var(--sys-color-text-primary)'
  } else if (color === 'green') {
    return 'color: var(--sys-color-brand-whatsapp)'
  }
}
</script>

<template>
  <div class="contact-grid-mt" :class="color">
    <div class="container-icon">
      <slot name="icon" />
    </div>

    <div class="content">
      <EyebrowMT
        variant="on-blue-card"
        color="hsl(from var(--ref-color-white) calc(h + 213) calc(s + 87) calc(l - 13))"
      >
        <slot name="title" />
      </EyebrowMT>

      <h4>
        <slot name="value" />
      </h4>

      <span class="caption">
        <slot name="caption" />
      </span>
    </div>
    <ButtonMT
      variant="text-only"
      icon-position="right"
      textPosition="text-start"
      :style="updateColor(color)"
      :href="redirect"
    >
      <ChevronRightIcon :size="11" />
      <slot name="thirdPart" />
    </ButtonMT>
  </div>
</template>

<style scoped>
.contact-grid-mt {
  display: grid;
  padding: var(--ref-size-20);
  border-radius: var(--app-radius);
  gap: 20px;

  .container-icon {
    width: fit-content;
    padding: 10px;
    border-radius: var(--app-radius);
  }

  .content {
    display: grid;
    gap: var(--ref-size-4);

    .caption {
      font-size: var(--ref-size-11);
    }
  }

  &.classic {
    background-color: var(--app-background-on-background);
    border: 2px solid hsl(from var(--ref-color-white) h s l / 0.05);

    .container-icon {
      background-color: hsl(from var(--sys-color-primary) h s l / 0.15);
    }
  }

  &.filled-blue {
    background-color: var(--sys-color-primary);
    border: 2px solid hsl(from var(--sys-color-primary) h s l / 0.05);

    .container-icon {
      background-color: hsl(from var(--ref-color-white) h s l / 0.12);
    }
  }

  &.green {
    background-color: var(--app-background-on-background);
    border: 2px solid hsl(from var(--sys-color-brand-whatsapp) h s l / 0.1);

    .container-icon {
      background-color: hsl(from var(--sys-color-brand-whatsapp) h s l / 0.12);
    }
  }
}
</style>
