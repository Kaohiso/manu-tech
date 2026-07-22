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
  justify-content: center;

  &:nth-of-type(n + 2) {
    padding-block: var(--app-pading-section);
  }

  > .content {
    padding-inline: 15px;
    max-width: var(--app-inline-size);
  }

  &:nth-of-type(n + 2):nth-of-type(odd) {
    background-color: var(--sys-color-background-secondary);
  }
}
</style>
