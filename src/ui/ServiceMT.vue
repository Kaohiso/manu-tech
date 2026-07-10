<script lang="ts" setup>
import { CarIcon, type LucideIcon } from '@lucide/vue'
import ItemService from '@/ui/ItemService.vue'

interface dataItemListProps {
  iconName: LucideIcon
  text: string
}

interface Props {
  direction?: 'img-right' | 'img-left'
  iconH3: LucideIcon
  titleH3: string
  captionH3: string
  pH3: string
  itemList: dataItemListProps[]
  titleH4: string
  captionH4: string
  price: string
  captionPrice: string
}

const { direction = 'img-right' } = defineProps<Props>()
</script>

<template>
  <article class="container-content" :class="direction">
    <div class="article-left">
      <div class="container-article-title">
        <component :is="iconH3" class="icon-title" :color="'var(--sys-color-text-primary)'" />
        <div>
          <h3>{{ titleH3 }}</h3>
          <span>{{ captionH3 }}</span>
        </div>
      </div>
      <p>
        {{ pH3 }}
      </p>
      <div class="list-services">
        <ItemService v-for="item in itemList">
          <template #icon-list>
            <component :is="item.iconName" class="icon-list" />
          </template>
          <template #text>{{ item.text }}</template>
        </ItemService>
      </div>
    </div>
    <div class="article-right">
      <img src="../assets/images/oden-services.jpeg" class="image-service" />
      <div class="under-image-service">
        <div class="container-title">
          <h4>{{ titleH4 }}</h4>
          <span>{{ captionH4 }}</span>
        </div>
        <div class="container-price">
          <span class="price">{{ price }}</span>
          <span class="caption-price">{{ captionPrice }}</span>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="css" scoped>
.container-content {
  display: grid;
  text-align: start;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  column-gap: 50px;

  &.img-left .article-left {
    order: 1;
  }

  &.img-left .article-right {
    order: -1;
  }

  .article-left {
    display: grid;
    row-gap: 30px;

    .container-article-title {
      display: inline-flex;
      gap: 15px;
      align-items: center;

      .icon-title {
        padding: 10px;
        width: 20px;
        height: 20px;
        border-radius: var(--app-radius-icon);
        background-color: var(--sys-color-primary);
      }
    }

    .list-services {
      display: grid;
      justify-content: start;
      grid-template-columns: 50% 50%;
      row-gap: 10px;
      column-gap: 10px;
    }
  }

  .article-right {
    display: grid;
    align-self: center;
    height: fit-content;

    .image-service {
      width: 100%;
      max-height: 350px;
      object-fit: cover;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .under-image-service {
      display: flex;
      background-color: var(--app-background-on-background);
      justify-content: space-between;
      padding: 20px;
      border-bottom-left-radius: var(--app-radius);
      border-bottom-right-radius: var(--app-radius);

      .container-title {
        display: grid;
        align-items: flex-end;
      }

      .container-price {
        display: grid;
        justify-content: end;

        .price {
          justify-self: end;
          font-family: var(--ref-font-family-condensed);
          font-size: var(--ref-size-32);
          font-weight: var(--ref-font-weight-black);
          color: var(--sys-color-primary);
        }

        .caption-price {
          font-family: var(--sys-font-family-caption);
          font-size: var(--sys-font-size-caption);
          color: var(--sys-color-text-caption);
        }
      }
    }
  }
}
</style>
