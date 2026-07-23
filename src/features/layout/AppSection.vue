<script lang="ts" setup>
defineOptions({ inheritAttrs: false })

interface Section {
  idSection?: string
}

defineProps<Section>()
</script>

<template>
  <section class="app-section" :id="idSection">
    <div class="content" v-bind="$attrs">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.app-section {
  display: grid;

  &:nth-of-type(n + 2) {
    padding-block: var(--app-pading-section-mobile);
  }

  > .content {
    padding-inline: 15px;
    max-width: var(--app-inline-size);
    justify-self: center;
    width: 100%;
  }

  &:nth-of-type(n + 2):nth-of-type(odd) {
    background-color: var(--sys-color-background-secondary);
  }
}

@media (min-width: 768px) {
  .app-section {
    &:nth-of-type(n + 2) {
      padding-block: var(--app-pading-section);
    }
  }
}
</style>
