<script setup lang="ts">
import ButtonMT from '@/ui/ButtonMT.vue'
import ChipMT from '@/ui/ChipMT.vue'
import EyebrowMT from '@/ui/EyebrowMT.vue'
import { ChevronRightIcon } from '@lucide/vue'

interface Props {
  chip?: string
}

const { chip = '' } = defineProps<Props>()
</script>

<template>
  <div class="card-price-mt" :class="chip">
    <div class="header-card-price-mt">
      <slot name="header" />

      <span class="price">
        <slot name="price" />
        <span class="euro">€</span>
      </span>
    </div>
    <span class="content">
      <slot name="content" />
    </span>
    <div class="line" />
    <ButtonMT variant="text-only" icon-position="right" color="primary">
      <ChevronRightIcon :size="11" />
      Demander un devis
    </ButtonMT>
    <ChipMT v-if="chip !== ''" class="chip-on-card" display="on-card">
      <EyebrowMT variant="on-card">Nouveaute</EyebrowMT>
    </ChipMT>
  </div>
</template>

<style scoped>
.card-price-mt {
  display: grid;
  text-align: start;
  padding: var(--ref-size-24);
  border: 2px solid hsl(from var(--ref-color-white) h s l / 0.05);
  background-color: var(--app-background-on-background);
  border-radius: var(--app-radius);
  gap: 10px;

  &.new {
    position: relative;
    border: 1px solid var(--sys-color-primary);
    box-shadow: 0px 0px 5px hsl(from var(--sys-color-primary) h s calc(l + 20));
  }

  .chip-on-card {
    position: absolute;
    top: -10px;
    left: 20px;
    background-color: var(--sys-color-primary);
    border: solid var(--sys-color-primary);
  }

  .header-card-price-mt {
    display: grid;
  }

  .price {
    font-family: var(--ref-font-family-condensed);
    font-weight: var(--ref-font-weight-black);
    font-size: var(--ref-size-44);
    color: hsl(from var(--sys-color-primary) h s calc(l + 20));

    .euro {
      font-size: var(--ref-size-20);
    }
  }

  .line {
    border-top: 2px solid hsl(from var(--ref-color-white) h s l / 0.05);
  }

  .content {
    font-weight: var(--ref-font-weight-semi-bold);
    color: var(--sys-color-text-primary);
  }
}
</style>
