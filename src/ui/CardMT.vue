<script lang="ts" setup>
import ChipMT from '@/ui/ChipMT.vue'
import EyebrowMT from '@/ui/EyebrowMT.vue'
import type { LucideIcon } from '@lucide/vue'

interface CardMtProps {
  graphicIcon?: LucideIcon
  imgSrc?: string
  type?: 'price' | 'schedule' | 'images'
  tag?: 'new'
  cardSize?: 'big'
  iconSize?: 12 | 24
  footerDivider?: 'line'
  variant?: 'filled-blue' | 'green-border' | 'orange' | 'gradient'
}

const { iconSize = 12 } = defineProps<CardMtProps>()
</script>

<template>
  <div class="card-mt" :class="[tag, cardSize, variant]">
    <header v-if="graphicIcon || imgSrc || $slots.heading || $slots.subheading">
      <div v-if="graphicIcon" class="container-icon" :class="[cardSize, variant]">
        <component :is="graphicIcon" :size="iconSize" class="icon" :class="variant" />
      </div>
      <component v-else-if="imgSrc" is="img" :src="imgSrc" class="card-image" />

      <component
        :is="$slots.heading && $slots.subheading ? 'hgroup' : 'div'"
        class="card-mt-heading"
      >
        <h4 v-if="$slots.heading">
          <slot name="heading" />
        </h4>
        <p v-if="$slots.subheading">
          <slot name="subheading" />
        </p>
      </component>
    </header>

    <div v-if="$slots.cardMtContent" class="card-mt-content" :class="[type, variant]">
      <slot name="cardMtContent" />
    </div>

    <footer v-if="$slots.cardMtFooter" class="card-mt-footer" :class="footerDivider">
      <slot name="cardMtFooter" />
    </footer>

    <ChipMT v-if="tag" class="chip-on-card-mt">
      <EyebrowMT variant="on-card">
        <slot name="chip-on-card-mt" />
      </EyebrowMT>
    </ChipMT>
  </div>
</template>

<style scoped>
.card-mt {
  display: grid;
  gap: 20px;
  align-items: center;
  background-color: var(--app-background-on-background);
  border: 2px solid hsl(from var(--sys-color-primary) h s l / 0.15);
  border-radius: var(--app-radius);
  padding: var(--ref-size-12);

  &.big {
    padding: var(--ref-size-24);
  }

  &.new {
    position: relative;
    border: 2px solid hsl(from var(--sys-color-primary) h s l / 0.5);
    box-shadow: 0px 0px 5px hsl(from var(--sys-color-primary) h s l / 0.75);
  }

  > header {
    display: inline-flex;
    align-items: center;
    gap: var(--ref-size-12);

    > .container-icon {
      width: fit-content;
      padding: var(--ref-size-10);
      background-color: hsl(from var(--sys-color-primary) h s l / 0.12);
      border-radius: var(--app-radius-icon);

      &.big {
        border-radius: var(--app-radius);
      }

      > .icon {
        color: hsl(from var(--sys-color-primary) h s calc(l + 20));
      }
    }

    > img {
      width: 36px;
      height: 36px;
    }

    /** h4 + p */
    & hgroup {
      display: grid;

      h4 {
        color: var(--sys-color-text-primary);
        font-weight: var(--ref-font-weight-semi-bold);
      }

      p {
        font-family: var(--ref-font-family-mono);
        font-size: var(--ref-size-11);
        color: var(--sys-color-text-tertiary);
        line-height: 15px;
      }
    }

    /**Only p */
    & div > p {
      font-family: var(--ref-font-family-base);
      font-size: var(--ref-size-12);
      color: hsl(from var(--sys-color-text-secondary) h s calc(l + 5));
      line-height: 16.5px;
    }

    /**Only h4 */
    &:not(:has(p)) {
      display: grid;
      text-align: start;
    }
  }

  > .card-mt-content {
    display: grid;
    gap: 10px;
    text-align: start;
    color: var(--sys-color-text-tertiary);

    &.filled-blue {
      color: hsl(from var(--ref-color-white) calc(h + 213) calc(s + 87) calc(l - 13));
    }

    &.price {
      order: -1;
    }

    &:not(:has(:not(p))) {
      color: var(--sys-color-text-primary);
    }
  }

  > .card-mt-footer {
    font-size: var(--ref-size-11);
    font-family: var(--ref-font-family-mono);
    color: hsl(from var(--sys-color-text-tertiary) h s l / 0.5);

    &.line {
      border-top: 2px solid hsl(from var(--ref-color-white) h s l / 0.05);
      padding-top: var(--ref-size-10);
    }
  }

  > .chip-on-card-mt {
    position: absolute;
    top: -10px;
    left: 20px;
    background-color: var(--sys-color-primary);
    border: solid var(--sys-color-primary);
  }

  &.gradient {
    border: none;
    background: linear-gradient(
      to right,
      hsl(from var(--sys-color-primary) h s l / 0.15),
      var(--app-background-on-background),
      hsl(from var(--sys-color-secondary) h s l / 0.15)
    );
  }

  &.filled-blue {
    background-color: var(--sys-color-primary);
    border: 2px solid hsl(from var(--sys-color-primary) h s l / 0.05);

    .container-icon {
      background-color: hsl(from var(--sys-color-text-primary) h s l / 0.12);

      > .icon {
        color: var(--sys-color-text-primary);
      }
    }
  }

  &.green-border {
    border: 2px solid hsl(from var(--sys-color-brand-whatsapp) h s l / 0.2);

    .container-icon {
      background-color: hsl(from var(--sys-color-brand-whatsapp) h s l / 0.12);

      > .icon {
        color: var(--sys-color-brand-whatsapp);
      }
    }
  }

  &.orange {
    border: 2px solid hsl(from var(--sys-color-text-primary) h s l / 0.05);

    .container-icon {
      background-color: hsl(from var(--sys-color-secondary) h s l / 0.12);

      > .icon {
        color: hsl(from var(--sys-color-secondary) calc(h + 7) s calc(l + 1));
      }
    }
  }
}
</style>
