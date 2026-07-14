<script lang="ts" setup>
import AppSection from '@/features/layout/AppSection.vue'
import EyebrowMT from '@/ui/EyebrowMT.vue'
import img1 from '@/assets/images/gallery/oden-gallery-1.jpeg'
import img2 from '@/assets/images/gallery/oden-gallery-2.jpeg'
import img3 from '@/assets/images/gallery/oden-gallery-3.jpeg'
import img4 from '@/assets/images/gallery/oden-gallery-4.jpeg'
import img5 from '@/assets/images/gallery/oden-gallery-5.jpeg'

interface Props {
  id: number
  src: string
  alt: string
}

const images: Props[] = [
  { id: 1, src: img1, alt: 'img1' },
  { id: 2, src: img2, alt: 'img2' },
  { id: 3, src: img3, alt: 'img3' },
  { id: 4, src: img4, alt: 'img4' },
  { id: 5, src: img5, alt: 'img5' },
]
</script>

<template>
  <AppSection class="app-gallery">
    <EyebrowMT>Galerie atelier</EyebrowMT>
    <div class="container-gallery">
      <img
        v-for="image in images"
        :key="image.id"
        :src="image.src"
        :alt="image.alt"
        class="image-gallery"
      />
    </div>
  </AppSection>
</template>

<style scoped>
:deep(.app-gallery) {
  display: grid;
  gap: 20px;

  .container-gallery {
    display: flex;
    overflow-x: scroll;
    gap: 20px;

    &::-webkit-scrollbar {
      display: none;
    }

    & {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }

    .image-gallery {
      flex-shrink: 0;
      object-fit: cover;
      width: 350px;
      height: 200px;
    }
  }
}
</style>
