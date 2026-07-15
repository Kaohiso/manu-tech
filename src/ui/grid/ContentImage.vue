<script setup lang="ts">
import ChipMT from '@/ui/ChipMT.vue'

interface PropsImages {
  content: {
    title: string
    images: string[]
  }
}

defineProps<PropsImages>()
</script>

<template>
  <div class="content-image">
    <div v-for="image in content.images" class="container-image">
      <img :src="image" class="image-partner" />
    </div>
  </div>
</template>

<style scoped>
.content-image {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  gap: 15px;
  padding: 0 5px;

  .container-image {
    display: grid;
    align-items: center;
    background-color: var(--sys-color-background);
    border: 2px solid hsl(from var(--ref-color-white) h s l / 0.05);
    padding: 12px;
    border-radius: var(--app-radius);
    justify-content: center;

    .image-partner {
      border-radius: 0;
      object-fit: cover;
    }
  }
}
</style>
